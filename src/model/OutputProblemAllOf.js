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
 * The OutputProblemAllOf model module.
 * @module model/OutputProblemAllOf
 * @version 1.1.3
 */
class OutputProblemAllOf {
    /**
     * Constructs a new <code>OutputProblemAllOf</code>.
     * @alias module:model/OutputProblemAllOf
     * @param exception {String} 
     * @param name {String} 
     */
    constructor(exception, name) { 
        
        OutputProblemAllOf.initialize(this, exception, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, exception, name) { 
        obj['exception'] = exception || '';
        obj['name'] = name || '';
    }

    /**
     * Constructs a <code>OutputProblemAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutputProblemAllOf} obj Optional instance to populate.
     * @return {module:model/OutputProblemAllOf} The populated <code>OutputProblemAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputProblemAllOf();

            if (data.hasOwnProperty('exception')) {
                obj['exception'] = ApiClient.convertToType(data['exception'], 'String');
            }
            if (data.hasOwnProperty('exception_stacktrace')) {
                obj['exception_stacktrace'] = ApiClient.convertToType(data['exception_stacktrace'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} exception
 * @default ''
 */
OutputProblemAllOf.prototype['exception'] = '';

/**
 * @member {String} exception_stacktrace
 */
OutputProblemAllOf.prototype['exception_stacktrace'] = undefined;

/**
 * @member {String} name
 * @default ''
 */
OutputProblemAllOf.prototype['name'] = '';






export default OutputProblemAllOf;

