const NumberHelper = require('./formatNumber');
const ParamsHelper = require('./paramsHelper');
const logger = require('./logger');

const retainAlphaNumericCharInString = (str, toReplace = '') => str.replace(/[^a-zA-Z0-9]/g, toReplace);

module.exports = {
  retainAlphaNumericCharInString,
  ...require('./common/index'),
  ...logger,
  NumberHelper,
  ParamsHelper,
};
