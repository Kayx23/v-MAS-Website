# MAS Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e52ce33-c46a-4d12-91d1-b5d1b3b53cf4/deploy-status)](https://app.netlify.com/sites/prodmactuary/deploys)
  prod: https://mactuary.ca

[![Netlify Status](https://api.netlify.com/api/v1/badges/650efd8a-9fab-4a0a-bb4c-f971def5b10b/deploy-status)](https://app.netlify.com/sites/devmactuary/deploys)
  dev : https://dev.mactuary.ca

[Sanity studio config](https://github.com/Kayx23/sanity-MAS-Website)

### 🍃 v1.1.0 new features
* Subscription signup & email double opt-in
* Unverified email automatic removal (TTL=1hr)
* Automatically insert custom unsubscribe URL for each user
* Two email endpoints for email distribution (prod & internal test)

## Mailing List Backend: AWS FaaS

Core Services Required: API Gateway, Lambda, DynamoDB, SES (prod), S3
* Lambda Runtime: `Python 3.8`

Other Services Used: IAM, SNS, CloudWatch

### Architecture

#### User Signup
![subscription](https://user-images.githubusercontent.com/39619599/124336766-4c1fc200-db6d-11eb-81ae-ac5ef504952d.png)

#### Email Distribution
![sned email](https://user-images.githubusercontent.com/39619599/124336767-4f1ab280-db6d-11eb-93cf-9e77de6710c4.png)
