import boto3
import uuid
import hashlib
import logging
import time
from botocore.exceptions import ClientError

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

email_tbl = boto3.resource('dynamodb').Table('REMOVED')

id = str(uuid.uuid4())
# REMOVED LINE

def write_to_db(fname,lname,email):
    
    response = email_tbl.put_item(
      Item={
          'id': hash224,
          'fname':fname,
          'lname':lname,
          'email': email,
          'verified': False,
          'myTTL': 'REMOVED',
        }
    )
    return response

def send_confirmation_email(email):
    SENDER = "McMaster Actuarial Society <REMOVED>"
    RECIPIENT = email
    AWS_REGION = "REMOVED"
    CHARSET = "UTF-8"
    
    SUBJECT = "MAS Subscription Confirmation"
    
    BODY_HTML = f"""<html>
    <head></head>
    <body>
    <p>Hello,&nbsp;</p>
    <p>You have recently subscribed to McMaster Actuarial Society (MAS). Please confirm your subscription here: </p>
    <a href="REMOVED">REMOVED/a>
    <p>If you do no recognize this activity, click <a href="REMOVED">here</a> to remove your information from us.</p>
    <br>
    <p>Thank you,&nbsp;</p>
    <p>McMaster Actuarial Society (MAS)&nbsp;</p>
    <p><span style="color: #808080;">===========================================</span></p>
    <p><span style="color: #808080;">This is an automated email. Do no reply.&nbsp;</span></p>
    </body>
    </html>
                """ 
                
    client = boto3.client('ses',region_name=AWS_REGION)
    
    try:
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
    
        )
        
        logger.info(f"Email successfully sent to {email}")
    
    except ClientError as e:
        logger.info(e.response['Error']['Message'])
    
    return None

def lambda_handler(event, context):
    
    email = event["queryStringParameters"]["email"]
    fname = event["queryStringParameters"]["fname"]
    lname = event["queryStringParameters"]["lname"]
    
    for item in email_tbl.scan()["Items"]:
        if item["email"] == email:
            email_tbl.delete_item(Key={'id': item["id"]})
            
    r = write_to_db(fname,lname,email)
    logger.info(r)
    
    send_confirmation_email(email)
    
    return r
