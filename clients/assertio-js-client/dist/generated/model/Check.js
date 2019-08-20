"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Identifier = _interopRequireDefault(require("./Identifier"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Check model module.
 * @module model/Check
 * @version 0.0.1
 */
var Check =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Check</code>.
   * @alias module:model/Check
   * @param rightCompareObj {Object.<String, Object>} Expected result
   * @param uname {String} Check unique name (used as id)
   */
  function Check(rightCompareObj, uname) {
    _classCallCheck(this, Check);

    Check.initialize(this, rightCompareObj, uname);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Check, null, [{
    key: "initialize",
    value: function initialize(obj, rightCompareObj, uname) {
      obj['rightCompareObj'] = rightCompareObj;
      obj['uname'] = uname;
    }
    /**
     * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Check} obj Optional instance to populate.
     * @return {module:model/Check} The populated <code>Check</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Check();

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Date');
        }

        if (data.hasOwnProperty('identifiers')) {
          obj['identifiers'] = _ApiClient["default"].convertToType(data['identifiers'], [_Identifier["default"]]);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('leftCompareObj')) {
          obj['leftCompareObj'] = _ApiClient["default"].convertToType(data['leftCompareObj'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('rightCompareObj')) {
          obj['rightCompareObj'] = _ApiClient["default"].convertToType(data['rightCompareObj'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('operator')) {
          obj['operator'] = _ApiClient["default"].convertToType(data['operator'], 'String');
        }

        if (data.hasOwnProperty('uname')) {
          obj['uname'] = _ApiClient["default"].convertToType(data['uname'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Check;
}();
/**
 * @member {Date} timestamp
 */


Check.prototype['timestamp'] = undefined;
/**
 * An array of ordered static* identifiers that in combination with the checkUName used as a unique record identifiers. <br> *Static refers to the fact the identifiers will remain in the same order, unless there's a desired change.
 * @member {Array.<module:model/Identifier>} identifiers
 */

Check.prototype['identifiers'] = undefined;
/**
 * Non-unique identifiers (tags) for the check that can be searched by.
 * @member {Array.<module:model/Tag>} tags
 */

Check.prototype['tags'] = undefined;
/**
 * Actual result
 * @member {Object.<String, Object>} leftCompareObj
 */

Check.prototype['leftCompareObj'] = undefined;
/**
 * Expected result
 * @member {Object.<String, Object>} rightCompareObj
 */

Check.prototype['rightCompareObj'] = undefined;
/**
 * Comparison operator, from left to right, when order matters.
 * @member {module:model/Check.OperatorEnum} operator
 * @default 'equals'
 */

Check.prototype['operator'] = 'equals';
/**
 * Check unique name (used as id)
 * @member {String} uname
 */

Check.prototype['uname'] = undefined;
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

Check['OperatorEnum'] = {
  /**
   * value: "equals"
   * @const
   */
  "equals": "equals",

  /**
   * value: "notequals"
   * @const
   */
  "notequals": "notequals",

  /**
   * value: "greaterthan"
   * @const
   */
  "greaterthan": "greaterthan",

  /**
   * value: "lessthan"
   * @const
   */
  "lessthan": "lessthan",

  /**
   * value: "contains"
   * @const
   */
  "contains": "contains",

  /**
   * value: "notcontains"
   * @const
   */
  "notcontains": "notcontains"
};
var _default = Check;
exports["default"] = _default;