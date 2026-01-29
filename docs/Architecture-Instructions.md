# Architecture Setup Instructions

This guide will walk you through setting up a full-stack application deployment pipeline to AWS using S3, CloudFront, Lambda, API Gateway, and GitHub Actions.

## Prerequisites

- An AWS account with appropriate permissions
- A GitHub repository containing your React application
- AWS CLI and AWS SAM CLI installed
- Basic knowledge of AWS services (S3, CloudFront, IAM, Lambda, API Gateway)

## Setup Order

Follow these guides in the specified order to properly configure your infrastructure:

### 1. [S3 Bucket Setup](./1-S3.md)

Start by creating and configuring your S3 bucket that will store your React application files. This is the foundation of your static website hosting infrastructure.

### 2. [CloudFront Distribution](./2-CloudFront.md)

Create a CloudFront distribution to serve your S3 content over HTTPS with improved performance and security through CDN caching.

### 3. [IAM Role Configuration](./3-IAM-Role.md)

Set up an IAM role with OpenID Connect (OIDC) to allow GitHub Actions to securely deploy to your S3 bucket without storing long-term credentials.

### 4. [GitHub Actions Workflow](./4-GitHubActions.md)

Configure the automated deployment pipeline that builds and deploys your React application whenever changes are pushed to the main branch.

### 5. [Lambda Functions](./5-Lambda.md)

Create AWS Lambda functions using AWS SAM (Serverless Application Model) to handle backend logic and API requests. This includes setting up IAM users and policies for deployment.

### 6. [API Gateway](./6-API-Gateway.md)

Configure API Gateway to expose your Lambda functions as RESTful APIs with API key authentication and usage plans for security.

## Architecture Overview

```
GitHub Repository (Push to main)
        ↓
GitHub Actions (Build & Deploy)
        ↓
AWS S3 Bucket (Frontend Storage)
        ↓
CloudFront CDN (Frontend Distribution)
        ↓
End Users (HTTPS Access) ←→ API Gateway → Lambda Functions
```

## Important Notes

- **Frontend Security**: Keep all public access blocked on S3; access should only be through CloudFront
- **HTTPS**: Always use HTTPS via CloudFront, never enable S3 static website hosting
- **Credentials**: Use OIDC/IAM roles instead of storing AWS credentials in GitHub
- **Backend Security**: Use API Keys and usage plans to secure your API Gateway endpoints
- **Infrastructure as Code**: Use AWS SAM and CloudFormation for managing Lambda and API resources
- **Testing**: Test each component individually before moving to the next step

## Next Steps

Once you've completed all six setup guides, you will have:

- A React frontend automatically deployed to AWS via GitHub Actions
- Backend Lambda functions deployed via AWS SAM
- Secure API endpoints protected with API keys
- A complete full-stack serverless application on AWS
