/**
 * RAI Cloud SDK
 * This is a Client SDK for RAI Cloud
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: support@relational.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserInfoProtocol from './UserInfoProtocol';

/**
 * The ListUsersResponseProtocol model module.
 * @module model/ListUsersResponseProtocol
 * @version 1.4.0
 */
class ListUsersResponseProtocol {
    /**
     * Constructs a new <code>ListUsersResponseProtocol</code>.
     * @alias module:model/ListUsersResponseProtocol
     */
    constructor() { 
        
        ListUsersResponseProtocol.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListUsersResponseProtocol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUsersResponseProtocol} obj Optional instance to populate.
     * @return {module:model/ListUsersResponseProtocol} The populated <code>ListUsersResponseProtocol</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUsersResponseProtocol();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [UserInfoProtocol]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UserInfoProtocol>} users
 */
ListUsersResponseProtocol.prototype['users'] = undefined;






export default ListUsersResponseProtocol;

