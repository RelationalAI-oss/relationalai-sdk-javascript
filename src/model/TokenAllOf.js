/**
 * RelationalAI SDK
 * This is a Client SDK for RelationalAI
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support@relational.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Range from './Range';

/**
 * The TokenAllOf model module.
 * @module model/TokenAllOf
 * @version 1.1.3
 */
class TokenAllOf {
    /**
     * Constructs a new <code>TokenAllOf</code>.
     * @alias module:model/TokenAllOf
     * @param range {module:model/Range} 
     * @param value {String} 
     */
    constructor(range, value) { 
        
        TokenAllOf.initialize(this, range, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, range, value) { 
        obj['range'] = range;
        obj['value'] = value || '';
    }

    /**
     * Constructs a <code>TokenAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenAllOf} obj Optional instance to populate.
     * @return {module:model/TokenAllOf} The populated <code>TokenAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenAllOf();

            if (data.hasOwnProperty('range')) {
                obj['range'] = Range.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Range} range
 */
TokenAllOf.prototype['range'] = undefined;

/**
 * @member {String} value
 * @default ''
 */
TokenAllOf.prototype['value'] = '';






export default TokenAllOf;

