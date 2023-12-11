const GRAPHQL_ENDPOINT = process.env.API_LUTOPANESTOREV3_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_LUTOPANESTOREV3_GRAPHQLAPIKEYOUTPUT;

exports.optionConfig = (ctx) => {
  const config = {
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    endPoint: GRAPHQL_ENDPOINT,
  };
  return config;
};
