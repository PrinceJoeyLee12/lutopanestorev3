const findResponseByQueryType = (type, queries, response) => {
  const indexOfQueryByType = queries?.findIndex((query) => query.type === type);
  if (indexOfQueryByType !== -1) {
    return response?.[indexOfQueryByType] || null;
  }
  return null;
};

module.exports = {
  ...require('./errorResponder'),
  ...require('./graphqlRequester'),
  findResponseByQueryType,
};
