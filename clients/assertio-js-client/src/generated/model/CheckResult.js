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

import ApiClient from '../ApiClient';

/**
 * The CheckResult model module.
 * @module model/CheckResult
 * @version 0.0.1
 */
class CheckResult {
    /**
     * Constructs a new <code>CheckResult</code>.
     * @alias module:model/CheckResult
     */
    constructor() { 
        
        CheckResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckResult} obj Optional instance to populate.
     * @return {module:model/CheckResult} The populated <code>CheckResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckResult();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CheckResult.StatusEnum} status
 */
CheckResult.prototype['status'] = undefined;

/**
 * @member {String} message
 */
CheckResult.prototype['message'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CheckResult['StatusEnum'] = {

    /**
     * value: "Passed"
     * @const
     */
    "Passed": "Passed",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Warning"
     * @const
     */
    "Warning": "Warning"
};



export default CheckResult;

