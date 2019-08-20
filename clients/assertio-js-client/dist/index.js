"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _url = require("url");

var _generated = require("./generated");

var _assert2 = require("assert");

var _operations = _interopRequireDefault(require("./operations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var assertio =
/*#__PURE__*/
function () {
  function assertio(token, server) {
    _classCallCheck(this, assertio);

    this.api = new _generated.DefaultApi();
    this.api.apiClient.authentications['bearerAuth'].accessToken = token;
    if (server) this.api.apiClient.basePath = server;
  }

  _createClass(assertio, [{
    key: "assertEquals",
    value: function assertEquals(left, right, checkId, callback) {
      return this._assert(left, right, checkId, callback, _operations["default"].EQUALS);
    }
  }, {
    key: "assertNotEquals",
    value: function assertNotEquals(left, right, checkId, callback) {
      return this._assert(left, right, checkId, callback, _operations["default"].NOTEQUALS);
    }
  }, {
    key: "assertGreater",
    value: function assertGreater(left, right, checkId, callback) {
      return this._assert(left, right, checkId, callback, _operations["default"].GREATERTHAN);
    }
  }, {
    key: "assertLower",
    value: function assertLower(left, right, checkId, callback) {
      return this._assert(left, right, checkId, callback, _operations["default"].LESSTHAN);
    }
  }, {
    key: "validateEquals",
    value: function validateEquals(right, checkId, callback) {
      return this._assert(null, right, checkId, callback, _operations["default"].EQUALS);
    }
  }, {
    key: "_assert",
    value: function _assert(left, right, checkId, callback, operation) {
      var _this = this;

      var check = new _generated.Check();
      check.timestamp = new Date().toISOString();
      check.uname = checkId;
      check.leftCompareObj = this.normalize(left);
      check.rightCompareObj = this.normalize(right);
      check.operator = operation;
      var opts = {};
      opts['check'] = check;

      if (callback && typeof callback === 'function') {
        // Async
        this.api.checkPost(opts, function (e, d, r) {
          if (e) {
            throw new Error(e);
          } else if (r.statusCode !== 200) {
            throw new Error(r);
          } else if (d.status !== 'Passed') {
            throw new _assert2.AssertionError(d);
          } else callback(d);
        });
      } else return new Promise(function (resolve, reject) {
        //Promises
        _this.api.checkPost(opts, function (e, d, r) {
          if (e) reject(e);else if (r.statusCode !== 200) reject(r);else if (d.status !== 'Passed') reject(new _assert2.AssertionError(d));else resolve(d);
        });
      });
    }
  }, {
    key: "normalize",
    value: function normalize(obj) {
      if (obj === null) return {};
      if (obj instanceof Map || obj instanceof Set) return obj;
      var ret = {};
      ret[_typeof(obj)] = obj;
      return ret;
    }
  }]);

  return assertio;
}();

exports["default"] = assertio;