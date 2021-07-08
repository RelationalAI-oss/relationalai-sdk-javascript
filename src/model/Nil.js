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
import CollectProblemsActionAllOf from './CollectProblemsActionAllOf';
import LinkedList from './LinkedList';

/**
 * The Nil model module.
 * @module model/Nil
 * @version 1.1.3
 */
class Nil {
    /**
     * Constructs a new <code>Nil</code>.
     * @alias module:model/Nil
     * @extends module:model/LinkedList
     * @implements module:model/LinkedList
     * @implements module:model/CollectProblemsActionAllOf
     * @param type {String} 
     */
    constructor(type) { 
        LinkedList.initialize(this, type);CollectProblemsActionAllOf.initialize(this);
        Nil.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Nil</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Nil} obj Optional instance to populate.
     * @return {module:model/Nil} The populated <code>Nil</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Nil();
            LinkedList.constructFromObject(data, obj);
            LinkedList.constructFromObject(data, obj);
            CollectProblemsActionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('dummy')) {
                obj['dummy'] = ApiClient.convertToType(data['dummy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dummy
 */
Nil.prototype['dummy'] = undefined;


// Implement LinkedList interface:
/**
 * @member {String} type
 * @default ''
 */
LinkedList.prototype['type'] = '';
// Implement CollectProblemsActionAllOf interface:
/**
 * @member {String} dummy
 */
CollectProblemsActionAllOf.prototype['dummy'] = undefined;




export default Nil;

