### Creating an AWS Lambda Function

🥇 AWS SAM (most common, AWS-native)

AWS SAM (Serverless Application Model) is a framework for building serverless applications. It simplifies the process of creating and deploying AWS Lambda functions along with other AWS resources.

1. **Install AWS SAM CLI**: Make sure you have the AWS SAM CLI installed on your machine. You can find installation instructions in the [AWS SAM documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html).

2. **Initialize a New SAM Application**: Use the following command to create a new SAM application:

   ```bash
   sam init
   ```

   Follow the prompts to choose a runtime (e.g., Python, Node.js, etc.) and a template for your Lambda function.

3. **Build and Deploy**: Use the following commands to build and deploy your Lambda function:

   ```bash
   sam build
   sam deploy --guided
   ```

# Edit your AWS credentials file

`vi ~/.aws/credentials`

Note: If you do not have an user with credentials, go to IAM, create an user. Create a new policy and attach to the user. Then generate access keys for that user and add to your credentials file: ~/.aws/credentials.

Policy for this user:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "cloudformation:*",
        "lambda:*",
        "apigateway:*",
        "s3:*",
        "iam:GetRole",
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:PutRolePolicy",
        "iam:AttachRolePolicy",
        "iam:DeleteRolePolicy",
        "iam:DetachRolePolicy",
        "iam:PassRole",
        "iam:GetRolePolicy",
        "iam:TagRole",
        "iam:UntagRole",
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
```

Name of the poloicy: allow-moa-lambda-deploy

It's important to have the **cloudformation** cause it creates all the resources as a stack.

Verify your credentials by running: `aws sts get-caller-identity`

After deployed with `sam deploy --guided` successfully. Go to [API-Gateway.md](docs/6-API-Gateway.md) to continue with the API Gateway setup.
