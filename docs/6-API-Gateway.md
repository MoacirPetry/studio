### API Gateway Settings

- Go to API Gateway in AWS Console to verify the created API previously deployed with SAM (CloudFormation created it).
- Create an API Key and attach it to a usage plan (create it as well).
- After that, attach the usage plan to the deployed API and its stage (prod).
- Finally, use the API Key in your requests to access the API.

Example:

```bash
curl -X POST https://ykc1nvzujj.execute-api.us-east-1.amazonaws.com/Prod/submit-user-data \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR-API-KEY" \
  -d '{"username":"john_doe","email":"john@example.com"}'
```
