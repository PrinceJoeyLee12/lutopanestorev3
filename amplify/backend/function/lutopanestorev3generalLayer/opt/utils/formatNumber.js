const numeral = require('numeral');
// const { getCurrencySymbol } = require('./currencyHelper');

// ----------------------------------------------------------------------

exports.fCurrency = (number, currency = '₱') => {
  return `${currency} ${numeral(number).format(Number.isInteger(number) ? '0,0' : '0,0.00')}`;
};

exports.fPercent = (number) => {
  return numeral(number / 100).format('0.0%');
};

exports.fNumber = (number) => {
  return numeral(number).format();
};

exports.fShortenNumber = (number) => {
  return numeral(number).format('0.00a').replace('.00', '');
};

exports.fData = (number) => {
  return numeral(number).format('0.0 b');
};

exports.fromCentsFormat = (amountInCent) => {
  return amountInCent / 100;
};
