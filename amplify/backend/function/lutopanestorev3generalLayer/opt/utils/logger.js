exports.logger = (functionName = '', description = '', logType = 'SUCCESS', data = {}) => {
  return console.log(`${functionName} -> ${description} ${logType}: -> ${JSON.stringify(data)}`);
};
