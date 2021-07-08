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
import IntegrityConstraintProblemAllOf from './IntegrityConstraintProblemAllOf';

/**
 * The WorkspaceLoadProblem model module.
 * @module model/WorkspaceLoadProblem
 * @version 1.1.3
 */
class WorkspaceLoadProblem {
    /**
     * Constructs a new <code>WorkspaceLoadProblem</code>.
     * @alias module:model/WorkspaceLoadProblem
     * @extends module:model/AbstractProblem
     * @implements module:model/AbstractProblem
     * @implements module:model/IntegrityConstraintProblemAllOf
     * @param type {String} 
     * @param exception {String} 
     */
    constructor(type, exception) { 
        AbstractProblem.initialize(this, type);IntegrityConstraintProblemAllOf.initialize(this, exception);
        WorkspaceLoadProblem.initialize(this, type, exception);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, exception) { 
        obj['exception'] = exception || '';
    }

    /**
     * Constructs a <code>WorkspaceLoadProblem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceLoadProblem} obj Optional instance to populate.
     * @return {module:model/WorkspaceLoadProblem} The populated <code>WorkspaceLoadProblem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceLoadProblem();
            AbstractProblem.constructFromObject(data, obj);
            AbstractProblem.constructFromObject(data, obj);
            IntegrityConstraintProblemAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('exception')) {
                obj['exception'] = ApiClient.convertToType(data['exception'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} exception
 * @default ''
 */
WorkspaceLoadProblem.prototype['exception'] = '';


// Implement AbstractProblem interface:
/**
 * @member {String} type
 * @default ''
 */
AbstractProblem.prototype['type'] = '';
// Implement IntegrityConstraintProblemAllOf interface:
/**
 * @member {String} exception
 * @default ''
 */
IntegrityConstraintProblemAllOf.prototype['exception'] = '';




export default WorkspaceLoadProblem;
