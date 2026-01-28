### Create a CloudFront distribution to consume S3 bucket

Create a CloudFront distribution:

- In General settings (Default root object), set the default root object to `index.html`.
- Security, let the Web Application Firewall (WAF) enabled.
- Origin settings:
  - Origin Domain: Select your S3 bucket from the dropdown.
  - Origin Access: Origin access control settings, create a new one referencing S3.
  - Behaviors:
    - Select the Origin and origin groups with the S3 one.
    - Compress objects automatically: Yes
    - Viewer protocol policy: Redirect HTTP to HTTPS
    - Cache policy: CachingOptimized

After creating the distribution, create an [IAM Role](./IAM-Role.md).
