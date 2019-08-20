"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Check = _interopRequireDefault(require("../model/Check"));

var _CheckResult = _interopRequireDefault(require("../model/CheckResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.1
*/
var DefaultApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the checkIdGet operation.
   * @callback module:api/DefaultApi~checkIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Check} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get check
   * @param {String} id Check id to get
   * @param {module:api/DefaultApi~checkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Check}
   */


  _createClass(DefaultApi, [{
    key: "checkIdGet",
    value: function checkIdGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling checkIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Check["default"];
      return this.apiClient.callApi('/check/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checkPost operation.
     * @callback module:api/DefaultApi~checkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post check data for assertion
     * @param {Object} opts Optional parameters
     * @param {module:model/Check} opts.check 
     * @param {module:api/DefaultApi~checkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckResult}
     */

  }, {
    key: "checkPost",
    value: function checkPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['check'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckResult["default"];
      return this.apiClient.callApi('/check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the historyGet operation.
     * @callback module:api/DefaultApi~historyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Check>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get check
     * @param {module:api/DefaultApi~historyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Check>}
     */

  }, {
    key: "historyGet",
    value: function historyGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Check["default"]];
      return this.apiClient.callApi('/history', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;