const fetch = require('node-fetch');
const { Request } = require('node-fetch');
const { logger } = require('../utils/logger');
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// ctx can be null
exports.graphqlRequester = async (
  ctx,
  queryOptions,
  optionConfig = () => {},
  otherResponseObj = null,
  { functionName = '', description = '' }
) => {
  const { headers, endPoint: GRAPHQL_ENDPOINT } = optionConfig(ctx);
  const queryData = {
    ...queryOptions,
    headers,
  };

  logger(`${functionName}`, 'queryData', 'INFO', queryData);

  const request = new Request(GRAPHQL_ENDPOINT, queryData);
  try {
    const res = await fetch(request);
    logger(`${functionName}`, `${description}`, 'SUCCESS', res);
  } catch (error) {
    logger(`${functionName}`, `${description}`, 'ERROR', error);
  }
  const responseJson = await res.json();

  logger(`${functionName}`, `responseJson`, 'INFO', responseJson);

  return {
    ...responseJson,
    data: {
      ...responseJson.data,
      attributes: otherResponseObj,
    },
    errors: [...(responseJson?.errors && responseJson?.errors?.length ? responseJson?.errors : [])],
  };
};

exports.recursiveQueryFunction = async (
  ctx,
  requestBody,
  queryFieldName,
  optionConfig,
  limit = 100,
  responseList = [],
  numberOfLoops = 1,
  nextToken = null
) => {
  const data = {
    [queryFieldName]: {
      items: responseList,
      numberOfLoops,
      nextToken: null,
    },
  };

  const bodyConstructor = {
    ...requestBody,
    variables: {
      ...requestBody.variables,
      limit,
      ...(nextToken && { nextToken }),
    },
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(bodyConstructor),
  };

  const response = await graphqlRequester(ctx, options, optionConfig);

  const items = response?.data?.[queryFieldName]?.items || [];
  const token = response?.data?.[queryFieldName]?.nextToken;

  const concatenatedItems = [...responseList, ...items];

  if (items?.length) {
    data[queryFieldName].items = concatenatedItems;
  }

  if (!token || !items?.length) {
    return { data };
  }

  return recursiveQueryFunction(
    ctx,
    requestBody,
    queryFieldName,
    optionConfig,
    limit,
    concatenatedItems,
    numberOfLoops++,
    token
  );
};
