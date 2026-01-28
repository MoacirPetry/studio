### Set up GitHub Actions workflow for automated deployments

Create this file `.github/workflows/deploy.yml` in your GitHub repository:

```yaml
name: Deploy React App to S3

on:
  push:
    branches:
      - main

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build React app
        run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::<ACCOUNT_ID>:role/<ROLE_NAME>
          aws-region: us-east-1

      - name: Deploy to S3
        run: |
          aws s3 sync dist/ s3://your-bucket-name \
            --delete \
            --cache-control "max-age=31536000"
```

Now every time you push to the `main` branch, GitHub Actions will automatically build your React app and deploy it to your specified S3 bucket. Make sure to replace `<ACCOUNT_ID>`, `<ROLE_NAME>`, and `your-bucket-name` with your actual AWS account ID, IAM role name, and S3 bucket name respectively.

> Note: This is only possible due the **IAM Role** created in the previous step which allows GitHub Actions to assume the role and deploy to your S3 bucket securely.
