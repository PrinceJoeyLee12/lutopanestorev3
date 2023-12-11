const { graphqlRequester } = require('../../requestHelper');

exports.createUpdateDynamoData = async (ctx, optionConfig, query, input = {}, otherResponseObj = null) => {
  const createUpdateDynamoData = {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables: {
        input,
      },
    }),
  };

  return await graphqlRequester(ctx, createUpdateDynamoData, optionConfig, otherResponseObj);
};
