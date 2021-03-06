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
import RelKey from './RelKey';

/**
 * The ListEdbActionResultAllOf model module.
 * @module model/ListEdbActionResultAllOf
 * @version 1.1.3
 */
class ListEdbActionResultAllOf {
    /**
     * Constructs a new <code>ListEdbActionResultAllOf</code>.
     * @alias module:model/ListEdbActionResultAllOf
     */
    constructor() { 
        
        ListEdbActionResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListEdbActionResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListEdbActionResultAllOf} obj Optional instance to populate.
     * @return {module:model/ListEdbActionResultAllOf} The populated <code>ListEdbActionResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListEdbActionResultAllOf();

            if (data.hasOwnProperty('rels')) {
                obj['rels'] = ApiClient.convertToType(data['rels'], [RelKey]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RelKey>} rels
 */
ListEdbActionResultAllOf.prototype['rels'] = undefined;






export default ListEdbActionResultAllOf;

