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
import LinkedList from './LinkedList';
import SyntaxErrorAllOf from './SyntaxErrorAllOf';
import SyntaxNode from './SyntaxNode';

/**
 * The SyntaxError model module.
 * @module model/SyntaxError
 * @version 1.1.3
 */
class SyntaxError {
    /**
     * Constructs a new <code>SyntaxError</code>.
     * @alias module:model/SyntaxError
     * @extends module:model/AbstractProblem
     * @implements module:model/AbstractProblem
     * @implements module:model/SyntaxErrorAllOf
     * @param type {String} 
     * @param node {module:model/SyntaxNode} 
     * @param trace {module:model/LinkedList} 
     */
    constructor(type, node, trace) { 
        AbstractProblem.initialize(this, type);SyntaxErrorAllOf.initialize(this, node, trace);
        SyntaxError.initialize(this, type, node, trace);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, node, trace) { 
        obj['node'] = node;
        obj['trace'] = trace;
    }

    /**
     * Constructs a <code>SyntaxError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyntaxError} obj Optional instance to populate.
     * @return {module:model/SyntaxError} The populated <code>SyntaxError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyntaxError();
            AbstractProblem.constructFromObject(data, obj);
            AbstractProblem.constructFromObject(data, obj);
            SyntaxErrorAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('next')) {
                obj['next'] = SyntaxNode.constructFromObject(data['next']);
            }
            if (data.hasOwnProperty('node')) {
                obj['node'] = SyntaxNode.constructFromObject(data['node']);
            }
            if (data.hasOwnProperty('trace')) {
                obj['trace'] = LinkedList.constructFromObject(data['trace']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SyntaxNode} next
 */
SyntaxError.prototype['next'] = undefined;

/**
 * @member {module:model/SyntaxNode} node
 */
SyntaxError.prototype['node'] = undefined;

/**
 * @member {module:model/LinkedList} trace
 */
SyntaxError.prototype['trace'] = undefined;


// Implement AbstractProblem interface:
/**
 * @member {String} type
 * @default ''
 */
AbstractProblem.prototype['type'] = '';
// Implement SyntaxErrorAllOf interface:
/**
 * @member {module:model/SyntaxNode} next
 */
SyntaxErrorAllOf.prototype['next'] = undefined;
/**
 * @member {module:model/SyntaxNode} node
 */
SyntaxErrorAllOf.prototype['node'] = undefined;
/**
 * @member {module:model/LinkedList} trace
 */
SyntaxErrorAllOf.prototype['trace'] = undefined;




export default SyntaxError;

