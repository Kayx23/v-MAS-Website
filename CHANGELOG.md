
# Changelog

## v0.5.0

* Add the MAS website preloader/animation
* Integrate with CMS [Sanity Studio](https://github.com/mactuary/MAS-Website-Sanity) to update Meet the Team page information

## v1.1.0

* Support email subscription and subscription cancellation with AWS serverless
* Support double opt-in mechanism for subscription with automatic removal of unverified email (TTL=1hr)
* Add two API endpoints for email distribution; one for prod distribution and one for internal testing

### AWS Serverless Details

Core Services: API Gateway, Lambda, DynamoDB, SES (prod), S3

Other Services: IAM, SNS, CloudWatch

#### User Signup
![subscription](https://user-images.githubusercontent.com/39619599/124336766-4c1fc200-db6d-11eb-81ae-ac5ef504952d.png)

#### Email Distribution
![sned email](https://user-images.githubusercontent.com/39619599/124336767-4f1ab280-db6d-11eb-93cf-9e77de6710c4.png)
