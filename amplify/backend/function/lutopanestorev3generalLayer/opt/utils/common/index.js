"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _stringHelper = require("./stringHelper");
Object.keys(_stringHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _stringHelper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _stringHelper[key];
    }
  });
});