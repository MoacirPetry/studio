S3 + CloudFront: Static Website Hosting
↓
API Gateway
↓
Lambda: IngestUserData
├─ Validate input
├─ Store user data (username+email) in DynamoDB (status = RECEIVED)
└─ Send message to SQS (user_id / correlation_id)
↓
SQS: ExternalProcessor
↓
Lambda: YouTubeAPI
├─ Call external API
├─ Update DynamoDB (status = PROCESSED)
└─ Send email via SES
↓
SES: Send Email
