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
import AbstractProblem from './AbstractProblem';

/**
 * The CollectProblemsActionResultAllOf model module.
 * @module model/CollectProblemsActionResultAllOf
 * @version 1.1.3
 */
class CollectProblemsActionResultAllOf {
    /**
     * Constructs a new <code>CollectProblemsActionResultAllOf</code>.
     * @alias module:model/CollectProblemsActionResultAllOf
     */
    constructor() { 
        
        CollectProblemsActionResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectProblemsActionResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectProblemsActionResultAllOf} obj Optional instance to populate.
     * @return {module:model/CollectProblemsActionResultAllOf} The populated <code>CollectProblemsActionResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectProblemsActionResultAllOf();

            if (data.hasOwnProperty('problems')) {
                obj['problems'] = ApiClient.convertToType(data['problems'], [AbstractProblem]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AbstractProblem>} problems
 */
CollectProblemsActionResultAllOf.prototype['problems'] = undefined;






export default CollectProblemsActionResultAllOf;

