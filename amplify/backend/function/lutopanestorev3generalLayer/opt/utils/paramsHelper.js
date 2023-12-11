exports.getParamsValue = (key, params) => {
  return params.find((param) => param.Name.includes(key))?.Value ?? null;
};
