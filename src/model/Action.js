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

/**
 * The Action model module.
 * @module model/Action
 * @version 1.1.3
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * @alias module:model/Action
     * @param type {String} 
     */
    constructor(type) { 
        
        Action.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type || '';
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Action} obj Optional instance to populate.
     * @return {module:model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
                obj = ApiClient.convertToType(data, obj['type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 * @default ''
 */
Action.prototype['type'] = '';






export default Action;

