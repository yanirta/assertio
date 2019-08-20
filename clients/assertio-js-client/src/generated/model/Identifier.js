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
 * The Identifier model module.
 * @module model/Identifier
 * @version 0.0.1
 */
class Identifier {
    /**
     * Constructs a new <code>Identifier</code>.
     * @alias module:model/Identifier
     */
    constructor() { 
        
        Identifier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Identifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Identifier} obj Optional instance to populate.
     * @return {module:model/Identifier} The populated <code>Identifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Identifier();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
Identifier.prototype['key'] = undefined;

/**
 * @member {String} value
 */
Identifier.prototype['value'] = undefined;






export default Identifier;

