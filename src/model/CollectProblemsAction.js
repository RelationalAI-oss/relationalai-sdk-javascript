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
import Action from './Action';
import CollectProblemsActionAllOf from './CollectProblemsActionAllOf';

/**
 * The CollectProblemsAction model module.
 * @module model/CollectProblemsAction
 * @version 1.1.3
 */
class CollectProblemsAction {
    /**
     * Constructs a new <code>CollectProblemsAction</code>.
     * @alias module:model/CollectProblemsAction
     * @extends module:model/Action
     * @implements module:model/Action
     * @implements module:model/CollectProblemsActionAllOf
     * @param type {String} 
     */
    constructor(type) { 
        Action.initialize(this, type);CollectProblemsActionAllOf.initialize(this);
        CollectProblemsAction.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>CollectProblemsAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectProblemsAction} obj Optional instance to populate.
     * @return {module:model/CollectProblemsAction} The populated <code>CollectProblemsAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectProblemsAction();
            Action.constructFromObject(data, obj);
            Action.constructFromObject(data, obj);
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
CollectProblemsAction.prototype['dummy'] = undefined;


// Implement Action interface:
/**
 * @member {String} type
 * @default ''
 */
Action.prototype['type'] = '';
// Implement CollectProblemsActionAllOf interface:
/**
 * @member {String} dummy
 */
CollectProblemsActionAllOf.prototype['dummy'] = undefined;




export default CollectProblemsAction;

