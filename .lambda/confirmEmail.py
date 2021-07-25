import boto3
import time
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    
    # REMOVED LINE
    email_tbl = boto3.resource('dynamodb').Table('REMOVED')
    
    try:
        item = email_tbl.get_item(Key={'id': 'REMOVED'})['Item']
        if item["verified"] is False:
            email_tbl.update_item(
                Key={'id': hash224},
                UpdateExpression="SET verified = :v, myTTL = :t",
                ExpressionAttributeValues={
                    ':v': True,
                    ':t': 12345 } # REMOVED
                )
            return "Verified successfully!"
        else:
            return "Email already verified!"
    except Exception as e:
        logger.error(e)
        return "Invalid Link!"
        
    return "Unpexected Error! Let the developer know."
