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
import Integration from './Integration';

/**
 * The S3Integration model module.
 * @module model/S3Integration
 * @version 1.1.3
 */
class S3Integration {
    /**
     * Constructs a new <code>S3Integration</code>.
     * @alias module:model/S3Integration
     * @extends module:model/Integration
     * @implements module:model/Integration
     * @implements module:model/CollectProblemsActionAllOf
     * @param type {String} 
     */
    constructor(type) { 
        Integration.initialize(this, type);CollectProblemsActionAllOf.initialize(this);
        S3Integration.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>S3Integration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3Integration} obj Optional instance to populate.
     * @return {module:model/S3Integration} The populated <code>S3Integration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new S3Integration();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
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
S3Integration.prototype['dummy'] = undefined;


// Implement Integration interface:
/**
 * @member {String} type
 * @default ''
 */
Integration.prototype['type'] = '';
// Implement CollectProblemsActionAllOf interface:
/**
 * @member {String} dummy
 */
CollectProblemsActionAllOf.prototype['dummy'] = undefined;




export default S3Integration;

