/**
 * Assertio - Assertion library API
 * Distributed assertion library
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Check from '../model/Check';
import CheckResult from '../model/CheckResult';

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.1
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    checkIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling checkIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Check;
      return this.apiClient.callApi(
        '/check/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    checkPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['check'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CheckResult;
      return this.apiClient.callApi(
        '/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    historyGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Check];
      return this.apiClient.callApi(
        '/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
