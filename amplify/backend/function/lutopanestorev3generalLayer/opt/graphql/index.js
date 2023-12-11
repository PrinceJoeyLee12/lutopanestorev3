"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _customQueries = require("./customQueries");
Object.keys(_customQueries).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customQueries[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _customQueries[key];
    }
  });
});
var _mutations = require("./mutations");
Object.keys(_mutations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mutations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mutations[key];
    }
  });
});
var _queries = require("./queries");
Object.keys(_queries).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _queries[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queries[key];
    }
  });
});
var _subscriptions = require("./subscriptions");
Object.keys(_subscriptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subscriptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subscriptions[key];
    }
  });
});