import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Required for CORS
    };

    try {
        const body = JSON.parse(event.body || '{}');
        const { username, email } = body;

        if (!username || !email) {
            return {
                statusCode: 400,
                headers, // Add headers here
                body: JSON.stringify({
                    message: 'Missing required fields: username and email',
                }),
            };
        }

        return {
            statusCode: 200,
            headers, // Add headers here
            body: JSON.stringify({
                message: 'Data received successfully',
                username: username,
                email: email,
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            headers, // Add headers here
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
