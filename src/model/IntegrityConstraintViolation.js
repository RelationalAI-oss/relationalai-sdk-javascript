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
import ICViolation from './ICViolation';
import IntegrityConstraintViolationAllOf from './IntegrityConstraintViolationAllOf';

/**
 * The IntegrityConstraintViolation model module.
 * @module model/IntegrityConstraintViolation
 * @version 1.1.3
 */
class IntegrityConstraintViolation {
    /**
     * Constructs a new <code>IntegrityConstraintViolation</code>.
     * @alias module:model/IntegrityConstraintViolation
     * @extends module:model/AbstractProblem
     * @implements module:model/AbstractProblem
     * @implements module:model/IntegrityConstraintViolationAllOf
     * @param type {String} 
     */
    constructor(type) { 
        AbstractProblem.initialize(this, type);IntegrityConstraintViolationAllOf.initialize(this);
        IntegrityConstraintViolation.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>IntegrityConstraintViolation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrityConstraintViolation} obj Optional instance to populate.
     * @return {module:model/IntegrityConstraintViolation} The populated <code>IntegrityConstraintViolation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrityConstraintViolation();
            AbstractProblem.constructFromObject(data, obj);
            AbstractProblem.constructFromObject(data, obj);
            IntegrityConstraintViolationAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], [ICViolation]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ICViolation>} sources
 */
IntegrityConstraintViolation.prototype['sources'] = undefined;


// Implement AbstractProblem interface:
/**
 * @member {String} type
 * @default ''
 */
AbstractProblem.prototype['type'] = '';
// Implement IntegrityConstraintViolationAllOf interface:
/**
 * @member {Array.<module:model/ICViolation>} sources
 */
IntegrityConstraintViolationAllOf.prototype['sources'] = undefined;




export default IntegrityConstraintViolation;

