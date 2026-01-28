# Architecture Setup Instructions

This guide will walk you through setting up a React application deployment pipeline to AWS using S3, CloudFront, and GitHub Actions.

## Prerequisites

- An AWS account with appropriate permissions
- A GitHub repository containing your React application
- Basic knowledge of AWS services (S3, CloudFront, IAM)

## Setup Order

Follow these guides in the specified order to properly configure your infrastructure:

### 1. [S3 Bucket Setup](./S3.md)

Start by creating and configuring your S3 bucket that will store your React application files. This is the foundation of your static website hosting infrastructure.

### 2. [CloudFront Distribution](./CloudFront.md)

Create a CloudFront distribution to serve your S3 content over HTTPS with improved performance and security through CDN caching.

### 3. [IAM Role Configuration](./IAM-Role.md)

Set up an IAM role with OpenID Connect (OIDC) to allow GitHub Actions to securely deploy to your S3 bucket without storing long-term credentials.

### 4. [GitHub Actions Workflow](./GitHubActions.md)

Configure the automated deployment pipeline that builds and deploys your React application whenever changes are pushed to the main branch.

## Architecture Overview

```
GitHub Repository (Push to main)
        ↓
GitHub Actions (Build & Deploy)
        ↓
AWS S3 Bucket (Storage)
        ↓
CloudFront CDN (Distribution)
        ↓
End Users (HTTPS Access)
```

## Important Notes

- **Security**: Keep all public access blocked on S3; access should only be through CloudFront
- **HTTPS**: Always use HTTPS via CloudFront, never enable S3 static website hosting
- **Credentials**: Use OIDC/IAM roles instead of storing AWS credentials in GitHub
- **Testing**: Test each component individually before moving to the next step

## Next Steps

Once you've completed all four setup guides, your application will automatically deploy to AWS whenever you push changes to the main branch of your GitHub repository.
