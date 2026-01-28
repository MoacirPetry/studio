### Create an IAM Role for GitHub Actions to accept deployments on S3 bucket

Create IAM Role for GitHub Actions (OIDC).

**OpenID Connect** is an authentication protocol based on the OAuth 2.0 family of specifications. It allows clients to verify the identity of end-users based on the authentication performed by an authorization server.

In AWS IAM → Identity Providers → Add provider:

- Provider type: OpenID Connect
- Provider URL: `https://token.actions.githubusercontent.com`
- Audience: `sts.amazonaws.com`

#### Create IAM Role

Go to IAM → Roles → Create role: **Deploy-from-GitHub-to-AWS-S3**

Trusted entity: Web identity

Trust policy (IMPORTANT — scope it to your repo):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_USER/YOUR_REPO:*"
        }
      }
    }
  ]
}
```
