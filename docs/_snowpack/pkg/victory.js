import { c as createCommonjsModule, a as commonjsGlobal, r as react } from './common/index-df124c49.js';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function linear$2(t) {
  return +t;
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent$1 = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent$1);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent$1);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent$1);

var pi$2 = Math.PI,
    halfPi$1 = pi$2 / 2;

function sinIn(t) {
  return (+t === 1) ? 1 : 1 - Math.cos(t * halfPi$1);
}

function sinOut(t) {
  return Math.sin(t * halfPi$1);
}

function sinInOut(t) {
  return (1 - Math.cos(pi$2 * t)) / 2;
}

// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

function expIn(t) {
  return tpmt(1 - +t);
}

function expOut(t) {
  return 1 - tpmt(t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau$2 = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$2);

  function elasticIn(t) {
    return a * tpmt(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau$2); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$2);

  function elasticOut(t) {
    return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau$2); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$2);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * tpmt(-t) * Math.sin((s - t) / p)
        : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau$2); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

var d3Ease = /*#__PURE__*/Object.freeze({
  __proto__: null,
  easeLinear: linear$2,
  easeQuad: quadInOut,
  easeQuadIn: quadIn,
  easeQuadOut: quadOut,
  easeQuadInOut: quadInOut,
  easeCubic: cubicInOut,
  easeCubicIn: cubicIn,
  easeCubicOut: cubicOut,
  easeCubicInOut: cubicInOut,
  easePoly: polyInOut,
  easePolyIn: polyIn,
  easePolyOut: polyOut,
  easePolyInOut: polyInOut,
  easeSin: sinInOut,
  easeSinIn: sinIn,
  easeSinOut: sinOut,
  easeSinInOut: sinInOut,
  easeExp: expInOut,
  easeExpIn: expIn,
  easeExpOut: expOut,
  easeExpInOut: expInOut,
  easeCircle: circleInOut,
  easeCircleIn: circleIn,
  easeCircleOut: circleOut,
  easeCircleInOut: circleInOut,
  easeBounce: bounceOut,
  easeBounceIn: bounceIn,
  easeBounceOut: bounceOut,
  easeBounceInOut: bounceInOut,
  easeBack: backInOut,
  easeBackIn: backIn,
  easeBackOut: backOut,
  easeBackInOut: backInOut,
  easeElastic: elasticOut,
  easeElasticIn: elasticIn,
  easeElasticOut: elasticOut,
  easeElasticInOut: elasticInOut
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$j = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$f = objectProto$j.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$j.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$f.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$2.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$i = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$i.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$h = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$e = objectProto$h.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$e).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$g.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$d.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$f.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$c.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$2 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE$2 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$3 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$2:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$2:
    case stringTag$2:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$3:
      var convert = _mapToArray;

    case setTag$3:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$e.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$d.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$d.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$b.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$2 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$2] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$a.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$b;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView$1 = _getNative(_root, 'DataView');

var _DataView = DataView$1;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map && getTag(new _Map) != mapTag$1) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$1) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag$1 = '[object Object]';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag : _getTag(object),
      othTag = othIsArr ? arrayTag : _getTag(other);

  objTag = objTag == argsTag ? objectTag$1 : objTag;
  othTag = othTag == argsTag ? objectTag$1 : othTag;

  var objIsObj = objTag == objectTag$1,
      othIsObj = othTag == objectTag$1,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$7.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$7.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$2(value) {
  return value;
}

var identity_1 = identity$2;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol_1(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol_1(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = _arrayMap(iteratees, function(iteratee) {
      if (isArray_1(iteratee)) {
        return function(value) {
          return _baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity_1];
  }

  var index = -1;
  iteratees = _arrayMap(iteratees, _baseUnary(_baseIteratee));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = _arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy;

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray_1(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray_1(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return _baseOrderBy(collection, iteratees, orders);
}

var orderBy_1 = orderBy;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$6.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb$1, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix$2(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix$2, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function constant$3(x) {
  return function() {
    return x;
  };
}

function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear$1(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant$3(isNaN(a) ? b : a);
}

var rgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date$1(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function reinterpolate$1(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolateValue(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: reinterpolate$1(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolateValue(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$3(b)
      : (t === "number" ? reinterpolate$1
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date$1
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : reinterpolate$1)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

function cubehelix$1(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = cubehelix$2(start)).h, (end = cubehelix$2(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);

var isInterpolatable = function (obj) {
  // d3 turns null into 0 and undefined into NaN, which we don't want.
  if (obj !== null) {
    switch (typeof obj) {
      case "undefined":
        return false;

      case "number":
        // The standard `isNaN` is fine in this case since we already know the
        // type is number.
        return !isNaN(obj) && obj !== Number.POSITIVE_INFINITY && obj !== Number.NEGATIVE_INFINITY;

      case "string":
        // d3 might not *actually* be able to interpolate the string, but it
        // won't cause any issues to let it try.
        return true;

      case "boolean":
        // d3 turns Booleans into integers, which we don't want. Sure, we could
        // interpolate from 0 -> 1, but we'd be sending a non-Boolean to
        // something expecting a Boolean.
        return false;

      case "object":
        // Don't try to interpolate class instances (except Date or Array).
        return obj instanceof Date || Array.isArray(obj) || isPlainObject_1(obj);

      case "function":
        // Careful! There may be extra properties on function objects that the
        // component expects to access - for instance, it may be a `d3.scale()`
        // function, which has its own methods attached. We don't know if the
        // component is only going to call the function (in which case it's
        // safely interpolatable) or if it's going to access special properties
        // (in which case our function generated from `interpolateFunction` will
        // most likely cause an error. We could check for enumerable properties
        // on the function object here to see if it's a "plain" function, but
        // let's just require that components prevent such function props from
        // being animated in the first place.
        return true;
    }
  }

  return false;
};
/**
 * Interpolate immediately to the end value at the given step `when`.
 * Some nicer default behavior might be to jump at the halfway point or return
 * `a` if `t` is 0 (instead of always returning `b`). But d3's default
 * interpolator does not do these things:
 *
 *   d3.interpolate('aaa', 'bbb')(0) === 'bbb'
 *
 * ...and things might get wonky if we don't replicate that behavior.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @param {Number} when - Step value (0 to 1) at which to jump to `b`.
 * @returns {Function} An interpolation function.
 */

var interpolateImmediate = function (a, b) {
  var when = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return function (t) {
    return t < when ? a : b;
  };
};
/**
 * Interpolate to or from a function. The interpolated value will be a function
 * that calls `a` (if it's a function) and `b` (if it's a function) and calls
 * `d3.interpolate` on the resulting values. Note that our function won't
 * necessarily be called (that's up to the component this eventually gets
 * passed to) - but if it does get called, it will return an appropriately
 * interpolated value.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function} An interpolation function.
 */

var interpolateFunction = function (a, b) {
  return function (t) {
    if (t >= 1) {
      return b;
    }

    return function () {
      /* eslint-disable no-invalid-this */
      var aval = typeof a === "function" ? a.apply(this, arguments) : a;
      var bval = typeof b === "function" ? b.apply(this, arguments) : b;
      return interpolateValue(aval, bval)(t);
    };
  };
};
/**
 * Interpolate to or from an object. This method is a modification of the object interpolator in
 * d3-interpolate https://github.com/d3/d3-interpolate/blob/master/src/object.js. This interpolator
 * differs in that it uses our custom interpolators when interpolating the value of each property in
 * an object. This allows the correct interpolation of nested objects, including styles
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function} An interpolation function.
 */

var interpolateObject = function (a, b) {
  var interpolateTypes = function (x, y) {
    if (x === y || !isInterpolatable(x) || !isInterpolatable(y)) {
      return interpolateImmediate(x, y);
    }

    if (typeof x === "function" || typeof y === "function") {
      return interpolateFunction(x, y);
    }

    if (typeof x === "object" && isPlainObject_1(x) || typeof y === "object" && isPlainObject_1(y)) {
      return interpolateObject(x, y);
    }

    return interpolateValue(x, y);
  }; // When the value is an array, attempt to sort by "key" so that animating nodes may be identified
  // based on "key" instead of index


  var keyData = function (val) {
    return Array.isArray(val) ? orderBy_1(val, "key") : val;
  };

  var i = {};
  var c = {};
  var k;

  if (a === null || typeof a !== "object") {
    a = {};
  }

  if (b === null || typeof b !== "object") {
    b = {};
  }

  for (k in b) {
    if (k in a) {
      i[k] = interpolateTypes(keyData(a[k]), keyData(b[k]));
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }

    return c;
  };
};
var interpolateString = function (a, b) {
  var format = function (val) {
    return typeof val === "string" ? val.replace(/,/g, "") : val;
  };

  return interpolateValue(format(a), format(b));
};
/**
 * By default, the list of interpolators used by `d3.interpolate` has a few
 * downsides:
 *
 * - `null` values get turned into 0.
 * - `undefined`, `function`, and some other value types get turned into NaN.
 * - Boolean types get turned into numbers, which probably will be meaningless
 *   to whatever is consuming them.
 * - It tries to interpolate between identical start and end values, doing
 *   unnecessary calculations that sometimes result in floating point rounding
 *   errors.
 *
 * If only the default interpolators are used, `VictoryAnimation` will happily
 * pass down NaN (and other bad) values as props to the wrapped component.
 * The component will then either use the incorrect values or complain that it
 * was passed props of the incorrect type. This custom interpolator is added
 * using the `d3.interpolators` API, and prevents such cases from happening
 * for most values.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function|undefined} An interpolation function, if necessary.
 */

var victoryInterpolator = function (a, b) {
  // If the values are strictly equal, or either value is not interpolatable,
  // just use either the start value `a` or end value `b` at every step, as
  // there is no reasonable in-between value.
  if (a === b || !isInterpolatable(a) || !isInterpolatable(b)) {
    return interpolateImmediate(a, b);
  }

  if (typeof a === "function" || typeof b === "function") {
    return interpolateFunction(a, b);
  }

  if (isPlainObject_1(a) || isPlainObject_1(b)) {
    return interpolateObject(a, b);
  }

  if (typeof a === "string" || typeof b === "string") {
    return interpolateString(a, b);
  }

  return interpolateValue(a, b);
};

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer$1() {
  this._call =
  this._time =
  this._next = null;
}

Timer$1.prototype = timer.prototype = {
  constructor: Timer$1,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer$1;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }

var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck$d(this, Timer);

    this.shouldAnimate = true;
    this.subscribers = [];
    this.loop = this.loop.bind(this);
    this.timer = null;
    this.activeSubscriptions = 0;
  }

  _createClass$d(Timer, [{
    key: "bypassAnimation",
    value: function bypassAnimation() {
      this.shouldAnimate = false;
    }
  }, {
    key: "resumeAnimation",
    value: function resumeAnimation() {
      this.shouldAnimate = true;
    }
  }, {
    key: "loop",
    value: function loop() {
      this.subscribers.forEach(function (s) {
        s.callback(now() - s.startTime, s.duration);
      });
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.timer) {
        this.timer = timer(this.loop);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.timer) {
        this.timer.stop();
        this.timer = null;
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback, duration) {
      duration = this.shouldAnimate ? duration : 0;
      var subscriptionID = this.subscribers.push({
        startTime: now(),
        callback: callback,
        duration: duration
      });
      this.activeSubscriptions++;
      this.start();
      return subscriptionID;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      if (id !== null && this.subscribers[id - 1]) {
        delete this.subscribers[id - 1];
        this.activeSubscriptions--;
      }

      if (this.activeSubscriptions === 0) {
        this.stop();
      }
    }
  }]);

  return Timer;
}();

/**
 * The React context object consumers may use to access or override the global
 * timer.
 */

var TimerContext = react.createContext({
  transitionTimer: new Timer(),
  animationTimer: new Timer()
});
TimerContext.displayName = "TimerContext";

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

function _toConsumableArray$h(arr) { return _arrayWithoutHoles$h(arr) || _iterableToArray$h(arr) || _nonIterableSpread$h(); }

function _nonIterableSpread$h() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$h(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$h(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$c(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$c(self); }

function _inherits$c(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var VictoryAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits$c(VictoryAnimation, _React$Component);

  function VictoryAnimation(props, context) {
    var _this;

    _classCallCheck$c(this, VictoryAnimation);

    _this = _possibleConstructorReturn$c(this, (VictoryAnimation.__proto__ || Object.getPrototypeOf(VictoryAnimation)).call(this, props, context));
    /* defaults */

    _this.state = {
      data: Array.isArray(_this.props.data) ? _this.props.data[0] : _this.props.data,
      animationInfo: {
        progress: 0,
        animating: false
      }
    };
    _this.interpolator = null;
    _this.queue = Array.isArray(_this.props.data) ? _this.props.data.slice(1) : [];
    /* build easing function */

    _this.ease = d3Ease[_this.toNewName(_this.props.easing)];
    /*
      There is no autobinding of this in ES6 classes
      so we bind functionToBeRunEachFrame to current instance of victory animation class
    */

    _this.functionToBeRunEachFrame = _this.functionToBeRunEachFrame.bind(_assertThisInitialized$c(_this));
    _this.timer = _this.context.animationTimer;
    return _this;
  }

  _createClass$c(VictoryAnimation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Length check prevents us from triggering `onEnd` in `traverseQueue`.
      if (this.queue.length) {
        this.traverseQueue();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var equalProps = reactFastCompare(this.props, nextProps);

      if (!equalProps) {
        /* cancel existing loop if it exists */
        this.timer.unsubscribe(this.loopID);
        /* If an object was supplied */

        if (!Array.isArray(nextProps.data)) {
          // Replace the tween queue. Could set `this.queue = [nextProps.data]`,
          // but let's reuse the same array.
          this.queue.length = 0;
          this.queue.push(nextProps.data);
          /* If an array was supplied */
        } else {
          var _queue;

          /* Extend the tween queue */
          (_queue = this.queue).push.apply(_queue, _toConsumableArray$h(nextProps.data));
        }
        /* Start traversing the tween queue */


        this.traverseQueue();
      }

      return nextState.animationInfo.animating || nextState.animationInfo.terminating || !equalProps;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.loopID) {
        this.timer.unsubscribe(this.loopID);
      } else {
        this.timer.stop();
      }
    }
  }, {
    key: "toNewName",
    value: function toNewName(ease) {
      // d3-ease changed the naming scheme for ease from "linear" -> "easeLinear" etc.
      var capitalize = function (s) {
        return s && s[0].toUpperCase() + s.slice(1);
      };

      return "ease".concat(capitalize(ease));
    }
    /* Traverse the tween queue */

  }, {
    key: "traverseQueue",
    value: function traverseQueue() {
      var _this2 = this;

      if (this.queue.length) {
        /* Get the next index */
        var data = this.queue[0];
        /* compare cached version to next props */

        this.interpolator = victoryInterpolator(this.state.data, data);
        /* reset step to zero */

        if (this.props.delay) {
          setTimeout(function () {
            _this2.loopID = _this2.timer.subscribe(_this2.functionToBeRunEachFrame, _this2.props.duration);
          }, this.props.delay);
        } else {
          this.loopID = this.timer.subscribe(this.functionToBeRunEachFrame, this.props.duration);
        }
      } else if (this.props.onEnd) {
        this.props.onEnd();
      }
    }
    /* every frame we... */

  }, {
    key: "functionToBeRunEachFrame",
    value: function functionToBeRunEachFrame(elapsed, duration) {
      /*
        step can generate imprecise values, sometimes greater than 1
        if this happens set the state to 1 and return, cancelling the timer
      */
      duration = duration !== undefined ? duration : this.props.duration;
      var step = duration ? elapsed / duration : 1;

      if (step >= 1) {
        this.setState({
          data: this.interpolator(1),
          animationInfo: {
            progress: 1,
            animating: false,
            terminating: true
          }
        });

        if (this.loopID) {
          this.timer.unsubscribe(this.loopID);
        }

        this.queue.shift();
        this.traverseQueue();
        return;
      }
      /*
        if we're not at the end of the timer, set the state by passing
        current step value that's transformed by the ease function to the
        interpolator, which is cached for performance whenever props are received
      */


      this.setState({
        data: this.interpolator(this.ease(step)),
        animationInfo: {
          progress: step,
          animating: step < 1
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.state.data, this.state.animationInfo);
    }
  }]);

  return VictoryAnimation;
}(react.Component);

Object.defineProperty(VictoryAnimation, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAnimation"
});
Object.defineProperty(VictoryAnimation, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: propTypes.func,
    data: propTypes.oneOfType([propTypes.object, propTypes.array]),
    delay: propTypes.number,
    duration: propTypes.number,
    easing: propTypes.oneOf(["back", "backIn", "backOut", "backInOut", "bounce", "bounceIn", "bounceOut", "bounceInOut", "circle", "circleIn", "circleOut", "circleInOut", "linear", "linearIn", "linearOut", "linearInOut", "cubic", "cubicIn", "cubicOut", "cubicInOut", "elastic", "elasticIn", "elasticOut", "elasticInOut", "exp", "expIn", "expOut", "expInOut", "poly", "polyIn", "polyOut", "polyInOut", "quad", "quadIn", "quadOut", "quadInOut", "sin", "sinIn", "sinOut", "sinInOut"]),
    onEnd: propTypes.func
  }
});
Object.defineProperty(VictoryAnimation, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    data: {},
    delay: 0,
    duration: 1000,
    easing: "quadInOut"
  }
});
Object.defineProperty(VictoryAnimation, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: TimerContext
});

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString_1(prefix) + id;
}

var uniqueId_1 = uniqueId;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$3(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$3(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$2(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$2;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$j = defineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty$j ? identity_1 : function(func, string) {
  return _defineProperty$j(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = _baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn_1(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq_1(value, objectProto$5[key]) && !hasOwnProperty$4.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

var defaults_1 = defaults;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$j) {
    _defineProperty$j(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = _createAssigner(function(object, source) {
  if (_isPrototype(source) || isArrayLike_1(source)) {
    _copyObject(source, keys_1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$2.call(source, key)) {
      _assignValue(object, key, source[key]);
    }
  }
});

var assign_1 = assign;

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == regexpTag;
}

var _baseIsRegExp = baseIsRegExp;

/* Node.js helper references. */
var nodeIsRegExp = _nodeUtil && _nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? _baseUnary(nodeIsRegExp) : _baseIsRegExp;

var isRegExp_1 = isRegExp;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_1(collection)) {
      var iteratee = _baseIteratee(predicate);
      collection = keys_1(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
  if (index < 0) {
    index = nativeMax$2(length + index, 0);
  }
  return _baseFindIndex(array, _baseIteratee(predicate), index);
}

var findIndex_1 = findIndex;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = _createFind(findIndex_1);

var find_1 = find;

/* global console */

/* eslint-disable no-console */
// TODO: Use "warning" npm module like React is switching to.
var Log = {
  warn: function (message) {
  }
};

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Return a new validator based on `validator` but with the option to chain
 * `isRequired` onto the validation. This is nearly identical to how React
 * does it internally, but they don't expose their helper for us to use.
 * @param {Function} validator Validation function.
 * @returns {Function} Validator with `isRequired` option.
 */

var makeChainable = function (validator) {
  /* eslint-disable max-params */
  var _chainable = function (isRequired, props, propName, componentName) {
    var value = props[propName];

    if (value === undefined || value === null) {
      if (isRequired) {
        return new Error("Required `".concat(propName, "` was not specified in `").concat(componentName, "`."));
      }

      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  var chainable = _chainable.bind(null, false);

  chainable.isRequired = _chainable.bind(null, true);
  return chainable;
};

var nullConstructor = function () {
  return null;
};

var undefinedConstructor = function () {
  return undefined;
};
/**
 * Get the constructor of `value`. If `value` is null or undefined, return the
 * special singletons `nullConstructor` or `undefinedConstructor`, respectively.
 * @param {*} value Instance to return the constructor of.
 * @returns {Function} Constructor of `value`.
 */


var getConstructor = function (value) {
  if (value === undefined) {
    return undefinedConstructor;
  } else if (value === null) {
    return nullConstructor;
  } else {
    return value.constructor;
  }
};
/**
 * Get the name of the constructor used to create `value`, using
 * `Object.protoype.toString`. If the value is null or undefined, return
 * "null" or "undefined", respectively.
 * @param {*} value Instance to return the constructor name of.
 * @returns {String} Name of the constructor.
 */


var getConstructorName = function (value) {
  if (value === undefined) {
    return "undefined";
  } else if (value === null) {
    return "null";
  }

  return Object.prototype.toString.call(value).slice(8, -1); // eslint-disable-line no-magic-numbers
};

var CustomPropTypes = {
  /**
   * Return a new validator based on `propType` but which logs a `console.error`
   * with `explanation` if used.
   * @param {Function} propType The old, deprecated propType.
   * @param {String} explanation The message to provide the user of the deprecated propType.
   * @returns {Function} Validator which logs usage of this propType
   */
  deprecated: function (propType, explanation) {
    return function (props, propName, componentName) {
      var value = props[propName];

      if (value !== null && value !== undefined) {
        Log.warn("\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated ").concat(explanation));
      }

      return propTypes.checkPropTypes(_defineProperty$i({}, propName, propType), props, propName, componentName);
    };
  },

  /**
   * Return a new validator which returns true
   * if and only if all validators passed as arguments return true.
   * Like React.propTypes.oneOfType, except "all" instead of "any"
   * @param {Array} validators Validation functions.
   * @returns {Function} Combined validator function
   */
  allOfType: function (validators) {
    return makeChainable(function (props, propName, componentName) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return validators.reduce(function (result, validator) {
        return result || validator.apply(void 0, [props, propName, componentName].concat(rest));
      }, undefined);
    });
  },

  /**
   * Check that the value is a non-negative number.
   */
  nonNegative: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (typeof value !== "number" || value < 0) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a non-negative number."));
    }

    return undefined;
  }),

  /**
   * Check that the value is an integer.
   */
  integer: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (typeof value !== "number" || value % 1 !== 0) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an integer."));
    }

    return undefined;
  }),

  /**
   * Check that the value is greater than zero.
   */
  greaterThanZero: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (typeof value !== "number" || value <= 0) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a number greater than zero."));
    }

    return undefined;
  }),

  /**
   * Check that the value is an Array of two unique values.
   */
  domain: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (!Array.isArray(value) || value.length !== 2 || value[1] === value[0]) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an array of two unique numeric values."));
    }

    return undefined;
  }),

  /**
   * Check that the value looks like a d3 `scale` function.
   */
  scale: makeChainable(function (props, propName, componentName) {
    var supportedScaleStrings = ["linear", "time", "log", "sqrt"];

    var validScale = function (scl) {
      if (isFunction_1(scl)) {
        return isFunction_1(scl.copy) && isFunction_1(scl.domain) && isFunction_1(scl.range);
      } else if (typeof scl === "string") {
        return supportedScaleStrings.indexOf(scl) !== -1;
      }

      return false;
    };

    var value = props[propName];

    if (!validScale(value)) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a d3 scale."));
    }

    return undefined;
  }),

  /**
   * Check that an array contains items of the same type.
   */
  homogeneousArray: makeChainable(function (props, propName, componentName) {
    var values = props[propName];

    if (!Array.isArray(values)) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an array."));
    }

    if (values.length < 2) {
      return undefined;
    }

    var comparisonConstructor = getConstructor(values[0]);

    var typeMismatchedValue = find_1(values, function (value) {
      return comparisonConstructor !== getConstructor(value);
    });

    if (typeMismatchedValue) {
      var constructorName = getConstructorName(values[0]);
      var otherConstructorName = getConstructorName(typeMismatchedValue);
      return new Error("Expected `".concat(propName, "` in `").concat(componentName, "` to be a ") + "homogeneous array, but found types `".concat(constructorName, "` and ") + "`".concat(otherConstructorName, "`."));
    }

    return undefined;
  }),

  /**
   * Check that array prop length matches props.data.length
   */
  matchDataLength: makeChainable(function (props, propName) {
    if (props[propName] && Array.isArray(props[propName]) && props[propName].length !== props.data.length) {
      return new Error("Length of data and ".concat(propName, " arrays must match."));
    }

    return undefined;
  }),

  /**
   * Check that the value is a regular expression
   */
  regExp: makeChainable(function (props, propName, componentName) {
    if (props[propName] && !isRegExp_1(props[propName])) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a regular expression."));
    }

    return undefined;
  })
};

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$b(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$b(self); }

function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits$b(Portal, _React$Component);

  function Portal(props) {
    var _this;

    _classCallCheck$b(this, Portal);

    _this = _possibleConstructorReturn$b(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));
    _this.map = {};
    _this.index = 1;
    _this.portalUpdate = _this.portalUpdate.bind(_assertThisInitialized$b(_this));
    _this.portalRegister = _this.portalRegister.bind(_assertThisInitialized$b(_this));
    _this.portalDeregister = _this.portalDeregister.bind(_assertThisInitialized$b(_this));
    return _this;
  }

  _createClass$b(Portal, [{
    key: "portalRegister",
    value: function portalRegister() {
      return ++this.index;
    }
  }, {
    key: "portalUpdate",
    value: function portalUpdate(key, element) {
      this.map[key] = element;
      this.forceUpdate();
    }
  }, {
    key: "portalDeregister",
    value: function portalDeregister(key) {
      delete this.map[key];
      this.forceUpdate();
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this2 = this;

      return keys_1(this.map).map(function (key) {
        var el = _this2.map[key];
        return el ? react.cloneElement(el, {
          key: key
        }) : el;
      });
    } // Overridden in victory-core-native

  }, {
    key: "render",
    value: function render() {
      return react.createElement("svg", this.props, this.getChildren());
    }
  }]);

  return Portal;
}(react.Component);

Object.defineProperty(Portal, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "Portal"
});
Object.defineProperty(Portal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: propTypes.string,
    height: CustomPropTypes.nonNegative,
    style: propTypes.object,
    viewBox: propTypes.string,
    width: CustomPropTypes.nonNegative
  }
});

/**
 * The React context object consumers may use to access the context of the
 * portal.
 */

var PortalContext = react.createContext({});
PortalContext.displayName = "PortalContext";

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value, path) {
    return hasIn_1(object, path);
  });
}

var _basePick = basePick;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = _flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});

var pick_1 = pick;

// Private Functions
function getCartesianRange(props, axis) {
  // determine how to lay the axis and what direction positive and negative are
  var vertical = axis !== "x";
  var padding = getPadding$1(props);

  if (vertical) {
    return [props.height - padding.bottom, padding.top];
  }

  return [padding.left, props.width - padding.right];
}

function getPolarRange(props, axis) {
  if (axis === "x") {
    var startAngle = degreesToRadians(props.startAngle || 0);
    var endAngle = degreesToRadians(props.endAngle || 360);
    return [startAngle, endAngle];
  }

  return [props.innerRadius || 0, getRadius$1(props)];
} // Exported Functions

/**
 * creates an object with some keys excluded
 * replacement for lodash.omit for performance. does not mimick the entire lodash.omit api
 * @param {Object} originalObject: created object will be based on this object
 * @param {Array<String>} ks: an array of keys to omit from the new object
 * @returns {Object} new object with same properties as originalObject
 */


function omit(originalObject) {
  var ks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // code based on babel's _objectWithoutProperties
  var newObject = {};

  for (var key in originalObject) {
    if (ks.indexOf(key) >= 0) {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(originalObject, key)) {
      continue;
    }

    newObject[key] = originalObject[key];
  }

  return newObject;
}

function getPoint(datum) {
  var exists = function (val) {
    return val !== undefined;
  };

  var _x = datum._x,
      _x1 = datum._x1,
      _x0 = datum._x0,
      _voronoiX = datum._voronoiX,
      _y = datum._y,
      _y1 = datum._y1,
      _y0 = datum._y0,
      _voronoiY = datum._voronoiY;
  var defaultX = exists(_x1) ? _x1 : _x;
  var defaultY = exists(_y1) ? _y1 : _y;
  var point = {
    x: exists(_voronoiX) ? _voronoiX : defaultX,
    x0: exists(_x0) ? _x0 : _x,
    y: exists(_voronoiY) ? _voronoiY : defaultY,
    y0: exists(_y0) ? _y0 : _y
  };
  return defaults_1({}, point, datum);
}

function scalePoint(props, datum) {
  var scale = props.scale,
      polar = props.polar,
      horizontal = props.horizontal;
  var d = getPoint(datum);
  var origin = props.origin || {
    x: 0,
    y: 0
  };
  var x = horizontal ? scale.y(d.y) : scale.x(d.x);
  var x0 = horizontal ? scale.y(d.y0) : scale.x(d.x0);
  var y = horizontal ? scale.x(d.x) : scale.y(d.y);
  var y0 = horizontal ? scale.x(d.x0) : scale.y(d.y0);
  return {
    x: polar ? y * Math.cos(x) + origin.x : x,
    x0: polar ? y0 * Math.cos(x0) + origin.x : x0,
    y: polar ? -y * Math.sin(x) + origin.y : y,
    y0: polar ? -y0 * Math.sin(x0) + origin.x : y0
  };
}

function getPadding$1(props) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "padding";
  var padding = props[name];
  var paddingVal = typeof padding === "number" ? padding : 0;
  var paddingObj = typeof padding === "object" ? padding : {};
  return {
    top: paddingObj.top || paddingVal,
    bottom: paddingObj.bottom || paddingVal,
    left: paddingObj.left || paddingVal,
    right: paddingObj.right || paddingVal
  };
}

function isTooltip(component) {
  var labelRole = component && component.type && component.type.role;
  return labelRole === "tooltip";
}

function getDefaultStyles(props, role) {
  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      labelComponent = props.labelComponent;
  var defaultStyles = theme[role] && theme[role].style || {};

  if (!isTooltip(labelComponent)) {
    return defaultStyles;
  }

  var tooltipStyle = theme.tooltip && theme.tooltip.style || {};

  var labelStyle = defaults_1({}, tooltipStyle, defaultStyles.labels);

  return defaults_1({}, {
    labels: labelStyle
  }, defaultStyles);
}

function getStyles$5(style, defaultStyles) {
  var width = "100%";
  var height = "100%";

  if (!style) {
    return defaults_1({
      parent: {
        height: height,
        width: width
      }
    }, defaultStyles);
  }

  var data = style.data,
      labels = style.labels,
      parent = style.parent;
  var defaultParent = defaultStyles && defaultStyles.parent || {};
  var defaultLabels = defaultStyles && defaultStyles.labels || {};
  var defaultData = defaultStyles && defaultStyles.data || {};
  return {
    parent: defaults_1({}, parent, defaultParent, {
      width: width,
      height: height
    }),
    labels: defaults_1({}, labels, defaultLabels),
    data: defaults_1({}, data, defaultData)
  };
}

function evaluateProp(prop, props) {
  return isFunction_1(prop) ? prop(props) : prop;
}

function evaluateStyle(style, props) {
  if (!style || !keys_1(style).some(function (value) {
    return isFunction_1(style[value]);
  })) {
    return style;
  }

  return keys_1(style).reduce(function (prev, curr) {
    prev[curr] = evaluateProp(style[curr], props);
    return prev;
  }, {});
}

function degreesToRadians(degrees) {
  return typeof degrees === "number" ? degrees * (Math.PI / 180) : degrees;
}

function radiansToDegrees(radians) {
  return typeof radians === "number" ? radians / (Math.PI / 180) : radians;
}

function getRadius$1(props) {
  var _getPadding = getPadding$1(props),
      left = _getPadding.left,
      right = _getPadding.right,
      top = _getPadding.top,
      bottom = _getPadding.bottom;

  var width = props.width,
      height = props.height;
  return Math.min(width - left - right, height - top - bottom) / 2;
}

function getPolarOrigin(props) {
  var width = props.width,
      height = props.height;

  var _getPadding2 = getPadding$1(props),
      top = _getPadding2.top,
      bottom = _getPadding2.bottom,
      left = _getPadding2.left,
      right = _getPadding2.right;

  var radius = Math.min(width - left - right, height - top - bottom) / 2;
  var offsetWidth = width / 2 + left - right;
  var offsetHeight = height / 2 + top - bottom;
  return {
    x: offsetWidth + radius > width ? radius + left - right : offsetWidth,
    y: offsetHeight + radius > height ? radius + top - bottom : offsetHeight
  };
}

function getRange$1(props, axis) {
  if (props.range && props.range[axis]) {
    return props.range[axis];
  } else if (props.range && Array.isArray(props.range)) {
    return props.range;
  }

  return props.polar ? getPolarRange(props, axis) : getCartesianRange(props, axis);
}

function createAccessor(key) {
  // creates a data accessor function
  // given a property key, path, array index, or null for identity.
  if (isFunction_1(key)) {
    return key;
  } else if (key === null || key === undefined) {
    // null/undefined means "return the data item itself"
    return function (x) {
      return x;
    };
  } // otherwise, assume it is an array index, property key or path (_.property handles all three)


  return property_1(key);
}

function modifyProps$1(props, fallbackProps, role) {
  var theme = props.theme && props.theme[role] ? props.theme[role] : {};
  var themeProps = omit(theme, ["style"]);
  var horizontal = isHorizontal(props);
  var defaultObject = horizontal === undefined ? {} : {
    horizontal: horizontal
  };
  return defaults_1(defaultObject, props, themeProps, fallbackProps);
}
/**
 * Returns the given axis or the opposite axis when horizontal
 * @param {string} axis: the given axis, either "x" pr "y"
 * @param {Boolean} horizontal: true when the chart is flipped to the horizontal orientation
 * @returns {String} the dimension appropriate for the axis given its props "x" or "y"
 */


function getCurrentAxis$1(axis, horizontal) {
  var otherAxis = axis === "x" ? "y" : "x";
  return horizontal ? otherAxis : axis;
}
/**
 * @param {Array} children: an array of child components
 * @param {Function} iteratee: a function with arguments "child", "childName", and "parent"
 * @param {Object} parentProps: props from the parent that are applied to children
 * @param {any}  initialMemo: The object in which the iteration results are combined.
 * @param {Function} combine: Combines the result of the iteratee with the current memo
 *   to the memo for the next iteration step
 * @returns {Array} returns an array of results from calling the iteratee on all nested children
 */

/* eslint-disable max-params */


function reduceChildren(children, iteratee) {
  var parentProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var initialMemo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var combine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (memo, item) {
    return memo.concat(item);
  };
  var sharedProps = ["data", "domain", "categories", "polar", "startAngle", "endAngle", "minDomain", "maxDomain", "horizontal"];

  var traverseChildren = function (childArray, names, parent) {
    return childArray.reduce(function (memo, child, index) {
      var childRole = child.type && child.type.role;
      var childName = child.props.name || "".concat(childRole, "-").concat(names[index]);

      if (child.props && child.props.children) {
        var childProps = assign_1({}, child.props, pick_1(parentProps, sharedProps));

        var nestedChildren = child.type && child.type.role === "stack" && isFunction_1(child.type.getChildren) ? child.type.getChildren(childProps) : react.Children.toArray(child.props.children).map(function (c) {
          var nestedChildProps = assign_1({}, c.props, pick_1(childProps, sharedProps));

          return react.cloneElement(c, nestedChildProps);
        });

        var _childNames = nestedChildren.map(function (c, i) {
          return "".concat(childName, "-").concat(i);
        });

        var nestedResults = traverseChildren(nestedChildren, _childNames, child);
        memo = combine(memo, nestedResults);
      } else {
        var result = iteratee(child, childName, parent);

        if (result) {
          memo = combine(memo, result);
        }
      }

      return memo;
    }, initialMemo);
  };

  var childNames = children.map(function (c, i) {
    return i;
  });
  return traverseChildren(children, childNames);
}
/**
 * @param {Object} props: the props object
 * @returns {Boolean} returns true if the props object contains `horizontal: true` of if any
 * children or nested children are hoizontal
 */


function isHorizontal(props) {
  if (props.horizontal !== undefined || !props.children) {
    return props.horizontal;
  }

  var traverseChildren = function (childArray) {
    return childArray.reduce(function (memo, child) {
      var childProps = child.props || {};

      if (memo || childProps.horizontal || !childProps.children) {
        memo = memo || childProps.horizontal;
        return memo;
      }

      return traverseChildren(react.Children.toArray(childProps.children));
    }, false);
  };

  return traverseChildren(react.Children.toArray(props.children));
}

var Helpers = {
  omit: omit,
  getPoint: getPoint,
  scalePoint: scalePoint,
  getPadding: getPadding$1,
  getDefaultStyles: getDefaultStyles,
  getStyles: getStyles$5,
  evaluateProp: evaluateProp,
  evaluateStyle: evaluateStyle,
  degreesToRadians: degreesToRadians,
  radiansToDegrees: radiansToDegrees,
  getRadius: getRadius$1,
  getPolarOrigin: getPolarOrigin,
  getRange: getRange$1,
  createAccessor: createAccessor,
  modifyProps: modifyProps$1,
  getCurrentAxis: getCurrentAxis$1,
  reduceChildren: reduceChildren,
  isHorizontal: isHorizontal,
  isTooltip: isTooltip
};

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$h(target, key, source[key]); }); } return target; }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$a(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$a(self); }

function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VictoryContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits$a(VictoryContainer, _React$Component);

  function VictoryContainer(props) {
    var _this;

    _classCallCheck$a(this, VictoryContainer);

    _this = _possibleConstructorReturn$a(this, (VictoryContainer.__proto__ || Object.getPrototypeOf(VictoryContainer)).call(this, props));
    _this.containerId = !isObject_1(props) || props.containerId === undefined ? uniqueId_1("victory-container-") : props.containerId;

    _this.savePortalRef = function (portal) {
      _this.portalRef = portal;
      return portal;
    };

    _this.portalUpdate = function (key, el) {
      return _this.portalRef.portalUpdate(key, el);
    };

    _this.portalRegister = function () {
      return _this.portalRef.portalRegister();
    };

    _this.portalDeregister = function (key) {
      return _this.portalRef.portalDeregister(key);
    };

    _this.saveContainerRef = props && isFunction_1(props.containerRef) ? props.containerRef : function (container) {
      _this.containerRef = container;
      return container;
    };
    _this.shouldHandleWheel = props && props.events && props.events.onWheel;

    if (_this.shouldHandleWheel) {
      _this.handleWheel = function (e) {
        return e.preventDefault();
      };
    }

    return _this;
  }

  _createClass$a(VictoryContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.shouldHandleWheel && this.containerRef) {
        this.containerRef.addEventListener("wheel", this.handleWheel);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.shouldHandleWheel && this.containerRef) {
        this.containerRef.removeEventListener("wheel", this.handleWheel);
      }
    }
  }, {
    key: "getIdForElement",
    value: function getIdForElement(elementName) {
      return "".concat(this.containerId, "-").concat(elementName);
    } // overridden in custom containers

  }, {
    key: "getChildren",
    value: function getChildren(props) {
      return props.children;
    } // Get props defined by the Open UI Automation (OUIA) 1.0-RC spec
    // See https://ouia.readthedocs.io/en/latest/README.html#ouia-component

  }, {
    key: "getOUIAProps",
    value: function getOUIAProps(props) {
      var ouiaId = props.ouiaId,
          ouiaSafe = props.ouiaSafe,
          ouiaType = props.ouiaType;
      return _objectSpread$f({}, ouiaId && {
        "data-ouia-component-id": ouiaId
      }, ouiaType && {
        "data-ouia-component-type": ouiaType
      }, ouiaSafe !== undefined && {
        "data-ouia-safe": ouiaSafe
      });
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(props, svgProps, style) {
      var title = props.title,
          desc = props.desc,
          portalComponent = props.portalComponent,
          className = props.className,
          width = props.width,
          height = props.height,
          portalZIndex = props.portalZIndex,
          responsive = props.responsive;
      var children = this.getChildren(props);
      var dimensions = responsive ? {
        width: "100%",
        height: "100%"
      } : {
        width: width,
        height: height
      };

      var divStyle = assign_1({
        pointerEvents: "none",
        touchAction: "none",
        position: "relative"
      }, dimensions);

      var portalDivStyle = assign_1({
        zIndex: portalZIndex,
        position: "absolute",
        top: 0,
        left: 0
      }, dimensions);

      var svgStyle = assign_1({
        pointerEvents: "all"
      }, dimensions);

      var portalSvgStyle = assign_1({
        overflow: "visible"
      }, dimensions);

      var portalProps = {
        width: width,
        height: height,
        viewBox: svgProps.viewBox,
        preserveAspectRatio: svgProps.preserveAspectRatio,
        style: portalSvgStyle
      };
      return react.createElement(PortalContext.Provider, {
        value: {
          portalUpdate: this.portalUpdate,
          portalRegister: this.portalRegister,
          portalDeregister: this.portalDeregister
        }
      }, react.createElement("div", _extends$4({
        style: defaults_1({}, style, divStyle),
        className: className,
        ref: this.saveContainerRef
      }, this.getOUIAProps(props)), react.createElement("svg", _extends$4({}, svgProps, {
        style: svgStyle
      }), title ? react.createElement("title", {
        id: this.getIdForElement("title")
      }, title) : null, desc ? react.createElement("desc", {
        id: this.getIdForElement("desc")
      }, desc) : null, children), react.createElement("div", {
        style: portalDivStyle
      }, react.cloneElement(portalComponent, _objectSpread$f({}, portalProps, {
        ref: this.savePortalRef
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          responsive = _props.responsive,
          events = _props.events,
          title = _props.title,
          desc = _props.desc,
          tabIndex = _props.tabIndex,
          preserveAspectRatio = _props.preserveAspectRatio,
          role = _props.role;
      var style = responsive ? this.props.style : Helpers.omit(this.props.style, ["height", "width"]);

      var svgProps = assign_1({
        width: width,
        height: height,
        tabIndex: tabIndex,
        role: role,
        "aria-labelledby": [title && this.getIdForElement("title"), this.props["aria-labelledby"]].filter(Boolean).join(" ") || undefined,
        "aria-describedby": [desc && this.getIdForElement("desc"), this.props["aria-describedby"]].filter(Boolean).join(" ") || undefined,
        viewBox: responsive ? "0 0 ".concat(width, " ").concat(height) : undefined,
        preserveAspectRatio: responsive ? preserveAspectRatio : undefined
      }, events);

      return this.renderContainer(this.props, svgProps, style);
    }
  }]);

  return VictoryContainer;
}(react.Component);

Object.defineProperty(VictoryContainer, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryContainer"
});
Object.defineProperty(VictoryContainer, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "container"
});
Object.defineProperty(VictoryContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    "aria-describedby": propTypes.string,
    "aria-labelledby": propTypes.string,
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    className: propTypes.string,
    containerId: propTypes.oneOfType([propTypes.number, propTypes.string]),
    containerRef: propTypes.func,
    desc: propTypes.string,
    events: propTypes.object,
    height: CustomPropTypes.nonNegative,
    name: propTypes.string,
    origin: propTypes.shape({
      x: CustomPropTypes.nonNegative,
      y: CustomPropTypes.nonNegative
    }),
    ouiaId: propTypes.oneOfType([propTypes.number, propTypes.string]),
    ouiaSafe: propTypes.bool,
    ouiaType: propTypes.string,
    polar: propTypes.bool,
    portalComponent: propTypes.element,
    portalZIndex: CustomPropTypes.integer,
    preserveAspectRatio: propTypes.string,
    responsive: propTypes.bool,
    role: propTypes.string,
    style: propTypes.object,
    tabIndex: propTypes.number,
    theme: propTypes.object,
    title: propTypes.string,
    width: CustomPropTypes.nonNegative
  }
});
Object.defineProperty(VictoryContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "VictoryContainer",
    portalComponent: react.createElement(Portal, null),
    portalZIndex: 99,
    responsive: true,
    role: "img"
  }
});
Object.defineProperty(VictoryContainer, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: TimerContext
});

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$1.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$9(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VictoryPortal =
/*#__PURE__*/
function (_React$Component) {
  _inherits$9(VictoryPortal, _React$Component);

  function VictoryPortal() {
    _classCallCheck$9(this, VictoryPortal);

    return _possibleConstructorReturn$9(this, (VictoryPortal.__proto__ || Object.getPrototypeOf(VictoryPortal)).apply(this, arguments));
  }

  _createClass$9(VictoryPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.checkedContext) {
        if (typeof this.context.portalUpdate !== "function") {
          var msg = "`renderInPortal` is not supported outside of `VictoryContainer`. " + "Component will be rendered in place";
          Log.warn(msg);
          this.renderInPlace = true;
        }

        this.checkedContext = true;
      }

      this.forceUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.renderInPlace) {
        this.portalKey = this.portalKey || this.context.portalRegister();
        this.context.portalUpdate(this.portalKey, this.element);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context && this.context.portalDeregister) {
        this.context.portalDeregister(this.portalKey);
      }
    } // Overridden in victory-core-native

  }, {
    key: "renderPortal",
    value: function renderPortal(child) {
      if (this.renderInPlace) {
        return child;
      }

      this.element = child;
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var children = Array.isArray(this.props.children) ? this.props.children[0] : this.props.children;
      var groupComponent = this.props.groupComponent;
      var childProps = children && children.props || {};
      var standardProps = childProps.groupComponent ? {
        groupComponent: groupComponent,
        standalone: false
      } : {};

      var newProps = defaults_1(standardProps, childProps, Helpers.omit(this.props, ["children", "groupComponent"]));

      var child = children && react.cloneElement(children, newProps);
      return this.renderPortal(child);
    }
  }]);

  return VictoryPortal;
}(react.Component);

Object.defineProperty(VictoryPortal, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryPortal"
});
Object.defineProperty(VictoryPortal, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "portal"
});
Object.defineProperty(VictoryPortal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: propTypes.node,
    groupComponent: propTypes.element
  }
});
Object.defineProperty(VictoryPortal, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    groupComponent: react.createElement("g", null)
  }
});
Object.defineProperty(VictoryPortal, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: PortalContext
});

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var Rect = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties$4(props, ["desc"]);

  return desc ? react.createElement("rect", _extends$3({
    vectorEffect: "non-scaling-stroke"
  }, rest), react.createElement("desc", null, desc)) : react.createElement("rect", _extends$3({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

// Private Functions
function getVerticalAnchor(props, datum) {
  datum = datum || {};
  var sign = datum._y >= 0 ? 1 : -1;
  var labelStyle = props.style && props.style.labels || {};

  if (datum.verticalAnchor || labelStyle.verticalAnchor) {
    return datum.verticalAnchor || labelStyle.verticalAnchor;
  } else if (!props.horizontal) {
    return sign >= 0 ? "end" : "start";
  } else {
    return "middle";
  }
}

function getTextAnchor(props, datum) {
  datum = datum || {};
  var style = props.style,
      horizontal = props.horizontal;
  var sign = datum._y >= 0 ? 1 : -1;
  var labelStyle = style && style.labels || {};

  if (datum.verticalAnchor || labelStyle.verticalAnchor) {
    return datum.verticalAnchor || labelStyle.verticalAnchor;
  } else if (!horizontal) {
    return "middle";
  } else {
    return sign >= 0 ? "start" : "end";
  }
}

function getAngle$1(props, datum) {
  datum = datum || {};
  var labelStyle = props.style && props.style.labels || {};
  return datum.angle === undefined ? labelStyle.angle : datum.angle;
}

function getPadding(props, datum) {
  datum = datum || {};
  var horizontal = props.horizontal,
      style = props.style;
  var labelStyle = style.labels || {};
  var defaultPadding = Helpers.evaluateProp(labelStyle.padding, props) || 0;
  var sign = datum._y < 0 ? -1 : 1;
  return {
    x: horizontal ? sign * defaultPadding : 0,
    y: horizontal ? 0 : -1 * sign * defaultPadding
  };
}

function getOffset$2(props, datum) {
  if (props.polar) {
    return {};
  }

  var padding = getPadding(props, datum);
  return {
    dx: padding.x,
    dy: padding.y
  };
}

function getPosition$3(props, datum) {
  var polar = props.polar;

  var _Helpers$scalePoint = Helpers.scalePoint(props, datum),
      x = _Helpers$scalePoint.x,
      y = _Helpers$scalePoint.y;

  if (!polar) {
    return {
      x: x,
      y: y
    };
  } else {
    var polarPadding = getPolarPadding(props, datum);
    return {
      x: x + polarPadding.x,
      y: y + polarPadding.y
    };
  }
}

function getPolarPadding(props, datum) {
  var style = props.style;
  var degrees = getDegrees(props, datum);
  var labelStyle = style.labels || {};
  var padding = Helpers.evaluateProp(labelStyle.padding, props) || 0;
  var angle = Helpers.degreesToRadians(degrees);
  return {
    x: padding * Math.cos(angle),
    y: -padding * Math.sin(angle)
  };
}

function getLabelPlacement(props) {
  var labelComponent = props.labelComponent,
      labelPlacement = props.labelPlacement,
      polar = props.polar;
  var defaultLabelPlacement = polar ? "perpendicular" : "vertical";
  return labelPlacement ? labelPlacement : labelComponent.props && labelComponent.props.labelPlacement || defaultLabelPlacement;
}

function getPolarOrientation(degrees) {
  // eslint-disable-next-line no-magic-numbers
  if (degrees < 45 || degrees > 315) {
    return "right"; // eslint-disable-next-line no-magic-numbers
  } else if (degrees >= 45 && degrees <= 135) {
    return "top"; // eslint-disable-next-line no-magic-numbers
  } else if (degrees > 135 && degrees < 225) {
    return "left";
  } else {
    return "bottom";
  }
} // Exported Functions


function getText(props, datum, index) {
  datum = datum || {};

  if (datum.label !== undefined) {
    return datum.label;
  }

  return Array.isArray(props.labels) ? props.labels[index] : props.labels;
}

function getPolarTextAnchor(props, degrees) {
  var labelPlacement = getLabelPlacement(props);

  if (labelPlacement === "perpendicular" || labelPlacement === "vertical" && (degrees === 90 || degrees === 270)) {
    return "middle";
  }

  return degrees <= 90 || degrees > 270 ? "start" : "end";
}

function getPolarVerticalAnchor(props, degrees) {
  var labelPlacement = getLabelPlacement(props);
  var orientation = getPolarOrientation(degrees);

  if (labelPlacement === "parallel" || orientation === "left" || orientation === "right") {
    return "middle";
  }

  return orientation === "top" ? "end" : "start";
}

function getPolarAngle(props, baseAngle) {
  var labelPlacement = props.labelPlacement,
      datum = props.datum;

  if (!labelPlacement || labelPlacement === "vertical") {
    return 0;
  }

  var degrees = baseAngle !== undefined ? baseAngle % 360 : getDegrees(props, datum);
  var sign = degrees > 90 && degrees < 180 || degrees > 270 ? 1 : -1;
  var angle = 0;

  if (degrees === 0 || degrees === 180) {
    angle = 90;
  } else if (degrees > 0 && degrees < 180) {
    angle = 90 - degrees;
  } else if (degrees > 180 && degrees < 360) {
    angle = 270 - degrees;
  }

  var labelRotation = labelPlacement === "perpendicular" ? 0 : 90;
  return angle + sign * labelRotation;
}

function getDegrees(props, datum) {
  var _Helpers$getPoint = Helpers.getPoint(datum),
      x = _Helpers$getPoint.x;

  return Helpers.radiansToDegrees(props.scale.x(x)) % 360;
}

function getProps(props, index) {
  var scale = props.scale,
      data = props.data,
      style = props.style,
      horizontal = props.horizontal,
      polar = props.polar,
      width = props.width,
      height = props.height,
      theme = props.theme,
      labelComponent = props.labelComponent;
  var datum = data[index];
  var degrees = getDegrees(props, datum);
  var textAnchor = polar ? getPolarTextAnchor(props, degrees) : getTextAnchor(props, datum);
  var verticalAnchor = polar ? getPolarVerticalAnchor(props, degrees) : getVerticalAnchor(props, datum);
  var angle = getAngle$1(props, datum);
  var text = getText(props, datum, index);
  var labelPlacement = getLabelPlacement(props);

  var _getPosition = getPosition$3(props, datum),
      x = _getPosition.x,
      y = _getPosition.y;

  var _getOffset = getOffset$2(props, datum),
      dx = _getOffset.dx,
      dy = _getOffset.dy;

  var labelProps = {
    angle: angle,
    data: data,
    datum: datum,
    horizontal: horizontal,
    index: index,
    polar: polar,
    scale: scale,
    labelPlacement: labelPlacement,
    text: text,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    width: width,
    height: height,
    style: style.labels
  };

  if (!Helpers.isTooltip(labelComponent)) {
    return labelProps;
  }

  var tooltipTheme = theme && theme.tooltip || {};
  return defaults_1({}, labelProps, Helpers.omit(tooltipTheme, ["style"]));
}

var LabelHelpers = {
  getText: getText,
  getPolarTextAnchor: getPolarTextAnchor,
  getPolarVerticalAnchor: getPolarVerticalAnchor,
  getPolarAngle: getPolarAngle,
  getDegrees: getDegrees,
  getProps: getProps
};

/**
 * Given an object with CSS/SVG transform definitions, return the string value
 * for use with the `transform` CSS property or SVG attribute. Note that we
 * can't always guarantee the order will match the author's intended order, so
 * authors should only use the object notation if they know that their transform
 * is commutative or that there is only one.
 * @param {Object} obj An object of transform definitions.
 * @returns {String} The generated transform string.
 */
var toTransformString = function (obj) {
  for (var _len = arguments.length, more = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    more[_key - 1] = arguments[_key];
  }

  if (more.length > 0) {
    return more.reduce(function (memo, currentObj) {
      return [memo, toTransformString(currentObj)].join(" ");
    }, toTransformString(obj)).trim();
  } else {
    if (obj === undefined || obj === null || typeof obj === "string") {
      return obj;
    }

    var transforms = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var value = obj[key];
        transforms.push("".concat(key, "(").concat(value, ")"));
      }
    }

    return transforms.join(" ").trim();
  }
};

var Style = {
  toTransformString: toTransformString,

  /**
   * Given the name of a color scale, getColorScale will return an array
   * of 5 hex string values in that color scale. If no 'name' parameter
   * is given, it will return the Victory default grayscale.
   * @param {String} name The name of the color scale to return (optional).
   * @returns {Array} An array of 5 hex string values composing a color scale.
   */
  getColorScale: function (name) {
    var scales = {
      grayscale: ["#cccccc", "#969696", "#636363", "#252525"],
      qualitative: ["#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "#DF5A49", "#4F7DA1", "#55DBC1", "#EFDA97", "#E2A37F", "#DF948A"],
      heatmap: ["#428517", "#77D200", "#D6D305", "#EC8E19", "#C92B05"],
      warm: ["#940031", "#C43343", "#DC5429", "#FF821D", "#FFAF55"],
      cool: ["#2746B9", "#0B69D4", "#2794DB", "#31BB76", "#60E83B"],
      red: ["#FCAE91", "#FB6A4A", "#DE2D26", "#A50F15", "#750B0E"],
      blue: ["#002C61", "#004B8F", "#006BC9", "#3795E5", "#65B4F4"],
      green: ["#354722", "#466631", "#649146", "#8AB25C", "#A9C97E"]
    };
    return name ? scales[name] : scales.grayscale;
  }
};

function _toConsumableArray$g(arr) { return _arrayWithoutHoles$g(arr) || _iterableToArray$g(arr) || _nonIterableSpread$g(); }

function _nonIterableSpread$g() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$g(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$g(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Based on measuring specific character widths
// as in the following example https://bl.ocks.org/tophtucker/62f93a4658387bb61e4510c37e2e97cf
//prettier-ignore
var fonts = {
  "American Typewriter": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.4203125, 0.3296875, 0.6, 0.6375, 0.8015625, 0.8203125, 0.1875, 0.45625, 0.45625, 0.6375, 0.5, 0.2734375, 0.309375, 0.2734375, 0.4390625, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.2734375, 0.2734375, 0.5, 0.5, 0.5, 0.6, 0.6921875, 0.7640625, 0.6921875, 0.6375, 0.728125, 0.6734375, 0.6203125, 0.7109375, 0.784375, 0.3828125, 0.6421875, 0.7859375, 0.6375, 0.9484375, 0.7640625, 0.65625, 0.6375, 0.65625, 0.7296875, 0.6203125, 0.6375, 0.7109375, 0.740625, 0.940625, 0.784375, 0.7578125, 0.6203125, 0.4375, 0.5, 0.4375, 0.5, 0.5, 0.4921875, 0.5734375, 0.5890625, 0.5109375, 0.6, 0.528125, 0.43125, 0.5578125, 0.6375, 0.3109375, 0.40625, 0.6234375, 0.309375, 0.928125, 0.6375, 0.546875, 0.6, 0.58125, 0.4921875, 0.4921875, 0.4, 0.6203125, 0.625, 0.825, 0.6375, 0.640625, 0.528125, 0.5, 0.5, 0.5, 0.6671875],
    avg: 0.5793421052631578
  },
  Arial: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.278125, 0.278125, 0.35625, 0.55625, 0.55625, 0.890625, 0.6671875, 0.1921875, 0.334375, 0.334375, 0.390625, 0.584375, 0.278125, 0.334375, 0.278125, 0.278125, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125, 0.584375, 0.584375, 0.584375, 0.55625, 1.015625, 0.6703125, 0.6671875, 0.7234375, 0.7234375, 0.6671875, 0.6109375, 0.778125, 0.7234375, 0.278125, 0.5, 0.6671875, 0.55625, 0.834375, 0.7234375, 0.778125, 0.6671875, 0.778125, 0.7234375, 0.6671875, 0.6109375, 0.7234375, 0.6671875, 0.9453125, 0.6671875, 0.6671875, 0.6109375, 0.278125, 0.278125, 0.278125, 0.4703125, 0.584375, 0.334375, 0.55625, 0.55625, 0.5, 0.55625, 0.55625, 0.3125, 0.55625, 0.55625, 0.2234375, 0.2703125, 0.5, 0.2234375, 0.834375, 0.55625, 0.55625, 0.55625, 0.55625, 0.346875, 0.5, 0.278125, 0.55625, 0.5, 0.7234375, 0.5, 0.5, 0.5, 0.334375, 0.2609375, 0.334375, 0.584375],
    avg: 0.528733552631579
  },
  "Arial Black": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33125, 0.334375, 0.5, 0.6609375, 0.6671875, 1, 0.890625, 0.278125, 0.390625, 0.390625, 0.55625, 0.6609375, 0.334375, 0.334375, 0.334375, 0.28125, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.334375, 0.334375, 0.6609375, 0.6609375, 0.6609375, 0.6109375, 0.7453125, 0.78125, 0.778125, 0.778125, 0.778125, 0.7234375, 0.6671875, 0.834375, 0.834375, 0.390625, 0.6671875, 0.834375, 0.6671875, 0.9453125, 0.834375, 0.834375, 0.7234375, 0.834375, 0.78125, 0.7234375, 0.7234375, 0.834375, 0.7796875, 1.003125, 0.78125, 0.78125, 0.7234375, 0.390625, 0.28125, 0.390625, 0.6609375, 0.5125, 0.334375, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.41875, 0.6671875, 0.6671875, 0.334375, 0.384375, 0.6671875, 0.334375, 1, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.4703125, 0.6109375, 0.4453125, 0.6671875, 0.6140625, 0.946875, 0.6671875, 0.615625, 0.55625, 0.390625, 0.278125, 0.390625, 0.6609375],
    avg: 0.6213157894736842
  },
  Baskerville: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.25, 0.40625, 0.6671875, 0.490625, 0.875, 0.7015625, 0.178125, 0.2453125, 0.246875, 0.4171875, 0.6671875, 0.25, 0.3125, 0.25, 0.521875, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.6671875, 0.6671875, 0.6671875, 0.396875, 0.9171875, 0.684375, 0.615625, 0.71875, 0.7609375, 0.625, 0.553125, 0.771875, 0.803125, 0.3546875, 0.515625, 0.78125, 0.6046875, 0.928125, 0.75, 0.8234375, 0.5625, 0.96875, 0.7296875, 0.5421875, 0.6984375, 0.771875, 0.7296875, 0.9484375, 0.771875, 0.678125, 0.6359375, 0.3640625, 0.521875, 0.3640625, 0.46875, 0.5125, 0.334375, 0.46875, 0.521875, 0.428125, 0.521875, 0.4375, 0.3890625, 0.4765625, 0.53125, 0.25, 0.359375, 0.4640625, 0.240625, 0.803125, 0.53125, 0.5, 0.521875, 0.521875, 0.365625, 0.334375, 0.2921875, 0.521875, 0.4640625, 0.678125, 0.4796875, 0.465625, 0.428125, 0.4796875, 0.5109375, 0.4796875, 0.6671875],
    avg: 0.5323519736842108
  },
  Courier: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5984375, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6078125, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.61875, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.615625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6140625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625],
    avg: 0.6020559210526316
  },
  "Courier New": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5984375, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625],
    avg: 0.6015296052631579
  },
  cursive: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1921875, 0.24375, 0.40625, 0.5671875, 0.3984375, 0.721875, 0.909375, 0.2328125, 0.434375, 0.365625, 0.4734375, 0.5578125, 0.19375, 0.3484375, 0.19375, 0.7734375, 0.503125, 0.4171875, 0.5453125, 0.45, 0.6046875, 0.4703125, 0.5984375, 0.55625, 0.503125, 0.5546875, 0.20625, 0.2, 0.5625, 0.5546875, 0.546875, 0.403125, 0.70625, 0.734375, 0.7078125, 0.64375, 0.85, 0.753125, 0.75, 0.6484375, 1.0765625, 0.44375, 0.5359375, 0.8359375, 0.653125, 1.0109375, 1.1515625, 0.6796875, 0.6984375, 1.0625, 0.8234375, 0.5125, 0.9234375, 0.8546875, 0.70625, 0.9109375, 0.7421875, 0.715625, 0.6015625, 0.4640625, 0.3359375, 0.4109375, 0.5421875, 0.5421875, 0.4328125, 0.5125, 0.5, 0.3859375, 0.7375, 0.359375, 0.75625, 0.540625, 0.5328125, 0.3203125, 0.5296875, 0.5015625, 0.484375, 0.7890625, 0.5640625, 0.4203125, 0.703125, 0.471875, 0.4734375, 0.35, 0.4125, 0.5640625, 0.471875, 0.6484375, 0.5296875, 0.575, 0.4140625, 0.415625, 0.20625, 0.3796875, 0.5421875],
    avg: 0.5604440789473684
  },
  fantasy: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.215625, 0.2625, 0.3265625, 0.6109375, 0.534375, 0.7625, 0.7828125, 0.2, 0.4359375, 0.4359375, 0.3765625, 0.5109375, 0.2796875, 0.4609375, 0.2796875, 0.5296875, 0.6640625, 0.253125, 0.521875, 0.4765625, 0.6640625, 0.490625, 0.528125, 0.5546875, 0.496875, 0.5421875, 0.2796875, 0.2796875, 0.5625, 0.4609375, 0.5625, 0.4828125, 0.609375, 0.740625, 0.7234375, 0.740625, 0.8265625, 0.7234375, 0.6171875, 0.7359375, 0.765625, 0.240625, 0.5453125, 0.715625, 0.6078125, 0.8640625, 0.653125, 0.9125, 0.6484375, 0.946875, 0.6921875, 0.653125, 0.6953125, 0.8015625, 0.58125, 0.784375, 0.671875, 0.6265625, 0.690625, 0.4359375, 0.5296875, 0.4359375, 0.53125, 0.5, 0.2875, 0.5375, 0.603125, 0.4984375, 0.60625, 0.53125, 0.434375, 0.6421875, 0.56875, 0.209375, 0.4671875, 0.5484375, 0.2203125, 0.709375, 0.55, 0.5984375, 0.6140625, 0.5765625, 0.40625, 0.4734375, 0.3734375, 0.559375, 0.4421875, 0.6421875, 0.4890625, 0.578125, 0.4484375, 0.2546875, 0.2203125, 0.2546875, 0.55],
    avg: 0.536496710526316
  },
  Geneva: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3328125, 0.3046875, 0.5, 0.6671875, 0.6671875, 0.90625, 0.728125, 0.3046875, 0.446875, 0.446875, 0.5078125, 0.6671875, 0.3046875, 0.3796875, 0.3046875, 0.5390625, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.3046875, 0.3046875, 0.6671875, 0.6671875, 0.6671875, 0.56875, 0.871875, 0.728125, 0.6375, 0.6515625, 0.7015625, 0.5765625, 0.5546875, 0.675, 0.690625, 0.2421875, 0.4921875, 0.6640625, 0.584375, 0.7890625, 0.709375, 0.7359375, 0.584375, 0.78125, 0.60625, 0.60625, 0.640625, 0.6671875, 0.728125, 0.946875, 0.6109375, 0.6109375, 0.5765625, 0.446875, 0.5390625, 0.446875, 0.6671875, 0.6671875, 0.5921875, 0.5546875, 0.6109375, 0.546875, 0.603125, 0.5765625, 0.390625, 0.6109375, 0.584375, 0.2359375, 0.334375, 0.5390625, 0.2359375, 0.8953125, 0.584375, 0.60625, 0.603125, 0.603125, 0.3875, 0.509375, 0.44375, 0.584375, 0.565625, 0.78125, 0.53125, 0.571875, 0.5546875, 0.4515625, 0.246875, 0.4515625, 0.6671875],
    avg: 0.5762664473684211
  },
  Georgia: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2421875, 0.33125, 0.4125, 0.64375, 0.6109375, 0.81875, 0.7109375, 0.215625, 0.375, 0.375, 0.4734375, 0.64375, 0.2703125, 0.375, 0.2703125, 0.46875, 0.6140625, 0.4296875, 0.559375, 0.553125, 0.565625, 0.5296875, 0.5671875, 0.503125, 0.596875, 0.5671875, 0.3125, 0.3125, 0.64375, 0.64375, 0.64375, 0.4796875, 0.9296875, 0.715625, 0.6546875, 0.6421875, 0.75, 0.6546875, 0.6, 0.7265625, 0.815625, 0.390625, 0.51875, 0.7203125, 0.6046875, 0.928125, 0.7671875, 0.7453125, 0.6109375, 0.7453125, 0.7234375, 0.5625, 0.61875, 0.7578125, 0.70625, 0.99375, 0.7125, 0.6640625, 0.6015625, 0.375, 0.46875, 0.375, 0.64375, 0.65, 0.5, 0.5046875, 0.56875, 0.4546875, 0.575, 0.484375, 0.39375, 0.509375, 0.5828125, 0.29375, 0.3671875, 0.546875, 0.2875, 0.88125, 0.5921875, 0.5390625, 0.571875, 0.5640625, 0.4109375, 0.4328125, 0.3453125, 0.5765625, 0.5203125, 0.75625, 0.50625, 0.5171875, 0.4453125, 0.43125, 0.375, 0.43125, 0.64375],
    avg: 0.5551809210526316
  },
  "Gill Sans": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2765625, 0.271875, 0.3546875, 0.584375, 0.5421875, 0.6765625, 0.625, 0.1890625, 0.3234375, 0.3234375, 0.4171875, 0.584375, 0.2203125, 0.3234375, 0.2203125, 0.28125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.2203125, 0.2296875, 0.584375, 0.584375, 0.584375, 0.334375, 1.0109375, 0.6671875, 0.5640625, 0.709375, 0.75, 0.5, 0.4703125, 0.740625, 0.7296875, 0.25, 0.3125, 0.65625, 0.490625, 0.78125, 0.78125, 0.8234375, 0.5109375, 0.8234375, 0.6046875, 0.459375, 0.6046875, 0.709375, 0.6046875, 1.0421875, 0.709375, 0.6046875, 0.646875, 0.334375, 0.28125, 0.334375, 0.4703125, 0.5828125, 0.334375, 0.428125, 0.5, 0.4390625, 0.5109375, 0.4796875, 0.296875, 0.428125, 0.5, 0.2203125, 0.2265625, 0.5, 0.2203125, 0.771875, 0.5, 0.553125, 0.5, 0.5, 0.3984375, 0.3859375, 0.334375, 0.5, 0.4390625, 0.7203125, 0.5, 0.4390625, 0.4171875, 0.334375, 0.2609375, 0.334375, 0.584375],
    avg: 0.4933717105263159
  },
  Helvetica: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2796875, 0.2765625, 0.3546875, 0.5546875, 0.5546875, 0.8890625, 0.665625, 0.190625, 0.3328125, 0.3328125, 0.3890625, 0.5828125, 0.2765625, 0.3328125, 0.2765625, 0.3015625, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.2765625, 0.2765625, 0.584375, 0.5828125, 0.584375, 0.5546875, 1.0140625, 0.665625, 0.665625, 0.721875, 0.721875, 0.665625, 0.609375, 0.7765625, 0.721875, 0.2765625, 0.5, 0.665625, 0.5546875, 0.8328125, 0.721875, 0.7765625, 0.665625, 0.7765625, 0.721875, 0.665625, 0.609375, 0.721875, 0.665625, 0.94375, 0.665625, 0.665625, 0.609375, 0.2765625, 0.3546875, 0.2765625, 0.4765625, 0.5546875, 0.3328125, 0.5546875, 0.5546875, 0.5, 0.5546875, 0.5546875, 0.2765625, 0.5546875, 0.5546875, 0.221875, 0.240625, 0.5, 0.221875, 0.8328125, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.3328125, 0.5, 0.2765625, 0.5546875, 0.5, 0.721875, 0.5, 0.5, 0.5, 0.3546875, 0.259375, 0.353125, 0.5890625],
    avg: 0.5279276315789471
  },
  "Helvetica Neue": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.278125, 0.259375, 0.4265625, 0.55625, 0.55625, 1, 0.6453125, 0.278125, 0.2703125, 0.26875, 0.353125, 0.6, 0.278125, 0.3890625, 0.278125, 0.36875, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125, 0.6, 0.6, 0.6, 0.55625, 0.8, 0.6625, 0.6859375, 0.7234375, 0.7046875, 0.6125, 0.575, 0.759375, 0.7234375, 0.259375, 0.5203125, 0.6703125, 0.55625, 0.871875, 0.7234375, 0.7609375, 0.6484375, 0.7609375, 0.6859375, 0.6484375, 0.575, 0.7234375, 0.6140625, 0.9265625, 0.6125, 0.6484375, 0.6125, 0.259375, 0.36875, 0.259375, 0.6, 0.5, 0.25625, 0.5375, 0.59375, 0.5375, 0.59375, 0.5375, 0.2984375, 0.575, 0.55625, 0.2234375, 0.2375, 0.5203125, 0.2234375, 0.853125, 0.55625, 0.575, 0.59375, 0.59375, 0.334375, 0.5, 0.315625, 0.55625, 0.5, 0.759375, 0.51875, 0.5, 0.48125, 0.334375, 0.2234375, 0.334375, 0.6],
    avg: 0.5279440789473684
  },
  "Hoefler Text": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2359375, 0.2234375, 0.3921875, 0.7125, 0.49375, 0.8859375, 0.771875, 0.2125, 0.3078125, 0.309375, 0.375, 0.4234375, 0.234375, 0.3125, 0.234375, 0.3, 0.5828125, 0.365625, 0.434375, 0.3921875, 0.5234375, 0.3984375, 0.5125, 0.4328125, 0.46875, 0.5125, 0.234375, 0.234375, 0.515625, 0.4234375, 0.515625, 0.340625, 0.7609375, 0.7359375, 0.6359375, 0.721875, 0.8125, 0.6375, 0.5875, 0.8078125, 0.853125, 0.4296875, 0.503125, 0.78125, 0.609375, 0.9609375, 0.8515625, 0.8140625, 0.6125, 0.8140625, 0.71875, 0.49375, 0.7125, 0.76875, 0.771875, 1.125, 0.7765625, 0.7734375, 0.65625, 0.321875, 0.3078125, 0.321875, 0.3546875, 0.5, 0.3375, 0.446875, 0.5359375, 0.45, 0.5296875, 0.4546875, 0.425, 0.4921875, 0.54375, 0.2671875, 0.240625, 0.5390625, 0.25, 0.815625, 0.5375, 0.5234375, 0.5390625, 0.5421875, 0.365625, 0.36875, 0.35625, 0.5171875, 0.5015625, 0.75, 0.5, 0.509375, 0.44375, 0.2421875, 0.14375, 0.2421875, 0.35],
    avg: 0.5116447368421051
  },
  "Montserrat": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2625, 0.2609375, 0.3734375, 0.696875, 0.615625, 0.8296875, 0.6703125, 0.203125, 0.3296875, 0.3296875, 0.3875, 0.575, 0.2125, 0.3828125, 0.2125, 0.3953125, 0.6625, 0.3625, 0.56875, 0.5640625, 0.6625, 0.5671875, 0.609375, 0.5890625, 0.6390625, 0.609375, 0.2125, 0.2125, 0.575, 0.575, 0.575, 0.5671875, 1.034375, 0.7171875, 0.7546875, 0.7203125, 0.8265625, 0.6703125, 0.634375, 0.7734375, 0.8140625, 0.303125, 0.5078125, 0.7125, 0.5890625, 0.95625, 0.8140625, 0.8390625, 0.71875, 0.8390625, 0.7234375, 0.615625, 0.575, 0.7921875, 0.6984375, 1.1125, 0.65625, 0.6359375, 0.6515625, 0.31875, 0.396875, 0.31875, 0.5765625, 0.5, 0.6, 0.590625, 0.678125, 0.5640625, 0.678125, 0.6046875, 0.375, 0.6875, 0.678125, 0.2703125, 0.365625, 0.6015625, 0.2703125, 1.0625, 0.678125, 0.628125, 0.678125, 0.678125, 0.4015625, 0.4890625, 0.40625, 0.6734375, 0.5421875, 0.8796875, 0.534375, 0.5671875, 0.5125, 0.334375, 0.2953125, 0.334375, 0.575],
    avg: 0.571792763157895
  },
  monospace: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5984375, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6078125, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.61875, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.615625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6140625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625],
    avg: 0.6020559210526316
  },
  Overpass: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2296875, 0.2765625, 0.4203125, 0.68125, 0.584375, 0.8515625, 0.7015625, 0.2203125, 0.3453125, 0.3453125, 0.53125, 0.63125, 0.2234375, 0.3953125, 0.2234375, 0.509375, 0.65, 0.4046875, 0.6171875, 0.60625, 0.6484375, 0.60625, 0.6015625, 0.5375, 0.615625, 0.6015625, 0.2234375, 0.2234375, 0.63125, 0.63125, 0.63125, 0.5015625, 0.8203125, 0.696875, 0.6671875, 0.65, 0.6859375, 0.6015625, 0.559375, 0.690625, 0.7078125, 0.2953125, 0.565625, 0.678125, 0.58125, 0.8046875, 0.7109375, 0.740625, 0.6421875, 0.740625, 0.6765625, 0.6046875, 0.590625, 0.696875, 0.6640625, 0.853125, 0.65, 0.6671875, 0.6625, 0.3734375, 0.509375, 0.3734375, 0.63125, 0.5125, 0.4, 0.5328125, 0.5625, 0.51875, 0.5625, 0.546875, 0.3359375, 0.5625, 0.565625, 0.25625, 0.3203125, 0.55, 0.265625, 0.85, 0.565625, 0.5671875, 0.5625, 0.5625, 0.4046875, 0.4765625, 0.3796875, 0.565625, 0.521875, 0.7265625, 0.53125, 0.5390625, 0.5125, 0.3671875, 0.275, 0.3671875, 0.63125],
    avg: 0.5430756578947369
  },
  Palatino: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.278125, 0.371875, 0.60625, 0.5, 0.840625, 0.778125, 0.209375, 0.334375, 0.334375, 0.390625, 0.60625, 0.2578125, 0.334375, 0.25, 0.60625, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.60625, 0.60625, 0.60625, 0.4453125, 0.7484375, 0.778125, 0.6109375, 0.709375, 0.775, 0.6109375, 0.55625, 0.7640625, 0.8328125, 0.3375, 0.346875, 0.7265625, 0.6109375, 0.946875, 0.83125, 0.7875, 0.6046875, 0.7875, 0.66875, 0.525, 0.6140625, 0.778125, 0.7234375, 1, 0.6671875, 0.6671875, 0.6671875, 0.334375, 0.60625, 0.334375, 0.60625, 0.5, 0.334375, 0.5, 0.565625, 0.4453125, 0.6109375, 0.4796875, 0.340625, 0.55625, 0.5828125, 0.2921875, 0.2671875, 0.5640625, 0.2921875, 0.8828125, 0.5828125, 0.546875, 0.6015625, 0.5609375, 0.3953125, 0.425, 0.3265625, 0.603125, 0.565625, 0.834375, 0.5171875, 0.55625, 0.5, 0.334375, 0.60625, 0.334375, 0.60625],
    avg: 0.5408552631578947
  },
  "RedHatText": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2328125, 0.2203125, 0.35625, 0.6890625, 0.55, 0.7390625, 0.6703125, 0.2140625, 0.4015625, 0.4015625, 0.4546875, 0.53125, 0.2203125, 0.45625, 0.2203125, 0.515625, 0.6609375, 0.3078125, 0.5484375, 0.5875, 0.61875, 0.5703125, 0.6203125, 0.559375, 0.6140625, 0.6203125, 0.2203125, 0.2234375, 0.465625, 0.534375, 0.465625, 0.5125, 0.7671875, 0.6609375, 0.6703125, 0.7265625, 0.728125, 0.6203125, 0.6109375, 0.8, 0.73125, 0.253125, 0.6, 0.6125, 0.6078125, 0.8625, 0.7390625, 0.8109375, 0.6546875, 0.809375, 0.6484375, 0.6234375, 0.6171875, 0.7125, 0.6609375, 0.8984375, 0.6546875, 0.646875, 0.60625, 0.3625, 0.5203125, 0.3625, 0.540625, 0.4609375, 0.5234375, 0.5265625, 0.584375, 0.509375, 0.5828125, 0.5578125, 0.3703125, 0.5828125, 0.553125, 0.2234375, 0.24375, 0.4890625, 0.2234375, 0.8453125, 0.553125, 0.58125, 0.584375, 0.5828125, 0.353125, 0.453125, 0.378125, 0.553125, 0.5015625, 0.6984375, 0.4875, 0.4984375, 0.459375, 0.3953125, 0.2921875, 0.3953125, 0.58125],
    avg: 0.5341940789473685
  },
  "sans-serif": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.278125, 0.278125, 0.35625, 0.55625, 0.55625, 0.890625, 0.6671875, 0.1921875, 0.334375, 0.334375, 0.390625, 0.584375, 0.278125, 0.334375, 0.278125, 0.303125, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125, 0.5859375, 0.584375, 0.5859375, 0.55625, 1.015625, 0.6671875, 0.6671875, 0.7234375, 0.7234375, 0.6671875, 0.6109375, 0.778125, 0.7234375, 0.278125, 0.5, 0.6671875, 0.55625, 0.834375, 0.7234375, 0.778125, 0.6671875, 0.778125, 0.7234375, 0.6671875, 0.6109375, 0.7234375, 0.6671875, 0.9453125, 0.6671875, 0.6671875, 0.6109375, 0.278125, 0.35625, 0.278125, 0.478125, 0.55625, 0.334375, 0.55625, 0.55625, 0.5, 0.55625, 0.55625, 0.278125, 0.55625, 0.55625, 0.2234375, 0.2421875, 0.5, 0.2234375, 0.834375, 0.55625, 0.55625, 0.55625, 0.55625, 0.334375, 0.5, 0.278125, 0.55625, 0.5, 0.7234375, 0.5, 0.5, 0.5, 0.35625, 0.2609375, 0.3546875, 0.590625],
    avg: 0.5293256578947368
  },
  Seravek: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.215625, 0.296875, 0.4171875, 0.6734375, 0.4953125, 0.9125, 0.740625, 0.2421875, 0.3375, 0.3375, 0.409375, 0.60625, 0.2609375, 0.35625, 0.25625, 0.41875, 0.5921875, 0.3515625, 0.475, 0.4875, 0.5375, 0.509375, 0.5484375, 0.4546875, 0.5421875, 0.5484375, 0.25625, 0.2546875, 0.5875, 0.6171875, 0.5875, 0.4578125, 0.8140625, 0.6765625, 0.5703125, 0.6109375, 0.684375, 0.5109375, 0.4953125, 0.678125, 0.6859375, 0.2625, 0.2625, 0.5859375, 0.4734375, 0.846875, 0.709375, 0.740625, 0.509375, 0.740625, 0.584375, 0.5015625, 0.528125, 0.675, 0.5953125, 0.9453125, 0.596875, 0.540625, 0.540625, 0.359375, 0.4203125, 0.359375, 0.5109375, 0.421875, 0.4046875, 0.5015625, 0.5421875, 0.446875, 0.5453125, 0.484375, 0.38125, 0.5140625, 0.5546875, 0.240625, 0.2640625, 0.490625, 0.2765625, 0.8625, 0.5546875, 0.546875, 0.5453125, 0.5453125, 0.3625, 0.41875, 0.3890625, 0.5453125, 0.4703125, 0.7546875, 0.4921875, 0.4609375, 0.453125, 0.4015625, 0.2640625, 0.4015625, 0.58125],
    avg: 0.5044078947368421
  },
  serif: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2484375, 0.334375, 0.409375, 0.5, 0.5, 0.834375, 0.778125, 0.18125, 0.334375, 0.334375, 0.5, 0.5640625, 0.25, 0.334375, 0.25, 0.278125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.278125, 0.278125, 0.5640625, 0.5640625, 0.5640625, 0.4453125, 0.921875, 0.7234375, 0.6671875, 0.6671875, 0.7234375, 0.6109375, 0.55625, 0.7234375, 0.7234375, 0.334375, 0.390625, 0.7234375, 0.6109375, 0.890625, 0.7234375, 0.7234375, 0.55625, 0.7234375, 0.6671875, 0.55625, 0.6109375, 0.7234375, 0.7234375, 0.9453125, 0.7234375, 0.7234375, 0.6109375, 0.334375, 0.340625, 0.334375, 0.4703125, 0.5, 0.3453125, 0.4453125, 0.5, 0.4453125, 0.5, 0.4453125, 0.3828125, 0.5, 0.5, 0.278125, 0.3359375, 0.5, 0.278125, 0.778125, 0.5, 0.5, 0.5, 0.5, 0.3375, 0.390625, 0.2796875, 0.5, 0.5, 0.7234375, 0.5, 0.5, 0.4453125, 0.48125, 0.2015625, 0.48125, 0.5421875],
    avg: 0.5126315789473684
  },
  Tahoma: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3109375, 0.3328125, 0.4015625, 0.728125, 0.546875, 0.9765625, 0.70625, 0.2109375, 0.3828125, 0.3828125, 0.546875, 0.728125, 0.303125, 0.3640625, 0.303125, 0.3953125, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.3546875, 0.3546875, 0.728125, 0.728125, 0.728125, 0.475, 0.909375, 0.6109375, 0.590625, 0.6015625, 0.6796875, 0.5625, 0.521875, 0.66875, 0.6765625, 0.3734375, 0.4171875, 0.6046875, 0.4984375, 0.771875, 0.66875, 0.7078125, 0.5515625, 0.7078125, 0.6375, 0.5578125, 0.5875, 0.65625, 0.60625, 0.903125, 0.58125, 0.5890625, 0.559375, 0.3828125, 0.39375, 0.3828125, 0.728125, 0.5625, 0.546875, 0.525, 0.553125, 0.4625, 0.553125, 0.5265625, 0.3546875, 0.553125, 0.5578125, 0.2296875, 0.328125, 0.51875, 0.2296875, 0.840625, 0.5578125, 0.54375, 0.553125, 0.553125, 0.3609375, 0.446875, 0.3359375, 0.5578125, 0.4984375, 0.7421875, 0.4953125, 0.4984375, 0.4453125, 0.48125, 0.3828125, 0.48125, 0.728125],
    avg: 0.5384374999999998
  },
  "Times New Roman": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2484375, 0.334375, 0.409375, 0.5, 0.5, 0.834375, 0.778125, 0.18125, 0.334375, 0.334375, 0.5, 0.5640625, 0.25, 0.334375, 0.25, 0.28125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.278125, 0.278125, 0.5640625, 0.5640625, 0.5640625, 0.4453125, 0.921875, 0.7234375, 0.6671875, 0.6671875, 0.7234375, 0.6109375, 0.55625, 0.7234375, 0.7234375, 0.334375, 0.390625, 0.73125, 0.6109375, 0.890625, 0.7375, 0.7234375, 0.55625, 0.7234375, 0.6765625, 0.55625, 0.6109375, 0.7234375, 0.7234375, 0.9453125, 0.7234375, 0.7234375, 0.6109375, 0.334375, 0.28125, 0.334375, 0.4703125, 0.51875, 0.334375, 0.4453125, 0.503125, 0.4453125, 0.503125, 0.4453125, 0.4359375, 0.5, 0.5, 0.278125, 0.35625, 0.50625, 0.278125, 0.778125, 0.5, 0.5, 0.5046875, 0.5, 0.340625, 0.390625, 0.2796875, 0.5, 0.5, 0.7234375, 0.5, 0.5, 0.4453125, 0.48125, 0.2015625, 0.48125, 0.5421875],
    avg: 0.5134375
  },
  "Trebuchet MS": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3015625, 0.3671875, 0.325, 0.53125, 0.525, 0.6015625, 0.70625, 0.1609375, 0.3671875, 0.3671875, 0.3671875, 0.525, 0.3671875, 0.3671875, 0.3671875, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.3671875, 0.3671875, 0.525, 0.525, 0.525, 0.3671875, 0.771875, 0.590625, 0.5671875, 0.5984375, 0.6140625, 0.5359375, 0.525, 0.6765625, 0.6546875, 0.2796875, 0.4765625, 0.5765625, 0.5078125, 0.7109375, 0.6390625, 0.675, 0.5578125, 0.7421875, 0.5828125, 0.48125, 0.58125, 0.6484375, 0.5875, 0.853125, 0.5578125, 0.5703125, 0.5515625, 0.3671875, 0.3578125, 0.3671875, 0.525, 0.53125, 0.525, 0.5265625, 0.5578125, 0.4953125, 0.5578125, 0.546875, 0.375, 0.503125, 0.546875, 0.2859375, 0.3671875, 0.5046875, 0.2953125, 0.83125, 0.546875, 0.5375, 0.5578125, 0.5578125, 0.3890625, 0.40625, 0.396875, 0.546875, 0.490625, 0.7453125, 0.5015625, 0.49375, 0.475, 0.3671875, 0.525, 0.3671875, 0.525],
    avg: 0.5085197368421052
  },
  Verdana: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35, 0.39375, 0.459375, 0.81875, 0.6359375, 1.0765625, 0.759375, 0.26875, 0.4546875, 0.4546875, 0.6359375, 0.81875, 0.3640625, 0.4546875, 0.3640625, 0.4703125, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.4546875, 0.4546875, 0.81875, 0.81875, 0.81875, 0.546875, 1, 0.684375, 0.6859375, 0.6984375, 0.771875, 0.6328125, 0.575, 0.7765625, 0.7515625, 0.421875, 0.4546875, 0.69375, 0.5578125, 0.84375, 0.7484375, 0.7875, 0.603125, 0.7875, 0.7, 0.684375, 0.6171875, 0.7328125, 0.684375, 0.9890625, 0.6859375, 0.615625, 0.6859375, 0.4546875, 0.46875, 0.4546875, 0.81875, 0.6421875, 0.6359375, 0.6015625, 0.6234375, 0.521875, 0.6234375, 0.596875, 0.384375, 0.6234375, 0.6328125, 0.275, 0.3765625, 0.5921875, 0.275, 0.9734375, 0.6328125, 0.6078125, 0.6234375, 0.6234375, 0.43125, 0.521875, 0.3953125, 0.6328125, 0.5921875, 0.81875, 0.5921875, 0.5921875, 0.5265625, 0.6359375, 0.4546875, 0.6359375, 0.81875],
    avg: 0.6171875000000003
  } //https://developer.mozilla.org/en/docs/Web/CSS/length
  // Absolute sizes in pixels for obsolete measurement units.

};
var absoluteMeasurementUnitsToPixels = {
  mm: 3.8,
  sm: 38,
  pt: 1.33,
  pc: 16,
  in: 96,
  px: 1
};
var relativeMeasurementUnitsCoef = {
  em: 1,
  ex: 0.5
};
var coefficients = {
  heightOverlapCoef: 1.05,
  // Coefficient for height value to prevent overlap.
  lineCapitalCoef: 1.15 // Coefficient for height value. Reserve space for capital chars.

};
var defaultStyle = {
  lineHeight: 1,
  letterSpacing: "0px",
  fontSize: 0,
  angle: 0,
  fontFamily: ""
};

var _degreeToRadian = function (angle) {
  return angle * Math.PI / 180;
};

var _getFontData = function (fontFamily) {
  var possibleFonts = fontFamily.split(",").map(function (f) {
    return f.replace(/'|"/g, "");
  });
  var fontMatch = possibleFonts.find(function (f) {
    return fonts[f];
  }) || "Helvetica";
  return fonts[fontMatch];
};

var _splitToLines = function (text) {
  return Array.isArray(text) ? text : text.toString().split(/\r\n|\r|\n/g);
};

var _getSizeWithRotate = function (axisSize, dependentSize, angle) {
  var angleInRadian = _degreeToRadian(angle);

  return Math.abs(Math.cos(angleInRadian) * axisSize) + Math.abs(Math.sin(angleInRadian) * dependentSize);
};
/**
 * Convert length-type parameters from specific measurement units to pixels
 * @param  {string} length Css length string value.
 * @param  {number} fontSize Current text font-size.
 * @returns {number} Approximate Css length in pixels.
 */


var convertLengthToPixels = function (length, fontSize) {
  var attribute = length.match(/[a-zA-Z%]+/) && length.match(/[a-zA-Z%]+/)[0];
  var value = length.match(/[0-9.,]+/);
  var result;

  if (!attribute) {
    result = value || 0;
  } else if (absoluteMeasurementUnitsToPixels.hasOwnProperty(attribute)) {
    result = value * absoluteMeasurementUnitsToPixels[attribute];
  } else if (relativeMeasurementUnitsCoef.hasOwnProperty(attribute)) {
    result = (fontSize ? value * fontSize : value * defaultStyle.fontSize) * relativeMeasurementUnitsCoef[attribute];
  } else {
    result = value;
  }

  return result;
};

var _prepareParams = function (inputStyle, index) {
  var lineStyle = Array.isArray(inputStyle) ? inputStyle[index] : inputStyle;

  var style = defaults_1({}, lineStyle, defaultStyle);

  return assign_1({}, style, {
    fontFamily: style.fontFamily,
    letterSpacing: typeof style.letterSpacing === "number" ? style.letterSpacing : convertLengthToPixels(String(style.letterSpacing), style.fontSize),
    fontSize: typeof style.fontSize === "number" ? style.fontSize : convertLengthToPixels(String(style.fontSize))
  });
};

var _approximateTextWidthInternal = function (text, style) {
  if (text === undefined || text === "" || text === null) {
    return 0;
  }

  var widths = _splitToLines(text).map(function (line, index) {
    var len = line.toString().length;

    var _prepareParams2 = _prepareParams(style, index),
        fontSize = _prepareParams2.fontSize,
        letterSpacing = _prepareParams2.letterSpacing,
        fontFamily = _prepareParams2.fontFamily;

    var fontData = _getFontData(fontFamily);

    var width = line.toString().split("").map(function (c) {
      return c.charCodeAt(0) < fontData.widths.length ? fontData.widths[c.charCodeAt(0)] : fontData.avg;
    }).reduce(function (cur, acc) {
      return acc + cur;
    }, 0) * fontSize;
    return width + letterSpacing * Math.max(len - 1, 0);
  });

  return Math.max.apply(Math, _toConsumableArray$g(widths));
};

var _approximateTextHeightInternal = function (text, style) {
  if (text === undefined || text === "" || text === null) {
    return 0;
  }

  return _splitToLines(text).reduce(function (total, line, index) {
    var lineStyle = _prepareParams(style, index);

    var containsCaps = line.toString().match(/[(A-Z)(0-9)]/);
    var height = containsCaps ? lineStyle.fontSize * coefficients.lineCapitalCoef : lineStyle.fontSize;
    return total + lineStyle.lineHeight * height;
  }, 0);
};
/**
 * Predict text size by font params.
 * @param {string} text Content for width calculation.
 * @param {Object} style Text styles, ,fontFamily, fontSize, etc.
 * @param {string} style.fontFamily Text fontFamily.
 * @param {(number|string)} style.fontSize Text fontSize.
 * @param {number} style.angle Text rotate angle.
 * @param {string} style.letterSpacing Text letterSpacing(space between letters).
 * @param {number} style.lineHeight Line height coefficient.
 * @returns {number} Approximate text label height.
 */


var approximateTextSize = function (text, style) {
  var angle = Array.isArray(style) ? style[0] && style[0].angle : style && style.angle;

  var height = _approximateTextHeightInternal(text, style);

  var width = _approximateTextWidthInternal(text, style);

  var widthWithRotate = angle ? _getSizeWithRotate(width, height, angle) : width;
  var heightWithRotate = angle ? _getSizeWithRotate(height, width, angle) : height;
  return {
    width: widthWithRotate,
    height: heightWithRotate * coefficients.heightOverlapCoef
  };
};

var TextSize = {
  approximateTextSize: approximateTextSize,
  convertLengthToPixels: convertLengthToPixels
};

var TSpan = function (props) {
  return react.createElement("tspan", props);
};

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var Text = function (props) {
  var children = props.children,
      title = props.title,
      desc = props.desc,
      rest = _objectWithoutProperties$3(props, ["children", "title", "desc"]);

  return react.createElement("text", rest, title && react.createElement("title", null, title), desc && react.createElement("desc", null, desc), children);
};

Text.propTypes = {
  children: propTypes.node,
  desc: propTypes.string,
  title: propTypes.string
};

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$g(target, key, source[key]); }); } return target; }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$f(arr) { return _arrayWithoutHoles$f(arr) || _iterableToArray$f(arr) || _nonIterableSpread$f(); }

function _nonIterableSpread$f() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$f(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$f(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
var defaultStyles = {
  fill: "#252525",
  fontSize: 14,
  fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
  stroke: "transparent"
};

var getPosition$2 = function (props, dimension) {
  if (!props.datum) {
    return 0;
  }

  var scaledPoint = Helpers.scalePoint(props, props.datum);
  return scaledPoint[dimension];
};

var getFontSize = function (style) {
  var baseSize = style && style.fontSize;

  if (typeof baseSize === "number") {
    return baseSize;
  } else if (baseSize === undefined || baseSize === null) {
    return defaultStyles.fontSize;
  } else if (typeof baseSize === "string") {
    var fontSize = +baseSize.replace("px", "");

    if (!isNaN(fontSize)) {
      return fontSize;
    } else {
      Log.warn("fontSize should be expressed as a number of pixels");
      return defaultStyles.fontSize;
    }
  }

  return defaultStyles.fontSize;
};

var getSingleValue = function (prop) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Array.isArray(prop) ? prop[index] || prop[0] : prop;
};

var useMultiLineBackgrounds = function (props) {
  var backgroundStyle = props.backgroundStyle,
      backgroundPadding = props.backgroundPadding;
  return Array.isArray(backgroundStyle) && !isEmpty_1(backgroundStyle) || Array.isArray(backgroundPadding) && !isEmpty_1(backgroundPadding);
};

var getStyles$4 = function (style, props) {
  var getSingleStyle = function (s) {
    s = s ? defaults_1({}, s, defaultStyles) : defaultStyles;
    var baseStyles = Helpers.evaluateStyle(s, props);
    return assign_1({}, baseStyles, {
      fontSize: getFontSize(baseStyles)
    });
  };

  return Array.isArray(style) && !isEmpty_1(style) ? style.map(function (s) {
    return getSingleStyle(s);
  }) : getSingleStyle(style);
};

var getBackgroundStyles = function (style, props) {
  if (!style) {
    return undefined;
  }

  return Array.isArray(style) && !isEmpty_1(style) ? style.map(function (s) {
    return Helpers.evaluateStyle(s, props);
  }) : Helpers.evaluateStyle(style, props);
};

var getBackgroundPadding = function (props) {
  if (props.backgroundPadding && Array.isArray(props.backgroundPadding)) {
    return props.backgroundPadding.map(function (backgroundPadding) {
      var padding = Helpers.evaluateProp(backgroundPadding, props);
      return Helpers.getPadding({
        padding: padding
      });
    });
  } else {
    var padding = Helpers.evaluateProp(props.backgroundPadding, props);
    return Helpers.getPadding({
      padding: padding
    });
  }
};

var getLineHeight = function (props) {
  var lineHeight = Helpers.evaluateProp(props.lineHeight, props);

  if (Array.isArray(lineHeight)) {
    return isEmpty_1(lineHeight) ? [1] : lineHeight;
  } else {
    return lineHeight;
  }
};

var getContent = function (text, props) {
  if (text === undefined || text === null) {
    return undefined;
  }

  if (Array.isArray(text)) {
    return text.map(function (line) {
      return Helpers.evaluateProp(line, props);
    });
  }

  var child = Helpers.evaluateProp(text, props);

  if (child === undefined || child === null) {
    return undefined;
  }

  return Array.isArray(child) ? child : "".concat(child).split("\n");
};

var getDy = function (props, verticalAnchor, lineHeight) {
  var dy = props.dy ? Helpers.evaluateProp(props.dy, props) : 0;
  var length = props.inline ? 1 : props.text.length;
  var capHeight = Helpers.evaluateProp(props.capHeight, props);
  var anchor = verticalAnchor ? Helpers.evaluateProp(verticalAnchor, props) : "middle";

  var fontSizes = _toConsumableArray$f(Array(length).keys()).map(function (i) {
    return getSingleValue(props.style, i).fontSize;
  });

  var lineHeights = _toConsumableArray$f(Array(length).keys()).map(function (i) {
    return getSingleValue(lineHeight, i);
  });

  if (anchor === "start") {
    return dy + (capHeight / 2 + lineHeights[0] / 2) * fontSizes[0];
  } else if (props.inline) {
    return anchor === "end" ? dy + (capHeight / 2 - lineHeights[0] / 2) * fontSizes[0] : dy + capHeight / 2 * fontSizes[0];
  } else if (length === 1) {
    return anchor === "end" ? dy + (capHeight / 2 + (0.5 - length) * lineHeights[0]) * fontSizes[0] : dy + (capHeight / 2 + (0.5 - length / 2) * lineHeights[0]) * fontSizes[0];
  } else {
    var allHeights = _toConsumableArray$f(Array(length).keys()).reduce(function (memo, i) {
      return memo + (capHeight / 2 + (0.5 - length) * lineHeights[i]) * fontSizes[i] / length;
    }, 0);

    return anchor === "end" ? dy + allHeights : dy + allHeights / 2 + capHeight / 2 * lineHeights[length - 1] * fontSizes[length - 1];
  }
};

var getTransform$1 = function (props, x, y) {
  var polar = props.polar;
  var style = getSingleValue(props.style);
  var defaultAngle = polar ? LabelHelpers.getPolarAngle(props) : 0;
  var baseAngle = style.angle === undefined ? Helpers.evaluateProp(props.angle, props) : style.angle;
  var angle = baseAngle === undefined ? defaultAngle : baseAngle;
  var transform = props.transform || style.transform;
  var transformPart = transform && Helpers.evaluateProp(transform, props);
  var rotatePart = angle && {
    rotate: [angle, x, y]
  };
  return transformPart || angle ? Style.toTransformString(transformPart, rotatePart) : undefined;
};

var getXCoordinate = function (calculatedProps, labelSizeWidth) {
  var direction = calculatedProps.direction,
      textAnchor = calculatedProps.textAnchor,
      x = calculatedProps.x,
      dx = calculatedProps.dx;

  if (direction === "rtl") {
    return x - labelSizeWidth;
  }

  switch (textAnchor) {
    case "middle":
      return Math.round(x - labelSizeWidth / 2);

    case "end":
      return Math.round(x - labelSizeWidth);

    default:
      // start
      return x + (dx || 0);
  }
};

var getYCoordinate = function (calculatedProps, textHeight) {
  var verticalAnchor = calculatedProps.verticalAnchor,
      y = calculatedProps.y,
      _calculatedProps$orig = calculatedProps.originalDy,
      originalDy = _calculatedProps$orig === void 0 ? 0 : _calculatedProps$orig;
  var offset = y + originalDy;

  switch (verticalAnchor) {
    case "start":
      return Math.floor(offset);

    case "end":
      return Math.ceil(offset - textHeight);

    default:
      // middle
      return Math.floor(offset - textHeight / 2);
  }
};

var getFullBackground = function (calculatedProps, tspanValues) {
  var _calculatedProps$dx = calculatedProps.dx,
      dx = _calculatedProps$dx === void 0 ? 0 : _calculatedProps$dx,
      transform = calculatedProps.transform,
      backgroundComponent = calculatedProps.backgroundComponent,
      backgroundStyle = calculatedProps.backgroundStyle,
      inline = calculatedProps.inline,
      backgroundPadding = calculatedProps.backgroundPadding,
      capHeight = calculatedProps.capHeight;
  var textSizes = tspanValues.map(function (tspan) {
    return tspan.textSize;
  });
  var height = inline ? Math.max.apply(Math, _toConsumableArray$f(textSizes.map(function (size) {
    return size.height;
  }))) : textSizes.reduce(function (memo, size, i) {
    var capHeightAdjustment = i ? 0 : capHeight / 2;
    return memo + size.height * (tspanValues[i].lineHeight - capHeightAdjustment);
  }, 0);
  var width = inline ? textSizes.reduce(function (memo, size, index) {
    var offset = index ? dx : 0;
    return memo + size.width + offset;
  }, 0) : Math.max.apply(Math, _toConsumableArray$f(textSizes.map(function (size) {
    return size.width;
  })));
  var xCoordinate = getXCoordinate(calculatedProps, width);
  var yCoordinate = getYCoordinate(calculatedProps, height);
  var backgroundProps = {
    key: "background",
    height: height + backgroundPadding.top + backgroundPadding.bottom,
    style: backgroundStyle,
    transform: transform,
    width: width + backgroundPadding.left + backgroundPadding.right,
    x: inline ? xCoordinate - backgroundPadding.left : xCoordinate + dx - backgroundPadding.left,
    y: yCoordinate
  };
  return react.cloneElement(backgroundComponent, defaults_1({}, backgroundComponent.props, backgroundProps));
};

var getInlineXOffset = function (calculatedProps, textElements, index) {
  var textAnchor = calculatedProps.textAnchor;
  var widths = textElements.map(function (t) {
    return t.widthWithPadding;
  });
  var totalWidth = widths.reduce(function (memo, width) {
    return memo + width;
  }, 0);
  var centerOffset = -totalWidth / 2;

  switch (textAnchor) {
    case "start":
      return widths.reduce(function (memo, width, i) {
        memo = i < index ? memo + width : memo;
        return memo;
      }, 0);

    case "end":
      return widths.reduce(function (memo, width, i) {
        memo = i > index ? memo - width : memo;
        return memo;
      }, 0);

    default:
      // middle
      return widths.reduce(function (memo, width, i) {
        var offsetWidth = i < index ? width : 0;
        memo = i === index ? memo + width / 2 : memo + offsetWidth;
        return memo;
      }, centerOffset);
  }
};

var getChildBackgrounds = function (calculatedProps, tspanValues) {
  var dy = calculatedProps.dy,
      dx = calculatedProps.dx,
      transform = calculatedProps.transform,
      backgroundStyle = calculatedProps.backgroundStyle,
      backgroundPadding = calculatedProps.backgroundPadding,
      backgroundComponent = calculatedProps.backgroundComponent,
      inline = calculatedProps.inline,
      y = calculatedProps.y;
  var textElements = tspanValues.map(function (current, i) {
    var previous = getSingleValue(tspanValues, i - 1);
    var labelSize = current.textSize;
    var totalLineHeight = current.fontSize * current.lineHeight;
    var textHeight = Math.ceil(totalLineHeight);
    var padding = getSingleValue(backgroundPadding, i);
    var prevPadding = getSingleValue(backgroundPadding, i - 1);
    var xOffset = inline ? dx || 0 : 0;
    var childDy = i && !inline ? previous.fontSize * previous.lineHeight + prevPadding.top + prevPadding.bottom : dy - totalLineHeight * 0.5 - (current.fontSize - current.capHeight);
    return {
      textHeight: textHeight,
      labelSize: labelSize,
      heightWithPadding: textHeight + padding.top + padding.bottom,
      widthWithPadding: labelSize.width + padding.left + padding.right + xOffset,
      y: y,
      fontSize: current.fontSize,
      dy: childDy
    };
  });
  return textElements.map(function (textElement, i) {
    var xCoordinate = getXCoordinate(calculatedProps, textElement.labelSize.width);
    var yCoordinate = textElements.slice(0, i + 1).reduce(function (prev, curr) {
      return prev + curr.dy;
    }, y);
    var padding = getSingleValue(backgroundPadding, i);
    var height = textElement.heightWithPadding;
    var xCoord = inline ? getInlineXOffset(calculatedProps, textElements, i) + xCoordinate - padding.left : xCoordinate;
    var yCoord = inline ? getYCoordinate(calculatedProps, height) - padding.top : yCoordinate;
    var backgroundProps = {
      key: "tspan-background-".concat(i),
      height: height,
      style: getSingleValue(backgroundStyle, i),
      width: textElement.widthWithPadding,
      transform: transform,
      x: xCoord - padding.left,
      y: yCoord
    };
    return react.cloneElement(backgroundComponent, defaults_1({}, backgroundComponent.props, backgroundProps));
  });
};

var getBackgroundElement = function (calculatedProps, tspanValues) {
  return useMultiLineBackgrounds(calculatedProps) ? getChildBackgrounds(calculatedProps, tspanValues) : getFullBackground(calculatedProps, tspanValues);
};

var calculateSpanDy = function (tspanValues, i, calculatedProps) {
  var current = getSingleValue(tspanValues, i);
  var previous = getSingleValue(tspanValues, i - 1);
  var previousHeight = previous.fontSize * previous.lineHeight;
  var currentHeight = current.fontSize * current.lineHeight;
  var previousCaps = previous.fontSize - previous.capHeight;
  var currentCaps = current.fontSize - current.capHeight;
  var textHeight = previousHeight - previous.fontSize / 2 + current.fontSize / 2 - previousHeight / 2 + currentHeight / 2 - currentCaps / 2 + previousCaps / 2;
  return useMultiLineBackgrounds(calculatedProps) ? textHeight + current.backgroundPadding.top + previous.backgroundPadding.bottom : textHeight;
};

var getTSpanDy = function (tspanValues, calculatedProps, i) {
  var inline = calculatedProps.inline;
  var current = getSingleValue(tspanValues, i);

  if (i && !inline) {
    return calculateSpanDy(tspanValues, i, calculatedProps);
  } else if (inline) {
    return i === 0 ? current.backgroundPadding.top : undefined;
  } else {
    return current.backgroundPadding.top;
  }
};

var evaluateProps$6 = function (props) {
  /* Potential evaluated props are
    1) text
    2) style
    3) everything else
  */
  var text = getContent(props.text, props);
  var style = getStyles$4(props.style, assign_1({}, props, {
    text: text
  }));
  var backgroundStyle = getBackgroundStyles(props.backgroundStyle, assign_1({}, props, {
    text: text,
    style: style
  }));
  var backgroundPadding = getBackgroundPadding(assign_1({}, props, {
    text: text,
    style: style,
    backgroundStyle: backgroundStyle
  }));
  var id = Helpers.evaluateProp(props.id, props);
  return assign_1({}, props, {
    backgroundStyle: backgroundStyle,
    backgroundPadding: backgroundPadding,
    style: style,
    text: text,
    id: id
  });
};

var getCalculatedProps$2 = function (props) {
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var style = getSingleValue(props.style);
  var lineHeight = getLineHeight(props);
  var direction = props.direction ? Helpers.evaluateProp(props.direction, props) : "inherit";
  var textAnchor = props.textAnchor ? Helpers.evaluateProp(props.textAnchor, props) : style.textAnchor || "start";
  var verticalAnchor = props.verticalAnchor ? Helpers.evaluateProp(props.verticalAnchor, props) : style.verticalAnchor || "middle";
  var dx = props.dx ? Helpers.evaluateProp(props.dx, props) : 0;
  var dy = getDy(props, verticalAnchor, lineHeight);
  var x = props.x !== undefined ? props.x : getPosition$2(props, "x");
  var y = props.y !== undefined ? props.y : getPosition$2(props, "y");
  var transform = getTransform$1(props, x, y);
  return assign_1({}, props, {
    ariaLabel: ariaLabel,
    lineHeight: lineHeight,
    direction: direction,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    dx: dx,
    dy: dy,
    originalDy: props.dy,
    transform: transform,
    x: x,
    y: y
  });
};

var renderLabel = function (calculatedProps, tspanValues) {
  var ariaLabel = calculatedProps.ariaLabel,
      inline = calculatedProps.inline,
      className = calculatedProps.className,
      title = calculatedProps.title,
      events = calculatedProps.events,
      direction = calculatedProps.direction,
      text = calculatedProps.text,
      textAnchor = calculatedProps.textAnchor,
      dx = calculatedProps.dx,
      dy = calculatedProps.dy,
      transform = calculatedProps.transform,
      x = calculatedProps.x,
      y = calculatedProps.y,
      desc = calculatedProps.desc,
      id = calculatedProps.id,
      tabIndex = calculatedProps.tabIndex,
      tspanComponent = calculatedProps.tspanComponent,
      textComponent = calculatedProps.textComponent;

  var textProps = _objectSpread$e({
    "aria-label": ariaLabel,
    key: "text"
  }, events, {
    direction: direction,
    dx: dx,
    x: x,
    y: y + dy,
    transform: transform,
    className: className,
    title: title,
    desc: Helpers.evaluateProp(desc, calculatedProps),
    tabIndex: Helpers.evaluateProp(tabIndex, calculatedProps),
    id: id
  });

  var tspans = text.map(function (line, i) {
    var currentStyle = tspanValues[i].style;
    var tspanProps = {
      key: "".concat(id, "-key-").concat(i),
      x: !inline ? x : undefined,
      dx: inline ? dx + tspanValues[i].backgroundPadding.left : dx,
      dy: getTSpanDy(tspanValues, calculatedProps, i),
      textAnchor: currentStyle.textAnchor || textAnchor,
      style: currentStyle,
      children: line
    };
    return react.cloneElement(tspanComponent, tspanProps);
  });
  return react.cloneElement(textComponent, textProps, tspans);
};

var VictoryLabel = function (props) {
  props = evaluateProps$6(props);

  if (props.text === null || props.text === undefined) {
    return null;
  }

  var calculatedProps = getCalculatedProps$2(props);
  var text = calculatedProps.text,
      style = calculatedProps.style,
      capHeight = calculatedProps.capHeight,
      backgroundPadding = calculatedProps.backgroundPadding,
      lineHeight = calculatedProps.lineHeight;
  var tspanValues = text.map(function (line, i) {
    var currentStyle = getSingleValue(style, i);
    var capHeightPx = TextSize.convertLengthToPixels("".concat(capHeight, "em"), currentStyle.fontSize);
    var currentLineHeight = getSingleValue(lineHeight, i);
    return {
      style: currentStyle,
      fontSize: currentStyle.fontSize || defaultStyles.fontSize,
      capHeight: capHeightPx,
      text: line,
      textSize: TextSize.approximateTextSize(line, currentStyle),
      lineHeight: currentLineHeight,
      backgroundPadding: getSingleValue(backgroundPadding, i)
    };
  });
  var label = renderLabel(calculatedProps, tspanValues);

  if (props.backgroundStyle) {
    var backgroundElement = getBackgroundElement(calculatedProps, tspanValues);
    var children = [backgroundElement, label];
    var backgroundWithLabel = react.cloneElement(props.groupComponent, {}, children);
    return props.renderInPortal ? react.createElement(VictoryPortal, null, backgroundWithLabel) : backgroundWithLabel;
  }

  return props.renderInPortal ? react.createElement(VictoryPortal, null, label) : label;
};

VictoryLabel.displayName = "VictoryLabel";
VictoryLabel.role = "label";
VictoryLabel.defaultStyles = defaultStyles;
VictoryLabel.propTypes = {
  active: propTypes.bool,
  angle: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]),
  ariaLabel: propTypes.oneOfType([propTypes.string, propTypes.func]),
  backgroundComponent: propTypes.element,
  backgroundPadding: propTypes.oneOfType([propTypes.number, propTypes.object, propTypes.array]),
  backgroundStyle: propTypes.oneOfType([propTypes.object, propTypes.array]),
  capHeight: propTypes.oneOfType([propTypes.string, CustomPropTypes.nonNegative, propTypes.func]),
  className: propTypes.string,
  data: propTypes.array,
  datum: propTypes.any,
  desc: propTypes.oneOfType([propTypes.string, propTypes.func]),
  direction: propTypes.oneOf(["rtl", "ltr", "inherit"]),
  dx: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
  dy: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
  events: propTypes.object,
  groupComponent: propTypes.element,
  id: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
  index: propTypes.oneOfType([propTypes.number, propTypes.string]),
  inline: propTypes.bool,
  labelPlacement: propTypes.oneOf(["parallel", "perpendicular", "vertical"]),
  lineHeight: propTypes.oneOfType([propTypes.string, CustomPropTypes.nonNegative, propTypes.func, propTypes.array]),
  origin: propTypes.shape({
    x: CustomPropTypes.nonNegative,
    y: CustomPropTypes.nonNegative
  }),
  polar: propTypes.bool,
  renderInPortal: propTypes.bool,
  scale: propTypes.shape({
    x: CustomPropTypes.scale,
    y: CustomPropTypes.scale
  }),
  style: propTypes.oneOfType([propTypes.object, propTypes.array]),
  tabIndex: propTypes.oneOfType([propTypes.number, propTypes.func]),
  text: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func, propTypes.array]),
  textAnchor: propTypes.oneOfType([propTypes.oneOf(["start", "middle", "end", "inherit"]), propTypes.func]),
  textComponent: propTypes.element,
  title: propTypes.string,
  transform: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.func]),
  tspanComponent: propTypes.element,
  verticalAnchor: propTypes.oneOfType([propTypes.oneOf(["start", "middle", "end"]), propTypes.func]),
  x: propTypes.oneOfType([propTypes.number, propTypes.string]),
  y: propTypes.oneOfType([propTypes.number, propTypes.string])
};
VictoryLabel.defaultProps = {
  backgroundComponent: react.createElement(Rect, null),
  groupComponent: react.createElement("g", null),
  direction: "inherit",
  textComponent: react.createElement(Text, null),
  tspanComponent: react.createElement(TSpan, null),
  capHeight: 0.71,
  // Magic number from d3.
  lineHeight: 1
};

function _toConsumableArray$e(arr) { return _arrayWithoutHoles$e(arr) || _iterableToArray$e(arr) || _nonIterableSpread$e(); }

function _nonIterableSpread$e() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$e(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$e(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
function isNonEmptyArray(collection) {
  return Array.isArray(collection) && collection.length > 0;
}

function containsStrings(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return typeof value === "string";
  });
}

function containsDates(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return value instanceof Date;
  });
}

function containsNumbers(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return typeof value === "number";
  });
}

function containsOnlyStrings(collection) {
  return isNonEmptyArray(collection) && collection.every(function (value) {
    return typeof value === "string";
  });
}

function isArrayOfArrays(collection) {
  return isNonEmptyArray(collection) && collection.every(Array.isArray);
}

function removeUndefined(arr) {
  return arr.filter(function (el) {
    return el !== undefined;
  });
}

function getMaxValue(arr) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var array = arr.concat(values);
  return containsDates(array) ? new Date(Math.max.apply(Math, _toConsumableArray$e(array))) : Math.max.apply(Math, _toConsumableArray$e(array));
}

function getMinValue(arr) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  var array = arr.concat(values);
  return containsDates(array) ? new Date(Math.min.apply(Math, _toConsumableArray$e(array))) : Math.min.apply(Math, _toConsumableArray$e(array));
}

var Collection = {
  containsDates: containsDates,
  containsNumbers: containsNumbers,
  containsOnlyStrings: containsOnlyStrings,
  containsStrings: containsStrings,
  getMaxValue: getMaxValue,
  getMinValue: getMinValue,
  isArrayOfArrays: isArrayOfArrays,
  removeUndefined: removeUndefined
};

function getDatumKey(datum, idx) {
  return (datum.key || idx).toString();
}

function getKeyedData(data) {
  return data.reduce(function (keyedData, datum, idx) {
    var key = getDatumKey(datum, idx);
    keyedData[key] = datum;
    return keyedData;
  }, {});
}

function getKeyedDataDifference(a, b) {
  var hasDifference = false;

  var difference = keys_1(a).reduce(function (_difference, key) {
    if (!(key in b)) {
      hasDifference = true;
      _difference[key] = true;
    }

    return _difference;
  }, {});

  return hasDifference && difference;
}
/**
 * Calculate which data-points exist in oldData and not nextData -
 * these are the `exiting` data-points.  Also calculate which
 * data-points exist in nextData and not oldData - these are the
 * `entering` data-points.
 *
 * @param  {Array} oldData   this.props.data Array
 * @param  {Array} nextData  this.props.data Array
 *
 * @return {Object}          Object with `entering` and `exiting` properties.
 *                           entering[datum.key] will be true if the data is
 *                           entering, and similarly for `exiting`.
 */


function getNodeTransitions(oldData, nextData) {
  var oldDataKeyed = oldData && getKeyedData(oldData);
  var nextDataKeyed = nextData && getKeyedData(nextData);
  return {
    entering: oldDataKeyed && getKeyedDataDifference(nextDataKeyed, oldDataKeyed),
    exiting: nextDataKeyed && getKeyedDataDifference(oldDataKeyed, nextDataKeyed)
  };
}

function getChildData(child) {
  if (child.type && child.type.getData) {
    return child.type.getData(child.props);
  }

  return child.props && child.props.data || false;
}
/**
 * If a parent component has animation enabled, calculate the transitions
 * for any data of any child component that supports data transitions
 * Data transitions are defined as any two datasets where data nodes exist
 * in the first set and not the second, in the second and not the first,
 * or both.
 *
 * @param  {Children}  oldChildren   this.props.children from old props
 * @param  {Children}  nextChildren  this.props.children from next props
 *
 * @return {Object}                  Object with the following properties:
 *                                    - nodesWillExit
 *                                    - nodesWillEnter
 *                                    - childrenTransitions
 *                                    - nodesShouldEnter
 */


function getInitialTransitionState(oldChildren, nextChildren) {
  var nodesWillExit = false;
  var nodesWillEnter = false;

  var getTransition = function (oldChild, newChild) {
    if (!newChild || oldChild.type !== newChild.type) {
      return {};
    }

    var _ref = getNodeTransitions(getChildData(oldChild), getChildData(newChild)) || {},
        entering = _ref.entering,
        exiting = _ref.exiting;

    nodesWillExit = nodesWillExit || !!exiting;
    nodesWillEnter = nodesWillEnter || !!entering;
    return {
      entering: entering || false,
      exiting: exiting || false
    };
  };

  var getTransitionsFromChildren = function (old, next) {
    return old.map(function (child, idx) {
      if (child && child.props && child.props.children && next[idx]) {
        return getTransitionsFromChildren(react.Children.toArray(old[idx].props.children), react.Children.toArray(next[idx].props.children));
      } // get Transition entering and exiting nodes


      return getTransition(child, next[idx]);
    });
  };

  var childrenTransitions = getTransitionsFromChildren(react.Children.toArray(oldChildren), react.Children.toArray(nextChildren));
  return {
    nodesWillExit: nodesWillExit,
    nodesWillEnter: nodesWillEnter,
    childrenTransitions: childrenTransitions,
    // TODO: This may need to be refactored for the following situation.
    //       The component receives new props, and the data provided
    //       is a perfect match for the previous data and domain except
    //       for new nodes. In this case, we wouldn't want a delay before
    //       the new nodes appear.
    nodesShouldEnter: false
  };
}

function getInitialChildProps(animate, data) {
  var after = animate.onEnter && animate.onEnter.after ? animate.onEnter.after : identity_1;
  return {
    data: data.map(function (datum, idx) {
      return assign_1({}, datum, after(datum, idx, data));
    })
  };
} // eslint-disable-next-line max-params


function getChildBeforeLoad(animate, child, data, cb) {
  animate = assign_1({}, animate, {
    onEnd: cb
  });

  if (animate && animate.onLoad && !animate.onLoad.duration) {
    return {
      animate: animate,
      data: data
    };
  }

  var before = animate.onLoad && animate.onLoad.before ? animate.onLoad.before : identity_1; // If nodes need to exit, transform them with the provided onLoad.before function.

  data = data.map(function (datum, idx) {
    return assign_1({}, datum, before(datum, idx, data));
  });
  return {
    animate: animate,
    data: data,
    clipWidth: 0
  };
} // eslint-disable-next-line max-params


function getChildOnLoad(animate, data, cb) {
  animate = assign_1({}, animate, {
    onEnd: cb
  });

  if (animate && animate.onLoad && !animate.onLoad.duration) {
    return {
      animate: animate,
      data: data
    };
  }

  var after = animate.onLoad && animate.onLoad.after ? animate.onLoad.after : identity_1; // If nodes need to exit, transform them with the provided onLoad.after function.

  data = data.map(function (datum, idx) {
    return assign_1({}, datum, after(datum, idx, data));
  });
  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params, max-len


function getChildPropsOnExit(animate, child, data, exitingNodes, cb) {
  // Whether or not _this_ child has exiting nodes, we want the exit-
  // transition for all children to have the same duration, delay, etc.
  var onExit = animate && animate.onExit;
  animate = assign_1({}, animate, onExit);

  if (exitingNodes) {
    // After the exit transition occurs, trigger the animations for
    // nodes that are neither exiting or entering.
    animate.onEnd = cb;
    var before = animate.onExit && animate.onExit.before ? animate.onExit.before : identity_1; // If nodes need to exit, transform them with the provided onExit.before function.

    data = data.map(function (datum, idx) {
      var key = (datum.key || idx).toString();
      return exitingNodes[key] ? assign_1({}, datum, before(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params,max-len


function getChildPropsBeforeEnter(animate, child, data, enteringNodes, cb) {
  if (enteringNodes) {
    // Perform a normal animation here, except - when it finishes - trigger
    // the transition for entering nodes.
    animate = assign_1({}, animate, {
      onEnd: cb
    });
    var before = animate.onEnter && animate.onEnter.before ? animate.onEnter.before : identity_1; // We want the entering nodes to be included in the transition target
    // domain.  However, we may not want these nodes to be displayed initially,
    // so perform the `onEnter.before` transformation on each node.

    data = data.map(function (datum, idx) {
      var key = (datum.key || idx).toString();
      return enteringNodes[key] ? assign_1({}, datum, before(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params, max-len


function getChildPropsOnEnter(animate, data, enteringNodes, cb) {
  // Whether or not _this_ child has entering nodes, we want the entering-
  // transition for all children to have the same duration, delay, etc.
  var onEnter = animate && animate.onEnter;
  animate = assign_1({}, animate, onEnter);

  if (enteringNodes) {
    // Old nodes have been transitioned to their new values, and the
    // domain should encompass the nodes that will now enter. So perform
    // the `onEnter.after` transformation on each node.
    animate.onEnd = cb;
    var after = animate.onEnter && animate.onEnter.after ? animate.onEnter.after : identity_1;
    data = data.map(function (datum, idx) {
      var key = getDatumKey(datum, idx);
      return enteringNodes[key] ? assign_1({}, datum, after(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
}
/**
 * getTransitionPropsFactory - putting the Java in JavaScript.  This will return a
 * function that returns prop transformations for a child, given that child's props
 * and its index in the parent's children array.
 *
 * In particular, this will include an `animate` object that is set appropriately
 * so that each child will be synchoronized for each stage of a transition
 * animation.  It will also include a transformed `data` object, where each datum
 * is transformed by `animate.onExit` and `animate.onEnter` `before` and `after`
 * functions.
 *
 * @param  {Object}  props       `this.props` for the parent component.
 * @param  {Object} state        `this.state` for the parent component.
 * @param  {Function} setState    Function that, when called, will `this.setState` on
 *                                 the parent component with the provided object.
 *
 * @return {Function}              Child-prop transformation function.
 */


function getTransitionPropsFactory(props, state, setState) {
  var nodesWillExit = state && state.nodesWillExit;
  var nodesWillEnter = state && state.nodesWillEnter;
  var nodesShouldEnter = state && state.nodesShouldEnter;
  var nodesShouldLoad = state && state.nodesShouldLoad;
  var nodesDoneLoad = state && state.nodesDoneLoad;
  var childrenTransitions = state && state.childrenTransitions || [];
  var transitionDurations = {
    enter: props.animate && props.animate.onEnter && props.animate.onEnter.duration,
    exit: props.animate && props.animate.onExit && props.animate.onExit.duration,
    load: props.animate && props.animate.onLoad && props.animate.onLoad.duration,
    move: props.animate && props.animate.duration
  };

  var onLoad = function (child, data, animate) {
    if (nodesShouldLoad) {
      return getChildOnLoad(animate, data, function () {
        setState({
          nodesShouldLoad: false,
          nodesDoneLoad: true
        });
      });
    }

    return getChildBeforeLoad(animate, child, data, function () {
      setState({
        nodesDoneLoad: true
      });
    });
  }; // eslint-disable-next-line max-params


  var onExit = function (nodes, child, data, animate) {
    return getChildPropsOnExit(animate, child, data, nodes, function () {
      setState({
        nodesWillExit: false
      });
    });
  }; // eslint-disable-next-line max-params


  var onEnter = function (nodes, child, data, animate) {
    if (nodesShouldEnter) {
      return getChildPropsOnEnter(animate, data, nodes, function () {
        setState({
          nodesWillEnter: false
        });
      });
    }

    return getChildPropsBeforeEnter(animate, child, data, nodes, function () {
      setState({
        nodesShouldEnter: true
      });
    });
  };

  var getChildTransitionDuration = function (child, type) {
    var animate = child.props.animate;

    if (!child.type) {
      return {};
    }

    var defaultTransitions = child.props && child.props.polar ? child.type.defaultPolarTransitions || child.type.defaultTransitions : child.type.defaultTransitions;

    if (defaultTransitions) {
      var animationDuration = animate[type] && animate[type].duration;
      return animationDuration !== undefined ? animationDuration : defaultTransitions[type] && defaultTransitions[type].duration;
    } else {
      return {};
    }
  }; // eslint-disable-next-line max-statements, complexity, max-len


  return function getTransitionProps(child, index) {
    var data = getChildData(child) || [];

    var animate = defaults_1({}, props.animate, child.props.animate);

    var defaultTransitions = child.props.polar ? child.type.defaultPolarTransitions || child.type.defaultTransitions : child.type.defaultTransitions;
    animate.onExit = defaults_1({}, animate.onExit, defaultTransitions && defaultTransitions.onExit);
    animate.onEnter = defaults_1({}, animate.onEnter, defaultTransitions && defaultTransitions.onEnter);
    animate.onLoad = defaults_1({}, animate.onLoad, defaultTransitions && defaultTransitions.onLoad);
    var childTransitions = childrenTransitions[index] || childrenTransitions[0];

    if (!nodesDoneLoad) {
      // should do onLoad animation
      var load = transitionDurations.load !== undefined ? transitionDurations.load : getChildTransitionDuration(child, "onLoad");
      var animation = {
        duration: load
      };
      return onLoad(child, data, assign_1({}, animate, animation));
    } else if (nodesWillExit) {
      var exitingNodes = childTransitions && childTransitions.exiting;
      var exit = transitionDurations.exit !== undefined ? transitionDurations.exit : getChildTransitionDuration(child, "onExit"); // if nodesWillExit, but this child has no exiting nodes, set a delay instead of a duration

      var _animation = exitingNodes ? {
        duration: exit
      } : {
        delay: exit
      };

      return onExit(exitingNodes, child, data, assign_1({}, animate, _animation));
    } else if (nodesWillEnter) {
      var enteringNodes = childTransitions && childTransitions.entering;
      var enter = transitionDurations.enter !== undefined ? transitionDurations.enter : getChildTransitionDuration(child, "onEnter");
      var move = transitionDurations.move !== undefined ? transitionDurations.move : child.props.animate && child.props.animate.duration;
      var _animation2 = {
        duration: nodesShouldEnter && enteringNodes ? enter : move
      };
      return onEnter(enteringNodes, child, data, assign_1({}, animate, _animation2));
    } else if (!state && animate && animate.onExit) {
      // This is the initial render, and nodes may enter when props change. Because
      // animation interpolation is determined by old- and next- props, data may need
      // to be augmented with certain properties.
      //
      // For example, it may be desired that exiting nodes go from `opacity: 1` to
      // `opacity: 0`. Without setting this on a per-datum basis, the interpolation
      // might go from `opacity: undefined` to `opacity: 0`, which would result in
      // interpolated `opacity: NaN` values.
      //
      return getInitialChildProps(animate, data);
    }

    return {
      animate: animate,
      data: data
    };
  };
}

var Transitions = {
  getInitialTransitionState: getInitialTransitionState,
  getTransitionPropsFactory: getTransitionPropsFactory
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$8(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var VictoryTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits$8(VictoryTransition, _React$Component);

  function VictoryTransition(props, context) {
    var _this;

    _classCallCheck$8(this, VictoryTransition);

    _this = _possibleConstructorReturn$8(this, (VictoryTransition.__proto__ || Object.getPrototypeOf(VictoryTransition)).call(this, props, context));
    _this.state = {
      nodesShouldLoad: false,
      nodesDoneLoad: false
    };
    var child = _this.props.children;
    var polar = child.props.polar;
    _this.continuous = !polar && child.type && child.type.continuous === true;
    _this.getTransitionState = _this.getTransitionState.bind(_assertThisInitialized$8(_this));
    _this.timer = _this.context.transitionTimer;
    return _this;
  }

  _createClass$8(VictoryTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        nodesShouldLoad: true
      }); //eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      if (!reactFastCompare(this.props, nextProps)) {
        this.timer.bypassAnimation();
        this.setState(this.getTransitionState(this.props, nextProps), function () {
          return _this2.timer.resumeAnimation();
        });
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.timer.stop();
    }
  }, {
    key: "getTransitionState",
    value: function getTransitionState(props, nextProps) {
      var animate = props.animate;

      if (!animate) {
        return {};
      } else if (animate.parentState) {
        var state = animate.parentState;
        var oldProps = state.nodesWillExit ? props : null;
        return {
          oldProps: oldProps,
          nextProps: nextProps
        };
      } else {
        var oldChildren = react.Children.toArray(props.children);
        var nextChildren = react.Children.toArray(nextProps.children);

        var _Transitions$getIniti = Transitions.getInitialTransitionState(oldChildren, nextChildren),
            nodesWillExit = _Transitions$getIniti.nodesWillExit,
            nodesWillEnter = _Transitions$getIniti.nodesWillEnter,
            childrenTransitions = _Transitions$getIniti.childrenTransitions,
            nodesShouldEnter = _Transitions$getIniti.nodesShouldEnter;

        return {
          nodesWillExit: nodesWillExit,
          nodesWillEnter: nodesWillEnter,
          childrenTransitions: childrenTransitions,
          nodesShouldEnter: nodesShouldEnter,
          oldProps: nodesWillExit ? props : null,
          nextProps: nextProps
        };
      }
    }
  }, {
    key: "getDomainFromChildren",
    value: function getDomainFromChildren(props, axis) {
      var getChildDomains = function (children) {
        return children.reduce(function (memo, child) {
          if (child.type && isFunction_1(child.type.getDomain)) {
            var childDomain = child.props && child.type.getDomain(child.props, axis);
            return childDomain ? memo.concat(childDomain) : memo;
          } else if (child.props && child.props.children) {
            return memo.concat(getChildDomains(react.Children.toArray(child.props.children)));
          }

          return memo;
        }, []);
      };

      var child = react.Children.toArray(props.children)[0];
      var childProps = child.props || {};
      var domain = Array.isArray(childProps.domain) ? childProps.domain : childProps.domain && childProps.domain[axis];

      if (!childProps.children && domain) {
        return domain;
      } else {
        var childDomains = getChildDomains([child]);
        return childDomains.length === 0 ? [0, 1] : [Collection.getMinValue(childDomains), Collection.getMaxValue(childDomains)];
      }
    }
  }, {
    key: "pickProps",
    value: function pickProps() {
      if (!this.state) {
        return this.props;
      }

      return this.state.nodesWillExit ? this.state.oldProps || this.props : this.props;
    }
  }, {
    key: "pickDomainProps",
    value: function pickDomainProps(props) {
      var parentState = isObject_1(props.animate) && props.animate.parentState;

      if (parentState && parentState.nodesWillExit) {
        return this.continous || parentState.continuous ? parentState.nextProps || this.state.nextProps || props : props;
      }

      return this.continuous && this.state.nodesWillExit ? this.state.nextProps || props : props;
    }
  }, {
    key: "getClipWidth",
    value: function getClipWidth(props, child) {
      var getDefaultClipWidth = function () {
        var range = Helpers.getRange(child.props, "x");
        return range ? Math.abs(range[1] - range[0]) : props.width;
      };

      var clipWidth = this.transitionProps ? this.transitionProps.clipWidth : undefined;
      return clipWidth !== undefined ? clipWidth : getDefaultClipWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.pickProps();
      var getTransitionProps = isObject_1(this.props.animate) && this.props.animate.getTransitions ? this.props.animate.getTransitions : Transitions.getTransitionPropsFactory(props, this.state, function (newState) {
        return _this3.setState(newState);
      });
      var child = react.Children.toArray(props.children)[0];
      var transitionProps = getTransitionProps(child);
      this.transitionProps = transitionProps;
      var domain = {
        x: this.getDomainFromChildren(this.pickDomainProps(props), "x"),
        y: this.getDomainFromChildren(props, "y")
      };
      var clipWidth = this.getClipWidth(props, child);

      var combinedProps = defaults_1({
        domain: domain,
        clipWidth: clipWidth
      }, transitionProps, child.props);

      var animationWhitelist = props.animationWhitelist || [];
      var whitelist = animationWhitelist.concat(["clipWidth"]);
      var propsToAnimate = whitelist.length ? pick_1(combinedProps, whitelist) : combinedProps;
      return react.createElement(VictoryAnimation, _extends$2({}, combinedProps.animate, {
        data: propsToAnimate
      }), function (newProps) {
        if (child.props.groupComponent) {
          var groupComponent = _this3.continuous ? react.cloneElement(child.props.groupComponent, {
            clipWidth: newProps.clipWidth || 0
          }) : child.props.groupComponent;
          return react.cloneElement(child, defaults_1({
            animate: null,
            animating: true,
            groupComponent: groupComponent
          }, newProps, combinedProps));
        }

        return react.cloneElement(child, defaults_1({
          animate: null,
          animating: true
        }, newProps, combinedProps));
      });
    }
  }]);

  return VictoryTransition;
}(react.Component);

Object.defineProperty(VictoryTransition, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryTransition"
});
Object.defineProperty(VictoryTransition, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    animate: propTypes.oneOfType([propTypes.bool, propTypes.object]),
    animationWhitelist: propTypes.array,
    children: propTypes.node
  }
});
Object.defineProperty(VictoryTransition, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: TimerContext
});

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var Circle = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties$2(props, ["desc"]);

  return desc ? react.createElement("circle", _extends$1({
    vectorEffect: "non-scaling-stroke"
  }, rest), react.createElement("desc", null, desc)) : react.createElement("circle", _extends$1({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

// *
// * Colors
// *
var yellow200 = "#FFF59D";
var deepOrange600 = "#F4511E";
var lime300 = "#DCE775";
var lightGreen500 = "#8BC34A";
var teal700 = "#00796B";
var cyan900 = "#006064";
var colors$2 = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];
var blueGrey50 = "#ECEFF1";
var blueGrey300 = "#90A4AE";
var blueGrey700 = "#455A64";
var grey900 = "#212121"; // *
// * Typography
// *

var sansSerif$1 = "'Helvetica Neue', 'Helvetica', sans-serif";
var letterSpacing$1 = "normal";
var fontSize$1 = 12; // *
// * Layout
// *

var padding = 8;
var baseProps$2 = {
  width: 350,
  height: 350,
  padding: 50
}; // *
// * Labels
// *

var baseLabelStyles$1 = {
  fontFamily: sansSerif$1,
  fontSize: fontSize$1,
  letterSpacing: letterSpacing$1,
  padding: padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

var centeredLabelStyles$1 = assign_1({
  textAnchor: "middle"
}, baseLabelStyles$1); // *
// * Strokes
// *


var strokeDasharray = "10, 5";
var strokeLinecap$1 = "round";
var strokeLinejoin$1 = "round";
var materialTheme = {
  area: assign_1({
    style: {
      data: {
        fill: grey900
      },
      labels: baseLabelStyles$1
    }
  }, baseProps$2),
  axis: assign_1({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap: strokeLinecap$1,
        strokeLinejoin: strokeLinejoin$1
      },
      axisLabel: assign_1({}, centeredLabelStyles$1, {
        padding: padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray: strokeDasharray,
        strokeLinecap: strokeLinecap$1,
        strokeLinejoin: strokeLinejoin$1,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap$1,
        strokeLinejoin: strokeLinejoin$1
      },
      tickLabels: assign_1({}, baseLabelStyles$1, {
        fill: blueGrey700
      })
    }
  }, baseProps$2),
  polarDependentAxis: assign_1({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      }
    }
  }),
  bar: assign_1({
    style: {
      data: {
        fill: blueGrey700,
        padding: padding,
        strokeWidth: 0
      },
      labels: baseLabelStyles$1
    }
  }, baseProps$2),
  boxplot: assign_1({
    style: {
      max: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      maxLabels: assign_1({}, baseLabelStyles$1, {
        padding: 3
      }),
      median: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      medianLabels: assign_1({}, baseLabelStyles$1, {
        padding: 3
      }),
      min: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      minLabels: assign_1({}, baseLabelStyles$1, {
        padding: 3
      }),
      q1: {
        padding: padding,
        fill: blueGrey700
      },
      q1Labels: assign_1({}, baseLabelStyles$1, {
        padding: 3
      }),
      q3: {
        padding: padding,
        fill: blueGrey700
      },
      q3Labels: assign_1({}, baseLabelStyles$1, {
        padding: 3
      })
    },
    boxWidth: 20
  }, baseProps$2),
  candlestick: assign_1({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: assign_1({}, baseLabelStyles$1, {
        padding: 5
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps$2),
  chart: baseProps$2,
  errorbar: assign_1({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: baseLabelStyles$1
    }
  }, baseProps$2),
  group: assign_1({
    colorScale: colors$2
  }, baseProps$2),
  histogram: assign_1({
    style: {
      data: {
        fill: blueGrey700,
        stroke: grey900,
        strokeWidth: 2
      },
      labels: baseLabelStyles$1
    }
  }, baseProps$2),
  legend: {
    colorScale: colors$2,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles$1,
      title: assign_1({}, baseLabelStyles$1, {
        padding: 5
      })
    }
  },
  line: assign_1({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: baseLabelStyles$1
    }
  }, baseProps$2),
  pie: assign_1({
    colorScale: colors$2,
    style: {
      data: {
        padding: padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: assign_1({}, baseLabelStyles$1, {
        padding: 20
      })
    }
  }, baseProps$2),
  scatter: assign_1({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: baseLabelStyles$1
    }
  }, baseProps$2),
  stack: assign_1({
    colorScale: colors$2
  }, baseProps$2),
  tooltip: {
    style: assign_1({}, baseLabelStyles$1, {
      padding: 0,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign_1({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign_1({}, baseLabelStyles$1, {
        padding: 5,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: grey900,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps$2)
};

// *
// * Colors
// *
var colors$1 = ["#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#d9d9d9", "#f0f0f0"];
var charcoal = "#252525";
var grey = "#969696"; // *
// * Typography
// *

var sansSerif = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif";
var letterSpacing = "normal";
var fontSize = 14; // *
// * Layout
// *

var baseProps$1 = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors$1
}; // *
// * Labels
// *

var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};

var centeredLabelStyles = assign_1({
  textAnchor: "middle"
}, baseLabelStyles); // *
// * Strokes
// *


var strokeLinecap = "round";
var strokeLinejoin = "round";
var grayscaleTheme = {
  area: assign_1({
    style: {
      data: {
        fill: charcoal
      },
      labels: baseLabelStyles
    }
  }, baseProps$1),
  axis: assign_1({
    style: {
      axis: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      axisLabel: assign_1({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps$1),
  bar: assign_1({
    style: {
      data: {
        fill: charcoal,
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps$1),
  boxplot: assign_1({
    style: {
      max: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      maxLabels: assign_1({}, baseLabelStyles, {
        padding: 3
      }),
      median: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      medianLabels: assign_1({}, baseLabelStyles, {
        padding: 3
      }),
      min: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      minLabels: assign_1({}, baseLabelStyles, {
        padding: 3
      }),
      q1: {
        padding: 8,
        fill: grey
      },
      q1Labels: assign_1({}, baseLabelStyles, {
        padding: 3
      }),
      q3: {
        padding: 8,
        fill: grey
      },
      q3Labels: assign_1({}, baseLabelStyles, {
        padding: 3
      })
    },
    boxWidth: 20
  }, baseProps$1),
  candlestick: assign_1({
    style: {
      data: {
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: assign_1({}, baseLabelStyles, {
        padding: 5
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: charcoal
    }
  }, baseProps$1),
  chart: baseProps$1,
  errorbar: assign_1({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps$1),
  group: assign_1({
    colorScale: colors$1
  }, baseProps$1),
  histogram: assign_1({
    style: {
      data: {
        fill: grey,
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps$1),
  legend: {
    colorScale: colors$1,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign_1({}, baseLabelStyles, {
        padding: 5
      })
    }
  },
  line: assign_1({
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps$1),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: assign_1({}, baseLabelStyles, {
        padding: 20
      })
    },
    colorScale: colors$1,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: assign_1({
    style: {
      data: {
        fill: charcoal,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps$1),
  stack: assign_1({
    colorScale: colors$1
  }, baseProps$1),
  tooltip: {
    style: assign_1({}, baseLabelStyles, {
      padding: 0,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: charcoal,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign_1({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign_1({}, baseLabelStyles, {
        padding: 5,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: charcoal,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps$1)
};

var VictoryTheme = {
  material: materialTheme,
  grayscale: grayscaleTheme
};

var dataProps = {
  categories: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.shape({
    x: propTypes.arrayOf(propTypes.string),
    y: propTypes.arrayOf(propTypes.string)
  })]),
  data: propTypes.oneOfType([propTypes.array, propTypes.object]),
  dataComponent: propTypes.element,
  labelComponent: propTypes.element,
  labels: propTypes.oneOfType([propTypes.func, propTypes.array]),
  samples: CustomPropTypes.nonNegative,
  sortKey: propTypes.oneOfType([propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string, propTypes.arrayOf(propTypes.string)]),
  sortOrder: propTypes.oneOf(["ascending", "descending"]),
  style: propTypes.shape({
    parent: propTypes.object,
    data: propTypes.object,
    labels: propTypes.object
  }),
  x: propTypes.oneOfType([propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string, propTypes.arrayOf(propTypes.string)]),
  y: propTypes.oneOfType([propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string, propTypes.arrayOf(propTypes.string)]),
  y0: propTypes.oneOfType([propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string, propTypes.arrayOf(propTypes.string)])
};
var baseProps = {
  animate: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  containerComponent: propTypes.element,
  domain: propTypes.oneOfType([CustomPropTypes.domain, propTypes.shape({
    x: CustomPropTypes.domain,
    y: CustomPropTypes.domain
  })]),
  maxDomain: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date), propTypes.shape({
    x: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date)]),
    y: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date)])
  })]),
  minDomain: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date), propTypes.shape({
    x: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date)]),
    y: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date)])
  })]),
  domainPadding: propTypes.oneOfType([propTypes.shape({
    x: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
    y: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)])
  }), propTypes.number, propTypes.arrayOf(propTypes.number)]),
  eventKey: propTypes.oneOfType([propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
  events: propTypes.arrayOf(propTypes.shape({
    target: propTypes.oneOf(["data", "labels", "parent"]),
    eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
    eventHandlers: propTypes.object
  })),
  externalEventMutations: propTypes.arrayOf(propTypes.shape({
    callback: propTypes.function,
    childName: propTypes.oneOfType([propTypes.string, propTypes.array]),
    eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
    mutation: propTypes.function,
    target: propTypes.oneOfType([propTypes.string, propTypes.array])
  })),
  groupComponent: propTypes.element,
  height: CustomPropTypes.nonNegative,
  name: propTypes.string,
  origin: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number
  }),
  padding: propTypes.oneOfType([propTypes.number, propTypes.shape({
    top: propTypes.number,
    bottom: propTypes.number,
    left: propTypes.number,
    right: propTypes.number
  })]),
  polar: propTypes.bool,
  range: propTypes.oneOfType([CustomPropTypes.domain, propTypes.shape({
    x: CustomPropTypes.domain,
    y: CustomPropTypes.domain
  })]),
  scale: propTypes.oneOfType([CustomPropTypes.scale, propTypes.shape({
    x: CustomPropTypes.scale,
    y: CustomPropTypes.scale
  })]),
  sharedEvents: propTypes.shape({
    events: propTypes.array,
    getEventState: propTypes.func
  }),
  singleQuadrantDomainPadding: propTypes.oneOfType([propTypes.bool, propTypes.shape({
    x: propTypes.oneOfType([propTypes.bool]),
    y: propTypes.oneOfType([propTypes.bool])
  })]),
  standalone: propTypes.bool,
  theme: propTypes.object,
  width: CustomPropTypes.nonNegative
};
var primitiveProps = {
  active: propTypes.bool,
  ariaLabel: propTypes.oneOfType([propTypes.string, propTypes.func]),
  className: propTypes.string,
  clipPath: propTypes.string,
  data: propTypes.oneOfType([propTypes.array, propTypes.object]),
  desc: propTypes.oneOfType([propTypes.string, propTypes.func]),
  events: propTypes.object,
  id: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
  index: propTypes.oneOfType([propTypes.number, propTypes.string]),
  origin: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number
  }),
  polar: propTypes.bool,
  role: propTypes.string,
  scale: propTypes.oneOfType([CustomPropTypes.scale, propTypes.shape({
    x: CustomPropTypes.scale,
    y: CustomPropTypes.scale
  })]),
  shapeRendering: propTypes.string,
  style: propTypes.object,
  tabIndex: propTypes.oneOfType([propTypes.number, propTypes.func]),
  transform: propTypes.string
};
var CommonProps = {
  baseProps: baseProps,
  dataProps: dataProps,
  primitiveProps: primitiveProps
};

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var Path$1 = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties$1(props, ["desc"]);

  return desc ? react.createElement("path", rest, react.createElement("desc", null, desc)) : react.createElement("path", rest);
};

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$f(target, key, source[key]); }); } return target; }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getArcPath = function (props) {
  var cx = props.cx,
      cy = props.cy,
      r = props.r,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      closedPath = props.closedPath; // Always draw the path as two arcs so that complete circles may be rendered.

  var halfAngle = Math.abs(endAngle - startAngle) / 2 + startAngle;
  var x1 = cx + r * Math.cos(Helpers.degreesToRadians(startAngle));
  var y1 = cy - r * Math.sin(Helpers.degreesToRadians(startAngle));
  var x2 = cx + r * Math.cos(Helpers.degreesToRadians(halfAngle));
  var y2 = cy - r * Math.sin(Helpers.degreesToRadians(halfAngle));
  var x3 = cx + r * Math.cos(Helpers.degreesToRadians(endAngle));
  var y3 = cy - r * Math.sin(Helpers.degreesToRadians(endAngle));
  var largerArcFlag1 = halfAngle - startAngle <= 180 ? 0 : 1;
  var largerArcFlag2 = endAngle - halfAngle <= 180 ? 0 : 1;
  var arcStart = closedPath ? " M ".concat(cx, ", ").concat(cy, " L ").concat(x1, ", ").concat(y1) : "M ".concat(x1, ", ").concat(y1);
  var arc1 = "A ".concat(r, ", ").concat(r, ", 0, ").concat(largerArcFlag1, ", 0, ").concat(x2, ", ").concat(y2);
  var arc2 = "A ".concat(r, ", ").concat(r, ", 0, ").concat(largerArcFlag2, ", 0, ").concat(x3, ", ").concat(y3);
  var arcEnd = closedPath ? "Z" : "";
  return "".concat(arcStart, " ").concat(arc1, " ").concat(arc2, " ").concat(arcEnd);
};

var evaluateProps$5 = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `desc`
   * `id`
   * `style`
   * `tabIndex`
   */
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var style = Helpers.evaluateStyle(assign_1({
    stroke: "black",
    fill: "none"
  }, props.style), props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return assign_1({}, props, {
    ariaLabel: ariaLabel,
    desc: desc,
    id: id,
    style: style,
    tabIndex: tabIndex
  });
};

var Arc = function (props) {
  props = evaluateProps$5(props);
  return react.cloneElement(props.pathComponent, _objectSpread$d({}, props.events, {
    "aria-label": props.ariaLabel,
    d: getArcPath(props),
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

Arc.propTypes = _objectSpread$d({}, CommonProps.primitiveProps, {
  closedPath: propTypes.bool,
  cx: propTypes.number,
  cy: propTypes.number,
  datum: propTypes.any,
  endAngle: propTypes.number,
  pathComponent: propTypes.element,
  r: propTypes.number,
  startAngle: propTypes.number
});
Arc.defaultProps = {
  pathComponent: react.createElement(Path$1, null),
  role: "presentation",
  shapeRendering: "auto"
};

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$e(target, key, source[key]); }); } return target; }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evaluateProps$4 = function (props) {
  /**
   * Potential evaluated prop is:
   * `id`
   */
  var id = Helpers.evaluateProp(props.id, props);
  return assign_1({}, props, {
    id: id
  });
};

var Background = function (props) {
  props = evaluateProps$4(props);
  return props.polar ? react.cloneElement(props.circleComponent, _objectSpread$c({}, props.events, {
    style: props.style,
    role: props.role,
    shapeRendering: props.shapeRendering,
    cx: props.x,
    cy: props.y,
    r: props.height,
    className: props.className
  })) : react.cloneElement(props.rectComponent, _objectSpread$c({}, props.events, {
    style: props.style,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x: props.x,
    y: props.y,
    rx: props.rx,
    ry: props.ry,
    width: props.width,
    height: props.height,
    className: props.className
  }));
};

Background.propTypes = _objectSpread$c({}, CommonProps.primitiveProps, {
  circleComponent: propTypes.element,
  height: propTypes.number,
  rectComponent: propTypes.element,
  rx: propTypes.number,
  ry: propTypes.number,
  width: propTypes.number,
  x: propTypes.number,
  y: propTypes.number
});
Background.defaultProps = {
  circleComponent: react.createElement(Circle, null),
  rectComponent: react.createElement(Rect, null),
  role: "presentation",
  shapeRendering: "auto"
};

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$d(target, key, source[key]); }); } return target; }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evaluateProps$3 = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `desc`
   * `id`
   * `style`
   * `tabIndex`
   */
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var style = Helpers.evaluateStyle(assign_1({
    fill: "none"
  }, props.style), props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return assign_1({}, props, {
    ariaLabel: ariaLabel,
    desc: desc,
    id: id,
    style: style,
    tabIndex: tabIndex
  });
};

var Border = function (props) {
  props = evaluateProps$3(props);
  return react.cloneElement(props.rectComponent, _objectSpread$b({}, props.events, {
    "aria-label": props.ariaLabel,
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    transform: props.transform,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
    clipPath: props.clipPath
  }));
};

Border.propTypes = _objectSpread$b({}, CommonProps.primitiveProps, {
  height: propTypes.number,
  rectComponent: propTypes.element,
  width: propTypes.number,
  x: propTypes.number,
  y: propTypes.number
});
Border.defaultProps = {
  rectComponent: react.createElement(Rect, null),
  role: "presentation",
  shapeRendering: "auto"
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var Line = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? react.createElement("line", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest), react.createElement("desc", null, desc)) : react.createElement("line", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$c(target, key, source[key]); }); } return target; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evaluateProps$2 = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `desc`
   * `id`
   * `style`
   * `tabIndex`
   */
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var style = Helpers.evaluateStyle(assign_1({
    stroke: "black"
  }, props.style), props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return assign_1({}, props, {
    ariaLabel: ariaLabel,
    desc: desc,
    id: id,
    style: style,
    tabIndex: tabIndex
  });
};

var LineSegment = function (props) {
  props = evaluateProps$2(props);
  return react.cloneElement(props.lineComponent, _objectSpread$a({}, props.events, {
    "aria-label": props.ariaLabel,
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x1: props.x1,
    x2: props.x2,
    y1: props.y1,
    y2: props.y2,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

LineSegment.propTypes = _objectSpread$a({}, CommonProps.primitiveProps, {
  datum: propTypes.any,
  lineComponent: propTypes.element,
  x1: propTypes.number,
  x2: propTypes.number,
  y1: propTypes.number,
  y2: propTypes.number
});
LineSegment.defaultProps = {
  lineComponent: react.createElement(Line, null),
  role: "presentation",
  shapeRendering: "auto"
};

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax$1 = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

var _baseRange = baseRange;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite_1(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite_1(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite_1(step);
    return _baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = _createRange();

var range_1 = range;

var pathHelpers = {
  circle: function (x, y, size) {
    return "M ".concat(x, ", ").concat(y, "\n      m ").concat(-size, ", 0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(size * 2, ",0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(-size * 2, ",0");
  },
  square: function (x, y, size) {
    var baseSize = 0.87 * size; // eslint-disable-line no-magic-numbers

    var x0 = x - baseSize;
    var y1 = y + baseSize;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      z");
  },
  diamond: function (x, y, size) {
    var baseSize = 0.87 * size; // eslint-disable-line no-magic-numbers

    var length = Math.sqrt(2 * (baseSize * baseSize));
    return "M ".concat(x, ", ").concat(y + length, "\n      l ").concat(length, ", -").concat(length, "\n      l -").concat(length, ", -").concat(length, "\n      l -").concat(length, ", ").concat(length, "\n      l ").concat(length, ", ").concat(length, "\n      z");
  },
  triangleDown: function (x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - size;
    var y1 = y + height;
    return "M ".concat(x0, ", ").concat(y0, "\n      L ").concat(x1, ", ").concat(y0, "\n      L ").concat(x, ", ").concat(y1, "\n      z");
  },
  triangleUp: function (x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - height;
    var y1 = y + size;
    return "M ".concat(x0, ", ").concat(y1, "\n      L ").concat(x1, ", ").concat(y1, "\n      L ").concat(x, ", ").concat(y0, "\n      z");
  },
  plus: function (x, y, size) {
    var baseSize = 1.1 * size; // eslint-disable-line no-magic-numbers

    var distance = baseSize / 1.5; // eslint-disable-line no-magic-numbers

    return "\n      M ".concat(x - distance / 2, ", ").concat(y + baseSize, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h-").concat(distance, "\n      v").concat(distance, "\n      z");
  },
  cross: function (x, y, size) {
    var baseSize = 0.8 * size; // eslint-disable-line no-magic-numbers

    var distance = baseSize / 1.5; // eslint-disable-line no-magic-numbers

    return "\n      M ".concat(x - distance / 2, ", ").concat(y + baseSize + distance, "\n      v-").concat(distance * 2, "\n      h-").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h-").concat(distance, "\n      v").concat(distance * 2, "\n      z");
  },
  minus: function (x, y, size) {
    var baseSize = 1.1 * size; // eslint-disable-line no-magic-numbers

    var lineHeight = baseSize - baseSize * 0.3; // eslint-disable-line no-magic-numbers

    var x0 = x - baseSize;
    var y1 = y + lineHeight / 2;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z");
  },
  star: function (x, y, size) {
    var baseSize = 1.35 * size; // eslint-disable-line no-magic-numbers

    var angle = Math.PI / 5; // eslint-disable-line no-magic-numbers
    // eslint-disable-next-line no-magic-numbers

    var starCoords = range_1(10).map(function (index) {
      var length = index % 2 === 0 ? baseSize : baseSize / 2;
      return "".concat(length * Math.sin(angle * (index + 1)) + x, ",\n        ").concat(length * Math.cos(angle * (index + 1)) + y);
    });

    return "M ".concat(starCoords.join("L"), " z");
  }
};

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getPath = function (props) {
  var x = props.x,
      y = props.y,
      size = props.size,
      symbol = props.symbol;

  if (props.getPath) {
    return props.getPath(x, y, size);
  }

  var pathFunctions = {
    circle: pathHelpers.circle,
    square: pathHelpers.square,
    diamond: pathHelpers.diamond,
    triangleDown: pathHelpers.triangleDown,
    triangleUp: pathHelpers.triangleUp,
    plus: pathHelpers.plus,
    minus: pathHelpers.minus,
    star: pathHelpers.star,
    cross: pathHelpers.cross
  };
  var symbolFunction = typeof pathFunctions[symbol] === "function" ? pathFunctions[symbol] : pathFunctions.circle;
  return symbolFunction(x, y, size);
};

var evaluateProps$1 = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `desc`
   * `id`
   * `size`
   * `style`
   * `symbol`
   * `tabIndex`
   */
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var size = Helpers.evaluateProp(props.size, props);
  var style = Helpers.evaluateStyle(props.style, props);
  var symbol = Helpers.evaluateProp(props.symbol, props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return assign_1({}, props, {
    ariaLabel: ariaLabel,
    desc: desc,
    id: id,
    size: size,
    style: style,
    symbol: symbol,
    tabIndex: tabIndex
  });
};

var Point = function (props) {
  props = evaluateProps$1(props);
  return react.cloneElement(props.pathComponent, _objectSpread$9({}, props.events, {
    "aria-label": props.ariaLabel,
    d: getPath(props),
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    role: props.role,
    shapeRendering: props.shapeRendering,
    className: props.className,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

Point.propTypes = _objectSpread$9({}, CommonProps.primitiveProps, {
  datum: propTypes.object,
  getPath: propTypes.func,
  pathComponent: propTypes.element,
  size: propTypes.oneOfType([propTypes.number, propTypes.func]),
  symbol: propTypes.oneOfType([propTypes.oneOf(["circle", "cross", "diamond", "plus", "minus", "square", "star", "triangleDown", "triangleUp"]), propTypes.func]),
  x: propTypes.number,
  y: propTypes.number
});
Point.defaultProps = {
  pathComponent: react.createElement(Path$1, null),
  role: "presentation",
  shapeRendering: "auto"
};

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = _arrayMap(values, _baseUnary(iteratee));
  }
  if (comparator) {
    includes = _arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = _cacheHas;
    isCommon = false;
    values = new _SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

var _baseDifference = baseDifference;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = _baseRest(function(array, values) {
  return isArrayLikeObject_1(array)
    ? _baseDifference(array, _baseFlatten(values, 1, isArrayLikeObject_1, true))
    : [];
});

var difference_1 = difference;

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

var isNil_1 = isNil;

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = _baseRest(function(array, values) {
  return isArrayLikeObject_1(array)
    ? _baseDifference(array, values)
    : [];
});

var without_1 = without;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
}

var isString_1 = isString;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_1(collection) ? collection : values_1(collection);
  fromIndex = (fromIndex && !guard) ? toInteger_1(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString_1(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && _baseIndexOf(collection, value, fromIndex) > -1);
}

var includes_1 = includes;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? _baseUniq(array) : [];
}

var uniq_1 = uniq;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

var negate_1 = negate;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap(_getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1 = pickBy;

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy_1(object, negate_1(_baseIteratee(predicate)));
}

var omitBy_1 = omitBy;

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$d(arr) { return _arrayWithoutHoles$d(arr) || _iterableToArray$d(arr) || _nonIterableSpread$d(); }

function _nonIterableSpread$d() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$d(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$d(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var GLOBAL_EVENT_REGEX = /^onGlobal(.*)$/;
var Events = {
  /* Returns all own and shared events that should be attached to a single target element,
   * i.e. an individual bar specified by target: "data", eventKey: [index].
   * Returned events are scoped to the appropriate state. Either that of the component itself
   * (i.e. VictoryBar) in the case of own events, or that of the parent component
   * (i.e. VictoryChart) in the case of shared events
   */
  // eslint-disable-next-line max-params
  getEvents: function (props, target, eventKey, getScopedEvents) {
    var _this = this;

    // Returns all events that apply to a particular target element
    var getEventsByTarget = function (events) {
      var getSelectedEvents = function () {
        var targetEvents = events.reduce(function (memo, event) {
          if (event.target !== undefined) {
            var matchesTarget = Array.isArray(event.target) ? includes_1(event.target, target) : "".concat(event.target) === "".concat(target);
            return matchesTarget ? memo.concat(event) : memo;
          }

          return memo.concat(event);
        }, []);

        if (eventKey !== undefined && target !== "parent") {
          return targetEvents.filter(function (obj) {
            var targetKeys = obj.eventKey;

            var useKey = function (key) {
              return key ? "".concat(key) === "".concat(eventKey) : true;
            };

            return Array.isArray(targetKeys) ? targetKeys.some(function (k) {
              return useKey(k);
            }) : useKey(targetKeys);
          });
        }

        return targetEvents;
      };

      var selectedEvents = getSelectedEvents();
      return Array.isArray(selectedEvents) && selectedEvents.reduce(function (memo, event) {
        return event ? assign_1(memo, event.eventHandlers) : memo;
      }, {});
    };
    /* Returns all events from props and defaultEvents from components. Events handlers
     * specified in props will override handlers for the same event if they are also
     * specified in defaultEvents of a sub-component
     */


    var getAllEvents = function () {
      if (Array.isArray(_this.componentEvents)) {
        var _this$componentEvents;

        return Array.isArray(props.events) ? (_this$componentEvents = _this.componentEvents).concat.apply(_this$componentEvents, _toConsumableArray$d(props.events)) : _this.componentEvents;
      }

      return props.events;
    };

    var allEvents = getAllEvents();
    var ownEvents = allEvents && isFunction_1(getScopedEvents) ? getScopedEvents(getEventsByTarget(allEvents), target) : undefined;

    if (!props.sharedEvents) {
      return ownEvents;
    }

    var getSharedEvents = props.sharedEvents.getEvents;
    var sharedEvents = props.sharedEvents.events && getSharedEvents(getEventsByTarget(props.sharedEvents.events), target);
    return assign_1({}, sharedEvents, ownEvents);
  },

  /* Returns a modified events object where each event handler is replaced by a new
   * function that calls the original handler and then calls setState with the return
   * of the original event handler assigned to state property that maps to the target
   * element.
   */
  // eslint-disable-next-line max-params
  getScopedEvents: function (events, namespace, childType, baseProps) {
    var _this2 = this;

    if (isEmpty_1(events)) {
      return {};
    }

    baseProps = baseProps || this.baseProps; // returns the original base props or base state of a given target element

    var getTargetProps = function (identifier, type) {
      var childName = identifier.childName,
          target = identifier.target,
          key = identifier.key;
      var baseType = type === "props" ? baseProps : _this2.state || {};
      var base = childName === undefined || childName === null || !baseType[childName] ? baseType : baseType[childName];
      return key === "parent" ? base.parent : base[key] && base[key][target];
    }; // Returns the state object with the mutation caused by a given eventReturn
    // applied to the appropriate property on the state object


    var parseEvent = function (eventReturn, eventKey) {
      var childNames = namespace === "parent" ? eventReturn.childName : eventReturn.childName || childType;
      var target = eventReturn.target || namespace; // returns all eventKeys to modify for a targeted childName

      var getKeys = function (childName) {
        if (target === "parent") {
          return "parent";
        }

        if (eventReturn.eventKey === "all") {
          return baseProps[childName] ? without_1(keys_1(baseProps[childName]), "parent") : without_1(keys_1(baseProps), "parent");
        } else if (eventReturn.eventKey === undefined && eventKey === "parent") {
          return baseProps[childName] ? keys_1(baseProps[childName]) : keys_1(baseProps);
        }

        return eventReturn.eventKey !== undefined ? eventReturn.eventKey : eventKey;
      }; // returns the state object with mutated props applied for a single key


      var getMutationObject = function (key, childName) {
        var baseState = _this2.state || {};

        if (!isFunction_1(eventReturn.mutation)) {
          return baseState;
        }

        var mutationTargetProps = getTargetProps({
          childName: childName,
          key: key,
          target: target
        }, "props");
        var mutationTargetState = getTargetProps({
          childName: childName,
          key: key,
          target: target
        }, "state");
        var mutatedProps = eventReturn.mutation(assign_1({}, mutationTargetProps, mutationTargetState), baseProps);
        var childState = baseState[childName] || {};

        var filterState = function (state) {
          if (state[key] && state[key][target]) {
            delete state[key][target];
          }

          if (state[key] && !keys_1(state[key]).length) {
            delete state[key];
          }

          return state;
        };

        var extendState = function (state) {
          return target === "parent" ? assign_1(state, _defineProperty$a({}, key, assign_1(state[key], mutatedProps))) : assign_1(state, _defineProperty$a({}, key, assign_1(state[key], _defineProperty$a({}, target, mutatedProps))));
        };

        var updateState = function (state) {
          return mutatedProps ? extendState(state) : filterState(state);
        };

        return childName !== undefined && childName !== null ? assign_1(baseState, _defineProperty$a({}, childName, updateState(childState))) : updateState(baseState);
      }; // returns entire mutated state for a given childName


      var getReturnByChild = function (childName) {
        var mutationKeys = getKeys(childName);
        return Array.isArray(mutationKeys) ? mutationKeys.reduce(function (memo, key) {
          return assign_1(memo, getMutationObject(key, childName));
        }, {}) : getMutationObject(mutationKeys, childName);
      }; // returns an entire mutated state for all children


      var allChildNames = childNames === "all" ? without_1(keys_1(baseProps), "parent") : childNames;
      return Array.isArray(allChildNames) ? allChildNames.reduce(function (memo, childName) {
        return assign_1(memo, getReturnByChild(childName));
      }, {}) : getReturnByChild(allChildNames);
    }; // Parses an array of event returns into a single state mutation


    var parseEventReturn = function (eventReturn, eventKey) {
      return Array.isArray(eventReturn) ? eventReturn.reduce(function (memo, props) {
        memo = assign_1({}, memo, parseEvent(props, eventKey));
        return memo;
      }, {}) : parseEvent(eventReturn, eventKey);
    };

    var compileCallbacks = function (eventReturn) {
      var getCallback = function (obj) {
        return isFunction_1(obj.callback) && obj.callback;
      };

      var callbacks = Array.isArray(eventReturn) ? eventReturn.map(function (evtObj) {
        return getCallback(evtObj);
      }) : [getCallback(eventReturn)];
      var callbackArray = callbacks.filter(function (callback) {
        return callback !== false;
      });
      return callbackArray.length ? function () {
        return callbackArray.forEach(function (callback) {
          return callback();
        });
      } : undefined;
    }; // A function that calls a particular event handler, parses its return
    // into a state mutation, and calls setState
    // eslint-disable-next-line max-params


    var onEvent = function (evt, childProps, eventKey, eventName) {
      var eventReturn = events[eventName](evt, childProps, eventKey, _this2);

      if (!isEmpty_1(eventReturn)) {
        var callbacks = compileCallbacks(eventReturn);

        _this2.setState(parseEventReturn(eventReturn, eventKey), callbacks);
      }
    }; // returns a new events object with enhanced event handlers


    return keys_1(events).reduce(function (memo, event) {
      memo[event] = onEvent;
      return memo;
    }, {});
  },

  /* Returns a partially applied event handler for a specific target element
   * This allows event handlers to have access to props controlling each element
   */
  getPartialEvents: function (events, eventKey, childProps) {
    return events ? keys_1(events).reduce(function (memo, eventName) {
      var appliedEvent = function (evt) {
        return events[eventName](evt, childProps, eventKey, eventName);
      };

      memo[eventName] = appliedEvent;
      return memo;
    }, {}) : {};
  },

  /* Returns the property of the state object corresponding to event changes for
   * a particular element
   */
  getEventState: function (eventKey, namespace, childType) {
    var state = this.state || {};

    if (!childType) {
      return eventKey === "parent" ? state[eventKey] && state[eventKey][namespace] || state[eventKey] : state[eventKey] && state[eventKey][namespace];
    }

    return state[childType] && state[childType][eventKey] && state[childType][eventKey][namespace];
  },

  /**
   * Returns a set of all mutations for shared events
   *
   * @param  {Array} mutations an array of mutations objects
   * @param  {Object} baseProps an object that describes all props for children of VictorySharedEvents
   * @param  {Object} baseState an object that describes state for children of VictorySharedEvents
   * @param  {Array} childNames an array of childNames
   *
   * @return {Object} a object describing all mutations for VictorySharedEvents
   */
  // eslint-disable-next-line max-params
  getExternalMutationsWithChildren: function (mutations, baseProps, baseState, childNames) {
    var _this3 = this;

    baseProps = baseProps || {};
    baseState = baseState || {};
    return childNames.reduce(function (memo, childName) {
      var childState = baseState[childName];

      var mutation = _this3.getExternalMutations(mutations, baseProps[childName], baseState[childName], childName);

      memo[childName] = mutation ? mutation : childState;
      return pickBy_1(memo, function (v) {
        return !isEmpty_1(v);
      });
    }, {});
  },

  /**
   * Returns a set of all mutations for a component
   *
   * @param  {Array} mutations an array of mutations objects
   * @param  {Object} baseProps a props object (scoped to a childName when used by shared events)
   * @param  {Object} baseState a state object (scoped to a childName when used by shared events)
   * @param  {String} childName an optional childName
   *
   * @return {Object} a object describing mutations for a given component
   */
  // eslint-disable-next-line max-params
  getExternalMutations: function (mutations, baseProps, baseState, childName) {
    var _this4 = this;

    baseProps = baseProps || {};
    baseState = baseState || {};

    var eventKeys = keys_1(baseProps);

    return eventKeys.reduce(function (memo, eventKey) {
      var keyState = baseState[eventKey] || {};
      var keyProps = baseProps[eventKey] || {};

      if (eventKey === "parent") {
        var identifier = {
          eventKey: eventKey,
          target: "parent"
        };

        var mutation = _this4.getExternalMutation(mutations, keyProps, keyState, identifier);

        memo[eventKey] = mutation !== undefined ? assign_1({}, keyState, mutation) : keyState;
      } else {
        // use keys from both state and props so that elements not intially included in baseProps
        // will be used. (i.e. labels)
        var targets = uniq_1(keys_1(keyProps).concat(keys_1(keyState)));

        memo[eventKey] = targets.reduce(function (m, target) {
          var identifier = {
            eventKey: eventKey,
            target: target,
            childName: childName
          };

          var mutation = _this4.getExternalMutation(mutations, keyProps[target], keyState[target], identifier);

          m[target] = mutation !== undefined ? assign_1({}, keyState[target], mutation) : keyState[target];
          return pickBy_1(m, function (v) {
            return !isEmpty_1(v);
          });
        }, {});
      }

      return pickBy_1(memo, function (v) {
        return !isEmpty_1(v);
      });
    }, {});
  },

  /**
   * Returns a set of mutations for a particular element given scoped baseProps and baseState
   *
   * @param  {Array} mutations an array of mutations objects
   * @param  {Object} baseProps a props object (scoped the element specified by the identifier)
   * @param  {Object} baseState a state object (scoped the element specified by the identifier)
   * @param  {Object} identifier { eventKey, target, childName }
   *
   * @return {Object | undefined} a object describing mutations for a given element, or undefined
   */
  // eslint-disable-next-line max-params
  getExternalMutation: function (mutations, baseProps, baseState, identifier) {
    var filterMutations = function (mutation, type) {
      if (typeof mutation[type] === "string") {
        return mutation[type] === "all" || mutation[type] === identifier[type];
      } else if (Array.isArray(mutation[type])) {
        // coerce arrays to strings before matching
        var stringArray = mutation[type].map(function (m) {
          return "".concat(m);
        });
        return includes_1(stringArray, identifier[type]);
      } else {
        return false;
      }
    };

    mutations = Array.isArray(mutations) ? mutations : [mutations];
    var scopedMutations = mutations;

    if (identifier.childName) {
      scopedMutations = mutations.filter(function (m) {
        return filterMutations(m, "childName");
      });
    } // find any mutation objects that match the target


    var targetMutations = scopedMutations.filter(function (m) {
      return filterMutations(m, "target");
    });

    if (isEmpty_1(targetMutations)) {
      return undefined;
    }

    var keyMutations = targetMutations.filter(function (m) {
      return filterMutations(m, "eventKey");
    });

    if (isEmpty_1(keyMutations)) {
      return undefined;
    }

    return keyMutations.reduce(function (memo, curr) {
      var mutationFunction = curr && isFunction_1(curr.mutation) ? curr.mutation : function () {
        return undefined;
      };
      var currentMutation = mutationFunction(assign_1({}, baseProps, baseState));
      return assign_1({}, memo, currentMutation);
    }, {});
  },

  /* Returns an array of defaultEvents from sub-components of a given component.
   * i.e. any static `defaultEvents` on `labelComponent` will be returned
   */
  getComponentEvents: function (props, components) {
    var events = Array.isArray(components) && components.reduce(function (memo, componentName) {
      var _memo;

      var component = props[componentName];
      var defaultEvents = component && component.type && component.type.defaultEvents;
      var componentEvents = isFunction_1(defaultEvents) ? defaultEvents(component.props) : defaultEvents;
      memo = Array.isArray(componentEvents) ? (_memo = memo).concat.apply(_memo, _toConsumableArray$d(componentEvents)) : memo;
      return memo;
    }, []);
    return events && events.length ? events : undefined;
  },
  getGlobalEventNameFromKey: function (key) {
    var match = key.match(GLOBAL_EVENT_REGEX);
    return match && match[1] && match[1].toLowerCase();
  },
  getGlobalEvents: function (events) {
    return pickBy_1(events, function (_, key) {
      return GLOBAL_EVENT_REGEX.test(key);
    });
  },
  omitGlobalEvents: function (events) {
    return omitBy_1(events, function (_, key) {
      return GLOBAL_EVENT_REGEX.test(key);
    });
  },
  emulateReactEvent: function (event) {
    return assign_1(event, {
      nativeEvent: event
    });
  }
};

function _toConsumableArray$c(arr) { return _arrayWithoutHoles$c(arr) || _iterableToArray$c(arr) || _nonIterableSpread$c(); }

function _nonIterableSpread$c() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$c(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$c(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$7(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var datumHasXandY = function (datum) {
  return !isNil_1(datum._x) && !isNil_1(datum._y);
}; //  used for checking state changes. Expected components can be passed in via options


var defaultComponents = [{
  name: "parent",
  index: "parent"
}, {
  name: "data"
}, {
  name: "labels"
}];
var addEvents = (function (WrappedComponent, options) {
  return (
    /*#__PURE__*/
    function (_WrappedComponent) {
      _inherits$7(addEvents, _WrappedComponent);

      function addEvents(props) {
        var _this;

        _classCallCheck$7(this, addEvents);

        _this = _possibleConstructorReturn$7(this, (addEvents.__proto__ || Object.getPrototypeOf(addEvents)).call(this, props));
        var getScopedEvents = Events.getScopedEvents.bind(_assertThisInitialized$7(_this));
        var boundGetEvents = Events.getEvents.bind(_assertThisInitialized$7(_this));
        _this.state = {};

        _this.getEvents = function (p, target, eventKey) {
          return boundGetEvents(p, target, eventKey, getScopedEvents);
        };

        _this.getEventState = Events.getEventState.bind(_assertThisInitialized$7(_this));

        var calculatedValues = _this.getCalculatedValues(props);

        _this.cacheValues(calculatedValues);

        _this.externalMutations = _this.getExternalMutations(props);
        _this.calculatedState = _this.getStateChanges(props);
        _this.globalEvents = {};
        _this.prevGlobalEventKeys = [];
        _this.boundGlobalEvents = {};
        return _this;
      }

      _createClass$7(addEvents, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var externalMutations = this.getExternalMutations(nextProps);
          var animating = this.props.animating || this.props.animate;
          var newMutation = !reactFastCompare(externalMutations, this.externalMutations);

          if (animating || newMutation) {
            this.cacheValues(this.getCalculatedValues(nextProps));
            this.externalMutations = externalMutations;
            this.applyExternalMutations(nextProps, externalMutations);
            return true;
          }

          var calculatedState = this.getStateChanges(nextProps);

          if (!reactFastCompare(this.calculatedState, calculatedState)) {
            this.cacheValues(this.getCalculatedValues(nextProps));
            return true;
          }

          if (!reactFastCompare(this.props, nextProps)) {
            this.cacheValues(this.getCalculatedValues(nextProps));
            return true;
          }

          return false;
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var globalEventKeys = keys_1(this.globalEvents);

          globalEventKeys.forEach(function (key) {
            return _this2.addGlobalListener(key);
          });
          this.prevGlobalEventKeys = globalEventKeys;
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this3 = this;

          var calculatedState = this.getStateChanges(prevProps);
          this.calculatedState = calculatedState;

          var globalEventKeys = keys_1(this.globalEvents);

          var removedGlobalEventKeys = difference_1(this.prevGlobalEventKeys, globalEventKeys);

          removedGlobalEventKeys.forEach(function (key) {
            return _this3.removeGlobalListener(key);
          });

          var addedGlobalEventKeys = difference_1(globalEventKeys, this.prevGlobalEventKeys);

          addedGlobalEventKeys.forEach(function (key) {
            return _this3.addGlobalListener(key);
          });
          this.prevGlobalEventKeys = globalEventKeys;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this4 = this;

          this.prevGlobalEventKeys.forEach(function (key) {
            return _this4.removeGlobalListener(key);
          });
        }
      }, {
        key: "addGlobalListener",
        value: function addGlobalListener(key) {
          var _this5 = this;

          var boundListener = function (event) {
            var listener = _this5.globalEvents[key];
            return listener && listener(Events.emulateReactEvent(event));
          };

          this.boundGlobalEvents[key] = boundListener;
          window.addEventListener(Events.getGlobalEventNameFromKey(key), boundListener);
        }
      }, {
        key: "removeGlobalListener",
        value: function removeGlobalListener(key) {
          window.removeEventListener(Events.getGlobalEventNameFromKey(key), this.boundGlobalEvents[key]);
        } // compile all state changes from own and parent state. Order doesn't matter, as any state
        // state change should trigger a re-render

      }, {
        key: "getStateChanges",
        value: function getStateChanges(props) {
          var _this6 = this;

          if (!this.hasEvents) {
            return {};
          }

          var getState = function (key, type) {
            var result = defaults_1({}, _this6.getEventState(key, type), _this6.getSharedEventState(key, type));

            return isEmpty_1(result) ? undefined : result;
          };

          options = options || {};
          var components = options.components || defaultComponents;
          var stateChanges = components.map(function (component) {
            if (!props.standalone && component.name === "parent") {
              // don't check for changes on parent props for non-standalone components
              return undefined;
            } else {
              return component.index !== undefined ? getState(component.index, component.name) : _this6.dataKeys.map(function (key) {
                return getState(key, component.name);
              }).filter(Boolean);
            }
          }).filter(Boolean);
          return stateChanges;
        }
      }, {
        key: "applyExternalMutations",
        value: function applyExternalMutations(props, externalMutations) {
          if (!isEmpty_1(externalMutations)) {
            var callbacks = props.externalEventMutations.reduce(function (memo, mutation) {
              memo = isFunction_1(mutation.callback) ? memo.concat(mutation.callback) : memo;
              return memo;
            }, []);
            var compiledCallbacks = callbacks.length ? function () {
              callbacks.forEach(function (c) {
                return c();
              });
            } : undefined;
            this.setState(externalMutations, compiledCallbacks);
          }
        }
      }, {
        key: "getCalculatedValues",
        value: function getCalculatedValues(props) {
          var sharedEvents = props.sharedEvents;
          var components = WrappedComponent.expectedComponents;
          var componentEvents = Events.getComponentEvents(props, components);
          var getSharedEventState = sharedEvents && isFunction_1(sharedEvents.getEventState) ? sharedEvents.getEventState : function () {
            return undefined;
          };
          var baseProps = this.getBaseProps(props, getSharedEventState);

          var dataKeys = keys_1(baseProps).filter(function (key) {
            return key !== "parent";
          });

          var hasEvents = props.events || props.sharedEvents || componentEvents;
          var events = this.getAllEvents(props);
          return {
            componentEvents: componentEvents,
            getSharedEventState: getSharedEventState,
            baseProps: baseProps,
            dataKeys: dataKeys,
            hasEvents: hasEvents,
            events: events
          };
        }
      }, {
        key: "getExternalMutations",
        value: function getExternalMutations(props) {
          var sharedEvents = props.sharedEvents,
              externalEventMutations = props.externalEventMutations;
          return isEmpty_1(externalEventMutations) || sharedEvents ? undefined : Events.getExternalMutations(externalEventMutations, this.baseProps, this.state);
        }
      }, {
        key: "cacheValues",
        value: function cacheValues(obj) {
          var _this7 = this;

          keys_1(obj).forEach(function (key) {
            _this7[key] = obj[key];
          });
        }
      }, {
        key: "getBaseProps",
        value: function getBaseProps(props, getSharedEventState) {
          getSharedEventState = getSharedEventState || this.getSharedEventState;
          var sharedParentState = getSharedEventState("parent", "parent");
          var parentState = this.getEventState("parent", "parent");

          var baseParentProps = defaults_1({}, parentState, sharedParentState);

          var parentPropsList = baseParentProps.parentControlledProps;
          var parentProps = parentPropsList ? pick_1(baseParentProps, parentPropsList) : {};

          var modifiedProps = defaults_1({}, parentProps, props);

          return isFunction_1(WrappedComponent.getBaseProps) ? WrappedComponent.getBaseProps(modifiedProps) : {};
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents(props) {
          if (Array.isArray(this.componentEvents)) {
            var _componentEvents;

            return Array.isArray(props.events) ? (_componentEvents = this.componentEvents).concat.apply(_componentEvents, _toConsumableArray$c(props.events)) : this.componentEvents;
          }

          return props.events;
        }
      }, {
        key: "getComponentProps",
        value: function getComponentProps(component, type, index) {
          var name = this.props.name || WrappedComponent.role;
          var key = this.dataKeys && this.dataKeys[index] || index;
          var id = "".concat(name, "-").concat(type, "-").concat(key);
          var baseProps = this.baseProps[key] && this.baseProps[key][type] || this.baseProps[key];

          if (!baseProps && !this.hasEvents) {
            return undefined;
          }

          if (this.hasEvents) {
            var baseEvents = this.getEvents(this.props, type, key);

            var componentProps = defaults_1({
              index: index,
              key: id
            }, this.getEventState(key, type), this.getSharedEventState(key, type), component.props, baseProps, {
              id: id
            });

            var events = defaults_1({}, Events.getPartialEvents(baseEvents, key, componentProps), componentProps.events);

            return assign_1({}, componentProps, {
              events: events
            });
          }

          return defaults_1({
            index: index,
            key: id
          }, component.props, baseProps, {
            id: id
          });
        }
      }, {
        key: "renderContainer",
        value: function renderContainer(component, children) {
          var isContainer = component.type && component.type.role === "container";
          var parentProps = isContainer ? this.getComponentProps(component, "parent", "parent") : {};

          if (parentProps.events) {
            this.globalEvents = Events.getGlobalEvents(parentProps.events);
            parentProps.events = Events.omitGlobalEvents(parentProps.events);
          }

          return react.cloneElement(component, parentProps, children);
        }
      }, {
        key: "animateComponent",
        value: function animateComponent(props, defaultAnimationWhitelist) {
          var animationWhitelist = props.animate && props.animate.animationWhitelist ? props.animate.animationWhitelist : defaultAnimationWhitelist;
          return react.createElement(VictoryTransition, {
            animate: props.animate,
            animationWhitelist: animationWhitelist
          }, react.createElement(this.constructor, props));
        } // Used by `VictoryLine` and `VictoryArea`

      }, {
        key: "renderContinuousData",
        value: function renderContinuousData(props) {
          var _this8 = this;

          var dataComponent = props.dataComponent,
              labelComponent = props.labelComponent,
              groupComponent = props.groupComponent;

          var dataKeys = without_1(this.dataKeys, "all");

          var labelComponents = dataKeys.reduce(function (memo, key) {
            var labelProps = _this8.getComponentProps(labelComponent, "labels", key);

            if (labelProps && labelProps.text !== undefined && labelProps.text !== null) {
              memo = memo.concat(react.cloneElement(labelComponent, labelProps));
            }

            return memo;
          }, []);
          var dataProps = this.getComponentProps(dataComponent, "data", "all");
          var children = [react.cloneElement(dataComponent, dataProps)].concat(_toConsumableArray$c(labelComponents));
          return this.renderContainer(groupComponent, children);
        }
      }, {
        key: "renderData",
        value: function renderData(props) {
          var _this9 = this;

          var shouldRenderDatum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : datumHasXandY;
          var dataComponent = props.dataComponent,
              labelComponent = props.labelComponent,
              groupComponent = props.groupComponent;
          var dataComponents = this.dataKeys.reduce(function (validDataComponents, _dataKey, index) {
            var dataProps = _this9.getComponentProps(dataComponent, "data", index);

            if (shouldRenderDatum(dataProps.datum)) {
              validDataComponents.push(react.cloneElement(dataComponent, dataProps));
            }

            return validDataComponents;
          }, []);
          var labelComponents = this.dataKeys.map(function (_dataKey, index) {
            var labelProps = _this9.getComponentProps(labelComponent, "labels", index);

            if (labelProps.text !== undefined && labelProps.text !== null) {
              return react.cloneElement(labelComponent, labelProps);
            }

            return undefined;
          }).filter(Boolean);

          var children = _toConsumableArray$c(dataComponents).concat(_toConsumableArray$c(labelComponents));

          return this.renderContainer(groupComponent, children);
        }
      }]);

      return addEvents;
    }(WrappedComponent)
  );
});

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

function number$2(x) {
  return x === null ? NaN : +x;
}

function sequence(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function d3Quantile(values, p, valueof) {
  if (valueof == null) valueof = number$2;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

var prefix = "$";

function Map() {}

Map.prototype = map$2.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map$2(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

function Set() {}

var proto = map$2.prototype;

Set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

var array = Array.prototype;

var map$1 = array.map;
var slice = array.slice;

var implicit = {name: "implicit"};

function ordinal(range) {
  var index = map$2(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : slice.call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map$2();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point$1() {
  return pointish(band().paddingInner(1));
}

function constant$1(x) {
  return function() {
    return x;
  };
}

function number$1(x) {
  return +x;
}

var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$1(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = interpolateValue,
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$1.call(_, number$1), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = slice.call(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}

function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": formatDecimal,
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

function identity$1(x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale$1(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale$1;
var format;
var formatPrefix;

defaultLocale$1({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  format = locale$1.format;
  formatPrefix = locale$1.formatPrefix;
  return locale$1;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = tickStep(start, stop, count == null ? 10 : count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return tickFormat(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = continuous(deinterpolateLinear, reinterpolate$1);

  scale.copy = function() {
    return copy(scale, linear());
  };

  return linearish(scale);
}

function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map$1.call(_, number$1), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : constant$1(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = continuous(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return copy(scale, log().base(base));
  };

  return scale;
}

function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = continuous(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : constant$1(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return copy(scale, pow().exponent(exponent));
  };

  return linearish(scale);
}

function sqrt$1() {
  return pow().exponent(0.5);
}

function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = d3Quantile(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[bisectRight(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}

function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[bisectRight(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return linearish(scale);
}

function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[bisectRight(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}

var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

var durationSecond$1 = 1e3;
var durationMinute$1 = 6e4;
var durationHour$1 = 36e5;
var durationDay$1 = 864e5;
var durationWeek$1 = 6048e5;

var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond$1);
}, function(start, end) {
  return (end - start) / durationSecond$1;
}, function(date) {
  return date.getUTCSeconds();
});

var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond$1);
}, function(date, step) {
  date.setTime(+date + step * durationMinute$1);
}, function(start, end) {
  return (end - start) / durationMinute$1;
}, function(date) {
  return date.getMinutes();
});

var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond$1 - date.getMinutes() * durationMinute$1);
}, function(date, step) {
  date.setTime(+date + step * durationHour$1);
}, function(start, end) {
  return (end - start) / durationHour$1;
}, function(date) {
  return date.getHours();
});

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationDay$1;
}, function(date) {
  return date.getDate() - 1;
});

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
weekday(2);
weekday(3);
var thursday = weekday(4);
weekday(5);
weekday(6);

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute$1);
}, function(start, end) {
  return (end - start) / durationMinute$1;
}, function(date) {
  return date.getUTCMinutes();
});

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour$1);
}, function(start, end) {
  return (end - start) / durationHour$1;
}, function(date) {
  return date.getUTCHours();
});

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay$1;
}, function(date) {
  return date.getUTCDate() - 1;
});

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek$1;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
utcWeekday(2);
utcWeekday(3);
var utcThursday = utcWeekday(4);
utcWeekday(5);
utcWeekday(6);

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day$1 = week.getUTCDay();
          week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day$1 = week.getDay();
          week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$1 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale;
var timeFormat;
var utcFormat;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  locale.parse;
  utcFormat = locale.utcFormat;
  locale.utcParse;
  return locale;
}

var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = continuous(deinterpolateLinear, reinterpolate$1),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map$1.call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

function time() {
  return calendar(year, month, sunday, day, hour, minute, second, millisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
}

function utcTime() {
  return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
}

function colors(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
}

var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

var cubehelix = cubehelixLong(cubehelix$2(300, 0.5, 0.0), cubehelix$2(-240, 0.5, 1.0));

var warm = cubehelixLong(cubehelix$2(-100, 0.75, 0.35), cubehelix$2(80, 1.50, 0.8));

var cool = cubehelixLong(cubehelix$2(260, 0.75, 0.35), cubehelix$2(80, 1.50, 0.8));

var rainbow = cubehelix$2();

function rainbow$1(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
}

function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return linearish(scale);
}

var d3Scale = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scaleBand: band,
  scalePoint: point$1,
  scaleIdentity: identity,
  scaleLinear: linear,
  scaleLog: log,
  scaleOrdinal: ordinal,
  scaleImplicit: implicit,
  scalePow: pow,
  scaleSqrt: sqrt$1,
  scaleQuantile: quantile,
  scaleQuantize: quantize,
  scaleThreshold: threshold,
  scaleTime: time,
  scaleUtc: utcTime,
  schemeCategory10: category10,
  schemeCategory20b: category20b,
  schemeCategory20c: category20c,
  schemeCategory20: category20,
  interpolateCubehelixDefault: cubehelix,
  interpolateRainbow: rainbow$1,
  interpolateWarm: warm,
  interpolateCool: cool,
  interpolateViridis: viridis,
  interpolateMagma: magma,
  interpolateInferno: inferno,
  interpolatePlasma: plasma,
  scaleSequential: sequential
});

var supportedScaleStrings = ["linear", "time", "log", "sqrt"]; // Private Functions

function toNewName(scale) {
  // d3 scale changed the naming scheme for scale from "linear" -> "scaleLinear" etc.
  var capitalize = function (s) {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  return "scale".concat(capitalize(scale));
}

function validScale(scale) {
  if (typeof scale === "function") {
    return isFunction_1(scale.copy) && isFunction_1(scale.domain) && isFunction_1(scale.range);
  } else if (typeof scale === "string") {
    return includes_1(supportedScaleStrings, scale);
  }

  return false;
}

function isScaleDefined(props, axis) {
  if (!props.scale) {
    return false;
  } else if (props.scale.x || props.scale.y) {
    return props.scale[axis] ? true : false;
  }

  return true;
}

function getScaleTypeFromProps(props, axis) {
  if (!isScaleDefined(props, axis)) {
    return undefined;
  }

  var scale = props.scale[axis] || props.scale;
  return typeof scale === "string" ? scale : getType(scale);
}

function getScaleFromDomain(props, axis) {
  var domain;

  if (props.domain && props.domain[axis]) {
    domain = props.domain[axis];
  } else if (props.domain && Array.isArray(props.domain)) {
    domain = props.domain;
  }

  if (!domain) {
    return undefined;
  }

  return Collection.containsDates(domain) ? "time" : "linear";
}

function getScaleTypeFromData(props, axis) {
  if (!props.data) {
    return "linear";
  }

  var accessor = Helpers.createAccessor(props[axis]);
  var axisData = props.data.map(function (datum) {
    var processedData = isPlainObject_1(accessor(datum)) ? accessor(datum)[axis] : accessor(datum);
    return processedData !== undefined ? processedData : datum[axis];
  });
  return Collection.containsDates(axisData) ? "time" : "linear";
} // Exported Functions


function getScaleFromName(name) {
  return validScale(name) ? d3Scale[toNewName(name)]() : linear();
}

function getBaseScale(props, axis) {
  var scale = getScaleFromProps(props, axis);

  if (scale) {
    return typeof scale === "string" ? getScaleFromName(scale) : scale;
  }

  var defaultScale = getScaleFromDomain(props, axis) || getScaleTypeFromData(props, axis);
  return d3Scale[toNewName(defaultScale)]();
}

function getDefaultScale() {
  return linear();
}

function getScaleFromProps(props, axis) {
  if (!isScaleDefined(props, axis)) {
    return undefined;
  }

  var scale = props.scale[axis] || props.scale;

  if (validScale(scale)) {
    return isFunction_1(scale) ? scale : d3Scale[toNewName(scale)]();
  }

  return undefined;
}

function getScaleType(props, axis) {
  // if the scale was not given in props, it will be set to linear or time depending on data
  return getScaleTypeFromProps(props, axis) || getScaleTypeFromData(props, axis);
}

function getType(scale) {
  if (typeof scale === "string") {
    return scale;
  }

  var duckTypes = [{
    name: "log",
    method: "base"
  }, {
    name: "ordinal",
    method: "unknown"
  }, {
    name: "pow-sqrt",
    method: "exponent"
  }, {
    name: "quantile",
    method: "quantiles"
  }, {
    name: "quantize-threshold",
    method: "invertExtent"
  }];
  var scaleType = duckTypes.filter(function (type) {
    return scale[type.method] !== undefined;
  })[0];
  return scaleType ? scaleType.name : undefined;
}

var Scale = {
  getBaseScale: getBaseScale,
  getDefaultScale: getDefaultScale,
  getScaleFromProps: getScaleFromProps,
  getScaleType: getScaleType,
  getType: getType,
  getScaleFromName: getScaleFromName
};

var Immutable = {
  IMMUTABLE_ITERABLE: "@@__IMMUTABLE_ITERABLE__@@",
  IMMUTABLE_RECORD: "@@__IMMUTABLE_RECORD__@@",
  IMMUTABLE_LIST: "@@__IMMUTABLE_LIST__@@",
  IMMUTABLE_MAP: "@@__IMMUTABLE_MAP__@@",
  isImmutable: function (x) {
    return this.isIterable(x) || this.isRecord(x);
  },
  isIterable: function (x) {
    return !!(x && x[this.IMMUTABLE_ITERABLE]);
  },
  isRecord: function (x) {
    return !!(x && x[this.IMMUTABLE_RECORD]);
  },
  isList: function (x) {
    return !!(x && x[this.IMMUTABLE_LIST]);
  },
  isMap: function (x) {
    return !!(x && x[this.IMMUTABLE_MAP]);
  },
  shallowToJS: function (x, whitelist) {
    var _this = this;

    return this.isIterable(x) ? x.reduce(function (prev, curr, key) {
      if (whitelist && whitelist[key]) {
        curr = _this.shallowToJS(curr);
      }

      prev[key] = curr;
      return prev;
    }, this.isList(x) ? [] : {}) : x;
  }
};

function _toConsumableArray$b(arr) { return _arrayWithoutHoles$b(arr) || _iterableToArray$b(arr) || _nonIterableSpread$b(); }

function _nonIterableSpread$b() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$b(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$b(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function parseDatum(datum) {
  var immutableDatumWhitelist = {
    errorX: true,
    errorY: true
  };
  return Immutable.isImmutable(datum) ? Immutable.shallowToJS(datum, immutableDatumWhitelist) : datum;
}

function getLength(data) {
  return Immutable.isIterable(data) ? data.size : data.length;
} // Returns generated data for a given axis based on domain and sample from props


function generateDataArray(props, axis) {
  var propsDomain = isPlainObject_1(props.domain) ? props.domain[axis] : props.domain;
  var domain = propsDomain || Scale.getBaseScale(props, axis).domain();
  var samples = props.samples || 1;
  var domainMax = Math.max.apply(Math, _toConsumableArray$b(domain));
  var domainMin = Math.min.apply(Math, _toConsumableArray$b(domain));
  var step = (domainMax - domainMin) / samples;

  var values = range_1(domainMin, domainMax, step);

  return last_1(values) === domainMax ? values : values.concat(domainMax);
} // Returns sorted data. If no sort keys are provided, data is returned unaltered.


function sortData(dataset, sortKey) {
  var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ascending";

  if (!sortKey) {
    return dataset;
  } // Ensures previous VictoryLine api for sortKey prop stays consistent


  if (sortKey === "x" || sortKey === "y") {
    sortKey = "_".concat(sortKey);
  }

  var order = sortOrder === "ascending" ? "asc" : "desc";
  return orderBy_1(dataset, sortKey, order);
} // This method will remove data points that break certain scales. (log scale only)


function cleanData(dataset, props) {
  var smallNumber = 1 / Number.MAX_SAFE_INTEGER;
  var scaleType = {
    x: Scale.getScaleType(props, "x"),
    y: Scale.getScaleType(props, "y")
  };

  if (scaleType.x !== "log" && scaleType.y !== "log") {
    return dataset;
  }

  var rules = function (datum, axis) {
    return scaleType[axis] === "log" ? datum["_".concat(axis)] !== 0 : true;
  };

  var sanitize = function (datum) {
    var _x = rules(datum, "x") ? datum._x : smallNumber;

    var _y = rules(datum, "y") ? datum._y : smallNumber;

    var _y0 = rules(datum, "y0") ? datum._y0 : smallNumber;

    return assign_1({}, datum, {
      _x: _x,
      _y: _y,
      _y0: _y0
    });
  };

  return dataset.map(function (datum) {
    if (rules(datum, "x") && rules(datum, "y") && rules(datum, "y0")) {
      return datum;
    }

    return sanitize(datum);
  });
} // Returns a data accessor given an eventKey prop


function getEventKey(key) {
  // creates a data accessor function
  // given a property key, path, array index, or null for identity.
  if (isFunction_1(key)) {
    return key;
  } else if (key === null || key === undefined) {
    return function () {
      return undefined;
    };
  } // otherwise, assume it is an array index, property key or path (_.property handles all three)


  return property_1(key);
} // Returns data with an eventKey prop added to each datum


function addEventKeys(props, data) {
  var hasEventKeyAccessor = !!props.eventKey;
  var eventKeyAccessor = getEventKey(props.eventKey);
  return data.map(function (datum, index) {
    if (datum.eventKey !== undefined) {
      return datum;
    } else if (hasEventKeyAccessor) {
      var eventKey = eventKeyAccessor(datum, index);
      return eventKey !== undefined ? assign_1({
        eventKey: eventKey
      }, datum) : datum;
    } else {
      return datum;
    }
  });
} // Exported Functions

/**
 * Returns an object mapping string data to numeric data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Object} an object mapping string data to numeric data
 */


function createStringMap$1(props, axis) {
  var stringsFromAxes = getStringsFromAxes(props, axis);
  var stringsFromCategories = getStringsFromCategories(props, axis);
  var stringsFromData = getStringsFromData(props, axis);

  var allStrings = uniq_1(_toConsumableArray$b(stringsFromAxes).concat(_toConsumableArray$b(stringsFromCategories), _toConsumableArray$b(stringsFromData)));

  return allStrings.length === 0 ? null : allStrings.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
}
/**
 * Reduces the size of a data array, such that it is <= maxPoints.
 * @param {Array} data: an array of data; must be sorted
 * @param {Number} maxPoints: maximum number of data points to return
 * @param {Number} startingIndex: the index of the data[0] *in the entire dataset*; this function
                   assumes `data` param is a subset of larger dataset that has been zoommed
  * @returns {Array} an array of data, a subset of data param
  */


function downsample(data, maxPoints) {
  var startingIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // ensures that the downampling of data while zooming looks good.
  var dataLength = getLength(data);

  if (dataLength > maxPoints) {
    // limit k to powers of 2, e.g. 64, 128, 256
    // so that the same points will be chosen reliably, reducing flicker on zoom
    var k = Math.pow(2, Math.ceil(Math.log2(dataLength / maxPoints)));
    return data.filter( // ensure modulo is always calculated from same reference: i + startingIndex
    function (d, i) {
      return (i + startingIndex) % k === 0;
    });
  }

  return data;
}
/**
 * Returns formatted data. Data accessors are applied, and string values are replaced.
 * @param {Array} dataset: the original domain
 * @param {Object} props: the props object
 * @param {Array} expectedKeys: an array of expected data keys
 * @returns {Array} the formatted data
 */


function formatData(dataset, props, expectedKeys) {
  var isArrayOrIterable = Array.isArray(dataset) || Immutable.isIterable(dataset);

  if (!isArrayOrIterable || getLength(dataset) < 1) {
    return [];
  }

  var defaultKeys = ["x", "y", "y0"];
  expectedKeys = Array.isArray(expectedKeys) ? expectedKeys : defaultKeys;

  var createAccessor = function (name) {
    return Helpers.createAccessor(props[name] !== undefined ? props[name] : name);
  };

  var accessor = expectedKeys.reduce(function (memo, type) {
    memo[type] = createAccessor(type);
    return memo;
  }, {});
  var preformattedData = isEqual_1(expectedKeys, defaultKeys) && props.x === "_x" && props.y === "_y" && props.y0 === "_y0";
  var stringMap;

  if (preformattedData === false) {
    // stringMap is not required if the data is preformatted
    stringMap = {
      x: expectedKeys.indexOf("x") !== -1 ? createStringMap$1(props, "x") : undefined,
      y: expectedKeys.indexOf("y") !== -1 ? createStringMap$1(props, "y") : undefined,
      y0: expectedKeys.indexOf("y0") !== -1 ? createStringMap$1(props, "y") : undefined
    };
  }

  var data = preformattedData ? dataset : dataset.reduce(function (dataArr, datum, index) {
    // eslint-disable-line complexity
    datum = parseDatum(datum);
    var fallbackValues = {
      x: index,
      y: datum
    };
    var processedValues = expectedKeys.reduce(function (memo, type) {
      var processedValue = accessor[type](datum);
      var value = processedValue !== undefined ? processedValue : fallbackValues[type];

      if (value !== undefined) {
        if (typeof value === "string" && stringMap[type]) {
          memo["".concat(type, "Name")] = value;
          memo["_".concat(type)] = stringMap[type][value];
        } else {
          memo["_".concat(type)] = value;
        }
      }

      return memo;
    }, {});

    var formattedDatum = assign_1({}, processedValues, datum);

    if (!isEmpty_1(formattedDatum)) {
      dataArr.push(formattedDatum);
    }

    return dataArr;
  }, []);
  var sortedData = sortData(data, props.sortKey, props.sortOrder);
  var cleanedData = cleanData(sortedData, props);
  return addEventKeys(props, cleanedData);
}
/**
 * Returns generated x and y data based on domain and sample from props
 * @param {Object} props: the props object
 * @returns {Array} an array of data
 */


function generateData(props) {
  var xValues = generateDataArray(props, "x");
  var yValues = generateDataArray(props, "y");
  var values = xValues.map(function (x, i) {
    return {
      x: x,
      y: yValues[i]
    };
  });
  return values;
}
/**
 * Returns an array of categories for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of categories
 */


function getCategories(props, axis) {
  return props.categories && !Array.isArray(props.categories) ? props.categories[axis] : props.categories;
}
/**
 * Returns an array of formatted data
 * @param {Object} props: the props object
 * @returns {Array} an array of data
 */


function getData(props) {
  return props.data ? formatData(props.data, props) : formatData(generateData(props), props);
}
/**
 * Returns an array of strings from axis tickValues for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromAxes(props, axis) {
  var tickValues = props.tickValues,
      tickFormat = props.tickFormat;
  var tickValueArray;

  if (!tickValues || !Array.isArray(tickValues) && !tickValues[axis]) {
    tickValueArray = tickFormat && Array.isArray(tickFormat) ? tickFormat : [];
  } else {
    tickValueArray = tickValues[axis] || tickValues;
  }

  return tickValueArray.filter(function (val) {
    return typeof val === "string";
  });
}
/**
 * Returns an array of strings from categories for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromCategories(props, axis) {
  if (!props.categories) {
    return [];
  }

  var categories = getCategories(props, axis);
  var categoryStrings = categories && categories.filter(function (val) {
    return typeof val === "string";
  });
  return categoryStrings ? Collection.removeUndefined(categoryStrings) : [];
}
/**
 * Returns an array of strings from data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromData(props, axis) {
  var isArrayOrIterable = Array.isArray(props.data) || Immutable.isIterable(props.data);

  if (!isArrayOrIterable) {
    return [];
  }

  var key = props[axis] === undefined ? axis : props[axis];
  var accessor = Helpers.createAccessor(key); // support immutable data

  var data = props.data.reduce(function (memo, d) {
    memo.push(parseDatum(d));
    return memo;
  }, []);
  var sortedData = sortData(data, props.sortKey, props.sortOrder);
  var dataStrings = sortedData.reduce(function (dataArr, datum) {
    datum = parseDatum(datum);
    dataArr.push(accessor(datum));
    return dataArr;
  }, []).filter(function (datum) {
    return typeof datum === "string";
  }); // return a unique set of strings

  return dataStrings.reduce(function (prev, curr) {
    if (curr !== undefined && curr !== null && prev.indexOf(curr) === -1) {
      prev.push(curr);
    }

    return prev;
  }, []);
}
/**
 * Checks whether a given component can be used to calculate data
 * @param {Component} component: a React component instance
 * @returns {Boolean} Returns true if the given component has a role included in the whitelist
 */


function isDataComponent(component) {
  var getRole = function (child) {
    return child && child.type ? child.type.role : "";
  };

  var role = getRole(component);

  if (role === "portal") {
    var children = react.Children.toArray(component.props.children);
    role = children.length ? getRole(children[0]) : "";
  }

  var whitelist = ["area", "bar", "boxplot", "candlestick", "errorbar", "group", "histogram", "line", "pie", "scatter", "stack", "voronoi"];
  return includes_1(whitelist, role);
}

var Data = {
  createStringMap: createStringMap$1,
  downsample: downsample,
  formatData: formatData,
  generateData: generateData,
  getCategories: getCategories,
  getData: getData,
  getStringsFromAxes: getStringsFromAxes,
  getStringsFromCategories: getStringsFromCategories,
  getStringsFromData: getStringsFromData,
  isDataComponent: isDataComponent
};

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == dateTag;
}

var _baseIsDate = baseIsDate;

/* Node.js helper references. */
var nodeIsDate = _nodeUtil && _nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? _baseUnary(nodeIsDate) : _baseIsDate;

var isDate_1 = isDate;

/**
 * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (!index || !eq_1(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

var _baseSortedUniq = baseSortedUniq;

/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array && array.length)
    ? _baseSortedUniq(array)
    : [];
}

var sortedUniq_1 = sortedUniq;

function _toConsumableArray$a(arr) { return _arrayWithoutHoles$a(arr) || _iterableToArray$a(arr) || _nonIterableSpread$a(); }

function _nonIterableSpread$a() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$a(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$a(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function cleanDomain(domain, props, axis) {
  var scaleType = Scale.getScaleType(props, axis);

  if (scaleType !== "log") {
    return domain;
  }

  var rules = function (dom) {
    var almostZero = dom[0] < 0 || dom[1] < 0 ? -1 / Number.MAX_SAFE_INTEGER : 1 / Number.MAX_SAFE_INTEGER;
    var domainOne = dom[0] === 0 ? almostZero : dom[0];
    var domainTwo = dom[1] === 0 ? almostZero : dom[1];
    return [domainOne, domainTwo];
  };

  return rules(domain);
}

function getDomainPadding(props, axis) {
  var formatPadding = function (padding) {
    return Array.isArray(padding) ? {
      left: padding[0],
      right: padding[1]
    } : {
      left: padding,
      right: padding
    };
  };

  return isPlainObject_1(props.domainPadding) ? formatPadding(props.domainPadding[axis]) : formatPadding(props.domainPadding);
}

function getFlatData(dataset, axis) {
  return flatten_1(dataset).map(function (datum) {
    return datum["_".concat(axis)] && datum["_".concat(axis)][1] !== undefined ? datum["_".concat(axis)][1] : datum["_".concat(axis)];
  });
}

function getExtremeFromData(dataset, axis) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "min";

  var getExtreme = function (arr) {
    return type === "max" ? Math.max.apply(Math, _toConsumableArray$a(arr)) : Math.min.apply(Math, _toConsumableArray$a(arr));
  };

  var initialValue = type === "max" ? -Infinity : Infinity;
  var containsDate = false;

  var result = flatten_1(dataset).reduce(function (memo, datum) {
    var current0 = datum["_".concat(axis, "0")] !== undefined ? datum["_".concat(axis, "0")] : datum["_".concat(axis)];
    var current1 = datum["_".concat(axis, "1")] !== undefined ? datum["_".concat(axis, "1")] : datum["_".concat(axis)];
    var current = getExtreme([current0, current1]);
    containsDate = containsDate || current0 instanceof Date || current1 instanceof Date;
    return getExtreme([memo, current]);
  }, initialValue);

  return containsDate ? new Date(result) : result;
} //eslint-disable-next-line max-statements


function padDomain(domain, props, axis) {
  if (!props.domainPadding) {
    return domain;
  }

  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);
  var padding = getDomainPadding(props, axis);

  if (!padding.left && !padding.right) {
    return domain;
  }

  var min = Collection.getMinValue(domain);
  var max = Collection.getMaxValue(domain);
  var currentAxis = Helpers.getCurrentAxis(axis, props.horizontal);
  var range = Helpers.getRange(props, currentAxis);
  var rangeExtent = Math.abs(range[0] - range[1]); // Naive initial padding calculation

  var initialPadding = {
    left: Math.abs(max - min) * padding.left / rangeExtent,
    right: Math.abs(max - min) * padding.right / rangeExtent
  };
  var singleQuadrantDomainPadding = isPlainObject_1(props.singleQuadrantDomainPadding) ? props.singleQuadrantDomainPadding[axis] : props.singleQuadrantDomainPadding;

  var adjust = function (val, type) {
    if (singleQuadrantDomainPadding === false) {
      return val;
    }

    var coerce = type === "min" && min >= 0 && val <= 0 || type === "max" && max <= 0 && val >= 0;
    return coerce ? 0 : val;
  }; // Adjust the domain by the initial padding


  var adjustedDomain = {
    min: adjust(min.valueOf() - initialPadding.left, "min"),
    max: adjust(max.valueOf() + initialPadding.right, "max")
  }; // re-calculate padding, taking the adjusted domain into account

  var finalPadding = {
    left: Math.abs(adjustedDomain.max - adjustedDomain.min) * padding.left / rangeExtent,
    right: Math.abs(adjustedDomain.max - adjustedDomain.min) * padding.right / rangeExtent
  }; // Adjust the domain by the final padding

  var paddedDomain = {
    min: adjust(min.valueOf() - finalPadding.left, "min"),
    max: adjust(max.valueOf() + finalPadding.right, "max")
  }; // default to minDomain / maxDomain if they exist

  var finalDomain = {
    min: minDomain !== undefined ? minDomain : paddedDomain.min,
    max: maxDomain !== undefined ? maxDomain : paddedDomain.max
  };
  return min instanceof Date || max instanceof Date ? getDomainFromMinMax(new Date(finalDomain.min), new Date(finalDomain.max)) : getDomainFromMinMax(finalDomain.min, finalDomain.max);
} // Public Methods

/**
 * Returns a getDomain function
 * @param {Function} getDomainFromDataFunction: a function that takes props and axis and
 * returns a domain based on data
 * @param {Function} formatDomainFunction: a function that takes domain, props, and axis and
 * returns a formatted domain
 * @returns {Function} a function that takes props and axis and returns a formatted domain
 */


function createDomainFunction(getDomainFromDataFunction, formatDomainFunction) {
  getDomainFromDataFunction = isFunction_1(getDomainFromDataFunction) ? getDomainFromDataFunction : getDomainFromData$1;
  formatDomainFunction = isFunction_1(formatDomainFunction) ? formatDomainFunction : formatDomain;
  return function (props, axis) {
    var propsDomain = getDomainFromProps(props, axis);

    if (propsDomain) {
      return formatDomainFunction(propsDomain, props, axis);
    }

    var categories = Data.getCategories(props, axis);
    var domain = categories ? getDomainFromCategories(props, axis, categories) : getDomainFromDataFunction(props, axis);
    return domain ? formatDomainFunction(domain, props, axis) : undefined;
  };
}
/**
 * Returns a formatted domain.
 * @param {Array} domain: a domain in the form of a two element array
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} a domain in the form of a two element array
 */


function formatDomain(domain, props, axis) {
  return cleanDomain(padDomain(domain, props, axis), props, axis);
}
/**
 * Returns a domain for a given axis based on props, category, or data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} the domain for the given axis
 */


function getDomain$2(props, axis) {
  return createDomainFunction()(props, axis);
}
/**
 * Returns a domain based on categories if they exist
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @param {Array} categories: an array of categories corresponding to a given axis
 * @returns {Array|undefined} returns a domain from categories or undefined
 */


function getDomainFromCategories(props, axis, categories) {
  categories = categories || Data.getCategories(props, axis);
  var polar = props.polar,
      _props$startAngle = props.startAngle,
      startAngle = _props$startAngle === void 0 ? 0 : _props$startAngle,
      _props$endAngle = props.endAngle,
      endAngle = _props$endAngle === void 0 ? 360 : _props$endAngle;

  if (!categories) {
    return undefined;
  }

  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);
  var stringArray = Collection.containsStrings(categories) ? Data.getStringsFromCategories(props, axis) : [];
  var stringMap = stringArray.length === 0 ? null : stringArray.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  var categoryValues = stringMap ? categories.map(function (value) {
    return stringMap[value];
  }) : categories;
  var min = minDomain !== undefined ? minDomain : Collection.getMinValue(categoryValues);
  var max = maxDomain !== undefined ? maxDomain : Collection.getMaxValue(categoryValues);
  var categoryDomain = getDomainFromMinMax(min, max);
  return polar && axis === "x" && Math.abs(startAngle - endAngle) === 360 ? getSymmetricDomain(categoryDomain, categoryValues) : categoryDomain;
}
/**
 * Returns a domain from a dataset for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @param {Array} dataset: an array of data
 * @returns {Array} the domain based on data
 */


function getDomainFromData$1(props, axis, dataset) {
  dataset = dataset || Data.getData(props);
  var polar = props.polar,
      _props$startAngle2 = props.startAngle,
      startAngle = _props$startAngle2 === void 0 ? 0 : _props$startAngle2,
      _props$endAngle2 = props.endAngle,
      endAngle = _props$endAngle2 === void 0 ? 360 : _props$endAngle2;
  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);

  if (dataset.length < 1) {
    return minDomain !== undefined && maxDomain !== undefined ? getDomainFromMinMax(minDomain, maxDomain) : undefined;
  }

  var min = minDomain !== undefined ? minDomain : getExtremeFromData(dataset, axis, "min");
  var max = maxDomain !== undefined ? maxDomain : getExtremeFromData(dataset, axis, "max");
  var domain = getDomainFromMinMax(min, max);
  return polar && axis === "x" && Math.abs(startAngle - endAngle) === 360 ? getSymmetricDomain(domain, getFlatData(dataset, axis)) : domain;
}
/**
 * Returns a domain in the form of a two element array given a min and max value.
 * @param {Number|Date} min: the props object
 * @param {Number|Date} max: the current axis
 * @returns {Array} the minDomain based on props
 */


function getDomainFromMinMax(min, max) {
  var getSinglePointDomain = function (val) {
    // d3-scale does not properly resolve very small differences.
    // eslint-disable-next-line no-magic-numbers
    var verySmallNumber = val === 0 ? 2 * Math.pow(10, -10) : Math.pow(10, -10);
    var verySmallDate = 1;
    var minVal = val instanceof Date ? new Date(+val - verySmallDate) : +val - verySmallNumber;
    var maxVal = val instanceof Date ? new Date(+val + verySmallDate) : +val + verySmallNumber;
    return val === 0 ? [0, maxVal] : [minVal, maxVal];
  };

  return +min === +max ? getSinglePointDomain(max) : [min, max];
}
/**
 * Returns a the domain for a given axis if domain is given in props
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array|undefined} the domain based on props
 */


function getDomainFromProps(props, axis) {
  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);

  if (isPlainObject_1(props.domain) && props.domain[axis]) {
    return props.domain[axis];
  } else if (Array.isArray(props.domain)) {
    return props.domain;
  } else if (minDomain !== undefined && maxDomain !== undefined) {
    return getDomainFromMinMax(minDomain, maxDomain);
  }

  return undefined;
}
/**
 * Returns a domain for a given axis. This method forces the domain to include
 * zero unless the domain is explicitly specified in props.
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} the domain for the given axis
 */


function getDomainWithZero(props, axis) {
  var propsDomain = getDomainFromProps(props, axis);

  if (propsDomain) {
    return propsDomain;
  }

  var dataset = Data.getData(props);
  var y0Min = dataset.reduce(function (min, datum) {
    return datum._y0 < min ? datum._y0 : min;
  }, Infinity);

  var ensureZero = function (domain) {
    if (axis === "x") {
      return domain;
    }

    var defaultMin = y0Min !== Infinity ? y0Min : 0;
    var maxDomainProp = getMaxFromProps(props, axis);
    var minDomainProp = getMinFromProps(props, axis);
    var max = maxDomainProp !== undefined ? maxDomainProp : Collection.getMaxValue(domain, defaultMin);
    var min = minDomainProp !== undefined ? minDomainProp : Collection.getMinValue(domain, defaultMin);
    return getDomainFromMinMax(min, max);
  };

  var getDomainFunction = function () {
    return getDomainFromData$1(props, axis, dataset);
  };

  var formatDomainFunction = function (domain) {
    return formatDomain(ensureZero(domain), props, axis);
  };

  return createDomainFunction(getDomainFunction, formatDomainFunction)(props, axis);
}
/**
 * Returns the maxDomain from props if it exists
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Number|Date|undefined} the maxDomain based on props
 */


function getMaxFromProps(props, axis) {
  if (isPlainObject_1(props.maxDomain) && props.maxDomain[axis] !== undefined) {
    return props.maxDomain[axis];
  }

  return typeof props.maxDomain === "number" || isDate_1(props.maxDomain) ? props.maxDomain : undefined;
}
/**
 * Returns the minDomain from props if it exists
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Number|Date|undefined} the minDomain based on props
 */


function getMinFromProps(props, axis) {
  if (isPlainObject_1(props.minDomain) && props.minDomain[axis] !== undefined) {
    return props.minDomain[axis];
  }

  return typeof props.minDomain === "number" || isDate_1(props.minDomain) ? props.minDomain : undefined;
}
/**
 * Returns a symmetrically padded domain for polar charts
 * @param {Array} domain: the original domain
 * @param {Array} values: a flat array of values corresponding to either tickValues, or data values
 * for a given dimension i.e. only x values.
 * @returns {Array} the symmetric domain
 */


function getSymmetricDomain(domain, values) {
  var processedData = sortedUniq_1(values.sort(function (a, b) {
    return a - b;
  }));

  var step = processedData[1] - processedData[0];
  return [domain[0], domain[1] + step];
}
/**
 * Checks whether a given component can be used to calculate domain
 * @param {Component} component: a React component instance
 * @returns {Boolean} Returns true if the given component has a role included in the whitelist
 */


function isDomainComponent(component) {
  var getRole = function (child) {
    return child && child.type ? child.type.role : "";
  };

  var role = getRole(component);

  if (role === "portal") {
    var children = react.Children.toArray(component.props.children);
    role = children.length ? getRole(children[0]) : "";
  }

  var whitelist = ["area", "axis", "bar", "boxplot", "candlestick", "errorbar", "group", "histogram", "line", "pie", "scatter", "stack", "voronoi"];
  return includes_1(whitelist, role);
}

var Domain = {
  createDomainFunction: createDomainFunction,
  formatDomain: formatDomain,
  getDomain: getDomain$2,
  getDomainFromCategories: getDomainFromCategories,
  getDomainFromData: getDomainFromData$1,
  getDomainFromMinMax: getDomainFromMinMax,
  getDomainFromProps: getDomainFromProps,
  getDomainWithZero: getDomainWithZero,
  getMaxFromProps: getMaxFromProps,
  getMinFromProps: getMinFromProps,
  getSymmetricDomain: getSymmetricDomain,
  isDomainComponent: isDomainComponent
};

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, _baseIteratee(iteratee)) : [];
}

var uniqBy_1 = uniqBy;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

var _arrayAggregator = arrayAggregator;

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

var _baseAggregator = baseAggregator;

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, _baseIteratee(iteratee), accumulator);
  };
}

var _createAggregator = createAggregator;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = _createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    _baseAssignValue(result, key, [value]);
  }
});

var groupBy_1 = groupBy;

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  _baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

var _baseSome = baseSome;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray_1(collection) ? _arraySome : _baseSome;
  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, _baseIteratee(predicate));
}

var some_1 = some;

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  _baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

var _baseInverter = baseInverter;

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return _baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

var _createInverter = createInverter;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = _createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant_1(identity_1));

var invert_1 = invert;

function _toConsumableArray$9(arr) { return _arrayWithoutHoles$9(arr) || _iterableToArray$9(arr) || _nonIterableSpread$9(); }

function _nonIterableSpread$9() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$9(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$9(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
/**
 * Returns the axis (x or y) of a particular axis component
 * @param {Object} props: the props object.
 * @param {Boolean} horizontal: true for horizontal charts
 * @returns {String} the dimension appropriate for the axis given its props
 */

function getAxis(props) {
  var dependentAxis = props.dependentAxis;
  return dependentAxis ? "y" : "x";
}
/**
 * Returns all axis components that pass a given predicate
 * @param {Array} childComponents: an array of children
 * @param {Function} predicate: a predicate function that will be called with each
 * @returns {Array} all axis components that pass the given predicate or []
 */


function findAxisComponents(childComponents, predicate) {
  predicate = predicate || identity_1;

  var findAxes = function (children) {
    return children.reduce(function (memo, child) {
      if (child.type && child.type.role === "axis" && predicate(child)) {
        return memo.concat(child);
      } else if (child.props && child.props.children) {
        return memo.concat(findAxes(react.Children.toArray(child.props.children)));
      }

      return memo;
    }, []);
  };

  return findAxes(childComponents);
}
/**
 * Returns a single axis component of the desired axis type (x or y)
 * @param {Array} childComponents: an array of children
 * @param {String} axis: desired axis either "x" or "y".
 * @returns {ReactComponent} an axis component of the desired axis or undefined
 */


function getAxisComponent(childComponents, axis) {
  var matchesAxis = function (component) {
    var type = component.type.getAxis(component.props);
    return type === axis;
  };

  return findAxisComponents(childComponents, matchesAxis)[0];
}
/**
 * Returns all axis components of the desired axis type (x or y) along with any
 * parent components excluding VictoryChart
 * @param {Array} childComponents: an optional array of children.
 * @param {String} type: desired axis either "dependent" or "independent".
 * @returns {ReactComponent} an axis component of the desired type or undefined
 */


function getAxisComponentsWithParent(childComponents, type) {
  var matchesType = function (child) {
    return type === "dependent" ? child.props.dependentAxis : !child.props.dependentAxis;
  };

  var findComponents = function (children) {
    return children.reduce(function (memo, child) {
      if (child.type && child.type.role === "axis" && matchesType(child)) {
        return memo.concat(child);
      } else if (child.props && child.props.children) {
        var childAxis = findComponents(react.Children.toArray(child.props.children));
        return childAxis.length > 0 ? memo.concat(child) : memo;
      }

      return memo;
    }, []);
  };

  return findComponents(childComponents);
}

function getOrigin(domain) {
  var getSingleOrigin = function (d) {
    var domainMin = Math.min.apply(Math, _toConsumableArray$9(d));
    var domainMax = Math.max.apply(Math, _toConsumableArray$9(d));
    return domainMax < 0 ? domainMax : Math.max(0, domainMin);
  };

  return {
    x: Collection.containsDates(domain.x) ? new Date(Math.min.apply(Math, _toConsumableArray$9(domain.x))) : getSingleOrigin(domain.x),
    y: Collection.containsDates(domain.y) ? new Date(Math.min.apply(Math, _toConsumableArray$9(domain.y))) : getSingleOrigin(domain.y)
  };
}

function getOriginSign(origin, domain) {
  var getSign = function () {
    return origin <= 0 && Math.max.apply(Math, _toConsumableArray$9(domain)) <= 0 ? "negative" : "positive";
  };

  return Collection.containsDates(domain) ? "positive" : getSign();
}
/**
 * @param {Object} props: axis component props
 * @returns {Boolean} true when the axis is vertical
 */


function isVertical(props) {
  var orientation = props.orientation || (props.dependentAxis ? "left" : "bottom");
  var vertical = {
    top: false,
    bottom: false,
    left: true,
    right: true
  };
  return vertical[orientation];
}
/**
 * @param {Object} props: axis component props
 * @returns {Boolean} true when tickValues contain strings
 */


function stringTicks(props) {
  return props.tickValues !== undefined && Collection.containsStrings(props.tickValues);
}

function getDefaultTickFormat(props) {
  var tickValues = props.tickValues;
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];
  var fallbackFormat = tickValues && !Collection.containsDates(tickValues) ? function (x) {
    return x;
  } : undefined;

  if (!stringMap) {
    return stringTicks(props) ? function (x, index) {
      return tickValues[index];
    } : fallbackFormat;
  } else {
    var invertedStringMap = stringMap && invert_1(stringMap);

    var tickValueArray = orderBy_1(values_1(stringMap), function (n) {
      return n;
    });

    var dataNames = tickValueArray.map(function (tick) {
      return invertedStringMap[tick];
    }); // string ticks should have one tick of padding at the beginning

    var dataTicks = [""].concat(_toConsumableArray$9(dataNames), [""]);
    return function (x) {
      return dataTicks[x];
    };
  }
}

function getTickFormat(props, scale) {
  var tickFormat = props.tickFormat;
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];

  if (!tickFormat) {
    var defaultTickFormat = getDefaultTickFormat(props);
    var scaleTickFormat = scale.tickFormat && isFunction_1(scale.tickFormat) ? scale.tickFormat() : function (x) {
      return x;
    };
    return defaultTickFormat || scaleTickFormat;
  } else if (tickFormat && Array.isArray(tickFormat)) {
    return function (x, index) {
      return tickFormat[index];
    };
  } else if (tickFormat && isFunction_1(tickFormat)) {
    var applyStringTicks = function (tick, index, ticks) {
      var invertedStringMap = invert_1(stringMap);

      var stringTickArray = ticks.map(function (t) {
        return invertedStringMap[t];
      });
      return props.tickFormat(invertedStringMap[tick], index, stringTickArray);
    };

    return stringMap ? applyStringTicks : tickFormat;
  } else {
    return function (x) {
      return x;
    };
  }
}

function getStringTicks(props) {
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];
  var categories = Array.isArray(props.categories) ? props.categories : props.categories && props.categories[axis];
  var ticksFromCategories = categories && Collection.containsOnlyStrings(categories) ? categories.map(function (tick) {
    return stringMap[tick];
  }) : undefined;

  var ticksFromStringMap = stringMap && values_1(stringMap);

  return ticksFromCategories && ticksFromCategories.length !== 0 ? ticksFromCategories : ticksFromStringMap;
}

function getTickArray(props) {
  var tickValues = props.tickValues,
      tickFormat = props.tickFormat;
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];

  var getTicksFromFormat = function () {
    if (!tickFormat || !Array.isArray(tickFormat)) {
      return undefined;
    }

    return Collection.containsStrings(tickFormat) ? tickFormat.map(function (t, i) {
      return i;
    }) : tickFormat;
  };

  var ticks = tickValues;

  if (stringMap) {
    ticks = getStringTicks(props);
  }

  if (tickValues && Collection.containsStrings(tickValues)) {
    ticks = stringMap ? tickValues.map(function (tick) {
      return stringMap[tick];
    }) : range_1(1, tickValues.length + 1);
  }

  var tickArray = ticks ? uniq_1(ticks) : getTicksFromFormat();

  var filterArray = function (arr) {
    var domain = props.domain && props.domain[axis] || props.domain;
    return Array.isArray(domain) ? arr.filter(function (t) {
      return t >= Math.min.apply(Math, _toConsumableArray$9(domain)) && t <= Math.max.apply(Math, _toConsumableArray$9(domain));
    }) : arr;
  };

  return Array.isArray(tickArray) && tickArray.length ? filterArray(tickArray) : undefined;
}

function downsampleTicks(ticks, tickCount) {
  if (!tickCount || !Array.isArray(ticks) || ticks.length <= tickCount) {
    return ticks;
  }

  var k = Math.floor(ticks.length / tickCount);
  return ticks.filter(function (d, i) {
    return i % k === 0;
  });
}

function getTicks(props, scale, filterZero) {
  var tickCount = props.tickCount;
  var tickValues = getTickArray(props);

  if (tickValues) {
    return downsampleTicks(tickValues, tickCount);
  } else if (scale.ticks && isFunction_1(scale.ticks)) {
    // eslint-disable-next-line no-magic-numbers
    var defaultTickCount = tickCount || 5;
    var scaleTicks = scale.ticks(defaultTickCount);
    var tickArray = Array.isArray(scaleTicks) && scaleTicks.length ? scaleTicks : scale.domain();
    var ticks = downsampleTicks(tickArray, tickCount);

    if (filterZero) {
      var filteredTicks = includes_1(ticks, 0) ? without_1(ticks, 0) : ticks;
      return filteredTicks.length ? filteredTicks : ticks;
    }

    return ticks;
  }

  return scale.domain();
}
/**
 * Returns a domain based tickValues
 * @param {Object} props: the props object
 * @param {String} axis: either x or y
 * @returns {Array} returns a domain from tickValues
 */
//eslint-disable-next-line max-statements


function getDomainFromData(props, axis) {
  var polar = props.polar,
      _props$startAngle = props.startAngle,
      startAngle = _props$startAngle === void 0 ? 0 : _props$startAngle,
      _props$endAngle = props.endAngle,
      endAngle = _props$endAngle === void 0 ? 360 : _props$endAngle;
  var tickValues = getTickArray(props);

  if (!Array.isArray(tickValues)) {
    return undefined;
  }

  var minDomain = Domain.getMinFromProps(props, axis);
  var maxDomain = Domain.getMaxFromProps(props, axis);
  var tickStrings = stringTicks(props);
  var ticks = tickValues.map(function (value) {
    return +value;
  });
  var defaultMin = tickStrings ? 1 : Collection.getMinValue(ticks);
  var defaultMax = tickStrings ? tickValues.length : Collection.getMaxValue(ticks);
  var min = minDomain !== undefined ? minDomain : defaultMin;
  var max = maxDomain !== undefined ? maxDomain : defaultMax;
  var initialDomain = Domain.getDomainFromMinMax(min, max);
  var domain = polar && axis === "x" && Math.abs(startAngle - endAngle) === 360 ? Domain.getSymmetricDomain(initialDomain, ticks) : initialDomain;

  if (isVertical(props) && !polar) {
    domain.reverse();
  }

  return domain;
} // exposed for use by VictoryChart


function getDomain$1(props, axis) {
  var inherentAxis = getAxis(props);

  if (axis && axis !== inherentAxis) {
    return undefined;
  }

  return Domain.createDomainFunction(getDomainFromData)(props, inherentAxis);
}

function getAxisValue(props, axis) {
  if (!props.axisValue) {
    return undefined;
  }

  var scaleAxis = axis === "x" ? "y" : "x";
  var scale = isObject_1(props.scale) && isFunction_1(props.scale[scaleAxis]) ? props.scale[scaleAxis] : undefined;

  if (!scale) {
    return undefined;
  }

  var stringMapAxis = axis === "x" ? "y" : "x";
  var stringMap = isObject_1(props.stringMap) && props.stringMap[stringMapAxis];
  var axisValue = stringMap && typeof props.axisValue === "string" ? stringMap[props.axisValue] : props.axisValue;
  return scale(axisValue);
}

function modifyProps(props, fallbackProps) {
  if (!isObject_1(props.theme)) {
    return Helpers.modifyProps(props, fallbackProps, "axis");
  }

  var role = "axis";

  if (props.dependentAxis && props.theme.dependentAxis) {
    role = "dependentAxis";
  } else if (!props.dependentAxis && props.theme.independentAxis) {
    role = "independentAxis";
  }

  if (role === "axis") {
    return Helpers.modifyProps(props, fallbackProps, "axis");
  }

  var axisTheme = defaults_1({}, props.theme[role], props.theme.axis);

  var theme = assign_1({}, props.theme, {
    axis: axisTheme
  });

  return Helpers.modifyProps(assign_1({}, props, {
    theme: theme
  }), fallbackProps, "axis");
}

var Axis = {
  getTicks: getTicks,
  getTickFormat: getTickFormat,
  getAxis: getAxis,
  getAxisComponent: getAxisComponent,
  getAxisComponentsWithParent: getAxisComponentsWithParent,
  getAxisValue: getAxisValue,
  findAxisComponents: findAxisComponents,
  getOrigin: getOrigin,
  getOriginSign: getOriginSign,
  getDomain: getDomain$1,
  isVertical: isVertical,
  modifyProps: modifyProps,
  stringTicks: stringTicks
};

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$8(arr) { return _arrayWithoutHoles$8(arr) || _iterableToArray$8(arr) || _nonIterableSpread$8(); }

function _nonIterableSpread$8() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$8(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$8(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
var Wrapper = {
  getData: function (props, childComponents) {
    if (props.data) {
      return Data.getData(props);
    }

    childComponents = childComponents || react.Children.toArray(props.children);
    return this.getDataFromChildren(childComponents);
  },
  getDefaultDomainPadding: function (props, axis, childComponents) {
    if (props.polar || axis !== "x") {
      return undefined;
    }

    var groupComponent = childComponents.filter(function (child) {
      return child.type && child.type.role && child.type.role === "group";
    });

    if (groupComponent.length < 1) {
      return undefined;
    }

    var _groupComponent$0$pro = groupComponent[0].props,
        offset = _groupComponent$0$pro.offset,
        children = _groupComponent$0$pro.children;
    return {
      x: offset * children.length / 2
    };
  },
  getDomain: function (props, axis, childComponents) {
    childComponents = childComponents || react.Children.toArray(props.children);
    var propsDomain = Domain.getDomainFromProps(props, axis);
    var domainPadding = this.getDefaultDomainPadding(props, axis, childComponents);
    var domain;

    if (propsDomain) {
      domain = propsDomain;
    } else {
      var minDomain = Domain.getMinFromProps(props, axis);
      var maxDomain = Domain.getMaxFromProps(props, axis);
      var dataset = (props.data || props.y) && Data.getData(props);
      var dataDomain = dataset ? Domain.getDomainFromData(props, axis, dataset) : [];
      var childDomain = this.getDomainFromChildren(props, axis, childComponents);
      var min = minDomain || Collection.getMinValue(_toConsumableArray$8(dataDomain).concat(_toConsumableArray$8(childDomain)));
      var max = maxDomain || Collection.getMaxValue(_toConsumableArray$8(dataDomain).concat(_toConsumableArray$8(childDomain)));
      domain = Domain.getDomainFromMinMax(min, max);
    }

    return Domain.formatDomain(domain, assign_1({
      domainPadding: domainPadding
    }, props), axis);
  },
  getScale: function (props, axis, childComponents) {
    if (props.data) {
      return Scale.getBaseScale(props, axis);
    }

    var children = childComponents ? childComponents.slice(0) : react.Children.toArray(props.children);

    var iteratee = function (child) {
      var sharedProps = assign_1({}, child.props, {
        horizontal: props.horizontal
      });

      return Scale.getScaleType(sharedProps, axis);
    };

    var childScale = uniq_1(Helpers.reduceChildren(children, iteratee, props)); // default to linear scale if more than one uniq scale type is given by children


    return childScale.length > 1 ? Scale.getScaleFromName("linear") : Scale.getScaleFromName(childScale[0]);
  },
  setAnimationState: function (props, nextProps) {
    if (!props.animate) {
      return;
    }

    if (props.animate.parentState) {
      var nodesWillExit = props.animate.parentState.nodesWillExit;
      var oldProps = nodesWillExit ? props : null;
      this.setState(defaults_1({
        oldProps: oldProps,
        nextProps: nextProps
      }, props.animate.parentState));
    } else {
      var oldChildren = react.Children.toArray(props.children);
      var nextChildren = react.Children.toArray(nextProps.children);

      var isContinuous = function (child) {
        var check = function (c) {
          return c.type && c.type.continuous;
        };

        return Array.isArray(child) ? some_1(child, check) : check(child);
      };

      var continuous = !props.polar && some_1(oldChildren, function (child) {
        return isContinuous(child) || child.props.children && isContinuous(child.props.children);
      });

      var _Transitions$getIniti = Transitions.getInitialTransitionState(oldChildren, nextChildren),
          _nodesWillExit = _Transitions$getIniti.nodesWillExit,
          nodesWillEnter = _Transitions$getIniti.nodesWillEnter,
          childrenTransitions = _Transitions$getIniti.childrenTransitions,
          nodesShouldEnter = _Transitions$getIniti.nodesShouldEnter;

      this.setState({
        nodesWillExit: _nodesWillExit,
        nodesWillEnter: nodesWillEnter,
        nodesShouldEnter: nodesShouldEnter,
        childrenTransitions: Collection.isArrayOfArrays(childrenTransitions) ? childrenTransitions[0] : childrenTransitions,
        oldProps: _nodesWillExit ? props : null,
        nextProps: nextProps,
        continuous: continuous
      });
    }
  },
  getAllEvents: function (props) {
    var components = ["groupComponent", "containerComponent", "labelComponent"];
    this.componentEvents = Events.getComponentEvents(props, components);
    var events = props.events;

    if (Array.isArray(this.componentEvents)) {
      var _componentEvents;

      events = Array.isArray(props.events) ? (_componentEvents = this.componentEvents).concat.apply(_componentEvents, _toConsumableArray$8(props.events)) : this.componentEvents;
    }

    return events || [];
  },
  getAnimationProps: function (props, child, index) {
    var _this = this;

    if (!props.animate) {
      return child.props.animate;
    }

    var getFilteredState = function () {
      var childrenTransitions = _this.state && _this.state.childrenTransitions;
      childrenTransitions = Collection.isArrayOfArrays(childrenTransitions) ? childrenTransitions[index] : childrenTransitions;
      return defaults_1({
        childrenTransitions: childrenTransitions
      }, _this.state);
    };

    var getTransitions = props.animate && props.animate.getTransitions;
    var state = getFilteredState();
    var parentState = props.animate && props.animate.parentState || state;

    if (!getTransitions) {
      var getTransitionProps = Transitions.getTransitionPropsFactory(props, state, function (newState) {
        return _this.setState(newState);
      });

      getTransitions = function (childComponent) {
        return getTransitionProps(childComponent, index);
      };
    }

    return defaults_1({
      getTransitions: getTransitions,
      parentState: parentState
    }, props.animate, child.props.animate);
  },
  getDomainFromChildren: function (props, axis, childComponents) {
    // eslint-disable-line max-statements, complexity, max-len
    var children = childComponents ? childComponents.slice(0) : react.Children.toArray(props.children);
    var parentData = props.data ? Data.getData(props, axis) : undefined;
    var polar = props.polar,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        categories = props.categories,
        minDomain = props.minDomain,
        maxDomain = props.maxDomain,
        horizontal = props.horizontal;
    var baseParentProps = {
      horizontal: horizontal,
      polar: polar,
      startAngle: startAngle,
      endAngle: endAngle,
      minDomain: minDomain,
      maxDomain: maxDomain,
      categories: categories
    };
    var parentProps = parentData ? assign_1(baseParentProps, {
      data: parentData
    }) : baseParentProps;

    var iteratee = function (child) {
      var sharedProps = assign_1({}, child.props, parentProps);

      if (!Domain.isDomainComponent(child)) {
        return null;
      } else if (child.type && isFunction_1(child.type.getDomain)) {
        return child.props && child.type.getDomain(sharedProps, axis);
      } else {
        return Domain.getDomain(sharedProps, axis);
      }
    };

    var childDomains = Helpers.reduceChildren(children, iteratee, props);
    var min = childDomains.length === 0 ? 0 : Collection.getMinValue(childDomains);
    var max = childDomains.length === 0 ? 1 : Collection.getMaxValue(childDomains);
    return [min, max];
  },
  addBinsToParentPropsIfHistogram: function (_ref) {
    var children = _ref.children,
        props = _ref.props,
        childComponents = _ref.childComponents,
        parentProps = _ref.parentProps;
    var someChildrenAreHistograms = children.some(function (child) {
      return child.type && child.type.role === "histogram";
    });
    var allChildrenAreHistograms = someChildrenAreHistograms && children.length && children.every(function (child) {
      return child.type && child.type.role === "histogram";
    });

    if (someChildrenAreHistograms && !allChildrenAreHistograms) {
      Log.warn("VictoryHistogram only supports being stacked with other VictoryHistogram components. Check to make sure that you are only passing VictoryHistogram components to VictoryStack");
    } // if we are stacking histograms, we need to generate explicit bins
    // or else each histogram may end up having different bins


    if (!allChildrenAreHistograms) {
      return parentProps;
    }

    var childBins = props.bins || childComponents[0].props.bins; // if we have explicit bins then we don't need to calculate them

    if (!Array.isArray(childBins)) {
      var combinedData = children.reduce(function (memo, child) {
        var xAccessor = Helpers.createAccessor(child.props.x || "x");
        return memo.concat(child.props.data.map(function (datum) {
          return {
            x: xAccessor(datum)
          };
        }));
      }, []); // use the same function to generate bins as VictoryHistogram but with
      // the combined data from above, then get explicit bins from that

      var getFormattedHistogramData = children[0].type.getFormattedData;
      childBins = getFormattedHistogramData({
        data: combinedData,
        bins: childBins
      }).reduce(function (memo, _ref2, index) {
        var x0 = _ref2.x0,
            x1 = _ref2.x1;
        return index === 0 ? memo.concat([x0, x1]) : memo.concat(x1);
      }, []);
    }

    return _objectSpread$8({}, parentProps, {
      bins: childBins
    });
  },
  getDataFromChildren: function (props, childComponents) {
    var polar = props.polar,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        categories = props.categories,
        minDomain = props.minDomain,
        maxDomain = props.maxDomain;
    var parentProps = {
      polar: polar,
      startAngle: startAngle,
      endAngle: endAngle,
      categories: categories,
      minDomain: minDomain,
      maxDomain: maxDomain
    };
    var stack = 0;
    var children = childComponents ? childComponents.slice(0) : react.Children.toArray(props.children);
    parentProps = this.addBinsToParentPropsIfHistogram({
      children: children,
      props: props,
      childComponents: childComponents,
      parentProps: parentProps
    });

    var iteratee = function (child, childName, parent) {
      var childProps = assign_1({}, child.props, parentProps);

      var childData;

      if (!Data.isDataComponent(child)) {
        return null;
      } else if (child.type && isFunction_1(child.type.getData)) {
        child = parent ? react.cloneElement(child, parent.props) : child;
        childData = child.type.getData(childProps);
      } else {
        childData = Data.getData(childProps);
      }

      stack += 1;
      return childData.map(function (datum, index) {
        return assign_1({
          _stack: stack,
          _group: index
        }, datum);
      });
    };

    var stacked = children.filter(function (c) {
      return c.type && c.type.role === "stack";
    }).length;

    var combine = function (memo, val) {
      return memo.concat(uniqBy_1(val, "_group"));
    };

    var datasets = Helpers.reduceChildren(children, iteratee, props, [], combine);
    var group = stacked ? "_group" : "_stack";
    return values_1(groupBy_1(datasets, group));
  },
  getColor: function (calculatedProps, child, index) {
    // check for styles first
    var style = calculatedProps.style;
    var colorScale = calculatedProps.colorScale,
        color = calculatedProps.color;

    if (style && style.data && style.data.fill) {
      return style.data.fill;
    }

    colorScale = child.props && child.props.colorScale ? child.props.colorScale : colorScale;
    color = child.props && child.props.color ? child.props.color : color;

    if (!colorScale && !color) {
      return undefined;
    }

    var colors = Array.isArray(colorScale) ? colorScale : Style.getColorScale(colorScale);
    return color || colors[index % colors.length];
  },
  getWidth: function (props) {
    var datasets = props.datasets,
        scale = props.scale,
        horizontal = props.horizontal;
    var range = horizontal ? scale.y.range() : scale.x.range();
    var extent = Math.abs(range[1] - range[0]);
    var seriesLength = Array.isArray(datasets[0]) ? datasets[0].length : 1;
    var bars = datasets.length * seriesLength + 2;
    var barRatio = 0.5;
    return {
      width: Math.round(barRatio * extent / bars)
    };
  },
  getStyle: function (theme, style, role) {
    var defaultStyle = theme && theme[role] && theme[role].style ? theme[role].style : {};
    return Helpers.getStyles(style, defaultStyle);
  },
  getChildStyle: function (child, index, calculatedProps) {
    var style = calculatedProps.style,
        role = calculatedProps.role;
    var childStyle = child.props.style || {};

    if (Array.isArray(childStyle)) {
      return childStyle;
    }

    var childRole = child.type && child.type.role;
    var defaultFill = childRole === "stack" ? undefined : this.getColor(calculatedProps, child, index);
    var defaultColor = childRole === "line" ? {
      fill: "none",
      stroke: defaultFill
    } : {
      fill: defaultFill
    };
    var dataWidth = role === "stack" ? {} : this.getWidth(calculatedProps);

    var dataStyle = defaults_1({}, childStyle.data, assign_1({}, dataWidth, style.data, defaultColor));

    var labelsStyle = defaults_1({}, childStyle.labels, style.labels);

    return {
      parent: style.parent,
      data: dataStyle,
      labels: labelsStyle
    };
  },
  getStringsFromCategories: function (childComponents, axis) {
    var iteratee = function (child) {
      var childProps = child.props || {};

      if (!Domain.isDomainComponent(child) || !childProps.categories) {
        return null;
      } else {
        var categories = childProps.categories && !Array.isArray(childProps.categories) ? childProps.categories[axis] : childProps.props.categories;
        var categoryStrings = categories && categories.filter(function (val) {
          return typeof val === "string";
        });
        return categoryStrings ? Collection.removeUndefined(categoryStrings) : [];
      }
    };

    return Helpers.reduceChildren(childComponents.slice(0), iteratee);
  },
  getStringsFromData: function (childComponents) {
    var iteratee = function (child) {
      var childProps = child.props || {};
      var data;

      if (!Data.isDataComponent(child)) {
        return null;
      } else if (child.type && isFunction_1(child.type.getData)) {
        data = child.type.getData(childProps);
      } else {
        data = Data.getData(childProps);
      }

      return data.map(function (d) {
        return {
          x: d.xName,
          y: d.yName
        };
      });
    };

    var initialMemo = {
      x: [],
      y: []
    };

    var combine = function (memo, datum) {
      var x = Array.isArray(datum) ? datum.map(function (d) {
        return d.x;
      }).filter(Boolean) : datum.x;
      var y = Array.isArray(datum) ? datum.map(function (d) {
        return d.y;
      }).filter(Boolean) : datum.y;
      return {
        x: x !== undefined ? memo.x.concat(x) : memo.x,
        y: y !== undefined ? memo.y.concat(y) : memo.y
      };
    };

    return Helpers.reduceChildren(childComponents.slice(0), iteratee, {}, initialMemo, combine);
  },
  getCategoryAndAxisStringsFromChildren: function (props, axis, childComponents) {
    var categories = isPlainObject_1(props.categories) ? props.categories[axis] : props.categories;
    var axisComponent = Axis.getAxisComponent(childComponents, axis);
    var axisStrings = axisComponent ? Data.getStringsFromAxes(axisComponent.props, axis) : [];
    var categoryStrings = categories || this.getStringsFromCategories(childComponents, axis);
    return uniq_1(flatten_1(_toConsumableArray$8(categoryStrings).concat(_toConsumableArray$8(axisStrings))));
  },
  getStringsFromChildren: function (props, childComponents) {
    childComponents = childComponents || react.Children.toArray(props.children);
    var xStrings = this.getCategoryAndAxisStringsFromChildren(props, "x", childComponents);
    var yStrings = this.getCategoryAndAxisStringsFromChildren(props, "y", childComponents);
    var dataStrings = this.getStringsFromData(childComponents);
    return {
      x: uniq_1(flatten_1(_toConsumableArray$8(xStrings).concat(_toConsumableArray$8(dataStrings.x)))),
      y: uniq_1(flatten_1(_toConsumableArray$8(yStrings).concat(_toConsumableArray$8(dataStrings.y))))
    };
  },
  getCategories: function (props, childComponents, allStrings) {
    var xPropCategories = props.categories && !Array.isArray(props.categories) ? props.categories.x : props.categories;
    var yPropCategories = props.categories && !Array.isArray(props.categories) ? props.categories.y : props.categories;
    var fallbackRequired = !xPropCategories || !yPropCategories;
    var fallbackProps = fallbackRequired ? allStrings || this.getStringsFromChildren(props, childComponents) : {};
    var xCategories = xPropCategories || fallbackProps.x;
    var yCategories = yPropCategories || fallbackProps.y;
    return {
      x: xCategories.length > 0 ? xCategories : undefined,
      y: yCategories.length > 0 ? yCategories : undefined
    };
  }
};

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

var fromPairs_1 = fromPairs;

var stringify_1 = createCommonjsModule(function (module, exports) {
exports = module.exports = stringify;
exports.getSerialize = serializer;

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = [];

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  };

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
    }
    else stack.push(value);

    return replacer == null ? value : replacer.call(this, key, value)
  }
}
});

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray$7(arr) { return _arrayWithoutHoles$7(arr) || _iterableToArray$7(arr) || _nonIterableSpread$7(); }

function _nonIterableSpread$7() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$7(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$7(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$6(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var VictorySharedEvents =
/*#__PURE__*/
function (_React$Component) {
  _inherits$6(VictorySharedEvents, _React$Component);

  function VictorySharedEvents(props) {
    var _this;

    _classCallCheck$6(this, VictorySharedEvents);

    _this = _possibleConstructorReturn$6(this, (VictorySharedEvents.__proto__ || Object.getPrototypeOf(VictorySharedEvents)).call(this, props));
    _this.state = _this.state || {};
    _this.getScopedEvents = Events.getScopedEvents.bind(_assertThisInitialized$6(_this));
    _this.getEventState = Events.getEventState.bind(_assertThisInitialized$6(_this));
    _this.baseProps = _this.getBaseProps(props);
    _this.sharedEventsCache = {};
    _this.globalEvents = {};
    _this.prevGlobalEventKeys = [];
    _this.boundGlobalEvents = {};
    return _this;
  }

  _createClass$6(VictorySharedEvents, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!reactFastCompare(this.props, nextProps)) {
        this.baseProps = this.getBaseProps(nextProps);
        var externalMutations = this.getExternalMutations(nextProps, this.baseProps);
        this.applyExternalMutations(nextProps, externalMutations);
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var globalEventKeys = keys_1(this.globalEvents);

      globalEventKeys.forEach(function (key) {
        return _this2.addGlobalListener(key);
      });
      this.prevGlobalEventKeys = globalEventKeys;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      var globalEventKeys = keys_1(this.globalEvents);

      var removedGlobalEventKeys = difference_1(this.prevGlobalEventKeys, globalEventKeys);

      removedGlobalEventKeys.forEach(function (key) {
        return _this3.removeGlobalListener(key);
      });

      var addedGlobalEventKeys = difference_1(globalEventKeys, this.prevGlobalEventKeys);

      addedGlobalEventKeys.forEach(function (key) {
        return _this3.addGlobalListener(key);
      });
      this.prevGlobalEventKeys = globalEventKeys;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      this.prevGlobalEventKeys.forEach(function (key) {
        return _this4.removeGlobalListener(key);
      });
    }
  }, {
    key: "addGlobalListener",
    value: function addGlobalListener(key) {
      var _this5 = this;

      var boundListener = function (event) {
        var listener = _this5.globalEvents[key];
        return listener && listener(Events.emulateReactEvent(event));
      };

      this.boundGlobalEvents[key] = boundListener;
      window.addEventListener(Events.getGlobalEventNameFromKey(key), boundListener);
    }
  }, {
    key: "removeGlobalListener",
    value: function removeGlobalListener(key) {
      window.removeEventListener(Events.getGlobalEventNameFromKey(key), this.boundGlobalEvents[key]);
    }
  }, {
    key: "getAllEvents",
    value: function getAllEvents(props) {
      var components = ["container", "groupComponent"];
      var componentEvents = Events.getComponentEvents(props, components);

      if (Array.isArray(componentEvents)) {
        return Array.isArray(props.events) ? componentEvents.concat.apply(componentEvents, _toConsumableArray$7(props.events)) : componentEvents;
      }

      return props.events;
    }
  }, {
    key: "applyExternalMutations",
    value: function applyExternalMutations(props, externalMutations) {
      if (!isEmpty_1(externalMutations)) {
        var callbacks = props.externalEventMutations.reduce(function (memo, mutation) {
          memo = isFunction_1(mutation.callback) ? memo.concat(mutation.callback) : memo;
          return memo;
        }, []);
        var compiledCallbacks = callbacks.length ? function () {
          callbacks.forEach(function (c) {
            return c();
          });
        } : undefined;
        this.setState(externalMutations, compiledCallbacks);
      }
    }
  }, {
    key: "getExternalMutations",
    value: function getExternalMutations(props, baseProps) {
      return !isEmpty_1(props.externalEventMutations) ? Events.getExternalMutationsWithChildren(props.externalEventMutations, baseProps, this.state, keys_1(baseProps)) : undefined;
    }
  }, {
    key: "cacheSharedEvents",
    value: function cacheSharedEvents(name, sharedEvents, cacheValues) {
      this.sharedEventsCache[name] = [sharedEvents, cacheValues];
    }
  }, {
    key: "getCachedSharedEvents",
    value: function getCachedSharedEvents(name, cacheValues) {
      var _ref = this.sharedEventsCache[name] || [],
          _ref2 = _slicedToArray(_ref, 2),
          sharedEvents = _ref2[0],
          prevCacheValues = _ref2[1];

      if (sharedEvents && reactFastCompare(cacheValues, prevCacheValues)) {
        return sharedEvents;
      }

      return undefined;
    }
  }, {
    key: "getBaseProps",
    value: function getBaseProps(props) {
      var container = props.container;
      var children = react.Children.toArray(this.props.children);
      var childBaseProps = this.getBasePropsFromChildren(children);
      var parentBaseProps = container ? container.props : {};
      return assign_1({}, childBaseProps, {
        parent: parentBaseProps
      });
    }
  }, {
    key: "getBasePropsFromChildren",
    value: function getBasePropsFromChildren(childComponents) {
      var iteratee = function (child, childName) {
        if (child.type && isFunction_1(child.type.getBaseProps)) {
          var _baseProps = child.props && child.type.getBaseProps(child.props);

          return _baseProps ? [[childName, _baseProps]] : null;
        } else {
          return null;
        }
      };

      var baseProps = Helpers.reduceChildren(childComponents, iteratee);
      return fromPairs_1(baseProps);
    }
  }, {
    key: "getNewChildren",
    value: function getNewChildren(props, baseProps) {
      var _this6 = this;

      var events = props.events,
          eventKey = props.eventKey;

      var alterChildren = function (children, childNames) {
        return children.reduce(function (memo, child, index) {
          if (child.props.children) {
            var newChildren = react.Children.toArray(child.props.children);
            var names = childNames.slice(index, index + newChildren.length);
            var results = react.cloneElement(child, child.props, alterChildren(newChildren, names));
            return memo.concat(results);
          } else if (childNames[index] !== "parent" && child.type && isFunction_1(child.type.getBaseProps)) {
            var name = child.props.name || childNames[index];
            var childEvents = Array.isArray(events) && events.filter(function (event) {
              if (event.target === "parent") {
                return false;
              }

              return Array.isArray(event.childName) ? event.childName.indexOf(name) > -1 : event.childName === name || event.childName === "all";
            });
            var sharedEventsCacheValues = [name, baseProps, childEvents, stringify_1(_this6.state[name])];
            var sharedEvents = _this6.getCachedSharedEvents(name, sharedEventsCacheValues) || {
              events: childEvents,
              // partially apply child name and baseProps,
              getEvents: function (evts, target) {
                return _this6.getScopedEvents(evts, target, name, baseProps);
              },
              // partially apply child name
              getEventState: function (key, target) {
                return _this6.getEventState(key, target, name);
              }
            };

            _this6.cacheSharedEvents(name, sharedEvents, sharedEventsCacheValues);

            return memo.concat(react.cloneElement(child, assign_1({
              key: "events-".concat(name),
              sharedEvents: sharedEvents,
              eventKey: eventKey,
              name: name
            }, child.props)));
          } else {
            return memo.concat(child);
          }
        }, []);
      };

      var childNames = keys_1(baseProps);

      var childComponents = react.Children.toArray(props.children);
      return alterChildren(childComponents, childNames);
    }
  }, {
    key: "getContainer",
    value: function getContainer(props, baseProps, events) {
      var _this7 = this;

      var children = this.getNewChildren(props, baseProps);
      var parents = Array.isArray(events) && events.filter(function (event) {
        return event.target === "parent";
      });
      var sharedEvents = parents.length > 0 ? {
        events: parents,
        // partially apply childName (null) and baseProps,
        getEvents: function (evts, target) {
          return _this7.getScopedEvents(evts, target, null, baseProps);
        },
        getEventState: this.getEventState
      } : null;
      var container = props.container || props.groupComponent;
      var role = container.type && container.type.role;
      var containerProps = container.props || {};
      var boundGetEvents = Events.getEvents.bind(this);
      var parentEvents = sharedEvents && boundGetEvents({
        sharedEvents: sharedEvents
      }, "parent");

      var parentProps = defaults_1({}, this.getEventState("parent", "parent"), containerProps, baseProps.parent, {
        children: children
      });

      var containerEvents = defaults_1({}, Events.getPartialEvents(parentEvents, "parent", parentProps), containerProps.events);

      this.globalEvents = Events.getGlobalEvents(containerEvents);
      var localEvents = Events.omitGlobalEvents(containerEvents);
      return role === "container" ? react.cloneElement(container, assign_1({}, parentProps, {
        events: localEvents
      })) : react.cloneElement(container, localEvents, children);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.getAllEvents(this.props);

      if (events) {
        return this.getContainer(this.props, this.baseProps, events);
      }

      return react.cloneElement(this.props.container, {
        children: this.props.children
      });
    }
  }]);

  return VictorySharedEvents;
}(react.Component);

Object.defineProperty(VictorySharedEvents, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictorySharedEvents"
});
Object.defineProperty(VictorySharedEvents, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "shared-event-wrapper"
});
Object.defineProperty(VictorySharedEvents, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    container: propTypes.node,
    eventKey: propTypes.oneOfType([propTypes.array, propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
    events: propTypes.arrayOf(propTypes.shape({
      childName: propTypes.oneOfType([propTypes.string, propTypes.array]),
      eventHandlers: propTypes.object,
      eventKey: propTypes.oneOfType([propTypes.array, propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
      target: propTypes.string
    })),
    externalEventMutations: propTypes.arrayOf(propTypes.shape({
      callback: propTypes.function,
      childName: propTypes.oneOfType([propTypes.string, propTypes.array]),
      eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
      mutation: propTypes.function,
      target: propTypes.oneOfType([propTypes.string, propTypes.array])
    })),
    groupComponent: propTypes.node
  }
});
Object.defineProperty(VictorySharedEvents, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    groupComponent: react.createElement("g", null)
  }
});
Object.defineProperty(VictorySharedEvents, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: TimerContext
});

function _toConsumableArray$6(arr) { return _arrayWithoutHoles$6(arr) || _iterableToArray$6(arr) || _nonIterableSpread$6(); }

function _nonIterableSpread$6() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$6(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$6(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var orientationSign = {
  top: -1,
  left: -1,
  right: 1,
  bottom: 1
};

var getCurrentAxis = function (props, axis) {
  var orientation = props.orientation,
      horizontal = props.horizontal;

  if (orientation) {
    var dimensions = {
      top: "x",
      bottom: "x",
      left: "y",
      right: "y"
    };
    return dimensions[orientation];
  }

  var otherAxis = axis === "x" ? "y" : "x";
  return horizontal ? otherAxis : axis;
};

var getScale$1 = function (props) {
  var axis = Axis.getAxis(props);
  var currentAxis = getCurrentAxis(props, axis);
  var scale = Scale.getBaseScale(props, axis);
  var propsDomain = props.domain && props.domain[axis];
  var domain = propsDomain || Axis.getDomain(props) || scale.domain();
  scale.range(Helpers.getRange(props, currentAxis));
  scale.domain(domain);
  return scale;
};

var getStyleObject$1 = function (props) {
  var theme = props.theme,
      dependentAxis = props.dependentAxis;
  var generalAxisStyle = theme && theme.axis && theme.axis.style;
  var axisType = dependentAxis ? "dependentAxis" : "independentAxis";
  var specificAxisStyle = theme && theme[axisType] && theme[axisType].style;

  var mergeStyles = function () {
    var styleNamespaces = ["axis", "axisLabel", "grid", "parent", "tickLabels", "ticks"];
    return styleNamespaces.reduce(function (memo, curr) {
      memo[curr] = defaults_1({}, specificAxisStyle[curr], generalAxisStyle[curr]);
      return memo;
    }, {});
  };

  return generalAxisStyle && specificAxisStyle ? mergeStyles() : specificAxisStyle || generalAxisStyle;
};

var getStyles$3 = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "100%",
    width: "100%"
  };
  return {
    parent: defaults_1(style.parent, styleObject.parent, parentStyleProps),
    axis: defaults_1({}, style.axis, styleObject.axis),
    axisLabel: defaults_1({}, style.axisLabel, styleObject.axisLabel),
    grid: defaults_1({}, style.grid, styleObject.grid),
    ticks: defaults_1({}, style.ticks, styleObject.ticks),
    tickLabels: defaults_1({}, style.tickLabels, styleObject.tickLabels)
  };
};

var getTickProps$1 = function (layout, style, datum) {
  var position = layout.position,
      transform = layout.transform;
  return {
    x1: transform.x,
    y1: transform.y,
    x2: transform.x + position.x2,
    y2: transform.y + position.y2,
    style: style,
    datum: datum
  };
}; // eslint-disable-next-line max-params


var getTickLabelProps$1 = function (layout, style, anchors, datum, text) {
  var position = layout.position,
      transform = layout.transform;
  return {
    style: style,
    x: transform.x + position.x,
    y: transform.y + position.y,
    verticalAnchor: anchors.verticalAnchor,
    textAnchor: anchors.textAnchor,
    angle: style.angle,
    text: text,
    datum: datum
  };
};

var getGridProps$1 = function (layout, style, datum) {
  var edge = layout.edge,
      transform = layout.transform;
  return {
    x1: transform.x,
    y1: transform.y,
    x2: edge.x + transform.x,
    y2: edge.y + transform.y,
    style: style,
    datum: datum
  };
};

var getAxisProps$2 = function (modifiedProps, calculatedValues, globalTransform) {
  var style = calculatedValues.style,
      padding = calculatedValues.padding,
      isVertical = calculatedValues.isVertical;
  var width = modifiedProps.width,
      height = modifiedProps.height;
  return {
    style: style.axis,
    x1: isVertical ? globalTransform.x : padding.left + globalTransform.x,
    x2: isVertical ? globalTransform.x : width - padding.right + globalTransform.x,
    y1: isVertical ? padding.top + globalTransform.y : globalTransform.y,
    y2: isVertical ? height - padding.bottom + globalTransform.y : globalTransform.y
  };
};

var getEvaluatedStyles$1 = function (style, props) {
  return {
    tickStyle: Helpers.evaluateStyle(style.ticks, props),
    labelStyle: Helpers.evaluateStyle(style.tickLabels, props),
    gridStyle: Helpers.evaluateStyle(style.grid, props)
  };
};

var getAxisLabelProps$1 = function (props, calculatedValues, globalTransform) {
  var style = calculatedValues.style,
      orientation = calculatedValues.orientation,
      padding = calculatedValues.padding,
      labelPadding = calculatedValues.labelPadding,
      isVertical = calculatedValues.isVertical;
  var sign = orientationSign[orientation];
  var hPadding = padding.left + padding.right;
  var vPadding = padding.top + padding.bottom;
  var verticalAnchor = sign < 0 ? "end" : "start";
  var labelStyle = style.axisLabel;
  var angle = isVertical ? -90 : 0; // eslint-disable-line no-magic-numbers

  var x = isVertical ? globalTransform.x + sign * labelPadding : (props.width - hPadding) / 2 + padding.left + globalTransform.x;
  var y = isVertical ? (props.height - vPadding) / 2 + padding.top + globalTransform.y : sign * labelPadding + globalTransform.y;
  return {
    x: x,
    y: y,
    verticalAnchor: labelStyle.verticalAnchor || verticalAnchor,
    textAnchor: labelStyle.textAnchor || "middle",
    angle: labelStyle.angle === undefined ? angle : labelStyle.angle,
    style: labelStyle,
    text: props.label
  };
};

var getAnchors$1 = function (orientation, isVertical) {
  var anchorOrientation = {
    top: "end",
    left: "end",
    right: "start",
    bottom: "start"
  };
  var anchor = anchorOrientation[orientation];
  return {
    textAnchor: isVertical ? anchor : "middle",
    verticalAnchor: isVertical ? "middle" : anchor
  };
};

var getLabelPadding = function (props, style) {
  var labelStyle = style.axisLabel || {};

  if (labelStyle.padding !== undefined && labelStyle.padding !== null) {
    return labelStyle.padding;
  }

  var isVertical = Axis.isVertical(props); // TODO: magic numbers

  /*eslint-disable no-magic-numbers*/

  var fontSize = labelStyle.fontSize || 14;
  return props.label ? fontSize * (isVertical ? 2.3 : 1.6) : 0;
  /*eslint-enable no-magic-numbers*/
};

var getOffset$1 = function (props, calculatedValues) {
  var style = calculatedValues.style,
      padding = calculatedValues.padding,
      isVertical = calculatedValues.isVertical,
      orientation = calculatedValues.orientation,
      labelPadding = calculatedValues.labelPadding,
      stringTicks = calculatedValues.stringTicks,
      ticks = calculatedValues.ticks,
      scale = calculatedValues.scale,
      axis = calculatedValues.axis;
  var polar = props.polar,
      horizontal = props.horizontal;
  var sharedProps = {
    scale: _defineProperty$8({}, axis, scale),
    polar: polar,
    horizontal: horizontal,
    ticks: ticks,
    stringTicks: stringTicks
  };
  var xPadding = orientation === "right" ? padding.right : padding.left;
  var yPadding = orientation === "top" ? padding.top : padding.bottom;
  var fontSize = style.axisLabel.fontSize || 14; // eslint-disable-line no-magic-numbers

  var offsetX = props.offsetX !== null && props.offsetX !== undefined ? props.offsetX : xPadding;
  var offsetY = props.offsetY !== null && props.offsetY !== undefined ? props.offsetY : yPadding;
  var tickSizes = ticks.map(function (data, index) {
    var tick = stringTicks ? props.tickValues[data - 1] : data;
    var tickStyle = Helpers.evaluateStyle(style.ticks, assign_1({}, sharedProps, {
      tick: tick,
      index: index
    }));
    return tickStyle.size || 0;
  });
  var totalPadding = fontSize + 2 * Math.max.apply(Math, _toConsumableArray$6(tickSizes)) + labelPadding;
  var minimumPadding = 1.2 * fontSize; // eslint-disable-line no-magic-numbers

  var x = isVertical ? totalPadding : minimumPadding;
  var y = isVertical ? minimumPadding : totalPadding;
  return {
    x: offsetX !== null && offsetX !== undefined ? offsetX : x,
    y: offsetY !== null && offsetY !== undefined ? offsetY : y
  };
};

var getTransform = function (props, calculatedValues, offset) {
  //
  var orientation = calculatedValues.orientation,
      axis = calculatedValues.axis;
  var axisValue = Axis.getAxisValue(props, axis);
  return {
    top: {
      x: 0,
      y: axisValue !== undefined ? axisValue : offset.y
    },
    bottom: {
      x: 0,
      y: axisValue !== undefined ? axisValue : props.height - offset.y
    },
    left: {
      x: axisValue !== undefined ? axisValue : offset.x,
      y: 0
    },
    right: {
      x: axisValue !== undefined ? axisValue : props.width - offset.x,
      y: 0
    }
  }[orientation];
};

var getTickPosition = function (style, orientation, isVertical) {
  var tickStyle = style.tickStyle,
      labelStyle = style.labelStyle;
  var size = tickStyle.size || 0;
  var tickPadding = tickStyle.padding || 0;
  var labelPadding = labelStyle.padding || 0;
  var tickSpacing = size + tickPadding + labelPadding;
  var sign = orientationSign[orientation];
  return {
    x: isVertical ? sign * tickSpacing : 0,
    x2: isVertical ? sign * size : 0,
    y: isVertical ? 0 : sign * tickSpacing,
    y2: isVertical ? 0 : sign * size
  };
};

var getTickTransform = function (tick, globalTransform, isVertical) {
  return {
    x: isVertical ? globalTransform.x : tick + globalTransform.x,
    y: isVertical ? tick + globalTransform.y : globalTransform.y
  };
};

var getGridEdge = function (props, calculatedValues) {
  var orientation = calculatedValues.orientation,
      padding = calculatedValues.padding,
      isVertical = calculatedValues.isVertical;
  var sign = -orientationSign[orientation];
  var x = isVertical ? sign * (props.width - (padding.left + padding.right)) : 0;
  var y = isVertical ? 0 : sign * (props.height - (padding.top + padding.bottom));
  return {
    x: x,
    y: y
  };
};

var getGridOffset = function (props, calculatedValues, offset) {
  var padding = calculatedValues.padding,
      orientation = calculatedValues.orientation;
  var xPadding = orientation === "right" ? padding.right : padding.left;
  var yPadding = orientation === "top" ? padding.top : padding.bottom;
  return {
    x: props.crossAxis ? offset.x - xPadding : 0,
    y: props.crossAxis ? offset.y - yPadding : 0
  };
};

var getLayoutProps = function (modifiedProps, calculatedValues) {
  var offset = getOffset$1(modifiedProps, calculatedValues);
  return {
    globalTransform: getTransform(modifiedProps, calculatedValues, offset),
    gridOffset: getGridOffset(modifiedProps, calculatedValues, offset),
    gridEdge: getGridEdge(modifiedProps, calculatedValues)
  };
};

var getOrientation$1 = function (props) {
  if (props.orientation) {
    return props.orientation;
  }

  var defaultOrientations = {
    dependent: props.horizontal ? "bottom" : "left",
    independent: props.horizontal ? "left" : "bottom"
  };
  return props.dependentAxis ? defaultOrientations.dependent : defaultOrientations.independent;
};

var getCalculatedValues$3 = function (props) {
  var defaultStyles = getStyleObject$1(props);
  var style = getStyles$3(props, defaultStyles);
  var padding = Helpers.getPadding(props);
  var isVertical = Axis.isVertical(props);
  var labelPadding = getLabelPadding(props, style);
  var stringTicks = Axis.stringTicks(props) ? props.tickValues : undefined;
  var axis = Axis.getAxis(props);
  var orientation = getOrientation$1(props);
  var scale = getScale$1(props);
  var domain = Axis.getDomain(props);
  var ticks = Axis.getTicks(props, scale, props.crossAxis);
  var tickFormat = Axis.getTickFormat(props, scale);
  var anchors = getAnchors$1(orientation, isVertical);
  return {
    axis: axis,
    style: style,
    padding: padding,
    orientation: orientation,
    isVertical: isVertical,
    labelPadding: labelPadding,
    stringTicks: stringTicks,
    anchors: anchors,
    scale: scale,
    ticks: ticks,
    tickFormat: tickFormat,
    domain: domain
  };
};

var getBaseProps$3 = function (props, fallbackProps) {
  props = Axis.modifyProps(props, fallbackProps);
  var calculatedValues = getCalculatedValues$3(props);
  var axis = calculatedValues.axis,
      style = calculatedValues.style,
      orientation = calculatedValues.orientation,
      isVertical = calculatedValues.isVertical,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      tickFormat = calculatedValues.tickFormat,
      anchors = calculatedValues.anchors,
      domain = calculatedValues.domain,
      stringTicks = calculatedValues.stringTicks,
      name = calculatedValues.name;
  var otherAxis = axis === "x" ? "y" : "x";
  var _props = props,
      width = _props.width,
      height = _props.height,
      standalone = _props.standalone,
      theme = _props.theme,
      polar = _props.polar,
      padding = _props.padding,
      horizontal = _props.horizontal;

  var _getLayoutProps = getLayoutProps(props, calculatedValues),
      globalTransform = _getLayoutProps.globalTransform,
      gridOffset = _getLayoutProps.gridOffset,
      gridEdge = _getLayoutProps.gridEdge;

  var sharedProps = {
    scale: _defineProperty$8({}, axis, scale),
    polar: polar,
    horizontal: horizontal,
    ticks: ticks,
    stringTicks: stringTicks
  };
  var axisProps = getAxisProps$2(props, calculatedValues, globalTransform);
  var axisLabelProps = getAxisLabelProps$1(props, calculatedValues, globalTransform);
  var initialChildProps = {
    parent: assign_1({
      style: style.parent,
      ticks: ticks,
      standalone: standalone,
      theme: theme,
      width: width,
      height: height,
      padding: padding,
      domain: domain,
      name: name
    }, sharedProps)
  };
  var gridProps = {
    dimension: otherAxis,
    range: _defineProperty$8({}, otherAxis, Helpers.getRange(props, otherAxis)),
    scale: props.scale && props.scale[otherAxis] ? _defineProperty$8({}, otherAxis, props.scale[otherAxis]) : undefined
  };
  return ticks.reduce(function (childProps, tickValue, index) {
    var tick = stringTicks ? stringTicks[index] : tickValue;
    var text = tickFormat(tickValue, index, ticks);
    var styles = getEvaluatedStyles$1(style, assign_1({}, sharedProps, {
      tick: tick,
      tickValue: tickValue,
      index: index,
      text: text
    }));
    var tickLayout = {
      position: getTickPosition(styles, orientation, isVertical),
      transform: getTickTransform(scale(tickValue), globalTransform, isVertical)
    };
    var gridLayout = {
      edge: gridEdge,
      transform: {
        x: isVertical ? -gridOffset.x + globalTransform.x : scale(tickValue) + globalTransform.x,
        y: isVertical ? scale(tickValue) + globalTransform.y : gridOffset.y + globalTransform.y
      }
    };
    childProps[index] = {
      axis: assign_1({
        dimension: axis
      }, sharedProps, axisProps),
      axisLabel: assign_1({}, sharedProps, axisLabelProps),
      ticks: assign_1({}, sharedProps, getTickProps$1(tickLayout, styles.tickStyle, tickValue)),
      tickLabels: assign_1({}, sharedProps, getTickLabelProps$1(tickLayout, styles.labelStyle, anchors, tickValue, text)),
      grid: assign_1({}, sharedProps, gridProps, getGridProps$1(gridLayout, styles.gridStyle, tickValue))
    };
    return childProps;
  }, initialChildProps);
};

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$5(arr) { return _arrayWithoutHoles$5(arr) || _iterableToArray$5(arr) || _nonIterableSpread$5(); }

function _nonIterableSpread$5() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$5(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$5(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$5(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var fallbackProps$7 = {
  width: 450,
  height: 300,
  padding: 50
};
var options$1 = {
  components: [{
    name: "axis",
    index: 0
  }, {
    name: "axisLabel",
    index: 0
  }, {
    name: "grid"
  }, {
    name: "parent",
    index: "parent"
  }, {
    name: "ticks"
  }, {
    name: "tickLabels"
  }]
};

var VictoryAxis =
/*#__PURE__*/
function (_React$Component) {
  _inherits$5(VictoryAxis, _React$Component);

  function VictoryAxis() {
    _classCallCheck$5(this, VictoryAxis);

    return _possibleConstructorReturn$5(this, (VictoryAxis.__proto__ || Object.getPrototypeOf(VictoryAxis)).apply(this, arguments));
  }

  _createClass$5(VictoryAxis, [{
    key: "renderLine",
    value: function renderLine(props) {
      var axisComponent = props.axisComponent;
      var axisProps = this.getComponentProps(axisComponent, "axis", 0);
      return react.cloneElement(axisComponent, axisProps);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(props) {
      var axisLabelComponent = props.axisLabelComponent,
          label = props.label;

      if (!label) {
        return null;
      }

      var axisLabelProps = this.getComponentProps(axisLabelComponent, "axisLabel", 0);
      return react.cloneElement(axisLabelComponent, axisLabelProps);
    }
  }, {
    key: "renderGridAndTicks",
    value: function renderGridAndTicks(props) {
      var _this = this;

      var tickComponent = props.tickComponent,
          tickLabelComponent = props.tickLabelComponent,
          gridComponent = props.gridComponent,
          name = props.name;

      var shouldRender = function (componentProps) {
        var _componentProps$style = componentProps.style,
            style = _componentProps$style === void 0 ? {} : _componentProps$style,
            _componentProps$event = componentProps.events,
            events = _componentProps$event === void 0 ? {} : _componentProps$event;
        var visible = style.stroke !== "transparent" && style.stroke !== "none" && style.strokeWidth !== 0;
        return visible || !isEmpty_1(events);
      };

      return this.dataKeys.map(function (key, index) {
        var tickProps = _this.getComponentProps(tickComponent, "ticks", index);

        var BaseTickComponent = react.cloneElement(tickComponent, tickProps);
        var TickComponent = shouldRender(BaseTickComponent.props) ? BaseTickComponent : undefined;

        var gridProps = _this.getComponentProps(gridComponent, "grid", index);

        var BaseGridComponent = react.cloneElement(gridComponent, gridProps);
        var GridComponent = shouldRender(BaseGridComponent.props) ? BaseGridComponent : undefined;

        var tickLabelProps = _this.getComponentProps(tickLabelComponent, "tickLabels", index);

        var TickLabel = react.cloneElement(tickLabelComponent, tickLabelProps);
        var children = [GridComponent, TickComponent, TickLabel].filter(Boolean);
        return react.cloneElement(props.groupComponent, {
          key: "".concat(name, "-tick-group-").concat(key)
        }, children);
      });
    }
  }, {
    key: "fixLabelOverlap",
    value: function fixLabelOverlap(gridAndTicks, props) {
      var isVertical = Axis.isVertical(props);
      var size = isVertical ? props.height : props.width;

      var isVictoryLabel = function (child) {
        return child.type && child.type.role === "label";
      };

      var labels = gridAndTicks.map(function (gridAndTick) {
        return gridAndTick.props.children;
      }).reduce(function (accumulator, childArr) {
        return accumulator.concat(childArr);
      }, []).filter(isVictoryLabel).map(function (child) {
        return child.props;
      });

      var paddingToObject = function (padding) {
        return typeof padding === "object" ? assign_1({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, padding) : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        };
      };

      var labelsSumSize = labels.reduce(function (sum, label) {
        var padding = paddingToObject(label.style.padding);
        var labelSize = TextSize.approximateTextSize(label.text, {
          angle: label.angle,
          fontSize: label.style.fontSize,
          letterSpacing: label.style.letterSpacing,
          fontFamily: label.style.fontFamily
        });
        return sum + (isVertical ? labelSize.height + padding.top + padding.bottom : labelSize.width + padding.right + padding.left);
      }, 0);
      var availiableLabelCount = Math.floor(size * gridAndTicks.length / labelsSumSize);
      var divider = Math.ceil(gridAndTicks.length / availiableLabelCount) || 1;

      var getLabelCoord = function (gridAndTick) {
        return gridAndTick.props.children.filter(isVictoryLabel).reduce(function (prev, child) {
          return (isVertical ? child.props.y : child.props.x) || 0;
        }, 0);
      };

      var sorted = gridAndTicks.sort(function (a, b) {
        return isVertical ? getLabelCoord(b) - getLabelCoord(a) //ordinary axis has top-bottom orientation
        : getLabelCoord(a) - getLabelCoord(b);
      } //ordinary axis has left-right orientation
      );
      return sorted.filter(function (gridAndTick, index) {
        return index % divider === 0;
      });
    } // Overridden in native versions

  }, {
    key: "shouldAnimate",
    value: function shouldAnimate() {
      return !!this.props.animate;
    }
  }, {
    key: "render",
    value: function render() {
      var animationWhitelist = VictoryAxis.animationWhitelist;
      var props = Axis.modifyProps(this.props, fallbackProps$7);

      if (this.shouldAnimate()) {
        return this.animateComponent(props, animationWhitelist);
      }

      var gridAndTicks = this.renderGridAndTicks(props);
      var modifiedGridAndTicks = props.fixLabelOverlap ? this.fixLabelOverlap(gridAndTicks, props) : gridAndTicks;
      var children = [this.renderLine(props), this.renderLabel(props)].concat(_toConsumableArray$5(modifiedGridAndTicks));
      return props.standalone ? this.renderContainer(props.containerComponent, children) : react.cloneElement(props.groupComponent, {}, children);
    }
  }]);

  return VictoryAxis;
}(react.Component);

Object.defineProperty(VictoryAxis, "animationWhitelist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["style", "domain", "range", "tickCount", "tickValues", "offsetX", "offsetY", "padding", "width", "height"]
});
Object.defineProperty(VictoryAxis, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAxis"
});
Object.defineProperty(VictoryAxis, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "axis"
});
Object.defineProperty(VictoryAxis, "defaultTransitions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onExit: {
      duration: 500
    },
    onEnter: {
      duration: 500
    }
  }
});
Object.defineProperty(VictoryAxis, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread$7({}, CommonProps.baseProps, {
    axisComponent: propTypes.element,
    axisLabelComponent: propTypes.element,
    axisValue: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object]),
    categories: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.shape({
      x: propTypes.arrayOf(propTypes.string),
      y: propTypes.arrayOf(propTypes.string)
    })]),
    crossAxis: propTypes.bool,
    dependentAxis: propTypes.bool,
    events: propTypes.arrayOf(propTypes.shape({
      target: propTypes.oneOf(["axis", "axisLabel", "grid", "ticks", "tickLabels"]),
      eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
      eventHandlers: propTypes.object
    })),
    fixLabelOverlap: propTypes.bool,
    gridComponent: propTypes.element,
    groupComponent: propTypes.element,
    invertAxis: propTypes.bool,
    label: propTypes.any,
    offsetX: propTypes.number,
    offsetY: propTypes.number,
    orientation: propTypes.oneOf(["top", "bottom", "left", "right"]),
    origin: propTypes.shape({
      x: propTypes.number,
      y: propTypes.number
    }),
    stringMap: propTypes.object,
    style: propTypes.shape({
      parent: propTypes.object,
      axis: propTypes.object,
      axisLabel: propTypes.object,
      grid: propTypes.object,
      ticks: propTypes.object,
      tickLabels: propTypes.object
    }),
    tickComponent: propTypes.element,
    tickCount: CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.greaterThanZero]),
    tickFormat: propTypes.oneOfType([propTypes.func, CustomPropTypes.homogeneousArray]),
    tickLabelComponent: propTypes.element,
    tickValues: CustomPropTypes.homogeneousArray
  })
});
Object.defineProperty(VictoryAxis, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    axisComponent: react.createElement(LineSegment, null),
    axisLabelComponent: react.createElement(VictoryLabel, null),
    tickLabelComponent: react.createElement(VictoryLabel, null),
    tickComponent: react.createElement(LineSegment, null),
    gridComponent: react.createElement(LineSegment, null),
    standalone: true,
    theme: VictoryTheme.grayscale,
    containerComponent: react.createElement(VictoryContainer, null),
    groupComponent: react.createElement("g", {
      role: "presentation"
    }),
    fixLabelOverlap: false
  }
});
Object.defineProperty(VictoryAxis, "getDomain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Axis.getDomain
});
Object.defineProperty(VictoryAxis, "getAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Axis.getAxis
});
Object.defineProperty(VictoryAxis, "getStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getStyles$3(props, fallbackProps$7.style);
  }
});
Object.defineProperty(VictoryAxis, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getBaseProps$3(props, fallbackProps$7);
  }
});
Object.defineProperty(VictoryAxis, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["axisComponent", "axisLabelComponent", "groupComponent", "containerComponent", "tickComponent", "tickLabelComponent", "gridComponent"]
});
var VictoryAxis$1 = addEvents(VictoryAxis, options$1);

var getPosition$1 = function (r, angle, axis) {
  return axis === "x" ? r * Math.cos(angle) : -r * Math.sin(angle);
};

var getAxisType = function (props) {
  var typicalType = props.dependentAxis ? "radial" : "angular";
  var invertedType = typicalType === "angular" ? "radial" : "angular";
  return props.horizontal ? invertedType : typicalType;
};

var filterTicks = function (ticks, scale) {
  var compareTicks = function (t) {
    return scale(t) % (2 * Math.PI);
  };

  return uniqBy_1(ticks, compareTicks);
};

var getEvaluatedStyles = function (style, props) {
  return {
    tickStyle: Helpers.evaluateStyle(style.ticks, props),
    labelStyle: Helpers.evaluateStyle(style.tickLabels, props),
    gridStyle: Helpers.evaluateStyle(style.grid, props)
  };
};

var getStyleObject = function (props) {
  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      dependentAxis = props.dependentAxis;
  var generalAxisStyle = theme.polarAxis && theme.polarAxis.style || theme.axis && theme.axis.style;
  var polarAxisType = dependentAxis ? "polarDependentAxis" : "polarIndependentAxis";
  var standardAxisType = dependentAxis ? "dependentAxis" : "independentAxis";
  var specificAxisStyle = theme[polarAxisType] && theme[polarAxisType].style || theme[standardAxisType] && theme[standardAxisType].style;

  var mergeStyles = function () {
    var styleNamespaces = ["axis", "axisLabel", "grid", "parent", "tickLabels", "ticks"];
    return styleNamespaces.reduce(function (memo, curr) {
      memo[curr] = defaults_1({}, specificAxisStyle[curr], generalAxisStyle[curr]);
      return memo;
    }, {});
  };

  return generalAxisStyle && specificAxisStyle ? mergeStyles() : specificAxisStyle || generalAxisStyle;
};

var getRadius = function (props) {
  var _Helpers$getPadding = Helpers.getPadding(props),
      left = _Helpers$getPadding.left,
      right = _Helpers$getPadding.right,
      top = _Helpers$getPadding.top,
      bottom = _Helpers$getPadding.bottom;

  var width = props.width,
      height = props.height;
  return Math.min(width - left - right, height - top - bottom) / 2;
};

var getRange = function (props, axis) {
  // Return the range from props if one is given.
  if (props.range && props.range[axis]) {
    return props.range[axis];
  } else if (props.range && Array.isArray(props.range)) {
    return props.range;
  }

  var axisType = getAxisType(props);

  if (axisType === "angular") {
    var startAngle = Helpers.degreesToRadians(props.startAngle);
    var endAngle = Helpers.degreesToRadians(props.endAngle);
    return [startAngle, endAngle];
  }

  var radius = getRadius(props);
  return [props.innerRadius || 0, radius];
}; // exposed for use by VictoryChart (necessary?)


var getScale = function (props) {
  var axis = Axis.getAxis(props);
  var scale = Scale.getBaseScale(props, axis);
  var domain = Axis.getDomain(props, axis) || scale.domain();
  var range = getRange(props, axis);
  scale.range(range);
  scale.domain(domain);
  return scale;
};

var getStyles$2 = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "auto",
    width: "100%"
  };
  return {
    parent: defaults_1(parentStyleProps, style.parent, styleObject.parent),
    axis: defaults_1({}, style.axis, styleObject.axis),
    axisLabel: defaults_1({}, style.axisLabel, styleObject.axisLabel),
    grid: defaults_1({}, style.grid, styleObject.grid),
    ticks: defaults_1({}, style.ticks, styleObject.ticks),
    tickLabels: defaults_1({}, style.tickLabels, styleObject.tickLabels)
  };
};

var getAxisAngle = function (props) {
  var axisAngle = props.axisAngle,
      startAngle = props.startAngle,
      dependentAxis = props.dependentAxis;
  var axis = Axis.getAxis(props);
  var axisValue = Axis.getAxisValue(props, axis);

  if (axisValue === undefined || !dependentAxis) {
    return axisAngle === undefined ? startAngle : axisAngle;
  }

  return Helpers.radiansToDegrees(axisValue);
}; //eslint-disable-next-line max-params


var getTickProps = function (props, calculatedValues, tickValue, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      scale = calculatedValues.scale,
      style = calculatedValues.style,
      stringTicks = calculatedValues.stringTicks,
      ticks = calculatedValues.ticks,
      tickFormat = calculatedValues.tickFormat,
      origin = calculatedValues.origin;
  var text = tickFormat(tickValue, index, ticks);
  var tick = stringTicks ? stringTicks[index] : tickValue;

  var _getEvaluatedStyles = getEvaluatedStyles(style, {
    tick: tick,
    tickValue: tickValue,
    index: index,
    ticks: ticks,
    stringTicks: stringTicks,
    radius: radius,
    scale: scale,
    axisType: axisType,
    text: text
  }),
      tickStyle = _getEvaluatedStyles.tickStyle;

  var axisAngle = axisType === "radial" ? getAxisAngle(props) : undefined;
  var tickPadding = tickStyle.padding || tickStyle.size || 0;
  var padAngle = Helpers.degreesToRadians(90 - axisAngle);
  var tickAngle = axisType === "angular" ? scale(tickValue) : Helpers.degreesToRadians(-1 * axisAngle);
  var tickRadius = axisType === "angular" ? radius : scale(tickValue);
  return axisType === "angular" ? {
    index: index,
    datum: tick,
    style: tickStyle,
    x1: getPosition$1(tickRadius, tickAngle, "x") + origin.x,
    y1: getPosition$1(tickRadius, tickAngle, "y") + origin.y,
    x2: getPosition$1(tickRadius + tickPadding, tickAngle, "x") + origin.x,
    y2: getPosition$1(tickRadius + tickPadding, tickAngle, "y") + origin.y
  } : {
    index: index,
    datum: tick,
    style: tickStyle,
    x1: tickRadius * Math.cos(tickAngle) + Math.cos(padAngle) * tickPadding + origin.x,
    x2: tickRadius * Math.cos(tickAngle) - Math.cos(padAngle) * tickPadding + origin.x,
    y1: tickRadius * Math.sin(tickAngle) + Math.sin(padAngle) * tickPadding + origin.y,
    y2: tickRadius * Math.sin(tickAngle) - Math.sin(padAngle) * tickPadding + origin.y
  };
}; //eslint-disable-next-line max-params


var getTickLabelProps = function (props, calculatedValues, tickValue, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      tickFormat = calculatedValues.tickFormat,
      style = calculatedValues.style,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      stringTicks = calculatedValues.stringTicks,
      origin = calculatedValues.origin;
  var text = tickFormat(tickValue, index, ticks);
  var tick = stringTicks ? stringTicks[index] : tickValue;

  var _getEvaluatedStyles2 = getEvaluatedStyles(style, {
    text: text,
    tick: tick,
    tickValue: tickValue,
    index: index,
    ticks: ticks,
    stringTicks: stringTicks,
    radius: radius,
    scale: scale,
    axisType: axisType
  }),
      labelStyle = _getEvaluatedStyles2.labelStyle;

  var tickLabelComponent = props.tickLabelComponent;
  var labelPlacement = tickLabelComponent.props && tickLabelComponent.props.labelPlacement ? tickLabelComponent.props.labelPlacement : props.labelPlacement;
  var tickPadding = labelStyle.padding || 0;
  var angularPadding = 0; // TODO: do some geometry

  var axisAngle = axisType === "radial" ? getAxisAngle(props) : undefined;
  var labelAngle = axisType === "angular" ? Helpers.radiansToDegrees(scale(tickValue)) : axisAngle + angularPadding;
  var textAngle = labelStyle.angle === undefined ? LabelHelpers.getPolarAngle(assign_1({}, props, {
    labelPlacement: labelPlacement
  }), labelAngle) : labelStyle.angle;
  var labelRadius = axisType === "angular" ? radius + tickPadding : scale(tickValue);
  var textAnchor = labelStyle.textAnchor || LabelHelpers.getPolarTextAnchor(assign_1({}, props, {
    labelPlacement: labelPlacement
  }), labelAngle);
  return {
    index: index,
    datum: tick,
    style: labelStyle,
    angle: textAngle,
    textAnchor: textAnchor,
    text: text,
    x: labelRadius * Math.cos(Helpers.degreesToRadians(labelAngle)) + origin.x,
    y: -labelRadius * Math.sin(Helpers.degreesToRadians(labelAngle)) + origin.y
  };
}; //eslint-disable-next-line max-params


var getGridProps = function (props, calculatedValues, tickValue, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      style = calculatedValues.style,
      scale = calculatedValues.scale,
      stringTicks = calculatedValues.stringTicks,
      ticks = calculatedValues.ticks,
      tickFormat = calculatedValues.tickFormat,
      origin = calculatedValues.origin;
  var text = tickFormat(tickValue, index, ticks);
  var startAngle = props.startAngle,
      endAngle = props.endAngle,
      _props$innerRadius = props.innerRadius,
      innerRadius = _props$innerRadius === void 0 ? 0 : _props$innerRadius;
  var tick = stringTicks ? stringTicks[index] : tickValue;

  var _getEvaluatedStyles3 = getEvaluatedStyles(style, {
    tick: tick,
    tickValue: tickValue,
    index: index,
    ticks: ticks,
    stringTicks: stringTicks,
    radius: radius,
    scale: scale,
    axisType: axisType,
    text: text
  }),
      gridStyle = _getEvaluatedStyles3.gridStyle;

  var angle = scale(tickValue);
  return axisType === "angular" ? {
    index: index,
    datum: tick,
    style: gridStyle,
    x1: getPosition$1(radius, angle, "x") + origin.x,
    y1: getPosition$1(radius, angle, "y") + origin.y,
    x2: getPosition$1(innerRadius, angle, "x") + origin.x,
    y2: getPosition$1(innerRadius, angle, "y") + origin.y
  } : {
    style: gridStyle,
    index: index,
    datum: tick,
    cx: origin.x,
    cy: origin.y,
    r: scale(tickValue),
    startAngle: startAngle,
    endAngle: endAngle
  };
};

var getAxisLabelProps = function (props, calculatedValues) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      style = calculatedValues.style;
      calculatedValues.scale;
      var origin = calculatedValues.origin;
  var axisLabelComponent = props.axisLabelComponent;

  if (axisType !== "radial") {
    return {};
  }

  var labelPlacement = axisLabelComponent.props && axisLabelComponent.props.labelPlacement ? axisLabelComponent.props.labelPlacement : props.labelPlacement;
  var labelStyle = style && style.axisLabel || {};
  var axisAngle = axisType === "radial" ? getAxisAngle(props) : undefined;
  var textAngle = labelStyle.angle === undefined ? LabelHelpers.getPolarAngle(assign_1({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle) : labelStyle.angle;
  var labelRadius = radius + (labelStyle.padding || 0);
  var textAnchor = labelStyle.textAnchor || LabelHelpers.getTextPolarAnchor(assign_1({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle);
  var verticalAnchor = labelStyle.verticalAnchor || LabelHelpers.getPolarVerticalAnchor(assign_1({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle);
  return {
    style: labelStyle,
    angle: textAngle,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    text: props.label,
    x: getPosition$1(labelRadius, Helpers.degreesToRadians(axisAngle), "x") + origin.x,
    y: getPosition$1(labelRadius, Helpers.degreesToRadians(axisAngle), "y") + origin.y
  };
};

var getAxisProps$1 = function (modifiedProps, calculatedValues) {
  var style = calculatedValues.style,
      axisType = calculatedValues.axisType,
      radius = calculatedValues.radius;
      calculatedValues.scale;
      var origin = calculatedValues.origin;
  var startAngle = modifiedProps.startAngle,
      endAngle = modifiedProps.endAngle,
      _modifiedProps$innerR = modifiedProps.innerRadius,
      innerRadius = _modifiedProps$innerR === void 0 ? 0 : _modifiedProps$innerR;
  var axisAngle = axisType === "radial" ? Helpers.degreesToRadians(getAxisAngle(modifiedProps)) : undefined;
  return axisType === "radial" ? {
    style: style.axis,
    x1: getPosition$1(innerRadius, axisAngle, "x") + origin.x,
    x2: getPosition$1(radius, axisAngle, "x") + origin.x,
    y1: getPosition$1(innerRadius, axisAngle, "y") + origin.y,
    y2: getPosition$1(radius, axisAngle, "y") + origin.y
  } : {
    style: style.axis,
    cx: origin.x,
    cy: origin.y,
    r: radius,
    startAngle: startAngle,
    endAngle: endAngle
  };
};

var getCalculatedValues$2 = function (props) {
  props = assign_1({
    polar: true
  }, props);
  var defaultStyles = getStyleObject(props);
  var style = getStyles$2(props, defaultStyles);
  var padding = Helpers.getPadding(props);
  var axis = Axis.getAxis(props);
  var axisType = getAxisType(props);
  var stringTicks = Axis.stringTicks(props) ? props.tickValues : undefined;
  var domain = Axis.getDomain(props, axis);
  var range = getRange(props, axis);
  var scale = getScale(props);
  var initialTicks = Axis.getTicks(props, scale);
  var ticks = axisType === "angular" ? filterTicks(initialTicks, scale) : initialTicks;
  var tickFormat = Axis.getTickFormat(props, scale);
  var radius = getRadius(props);
  var origin = Helpers.getPolarOrigin(props);
  return {
    axis: axis,
    style: style,
    padding: padding,
    stringTicks: stringTicks,
    axisType: axisType,
    scale: scale,
    ticks: ticks,
    tickFormat: tickFormat,
    domain: domain,
    range: range,
    radius: radius,
    origin: origin
  };
};

var getBaseProps$2 = function (props, fallbackProps) {
  props = Axis.modifyProps(props, fallbackProps);
  var calculatedValues = getCalculatedValues$2(props);
  var style = calculatedValues.style,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      domain = calculatedValues.domain;
  var _props = props,
      width = _props.width,
      height = _props.height,
      standalone = _props.standalone,
      theme = _props.theme,
      name = _props.name;
  var axisProps = getAxisProps$1(props, calculatedValues);
  var axisLabelProps = getAxisLabelProps(props, calculatedValues);
  var initialChildProps = {
    parent: {
      style: style.parent,
      ticks: ticks,
      scale: scale,
      width: width,
      height: height,
      domain: domain,
      standalone: standalone,
      theme: theme,
      name: name
    }
  };
  return ticks.reduce(function (childProps, tick, index) {
    childProps[index] = {
      axis: axisProps,
      axisLabel: axisLabelProps,
      ticks: getTickProps(props, calculatedValues, tick, index),
      tickLabels: getTickLabelProps(props, calculatedValues, tick, index),
      grid: getGridProps(props, calculatedValues, tick, index)
    };
    return childProps;
  }, initialChildProps);
};

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$4(arr) { return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _nonIterableSpread$4(); }

function _nonIterableSpread$4() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$4(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$4(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var fallbackProps$6 = {
  width: 450,
  height: 300,
  padding: 50
};
var options = {
  components: [{
    name: "axis",
    index: 0
  }, {
    name: "axisLabel",
    index: 0
  }, {
    name: "grid"
  }, {
    name: "parent",
    index: "parent"
  }, {
    name: "ticks"
  }, {
    name: "tickLabels"
  }]
};

var VictoryPolarAxis =
/*#__PURE__*/
function (_React$Component) {
  _inherits$4(VictoryPolarAxis, _React$Component);

  function VictoryPolarAxis() {
    _classCallCheck$4(this, VictoryPolarAxis);

    return _possibleConstructorReturn$4(this, (VictoryPolarAxis.__proto__ || Object.getPrototypeOf(VictoryPolarAxis)).apply(this, arguments));
  }

  _createClass$4(VictoryPolarAxis, [{
    key: "renderAxisLine",
    value: function renderAxisLine(props) {
      var dependentAxis = props.dependentAxis;
      var axisComponent = dependentAxis ? props.axisComponent : props.circularAxisComponent;
      var axisProps = this.getComponentProps(axisComponent, "axis", 0);
      return react.cloneElement(axisComponent, axisProps);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(props) {
      var axisLabelComponent = props.axisLabelComponent,
          dependentAxis = props.dependentAxis,
          label = props.label;

      if (!label || !dependentAxis) {
        return null;
      }

      var axisLabelProps = this.getComponentProps(axisLabelComponent, "axisLabel", 0);
      return react.cloneElement(axisLabelComponent, axisLabelProps);
    }
  }, {
    key: "renderAxis",
    value: function renderAxis(props) {
      var _this = this;

      var tickComponent = props.tickComponent,
          tickLabelComponent = props.tickLabelComponent,
          name = props.name;

      var shouldRender = function (componentProps) {
        var _componentProps$style = componentProps.style,
            style = _componentProps$style === void 0 ? {} : _componentProps$style,
            _componentProps$event = componentProps.events,
            events = _componentProps$event === void 0 ? {} : _componentProps$event;
        var visible = style.stroke !== "transparent" && style.stroke !== "none" && style.strokeWidth !== 0;
        return visible || !isEmpty_1(events);
      };

      var axisType = props.dependentAxis ? "radial" : "angular";
      var gridComponent = axisType === "radial" ? props.circularGridComponent : props.gridComponent;
      var tickComponents = this.dataKeys.map(function (key, index) {
        var tickProps = assign_1({
          key: "".concat(name, "-tick-").concat(key)
        }, _this.getComponentProps(tickComponent, "ticks", index));

        var TickComponent = react.cloneElement(tickComponent, tickProps);
        return shouldRender(TickComponent.props) ? TickComponent : undefined;
      }).filter(Boolean);
      var gridComponents = this.dataKeys.map(function (key, index) {
        var gridProps = assign_1({
          key: "".concat(name, "-grid-").concat(key)
        }, _this.getComponentProps(gridComponent, "grid", index));

        var GridComponent = react.cloneElement(gridComponent, gridProps);
        return shouldRender(GridComponent.props) ? GridComponent : undefined;
      }).filter(Boolean);
      var tickLabelComponents = this.dataKeys.map(function (key, index) {
        var tickLabelProps = assign_1({
          key: "".concat(name, "-tick-").concat(key)
        }, _this.getComponentProps(tickLabelComponent, "tickLabels", index));

        return react.cloneElement(tickLabelComponent, tickLabelProps);
      });
      var axis = this.renderAxisLine(props);
      var axisLabel = this.renderLabel(props);
      var children = [axis, axisLabel].concat(_toConsumableArray$4(tickComponents), _toConsumableArray$4(gridComponents), _toConsumableArray$4(tickLabelComponents));
      return this.renderGroup(props, children);
    } // Overridden in victory-native

  }, {
    key: "renderGroup",
    value: function renderGroup(props, children) {
      var groupComponent = props.groupComponent;
      return react.cloneElement(groupComponent, {}, children);
    }
  }, {
    key: "shouldAnimate",
    value: function shouldAnimate() {
      return !!this.props.animate;
    }
  }, {
    key: "render",
    value: function render() {
      var animationWhitelist = VictoryPolarAxis.animationWhitelist;
      var props = Axis.modifyProps(this.props, fallbackProps$6);

      if (this.shouldAnimate()) {
        return this.animateComponent(props, animationWhitelist);
      }

      var children = this.renderAxis(props);
      return props.standalone ? this.renderContainer(props.containerComponent, children) : children;
    }
  }]);

  return VictoryPolarAxis;
}(react.Component);

Object.defineProperty(VictoryPolarAxis, "animationWhitelist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["style", "domain", "range", "tickCount", "tickValues", "padding", "width", "height"]
});
Object.defineProperty(VictoryPolarAxis, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAxis"
});
Object.defineProperty(VictoryPolarAxis, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "axis"
});
Object.defineProperty(VictoryPolarAxis, "defaultTransitions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onExit: {
      duration: 500
    },
    onEnter: {
      duration: 500
    }
  }
});
Object.defineProperty(VictoryPolarAxis, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread$6({}, CommonProps.baseProps, {
    axisAngle: propTypes.number,
    axisComponent: propTypes.element,
    axisLabelComponent: propTypes.element,
    axisValue: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object]),
    categories: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.shape({
      x: propTypes.arrayOf(propTypes.string),
      y: propTypes.arrayOf(propTypes.string)
    })]),
    circularAxisComponent: propTypes.element,
    circularGridComponent: propTypes.element,
    containerComponent: propTypes.element,
    dependentAxis: propTypes.bool,
    endAngle: propTypes.number,
    events: propTypes.arrayOf(propTypes.shape({
      target: propTypes.oneOf(["axis", "axisLabel", "grid", "ticks", "tickLabels"]),
      eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
      eventHandlers: propTypes.object
    })),
    gridComponent: propTypes.element,
    innerRadius: CustomPropTypes.nonNegative,
    labelPlacement: propTypes.oneOf(["parallel", "perpendicular", "vertical"]),
    startAngle: propTypes.number,
    stringMap: propTypes.object,
    style: propTypes.shape({
      parent: propTypes.object,
      axis: propTypes.object,
      axisLabel: propTypes.object,
      grid: propTypes.object,
      ticks: propTypes.object,
      tickLabels: propTypes.object
    }),
    tickComponent: propTypes.element,
    tickCount: CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.greaterThanZero]),
    tickFormat: propTypes.oneOfType([propTypes.func, CustomPropTypes.homogeneousArray]),
    tickLabelComponent: propTypes.element,
    tickValues: CustomPropTypes.homogeneousArray
  })
});
Object.defineProperty(VictoryPolarAxis, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    axisComponent: react.createElement(LineSegment, null),
    axisLabelComponent: react.createElement(VictoryLabel, null),
    circularAxisComponent: react.createElement(Arc, null),
    circularGridComponent: react.createElement(Arc, null),
    containerComponent: react.createElement(VictoryContainer, null),
    endAngle: 360,
    gridComponent: react.createElement(LineSegment, null),
    groupComponent: react.createElement("g", {
      role: "presentation"
    }),
    labelPlacement: "parallel",
    startAngle: 0,
    standalone: true,
    theme: VictoryTheme.grayscale,
    tickComponent: react.createElement(LineSegment, null),
    tickLabelComponent: react.createElement(VictoryLabel, null)
  }
});
Object.defineProperty(VictoryPolarAxis, "getDomain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Axis.getDomain
});
Object.defineProperty(VictoryPolarAxis, "getAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Axis.getAxis
});
Object.defineProperty(VictoryPolarAxis, "getScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: getScale
});
Object.defineProperty(VictoryPolarAxis, "getStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getStyles$2(props, fallbackProps$6.style);
  }
});
Object.defineProperty(VictoryPolarAxis, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getBaseProps$2(props, fallbackProps$6);
  }
});
Object.defineProperty(VictoryPolarAxis, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["axisComponent", "circularAxisComponent", "groupComponent", "containerComponent", "tickComponent", "tickLabelComponent", "gridComponent", "circularGridComponent"]
});
var VictoryPolarAxis$1 = addEvents(VictoryPolarAxis, options);

function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _nonIterableSpread$3(); }

function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$3(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
var fallbackProps$5 = {
  width: 450,
  height: 300,
  padding: 50
};

function getAxisProps(child, props, calculatedProps) {
  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      stringMap = calculatedProps.stringMap,
      categories = calculatedProps.categories,
      horizontal = calculatedProps.horizontal,
      orientations = calculatedProps.orientations;
  var childProps = Axis.modifyProps(defaults_1({
    horizontal: horizontal,
    theme: props.theme
  }, child.props));
  var axis = child.type.getAxis(childProps);
  var crossAxis = childProps.crossAxis === false ? false : true;
  var orientation = childProps.orientation || orientations[axis];
  var axisOffset = horizontal ? getHorizontalAxisOffset(props, calculatedProps, orientation) : getAxisOffset(props, calculatedProps, orientation);
  return {
    stringMap: stringMap,
    horizontal: horizontal,
    categories: categories,
    startAngle: props.startAngle,
    endAngle: props.endAngle,
    innerRadius: props.innerRadius,
    domain: domain,
    scale: scale,
    offsetY: childProps.offsetY !== undefined ? childProps.offsetY : axisOffset.y,
    offsetX: childProps.offsetX !== undefined ? childProps.offsetX : axisOffset.x,
    crossAxis: crossAxis,
    orientation: orientation
  };
}

function getBackgroundWithProps(props, calculatedProps) {
  var backgroundElement = props.backgroundComponent;
  var height = props.polar ? calculatedProps.range.y[1] : calculatedProps.range.y[0] - calculatedProps.range.y[1];
  var width = calculatedProps.range.x[1] - calculatedProps.range.x[0];
  var xScale = props.horizontal ? calculatedProps.scale.y.range()[0] : calculatedProps.scale.x.range()[0];
  var yScale = props.horizontal ? calculatedProps.scale.x.range()[1] : calculatedProps.scale.y.range()[1];
  var xCoordinate = props.polar ? calculatedProps.origin.x : xScale;
  var yCoordinate = props.polar ? calculatedProps.origin.y : yScale;
  var parentName = props.name || "chart";
  var backgroundProps = {
    height: height,
    polar: props.polar,
    scale: calculatedProps.scale,
    style: props.style.background,
    x: xCoordinate,
    y: yCoordinate,
    key: "".concat(parentName, "-background"),
    width: width
  };
  return react.cloneElement(backgroundElement, defaults_1({}, backgroundElement.props, backgroundProps));
}

function getChildProps$1(child, props, calculatedProps) {
  var axisChild = Axis.findAxisComponents([child]);

  if (axisChild.length > 0) {
    return getAxisProps(axisChild[0], props, calculatedProps);
  }

  var categories = calculatedProps.categories,
      domain = calculatedProps.domain,
      range = calculatedProps.range,
      scale = calculatedProps.scale,
      stringMap = calculatedProps.stringMap,
      horizontal = calculatedProps.horizontal;
  return {
    categories: categories,
    domain: domain,
    range: range,
    scale: scale,
    stringMap: stringMap,
    horizontal: horizontal
  };
}

function getStyles$1(props) {
  var styleProps = props.style && props.style.parent;
  return {
    parent: defaults_1({}, styleProps, {
      height: "100%",
      width: "100%",
      userSelect: "none"
    })
  };
}

function getOrientation(axis, originSign, horizontal) {
  var sign = originSign || "positive";
  var orientations = {
    positive: {
      x: "bottom",
      y: "left"
    },
    negative: {
      x: "top",
      y: "right"
    }
  };
  var horizontalOrientations = {
    positive: {
      x: "left",
      y: "bottom"
    },
    negative: {
      x: "right",
      y: "top"
    }
  };
  return horizontal ? horizontalOrientations[sign][axis] : orientations[sign][axis];
}

function getCalculatedProps$1(props, childComponents) {
  var style = getStyles$1(props);
  props = Helpers.modifyProps(props, fallbackProps$5, "chart");
  var _props = props,
      horizontal = _props.horizontal,
      polar = _props.polar;
  var allStrings = Wrapper.getStringsFromChildren(props, childComponents);
  var categories = Wrapper.getCategories(props, childComponents, allStrings);
  var stringMap = createStringMap(props, childComponents, allStrings);
  var domain = {
    x: getDomain(assign_1({}, props, {
      categories: categories
    }), "x", childComponents),
    y: getDomain(assign_1({}, props, {
      categories: categories
    }), "y", childComponents)
  };
  var range = {
    x: Helpers.getRange(props, "x"),
    y: Helpers.getRange(props, "y")
  };
  var baseScale = {
    x: Scale.getScaleFromProps(props, "x") || Wrapper.getScale(props, "x"),
    y: Scale.getScaleFromProps(props, "y") || Wrapper.getScale(props, "y")
  };
  var scale = {
    x: baseScale.x.domain(domain.x).range(horizontal ? range.y : range.x),
    y: baseScale.y.domain(domain.y).range(horizontal ? range.x : range.y)
  };
  var origin = polar ? Helpers.getPolarOrigin(props) : Axis.getOrigin(domain);
  var originSign = {
    x: Axis.getOriginSign(origin.x, domain.x),
    y: Axis.getOriginSign(origin.y, domain.y)
  };
  var orientations = {
    x: getOrientation("x", originSign.y, horizontal),
    y: getOrientation("y", originSign.x, horizontal)
  };
  var padding = Helpers.getPadding(props);
  return {
    categories: categories,
    domain: domain,
    range: range,
    horizontal: horizontal,
    scale: scale,
    stringMap: stringMap,
    style: style,
    origin: origin,
    padding: padding,
    orientations: orientations
  };
}

function getChildren$1(props, childComponents, calculatedProps) {
  childComponents = childComponents || getChildComponents(props);
  calculatedProps = calculatedProps || getCalculatedProps$1(props, childComponents);
  var baseStyle = calculatedProps.style.parent;
  var height = props.height,
      polar = props.polar,
      theme = props.theme,
      width = props.width;
  var _calculatedProps = calculatedProps,
      origin = _calculatedProps.origin,
      horizontal = _calculatedProps.horizontal;
  var parentName = props.name || "chart";
  return childComponents.map(function (child, index) {
    var role = child.type && child.type.role;
    var style = Array.isArray(child.props.style) ? child.props.style : defaults_1({}, child.props.style, {
      parent: baseStyle
    });
    var childProps = getChildProps$1(child, props, calculatedProps);
    var name = child.props.name || "".concat(parentName, "-").concat(role, "-").concat(index);

    var newProps = defaults_1({
      horizontal: horizontal,
      height: height,
      polar: polar,
      theme: theme,
      width: width,
      style: style,
      name: name,
      origin: polar ? origin : undefined,
      padding: calculatedProps.padding,
      key: "".concat(name, "-key-").concat(index),
      standalone: false
    }, childProps);

    return react.cloneElement(child, newProps);
  });
}

var getChildComponents = function (props, defaultAxes) {
  var childComponents = react.Children.toArray(props.children);

  var newChildComponents = _toConsumableArray$3(childComponents);

  if (childComponents.length === 0) {
    newChildComponents.push(defaultAxes.independent, defaultAxes.dependent);
  } else {
    var axisComponents = {
      dependent: Axis.getAxisComponentsWithParent(childComponents, "dependent"),
      independent: Axis.getAxisComponentsWithParent(childComponents, "independent")
    };

    if (axisComponents.dependent.length === 0 && axisComponents.independent.length === 0) {
      newChildComponents = props.prependDefaultAxes ? [defaultAxes.independent, defaultAxes.dependent].concat(newChildComponents) : newChildComponents.concat([defaultAxes.independent, defaultAxes.dependent]);
    }
  }

  return newChildComponents;
};

var getDomain = function (props, axis, childComponents) {
  childComponents = childComponents || react.Children.toArray(props.children);
  var domain = Wrapper.getDomain(props, axis, childComponents);
  var axisComponent = Axis.getAxisComponent(childComponents, axis);
  var invertDomain = axisComponent && axisComponent.props && axisComponent.props.invertAxis;
  return invertDomain ? domain.concat().reverse() : domain;
};

var getAxisOffset = function (props, calculatedProps, orientation) {
  var scale = calculatedProps.scale,
      origin = calculatedProps.origin,
      domain = calculatedProps.domain,
      padding = calculatedProps.padding;
  var top = padding.top,
      bottom = padding.bottom,
      left = padding.left,
      right = padding.right;
  var orientations = {
    x: orientation === "bottom" || orientation === "top" ? orientation : calculatedProps.orientations.x,
    y: orientation === "left" || orientation === "right" ? orientation : calculatedProps.orientations.y
  }; // make the axes line up, and cross when appropriate

  var orientationOffset = {
    y: orientations.x === "bottom" ? bottom : top,
    x: orientations.y === "left" ? left : right
  };
  var originOffset = {
    x: orientations.y === "left" ? 0 : props.width,
    y: orientations.x === "bottom" ? props.height : 0
  };
  var originPosition = {
    x: origin.x === domain.x[0] || origin.x === domain.x[1] ? 0 : scale.x(origin.x),
    y: origin.y === domain.y[0] || origin.y === domain.y[1] ? 0 : scale.y(origin.y)
  };
  return {
    x: originPosition.x ? Math.abs(originOffset.x - originPosition.x) : orientationOffset.x,
    y: originPosition.y ? Math.abs(originOffset.y - originPosition.y) : orientationOffset.y
  };
};

var getHorizontalAxisOffset = function (props, calculatedProps, orientation) {
  var scale = calculatedProps.scale,
      origin = calculatedProps.origin,
      domain = calculatedProps.domain,
      padding = calculatedProps.padding;
  var top = padding.top,
      bottom = padding.bottom,
      left = padding.left,
      right = padding.right;
  var orientations = {
    y: orientation === "bottom" || orientation === "top" ? orientation : calculatedProps.orientations.x,
    x: orientation === "left" || orientation === "right" ? orientation : calculatedProps.orientations.y
  }; // make the axes line up, and cross when appropriate

  var orientationOffset = {
    x: orientations.y === "bottom" ? bottom : top,
    y: orientations.x === "left" ? left : right
  };
  var originOffset = {
    y: orientations.x === "left" ? 0 : props.width,
    x: orientations.y === "bottom" ? props.height : 0
  };
  var originPosition = {
    x: origin.x === domain.x[0] || origin.x === domain.x[1] ? 0 : scale.x(origin.x),
    y: origin.y === domain.y[0] || origin.y === domain.y[1] ? 0 : scale.y(origin.y)
  };
  return {
    y: originPosition.x ? Math.abs(originOffset.x - originPosition.x) : orientationOffset.x,
    x: originPosition.y ? Math.abs(originOffset.y - originPosition.y) : orientationOffset.y
  };
};

var createStringMap = function (props, childComponents, allStrings) {
  var x = !allStrings.x || allStrings.x.length === 0 ? null : allStrings.x.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  var y = !allStrings.y || allStrings.y.length === 0 ? null : allStrings.y.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  return {
    x: x,
    y: y
  };
};

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
var fallbackProps$4 = {
  width: 450,
  height: 300,
  padding: 50
};

var VictoryChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits$3(VictoryChart, _React$Component);

  function VictoryChart(props) {
    var _this;

    _classCallCheck$3(this, VictoryChart);

    _this = _possibleConstructorReturn$3(this, (VictoryChart.__proto__ || Object.getPrototypeOf(VictoryChart)).call(this, props));
    _this.state = {};

    if (props.animate) {
      _this.state = {
        nodesShouldLoad: false,
        nodesDoneLoad: false,
        animating: true
      };
      _this.setAnimationState = Wrapper.setAnimationState.bind(_assertThisInitialized$3(_this));
    }

    return _this;
  }

  _createClass$3(VictoryChart, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.animate) {
        if (!reactFastCompare(this.props, nextProps)) {
          this.setAnimationState(this.props, nextProps);
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getNewChildren",
    value: function getNewChildren(props, childComponents, calculatedProps) {
      var children = getChildren$1(props, childComponents, calculatedProps);
      var getAnimationProps = Wrapper.getAnimationProps.bind(this);
      var newChildren = children.map(function (child, index) {
        var childProps = assign_1({
          animate: getAnimationProps(props, child, index)
        }, child.props);

        return react.cloneElement(child, childProps);
      });

      if (props.style && props.style.background) {
        var backgroundComponent = getBackgroundWithProps(props, calculatedProps);
        newChildren.unshift(backgroundComponent);
      }

      return newChildren;
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(containerComponent, props) {
      var containerProps = defaults_1({}, containerComponent.props, props);

      return react.cloneElement(containerComponent, containerProps);
    }
  }, {
    key: "getContainerProps",
    value: function getContainerProps(props, calculatedProps) {
      var width = props.width,
          height = props.height,
          standalone = props.standalone,
          theme = props.theme,
          polar = props.polar,
          name = props.name;
      var domain = calculatedProps.domain,
          scale = calculatedProps.scale,
          style = calculatedProps.style,
          origin = calculatedProps.origin,
          radius = calculatedProps.radius,
          horizontal = calculatedProps.horizontal;
      return {
        domain: domain,
        scale: scale,
        width: width,
        height: height,
        standalone: standalone,
        theme: theme,
        style: style.parent,
        horizontal: horizontal,
        name: name,
        polar: polar,
        radius: radius,
        origin: polar ? origin : undefined
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.state && this.state.nodesWillExit ? this.state.oldProps || this.props : this.props;
      var modifiedProps = Helpers.modifyProps(props, fallbackProps$4, "chart");
      var eventKey = modifiedProps.eventKey,
          containerComponent = modifiedProps.containerComponent,
          groupComponent = modifiedProps.groupComponent,
          standalone = modifiedProps.standalone,
          externalEventMutations = modifiedProps.externalEventMutations;
      var axes = props.polar ? modifiedProps.defaultPolarAxes : modifiedProps.defaultAxes;
      var childComponents = getChildComponents(modifiedProps, axes);
      var calculatedProps = getCalculatedProps$1(modifiedProps, childComponents);
      var newChildren = this.getNewChildren(modifiedProps, childComponents, calculatedProps);
      var containerProps = standalone ? this.getContainerProps(modifiedProps, calculatedProps) : {};
      var container = standalone ? this.renderContainer(containerComponent, containerProps) : groupComponent;
      var events = Wrapper.getAllEvents(props);

      if (!isEmpty_1(events)) {
        return react.createElement(VictorySharedEvents, {
          container: container,
          eventKey: eventKey,
          events: events,
          externalEventMutations: externalEventMutations
        }, newChildren);
      }

      return react.cloneElement(container, container.props, newChildren);
    }
  }]);

  return VictoryChart;
}(react.Component);

Object.defineProperty(VictoryChart, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryChart"
});
Object.defineProperty(VictoryChart, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread$5({}, CommonProps.baseProps, {
    backgroundComponent: propTypes.element,
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    defaultAxes: propTypes.shape({
      independent: propTypes.element,
      dependent: propTypes.element
    }),
    defaultPolarAxes: propTypes.shape({
      independent: propTypes.element,
      dependent: propTypes.element
    }),
    endAngle: propTypes.number,
    innerRadius: CustomPropTypes.nonNegative,
    prependDefaultAxes: propTypes.bool,
    startAngle: propTypes.number
  })
});
Object.defineProperty(VictoryChart, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    backgroundComponent: react.createElement(Background, null),
    containerComponent: react.createElement(VictoryContainer, null),
    defaultAxes: {
      independent: react.createElement(VictoryAxis$1, null),
      dependent: react.createElement(VictoryAxis$1, {
        dependentAxis: true
      })
    },
    defaultPolarAxes: {
      independent: react.createElement(VictoryPolarAxis$1, null),
      dependent: react.createElement(VictoryPolarAxis$1, {
        dependentAxis: true
      })
    },
    groupComponent: react.createElement("g", null),
    standalone: true,
    theme: VictoryTheme.grayscale
  }
});
Object.defineProperty(VictoryChart, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["groupComponent", "containerComponent"]
});

var fallbackProps$3 = {
  width: 450,
  height: 300,
  padding: 50
}; // Assumes data in `datasets` is sorted by `Data.getData`.

function fillData(props, datasets) {
  var fillInMissingData = props.fillInMissingData;
  var xMap = datasets.reduce(function (prev, dataset) {
    dataset.forEach(function (datum) {
      prev[datum._x instanceof Date ? datum._x.getTime() : datum._x] = true;
    });
    return prev;
  }, {});

  var xKeys = keys_1(xMap).map(function (k) {
    return +k;
  });

  var xArr = orderBy_1(xKeys);

  return datasets.map(function (dataset) {
    var indexOffset = 0;
    var isDate = dataset[0] && dataset[0]._x instanceof Date;
    var filledInData = xArr.map(function (x, index) {
      x = +x;
      var datum = dataset[index - indexOffset];

      if (datum) {
        var x1 = isDate ? datum._x.getTime() : datum._x;

        if (x1 === x) {
          return datum;
        } else {
          indexOffset++;
          var y = fillInMissingData ? 0 : null;
          x = isDate ? new Date(x) : x;
          return {
            x: x,
            y: y,
            _x: x,
            _y: y
          };
        }
      } else {
        var _y = fillInMissingData ? 0 : null;

        x = isDate ? new Date(x) : x;
        return {
          x: x,
          y: _y,
          _x: x,
          _y: _y
        };
      }
    });
    return filledInData;
  });
}

function getY0(datum, index, datasets) {
  if (datum.y0) {
    return datum.y0;
  }

  var y = datum._y;
  var previousDatasets = datasets.slice(0, index);
  var previousPoints = previousDatasets.reduce(function (prev, dataset) {
    return prev.concat(dataset.filter(function (previousDatum) {
      return datum._x instanceof Date ? previousDatum._x.getTime() === datum._x.getTime() : previousDatum._x === datum._x;
    }).map(function (previousDatum) {
      return previousDatum._y || 0;
    }));
  }, []);
  var y0 = previousPoints.length && previousPoints.reduce(function (memo, value) {
    var sameSign = y < 0 && value < 0 || y >= 0 && value >= 0;
    return sameSign ? +value + memo : memo;
  }, 0);
  return previousPoints.some(function (point) {
    return point instanceof Date;
  }) ? new Date(y0) : y0;
}
/* eslint-disable no-nested-ternary */


function addLayoutData(props, datasets, index) {
  var xOffset = props.xOffset || 0;
  return datasets[index].map(function (datum) {
    var yOffset = getY0(datum, index, datasets) || 0;
    return assign_1({}, datum, {
      _y0: !(datum._y instanceof Date) ? yOffset : yOffset ? new Date(yOffset) : datum._y,
      _y1: datum._y === null ? null : datum._y instanceof Date ? new Date(+datum._y + +yOffset) : datum._y + yOffset,
      _x1: datum._x === null ? null : datum._x instanceof Date ? new Date(+datum._x + +xOffset) : datum._x + xOffset
    });
  });
}
/* eslint-enable no-nested-ternary */


function stackData(props, childComponents) {
  var dataFromChildren = Wrapper.getDataFromChildren(props, childComponents);
  var datasets = fillData(props, dataFromChildren);
  return datasets.map(function (d, i) {
    return addLayoutData(props, datasets, i);
  });
}

function getCalculatedProps(props, childComponents) {
  childComponents = childComponents || react.Children.toArray(props.children);
  var role = "stack";
  props = Helpers.modifyProps(props, fallbackProps$3, role);
  var style = Wrapper.getStyle(props.theme, props.style, role);
  var categories = props.categories || Wrapper.getCategories(props, childComponents);
  var datasets = props.datasets || stackData(props, childComponents);
  var children = childComponents.map(function (c, i) {
    return react.cloneElement(c, {
      data: datasets[i]
    });
  });
  var domain = {
    x: Wrapper.getDomain(assign_1({}, props, {
      categories: categories
    }), "x", children),
    y: Wrapper.getDomain(assign_1({}, props, {
      categories: categories
    }), "y", children)
  };
  var range = props.range || {
    x: Helpers.getRange(props, "x"),
    y: Helpers.getRange(props, "y")
  };
  var baseScale = {
    x: Scale.getScaleFromProps(props, "x") || Wrapper.getScale(props, "x"),
    y: Scale.getScaleFromProps(props, "y") || Wrapper.getScale(props, "y")
  };
  var scale = {
    x: baseScale.x.domain(domain.x).range(props.horizontal ? range.y : range.x),
    y: baseScale.y.domain(domain.y).range(props.horizontal ? range.x : range.y)
  };
  var _props = props,
      colorScale = _props.colorScale,
      horizontal = _props.horizontal;
  return {
    datasets: datasets,
    categories: categories,
    range: range,
    domain: domain,
    horizontal: horizontal,
    scale: scale,
    style: style,
    colorScale: colorScale,
    role: role
  };
}

function getLabels(props, datasets, index) {
  if (!props.labels) {
    return undefined;
  }

  return datasets.length === index + 1 ? props.labels : undefined;
}

function getChildProps(props, calculatedProps) {
  var categories = calculatedProps.categories,
      domain = calculatedProps.domain,
      range = calculatedProps.range,
      scale = calculatedProps.scale,
      horizontal = calculatedProps.horizontal;
  return {
    height: props.height,
    width: props.width,
    padding: Helpers.getPadding(props),
    standalone: false,
    theme: props.theme,
    categories: categories,
    domain: domain,
    range: range,
    scale: scale,
    horizontal: horizontal
  };
}

function getColorScale$1(props, child) {
  var role = child.type && child.type.role;
  var colorScaleOptions = child.props.colorScale || props.colorScale;

  if (role !== "group" && role !== "stack") {
    return undefined;
  }

  return props.theme ? colorScaleOptions || props.theme.props.colorScale : colorScaleOptions;
}

function getChildren(props, childComponents, calculatedProps) {
  props = Helpers.modifyProps(props, fallbackProps$3, "stack");
  childComponents = childComponents || react.Children.toArray(props.children);
  calculatedProps = calculatedProps || getCalculatedProps(props, childComponents);
  var _calculatedProps = calculatedProps,
      datasets = _calculatedProps.datasets;
  var childProps = getChildProps(props, calculatedProps);
  var parentName = props.name || "stack";
  return childComponents.map(function (child, index) {
    var role = child.type && child.type.role;
    var data = datasets[index];
    var style = Wrapper.getChildStyle(child, index, calculatedProps);
    var labels = props.labels ? getLabels(props, datasets, index) : child.props.labels;
    var name = child.props.name || "".concat(parentName, "-").concat(role, "-").concat(index);
    return react.cloneElement(child, assign_1({
      key: "".concat(name, "-key-").concat(index),
      labels: labels,
      name: name,
      domainPadding: child.props.domainPadding || props.domainPadding,
      theme: props.theme,
      labelComponent: props.labelComponent || child.props.labelComponent,
      style: style,
      colorScale: getColorScale$1(props, child),
      data: data,
      polar: props.polar
    }, childProps));
  });
}

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
var fallbackProps$2 = {
  width: 450,
  height: 300,
  padding: 50
};

var VictoryStack =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(VictoryStack, _React$Component);

  function VictoryStack(props) {
    var _this;

    _classCallCheck$2(this, VictoryStack);

    _this = _possibleConstructorReturn$2(this, (VictoryStack.__proto__ || Object.getPrototypeOf(VictoryStack)).call(this, props));

    if (props.animate) {
      _this.state = {
        nodesShouldLoad: false,
        nodesDoneLoad: false,
        animating: true
      };
      _this.setAnimationState = Wrapper.setAnimationState.bind(_assertThisInitialized$2(_this));
    }

    return _this;
  }

  _createClass$2(VictoryStack, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.animate) {
        if (!reactFastCompare(this.props, nextProps)) {
          this.setAnimationState(this.props, nextProps);
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getNewChildren",
    value: function getNewChildren(props, childComponents, calculatedProps) {
      var children = getChildren(props, childComponents, calculatedProps);
      var getAnimationProps = Wrapper.getAnimationProps.bind(this);
      var newChildren = children.map(function (child, index) {
        var childProps = assign_1({
          animate: getAnimationProps(props, child, index)
        }, child.props);

        return react.cloneElement(child, childProps);
      });
      /*
        reverse render order for children of `VictoryStack` so that higher children in the stack
        are rendered behind lower children. This looks nicer for stacked bars with cornerRadius, and
        areas with strokes
      */

      return newChildren.reverse();
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(containerComponent, props) {
      var containerProps = defaults_1({}, containerComponent.props, props);

      return react.cloneElement(containerComponent, containerProps);
    }
  }, {
    key: "getContainerProps",
    value: function getContainerProps(props, calculatedProps) {
      var width = props.width,
          height = props.height,
          standalone = props.standalone,
          theme = props.theme,
          polar = props.polar,
          horizontal = props.horizontal,
          name = props.name;
      var domain = calculatedProps.domain,
          scale = calculatedProps.scale,
          style = calculatedProps.style,
          origin = calculatedProps.origin;
      return {
        domain: domain,
        scale: scale,
        width: width,
        height: height,
        standalone: standalone,
        theme: theme,
        style: style.parent,
        horizontal: horizontal,
        polar: polar,
        origin: origin,
        name: name
      };
    }
  }, {
    key: "render",
    value: function render() {
      var role = this.constructor.role;
      var props = this.state && this.state.nodesWillExit ? this.state.oldProps || this.props : this.props;
      var modifiedProps = Helpers.modifyProps(props, fallbackProps$2, role);
      var eventKey = modifiedProps.eventKey,
          containerComponent = modifiedProps.containerComponent,
          standalone = modifiedProps.standalone,
          groupComponent = modifiedProps.groupComponent,
          externalEventMutations = modifiedProps.externalEventMutations;
      var childComponents = react.Children.toArray(modifiedProps.children);
      var calculatedProps = getCalculatedProps(modifiedProps, childComponents);
      var newChildren = this.getNewChildren(modifiedProps, childComponents, calculatedProps);
      var containerProps = standalone ? this.getContainerProps(modifiedProps, calculatedProps) : {};
      var container = standalone ? this.renderContainer(containerComponent, containerProps) : groupComponent;
      var events = Wrapper.getAllEvents(props);

      if (!isEmpty_1(events)) {
        return react.createElement(VictorySharedEvents, {
          container: container,
          eventKey: eventKey,
          events: events,
          externalEventMutations: externalEventMutations
        }, newChildren);
      }

      return react.cloneElement(container, container.props, newChildren);
    }
  }]);

  return VictoryStack;
}(react.Component);

Object.defineProperty(VictoryStack, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryStack"
});
Object.defineProperty(VictoryStack, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "stack"
});
Object.defineProperty(VictoryStack, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread$4({}, CommonProps.baseProps, {
    bins: propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOfType([CustomPropTypes.nonNegative, propTypes.instanceOf(Date)])), CustomPropTypes.nonNegative]),
    categories: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.shape({
      x: propTypes.arrayOf(propTypes.string),
      y: propTypes.arrayOf(propTypes.string)
    })]),
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    colorScale: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
    fillInMissingData: propTypes.bool,
    horizontal: propTypes.bool,
    labelComponent: propTypes.element,
    labels: propTypes.oneOfType([propTypes.func, propTypes.array]),
    style: propTypes.shape({
      parent: propTypes.object,
      data: propTypes.object,
      labels: propTypes.object
    }),
    xOffset: propTypes.number
  })
});
Object.defineProperty(VictoryStack, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    containerComponent: react.createElement(VictoryContainer, null),
    groupComponent: react.createElement("g", null),
    standalone: true,
    theme: VictoryTheme.grayscale,
    fillInMissingData: true
  }
});
Object.defineProperty(VictoryStack, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["groupComponent", "containerComponent", "labelComponent"]
});
Object.defineProperty(VictoryStack, "getChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: getChildren
});

var pi$1 = Math.PI,
    tau$1 = 2 * pi$1,
    epsilon$1 = 1e-6,
    tauEpsilon = tau$1 - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$1 + tau$1;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi$1)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant(x) {
  return function constant() {
    return x;
  };
}

var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

function arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = abs(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau - epsilon) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
          rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon) {
        var p0 = asin(rp / r0 * sin(ap)),
            p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos(a01),
          y01 = r1 * sin(a01),
          x10 = r0 * cos(a10),
          y10 = r0 * sin(a10);

      // Apply rounded corners?
      if (rc > epsilon) {
        var x11 = r1 * cos(a11),
            y11 = r1 * sin(a11),
            x00 = r0 * cos(a00),
            y00 = r0 * sin(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
              lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
}

var getBarPosition = function (props, datum) {
  var getDefaultMin = function (axis) {
    var defaultZero = Scale.getType(props.scale[axis]) === "log" ? 1 / Number.MAX_SAFE_INTEGER : 0;
    var defaultMin = defaultZero;
    var minY = Collection.getMinValue(props.domain[axis]);
    var maxY = Collection.getMaxValue(props.domain[axis]);

    if (minY < 0 && maxY <= 0) {
      defaultMin = maxY;
    } else if (minY >= 0 && maxY > 0) {
      defaultMin = minY;
    }

    return datum["_".concat(axis)] instanceof Date ? new Date(defaultMin) : defaultMin;
  };

  var _y0 = datum._y0 !== undefined ? datum._y0 : getDefaultMin("y");

  var _x0 = datum._x0 !== undefined ? datum._x0 : getDefaultMin("x");

  return Helpers.scalePoint(props, assign_1({}, datum, {
    _y0: _y0,
    _x0: _x0
  }));
};

var getCalculatedValues$1 = function (props) {
  var polar = props.polar;
  var defaultStyles = Helpers.getDefaultStyles(props, "bar");
  var style = Helpers.getStyles(props.style, defaultStyles);
  var data = Data.getData(props); // Data.getData needs to be called to format the data (we may be able to do this in a wrapper component)

  var range = props.range || {
    x: Helpers.getRange(props, "x"),
    y: Helpers.getRange(props, "y")
  };
  var domain = {
    x: Domain.getDomainWithZero(props, "x"),
    y: Domain.getDomainWithZero(props, "y")
  };
  var scale = {
    x: Scale.getBaseScale(props, "x").domain(domain.x).range(props.horizontal ? range.y : range.x),
    y: Scale.getBaseScale(props, "y").domain(domain.y).range(props.horizontal ? range.x : range.y)
  };
  var origin = polar ? props.origin || Helpers.getPolarOrigin(props) : undefined;
  return {
    style: style,
    data: data,
    scale: scale,
    domain: domain,
    origin: origin
  };
};

var getBaseProps$1 = function (props, fallbackProps) {
  var modifiedProps = Helpers.modifyProps(props, fallbackProps, "bar");
  props = assign_1({}, modifiedProps, getCalculatedValues$1(modifiedProps));
  var _props = props,
      alignment = _props.alignment,
      barRatio = _props.barRatio,
      cornerRadius = _props.cornerRadius,
      data = _props.data,
      domain = _props.domain,
      events = _props.events,
      height = _props.height,
      horizontal = _props.horizontal,
      origin = _props.origin,
      padding = _props.padding,
      polar = _props.polar,
      scale = _props.scale,
      sharedEvents = _props.sharedEvents,
      standalone = _props.standalone,
      style = _props.style,
      theme = _props.theme,
      width = _props.width,
      labels = _props.labels,
      name = _props.name,
      barWidth = _props.barWidth,
      getPath = _props.getPath;
  var initialChildProps = {
    parent: {
      horizontal: horizontal,
      domain: domain,
      scale: scale,
      width: width,
      height: height,
      data: data,
      standalone: standalone,
      name: name,
      theme: theme,
      polar: polar,
      origin: origin,
      padding: padding,
      style: style.parent
    }
  };
  return data.reduce(function (childProps, datum, index) {
    var eventKey = !isNil_1(datum.eventKey) ? datum.eventKey : index;

    var _getBarPosition = getBarPosition(props, datum),
        x = _getBarPosition.x,
        y = _getBarPosition.y,
        y0 = _getBarPosition.y0,
        x0 = _getBarPosition.x0;

    var dataProps = {
      alignment: alignment,
      barRatio: barRatio,
      barWidth: barWidth,
      cornerRadius: cornerRadius,
      data: data,
      datum: datum,
      getPath: getPath,
      horizontal: horizontal,
      index: index,
      polar: polar,
      origin: origin,
      scale: scale,
      style: style.data,
      width: width,
      height: height,
      x: x,
      y: y,
      y0: y0,
      x0: x0
    };
    childProps[eventKey] = {
      data: dataProps
    };
    var text = LabelHelpers.getText(props, datum, index);

    if (text !== undefined && text !== null || labels && (events || sharedEvents)) {
      childProps[eventKey].labels = LabelHelpers.getProps(props, index);
    }

    return childProps;
  }, initialChildProps);
};

/**
 * A point in the 2d plane
 * @param {number} x - x coordinate
 * @param {number} y - y coordinate
 * @returns {object} - point object
 */
var point = function (x, y) {
  return {
    x: x,
    y: y,
    distance: function (p1) {
      return Math.sqrt(Math.pow(this.x - p1.x, 2) + Math.pow(this.y - p1.y, 2));
    },
    // vector addition in 2d plane
    add: function (p1) {
      return point(this.x + p1.x, this.y + p1.y);
    },
    // vector subtraction in 2d
    // returns p0 - p1
    subtract: function (p1) {
      return point(this.x - p1.x, this.y - p1.y);
    },
    // multiply a 2d point by a scalar
    scalarMult: function (n) {
      return point(this.x * n, this.y * n);
    },
    scalarDivide: function (n) {
      if (n === 0) {
        throw new Error("Division by 0 error");
      }

      return point(this.x / n, this.y / n);
    },
    equals: function (p1) {
      return this.x === p1.x && this.y === p1.y;
    }
  };
};
/**
 * A circle in the 2d plane
 * @param {point} center - center of circle
 * @param {number} radius - radius of circle
 * @returns {object} - point object
 */


var circle = function (center, radius) {
  return {
    center: center,
    radius: radius,
    hasIntersection: function (circle1) {
      var P0 = this.center;
      var P1 = circle1.center;
      var r0 = this.radius;
      var r1 = circle1.radius;
      var d = P0.distance(P1);

      if (d > r0 + r1) {
        return false; // separate circles
      }

      if (d < Math.abs(r0 - r1)) {
        return false; // one circle contains another
      }

      return true;
    },
    equals: function (circle1) {
      var P0 = this.center;
      var P1 = circle1.center;
      var r0 = this.radius;
      var r1 = circle1.radius;
      return r0 === r1 && P0.equals(P1);
    },
    // Source: http://paulbourke.net/geometry/circlesphere/
    // "Intersection of two circles" by Paul Bourke
    // Left-most point is returned as 0th element of array
    // Right-most point is returned as 1st elemennt of array
    intersection: function (circle1) {
      // eslint-disable-line max-statements
      var P0 = this.center;
      var P1 = circle1.center;
      var r0 = this.radius;
      var r1 = circle1.radius;
      var d = P0.distance(P1);

      if (!this.hasIntersection(circle1) || this.equals(circle1)) {
        return [];
      }

      var a = (Math.pow(r0, 2) - Math.pow(r1, 2) + Math.pow(d, 2)) / (2 * d);
      var h = Math.sqrt(Math.pow(r0, 2) - Math.pow(a, 2));
      var P2 = P0.add(P1.subtract(P0).scalarMult(a).scalarDivide(d));
      var x0 = P0.x,
          y0 = P0.y;
      var x1 = P1.x,
          y1 = P1.y;
      var x2 = P2.x,
          y2 = P2.y;
      var P3s = [point(x2 - h * (y1 - y0) / d, y2 + h * (x1 - x0) / d), point(x2 + h * (y1 - y0) / d, y2 - h * (x1 - x0) / d)];
      P3s.sort(function (Point1, Point2) {
        return Point1.x - Point2.x;
      });
      return P3s;
    },
    solveX: function (y) {
      var sqrt = Math.sqrt(Math.pow(this.radius, 2) - Math.pow(y - this.center.y, 2));
      return [this.center.x - sqrt, this.center.x + sqrt];
    },
    solveY: function (x) {
      var sqrt = Math.sqrt(Math.pow(this.radius, 2) - Math.pow(x - this.center.x, 2));
      return [this.center.y - sqrt, this.center.y + sqrt];
    }
  };
};

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _nonIterableSpread$2(); }

function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$2(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getPosition = function (props, width) {
  var x = props.x,
      x0 = props.x0,
      y = props.y,
      y0 = props.y0,
      horizontal = props.horizontal;
  var alignment = props.alignment || "middle";
  var size = alignment === "middle" ? width / 2 : width;
  var sign = horizontal ? -1 : 1;

  if (horizontal) {
    return {
      x0: x0,
      x1: x,
      y0: alignment === "start" ? y : y - sign * size,
      y1: alignment === "end" ? y : y + sign * size
    };
  }

  return {
    x0: alignment === "start" ? x : x - sign * size,
    x1: alignment === "end" ? x : x + sign * size,
    y0: y0,
    y1: y
  };
};

var getAngle = function (props, index) {
  var data = props.data,
      scale = props.scale;
  var x = data[index]._x1 === undefined ? "_x" : "_x1";
  return scale.x(data[index][x]);
};

var getAngularWidth = function (props, width) {
  var scale = props.scale;
  var range = scale.y.range();
  var r = Math.max.apply(Math, _toConsumableArray$2(range));
  var angularRange = Math.abs(scale.x.range()[1] - scale.x.range()[0]);
  return width / (2 * Math.PI * r) * angularRange;
};

var transformAngle = function (angle) {
  return -1 * angle + Math.PI / 2;
};

var getCustomBarPath = function (props, width) {
  var getPath = props.getPath;

  var propsWithCalculatedValues = _objectSpread$3({}, props, getPosition(props, width));

  return getPath(propsWithCalculatedValues);
};

var getStartAngle = function (props, index) {
  var data = props.data,
      scale = props.scale,
      alignment = props.alignment;
  var currentAngle = getAngle(props, index);
  var angularRange = Math.abs(scale.x.range()[1] - scale.x.range()[0]);
  var previousAngle = index === 0 ? getAngle(props, data.length - 1) - Math.PI * 2 : getAngle(props, index - 1);

  if (index === 0 && angularRange < 2 * Math.PI) {
    return scale.x.range()[0];
  } else if (alignment === "start" || alignment === "end") {
    return alignment === "start" ? previousAngle : currentAngle;
  } else {
    return (currentAngle + previousAngle) / 2;
  }
};

var getEndAngle = function (props, index) {
  var data = props.data,
      scale = props.scale,
      alignment = props.alignment;
  var currentAngle = getAngle(props, index);
  var angularRange = Math.abs(scale.x.range()[1] - scale.x.range()[0]);
  var lastAngle = scale.x.range()[1] === 2 * Math.PI ? getAngle(props, 0) + Math.PI * 2 : scale.x.range()[1];
  var nextAngle = index === data.length - 1 ? getAngle(props, 0) + Math.PI * 2 : getAngle(props, index + 1);

  if (index === data.length - 1 && angularRange < 2 * Math.PI) {
    return lastAngle;
  } else if (alignment === "start" || alignment === "end") {
    return alignment === "start" ? currentAngle : nextAngle;
  } else {
    return (currentAngle + nextAngle) / 2;
  }
};

var mapPointsToPath = function (coords, cornerRadius, direction) {
  var topLeftPath = "".concat(cornerRadius.topLeft, " ").concat(cornerRadius.topLeft, " ").concat(direction);
  var topRightPath = "".concat(cornerRadius.topRight, " ").concat(cornerRadius.topRight, " ").concat(direction);
  var bottomLeftPath = "".concat(cornerRadius.bottomLeft, " ").concat(cornerRadius.bottomLeft, " ").concat(direction);
  var bottomRightPath = "".concat(cornerRadius.bottomRight, " ").concat(cornerRadius.bottomRight, " ").concat(direction);
  var commands = ["M", "A ".concat(bottomLeftPath, ","), "L", "A ".concat(topLeftPath, ","), "L", "A ".concat(topRightPath, ","), "L", "A ".concat(bottomRightPath, ",")];
  var path = commands.reduce(function (acc, command, i) {
    acc += "".concat(command, " ").concat(coords[i].x, ", ").concat(coords[i].y, " \n");
    return acc;
  }, "");
  return "".concat(path, " z");
};

var getVerticalBarPoints = function (position, sign, cr) {
  var x0 = position.x0,
      x1 = position.x1,
      y0 = position.y0,
      y1 = position.y1; // eslint-disable-next-line max-statements, max-len

  var getHalfPoints = function (side) {
    var isLeft = side === "Left";
    var signL = isLeft ? 1 : -1;
    var x = isLeft ? x0 : x1;
    var bottomPoint = {
      x: x + signL * cr["bottom".concat(side)],
      y: y0
    };
    var bottomMiddlePoint = {
      x: x,
      y: y0 - sign * cr["bottom".concat(side)]
    };
    var topMiddlePoint = {
      x: x,
      y: y1 + sign * cr["top".concat(side)]
    };
    var topPoint = {
      x: x + signL * cr["top".concat(side)],
      y: y1
    };
    var hasIntersection = sign === 1 ? y0 - cr["bottom".concat(side)] < y1 + cr["top".concat(side)] : y0 + cr["bottom".concat(side)] > y1 - cr["top".concat(side)];

    if (hasIntersection) {
      var topCenter = point(x + signL * cr["top".concat(side)], y1 + sign * cr["top".concat(side)]);
      var topCircle = circle(topCenter, cr["top".concat(side)]);
      var bottomCenter = point(x + signL * cr["bottom".concat(side)], y0 - sign * cr["bottom".concat(side)]);
      var bottomCircle = circle(bottomCenter, cr["bottom".concat(side)]);
      var circleIntersection = topCircle.intersection(bottomCircle);
      var hasArcIntersection = circleIntersection.length > 0;

      if (hasArcIntersection) {
        var arcIntersection = circleIntersection[isLeft ? 0 : 1];
        bottomMiddlePoint = {
          x: arcIntersection.x,
          y: arcIntersection.y
        };
        topMiddlePoint = {
          x: arcIntersection.x,
          y: arcIntersection.y
        };
      } else {
        var hasBottomLineTopArcIntersection = cr["top".concat(side)] > cr["bottom".concat(side)];

        if (hasBottomLineTopArcIntersection) {
          var newX = topCircle.solveX(y0)[isLeft ? 0 : 1];
          bottomPoint = {
            x: newX,
            y: y0
          };
          bottomMiddlePoint = {
            x: newX,
            y: y0
          };
          topMiddlePoint = {
            x: newX,
            y: y0
          };
        } else {
          var _newX = bottomCircle.solveX(y1)[isLeft ? 0 : 1];
          bottomMiddlePoint = {
            x: _newX,
            y: y1
          };
          topMiddlePoint = {
            x: _newX,
            y: y1
          };
          topPoint = {
            x: _newX,
            y: y1
          };
        }
      }
    }

    var points = [bottomPoint, bottomMiddlePoint, topMiddlePoint, topPoint];
    return isLeft ? points : points.reverse();
  };

  return getHalfPoints("Left").concat(getHalfPoints("Right"));
};

var getHorizontalBarPoints = function (position, sign, cr) {
  var y0 = position.y0,
      y1 = position.y1;
  var x0 = position.x0 < position.x1 ? position.x0 : position.x1;
  var x1 = position.x0 < position.x1 ? position.x1 : position.x0; // eslint-disable-next-line max-statements, max-len

  var getHalfPoints = function (side) {
    var isTop = side === "top";
    var signL = isTop ? -1 : 1;
    var y = isTop ? y1 : y0;
    var leftPoint = {
      x: x0,
      y: y - signL * cr["".concat(side, "Left")]
    };
    var leftMiddlePoint = {
      x: x0 + cr["".concat(side, "Left")],
      y: y
    };
    var rightMiddlePoint = {
      x: x1 - cr["".concat(side, "Right")],
      y: y
    };
    var rightPoint = {
      x: x1,
      y: y - signL * cr["".concat(side, "Right")]
    };
    var hasIntersection = leftMiddlePoint.x > rightMiddlePoint.x;

    if (hasIntersection) {
      var leftCenter = point(x0 + cr["".concat(side, "Left")], y - signL * cr["".concat(side, "Left")]);
      var leftCircle = circle(leftCenter, cr["".concat(side, "Left")]);
      var rightCenter = point(x1 - cr["".concat(side, "Right")], y - signL * cr["".concat(side, "Right")]);
      var rightCircle = circle(rightCenter, cr["".concat(side, "Right")]);
      var circleIntersection = leftCircle.intersection(rightCircle);
      var hasArcIntersection = circleIntersection.length > 0;

      if (hasArcIntersection) {
        var arcIntersection = circleIntersection[sign > 0 ? 1 : 0];
        leftMiddlePoint = {
          x: arcIntersection.x,
          y: arcIntersection.y
        };
        rightMiddlePoint = {
          x: arcIntersection.x,
          y: arcIntersection.y
        };
      } else {
        var hasLeftLineRightArcIntersection = cr["".concat(side, "Right")] > cr["".concat(side, "Left")];

        if (hasLeftLineRightArcIntersection) {
          var newY = rightCircle.solveY(x0)[isTop ? 0 : 1];
          leftPoint = {
            x: x0,
            y: newY
          };
          leftMiddlePoint = {
            x: x0,
            y: newY
          };
          rightMiddlePoint = {
            x: x0,
            y: newY
          };
        } else {
          var _newY = leftCircle.solveY(x1)[isTop ? 0 : 1];
          rightPoint = {
            x: x1,
            y: _newY
          };
          rightMiddlePoint = {
            x: x1,
            y: _newY
          };
          leftMiddlePoint = {
            x: x1,
            y: _newY
          };
        }
      }
    }

    return [leftPoint, leftMiddlePoint, rightMiddlePoint, rightPoint];
  };

  var topPoints = getHalfPoints("top");
  var bottomPoints = getHalfPoints("bottom"); // eslint-disable-next-line no-magic-numbers

  return [bottomPoints[1], bottomPoints[0]].concat(_toConsumableArray$2(topPoints), [bottomPoints[3], bottomPoints[2]]);
}; // eslint-disable-next-line max-params


var getVerticalBarPath = function (props, width, cornerRadius) {
  var position = getPosition(props, width);
  var sign = position.y0 > position.y1 ? 1 : -1;
  var direction = sign > 0 ? "0 0 1" : "0 0 0";
  var points = getVerticalBarPoints(position, sign, cornerRadius);
  return mapPointsToPath(points, cornerRadius, direction);
}; // eslint-disable-next-line max-params

var getHorizontalBarPath = function (props, width, cornerRadius) {
  var position = getPosition(props, width);
  var sign = position.x0 < position.x1 ? 1 : -1;
  var direction = "0 0 1";
  var cr = {
    topRight: sign > 0 ? cornerRadius.topLeft : cornerRadius.bottomLeft,
    bottomRight: sign > 0 ? cornerRadius.topRight : cornerRadius.bottomRight,
    bottomLeft: sign > 0 ? cornerRadius.bottomRight : cornerRadius.topRight,
    topLeft: sign > 0 ? cornerRadius.bottomLeft : cornerRadius.topLeft
  };
  var points = getHorizontalBarPoints(position, sign, cr);
  return mapPointsToPath(points, cr, direction);
};
var getVerticalPolarBarPath = function (props, cornerRadius) {
  var datum = props.datum,
      scale = props.scale,
      index = props.index,
      alignment = props.alignment,
      style = props.style;
  var r1 = scale.y(datum._y0 || 0);
  var r2 = scale.y(datum._y1 !== undefined ? datum._y1 : datum._y);
  var currentAngle = scale.x(datum._x1 !== undefined ? datum._x1 : datum._x);
  var start;
  var end;

  if (style.width) {
    var width = getAngularWidth(props, style.width);
    var size = alignment === "middle" ? width / 2 : width;
    start = alignment === "start" ? currentAngle : currentAngle - size;
    end = alignment === "end" ? currentAngle : currentAngle + size;
  } else {
    start = getStartAngle(props, index);
    end = getEndAngle(props, index);
  }

  var getPath = function (edge) {
    var pathFunction = arc().innerRadius(r1).outerRadius(r2).startAngle(transformAngle(start)).endAngle(transformAngle(end)).cornerRadius(cornerRadius[edge]);
    return pathFunction();
  };

  var getPathData = function (edge) {
    var rightPath = getPath("".concat(edge, "Right"));
    var rightMoves = rightPath.match(/[A-Z]/g);
    var rightCoords = rightPath.split(/[A-Z]/).slice(1);
    var rightMiddle = rightMoves.indexOf("L");
    var leftPath = getPath("".concat(edge, "Left"));
    var leftMoves = leftPath.match(/[A-Z]/g);
    var leftCoords = leftPath.split(/[A-Z]/).slice(1);
    var leftMiddle = leftMoves.indexOf("L");
    return {
      rightMoves: rightMoves,
      rightCoords: rightCoords,
      rightMiddle: rightMiddle,
      leftMoves: leftMoves,
      leftCoords: leftCoords,
      leftMiddle: leftMiddle
    };
  }; // eslint-disable-next-line max-statements


  var getTopPath = function () {
    var topRight = cornerRadius.topRight,
        topLeft = cornerRadius.topLeft;
    var arcLength = r2 * Math.abs(end - start);

    var _getPathData = getPathData("top"),
        rightMoves = _getPathData.rightMoves,
        rightCoords = _getPathData.rightCoords,
        rightMiddle = _getPathData.rightMiddle,
        leftMoves = _getPathData.leftMoves,
        leftCoords = _getPathData.leftCoords,
        leftMiddle = _getPathData.leftMiddle;

    var moves;
    var coords;

    if (topRight === topLeft || arcLength < 2 * topRight + 2 * topLeft) {
      moves = topRight > topLeft ? rightMoves : leftMoves;
      coords = topRight > topLeft ? rightCoords : leftCoords;
    } else {
      // eslint-disable-next-line no-magic-numbers
      var isShort = function (middle) {
        return middle < 3;
      };

      var rightOffset = topLeft > topRight && isShort(rightMiddle) ? 1 : 2;
      var leftOffset;

      if (topRight > topLeft) {
        var defaultOffset = isShort(rightMiddle) ? leftMiddle : leftMiddle - 2;
        leftOffset = isShort(leftMiddle) ? leftMiddle - 1 : defaultOffset;
      } else {
        var _defaultOffset = isShort(leftMiddle) ? 1 : 2;

        leftOffset = isShort(rightMiddle) ? _defaultOffset : leftMiddle - 2;
      }

      moves = _toConsumableArray$2(rightMoves.slice(0, rightOffset)).concat(_toConsumableArray$2(leftMoves.slice(leftOffset)));
      coords = _toConsumableArray$2(rightCoords.slice(0, rightOffset)).concat(_toConsumableArray$2(leftCoords.slice(leftOffset)));
    }

    var middle = moves.indexOf("L");
    var subMoves = moves.slice(0, middle);
    var subCoords = coords.slice(0, middle);
    return subMoves.map(function (m, i) {
      return {
        command: m,
        coords: subCoords[i].split(",")
      };
    });
  }; // eslint-disable-next-line max-statements


  var getBottomPath = function () {
    var bottomRight = cornerRadius.bottomRight,
        bottomLeft = cornerRadius.bottomLeft;
    var arcLength = r1 * Math.abs(end - start);

    var _getPathData2 = getPathData("bottom"),
        rightMoves = _getPathData2.rightMoves,
        rightCoords = _getPathData2.rightCoords,
        rightMiddle = _getPathData2.rightMiddle,
        leftMoves = _getPathData2.leftMoves,
        leftCoords = _getPathData2.leftCoords,
        leftMiddle = _getPathData2.leftMiddle;

    var moves;
    var coords;

    if (bottomRight === bottomLeft || arcLength < 2 * bottomRight + 2 * bottomLeft) {
      moves = bottomRight > bottomLeft ? rightMoves : leftMoves;
      coords = bottomRight > bottomLeft ? rightCoords : leftCoords;
    } else {
      // eslint-disable-next-line no-magic-numbers
      var isShort = function (m, middle) {
        return m.length - middle < 4;
      };

      var shortPath = bottomRight > bottomLeft ? isShort(rightMoves, rightMiddle) : isShort(leftMoves, leftMiddle); // eslint-disable-next-line no-magic-numbers

      var rightOffset = shortPath ? -1 : -3;
      moves = _toConsumableArray$2(leftMoves.slice(0, leftMiddle + 2)).concat(_toConsumableArray$2(rightMoves.slice(rightOffset)));
      coords = _toConsumableArray$2(leftCoords.slice(0, leftMiddle + 2)).concat(_toConsumableArray$2(rightCoords.slice(rightOffset)));
    }

    var middle = moves.indexOf("L");
    var subMoves = moves.slice(middle, -1);
    var subCoords = coords.slice(middle, -1);
    return subMoves.map(function (m, i) {
      return {
        command: m,
        coords: subCoords[i].split(",")
      };
    });
  };

  var topPath = getTopPath();
  var bottomPath = getBottomPath();

  var moves = _toConsumableArray$2(topPath).concat(_toConsumableArray$2(bottomPath));

  var path = moves.reduce(function (memo, move) {
    memo += "".concat(move.command, " ").concat(move.coords.join());
    return memo;
  }, "");
  return "".concat(path, " z");
};

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getBarPath = function (props, width, cornerRadius) {
  if (props.getPath) {
    return getCustomBarPath(props, width);
  }

  return props.horizontal ? getHorizontalBarPath(props, width, cornerRadius) : getVerticalBarPath(props, width, cornerRadius);
};

var getPolarBarPath = function (props, cornerRadius) {
  // TODO Radial bars
  return getVerticalPolarBarPath(props, cornerRadius);
};

var getBarWidth = function (barWidth, props) {
  var scale = props.scale,
      data = props.data,
      defaultBarWidth = props.defaultBarWidth,
      style = props.style;

  if (barWidth) {
    return Helpers.evaluateProp(barWidth, props);
  } else if (style.width) {
    return style.width;
  }

  var range = scale.x.range();
  var extent = Math.abs(range[1] - range[0]);
  var bars = data.length + 2;
  var barRatio = props.barRatio || 0.5;
  var defaultWidth = barRatio * (data.length < 2 ? defaultBarWidth : extent / bars);
  return Math.max(1, defaultWidth);
};

var getCornerRadiusFromObject = function (cornerRadius, props) {
  var realCornerRadius = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  };

  var updateCornerRadius = function (corner, fallback) {
    if (!isNil_1(cornerRadius[corner])) {
      realCornerRadius[corner] = Helpers.evaluateProp(cornerRadius[corner], props);
    } else if (!isNil_1(cornerRadius[fallback])) {
      realCornerRadius[corner] = Helpers.evaluateProp(cornerRadius[fallback], props);
    }
  };

  updateCornerRadius("topLeft", "top");
  updateCornerRadius("topRight", "top");
  updateCornerRadius("bottomLeft", "bottom");
  updateCornerRadius("bottomRight", "bottom");
  return realCornerRadius;
};

var getCornerRadius = function (cornerRadius, props) {
  var realCornerRadius = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  };

  if (!cornerRadius) {
    return realCornerRadius;
  }

  if (isPlainObject_1(cornerRadius)) {
    return getCornerRadiusFromObject(cornerRadius, props);
  } else {
    realCornerRadius.topLeft = Helpers.evaluateProp(cornerRadius, props);
    realCornerRadius.topRight = Helpers.evaluateProp(cornerRadius, props);
    return realCornerRadius;
  }
};

var getStyle = function () {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 ? arguments[1] : undefined;
  var stroke = style.fill || "black";
  var baseStyle = {
    fill: "black",
    stroke: stroke
  };
  return Helpers.evaluateStyle(assign_1(baseStyle, style), props);
};

var evaluateProps = function (props) {
  /**
   * Potential evaluated props of following must be evaluated in this order:
   * 1) `style`
   * 2) `barWidth`
   * 3) `cornerRadius`
   *
   * Everything else does not have to be evaluated in a particular order:
   * `ariaLabel`
   * `desc`
   * `id`
   * `tabIndex`
   */
  var style = getStyle(props.style, props);
  var barWidth = getBarWidth(props.barWidth, assign_1({}, props, {
    style: style
  }));
  var cornerRadius = getCornerRadius(props.cornerRadius, assign_1({}, props, {
    style: style,
    barWidth: barWidth
  }));
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return assign_1({}, props, {
    ariaLabel: ariaLabel,
    style: style,
    barWidth: barWidth,
    cornerRadius: cornerRadius,
    desc: desc,
    id: id,
    tabIndex: tabIndex
  });
};

var Bar = function (props) {
  props = evaluateProps(props);
  var _props = props,
      polar = _props.polar,
      origin = _props.origin,
      style = _props.style,
      barWidth = _props.barWidth,
      cornerRadius = _props.cornerRadius;
  var path = polar ? getPolarBarPath(props, cornerRadius) : getBarPath(props, barWidth, cornerRadius);
  var defaultTransform = polar && origin ? "translate(".concat(origin.x, ", ").concat(origin.y, ")") : undefined;
  return react.cloneElement(props.pathComponent, _objectSpread$2({}, props.events, {
    "aria-label": props.ariaLabel,
    style: style,
    d: path,
    className: props.className,
    clipPath: props.clipPath,
    desc: props.desc,
    index: props.index,
    role: props.role,
    shapeRendering: props.shapeRendering,
    transform: props.transform || defaultTransform,
    tabIndex: props.tabIndex
  }));
};

Bar.propTypes = _objectSpread$2({}, CommonProps.primitiveProps, {
  alignment: propTypes.oneOf(["start", "middle", "end"]),
  barRatio: propTypes.number,
  barWidth: propTypes.oneOfType([propTypes.number, propTypes.func]),
  cornerRadius: propTypes.oneOfType([propTypes.number, propTypes.func, propTypes.shape({
    top: propTypes.oneOfType([propTypes.number, propTypes.func]),
    topLeft: propTypes.oneOfType([propTypes.number, propTypes.func]),
    topRight: propTypes.oneOfType([propTypes.number, propTypes.func]),
    bottom: propTypes.oneOfType([propTypes.number, propTypes.func]),
    bottomLeft: propTypes.oneOfType([propTypes.number, propTypes.func]),
    bottomRight: propTypes.oneOfType([propTypes.number, propTypes.func])
  })]),
  datum: propTypes.object,
  getPath: propTypes.func,
  horizontal: propTypes.bool,
  pathComponent: propTypes.element,
  width: propTypes.number,
  x: propTypes.number,
  y: propTypes.number,
  y0: propTypes.number
});
Bar.defaultProps = {
  defaultBarWidth: 8,
  pathComponent: react.createElement(Path$1, null),
  role: "presentation",
  shapeRendering: "auto"
};

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var fallbackProps$1 = {
  width: 450,
  height: 300,
  padding: 50
};
var defaultData = [{
  x: 1,
  y: 1
}, {
  x: 2,
  y: 2
}, {
  x: 3,
  y: 3
}, {
  x: 4,
  y: 4
}];

var VictoryBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(VictoryBar, _React$Component);

  function VictoryBar() {
    _classCallCheck$1(this, VictoryBar);

    return _possibleConstructorReturn$1(this, (VictoryBar.__proto__ || Object.getPrototypeOf(VictoryBar)).apply(this, arguments));
  }

  _createClass$1(VictoryBar, [{
    key: "shouldAnimate",
    // Overridden in native versions
    value: function shouldAnimate() {
      return !!this.props.animate;
    }
  }, {
    key: "render",
    value: function render() {
      var animationWhitelist = VictoryBar.animationWhitelist,
          role = VictoryBar.role;
      var props = Helpers.modifyProps(this.props, fallbackProps$1, role);

      if (this.shouldAnimate()) {
        return this.animateComponent(props, animationWhitelist);
      }

      var children = this.renderData(props);
      return props.standalone ? this.renderContainer(props.containerComponent, children) : children;
    }
  }]);

  return VictoryBar;
}(react.Component);

Object.defineProperty(VictoryBar, "animationWhitelist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["data", "domain", "height", "padding", "style", "width"]
});
Object.defineProperty(VictoryBar, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryBar"
});
Object.defineProperty(VictoryBar, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "bar"
});
Object.defineProperty(VictoryBar, "defaultTransitions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onLoad: {
      duration: 2000,
      before: function () {
        return {
          _y: 0,
          _y1: 0,
          _y0: 0
        };
      },
      after: function (datum) {
        return {
          _y: datum._y,
          _y1: datum._y1,
          _y0: datum._y0
        };
      }
    },
    onExit: {
      duration: 500,
      before: function () {
        return {
          _y: 0,
          yOffset: 0
        };
      }
    },
    onEnter: {
      duration: 500,
      before: function () {
        return {
          _y: 0,
          _y1: 0,
          _y0: 0
        };
      },
      after: function (datum) {
        return {
          _y: datum._y,
          _y1: datum._y1,
          _y0: datum._y0
        };
      }
    }
  }
});
Object.defineProperty(VictoryBar, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread$1({}, CommonProps.baseProps, CommonProps.dataProps, {
    alignment: propTypes.oneOf(["start", "middle", "end"]),
    barRatio: propTypes.number,
    barWidth: propTypes.oneOfType([propTypes.number, propTypes.func]),
    cornerRadius: propTypes.oneOfType([propTypes.number, propTypes.func, propTypes.shape({
      top: propTypes.oneOfType([propTypes.number, propTypes.func]),
      topLeft: propTypes.oneOfType([propTypes.number, propTypes.func]),
      topRight: propTypes.oneOfType([propTypes.number, propTypes.func]),
      bottom: propTypes.oneOfType([propTypes.number, propTypes.func]),
      bottomLeft: propTypes.oneOfType([propTypes.number, propTypes.func]),
      bottomRight: propTypes.oneOfType([propTypes.number, propTypes.func])
    })]),
    getPath: propTypes.func,
    horizontal: propTypes.bool
  })
});
Object.defineProperty(VictoryBar, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    containerComponent: react.createElement(VictoryContainer, null),
    data: defaultData,
    dataComponent: react.createElement(Bar, null),
    groupComponent: react.createElement("g", {
      role: "presentation"
    }),
    labelComponent: react.createElement(VictoryLabel, null),
    samples: 50,
    sortOrder: "ascending",
    standalone: true,
    theme: VictoryTheme.grayscale
  }
});
Object.defineProperty(VictoryBar, "getDomain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Domain.getDomainWithZero
});
Object.defineProperty(VictoryBar, "getData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: Data.getData
});
Object.defineProperty(VictoryBar, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getBaseProps$1(props, fallbackProps$1);
  }
});
Object.defineProperty(VictoryBar, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["dataComponent", "labelComponent", "groupComponent", "containerComponent"]
});
var victoryBar = addEvents(VictoryBar);

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

var _baseSum = baseSum;

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return (array && array.length)
    ? _baseSum(array, identity_1)
    : 0;
}

var sum_1 = sum;

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$1(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getColorScale = function (props) {
  var colorScale = props.colorScale;
  return typeof colorScale === "string" ? Style.getColorScale(colorScale) : colorScale || [];
};

var getLabelStyles = function (props) {
  var data = props.data,
      style = props.style;
  return data.map(function (datum, index) {
    var baseLabelStyles = defaults_1({}, datum.labels, style.labels);

    return Helpers.evaluateStyle(baseLabelStyles, {
      datum: datum,
      index: index,
      data: data
    });
  });
};

var getStyles = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "100%",
    width: "100%"
  };
  return {
    parent: defaults_1(style.parent, styleObject.parent, parentStyleProps),
    data: defaults_1({}, style.data, styleObject.data),
    labels: defaults_1({}, style.labels, styleObject.labels),
    border: defaults_1({}, style.border, styleObject.border),
    title: defaults_1({}, style.title, styleObject.title)
  };
};

var getCalculatedValues = function (props) {
  var orientation = props.orientation,
      theme = props.theme;
  var defaultStyles = theme && theme.legend && theme.legend.style ? theme.legend.style : {};
  var style = getStyles(props, defaultStyles);
  var colorScale = getColorScale(props);
  var isHorizontal = orientation === "horizontal";
  var borderPadding = Helpers.getPadding({
    padding: props.borderPadding
  });
  return assign_1({}, props, {
    style: style,
    isHorizontal: isHorizontal,
    colorScale: colorScale,
    borderPadding: borderPadding
  });
};

var getColumn = function (props, index) {
  var itemsPerRow = props.itemsPerRow,
      isHorizontal = props.isHorizontal;

  if (!itemsPerRow) {
    return isHorizontal ? index : 0;
  }

  return isHorizontal ? index % itemsPerRow : Math.floor(index / itemsPerRow);
};

var getRow = function (props, index) {
  var itemsPerRow = props.itemsPerRow,
      isHorizontal = props.isHorizontal;

  if (!itemsPerRow) {
    return isHorizontal ? 0 : index;
  }

  return isHorizontal ? Math.floor(index / itemsPerRow) : index % itemsPerRow;
};

var groupData = function (props) {
  var data = props.data;
  var style = props.style && props.style.data || {};
  var labelStyles = getLabelStyles(props);
  return data.map(function (datum, index) {
    var symbol = datum.symbol || {};
    var fontSize = labelStyles[index].fontSize; // eslint-disable-next-line no-magic-numbers

    var size = symbol.size || style.size || fontSize / 2.5;
    var symbolSpacer = props.symbolSpacer || Math.max(size, fontSize);
    return _objectSpread({}, datum, {
      size: size,
      symbolSpacer: symbolSpacer,
      fontSize: fontSize,
      textSize: TextSize.approximateTextSize(datum.name, labelStyles[index]),
      column: getColumn(props, index),
      row: getRow(props, index)
    });
  });
};

var getColumnWidths = function (props, data) {
  var gutter = props.gutter || {};
  var gutterWidth = typeof gutter === "object" ? (gutter.left || 0) + (gutter.right || 0) : gutter || 0;

  var dataByColumn = groupBy_1(data, "column");

  var columns = keys_1(dataByColumn);

  return columns.reduce(function (memo, curr, index) {
    var lengths = dataByColumn[curr].map(function (d) {
      return d.textSize.width + d.size + d.symbolSpacer + gutterWidth;
    });
    memo[index] = Math.max.apply(Math, _toConsumableArray$1(lengths));
    return memo;
  }, []);
};

var getRowHeights = function (props, data) {
  var gutter = props.rowGutter || {};
  var gutterHeight = typeof gutter === "object" ? (gutter.top || 0) + (gutter.bottom || 0) : gutter || 0;

  var dataByRow = groupBy_1(data, "row");

  return keys_1(dataByRow).reduce(function (memo, curr, index) {
    var rows = dataByRow[curr];
    var lengths = rows.map(function (d) {
      return d.textSize.height + d.symbolSpacer + gutterHeight;
    });
    memo[index] = Math.max.apply(Math, _toConsumableArray$1(lengths));
    return memo;
  }, []);
};

var getTitleDimensions = function (props) {
  var style = props.style && props.style.title || {};
  var textSize = TextSize.approximateTextSize(props.title, style);
  var padding = style.padding || 0;
  return {
    height: textSize.height + 2 * padding || 0,
    width: textSize.width + 2 * padding || 0
  };
};

var getOffset = function (datum, rowHeights, columnWidths) {
  var column = datum.column,
      row = datum.row;
  return {
    x: range_1(column).reduce(function (memo, curr) {
      memo += columnWidths[curr];
      return memo;
    }, 0),
    y: range_1(row).reduce(function (memo, curr) {
      memo += rowHeights[curr];
      return memo;
    }, 0)
  };
};

var getAnchors = function (titleOrientation, centerTitle) {
  var standardAnchors = {
    textAnchor: titleOrientation === "right" ? "end" : "start",
    verticalAnchor: titleOrientation === "bottom" ? "end" : "start"
  };

  if (centerTitle) {
    var horizontal = titleOrientation === "top" || titleOrientation === "bottom";
    return {
      textAnchor: horizontal ? "middle" : standardAnchors.textAnchor,
      verticalAnchor: horizontal ? standardAnchors.verticalAnchor : "middle"
    };
  } else {
    return standardAnchors;
  }
};

var getTitleStyle = function (props) {
  var titleOrientation = props.titleOrientation,
      centerTitle = props.centerTitle,
      titleComponent = props.titleComponent;
  var baseStyle = props.style && props.style.title || {};
  var componentStyle = titleComponent.props && titleComponent.props.style || {};
  var anchors = getAnchors(titleOrientation, centerTitle);
  return Array.isArray(componentStyle) ? componentStyle.map(function (obj) {
    return defaults_1({}, obj, baseStyle, anchors);
  }) : defaults_1({}, componentStyle, baseStyle, anchors);
}; // eslint-disable-next-line complexity


var getTitleProps = function (props, borderProps) {
  var title = props.title,
      titleOrientation = props.titleOrientation,
      centerTitle = props.centerTitle,
      borderPadding = props.borderPadding;
  var height = borderProps.height,
      width = borderProps.width;
  var style = getTitleStyle(props);
  var padding = Array.isArray(style) ? style[0].padding : style.padding;
  var horizontal = titleOrientation === "top" || titleOrientation === "bottom";
  var xOrientation = titleOrientation === "bottom" ? "bottom" : "top";
  var yOrientation = titleOrientation === "right" ? "right" : "left";
  var standardPadding = {
    x: centerTitle ? width / 2 : borderPadding[xOrientation] + (padding || 0),
    y: centerTitle ? height / 2 : borderPadding[yOrientation] + (padding || 0)
  };

  var getPadding = function () {
    return borderPadding[titleOrientation] + (padding || 0);
  };

  var xOffset = horizontal ? standardPadding.x : getPadding();
  var yOffset = horizontal ? getPadding() : standardPadding.y;
  return {
    x: titleOrientation === "right" ? props.x + width - xOffset : props.x + xOffset,
    y: titleOrientation === "bottom" ? props.y + height - yOffset : props.y + yOffset,
    style: style,
    text: title
  };
};

var getBorderProps = function (props, contentHeight, contentWidth) {
  var x = props.x,
      y = props.y,
      borderPadding = props.borderPadding,
      style = props.style;
  var height = (contentHeight || 0) + borderPadding.top + borderPadding.bottom;
  var width = (contentWidth || 0) + borderPadding.left + borderPadding.right;
  return {
    x: x,
    y: y,
    height: height,
    width: width,
    style: assign_1({
      fill: "none"
    }, style.border)
  };
};

var getDimensions = function (props, fallbackProps) {
  var modifiedProps = Helpers.modifyProps(props, fallbackProps, "legend");
  props = assign_1({}, modifiedProps, getCalculatedValues(modifiedProps));
  var _props = props,
      title = _props.title,
      titleOrientation = _props.titleOrientation;
  var groupedData = groupData(props);
  var columnWidths = getColumnWidths(props, groupedData);
  var rowHeights = getRowHeights(props, groupedData);
  var titleDimensions = title ? getTitleDimensions(props) : {
    height: 0,
    width: 0
  };
  return {
    height: titleOrientation === "left" || titleOrientation === "right" ? Math.max(sum_1(rowHeights), titleDimensions.height) : sum_1(rowHeights) + titleDimensions.height,
    width: titleOrientation === "left" || titleOrientation === "right" ? sum_1(columnWidths) + titleDimensions.width : Math.max(sum_1(columnWidths), titleDimensions.width)
  };
};

var getBaseProps = function (props, fallbackProps) {
  var modifiedProps = Helpers.modifyProps(props, fallbackProps, "legend");
  props = assign_1({}, modifiedProps, getCalculatedValues(modifiedProps));
  var _props2 = props,
      data = _props2.data,
      standalone = _props2.standalone,
      theme = _props2.theme,
      padding = _props2.padding,
      style = _props2.style,
      colorScale = _props2.colorScale,
      gutter = _props2.gutter,
      rowGutter = _props2.rowGutter,
      borderPadding = _props2.borderPadding,
      title = _props2.title,
      titleOrientation = _props2.titleOrientation,
      name = _props2.name,
      _props2$x = _props2.x,
      x = _props2$x === void 0 ? 0 : _props2$x,
      _props2$y = _props2.y,
      y = _props2$y === void 0 ? 0 : _props2$y;
  var groupedData = groupData(props);
  var columnWidths = getColumnWidths(props, groupedData);
  var rowHeights = getRowHeights(props, groupedData);
  var labelStyles = getLabelStyles(props);
  var titleDimensions = title ? getTitleDimensions(props) : {
    height: 0,
    width: 0
  };
  var titleOffset = {
    x: titleOrientation === "left" ? titleDimensions.width : 0,
    y: titleOrientation === "top" ? titleDimensions.height : 0
  };
  var gutterOffset = {
    x: gutter && typeof gutter === "object" ? gutter.left || 0 : 0,
    y: rowGutter && typeof rowGutter === "object" ? rowGutter.top || 0 : 0
  };

  var _getDimensions = getDimensions(props, fallbackProps),
      height = _getDimensions.height,
      width = _getDimensions.width;

  var borderProps = getBorderProps(props, height, width);
  var titleProps = getTitleProps(props, borderProps);
  var initialProps = {
    parent: {
      data: data,
      standalone: standalone,
      theme: theme,
      padding: padding,
      name: name,
      height: props.height,
      width: props.width,
      style: style.parent
    },
    all: {
      border: borderProps,
      title: titleProps
    }
  };
  return groupedData.reduce(function (childProps, datum, i) {
    var color = colorScale[i % colorScale.length];

    var dataStyle = defaults_1({}, datum.symbol, style.data, {
      fill: color
    });

    var eventKey = !isNil_1(datum.eventKey) ? datum.eventKey : i;
    var offset = getOffset(datum, rowHeights, columnWidths);
    var originY = y + borderPadding.top + datum.symbolSpacer;
    var originX = x + borderPadding.left + datum.symbolSpacer;
    var dataProps = {
      index: i,
      data: data,
      datum: datum,
      symbol: dataStyle.type || dataStyle.symbol || "circle",
      size: datum.size,
      style: dataStyle,
      y: originY + offset.y + titleOffset.y + gutterOffset.y,
      x: originX + offset.x + titleOffset.x + gutterOffset.x
    };
    var labelProps = {
      datum: datum,
      data: data,
      text: datum.name,
      style: labelStyles[i],
      y: dataProps.y,
      x: dataProps.x + datum.symbolSpacer + datum.size / 2
    };
    childProps[eventKey] = {
      data: dataProps,
      labels: labelProps
    };
    return childProps;
  }, initialProps);
};

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var fallbackProps = {
  orientation: "vertical",
  titleOrientation: "top",
  width: 450,
  height: 300,
  x: 0,
  y: 0
};
var defaultLegendData = [{
  name: "Series 1"
}, {
  name: "Series 2"
}];

var VictoryLegend =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryLegend, _React$Component);

  function VictoryLegend() {
    _classCallCheck(this, VictoryLegend);

    return _possibleConstructorReturn(this, (VictoryLegend.__proto__ || Object.getPrototypeOf(VictoryLegend)).apply(this, arguments));
  }

  _createClass(VictoryLegend, [{
    key: "renderChildren",
    value: function renderChildren(props) {
      var _this = this;

      var dataComponent = props.dataComponent,
          labelComponent = props.labelComponent,
          title = props.title;
      var dataComponents = this.dataKeys.map(function (_dataKey, index) {
        if (_dataKey === "all") {
          return undefined;
        }

        var dataProps = _this.getComponentProps(dataComponent, "data", index);

        return react.cloneElement(dataComponent, dataProps);
      }).filter(Boolean);
      var labelComponents = this.dataKeys.map(function (_dataKey, index) {
        if (_dataKey === "all") {
          return undefined;
        }

        var labelProps = _this.getComponentProps(labelComponent, "labels", index);

        if (labelProps.text !== undefined && labelProps.text !== null) {
          return react.cloneElement(labelComponent, labelProps);
        }

        return undefined;
      }).filter(Boolean);
      var borderProps = this.getComponentProps(props.borderComponent, "border", "all");
      var borderComponent = react.cloneElement(props.borderComponent, borderProps);

      if (title) {
        var titleProps = this.getComponentProps(props.title, "title", "all");
        var titleComponent = react.cloneElement(props.titleComponent, titleProps);
        return [borderComponent].concat(_toConsumableArray(dataComponents), [titleComponent], _toConsumableArray(labelComponents));
      }

      return [borderComponent].concat(_toConsumableArray(dataComponents), _toConsumableArray(labelComponents));
    }
  }, {
    key: "render",
    value: function render() {
      var role = this.constructor.role;
      var props = Helpers.modifyProps(this.props, fallbackProps, role);
      var children = [this.renderChildren(props)];
      return props.standalone ? this.renderContainer(props.containerComponent, children) : react.cloneElement(props.groupComponent, {}, children);
    }
  }]);

  return VictoryLegend;
}(react.Component);

Object.defineProperty(VictoryLegend, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryLegend"
});
Object.defineProperty(VictoryLegend, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "legend"
});
Object.defineProperty(VictoryLegend, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    borderComponent: propTypes.element,
    borderPadding: propTypes.oneOfType([propTypes.number, propTypes.shape({
      top: propTypes.number,
      bottom: propTypes.number,
      left: propTypes.number,
      right: propTypes.number
    })]),
    centerTitle: propTypes.bool,
    colorScale: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
    containerComponent: propTypes.element,
    data: propTypes.arrayOf(propTypes.shape({
      name: propTypes.string.isRequired,
      label: propTypes.object,
      symbol: propTypes.object
    })),
    dataComponent: propTypes.element,
    eventKey: propTypes.oneOfType([propTypes.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
    events: propTypes.arrayOf(propTypes.shape({
      target: propTypes.oneOf(["data", "labels", "parent"]),
      eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
      eventHandlers: propTypes.object
    })),
    externalEventMutations: propTypes.arrayOf(propTypes.shape({
      callback: propTypes.function,
      childName: propTypes.oneOfType([propTypes.string, propTypes.array]),
      eventKey: propTypes.oneOfType([propTypes.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), propTypes.string]),
      mutation: propTypes.function,
      target: propTypes.oneOfType([propTypes.string, propTypes.array])
    })),
    groupComponent: propTypes.element,
    gutter: propTypes.oneOfType([propTypes.number, propTypes.shape({
      left: propTypes.number,
      right: propTypes.number
    })]),
    height: CustomPropTypes.nonNegative,
    itemsPerRow: CustomPropTypes.nonNegative,
    labelComponent: propTypes.element,
    name: propTypes.string,
    orientation: propTypes.oneOf(["horizontal", "vertical"]),
    padding: propTypes.oneOfType([propTypes.number, propTypes.shape({
      top: propTypes.number,
      bottom: propTypes.number,
      left: propTypes.number,
      right: propTypes.number
    })]),
    rowGutter: propTypes.oneOfType([propTypes.number, propTypes.shape({
      top: propTypes.number,
      bottom: propTypes.number
    })]),
    sharedEvents: propTypes.shape({
      events: propTypes.array,
      getEventState: propTypes.func
    }),
    standalone: propTypes.bool,
    style: propTypes.shape({
      border: propTypes.object,
      data: propTypes.object,
      labels: propTypes.object,
      parent: propTypes.object,
      title: propTypes.object
    }),
    symbolSpacer: propTypes.number,
    theme: propTypes.object,
    title: propTypes.oneOfType([propTypes.string, propTypes.array]),
    titleComponent: propTypes.element,
    titleOrientation: propTypes.oneOf(["top", "bottom", "left", "right"]),
    width: CustomPropTypes.nonNegative,
    x: CustomPropTypes.nonNegative,
    y: CustomPropTypes.nonNegative
  }
});
Object.defineProperty(VictoryLegend, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    borderComponent: react.createElement(Border, null),
    data: defaultLegendData,
    containerComponent: react.createElement(VictoryContainer, null),
    dataComponent: react.createElement(Point, null),
    groupComponent: react.createElement("g", null),
    labelComponent: react.createElement(VictoryLabel, null),
    standalone: true,
    theme: VictoryTheme.grayscale,
    titleComponent: react.createElement(VictoryLabel, null)
  }
});
Object.defineProperty(VictoryLegend, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getBaseProps(props, fallbackProps);
  }
});
Object.defineProperty(VictoryLegend, "getDimensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return getDimensions(props, fallbackProps);
  }
});
Object.defineProperty(VictoryLegend, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["borderComponent", "containerComponent", "dataComponent", "groupComponent", "labelComponent", "titleComponent"]
});
var victoryLegend = addEvents(VictoryLegend);

export { VictoryAxis$1 as VictoryAxis, victoryBar as VictoryBar, VictoryChart, victoryLegend as VictoryLegend, VictoryStack };
