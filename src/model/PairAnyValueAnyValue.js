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
 * The PairAnyValueAnyValue model module.
 * @module model/PairAnyValueAnyValue
 * @version 1.1.3
 */
class PairAnyValueAnyValue {
    /**
     * Constructs a new <code>PairAnyValueAnyValue</code>.
     * @alias module:model/PairAnyValueAnyValue
     * @param type {module:model/PairAnyValueAnyValue.TypeEnum} 
     */
    constructor(type) { 
        
        PairAnyValueAnyValue.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type || 'Pair_AnyValue_AnyValue_';
    }

    /**
     * Constructs a <code>PairAnyValueAnyValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PairAnyValueAnyValue} obj Optional instance to populate.
     * @return {module:model/PairAnyValueAnyValue} The populated <code>PairAnyValueAnyValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PairAnyValueAnyValue();

            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], Object);
            }
            if (data.hasOwnProperty('second')) {
                obj['second'] = ApiClient.convertToType(data['second'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} first
 */
PairAnyValueAnyValue.prototype['first'] = undefined;

/**
 * @member {Object} second
 */
PairAnyValueAnyValue.prototype['second'] = undefined;

/**
 * @member {module:model/PairAnyValueAnyValue.TypeEnum} type
 * @default 'Pair_AnyValue_AnyValue_'
 */
PairAnyValueAnyValue.prototype['type'] = 'Pair_AnyValue_AnyValue_';





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PairAnyValueAnyValue['TypeEnum'] = {

    /**
     * value: "Pair_AnyValue_AnyValue_"
     * @const
     */
    "Pair_AnyValue_AnyValue_": "Pair_AnyValue_AnyValue_"
};



export default PairAnyValueAnyValue;

