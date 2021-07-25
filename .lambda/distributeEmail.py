import email
import json
import logging
import re
import boto3
from botocore.exceptions import ClientError

FORWARD_MAPPING = {
    'REMOVE@mactuary.ca': '',  
}

VERIFIED_FROM_EMAIL = 'REMOVE@mactuary.ca'
SUBJECT_PREFIX = ''
SES_INCOMING_BUCKET = 'REMOVE'
S3_PREFIX = 'REMOVE/'
s3 = boto3.client('s3')
ses = boto3.client('ses')

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

def get_email_list():
    tbl = boto3.resource('dynamodb').Table('REMOVE')
    email_list = []
    
    for item in tbl.scan()["Items"]:
        if item["verified"] is True:
            email_list.append(item["email"])
    return email_list
    

def lambda_handler(event, context):
    
    # ======= GET DL ========
    try:
        FORWARD_MAPPING['REMOVE@mactuary.ca'] = get_email_list()
    except: 
        logger.error('Error when loading email list!')
        return "Fatal: Error when loading email list"
    
    # ======= EMAIL =========
    record = event['Records'][0]
    assert record['eventSource'] == 'aws:ses'

    o = s3.get_object(Bucket=SES_INCOMING_BUCKET, Key=S3_PREFIX+record['ses']['mail']['messageId'])
    raw_mail = o['Body'].read()
    logger.info("body: {}".format(type(raw_mail)))
    #msg = raw_mail
    msg = email.message_from_bytes(raw_mail)
    logger.info("m: {}".format(msg))

    del msg['DKIM-Signature']
    del msg['Sender']
    del msg['Return-Path']
    del msg['Reply-To']
    
    # have to delete first; otherwise double signing
    del msg['To']
    msg['To'] = 'REMOVE@mcmaster.ca'
    
    # deleting original from; swap with verified MAIL FROM
    original_from = msg['From']
    del msg['From']
    msg['From'] = re.sub(r'\<.+?\>', '', original_from).strip() + ' <{}>'.format(VERIFIED_FROM_EMAIL)

    msg['Reply-To'] = VERIFIED_FROM_EMAIL
    msg['Return-Path'] = VERIFIED_FROM_EMAIL

    logger.info("subject prefix: {}".format(SUBJECT_PREFIX))
    if SUBJECT_PREFIX and SUBJECT_PREFIX.lower() not in msg.get('Subject').lower():
        new_subj = ' '.join([SUBJECT_PREFIX, msg.get('Subject', '')])
        del msg['Subject']
        msg['Subject'] = new_subj
        logger.info("new subj: {}".format(msg['Subject']))

    msg_string = msg.as_string()
    logger.info(msg_string)

    for recipient in record['ses']['receipt']['recipients']:
        logger.info("recipient: {}".format(recipient))
        forwards = FORWARD_MAPPING.get(recipient, '')
        if not forwards:
            logger.warning('Recipent <{}> is not found in forwarding map. Skipping recipient.'.format(recipient))
            continue

        for address in forwards: # list 
            logger.info("addr: {}".format(address))

            try:
                o = ses.send_raw_email(Source="REMOVE@mactuary.ca",Destinations=[address], RawMessage=dict(Data=msg_string))
                logger.info('Forwarded email for <{}> to <{}>. SendRawEmail response={}'.format(recipient, address, json.dumps(o)))
            except ClientError as e: logger.error('Client error while forwarding email for <{}> to <{}>: {}'.format(recipient, address, e))

