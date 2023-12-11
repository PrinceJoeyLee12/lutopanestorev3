"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmail = exports.toTitleCase = exports.insert = exports.encodePHPhoneNumber = exports.decodePHPhoneNumber = exports.capitalizerOfWords = exports.capitalizeFirstLetter = void 0;
const toTitleCase = phrase => {
  return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
exports.toTitleCase = toTitleCase;
const validateEmail = email => {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
exports.validateEmail = validateEmail;
const capitalizerOfWords = words => words.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
exports.capitalizerOfWords = capitalizerOfWords;
const capitalizeFirstLetter = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const insert = (str, index, value) => {
  return str.substr(0, index) + value + str.substr(index);
};
exports.insert = insert;
const encodePHPhoneNumber = (phoneNumber = '') => insert(phoneNumber.slice(2), 0, '+639');
exports.encodePHPhoneNumber = encodePHPhoneNumber;
const decodePHPhoneNumber = (phoneNumber = '') => insert(phoneNumber.slice(3), 0, '0');
exports.decodePHPhoneNumber = decodePHPhoneNumber;