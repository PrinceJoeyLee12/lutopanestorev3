/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["NUM_SALT_ROUND","JWT_SECRET_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_LUTOPANESTOREV3_GRAPHQLAPIENDPOINTOUTPUT
	API_LUTOPANESTOREV3_GRAPHQLAPIIDOUTPUT
	API_LUTOPANESTOREV3_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { resolvers } = require('./resolver');
const { params } = require('./constants');
const { SSMClient, GetParametersCommand } = require('@aws-sdk/client-ssm');

exports.handler = async (event) => {
  // Parameters
  const client = new SSMClient();
  const input = {
    Names: (Object.keys(params) ?? []).map((secretName) => process.env[secretName]),
    WithDecryption: true,
  };
  const command = new GetParametersCommand(input);
  const { Parameters } = await client.send(command);
  // End of Parameters
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event, Parameters);
    }
  }
  throw new Error('Resolver not found.');
};
