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
import ActionResult from './ActionResult';
import InstallActionAllOf from './InstallActionAllOf';
import Source from './Source';

/**
 * The ListSourceActionResult model module.
 * @module model/ListSourceActionResult
 * @version 1.1.3
 */
class ListSourceActionResult {
    /**
     * Constructs a new <code>ListSourceActionResult</code>.
     * @alias module:model/ListSourceActionResult
     * @extends module:model/ActionResult
     * @implements module:model/ActionResult
     * @implements module:model/InstallActionAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ActionResult.initialize(this, type);InstallActionAllOf.initialize(this);
        ListSourceActionResult.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>ListSourceActionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSourceActionResult} obj Optional instance to populate.
     * @return {module:model/ListSourceActionResult} The populated <code>ListSourceActionResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSourceActionResult();
            ActionResult.constructFromObject(data, obj);
            ActionResult.constructFromObject(data, obj);
            InstallActionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], [Source]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Source>} sources
 */
ListSourceActionResult.prototype['sources'] = undefined;


// Implement ActionResult interface:
/**
 * @member {String} type
 * @default ''
 */
ActionResult.prototype['type'] = '';
// Implement InstallActionAllOf interface:
/**
 * @member {Array.<module:model/Source>} sources
 */
InstallActionAllOf.prototype['sources'] = undefined;




export default ListSourceActionResult;

