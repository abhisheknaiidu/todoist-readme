module.exports =
/******/ (function (modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
        /******/
} finally {
/******/ 			if (threw) delete installedModules[moduleId];
        /******/
}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
      /******/
};
/******/ 	// initialize runtime
/******/ 	runtime(__webpack_require__);
/******/
/******/ 	// run startup
/******/ 	return startup();
    /******/
})
/************************************************************************/
/******/({

/***/ 2:
/***/ (function (__unusedmodule, exports) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports.default = _default;

      /***/
}),

/***/ 7:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Never = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'never' };
      /**
       * Validates nothing (unknown fails).
       */
      exports.Never = (0, runtype_1.create)(util_1.FAILURE.NOTHING_EXPECTED, self);


      /***/
}),

/***/ 13:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __values = (this && this.__values) || function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Intersect = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      /**
       * Construct an intersection runtype from runtypes for its alternatives.
       */
      function Intersect() {
        var intersectees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          intersectees[_i] = arguments[_i];
        }
        var self = { tag: 'intersect', intersectees: intersectees };
        return (0, runtype_1.create)(function (value, visited) {
          var e_1, _a;
          try {
            for (var intersectees_1 = __values(intersectees), intersectees_1_1 = intersectees_1.next(); !intersectees_1_1.done; intersectees_1_1 = intersectees_1.next()) {
              var targetType = intersectees_1_1.value;
              var result = (0, runtype_1.innerValidate)(targetType, value, visited);
              if (!result.success)
                return result;
            }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
            try {
              if (intersectees_1_1 && !intersectees_1_1.done && (_a = intersectees_1.return)) _a.call(intersectees_1);
            }
            finally { if (e_1) throw e_1.error; }
          }
          return (0, util_1.SUCCESS)(value);
        }, self);
      }
      exports.Intersect = Intersect;


      /***/
}),

/***/ 15:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URL = exports.DNS = void 0;
      exports.default = v35;

      var _stringify = __webpack_require__(719);

      var _parse = _interopRequireDefault(__webpack_require__(53));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str)); // UTF8 escape

        const bytes = [];

        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }

        return bytes;
      }

      const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
      exports.DNS = DNS;
      const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
      exports.URL = URL;

      function v35(name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;

          if (typeof value === 'string') {
            value = stringToBytes(value);
          }

          if (typeof namespace === 'string') {
            namespace = (0, _parse.default)(namespace);
          }

          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
          } // Compute hash of namespace and value, Per 4.3
          // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
          // hashfunc([...namespace, ... value])`


          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 0x0f | version;
          bytes[8] = bytes[8] & 0x3f | 0x80;

          if (buf) {
            offset = offset || 0;

            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }

            return buf;
          }

          return (0, _stringify.unsafeStringify)(bytes);
        } // Function#name is not settable on some platforms (#270)


        try {
          generateUUID.name = name; // eslint-disable-next-line no-empty
        } catch (err) { } // For CommonJS default export support


        generateUUID.DNS = DNS;
        generateUUID.URL = URL;
        return generateUUID;
      }

      /***/
}),

/***/ 23:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
        }
        return ar;
      };
      var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Contract = void 0;
      var errors_1 = __webpack_require__(967);
      var util_1 = __webpack_require__(917);
      function Contract() {
        var runtypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          runtypes[_i] = arguments[_i];
        }
        var lastIndex = runtypes.length - 1;
        var argRuntypes = runtypes.slice(0, lastIndex);
        var returnRuntype = runtypes[lastIndex];
        return {
          enforce: function (f) {
            return function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (args.length < argRuntypes.length) {
                var message = "Expected ".concat(argRuntypes.length, " arguments but only received ").concat(args.length);
                var failure = util_1.FAILURE.ARGUMENT_INCORRECT(message);
                throw new errors_1.ValidationError(failure);
              }
              for (var i = 0; i < argRuntypes.length; i++)
                argRuntypes[i].check(args[i]);
              return returnRuntype.check(f.apply(void 0, __spreadArray([], __read(args), false)));
            };
          },
        };
      }
      exports.Contract = Contract;


      /***/
}),

/***/ 30:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });


      /***/
}),

/***/ 39:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = (this && this.__exportStar) || function (m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(__webpack_require__(477), exports);
      __exportStar(__webpack_require__(312), exports);
      __exportStar(__webpack_require__(30), exports);


      /***/
}),

/***/ 42:
/***/ (function (module) {

      module.exports = {
        "version": "0.27.2"
      };

      /***/
}),

/***/ 46:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.preserveSpecificKeys = exports.applyCaseOptions = void 0;
      var tslib_1 = __webpack_require__(259);
      var applyCaseOptions = function (fn, defaultOptions) {
        return function (input, options) {
          return fn(input, tslib_1.__assign(tslib_1.__assign({}, defaultOptions), options));
        };
      };
      exports.applyCaseOptions = applyCaseOptions;
      var preserveSpecificKeys = function (fn, keys) {
        var condition = typeof keys === 'function'
          ? keys
          : function (input) { return keys.includes(input); };
        return function (input, options) {
          return condition(input, options) ? input : fn(input, options);
        };
      };
      exports.preserveSpecificKeys = preserveSpecificKeys;


      /***/
}),

/***/ 53:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _validate = _interopRequireDefault(__webpack_require__(205));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError('Invalid UUID');
        }

        let v;
        const arr = new Uint8Array(16); // Parse ########-....-....-....-............

        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 0xff;
        arr[2] = v >>> 8 & 0xff;
        arr[3] = v & 0xff; // Parse ........-####-....-....-............

        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 0xff; // Parse ........-....-####-....-............

        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 0xff; // Parse ........-....-....-####-............

        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 0xff; // Parse ........-....-....-....-############
        // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
        arr[11] = v / 0x100000000 & 0xff;
        arr[12] = v >>> 24 & 0xff;
        arr[13] = v >>> 16 & 0xff;
        arr[14] = v >>> 8 & 0xff;
        arr[15] = v & 0xff;
        return arr;
      }

      var _default = parse;
      exports.default = _default;

      /***/
}),

/***/ 59:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      function InterceptorManager() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;


      /***/
}),

/***/ 69:
/***/ (function (module) {

      // populates missing values
      module.exports = function (dst, src) {

        Object.keys(src).forEach(function (prop) {
          dst[prop] = dst[prop] || src[prop];
        });

        return dst;
      };


      /***/
}),

/***/ 81:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
      }) : (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = (this && this.__exportStar) || function (m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InstanceOf = exports.Nullish = exports.Null = exports.Undefined = exports.Literal = void 0;
      __exportStar(__webpack_require__(600), exports);
      __exportStar(__webpack_require__(133), exports);
      __exportStar(__webpack_require__(23), exports);
      __exportStar(__webpack_require__(632), exports);
      __exportStar(__webpack_require__(534), exports);
      __exportStar(__webpack_require__(967), exports);
      __exportStar(__webpack_require__(460), exports);
      __exportStar(__webpack_require__(7), exports);
      __exportStar(__webpack_require__(740), exports);
      var literal_1 = __webpack_require__(301);
      Object.defineProperty(exports, "Literal", { enumerable: true, get: function () { return literal_1.Literal; } });
      Object.defineProperty(exports, "Undefined", { enumerable: true, get: function () { return literal_1.Undefined; } });
      Object.defineProperty(exports, "Null", { enumerable: true, get: function () { return literal_1.Null; } });
      Object.defineProperty(exports, "Nullish", { enumerable: true, get: function () { return literal_1.Nullish; } });
      __exportStar(__webpack_require__(792), exports);
      __exportStar(__webpack_require__(898), exports);
      __exportStar(__webpack_require__(141), exports);
      __exportStar(__webpack_require__(151), exports);
      __exportStar(__webpack_require__(955), exports);
      __exportStar(__webpack_require__(814), exports);
      __exportStar(__webpack_require__(817), exports);
      __exportStar(__webpack_require__(710), exports);
      __exportStar(__webpack_require__(213), exports);
      __exportStar(__webpack_require__(727), exports);
      __exportStar(__webpack_require__(550), exports);
      __exportStar(__webpack_require__(13), exports);
      __exportStar(__webpack_require__(469), exports);
      __exportStar(__webpack_require__(830), exports);
      var instanceof_1 = __webpack_require__(557);
      Object.defineProperty(exports, "InstanceOf", { enumerable: true, get: function () { return instanceof_1.InstanceOf; } });
      __exportStar(__webpack_require__(596), exports);
      __exportStar(__webpack_require__(951), exports);
      __exportStar(__webpack_require__(335), exports);
      __exportStar(__webpack_require__(219), exports);


      /***/
}),

/***/ 83:
/***/ (function (module) {

      "use strict";


      module.exports = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };


      /***/
}),

/***/ 91:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var serialOrdered = __webpack_require__(892);

      // Public API
      module.exports = serial;

      /**
       * Runs iterator over provided array elements in series
       *
       * @param   {array|object} list - array or object (named list) to iterate over
       * @param   {function} iterator - iterator to run
       * @param   {function} callback - invoked when all elements processed
       * @returns {function} - jobs terminator
       */
      function serial(list, iterator, callback) {
        return serialOrdered(list, iterator, null, callback);
      }


      /***/
}),

/***/ 104:
/***/ (function (__unusedmodule, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_0__);


      const api = new _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_0__.TodoistApi("3f9312e364c52bb69b62f81a8029d7ff34a031f6")

      api.getTasks()
        .then((tasks) => {
          tasks.forEach(task => {
            console.log(JSON.stringify(task))
          });
        })
        .catch((error) => console.log(error))



      /***/
}),

/***/ 107:
/***/ (function (module) {

      "use strict";


      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };


      /***/
}),

/***/ 121:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _v = _interopRequireDefault(__webpack_require__(15));

      var _sha = _interopRequireDefault(__webpack_require__(831));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const v5 = (0, _v.default)('v5', 0x50, _sha.default);
      var _default = v5;
      exports.default = _default;

      /***/
}),

/***/ 127:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ENDPOINT_REVOKE_TOKEN = exports.ENDPOINT_GET_TOKEN = exports.ENDPOINT_AUTHORIZATION = exports.ENDPOINT_SYNC_QUICK_ADD = exports.ENDPOINT_REST_PROJECT_COLLABORATORS = exports.ENDPOINT_REST_TASK_REOPEN = exports.ENDPOINT_REST_TASK_CLOSE = exports.ENDPOINT_REST_COMMENTS = exports.ENDPOINT_REST_LABELS_SHARED_REMOVE = exports.ENDPOINT_REST_LABELS_SHARED_RENAME = exports.ENDPOINT_REST_LABELS_SHARED = exports.ENDPOINT_REST_LABELS = exports.ENDPOINT_REST_SECTIONS = exports.ENDPOINT_REST_PROJECTS = exports.ENDPOINT_REST_TASKS = exports.getAuthBaseUri = exports.getSyncBaseUri = exports.getRestBaseUri = void 0;
      var BASE_URI = 'https://api.todoist.com';
      var API_REST_BASE_URI = '/rest/v2/';
      var API_SYNC_BASE_URI = '/sync/v9/';
      var TODOIST_URI = 'https://todoist.com';
      var API_AUTHORIZATION_BASE_URI = '/oauth/';
      function getRestBaseUri(domainBase) {
        if (domainBase === void 0) { domainBase = BASE_URI; }
        return new URL(API_REST_BASE_URI, domainBase).toString();
      }
      exports.getRestBaseUri = getRestBaseUri;
      function getSyncBaseUri(domainBase) {
        if (domainBase === void 0) { domainBase = BASE_URI; }
        return new URL(API_SYNC_BASE_URI, domainBase).toString();
      }
      exports.getSyncBaseUri = getSyncBaseUri;
      function getAuthBaseUri(domainBase) {
        if (domainBase === void 0) { domainBase = TODOIST_URI; }
        return new URL(API_AUTHORIZATION_BASE_URI, domainBase).toString();
      }
      exports.getAuthBaseUri = getAuthBaseUri;
      exports.ENDPOINT_REST_TASKS = 'tasks';
      exports.ENDPOINT_REST_PROJECTS = 'projects';
      exports.ENDPOINT_REST_SECTIONS = 'sections';
      exports.ENDPOINT_REST_LABELS = 'labels';
      exports.ENDPOINT_REST_LABELS_SHARED = exports.ENDPOINT_REST_LABELS + '/shared';
      exports.ENDPOINT_REST_LABELS_SHARED_RENAME = exports.ENDPOINT_REST_LABELS_SHARED + '/rename';
      exports.ENDPOINT_REST_LABELS_SHARED_REMOVE = exports.ENDPOINT_REST_LABELS_SHARED + '/remove';
      exports.ENDPOINT_REST_COMMENTS = 'comments';
      exports.ENDPOINT_REST_TASK_CLOSE = 'close';
      exports.ENDPOINT_REST_TASK_REOPEN = 'reopen';
      exports.ENDPOINT_REST_PROJECT_COLLABORATORS = 'collaborators';
      exports.ENDPOINT_SYNC_QUICK_ADD = 'quick/add';
      exports.ENDPOINT_AUTHORIZATION = 'authorize';
      exports.ENDPOINT_GET_TOKEN = 'access_token';
      exports.ENDPOINT_REVOKE_TOKEN = 'access_tokens/revoke';


      /***/
}),

/***/ 133:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Failcode = void 0;
      exports.Failcode = {
        /** The type of the received primitive value is incompatible with expected one. */
        TYPE_INCORRECT: 'TYPE_INCORRECT',
        /** The received primitive value is incorrect. */
        VALUE_INCORRECT: 'VALUE_INCORRECT',
        /** The key of the property is incorrect. */
        KEY_INCORRECT: 'KEY_INCORRECT',
        /** One or more elements or properties of the received object are incorrect. */
        CONTENT_INCORRECT: 'CONTENT_INCORRECT',
        /** One or more arguments passed to the function is incorrect. */
        ARGUMENT_INCORRECT: 'ARGUMENT_INCORRECT',
        /** The value returned by the function is incorrect. */
        RETURN_INCORRECT: 'RETURN_INCORRECT',
        /** The received value does not fulfill the constraint. */
        CONSTRAINT_FAILED: 'CONSTRAINT_FAILED',
        /** The property must be present but missing. */
        PROPERTY_MISSING: 'PROPERTY_MISSING',
        /** The property must not be present but present. */
        PROPERTY_PRESENT: 'PROPERTY_PRESENT',
        /** The value must not be present but present. */
        NOTHING_EXPECTED: 'NOTHING_EXPECTED',
      };


      /***/
}),

/***/ 141:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Number = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'number' };
      /**
       * Validates that a value is a number.
       */
      exports.Number = (0, runtype_1.create)(function (value) { return (typeof value === 'number' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, self);


      /***/
}),

/***/ 147:
/***/ (function (module) {

      // API
      module.exports = state;

      /**
       * Creates initial state object
       * for iteration over list
       *
       * @param   {array|object} list - list to iterate over
       * @param   {function|null} sortMethod - function to use for keys sort,
       *                                     or `null` to keep them as is
       * @returns {object} - initial state object
       */
      function state(list, sortMethod) {
        var isNamedList = !Array.isArray(list)
          , initState =
          {
            index: 0,
            keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
            jobs: {},
            results: isNamedList ? {} : [],
            size: isNamedList ? Object.keys(list).length : list.length
          }
          ;

        if (sortMethod) {
          // sort array keys based on it's values
          // sort object's keys just on own merit
          initState.keyedList.sort(isNamedList ? sortMethod : function (a, b) {
            return sortMethod(list[a], list[b]);
          });
        }

        return initState;
      }


      /***/
}),

/***/ 148:
/***/ (function (module, __unusedexports, __webpack_require__) {

      // TODO(Babel 8): Remove this file.

      var runtime = __webpack_require__(267)();
      module.exports = runtime;

      // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }


      /***/
}),

/***/ 151:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BigInt = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'bigint' };
      /**
       * Validates that a value is a bigint.
       */
      exports.BigInt = (0, runtype_1.create)(function (value) { return (typeof value === 'bigint' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, self);


      /***/
}),

/***/ 152:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var Stream = __webpack_require__(413).Stream;
      var util = __webpack_require__(669);

      module.exports = DelayedStream;
      function DelayedStream() {
        this.source = null;
        this.dataSize = 0;
        this.maxDataSize = 1024 * 1024;
        this.pauseStream = true;

        this._maxDataSizeExceeded = false;
        this._released = false;
        this._bufferedEvents = [];
      }
      util.inherits(DelayedStream, Stream);

      DelayedStream.create = function (source, options) {
        var delayedStream = new this();

        options = options || {};
        for (var option in options) {
          delayedStream[option] = options[option];
        }

        delayedStream.source = source;

        var realEmit = source.emit;
        source.emit = function () {
          delayedStream._handleEmit(arguments);
          return realEmit.apply(source, arguments);
        };

        source.on('error', function () { });
        if (delayedStream.pauseStream) {
          source.pause();
        }

        return delayedStream;
      };

      Object.defineProperty(DelayedStream.prototype, 'readable', {
        configurable: true,
        enumerable: true,
        get: function () {
          return this.source.readable;
        }
      });

      DelayedStream.prototype.setEncoding = function () {
        return this.source.setEncoding.apply(this.source, arguments);
      };

      DelayedStream.prototype.resume = function () {
        if (!this._released) {
          this.release();
        }

        this.source.resume();
      };

      DelayedStream.prototype.pause = function () {
        this.source.pause();
      };

      DelayedStream.prototype.release = function () {
        this._released = true;

        this._bufferedEvents.forEach(function (args) {
          this.emit.apply(this, args);
        }.bind(this));
        this._bufferedEvents = [];
      };

      DelayedStream.prototype.pipe = function () {
        var r = Stream.prototype.pipe.apply(this, arguments);
        this.resume();
        return r;
      };

      DelayedStream.prototype._handleEmit = function (args) {
        if (this._released) {
          this.emit.apply(this, args);
          return;
        }

        if (args[0] === 'data') {
          this.dataSize += args[1].length;
          this._checkIfMaxDataSizeExceeded();
        }

        this._bufferedEvents.push(args);
      };

      DelayedStream.prototype._checkIfMaxDataSizeExceeded = function () {
        if (this._maxDataSizeExceeded) {
          return;
        }

        if (this.dataSize <= this.maxDataSize) {
          return;
        }

        this._maxDataSizeExceeded = true;
        var message =
          'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
        this.emit('error', new Error(message));
      };


      /***/
}),

/***/ 157:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var async = __webpack_require__(751)
        , abort = __webpack_require__(566)
        ;

      // API
      module.exports = iterate;

      /**
       * Iterates over each job object
       *
       * @param {array|object} list - array or object (named list) to iterate over
       * @param {function} iterator - iterator to run
       * @param {object} state - current job status
       * @param {function} callback - invoked when all elements processed
       */
      function iterate(list, iterator, state, callback) {
        // store current index
        var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

        state.jobs[key] = runJob(iterator, key, list[key], function (error, output) {
          // don't repeat yourself
          // skip secondary callbacks
          if (!(key in state.jobs)) {
            return;
          }

          // clean up jobs
          delete state.jobs[key];

          if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
          }
          else {
            state.results[key] = output;
          }

          // return salvaged results
          callback(error, state.results);
        });
      }

      /**
       * Runs iterator over provided job element
       *
       * @param   {function} iterator - iterator to invoke
       * @param   {string|number} key - key/index of the element in the list of jobs
       * @param   {mixed} item - job description
       * @param   {function} callback - invoked after iterator is done with the job
       * @returns {function|mixed} - job abort function or something else
       */
      function runJob(iterator, key, item, callback) {
        var aborter;

        // allow shortcut if iterator expects only two arguments
        if (iterator.length == 2) {
          aborter = iterator(item, async(callback));
        }
        // otherwise go with full three arguments
        else {
          aborter = iterator(item, key, async(callback));
        }

        return aborter;
      }


      /***/
}),

/***/ 163:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _validate = _interopRequireDefault(__webpack_require__(205));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function version(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError('Invalid UUID');
        }

        return parseInt(uuid.slice(14, 15), 16);
      }

      var _default = version;
      exports.default = _default;

      /***/
}),

/***/ 172:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var _typeof = __webpack_require__(431)["default"];
      var toPrimitive = __webpack_require__(936);
      function _toPropertyKey(arg) {
        var key = toPrimitive(arg, "string");
        return _typeof(key) === "symbol" ? key : String(key);
      }
      module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 175:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.lowerCase = exports.localeLowerCase = void 0;
      /**
       * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
       */
      var SUPPORTED_LOCALE = {
        tr: {
          regexp: /\u0130|\u0049|\u0049\u0307/g,
          map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
          },
        },
        az: {
          regexp: /\u0130/g,
          map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
          },
        },
        lt: {
          regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
          map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
          },
        },
      };
      /**
       * Localized lower case.
       */
      function localeLowerCase(str, locale) {
        var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
        if (lang)
          return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
        return lowerCase(str);
      }
      exports.localeLowerCase = localeLowerCase;
      /**
       * Lower case as a function.
       */
      function lowerCase(str) {
        return str.toLowerCase();
      }
      exports.lowerCase = lowerCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 189:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var normalizeHeaderName = __webpack_require__(847);
      var AxiosError = __webpack_require__(379);
      var transitionalDefaults = __webpack_require__(83);
      var toFormData = __webpack_require__(239);

      var DEFAULT_CONTENT_TYPE = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
          headers['Content-Type'] = value;
        }
      }

      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== 'undefined') {
          // For browsers use XHR adapter
          adapter = __webpack_require__(488);
        } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
          // For node use HTTP adapter
          adapter = __webpack_require__(270);
        }
        return adapter;
      }

      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== 'SyntaxError') {
              throw e;
            }
          }
        }

        return (encoder || JSON.stringify)(rawValue);
      }

      var defaults = {

        transitional: transitionalDefaults,

        adapter: getDefaultAdapter(),

        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, 'Accept');
          normalizeHeaderName(headers, 'Content-Type');

          if (utils.isFormData(data) ||
            utils.isArrayBuffer(data) ||
            utils.isBuffer(data) ||
            utils.isStream(data) ||
            utils.isFile(data) ||
            utils.isBlob(data)
          ) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
            return data.toString();
          }

          var isObjectPayload = utils.isObject(data);
          var contentType = headers && headers['Content-Type'];

          var isFileList;

          if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
            var _FormData = this.env && this.env.FormData;
            return toFormData(isFileList ? { 'files[]': data } : data, _FormData && new _FormData());
          } else if (isObjectPayload || contentType === 'application/json') {
            setContentTypeIfUnset(headers, 'application/json');
            return stringifySafely(data);
          }

          return data;
        }],

        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

          if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === 'SyntaxError') {
                  throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }

          return data;
        }],

        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,

        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',

        maxContentLength: -1,
        maxBodyLength: -1,

        env: {
          FormData: __webpack_require__(449)
        },

        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },

        headers: {
          common: {
            'Accept': 'application/json, text/plain, */*'
          }
        }
      };

      utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });

      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });

      module.exports = defaults;


      /***/
}),

/***/ 192:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getSanitizedTasks = exports.getSanitizedContent = void 0;
      var BOLD_FORMAT = /(^|[\s!?,;>:]+)(?:\*\*|__|!!)(.+?)(\*\*|__|!!)(?=$|[\s!?,;><:]+)/gi;
      var ITALIC_FORMAT = /(^|[\s!?,;>:]+)(?:\*|_|!)(.+?)(\*|_|!)(?=$|[\s!?,;><:]+)/gi;
      var BOLD_ITALIC_FORMAT = /(^|[\s!?,;>:]+)(?:\*\*\*|___|!!!)(.+?)(\*\*\*|___|!!!)(?=$|[\s!?,;><:]+)/gi;
      var CODE_BLOCK_FORMAT = /```([\s\S]*?)```/gi;
      var CODE_INLINE_FORMAT = /`([^`]+)`/gi;
      var TODOIST_LINK = /((?:(?:onenote:)?[\w-]+):\/\/[^\s]+)\s+[[(]([^)]+)[\])]/gi;
      var MARKDOWN_LINK = /\[(.+?)\]\((.+?)\)/gi;
      var GMAIL_LINK = /\[\[gmail=(.+?),\s*(.+?)\]\]/gi;
      var OUTLOOK_LINK = /\[\[outlook=(.+?),\s*(.+?)\]\]/gi;
      var THUNDERBIRD_LINK = /\[\[thunderbird\n(.+)\n(.+)\n\s*\]\]/gi;
      var FAKE_SECTION_PREFIX = '* ';
      var FAKE_SECTION_SUFFIX = ':';
      function removeStyleFormatting(input) {
        if (!input.includes('!') && !input.includes('*') && !input.includes('_')) {
          return input;
        }
        function removeMarkdown(match, prefix, text) {
          return "".concat(prefix).concat(text);
        }
        input = input.replace(BOLD_ITALIC_FORMAT, removeMarkdown);
        input = input.replace(BOLD_FORMAT, removeMarkdown);
        input = input.replace(ITALIC_FORMAT, removeMarkdown);
        return input;
      }
      function removeCodeFormatting(input) {
        function removeMarkdown(match, text) {
          return text;
        }
        input = input.replace(CODE_BLOCK_FORMAT, removeMarkdown);
        input = input.replace(CODE_INLINE_FORMAT, removeMarkdown);
        return input;
      }
      function removeFakeSectionFormatting(input) {
        if (input.startsWith(FAKE_SECTION_PREFIX)) {
          input = input.slice(FAKE_SECTION_PREFIX.length);
        }
        if (input.endsWith(FAKE_SECTION_SUFFIX)) {
          input = input.slice(0, input.length - FAKE_SECTION_SUFFIX.length);
        }
        return input;
      }
      function removeMarkdownLinks(input) {
        if (!input.includes('[') || !input.includes(']')) {
          return input;
        }
        function removeMarkdown(match, text) {
          return text;
        }
        return input.replace(MARKDOWN_LINK, removeMarkdown);
      }
      function removeTodoistLinks(input) {
        if (!input.includes('(') || !input.includes(')')) {
          return input;
        }
        function removeMarkdown(match, url, text) {
          return text;
        }
        return input.replace(TODOIST_LINK, removeMarkdown);
      }
      function removeAppLinks(input) {
        if (input.includes('gmail')) {
          input = input.replace(GMAIL_LINK, function (match, id, text) { return text; });
        }
        if (input.includes('outlook')) {
          input = input.replace(OUTLOOK_LINK, function (match, id, text) { return text; });
        }
        if (input.includes('thunderbird')) {
          input = input.replace(THUNDERBIRD_LINK, function (match, text) { return text; });
        }
        return input;
      }
      function getSanitizedContent(input) {
        input = removeStyleFormatting(input);
        input = removeCodeFormatting(input);
        input = removeFakeSectionFormatting(input);
        input = removeMarkdownLinks(input);
        input = removeTodoistLinks(input);
        input = removeAppLinks(input);
        return input;
      }
      exports.getSanitizedContent = getSanitizedContent;
      function getSanitizedTasks(tasks) {
        return tasks.map(function (task) { return (__assign(__assign({}, task), { sanitizedContent: getSanitizedContent(task.content) })); });
      }
      exports.getSanitizedTasks = getSanitizedTasks;


      /***/
}),

/***/ 195:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      /**
       * Determines whether the payload is an error thrown by Axios
       *
       * @param {*} payload The value to test
       * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
       */
      module.exports = function isAxiosError(payload) {
        return utils.isObject(payload) && (payload.isAxiosError === true);
      };


      /***/
}),

/***/ 205:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _regex = _interopRequireDefault(__webpack_require__(2));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function validate(uuid) {
        return typeof uuid === 'string' && _regex.default.test(uuid);
      }

      var _default = validate;
      exports.default = _default;

      /***/
}),

/***/ 211:
/***/ (function (module) {

      module.exports = require("https");

      /***/
}),

/***/ 213:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
        }
        return ar;
      };
      var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Partial = exports.Record = exports.InternalRecord = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      /**
       * Construct a record runtype from runtypes for its values.
       */
      function InternalRecord(fields, isPartial, isReadonly) {
        var self = { tag: 'record', isPartial: isPartial, isReadonly: isReadonly, fields: fields };
        return withExtraModifierFuncs((0, runtype_1.create)(function (x, visited) {
          if (x === null || x === undefined) {
            return util_1.FAILURE.TYPE_INCORRECT(self, x);
          }
          var keysOfFields = (0, util_1.enumerableKeysOf)(fields);
          if (keysOfFields.length !== 0 && typeof x !== 'object')
            return util_1.FAILURE.TYPE_INCORRECT(self, x);
          var keys = __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read(keysOfFields), false), __read((0, util_1.enumerableKeysOf)(x)), false))), false);
          var results = keys.reduce(function (results, key) {
            var fieldsHasKey = (0, util_1.hasKey)(key, fields);
            var xHasKey = (0, util_1.hasKey)(key, x);
            if (fieldsHasKey) {
              var runtype = fields[key];
              var isOptional = isPartial || runtype.reflect.tag === 'optional';
              if (xHasKey) {
                var value = x[key];
                if (isOptional && value === undefined)
                  results[key] = (0, util_1.SUCCESS)(value);
                else
                  results[key] = (0, runtype_1.innerValidate)(runtype, value, visited);
              }
              else {
                if (!isOptional)
                  results[key] = util_1.FAILURE.PROPERTY_MISSING(runtype.reflect);
                else
                  results[key] = (0, util_1.SUCCESS)(undefined);
              }
            }
            else if (xHasKey) {
              // TODO: exact record validation
              var value = x[key];
              results[key] = (0, util_1.SUCCESS)(value);
            }
            else {
              /* istanbul ignore next */
              throw new Error('impossible');
            }
            return results;
          }, {});
          var details = keys.reduce(function (details, key) {
            var result = results[key];
            if (!result.success)
              details[key] = result.details || result.message;
            return details;
          }, {});
          if ((0, util_1.enumerableKeysOf)(details).length !== 0)
            return util_1.FAILURE.CONTENT_INCORRECT(self, details);
          else
            return (0, util_1.SUCCESS)(x);
        }, self));
      }
      exports.InternalRecord = InternalRecord;
      function Record(fields) {
        return InternalRecord(fields, false, false);
      }
      exports.Record = Record;
      function Partial(fields) {
        return InternalRecord(fields, true, false);
      }
      exports.Partial = Partial;
      function withExtraModifierFuncs(A) {
        A.asPartial = asPartial;
        A.asReadonly = asReadonly;
        A.pick = pick;
        A.omit = omit;
        A.extend = extend;
        return A;
        function asPartial() {
          return InternalRecord(A.fields, true, A.isReadonly);
        }
        function asReadonly() {
          return InternalRecord(A.fields, A.isPartial, true);
        }
        function pick() {
          var keys = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
          }
          var result = {};
          keys.forEach(function (key) {
            result[key] = A.fields[key];
          });
          return InternalRecord(result, A.isPartial, A.isReadonly);
        }
        function omit() {
          var keys = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
          }
          var result = {};
          var existingKeys = (0, util_1.enumerableKeysOf)(A.fields);
          existingKeys.forEach(function (key) {
            if (!keys.includes(key))
              result[key] = A.fields[key];
          });
          return InternalRecord(result, A.isPartial, A.isReadonly);
        }
        function extend(fields) {
          return InternalRecord(Object.assign({}, A.fields, fields), A.isPartial, A.isReadonly);
        }
      }


      /***/
}),

/***/ 219:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checked = exports.check = void 0;
      var errors_1 = __webpack_require__(967);
      var util_1 = __webpack_require__(917);
      var prototypes = new WeakMap();
      /**
       * A parameter decorator. Explicitly mark the parameter as checked on every method call in combination with `@checked` method decorator. The number of `@check` params must be the same as the number of provided runtypes into `@checked`.\
       * Usage:
       * ```ts
       * @checked(Runtype1, Runtype3)
       * method(@check p1: Static1, p2: number, @check p3: Static3) { ... }
       * ```
       */
      function check(target, propertyKey, parameterIndex) {
        var prototype = prototypes.get(target) || new Map();
        prototypes.set(target, prototype);
        var validParameterIndices = prototype.get(propertyKey) || [];
        prototype.set(propertyKey, validParameterIndices);
        validParameterIndices.push(parameterIndex);
      }
      exports.check = check;
      function getValidParameterIndices(target, propertyKey, runtypeCount) {
        var prototype = prototypes.get(target);
        var validParameterIndices = prototype && prototype.get(propertyKey);
        if (validParameterIndices) {
          // used with `@check` parameter decorator
          return validParameterIndices;
        }
        var indices = [];
        for (var i = 0; i < runtypeCount; i++) {
          indices.push(i);
        }
        return indices;
      }
      /**
       * A method decorator. Takes runtypes as arguments which correspond to the ones of the actual method.
       *
       * Usually, the number of provided runtypes must be _**the same as**_ or _**less than**_ the actual parameters.
       *
       * If you explicitly mark which parameter shall be checked using `@check` parameter decorator, the number of `@check` parameters must be _**the same as**_ the runtypes provided into `@checked`.
       *
       * Usage:
       * ```ts
       * @checked(Runtype1, Runtype2)
       * method1(param1: Static1, param2: Static2, param3: any) {
       *   ...
       * }
       *
       * @checked(Runtype1, Runtype3)
       * method2(@check param1: Static1, param2: any, @check param3: Static3) {
       *   ...
       * }
       * ```
       */
      function checked() {
        var runtypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          runtypes[_i] = arguments[_i];
        }
        if (runtypes.length === 0) {
          throw new Error('No runtype provided to `@checked`. Please remove the decorator.');
        }
        return function (target, propertyKey, descriptor) {
          var method = descriptor.value;
          var methodId = (target.name || target.constructor.name + '.prototype') +
            (typeof propertyKey === 'string' ? "[\"".concat(propertyKey, "\"]") : "[".concat(String(propertyKey), "]"));
          var validParameterIndices = getValidParameterIndices(target, propertyKey, runtypes.length);
          if (validParameterIndices.length !== runtypes.length) {
            throw new Error('Number of `@checked` runtypes and @check parameters not matched.');
          }
          if (validParameterIndices.length > method.length) {
            throw new Error('Number of `@checked` runtypes exceeds actual parameter length.');
          }
          descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            runtypes.forEach(function (type, typeIndex) {
              var parameterIndex = validParameterIndices[typeIndex];
              var result = type.validate(args[parameterIndex]);
              if (!result.success) {
                var message = "".concat(methodId, ", argument #").concat(parameterIndex, ": ").concat(result.message);
                var failure = util_1.FAILURE.ARGUMENT_INCORRECT(message);
                throw new errors_1.ValidationError(failure);
              }
            });
            return method.apply(this, args);
          };
        };
      }
      exports.checked = checked;


      /***/
}),

/***/ 234:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.applyCaseMiddleware = exports.createCamelResponseTransformer = exports.createSnakeRequestTransformer = exports.createSnakeParamsInterceptor = void 0;
      var tslib_1 = __webpack_require__(259);
      var transformers_1 = __webpack_require__(839);
      var util_1 = __webpack_require__(479);
      var createSnakeParamsInterceptor = function (options) {
        var snake = (0, transformers_1.createObjectTransformers)(options === null || options === void 0 ? void 0 : options.caseFunctions).snake;
        return function (config) {
          if (config.params) {
            config.params = snake(config.params, options);
          }
          return config;
        };
      };
      exports.createSnakeParamsInterceptor = createSnakeParamsInterceptor;
      var createSnakeRequestTransformer = function (options) {
        var _a = (0, transformers_1.createObjectTransformers)(options === null || options === void 0 ? void 0 : options.caseFunctions), snake = _a.snake, header = _a.header;
        return function (data, headers) {
          overwriteHeadersOrNoop(headers, header, options, [
            'common',
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
          ]);
          return snake(data, options);
        };
      };
      exports.createSnakeRequestTransformer = createSnakeRequestTransformer;
      var createCamelResponseTransformer = function (options) {
        var camel = (0, transformers_1.createObjectTransformers)(options === null || options === void 0 ? void 0 : options.caseFunctions).camel;
        return function (data, headers) {
          overwriteHeadersOrNoop(headers, camel, options);
          return camel(data, options);
        };
      };
      exports.createCamelResponseTransformer = createCamelResponseTransformer;
      var overwriteHeadersOrNoop = function (headers, fn, options, excludedKeys) {
        var e_1, _a, _b, _c;
        if ((options === null || options === void 0 ? void 0 : options.ignoreHeaders) ||
          (!(0, util_1.isPlainObject)(headers) && !(0, util_1.isAxiosHeaders)(headers))) {
          return;
        }
        try {
          for (var _d = tslib_1.__values(Object.entries(headers)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = tslib_1.__read(_e.value, 2), key = _f[0], value = _f[1];
            fn(value, tslib_1.__assign({ overwrite: true }, options));
            if ((excludedKeys || []).includes(key)) {
              continue;
            }
            if ((0, util_1.isAxiosHeaders)(headers)) {
              headers.delete(key);
              headers.set(Object.keys(fn((_b = {}, _b[key] = null, _b), options))[0], value, true);
            }
            else {
              delete headers[key];
              headers[Object.keys(fn((_c = {}, _c[key] = null, _c), options))[0]] = value;
            }
          }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
          try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
          }
          finally { if (e_1) throw e_1.error; }
        }
      };
      var applyCaseMiddleware = function (axios, options) {
        var _a, _b, _c;
        axios.defaults.transformRequest = tslib_1.__spreadArray([
          ((_a = options === null || options === void 0 ? void 0 : options.caseMiddleware) === null || _a === void 0 ? void 0 : _a.requestTransformer) ||
          (0, exports.createSnakeRequestTransformer)(options)
        ], tslib_1.__read((Array.isArray(axios.defaults.transformRequest)
          ? axios.defaults.transformRequest
          : axios.defaults.transformRequest !== undefined
            ? [axios.defaults.transformRequest]
            : [])), false);
        axios.defaults.transformResponse = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read((Array.isArray(axios.defaults.transformResponse)
          ? axios.defaults.transformResponse
          : axios.defaults.transformResponse !== undefined
            ? [axios.defaults.transformResponse]
            : [])), false), [
          ((_b = options === null || options === void 0 ? void 0 : options.caseMiddleware) === null || _b === void 0 ? void 0 : _b.responseTransformer) ||
          (0, exports.createCamelResponseTransformer)(options),
        ], false);
        axios.interceptors.request.use(((_c = options === null || options === void 0 ? void 0 : options.caseMiddleware) === null || _c === void 0 ? void 0 : _c.requestInterceptor) ||
          (0, exports.createSnakeParamsInterceptor)(options));
        return axios;
      };
      exports.applyCaseMiddleware = applyCaseMiddleware;


      /***/
}),

/***/ 239:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      /**
       * Convert a data object to FormData
       * @param {Object} obj
       * @param {?Object} [formData]
       * @returns {Object}
       **/

      function toFormData(obj, formData) {
        // eslint-disable-next-line no-param-reassign
        formData = formData || new FormData();

        var stack = [];

        function convertValue(value) {
          if (value === null) return '';

          if (utils.isDate(value)) {
            return value.toISOString();
          }

          if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
            return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
          }

          return value;
        }

        function build(data, parentKey) {
          if (utils.isPlainObject(data) || utils.isArray(data)) {
            if (stack.indexOf(data) !== -1) {
              throw Error('Circular reference detected in ' + parentKey);
            }

            stack.push(data);

            utils.forEach(data, function each(value, key) {
              if (utils.isUndefined(value)) return;
              var fullKey = parentKey ? parentKey + '.' + key : key;
              var arr;

              if (value && !parentKey && typeof value === 'object') {
                if (utils.endsWith(key, '{}')) {
                  // eslint-disable-next-line no-param-reassign
                  value = JSON.stringify(value);
                } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
                  // eslint-disable-next-line func-names
                  arr.forEach(function (el) {
                    !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                  });
                  return;
                }
              }

              build(value, fullKey);
            });

            stack.pop();
          } else {
            formData.append(parentKey, convertValue(data));
          }
        }

        build(obj);

        return formData;
      }

      module.exports = toFormData;


      /***/
}),

/***/ 244:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.capitalCase = exports.capitalCaseTransform = void 0;
      var tslib_1 = __webpack_require__(259);
      var no_case_1 = __webpack_require__(555);
      var upper_case_first_1 = __webpack_require__(286);
      function capitalCaseTransform(input) {
        return upper_case_first_1.upperCaseFirst(input.toLowerCase());
      }
      exports.capitalCaseTransform = capitalCaseTransform;
      function capitalCase(input, options) {
        if (options === void 0) { options = {}; }
        return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: capitalCaseTransform }, options));
      }
      exports.capitalCase = capitalCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 259:
/***/ (function (module) {

      /******************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
      /* global global, define, System, Reflect, Promise */
      var __extends;
      var __assign;
      var __rest;
      var __decorate;
      var __param;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __classPrivateFieldIn;
      var __createBinding;
      (function (factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
        }
        else if (true && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        }
        else {
          factory(createExporter(root));
        }
        function createExporter(exports, previous) {
          if (exports !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
              exports.__esModule = true;
            }
          }
          return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
        }
      })
        (function (exporter) {
          var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

          __extends = function (d, b) {
            if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };

          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };

          __rest = function (s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
              for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
              }
            return t;
          };

          __decorate = function (decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

          __param = function (paramIndex, decorator) {
            return function (target, key) { decorator(target, key, paramIndex); }
          };

          __metadata = function (metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
          };

          __awaiter = function (thisArg, _arguments, P, generator) {
            function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
              function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
              function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };

          __generator = function (thisArg, body) {
            var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
            return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
            function verb(n) { return function (v) { return step([n, v]); }; }
            function step(op) {
              if (f) throw new TypeError("Generator is already executing.");
              while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
              } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
              if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
            }
          };

          __exportStar = function (m, o) {
            for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
          };

          __createBinding = Object.create ? (function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
              desc = { enumerable: true, get: function () { return m[k]; } };
            }
            Object.defineProperty(o, k2, desc);
          }) : (function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
          });

          __values = function (o) {
            var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
            if (m) return m.call(o);
            if (o && typeof o.length === "number") return {
              next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
            throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
          };

          __read = function (o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            }
            catch (error) { e = { error: error }; }
            finally {
              try {
                if (r && !r.done && (m = i["return"])) m.call(i);
              }
              finally { if (e) throw e.error; }
            }
            return ar;
          };

          /** @deprecated */
          __spread = function () {
            for (var ar = [], i = 0; i < arguments.length; i++)
              ar = ar.concat(__read(arguments[i]));
            return ar;
          };

          /** @deprecated */
          __spreadArrays = function () {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
            return r;
          };

          __spreadArray = function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };

          __await = function (v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
          };

          __asyncGenerator = function (thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
            function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
            function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
            function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
            function fulfill(value) { resume("next", value); }
            function reject(value) { resume("throw", value); }
            function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
          };

          __asyncDelegator = function (o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
            function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
          };

          __asyncValues = function (o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
            function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
            function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
          };

          __makeTemplateObject = function (cooked, raw) {
            if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
            return cooked;
          };

          var __setModuleDefault = Object.create ? (function (o, v) {
            Object.defineProperty(o, "default", { enumerable: true, value: v });
          }) : function (o, v) {
            o["default"] = v;
          };

          __importStar = function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
            __setModuleDefault(result, mod);
            return result;
          };

          __importDefault = function (mod) {
            return (mod && mod.__esModule) ? mod : { "default": mod };
          };

          __classPrivateFieldGet = function (receiver, state, kind, f) {
            if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
          };

          __classPrivateFieldSet = function (receiver, state, value, kind, f) {
            if (kind === "m") throw new TypeError("Private method is not writable");
            if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
          };

          __classPrivateFieldIn = function (state, receiver) {
            if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
            return typeof state === "function" ? receiver === state : state.has(receiver);
          };

          exporter("__extends", __extends);
          exporter("__assign", __assign);
          exporter("__rest", __rest);
          exporter("__decorate", __decorate);
          exporter("__param", __param);
          exporter("__metadata", __metadata);
          exporter("__awaiter", __awaiter);
          exporter("__generator", __generator);
          exporter("__exportStar", __exportStar);
          exporter("__createBinding", __createBinding);
          exporter("__values", __values);
          exporter("__read", __read);
          exporter("__spread", __spread);
          exporter("__spreadArrays", __spreadArrays);
          exporter("__spreadArray", __spreadArray);
          exporter("__await", __await);
          exporter("__asyncGenerator", __asyncGenerator);
          exporter("__asyncDelegator", __asyncDelegator);
          exporter("__asyncValues", __asyncValues);
          exporter("__makeTemplateObject", __makeTemplateObject);
          exporter("__importStar", __importStar);
          exporter("__importDefault", __importDefault);
          exporter("__classPrivateFieldGet", __classPrivateFieldGet);
          exporter("__classPrivateFieldSet", __classPrivateFieldSet);
          exporter("__classPrivateFieldIn", __classPrivateFieldIn);
        });


      /***/
}),

/***/ 261:
/***/ (function (module) {

      "use strict";


      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };


      /***/
}),

/***/ 263:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTaskFromQuickAddResponse = void 0;
      var showTaskEndpoint = 'https://todoist.com/showTask';
      function getTaskUrlFromQuickAddResponse(responseData) {
        return "".concat(showTaskEndpoint, "?id=").concat(responseData.id);
      }
      function getTaskFromQuickAddResponse(responseData) {
        var _a;
        var due = responseData.due
          ? __assign(__assign({ isRecurring: responseData.due.isRecurring, string: responseData.due.string, date: responseData.due.date }, (responseData.due.timezone !== null && { datetime: responseData.due.date })), (responseData.due.timezone !== null && { timezone: responseData.due.timezone })) : undefined;
        var task = __assign(__assign(__assign({ id: responseData.id, order: responseData.childOrder, content: responseData.content, description: responseData.description, projectId: responseData.projectId, sectionId: responseData.sectionId ? responseData.sectionId : undefined, isCompleted: responseData.checked, labels: responseData.labels, priority: responseData.priority, commentCount: 0, createdAt: responseData.addedAt, url: getTaskUrlFromQuickAddResponse(responseData), creatorId: (_a = responseData.addedByUid) !== null && _a !== void 0 ? _a : '' }, (due !== undefined && { due: due })), (responseData.parentId !== null && { parentId: responseData.parentId })), (responseData.responsibleUid !== null && {
          assigneeId: responseData.responsibleUid,
        }));
        return task;
      }
      exports.getTaskFromQuickAddResponse = getTaskFromQuickAddResponse;


      /***/
}),

/***/ 267:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var _typeof = __webpack_require__(431)["default"];
      function _regeneratorRuntime() {
        "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty = Object.defineProperty || function (obj, key, desc) {
            obj[key] = desc.value;
          },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), obj[key];
        }
        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
          }), generator;
        }
        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() { }
        function GeneratorFunction() { }
        function GeneratorFunctionPrototype() { }
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg,
                value = result.value;
              return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                result.value = unwrapped, resolve(result);
              }, function (error) {
                return invoke("throw", error, resolve, reject);
              });
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ;) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                if ("suspendedStart" === state) throw state = "completed", context.arg;
                context.dispatchException(context.arg);
              } else "return" === context.method && context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              }
              "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
          var info = record.arg;
          return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal", delete record.arg, entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{
            tryLoc: "root"
          }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                  return next.value = undefined, next.done = !0, next;
                };
              return next.next = next;
            }
          }
          return {
            next: doneResult
          };
        }
        function doneResult() {
          return {
            value: undefined,
            done: !0
          };
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), defineProperty(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
          var ctor = "function" == typeof genFun && genFun.constructor;
          return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports.mark = function (genFun) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
        }, exports.awrap = function (arg) {
          return {
            __await: arg
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          void 0 === PromiseImpl && (PromiseImpl = Promise);
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
          return this;
        }), define(Gp, "toString", function () {
          return "[object Generator]";
        }), exports.keys = function (val) {
          var object = Object(val),
            keys = [];
          for (var key in object) keys.push(key);
          return keys.reverse(), function next() {
            for (; keys.length;) {
              var key = keys.pop();
              if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, exports.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
          },
          stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
              return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i],
                record = entry.completion;
              if ("root" === entry.tryLoc) return handle("end");
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc"),
                  hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                } else {
                  if (!hasFinally) throw new Error("try statement without catch or finally");
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
          }
        }, exports;
      }
      module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 270:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var settle = __webpack_require__(781);
      var buildFullPath = __webpack_require__(747);
      var buildURL = __webpack_require__(692);
      var http = __webpack_require__(605);
      var https = __webpack_require__(211);
      var httpFollow = __webpack_require__(549).http;
      var httpsFollow = __webpack_require__(549).https;
      var url = __webpack_require__(835);
      var zlib = __webpack_require__(761);
      var VERSION = __webpack_require__(42).version;
      var transitionalDefaults = __webpack_require__(83);
      var AxiosError = __webpack_require__(379);
      var CanceledError = __webpack_require__(948);

      var isHttps = /https:?/;

      var supportedProtocols = ['http:', 'https:', 'file:'];

      /**
       *
       * @param {http.ClientRequestArgs} options
       * @param {AxiosProxyConfig} proxy
       * @param {string} location
       */
      function setProxy(options, proxy, location) {
        options.hostname = proxy.host;
        options.host = proxy.host;
        options.port = proxy.port;
        options.path = location;

        // Basic proxy authorization
        if (proxy.auth) {
          var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
          options.headers['Proxy-Authorization'] = 'Basic ' + base64;
        }

        // If a proxy is used, any redirects must also pass through the proxy
        options.beforeRedirect = function beforeRedirect(redirection) {
          redirection.headers.host = redirection.host;
          setProxy(redirection, proxy, redirection.href);
        };
      }

      /*eslint consistent-return:0*/
      module.exports = function httpAdapter(config) {
        return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }

            if (config.signal) {
              config.signal.removeEventListener('abort', onCanceled);
            }
          }
          var resolve = function resolve(value) {
            done();
            resolvePromise(value);
          };
          var rejected = false;
          var reject = function reject(value) {
            done();
            rejected = true;
            rejectPromise(value);
          };
          var data = config.data;
          var headers = config.headers;
          var headerNames = {};

          Object.keys(headers).forEach(function storeLowerName(name) {
            headerNames[name.toLowerCase()] = name;
          });

          // Set User-Agent (required by some servers)
          // See https://github.com/axios/axios/issues/69
          if ('user-agent' in headerNames) {
            // User-Agent is specified; handle case where no UA header is desired
            if (!headers[headerNames['user-agent']]) {
              delete headers[headerNames['user-agent']];
            }
            // Otherwise, use specified value
          } else {
            // Only set header if it hasn't been set in config
            headers['User-Agent'] = 'axios/' + VERSION;
          }

          // support for https://www.npmjs.com/package/form-data api
          if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
            Object.assign(headers, data.getHeaders());
          } else if (data && !utils.isStream(data)) {
            if (Buffer.isBuffer(data)) {
              // Nothing to do...
            } else if (utils.isArrayBuffer(data)) {
              data = Buffer.from(new Uint8Array(data));
            } else if (utils.isString(data)) {
              data = Buffer.from(data, 'utf-8');
            } else {
              return reject(new AxiosError(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                AxiosError.ERR_BAD_REQUEST,
                config
              ));
            }

            if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
              return reject(new AxiosError(
                'Request body larger than maxBodyLength limit',
                AxiosError.ERR_BAD_REQUEST,
                config
              ));
            }

            // Add Content-Length header if data exists
            if (!headerNames['content-length']) {
              headers['Content-Length'] = data.length;
            }
          }

          // HTTP basic authentication
          var auth = undefined;
          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            auth = username + ':' + password;
          }

          // Parse url
          var fullPath = buildFullPath(config.baseURL, config.url);
          var parsed = url.parse(fullPath);
          var protocol = parsed.protocol || supportedProtocols[0];

          if (supportedProtocols.indexOf(protocol) === -1) {
            return reject(new AxiosError(
              'Unsupported protocol ' + protocol,
              AxiosError.ERR_BAD_REQUEST,
              config
            ));
          }

          if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(':');
            var urlUsername = urlAuth[0] || '';
            var urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword;
          }

          if (auth && headerNames.authorization) {
            delete headers[headerNames.authorization];
          }

          var isHttpsRequest = isHttps.test(protocol);
          var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

          try {
            buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
          } catch (err) {
            var customErr = new Error(err.message);
            customErr.config = config;
            customErr.url = config.url;
            customErr.exists = true;
            reject(customErr);
          }

          var options = {
            path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            agents: { http: config.httpAgent, https: config.httpsAgent },
            auth: auth
          };

          if (config.socketPath) {
            options.socketPath = config.socketPath;
          } else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
          }

          var proxy = config.proxy;
          if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + '_proxy';
            var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            if (proxyUrl) {
              var parsedProxyUrl = url.parse(proxyUrl);
              var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
              var shouldProxy = true;

              if (noProxyEnv) {
                var noProxy = noProxyEnv.split(',').map(function trim(s) {
                  return s.trim();
                });

                shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                  if (!proxyElement) {
                    return false;
                  }
                  if (proxyElement === '*') {
                    return true;
                  }
                  if (proxyElement[0] === '.' &&
                    parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                    return true;
                  }

                  return parsed.hostname === proxyElement;
                });
              }

              if (shouldProxy) {
                proxy = {
                  host: parsedProxyUrl.hostname,
                  port: parsedProxyUrl.port,
                  protocol: parsedProxyUrl.protocol
                };

                if (parsedProxyUrl.auth) {
                  var proxyUrlAuth = parsedProxyUrl.auth.split(':');
                  proxy.auth = {
                    username: proxyUrlAuth[0],
                    password: proxyUrlAuth[1]
                  };
                }
              }
            }
          }

          if (proxy) {
            options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
            setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
          }

          var transport;
          var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
          if (config.transport) {
            transport = config.transport;
          } else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https : http;
          } else {
            if (config.maxRedirects) {
              options.maxRedirects = config.maxRedirects;
            }
            if (config.beforeRedirect) {
              options.beforeRedirect = config.beforeRedirect;
            }
            transport = isHttpsProxy ? httpsFollow : httpFollow;
          }

          if (config.maxBodyLength > -1) {
            options.maxBodyLength = config.maxBodyLength;
          }

          if (config.insecureHTTPParser) {
            options.insecureHTTPParser = config.insecureHTTPParser;
          }

          // Create the request
          var req = transport.request(options, function handleResponse(res) {
            if (req.aborted) return;

            // uncompress the response body transparently if required
            var stream = res;

            // return the last request in case of redirects
            var lastRequest = res.req || req;


            // if no content, is HEAD request or decompress disabled we should not decompress
            if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
              switch (res.headers['content-encoding']) {
                /*eslint default-case:0*/
                case 'gzip':
                case 'compress':
                case 'deflate':
                  // add the unzipper to the body stream processing pipeline
                  stream = stream.pipe(zlib.createUnzip());

                  // remove the content-encoding in order to not confuse downstream operations
                  delete res.headers['content-encoding'];
                  break;
              }
            }

            var response = {
              status: res.statusCode,
              statusText: res.statusMessage,
              headers: res.headers,
              config: config,
              request: lastRequest
            };

            if (config.responseType === 'stream') {
              response.data = stream;
              settle(resolve, reject, response);
            } else {
              var responseBuffer = [];
              var totalResponseBytes = 0;
              stream.on('data', function handleStreamData(chunk) {
                responseBuffer.push(chunk);
                totalResponseBytes += chunk.length;

                // make sure the content length is not over the maxContentLength if specified
                if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                  // stream.destoy() emit aborted event before calling reject() on Node.js v16
                  rejected = true;
                  stream.destroy();
                  reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                    AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
                }
              });

              stream.on('aborted', function handlerStreamAborted() {
                if (rejected) {
                  return;
                }
                stream.destroy();
                reject(new AxiosError(
                  'maxContentLength size of ' + config.maxContentLength + ' exceeded',
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  lastRequest
                ));
              });

              stream.on('error', function handleStreamError(err) {
                if (req.aborted) return;
                reject(AxiosError.from(err, null, config, lastRequest));
              });

              stream.on('end', function handleStreamEnd() {
                try {
                  var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                  if (config.responseType !== 'arraybuffer') {
                    responseData = responseData.toString(config.responseEncoding);
                    if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                      responseData = utils.stripBOM(responseData);
                    }
                  }
                  response.data = responseData;
                } catch (err) {
                  reject(AxiosError.from(err, null, config, response.request, response));
                }
                settle(resolve, reject, response);
              });
            }
          });

          // Handle errors
          req.on('error', function handleRequestError(err) {
            // @todo remove
            // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
            reject(AxiosError.from(err, null, config, req));
          });

          // set tcp keep alive to prevent drop connection by peer
          req.on('socket', function handleRequestSocket(socket) {
            // default interval of sending ack packet is 1 minute
            socket.setKeepAlive(true, 1000 * 60);
          });

          // Handle request timeout
          if (config.timeout) {
            // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
            var timeout = parseInt(config.timeout, 10);

            if (isNaN(timeout)) {
              reject(new AxiosError(
                'error trying to parse `config.timeout` to int',
                AxiosError.ERR_BAD_OPTION_VALUE,
                config,
                req
              ));

              return;
            }

            // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
            // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
            // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
            // And then these socket which be hang up will devoring CPU little by little.
            // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
            req.setTimeout(timeout, function handleRequestTimeout() {
              req.abort();
              var transitional = config.transitional || transitionalDefaults;
              reject(new AxiosError(
                'timeout of ' + timeout + 'ms exceeded',
                transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
                config,
                req
              ));
            });
          }

          if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function (cancel) {
              if (req.aborted) return;

              req.abort();
              reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
            };

            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
          }


          // Send the request
          if (utils.isStream(data)) {
            data.on('error', function handleStreamError(err) {
              reject(AxiosError.from(err, config, null, req));
            }).pipe(req);
          } else {
            req.end(data);
          }
        });
      };


      /***/
}),

/***/ 280:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      /**
       * Config-specific merge-function which creates a new config-object
       * by merging two configuration objects together.
       *
       * @param {Object} config1
       * @param {Object} config2
       * @returns {Object} New object resulting from merging config2 to config1
       */
      module.exports = function mergeConfig(config1, config2) {
        // eslint-disable-next-line no-param-reassign
        config2 = config2 || {};
        var config = {};

        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }

        // eslint-disable-next-line consistent-return
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
          }
        }

        // eslint-disable-next-line consistent-return
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
          }
        }

        // eslint-disable-next-line consistent-return
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
          }
        }

        // eslint-disable-next-line consistent-return
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(undefined, config1[prop]);
          }
        }

        var mergeMap = {
          'url': valueFromConfig2,
          'method': valueFromConfig2,
          'data': valueFromConfig2,
          'baseURL': defaultToConfig2,
          'transformRequest': defaultToConfig2,
          'transformResponse': defaultToConfig2,
          'paramsSerializer': defaultToConfig2,
          'timeout': defaultToConfig2,
          'timeoutMessage': defaultToConfig2,
          'withCredentials': defaultToConfig2,
          'adapter': defaultToConfig2,
          'responseType': defaultToConfig2,
          'xsrfCookieName': defaultToConfig2,
          'xsrfHeaderName': defaultToConfig2,
          'onUploadProgress': defaultToConfig2,
          'onDownloadProgress': defaultToConfig2,
          'decompress': defaultToConfig2,
          'maxContentLength': defaultToConfig2,
          'maxBodyLength': defaultToConfig2,
          'beforeRedirect': defaultToConfig2,
          'transport': defaultToConfig2,
          'httpAgent': defaultToConfig2,
          'httpsAgent': defaultToConfig2,
          'cancelToken': defaultToConfig2,
          'socketPath': defaultToConfig2,
          'responseEncoding': defaultToConfig2,
          'validateStatus': mergeDirectKeys
        };

        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
        });

        return config;
      };


      /***/
}),

/***/ 286:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.upperCaseFirst = void 0;
      /**
       * Upper case the first character of an input string.
       */
      function upperCaseFirst(input) {
        return input.charAt(0).toUpperCase() + input.substr(1);
      }
      exports.upperCaseFirst = upperCaseFirst;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 287:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var VERSION = __webpack_require__(42).version;
      var AxiosError = __webpack_require__(379);

      var validators = {};

      // eslint-disable-next-line func-names
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
        };
      });

      var deprecatedWarnings = {};

      /**
       * Transitional option validator
       * @param {function|boolean?} validator - set to false if the transitional option has been removed
       * @param {string?} version - deprecated version / removed since version
       * @param {string?} message - some message with additional info
       * @returns {function}
       */
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
        }

        // eslint-disable-next-line func-names
        return function (value, opt, opts) {
          if (validator === false) {
            throw new AxiosError(
              formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
              AxiosError.ERR_DEPRECATED
            );
          }

          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(
              formatMessage(
                opt,
                ' has been deprecated since v' + version + ' and will be removed in the near future'
              )
            );
          }

          return validator ? validator(value, opt, opts) : true;
        };
      };

      /**
       * Assert object's properties type
       * @param {object} options
       * @param {object} schema
       * @param {boolean?} allowUnknown
       */

      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== 'object') {
          throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) {
              throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }

      module.exports = {
        assertOptions: assertOptions,
        validators: validators
      };


      /***/
}),

/***/ 289:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.snakeCase = void 0;
      var tslib_1 = __webpack_require__(259);
      var dot_case_1 = __webpack_require__(541);
      function snakeCase(input, options) {
        if (options === void 0) { options = {}; }
        return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "_" }, options));
      }
      exports.snakeCase = snakeCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 300:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getColorByKey = exports.getColorByName = exports.getColorById = exports.defaultColor = exports.colors = exports.taupe = exports.gray = exports.charcoal = exports.salmon = exports.magenta = exports.lavender = exports.violet = exports.grape = exports.blue = exports.lightBlue = exports.skyBlue = exports.turquoise = exports.mintGreen = exports.green = exports.limeGreen = exports.oliveGreen = exports.yellow = exports.orange = exports.red = exports.berryRed = void 0;
      exports.berryRed = {
        id: 30,
        key: 'berry_red',
        displayName: 'Berry Red',
        name: 'Berry Red',
        hexValue: '#b8255f',
        value: '#b8255f',
      };
      exports.red = {
        id: 31,
        key: 'red',
        displayName: 'Red',
        name: 'Red',
        hexValue: '#db4035',
        value: '#db4035',
      };
      exports.orange = {
        id: 32,
        key: 'orange',
        displayName: 'Orange',
        name: 'Orange',
        hexValue: '#ff9933',
        value: '#ff9933',
      };
      exports.yellow = {
        id: 33,
        key: 'yellow',
        displayName: 'Yellow',
        name: 'Yellow',
        hexValue: '#fad000',
        value: '#fad000',
      };
      exports.oliveGreen = {
        id: 34,
        key: 'olive_green',
        displayName: 'Olive Green',
        name: 'Olive Green',
        hexValue: '#afb83b',
        value: '#afb83b',
      };
      exports.limeGreen = {
        id: 35,
        key: 'lime_green',
        displayName: 'Lime Green',
        name: 'Lime Green',
        hexValue: '#7ecc49',
        value: '#7ecc49',
      };
      exports.green = {
        id: 36,
        key: 'green',
        displayName: 'Green',
        name: 'Green',
        hexValue: '#299438',
        value: '#299438',
      };
      exports.mintGreen = {
        id: 37,
        key: 'mint_green',
        displayName: 'Mint Green',
        name: 'Mint Green',
        hexValue: '#6accbc',
        value: '#6accbc',
      };
      exports.turquoise = {
        id: 38,
        key: 'turquoise',
        displayName: 'Turquoise',
        name: 'Turquoise',
        hexValue: '#158fad',
        value: '#158fad',
      };
      exports.skyBlue = {
        id: 39,
        key: 'sky_blue',
        displayName: 'Sky Blue',
        name: 'Sky Blue',
        hexValue: '#14aaf5',
        value: '#14aaf5',
      };
      exports.lightBlue = {
        id: 40,
        key: 'light_blue',
        displayName: 'Light Blue',
        name: 'Light Blue',
        hexValue: '#96c3eb',
        value: '#96c3eb',
      };
      exports.blue = {
        id: 41,
        key: 'blue',
        displayName: 'Blue',
        name: 'Blue',
        hexValue: '#4073ff',
        value: '#4073ff',
      };
      exports.grape = {
        id: 42,
        key: 'grape',
        displayName: 'Grape',
        name: 'Grape',
        hexValue: '#884dff',
        value: '#884dff',
      };
      exports.violet = {
        id: 43,
        key: 'violet',
        displayName: 'Violet',
        name: 'Violet',
        hexValue: '#af38eb',
        value: '#af38eb',
      };
      exports.lavender = {
        id: 44,
        key: 'lavender',
        displayName: 'Lavender',
        name: 'Lavender',
        hexValue: '#eb96eb',
        value: '#eb96eb',
      };
      exports.magenta = {
        id: 45,
        key: 'magenta',
        displayName: 'Magenta',
        name: 'Magenta',
        hexValue: '#e05194',
        value: '#e05194',
      };
      exports.salmon = {
        id: 46,
        key: 'salmon',
        displayName: 'Salmon',
        name: 'Salmon',
        hexValue: '#ff8d85',
        value: '#ff8d85',
      };
      exports.charcoal = {
        id: 47,
        key: 'charcoal',
        displayName: 'Charcoal',
        name: 'Charcoal',
        hexValue: '#808080',
        value: '#808080',
      };
      exports.gray = {
        id: 48,
        key: 'gray',
        displayName: 'Gray',
        name: 'Gray',
        hexValue: '#b8b8b8',
        value: '#b8b8b8',
      };
      exports.taupe = {
        id: 49,
        key: 'taupe',
        displayName: 'Taupe',
        name: 'Taupe',
        hexValue: '#ccac93',
        value: '#ccac93',
      };
      exports.colors = [
        exports.berryRed,
        exports.red,
        exports.orange,
        exports.yellow,
        exports.oliveGreen,
        exports.limeGreen,
        exports.green,
        exports.mintGreen,
        exports.turquoise,
        exports.skyBlue,
        exports.lightBlue,
        exports.blue,
        exports.grape,
        exports.violet,
        exports.lavender,
        exports.magenta,
        exports.salmon,
        exports.charcoal,
        exports.gray,
        exports.taupe,
      ];
      exports.defaultColor = exports.charcoal;
      /**
       * @deprecated Use {@link getColorByKey} instead
       */
      function getColorById(colorId) {
        var color = exports.colors.find(function (color) { return color.id === colorId; });
        return color !== null && color !== void 0 ? color : exports.defaultColor;
      }
      exports.getColorById = getColorById;
      /**
       * @deprecated Use {@link getColorByKey} instead
       */
      function getColorByName(colorName) {
        var color = exports.colors.find(function (color) { return color.name === colorName; });
        return color !== null && color !== void 0 ? color : exports.defaultColor;
      }
      exports.getColorByName = getColorByName;
      function getColorByKey(colorKey) {
        var color = exports.colors.find(function (color) { return color.key === colorKey; });
        return color !== null && color !== void 0 ? color : exports.defaultColor;
      }
      exports.getColorByKey = getColorByKey;


      /***/
}),

/***/ 301:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Nullish = exports.Null = exports.Undefined = exports.Literal = exports.literal = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var union_1 = __webpack_require__(550);
      /**
       * Be aware of an Array of Symbols `[Symbol()]` which would throw "TypeError: Cannot convert a Symbol value to a string"
       */
      function literal(value) {
        return Array.isArray(value)
          ? String(value.map(String))
          : typeof value === 'bigint'
            ? String(value) + 'n'
            : String(value);
      }
      exports.literal = literal;
      /**
       * Construct a runtype for a type literal.
       */
      function Literal(valueBase) {
        var self = { tag: 'literal', value: valueBase };
        return (0, runtype_1.create)(function (value) {
          return value === valueBase
            ? (0, util_1.SUCCESS)(value)
            : util_1.FAILURE.VALUE_INCORRECT('literal', "`".concat(literal(valueBase), "`"), "`".concat(literal(value), "`"));
        }, self);
      }
      exports.Literal = Literal;
      /**
       * An alias for Literal(undefined).
       */
      exports.Undefined = Literal(undefined);
      /**
       * An alias for Literal(null).
       */
      exports.Null = Literal(null);
      /**
       * An alias for `Union(Null, Undefined)`.
       */
      exports.Nullish = (0, union_1.Union)(exports.Null, exports.Undefined);


      /***/
}),

/***/ 308:
/***/ (function (module) {

      "use strict";


      const denyList = new Set([
        'ENOTFOUND',
        'ENETUNREACH',

        // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
        'UNABLE_TO_GET_ISSUER_CERT',
        'UNABLE_TO_GET_CRL',
        'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
        'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
        'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
        'CERT_SIGNATURE_FAILURE',
        'CRL_SIGNATURE_FAILURE',
        'CERT_NOT_YET_VALID',
        'CERT_HAS_EXPIRED',
        'CRL_NOT_YET_VALID',
        'CRL_HAS_EXPIRED',
        'ERROR_IN_CERT_NOT_BEFORE_FIELD',
        'ERROR_IN_CERT_NOT_AFTER_FIELD',
        'ERROR_IN_CRL_LAST_UPDATE_FIELD',
        'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
        'OUT_OF_MEM',
        'DEPTH_ZERO_SELF_SIGNED_CERT',
        'SELF_SIGNED_CERT_IN_CHAIN',
        'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
        'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
        'CERT_CHAIN_TOO_LONG',
        'CERT_REVOKED',
        'INVALID_CA',
        'PATH_LENGTH_EXCEEDED',
        'INVALID_PURPOSE',
        'CERT_UNTRUSTED',
        'CERT_REJECTED',
        'HOSTNAME_MISMATCH'
      ]);

      // TODO: Use `error?.code` when targeting Node.js 14
      module.exports = error => !denyList.has(error && error.code);


      /***/
}),

/***/ 312:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
        };
        return function (d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TodoistRequestError = void 0;
      var ts_custom_error_1 = __webpack_require__(912);
      var authenticationErrorCodes = [401, 403];
      var TodoistRequestError = /** @class */ (function (_super) {
        __extends(TodoistRequestError, _super);
        function TodoistRequestError(message, httpStatusCode, responseData) {
          var _this = _super.call(this, message) || this;
          _this.message = message;
          _this.httpStatusCode = httpStatusCode;
          _this.responseData = responseData;
          _this.isAuthenticationError = function () {
            if (!_this.httpStatusCode) {
              return false;
            }
            return authenticationErrorCodes.includes(_this.httpStatusCode);
          };
          Object.defineProperty(_this, 'name', { value: 'TodoistRequestError' });
          return _this;
        }
        return TodoistRequestError;
      }(ts_custom_error_1.CustomError));
      exports.TodoistRequestError = TodoistRequestError;


      /***/
}),

/***/ 334:
/***/ (function (module, __unusedexports, __webpack_require__) {

      module.exports =
      {
        parallel: __webpack_require__(424),
        serial: __webpack_require__(91),
        serialOrdered: __webpack_require__(892)
      };


      /***/
}),

/***/ 335:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Brand = void 0;
      var runtype_1 = __webpack_require__(861);
      function Brand(brand, entity) {
        var self = { tag: 'brand', brand: brand, entity: entity };
        return (0, runtype_1.create)(function (value) { return entity.validate(value); }, self);
      }
      exports.Brand = Brand;


      /***/
}),

/***/ 338:
/***/ (function (module) {

      "use strict";


      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */
      module.exports = function isAbsoluteURL(url) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      };


      /***/
}),

/***/ 346:
/***/ (function (module, __unusedexports, __webpack_require__) {

      const axiosRetry = __webpack_require__(723).default;

      module.exports = axiosRetry;
      module.exports.default = axiosRetry;


      /***/
}),

/***/ 357:
/***/ (function (module) {

      module.exports = require("assert");

      /***/
}),

/***/ 372:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rng;

      var _crypto = _interopRequireDefault(__webpack_require__(417));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

      let poolPtr = rnds8Pool.length;

      function rng() {
        if (poolPtr > rnds8Pool.length - 16) {
          _crypto.default.randomFillSync(rnds8Pool);

          poolPtr = 0;
        }

        return rnds8Pool.slice(poolPtr, poolPtr += 16);
      }

      /***/
}),

/***/ 374:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var transformData = __webpack_require__(644);
      var isCancel = __webpack_require__(422);
      var defaults = __webpack_require__(189);
      var CanceledError = __webpack_require__(948);

      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }

        if (config.signal && config.signal.aborted) {
          throw new CanceledError();
        }
      }

      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);

        // Ensure headers exist
        config.headers = config.headers || {};

        // Transform request data
        config.data = transformData.call(
          config,
          config.data,
          config.headers,
          config.transformRequest
        );

        // Flatten headers
        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers
        );

        utils.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );

        var adapter = config.adapter || defaults.adapter;

        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);

          // Transform response data
          response.data = transformData.call(
            config,
            response.data,
            response.headers,
            config.transformResponse
          );

          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);

            // Transform response data
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                reason.response.data,
                reason.response.headers,
                config.transformResponse
              );
            }
          }

          return Promise.reject(reason);
        });
      };


      /***/
}),

/***/ 379:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [config] The config.
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */
      function AxiosError(message, code, config, request, response) {
        Error.call(this);
        this.message = message;
        this.name = 'AxiosError';
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        response && (this.response = response);
      }

      utils.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });

      var prototype = AxiosError.prototype;
      var descriptors = {};

      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED'
        // eslint-disable-next-line func-names
      ].forEach(function (code) {
        descriptors[code] = { value: code };
      });

      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, 'isAxiosError', { value: true });

      // eslint-disable-next-line func-names
      AxiosError.from = function (error, code, config, request, response, customProps) {
        var axiosError = Object.create(prototype);

        utils.toFlatObject(error, axiosError, function filter(obj) {
          return obj !== Error.prototype;
        });

        AxiosError.call(axiosError, error.message, code, config, request, response);

        axiosError.name = error.name;

        customProps && Object.assign(axiosError, customProps);

        return axiosError;
      };

      module.exports = AxiosError;


      /***/
}),

/***/ 389:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _v = _interopRequireDefault(__webpack_require__(15));

      var _md = _interopRequireDefault(__webpack_require__(433));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const v3 = (0, _v.default)('v3', 0x30, _md.default);
      var _default = v3;
      exports.default = _default;

      /***/
}),

/***/ 413:
/***/ (function (module) {

      module.exports = require("stream");

      /***/
}),

/***/ 417:
/***/ (function (module) {

      module.exports = require("crypto");

      /***/
}),

/***/ 422:
/***/ (function (module) {

      "use strict";


      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };


      /***/
}),

/***/ 424:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var iterate = __webpack_require__(157)
        , initState = __webpack_require__(147)
        , terminator = __webpack_require__(939)
        ;

      // Public API
      module.exports = parallel;

      /**
       * Runs iterator over provided array elements in parallel
       *
       * @param   {array|object} list - array or object (named list) to iterate over
       * @param   {function} iterator - iterator to run
       * @param   {function} callback - invoked when all elements processed
       * @returns {function} - jobs terminator
       */
      function parallel(list, iterator, callback) {
        var state = initState(list);

        while (state.index < (state['keyedList'] || list).length) {
          iterate(list, iterator, state, function (error, result) {
            if (error) {
              callback(error, result);
              return;
            }

            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
              callback(null, state.results);
              return;
            }
          });

          state.index++;
        }

        return terminator.bind(state, callback);
      }


      /***/
}),

/***/ 431:
/***/ (function (module) {

      function _typeof(obj) {
        "@babel/helpers - typeof";

        return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 433:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _crypto = _interopRequireDefault(__webpack_require__(417));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function md5(bytes) {
        if (Array.isArray(bytes)) {
          bytes = Buffer.from(bytes);
        } else if (typeof bytes === 'string') {
          bytes = Buffer.from(bytes, 'utf8');
        }

        return _crypto.default.createHash('md5').update(bytes).digest();
      }

      var _default = md5;
      exports.default = _default;

      /***/
}),

/***/ 449:
/***/ (function (module, __unusedexports, __webpack_require__) {

      // eslint-disable-next-line strict
      module.exports = __webpack_require__(928);


      /***/
}),

/***/ 454:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var debug;

      module.exports = function () {
        if (!debug) {
          try {
            /* eslint global-require: off */
            debug = __webpack_require__(944)("follow-redirects");
          }
          catch (error) { /* */ }
          if (typeof debug !== "function") {
            debug = function () { /* */ };
          }
        }
        debug.apply(null, arguments);
      };


      /***/
}),

/***/ 460:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Unknown = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'unknown' };
      /**
       * Validates anything, but provides no new type information about it.
       */
      exports.Unknown = (0, runtype_1.create)(function (value) { return (0, util_1.SUCCESS)(value); }, self);


      /***/
}),

/***/ 469:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Optional = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      /**
       * Validates optional value.
       */
      function Optional(runtype) {
        var self = { tag: 'optional', underlying: runtype };
        return (0, runtype_1.create)(function (value) { return (value === undefined ? (0, util_1.SUCCESS)(value) : runtype.validate(value)); }, self);
      }
      exports.Optional = Optional;


      /***/
}),

/***/ 477:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.User = exports.Comment = exports.Attachment = exports.Label = exports.Section = exports.Project = exports.Task = exports.DueDate = exports.Int = void 0;
      var runtypes_1 = __webpack_require__(81);
      exports.Int = runtypes_1.Number.withConstraint(function (n) { return Number.isInteger(n) || "".concat(n, " is not a valid entity id. Should be a string"); });
      exports.DueDate = (0, runtypes_1.Record)({
        isRecurring: runtypes_1.Boolean,
        string: runtypes_1.String,
        date: runtypes_1.String,
      }).And((0, runtypes_1.Partial)({
        datetime: runtypes_1.String.Or(runtypes_1.Null),
        timezone: runtypes_1.String.Or(runtypes_1.Null),
      }));
      exports.Task = (0, runtypes_1.Record)({
        id: runtypes_1.String,
        order: exports.Int,
        content: runtypes_1.String,
        description: runtypes_1.String,
        projectId: runtypes_1.String,
        isCompleted: runtypes_1.Boolean,
        labels: (0, runtypes_1.Array)(runtypes_1.String),
        priority: exports.Int,
        commentCount: exports.Int,
        createdAt: runtypes_1.String,
        url: runtypes_1.String,
        creatorId: runtypes_1.String,
      }).And((0, runtypes_1.Partial)({
        due: exports.DueDate.Or(runtypes_1.Null),
        assigneeId: runtypes_1.String.Or(runtypes_1.Null),
        assignerId: runtypes_1.String.Or(runtypes_1.Null),
        parentId: runtypes_1.String.Or(runtypes_1.Null),
        sectionId: runtypes_1.String.Or(runtypes_1.Null),
      }));
      exports.Project = (0, runtypes_1.Record)({
        id: runtypes_1.String,
        name: runtypes_1.String,
        color: runtypes_1.String,
        commentCount: exports.Int,
        isShared: runtypes_1.Boolean,
        isFavorite: runtypes_1.Boolean,
        url: runtypes_1.String,
        isInboxProject: runtypes_1.Boolean,
        isTeamInbox: runtypes_1.Boolean,
        order: exports.Int,
        viewStyle: runtypes_1.String,
      }).And((0, runtypes_1.Partial)({
        parentId: runtypes_1.String.Or(runtypes_1.Null),
      }));
      exports.Section = (0, runtypes_1.Record)({
        id: runtypes_1.String,
        order: exports.Int,
        name: runtypes_1.String,
        projectId: runtypes_1.String,
      });
      exports.Label = (0, runtypes_1.Record)({
        id: runtypes_1.String,
        order: exports.Int,
        name: runtypes_1.String,
        color: runtypes_1.String,
        isFavorite: runtypes_1.Boolean,
      });
      exports.Attachment = (0, runtypes_1.Record)({
        resourceType: runtypes_1.String,
      }).And((0, runtypes_1.Partial)({
        fileName: runtypes_1.String.Or(runtypes_1.Null),
        fileSize: exports.Int.Or(runtypes_1.Null),
        fileType: runtypes_1.String.Or(runtypes_1.Null),
        fileUrl: runtypes_1.String.Or(runtypes_1.Null),
        fileDuration: exports.Int.Or(runtypes_1.Null),
        uploadState: (0, runtypes_1.Union)((0, runtypes_1.Literal)('pending'), (0, runtypes_1.Literal)('completed')).Or(runtypes_1.Null),
        image: runtypes_1.String.Or(runtypes_1.Null),
        imageWidth: exports.Int.Or(runtypes_1.Null),
        imageHeight: exports.Int.Or(runtypes_1.Null),
        url: runtypes_1.String.Or(runtypes_1.Null),
        title: runtypes_1.String.Or(runtypes_1.Null),
      }));
      exports.Comment = (0, runtypes_1.Record)({
        id: runtypes_1.String,
        content: runtypes_1.String,
        postedAt: runtypes_1.String,
      }).And((0, runtypes_1.Partial)({
        taskId: runtypes_1.String.Or(runtypes_1.Null),
        projectId: runtypes_1.String.Or(runtypes_1.Null),
        attachment: exports.Attachment.Or(runtypes_1.Null),
      }));
      exports.User = (0, runtypes_1.Record)({
        id: runtypes_1.String,
        name: runtypes_1.String,
        email: runtypes_1.String,
      });


      /***/
}),

/***/ 479:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isAxiosHeaders = exports.isTransformable = exports.isPlainObject = exports.isFormData = exports.isURLSearchParams = void 0;
      var isURLSearchParams = function (value) {
        return (typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams);
      };
      exports.isURLSearchParams = isURLSearchParams;
      var isFormData = function (value) {
        return typeof FormData !== 'undefined' && value instanceof FormData;
      };
      exports.isFormData = isFormData;
      var isPlainObject = function (value) {
        if (value == null) {
          return false;
        }
        var proto = Object.getPrototypeOf(value);
        return proto === null || proto === Object.prototype;
      };
      exports.isPlainObject = isPlainObject;
      var isTransformable = function (value) {
        return (Array.isArray(value) ||
          (0, exports.isPlainObject)(value) ||
          (0, exports.isFormData)(value) ||
          (0, exports.isURLSearchParams)(value));
      };
      exports.isTransformable = isTransformable;
      // Dirty hack for unexported AxiosHeaders.
      // Don't handle it as Transformable to reduce the scope of the impact.
      var isAxiosHeaders = function (value) {
        var _a, _b;
        if (value == null) {
          return false;
        }
        return ((_b = (_a = Object.getPrototypeOf(value)) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'AxiosHeaders';
      };
      exports.isAxiosHeaders = isAxiosHeaders;


      /***/
}),

/***/ 485:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.request = exports.isSuccess = exports.paramsSerializer = void 0;
      var axios_1 = __importDefault(__webpack_require__(775));
      var axios_case_converter_1 = __importDefault(__webpack_require__(640));
      var errors_1 = __webpack_require__(312);
      var uuid_1 = __webpack_require__(884);
      var axios_retry_1 = __importDefault(__webpack_require__(346));
      function paramsSerializer(params) {
        var qs = new URLSearchParams();
        Object.keys(params).forEach(function (key) {
          var value = params[key];
          if (Array.isArray(value)) {
            qs.append(key, value.join(','));
          }
          else {
            qs.append(key, String(value));
          }
        });
        return qs.toString();
      }
      exports.paramsSerializer = paramsSerializer;
      var defaultHeaders = {
        'Content-Type': 'application/json',
      };
      function getAuthHeader(apiKey) {
        return "Bearer ".concat(apiKey);
      }
      function isNetworkError(error) {
        return Boolean(!error.response && error.code !== 'ECONNABORTED');
      }
      function getRetryDelay(retryCount) {
        return retryCount === 1 ? 0 : 500;
      }
      function isAxiosError(error) {
        return Boolean(error === null || error === void 0 ? void 0 : error.isAxiosError);
      }
      function getTodoistRequestError(error, originalStack) {
        var requestError = new errors_1.TodoistRequestError(error.message);
        requestError.stack = isAxiosError(error) && originalStack ? originalStack.stack : error.stack;
        if (isAxiosError(error) && error.response) {
          requestError.httpStatusCode = error.response.status;
          requestError.responseData = error.response.data;
        }
        return requestError;
      }
      function getRequestConfiguration(baseURL, apiToken, requestId) {
        var authHeader = apiToken ? { Authorization: getAuthHeader(apiToken) } : undefined;
        var requestIdHeader = requestId ? { 'X-Request-Id': requestId } : undefined;
        var headers = __assign(__assign(__assign({}, defaultHeaders), authHeader), requestIdHeader);
        return { baseURL: baseURL, headers: headers };
      }
      function getAxiosClient(baseURL, apiToken, requestId) {
        var configuration = getRequestConfiguration(baseURL, apiToken, requestId);
        var client = (0, axios_case_converter_1.default)(axios_1.default.create(configuration));
        (0, axios_retry_1.default)(client, {
          retries: 3,
          retryCondition: isNetworkError,
          retryDelay: getRetryDelay,
        });
        return client;
      }
      function isSuccess(response) {
        return response.status >= 200 && response.status < 300;
      }
      exports.isSuccess = isSuccess;
      function request(httpMethod, baseUri, relativePath, apiToken, payload, requestId) {
        return __awaiter(this, void 0, void 0, function () {
          var originalStack, axiosClient, _a, error_1;
          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                originalStack = new Error();
                _b.label = 1;
              case 1:
                _b.trys.push([1, 9, , 10]);
                if (httpMethod === 'POST' && !requestId) {
                  requestId = (0, uuid_1.v4)();
                }
                axiosClient = getAxiosClient(baseUri, apiToken, requestId);
                _a = httpMethod;
                switch (_a) {
                  case 'GET': return [3 /*break*/, 2];
                  case 'POST': return [3 /*break*/, 4];
                  case 'DELETE': return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
              case 2: return [4 /*yield*/, axiosClient.get(relativePath, {
                params: payload,
                paramsSerializer: paramsSerializer,
              })];
              case 3: return [2 /*return*/, _b.sent()];
              case 4: return [4 /*yield*/, axiosClient.post(relativePath, payload)];
              case 5: return [2 /*return*/, _b.sent()];
              case 6: return [4 /*yield*/, axiosClient.delete(relativePath)];
              case 7: return [2 /*return*/, _b.sent()];
              case 8: return [3 /*break*/, 10];
              case 9:
                error_1 = _b.sent();
                if (!isAxiosError(error_1) && !(error_1 instanceof Error)) {
                  throw new Error('An unknown error occurred during the request');
                }
                throw getTodoistRequestError(error_1, originalStack);
              case 10: return [2 /*return*/];
            }
          });
        });
      }
      exports.request = request;


      /***/
}),

/***/ 488:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var settle = __webpack_require__(781);
      var cookies = __webpack_require__(695);
      var buildURL = __webpack_require__(692);
      var buildFullPath = __webpack_require__(747);
      var parseHeaders = __webpack_require__(763);
      var isURLSameOrigin = __webpack_require__(756);
      var transitionalDefaults = __webpack_require__(83);
      var AxiosError = __webpack_require__(379);
      var CanceledError = __webpack_require__(948);
      var parseProtocol = __webpack_require__(808);

      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }

            if (config.signal) {
              config.signal.removeEventListener('abort', onCanceled);
            }
          }

          if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
            delete requestHeaders['Content-Type']; // Let the browser set it
          }

          var request = new XMLHttpRequest();

          // HTTP basic authentication
          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
          }

          var fullPath = buildFullPath(config.baseURL, config.url);

          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

          // Set the request timeout in MS
          request.timeout = config.timeout;

          function onloadend() {
            if (!request) {
              return;
            }
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ?
              request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config: config,
              request: request
            };

            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);

            // Clean up request
            request = null;
          }

          if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
          } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }

              // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
              }
              // readystate handler is calling before onerror or ontimeout handlers,
              // so we should call onloadend on the next 'tick'
              setTimeout(onloadend);
            };
          }

          // Handle browser request cancellation (as opposed to a manual cancellation)
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }

            reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

            // Clean up request
            request = null;
          };

          // Handle low level network errors
          request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

            // Clean up request
            request = null;
          };

          // Handle timeout
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
              config,
              request));

            // Clean up request
            request = null;
          };

          // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.
          if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
              cookies.read(config.xsrfCookieName) :
              undefined;

            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }

          // Add headers to the request
          if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                // Remove Content-Type if data is undefined
                delete requestHeaders[key];
              } else {
                // Otherwise add header to the request
                request.setRequestHeader(key, val);
              }
            });
          }

          // Add withCredentials to request if needed
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }

          // Add responseType to request if needed
          if (responseType && responseType !== 'json') {
            request.responseType = config.responseType;
          }

          // Handle progress if needed
          if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
          }

          // Not all browsers support upload events
          if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
          }

          if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function (cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
              request.abort();
              request = null;
            };

            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
          }

          if (!requestData) {
            requestData = null;
          }

          var protocol = parseProtocol(fullPath);

          if (protocol && ['http', 'https', 'file'].indexOf(protocol) === -1) {
            reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
            return;
          }


          // Send the request
          request.send(requestData);
        });
      };


      /***/
}),

/***/ 500:
/***/ (function (module) {

      module.exports = defer;

      /**
       * Runs provided function on next iteration of the event loop
       *
       * @param {function} fn - function to run
       */
      function defer(fn) {
        var nextTick = typeof setImmediate == 'function'
          ? setImmediate
          : (
            typeof process == 'object' && typeof process.nextTick == 'function'
              ? process.nextTick
              : null
          );

        if (nextTick) {
          nextTick(fn);
        }
        else {
          setTimeout(fn, 0);
        }
      }


      /***/
}),

/***/ 512:
/***/ (function (module) {

      module.exports = { "application/1d-interleaved-parityfec": { "source": "iana" }, "application/3gpdash-qoe-report+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/3gpp-ims+xml": { "source": "iana", "compressible": true }, "application/3gpphal+json": { "source": "iana", "compressible": true }, "application/3gpphalforms+json": { "source": "iana", "compressible": true }, "application/a2l": { "source": "iana" }, "application/ace+cbor": { "source": "iana" }, "application/activemessage": { "source": "iana" }, "application/activity+json": { "source": "iana", "compressible": true }, "application/alto-costmap+json": { "source": "iana", "compressible": true }, "application/alto-costmapfilter+json": { "source": "iana", "compressible": true }, "application/alto-directory+json": { "source": "iana", "compressible": true }, "application/alto-endpointcost+json": { "source": "iana", "compressible": true }, "application/alto-endpointcostparams+json": { "source": "iana", "compressible": true }, "application/alto-endpointprop+json": { "source": "iana", "compressible": true }, "application/alto-endpointpropparams+json": { "source": "iana", "compressible": true }, "application/alto-error+json": { "source": "iana", "compressible": true }, "application/alto-networkmap+json": { "source": "iana", "compressible": true }, "application/alto-networkmapfilter+json": { "source": "iana", "compressible": true }, "application/alto-updatestreamcontrol+json": { "source": "iana", "compressible": true }, "application/alto-updatestreamparams+json": { "source": "iana", "compressible": true }, "application/aml": { "source": "iana" }, "application/andrew-inset": { "source": "iana", "extensions": ["ez"] }, "application/applefile": { "source": "iana" }, "application/applixware": { "source": "apache", "extensions": ["aw"] }, "application/at+jwt": { "source": "iana" }, "application/atf": { "source": "iana" }, "application/atfx": { "source": "iana" }, "application/atom+xml": { "source": "iana", "compressible": true, "extensions": ["atom"] }, "application/atomcat+xml": { "source": "iana", "compressible": true, "extensions": ["atomcat"] }, "application/atomdeleted+xml": { "source": "iana", "compressible": true, "extensions": ["atomdeleted"] }, "application/atomicmail": { "source": "iana" }, "application/atomsvc+xml": { "source": "iana", "compressible": true, "extensions": ["atomsvc"] }, "application/atsc-dwd+xml": { "source": "iana", "compressible": true, "extensions": ["dwd"] }, "application/atsc-dynamic-event-message": { "source": "iana" }, "application/atsc-held+xml": { "source": "iana", "compressible": true, "extensions": ["held"] }, "application/atsc-rdt+json": { "source": "iana", "compressible": true }, "application/atsc-rsat+xml": { "source": "iana", "compressible": true, "extensions": ["rsat"] }, "application/atxml": { "source": "iana" }, "application/auth-policy+xml": { "source": "iana", "compressible": true }, "application/bacnet-xdd+zip": { "source": "iana", "compressible": false }, "application/batch-smtp": { "source": "iana" }, "application/bdoc": { "compressible": false, "extensions": ["bdoc"] }, "application/beep+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/calendar+json": { "source": "iana", "compressible": true }, "application/calendar+xml": { "source": "iana", "compressible": true, "extensions": ["xcs"] }, "application/call-completion": { "source": "iana" }, "application/cals-1840": { "source": "iana" }, "application/captive+json": { "source": "iana", "compressible": true }, "application/cbor": { "source": "iana" }, "application/cbor-seq": { "source": "iana" }, "application/cccex": { "source": "iana" }, "application/ccmp+xml": { "source": "iana", "compressible": true }, "application/ccxml+xml": { "source": "iana", "compressible": true, "extensions": ["ccxml"] }, "application/cdfx+xml": { "source": "iana", "compressible": true, "extensions": ["cdfx"] }, "application/cdmi-capability": { "source": "iana", "extensions": ["cdmia"] }, "application/cdmi-container": { "source": "iana", "extensions": ["cdmic"] }, "application/cdmi-domain": { "source": "iana", "extensions": ["cdmid"] }, "application/cdmi-object": { "source": "iana", "extensions": ["cdmio"] }, "application/cdmi-queue": { "source": "iana", "extensions": ["cdmiq"] }, "application/cdni": { "source": "iana" }, "application/cea": { "source": "iana" }, "application/cea-2018+xml": { "source": "iana", "compressible": true }, "application/cellml+xml": { "source": "iana", "compressible": true }, "application/cfw": { "source": "iana" }, "application/city+json": { "source": "iana", "compressible": true }, "application/clr": { "source": "iana" }, "application/clue+xml": { "source": "iana", "compressible": true }, "application/clue_info+xml": { "source": "iana", "compressible": true }, "application/cms": { "source": "iana" }, "application/cnrp+xml": { "source": "iana", "compressible": true }, "application/coap-group+json": { "source": "iana", "compressible": true }, "application/coap-payload": { "source": "iana" }, "application/commonground": { "source": "iana" }, "application/conference-info+xml": { "source": "iana", "compressible": true }, "application/cose": { "source": "iana" }, "application/cose-key": { "source": "iana" }, "application/cose-key-set": { "source": "iana" }, "application/cpl+xml": { "source": "iana", "compressible": true, "extensions": ["cpl"] }, "application/csrattrs": { "source": "iana" }, "application/csta+xml": { "source": "iana", "compressible": true }, "application/cstadata+xml": { "source": "iana", "compressible": true }, "application/csvm+json": { "source": "iana", "compressible": true }, "application/cu-seeme": { "source": "apache", "extensions": ["cu"] }, "application/cwt": { "source": "iana" }, "application/cybercash": { "source": "iana" }, "application/dart": { "compressible": true }, "application/dash+xml": { "source": "iana", "compressible": true, "extensions": ["mpd"] }, "application/dash-patch+xml": { "source": "iana", "compressible": true, "extensions": ["mpp"] }, "application/dashdelta": { "source": "iana" }, "application/davmount+xml": { "source": "iana", "compressible": true, "extensions": ["davmount"] }, "application/dca-rft": { "source": "iana" }, "application/dcd": { "source": "iana" }, "application/dec-dx": { "source": "iana" }, "application/dialog-info+xml": { "source": "iana", "compressible": true }, "application/dicom": { "source": "iana" }, "application/dicom+json": { "source": "iana", "compressible": true }, "application/dicom+xml": { "source": "iana", "compressible": true }, "application/dii": { "source": "iana" }, "application/dit": { "source": "iana" }, "application/dns": { "source": "iana" }, "application/dns+json": { "source": "iana", "compressible": true }, "application/dns-message": { "source": "iana" }, "application/docbook+xml": { "source": "apache", "compressible": true, "extensions": ["dbk"] }, "application/dots+cbor": { "source": "iana" }, "application/dskpp+xml": { "source": "iana", "compressible": true }, "application/dssc+der": { "source": "iana", "extensions": ["dssc"] }, "application/dssc+xml": { "source": "iana", "compressible": true, "extensions": ["xdssc"] }, "application/dvcs": { "source": "iana" }, "application/ecmascript": { "source": "iana", "compressible": true, "extensions": ["es", "ecma"] }, "application/edi-consent": { "source": "iana" }, "application/edi-x12": { "source": "iana", "compressible": false }, "application/edifact": { "source": "iana", "compressible": false }, "application/efi": { "source": "iana" }, "application/elm+json": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/elm+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.cap+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/emergencycalldata.comment+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.control+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.deviceinfo+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.ecall.msd": { "source": "iana" }, "application/emergencycalldata.providerinfo+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.serviceinfo+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.subscriberinfo+xml": { "source": "iana", "compressible": true }, "application/emergencycalldata.veds+xml": { "source": "iana", "compressible": true }, "application/emma+xml": { "source": "iana", "compressible": true, "extensions": ["emma"] }, "application/emotionml+xml": { "source": "iana", "compressible": true, "extensions": ["emotionml"] }, "application/encaprtp": { "source": "iana" }, "application/epp+xml": { "source": "iana", "compressible": true }, "application/epub+zip": { "source": "iana", "compressible": false, "extensions": ["epub"] }, "application/eshop": { "source": "iana" }, "application/exi": { "source": "iana", "extensions": ["exi"] }, "application/expect-ct-report+json": { "source": "iana", "compressible": true }, "application/express": { "source": "iana", "extensions": ["exp"] }, "application/fastinfoset": { "source": "iana" }, "application/fastsoap": { "source": "iana" }, "application/fdt+xml": { "source": "iana", "compressible": true, "extensions": ["fdt"] }, "application/fhir+json": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/fhir+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/fido.trusted-apps+json": { "compressible": true }, "application/fits": { "source": "iana" }, "application/flexfec": { "source": "iana" }, "application/font-sfnt": { "source": "iana" }, "application/font-tdpfr": { "source": "iana", "extensions": ["pfr"] }, "application/font-woff": { "source": "iana", "compressible": false }, "application/framework-attributes+xml": { "source": "iana", "compressible": true }, "application/geo+json": { "source": "iana", "compressible": true, "extensions": ["geojson"] }, "application/geo+json-seq": { "source": "iana" }, "application/geopackage+sqlite3": { "source": "iana" }, "application/geoxacml+xml": { "source": "iana", "compressible": true }, "application/gltf-buffer": { "source": "iana" }, "application/gml+xml": { "source": "iana", "compressible": true, "extensions": ["gml"] }, "application/gpx+xml": { "source": "apache", "compressible": true, "extensions": ["gpx"] }, "application/gxf": { "source": "apache", "extensions": ["gxf"] }, "application/gzip": { "source": "iana", "compressible": false, "extensions": ["gz"] }, "application/h224": { "source": "iana" }, "application/held+xml": { "source": "iana", "compressible": true }, "application/hjson": { "extensions": ["hjson"] }, "application/http": { "source": "iana" }, "application/hyperstudio": { "source": "iana", "extensions": ["stk"] }, "application/ibe-key-request+xml": { "source": "iana", "compressible": true }, "application/ibe-pkg-reply+xml": { "source": "iana", "compressible": true }, "application/ibe-pp-data": { "source": "iana" }, "application/iges": { "source": "iana" }, "application/im-iscomposing+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/index": { "source": "iana" }, "application/index.cmd": { "source": "iana" }, "application/index.obj": { "source": "iana" }, "application/index.response": { "source": "iana" }, "application/index.vnd": { "source": "iana" }, "application/inkml+xml": { "source": "iana", "compressible": true, "extensions": ["ink", "inkml"] }, "application/iotp": { "source": "iana" }, "application/ipfix": { "source": "iana", "extensions": ["ipfix"] }, "application/ipp": { "source": "iana" }, "application/isup": { "source": "iana" }, "application/its+xml": { "source": "iana", "compressible": true, "extensions": ["its"] }, "application/java-archive": { "source": "apache", "compressible": false, "extensions": ["jar", "war", "ear"] }, "application/java-serialized-object": { "source": "apache", "compressible": false, "extensions": ["ser"] }, "application/java-vm": { "source": "apache", "compressible": false, "extensions": ["class"] }, "application/javascript": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["js", "mjs"] }, "application/jf2feed+json": { "source": "iana", "compressible": true }, "application/jose": { "source": "iana" }, "application/jose+json": { "source": "iana", "compressible": true }, "application/jrd+json": { "source": "iana", "compressible": true }, "application/jscalendar+json": { "source": "iana", "compressible": true }, "application/json": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["json", "map"] }, "application/json-patch+json": { "source": "iana", "compressible": true }, "application/json-seq": { "source": "iana" }, "application/json5": { "extensions": ["json5"] }, "application/jsonml+json": { "source": "apache", "compressible": true, "extensions": ["jsonml"] }, "application/jwk+json": { "source": "iana", "compressible": true }, "application/jwk-set+json": { "source": "iana", "compressible": true }, "application/jwt": { "source": "iana" }, "application/kpml-request+xml": { "source": "iana", "compressible": true }, "application/kpml-response+xml": { "source": "iana", "compressible": true }, "application/ld+json": { "source": "iana", "compressible": true, "extensions": ["jsonld"] }, "application/lgr+xml": { "source": "iana", "compressible": true, "extensions": ["lgr"] }, "application/link-format": { "source": "iana" }, "application/load-control+xml": { "source": "iana", "compressible": true }, "application/lost+xml": { "source": "iana", "compressible": true, "extensions": ["lostxml"] }, "application/lostsync+xml": { "source": "iana", "compressible": true }, "application/lpf+zip": { "source": "iana", "compressible": false }, "application/lxf": { "source": "iana" }, "application/mac-binhex40": { "source": "iana", "extensions": ["hqx"] }, "application/mac-compactpro": { "source": "apache", "extensions": ["cpt"] }, "application/macwriteii": { "source": "iana" }, "application/mads+xml": { "source": "iana", "compressible": true, "extensions": ["mads"] }, "application/manifest+json": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["webmanifest"] }, "application/marc": { "source": "iana", "extensions": ["mrc"] }, "application/marcxml+xml": { "source": "iana", "compressible": true, "extensions": ["mrcx"] }, "application/mathematica": { "source": "iana", "extensions": ["ma", "nb", "mb"] }, "application/mathml+xml": { "source": "iana", "compressible": true, "extensions": ["mathml"] }, "application/mathml-content+xml": { "source": "iana", "compressible": true }, "application/mathml-presentation+xml": { "source": "iana", "compressible": true }, "application/mbms-associated-procedure-description+xml": { "source": "iana", "compressible": true }, "application/mbms-deregister+xml": { "source": "iana", "compressible": true }, "application/mbms-envelope+xml": { "source": "iana", "compressible": true }, "application/mbms-msk+xml": { "source": "iana", "compressible": true }, "application/mbms-msk-response+xml": { "source": "iana", "compressible": true }, "application/mbms-protection-description+xml": { "source": "iana", "compressible": true }, "application/mbms-reception-report+xml": { "source": "iana", "compressible": true }, "application/mbms-register+xml": { "source": "iana", "compressible": true }, "application/mbms-register-response+xml": { "source": "iana", "compressible": true }, "application/mbms-schedule+xml": { "source": "iana", "compressible": true }, "application/mbms-user-service-description+xml": { "source": "iana", "compressible": true }, "application/mbox": { "source": "iana", "extensions": ["mbox"] }, "application/media-policy-dataset+xml": { "source": "iana", "compressible": true, "extensions": ["mpf"] }, "application/media_control+xml": { "source": "iana", "compressible": true }, "application/mediaservercontrol+xml": { "source": "iana", "compressible": true, "extensions": ["mscml"] }, "application/merge-patch+json": { "source": "iana", "compressible": true }, "application/metalink+xml": { "source": "apache", "compressible": true, "extensions": ["metalink"] }, "application/metalink4+xml": { "source": "iana", "compressible": true, "extensions": ["meta4"] }, "application/mets+xml": { "source": "iana", "compressible": true, "extensions": ["mets"] }, "application/mf4": { "source": "iana" }, "application/mikey": { "source": "iana" }, "application/mipc": { "source": "iana" }, "application/missing-blocks+cbor-seq": { "source": "iana" }, "application/mmt-aei+xml": { "source": "iana", "compressible": true, "extensions": ["maei"] }, "application/mmt-usd+xml": { "source": "iana", "compressible": true, "extensions": ["musd"] }, "application/mods+xml": { "source": "iana", "compressible": true, "extensions": ["mods"] }, "application/moss-keys": { "source": "iana" }, "application/moss-signature": { "source": "iana" }, "application/mosskey-data": { "source": "iana" }, "application/mosskey-request": { "source": "iana" }, "application/mp21": { "source": "iana", "extensions": ["m21", "mp21"] }, "application/mp4": { "source": "iana", "extensions": ["mp4s", "m4p"] }, "application/mpeg4-generic": { "source": "iana" }, "application/mpeg4-iod": { "source": "iana" }, "application/mpeg4-iod-xmt": { "source": "iana" }, "application/mrb-consumer+xml": { "source": "iana", "compressible": true }, "application/mrb-publish+xml": { "source": "iana", "compressible": true }, "application/msc-ivr+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/msc-mixer+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/msword": { "source": "iana", "compressible": false, "extensions": ["doc", "dot"] }, "application/mud+json": { "source": "iana", "compressible": true }, "application/multipart-core": { "source": "iana" }, "application/mxf": { "source": "iana", "extensions": ["mxf"] }, "application/n-quads": { "source": "iana", "extensions": ["nq"] }, "application/n-triples": { "source": "iana", "extensions": ["nt"] }, "application/nasdata": { "source": "iana" }, "application/news-checkgroups": { "source": "iana", "charset": "US-ASCII" }, "application/news-groupinfo": { "source": "iana", "charset": "US-ASCII" }, "application/news-transmission": { "source": "iana" }, "application/nlsml+xml": { "source": "iana", "compressible": true }, "application/node": { "source": "iana", "extensions": ["cjs"] }, "application/nss": { "source": "iana" }, "application/oauth-authz-req+jwt": { "source": "iana" }, "application/oblivious-dns-message": { "source": "iana" }, "application/ocsp-request": { "source": "iana" }, "application/ocsp-response": { "source": "iana" }, "application/octet-stream": { "source": "iana", "compressible": false, "extensions": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] }, "application/oda": { "source": "iana", "extensions": ["oda"] }, "application/odm+xml": { "source": "iana", "compressible": true }, "application/odx": { "source": "iana" }, "application/oebps-package+xml": { "source": "iana", "compressible": true, "extensions": ["opf"] }, "application/ogg": { "source": "iana", "compressible": false, "extensions": ["ogx"] }, "application/omdoc+xml": { "source": "apache", "compressible": true, "extensions": ["omdoc"] }, "application/onenote": { "source": "apache", "extensions": ["onetoc", "onetoc2", "onetmp", "onepkg"] }, "application/opc-nodeset+xml": { "source": "iana", "compressible": true }, "application/oscore": { "source": "iana" }, "application/oxps": { "source": "iana", "extensions": ["oxps"] }, "application/p21": { "source": "iana" }, "application/p21+zip": { "source": "iana", "compressible": false }, "application/p2p-overlay+xml": { "source": "iana", "compressible": true, "extensions": ["relo"] }, "application/parityfec": { "source": "iana" }, "application/passport": { "source": "iana" }, "application/patch-ops-error+xml": { "source": "iana", "compressible": true, "extensions": ["xer"] }, "application/pdf": { "source": "iana", "compressible": false, "extensions": ["pdf"] }, "application/pdx": { "source": "iana" }, "application/pem-certificate-chain": { "source": "iana" }, "application/pgp-encrypted": { "source": "iana", "compressible": false, "extensions": ["pgp"] }, "application/pgp-keys": { "source": "iana", "extensions": ["asc"] }, "application/pgp-signature": { "source": "iana", "extensions": ["asc", "sig"] }, "application/pics-rules": { "source": "apache", "extensions": ["prf"] }, "application/pidf+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/pidf-diff+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/pkcs10": { "source": "iana", "extensions": ["p10"] }, "application/pkcs12": { "source": "iana" }, "application/pkcs7-mime": { "source": "iana", "extensions": ["p7m", "p7c"] }, "application/pkcs7-signature": { "source": "iana", "extensions": ["p7s"] }, "application/pkcs8": { "source": "iana", "extensions": ["p8"] }, "application/pkcs8-encrypted": { "source": "iana" }, "application/pkix-attr-cert": { "source": "iana", "extensions": ["ac"] }, "application/pkix-cert": { "source": "iana", "extensions": ["cer"] }, "application/pkix-crl": { "source": "iana", "extensions": ["crl"] }, "application/pkix-pkipath": { "source": "iana", "extensions": ["pkipath"] }, "application/pkixcmp": { "source": "iana", "extensions": ["pki"] }, "application/pls+xml": { "source": "iana", "compressible": true, "extensions": ["pls"] }, "application/poc-settings+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/postscript": { "source": "iana", "compressible": true, "extensions": ["ai", "eps", "ps"] }, "application/ppsp-tracker+json": { "source": "iana", "compressible": true }, "application/problem+json": { "source": "iana", "compressible": true }, "application/problem+xml": { "source": "iana", "compressible": true }, "application/provenance+xml": { "source": "iana", "compressible": true, "extensions": ["provx"] }, "application/prs.alvestrand.titrax-sheet": { "source": "iana" }, "application/prs.cww": { "source": "iana", "extensions": ["cww"] }, "application/prs.cyn": { "source": "iana", "charset": "7-BIT" }, "application/prs.hpub+zip": { "source": "iana", "compressible": false }, "application/prs.nprend": { "source": "iana" }, "application/prs.plucker": { "source": "iana" }, "application/prs.rdf-xml-crypt": { "source": "iana" }, "application/prs.xsf+xml": { "source": "iana", "compressible": true }, "application/pskc+xml": { "source": "iana", "compressible": true, "extensions": ["pskcxml"] }, "application/pvd+json": { "source": "iana", "compressible": true }, "application/qsig": { "source": "iana" }, "application/raml+yaml": { "compressible": true, "extensions": ["raml"] }, "application/raptorfec": { "source": "iana" }, "application/rdap+json": { "source": "iana", "compressible": true }, "application/rdf+xml": { "source": "iana", "compressible": true, "extensions": ["rdf", "owl"] }, "application/reginfo+xml": { "source": "iana", "compressible": true, "extensions": ["rif"] }, "application/relax-ng-compact-syntax": { "source": "iana", "extensions": ["rnc"] }, "application/remote-printing": { "source": "iana" }, "application/reputon+json": { "source": "iana", "compressible": true }, "application/resource-lists+xml": { "source": "iana", "compressible": true, "extensions": ["rl"] }, "application/resource-lists-diff+xml": { "source": "iana", "compressible": true, "extensions": ["rld"] }, "application/rfc+xml": { "source": "iana", "compressible": true }, "application/riscos": { "source": "iana" }, "application/rlmi+xml": { "source": "iana", "compressible": true }, "application/rls-services+xml": { "source": "iana", "compressible": true, "extensions": ["rs"] }, "application/route-apd+xml": { "source": "iana", "compressible": true, "extensions": ["rapd"] }, "application/route-s-tsid+xml": { "source": "iana", "compressible": true, "extensions": ["sls"] }, "application/route-usd+xml": { "source": "iana", "compressible": true, "extensions": ["rusd"] }, "application/rpki-ghostbusters": { "source": "iana", "extensions": ["gbr"] }, "application/rpki-manifest": { "source": "iana", "extensions": ["mft"] }, "application/rpki-publication": { "source": "iana" }, "application/rpki-roa": { "source": "iana", "extensions": ["roa"] }, "application/rpki-updown": { "source": "iana" }, "application/rsd+xml": { "source": "apache", "compressible": true, "extensions": ["rsd"] }, "application/rss+xml": { "source": "apache", "compressible": true, "extensions": ["rss"] }, "application/rtf": { "source": "iana", "compressible": true, "extensions": ["rtf"] }, "application/rtploopback": { "source": "iana" }, "application/rtx": { "source": "iana" }, "application/samlassertion+xml": { "source": "iana", "compressible": true }, "application/samlmetadata+xml": { "source": "iana", "compressible": true }, "application/sarif+json": { "source": "iana", "compressible": true }, "application/sarif-external-properties+json": { "source": "iana", "compressible": true }, "application/sbe": { "source": "iana" }, "application/sbml+xml": { "source": "iana", "compressible": true, "extensions": ["sbml"] }, "application/scaip+xml": { "source": "iana", "compressible": true }, "application/scim+json": { "source": "iana", "compressible": true }, "application/scvp-cv-request": { "source": "iana", "extensions": ["scq"] }, "application/scvp-cv-response": { "source": "iana", "extensions": ["scs"] }, "application/scvp-vp-request": { "source": "iana", "extensions": ["spq"] }, "application/scvp-vp-response": { "source": "iana", "extensions": ["spp"] }, "application/sdp": { "source": "iana", "extensions": ["sdp"] }, "application/secevent+jwt": { "source": "iana" }, "application/senml+cbor": { "source": "iana" }, "application/senml+json": { "source": "iana", "compressible": true }, "application/senml+xml": { "source": "iana", "compressible": true, "extensions": ["senmlx"] }, "application/senml-etch+cbor": { "source": "iana" }, "application/senml-etch+json": { "source": "iana", "compressible": true }, "application/senml-exi": { "source": "iana" }, "application/sensml+cbor": { "source": "iana" }, "application/sensml+json": { "source": "iana", "compressible": true }, "application/sensml+xml": { "source": "iana", "compressible": true, "extensions": ["sensmlx"] }, "application/sensml-exi": { "source": "iana" }, "application/sep+xml": { "source": "iana", "compressible": true }, "application/sep-exi": { "source": "iana" }, "application/session-info": { "source": "iana" }, "application/set-payment": { "source": "iana" }, "application/set-payment-initiation": { "source": "iana", "extensions": ["setpay"] }, "application/set-registration": { "source": "iana" }, "application/set-registration-initiation": { "source": "iana", "extensions": ["setreg"] }, "application/sgml": { "source": "iana" }, "application/sgml-open-catalog": { "source": "iana" }, "application/shf+xml": { "source": "iana", "compressible": true, "extensions": ["shf"] }, "application/sieve": { "source": "iana", "extensions": ["siv", "sieve"] }, "application/simple-filter+xml": { "source": "iana", "compressible": true }, "application/simple-message-summary": { "source": "iana" }, "application/simplesymbolcontainer": { "source": "iana" }, "application/sipc": { "source": "iana" }, "application/slate": { "source": "iana" }, "application/smil": { "source": "iana" }, "application/smil+xml": { "source": "iana", "compressible": true, "extensions": ["smi", "smil"] }, "application/smpte336m": { "source": "iana" }, "application/soap+fastinfoset": { "source": "iana" }, "application/soap+xml": { "source": "iana", "compressible": true }, "application/sparql-query": { "source": "iana", "extensions": ["rq"] }, "application/sparql-results+xml": { "source": "iana", "compressible": true, "extensions": ["srx"] }, "application/spdx+json": { "source": "iana", "compressible": true }, "application/spirits-event+xml": { "source": "iana", "compressible": true }, "application/sql": { "source": "iana" }, "application/srgs": { "source": "iana", "extensions": ["gram"] }, "application/srgs+xml": { "source": "iana", "compressible": true, "extensions": ["grxml"] }, "application/sru+xml": { "source": "iana", "compressible": true, "extensions": ["sru"] }, "application/ssdl+xml": { "source": "apache", "compressible": true, "extensions": ["ssdl"] }, "application/ssml+xml": { "source": "iana", "compressible": true, "extensions": ["ssml"] }, "application/stix+json": { "source": "iana", "compressible": true }, "application/swid+xml": { "source": "iana", "compressible": true, "extensions": ["swidtag"] }, "application/tamp-apex-update": { "source": "iana" }, "application/tamp-apex-update-confirm": { "source": "iana" }, "application/tamp-community-update": { "source": "iana" }, "application/tamp-community-update-confirm": { "source": "iana" }, "application/tamp-error": { "source": "iana" }, "application/tamp-sequence-adjust": { "source": "iana" }, "application/tamp-sequence-adjust-confirm": { "source": "iana" }, "application/tamp-status-query": { "source": "iana" }, "application/tamp-status-response": { "source": "iana" }, "application/tamp-update": { "source": "iana" }, "application/tamp-update-confirm": { "source": "iana" }, "application/tar": { "compressible": true }, "application/taxii+json": { "source": "iana", "compressible": true }, "application/td+json": { "source": "iana", "compressible": true }, "application/tei+xml": { "source": "iana", "compressible": true, "extensions": ["tei", "teicorpus"] }, "application/tetra_isi": { "source": "iana" }, "application/thraud+xml": { "source": "iana", "compressible": true, "extensions": ["tfi"] }, "application/timestamp-query": { "source": "iana" }, "application/timestamp-reply": { "source": "iana" }, "application/timestamped-data": { "source": "iana", "extensions": ["tsd"] }, "application/tlsrpt+gzip": { "source": "iana" }, "application/tlsrpt+json": { "source": "iana", "compressible": true }, "application/tnauthlist": { "source": "iana" }, "application/token-introspection+jwt": { "source": "iana" }, "application/toml": { "compressible": true, "extensions": ["toml"] }, "application/trickle-ice-sdpfrag": { "source": "iana" }, "application/trig": { "source": "iana", "extensions": ["trig"] }, "application/ttml+xml": { "source": "iana", "compressible": true, "extensions": ["ttml"] }, "application/tve-trigger": { "source": "iana" }, "application/tzif": { "source": "iana" }, "application/tzif-leap": { "source": "iana" }, "application/ubjson": { "compressible": false, "extensions": ["ubj"] }, "application/ulpfec": { "source": "iana" }, "application/urc-grpsheet+xml": { "source": "iana", "compressible": true }, "application/urc-ressheet+xml": { "source": "iana", "compressible": true, "extensions": ["rsheet"] }, "application/urc-targetdesc+xml": { "source": "iana", "compressible": true, "extensions": ["td"] }, "application/urc-uisocketdesc+xml": { "source": "iana", "compressible": true }, "application/vcard+json": { "source": "iana", "compressible": true }, "application/vcard+xml": { "source": "iana", "compressible": true }, "application/vemmi": { "source": "iana" }, "application/vividence.scriptfile": { "source": "apache" }, "application/vnd.1000minds.decision-model+xml": { "source": "iana", "compressible": true, "extensions": ["1km"] }, "application/vnd.3gpp-prose+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp-prose-pc3ch+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp-v2x-local-service-information": { "source": "iana" }, "application/vnd.3gpp.5gnas": { "source": "iana" }, "application/vnd.3gpp.access-transfer-events+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.bsf+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.gmop+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.gtpc": { "source": "iana" }, "application/vnd.3gpp.interworking-data": { "source": "iana" }, "application/vnd.3gpp.lpp": { "source": "iana" }, "application/vnd.3gpp.mc-signalling-ear": { "source": "iana" }, "application/vnd.3gpp.mcdata-affiliation-command+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcdata-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcdata-payload": { "source": "iana" }, "application/vnd.3gpp.mcdata-service-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcdata-signalling": { "source": "iana" }, "application/vnd.3gpp.mcdata-ue-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcdata-user-profile+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-affiliation-command+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-floor-request+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-location-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-mbms-usage-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-service-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-signed+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-ue-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-ue-init-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcptt-user-profile+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-affiliation-command+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-affiliation-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-location-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-service-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-transmission-request+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-ue-config+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mcvideo-user-profile+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.mid-call+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.ngap": { "source": "iana" }, "application/vnd.3gpp.pfcp": { "source": "iana" }, "application/vnd.3gpp.pic-bw-large": { "source": "iana", "extensions": ["plb"] }, "application/vnd.3gpp.pic-bw-small": { "source": "iana", "extensions": ["psb"] }, "application/vnd.3gpp.pic-bw-var": { "source": "iana", "extensions": ["pvb"] }, "application/vnd.3gpp.s1ap": { "source": "iana" }, "application/vnd.3gpp.sms": { "source": "iana" }, "application/vnd.3gpp.sms+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.srvcc-ext+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.srvcc-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.state-and-event-info+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp.ussd+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp2.bcmcsinfo+xml": { "source": "iana", "compressible": true }, "application/vnd.3gpp2.sms": { "source": "iana" }, "application/vnd.3gpp2.tcap": { "source": "iana", "extensions": ["tcap"] }, "application/vnd.3lightssoftware.imagescal": { "source": "iana" }, "application/vnd.3m.post-it-notes": { "source": "iana", "extensions": ["pwn"] }, "application/vnd.accpac.simply.aso": { "source": "iana", "extensions": ["aso"] }, "application/vnd.accpac.simply.imp": { "source": "iana", "extensions": ["imp"] }, "application/vnd.acucobol": { "source": "iana", "extensions": ["acu"] }, "application/vnd.acucorp": { "source": "iana", "extensions": ["atc", "acutc"] }, "application/vnd.adobe.air-application-installer-package+zip": { "source": "apache", "compressible": false, "extensions": ["air"] }, "application/vnd.adobe.flash.movie": { "source": "iana" }, "application/vnd.adobe.formscentral.fcdt": { "source": "iana", "extensions": ["fcdt"] }, "application/vnd.adobe.fxp": { "source": "iana", "extensions": ["fxp", "fxpl"] }, "application/vnd.adobe.partial-upload": { "source": "iana" }, "application/vnd.adobe.xdp+xml": { "source": "iana", "compressible": true, "extensions": ["xdp"] }, "application/vnd.adobe.xfdf": { "source": "iana", "extensions": ["xfdf"] }, "application/vnd.aether.imp": { "source": "iana" }, "application/vnd.afpc.afplinedata": { "source": "iana" }, "application/vnd.afpc.afplinedata-pagedef": { "source": "iana" }, "application/vnd.afpc.cmoca-cmresource": { "source": "iana" }, "application/vnd.afpc.foca-charset": { "source": "iana" }, "application/vnd.afpc.foca-codedfont": { "source": "iana" }, "application/vnd.afpc.foca-codepage": { "source": "iana" }, "application/vnd.afpc.modca": { "source": "iana" }, "application/vnd.afpc.modca-cmtable": { "source": "iana" }, "application/vnd.afpc.modca-formdef": { "source": "iana" }, "application/vnd.afpc.modca-mediummap": { "source": "iana" }, "application/vnd.afpc.modca-objectcontainer": { "source": "iana" }, "application/vnd.afpc.modca-overlay": { "source": "iana" }, "application/vnd.afpc.modca-pagesegment": { "source": "iana" }, "application/vnd.age": { "source": "iana", "extensions": ["age"] }, "application/vnd.ah-barcode": { "source": "iana" }, "application/vnd.ahead.space": { "source": "iana", "extensions": ["ahead"] }, "application/vnd.airzip.filesecure.azf": { "source": "iana", "extensions": ["azf"] }, "application/vnd.airzip.filesecure.azs": { "source": "iana", "extensions": ["azs"] }, "application/vnd.amadeus+json": { "source": "iana", "compressible": true }, "application/vnd.amazon.ebook": { "source": "apache", "extensions": ["azw"] }, "application/vnd.amazon.mobi8-ebook": { "source": "iana" }, "application/vnd.americandynamics.acc": { "source": "iana", "extensions": ["acc"] }, "application/vnd.amiga.ami": { "source": "iana", "extensions": ["ami"] }, "application/vnd.amundsen.maze+xml": { "source": "iana", "compressible": true }, "application/vnd.android.ota": { "source": "iana" }, "application/vnd.android.package-archive": { "source": "apache", "compressible": false, "extensions": ["apk"] }, "application/vnd.anki": { "source": "iana" }, "application/vnd.anser-web-certificate-issue-initiation": { "source": "iana", "extensions": ["cii"] }, "application/vnd.anser-web-funds-transfer-initiation": { "source": "apache", "extensions": ["fti"] }, "application/vnd.antix.game-component": { "source": "iana", "extensions": ["atx"] }, "application/vnd.apache.arrow.file": { "source": "iana" }, "application/vnd.apache.arrow.stream": { "source": "iana" }, "application/vnd.apache.thrift.binary": { "source": "iana" }, "application/vnd.apache.thrift.compact": { "source": "iana" }, "application/vnd.apache.thrift.json": { "source": "iana" }, "application/vnd.api+json": { "source": "iana", "compressible": true }, "application/vnd.aplextor.warrp+json": { "source": "iana", "compressible": true }, "application/vnd.apothekende.reservation+json": { "source": "iana", "compressible": true }, "application/vnd.apple.installer+xml": { "source": "iana", "compressible": true, "extensions": ["mpkg"] }, "application/vnd.apple.keynote": { "source": "iana", "extensions": ["key"] }, "application/vnd.apple.mpegurl": { "source": "iana", "extensions": ["m3u8"] }, "application/vnd.apple.numbers": { "source": "iana", "extensions": ["numbers"] }, "application/vnd.apple.pages": { "source": "iana", "extensions": ["pages"] }, "application/vnd.apple.pkpass": { "compressible": false, "extensions": ["pkpass"] }, "application/vnd.arastra.swi": { "source": "iana" }, "application/vnd.aristanetworks.swi": { "source": "iana", "extensions": ["swi"] }, "application/vnd.artisan+json": { "source": "iana", "compressible": true }, "application/vnd.artsquare": { "source": "iana" }, "application/vnd.astraea-software.iota": { "source": "iana", "extensions": ["iota"] }, "application/vnd.audiograph": { "source": "iana", "extensions": ["aep"] }, "application/vnd.autopackage": { "source": "iana" }, "application/vnd.avalon+json": { "source": "iana", "compressible": true }, "application/vnd.avistar+xml": { "source": "iana", "compressible": true }, "application/vnd.balsamiq.bmml+xml": { "source": "iana", "compressible": true, "extensions": ["bmml"] }, "application/vnd.balsamiq.bmpr": { "source": "iana" }, "application/vnd.banana-accounting": { "source": "iana" }, "application/vnd.bbf.usp.error": { "source": "iana" }, "application/vnd.bbf.usp.msg": { "source": "iana" }, "application/vnd.bbf.usp.msg+json": { "source": "iana", "compressible": true }, "application/vnd.bekitzur-stech+json": { "source": "iana", "compressible": true }, "application/vnd.bint.med-content": { "source": "iana" }, "application/vnd.biopax.rdf+xml": { "source": "iana", "compressible": true }, "application/vnd.blink-idb-value-wrapper": { "source": "iana" }, "application/vnd.blueice.multipass": { "source": "iana", "extensions": ["mpm"] }, "application/vnd.bluetooth.ep.oob": { "source": "iana" }, "application/vnd.bluetooth.le.oob": { "source": "iana" }, "application/vnd.bmi": { "source": "iana", "extensions": ["bmi"] }, "application/vnd.bpf": { "source": "iana" }, "application/vnd.bpf3": { "source": "iana" }, "application/vnd.businessobjects": { "source": "iana", "extensions": ["rep"] }, "application/vnd.byu.uapi+json": { "source": "iana", "compressible": true }, "application/vnd.cab-jscript": { "source": "iana" }, "application/vnd.canon-cpdl": { "source": "iana" }, "application/vnd.canon-lips": { "source": "iana" }, "application/vnd.capasystems-pg+json": { "source": "iana", "compressible": true }, "application/vnd.cendio.thinlinc.clientconf": { "source": "iana" }, "application/vnd.century-systems.tcp_stream": { "source": "iana" }, "application/vnd.chemdraw+xml": { "source": "iana", "compressible": true, "extensions": ["cdxml"] }, "application/vnd.chess-pgn": { "source": "iana" }, "application/vnd.chipnuts.karaoke-mmd": { "source": "iana", "extensions": ["mmd"] }, "application/vnd.ciedi": { "source": "iana" }, "application/vnd.cinderella": { "source": "iana", "extensions": ["cdy"] }, "application/vnd.cirpack.isdn-ext": { "source": "iana" }, "application/vnd.citationstyles.style+xml": { "source": "iana", "compressible": true, "extensions": ["csl"] }, "application/vnd.claymore": { "source": "iana", "extensions": ["cla"] }, "application/vnd.cloanto.rp9": { "source": "iana", "extensions": ["rp9"] }, "application/vnd.clonk.c4group": { "source": "iana", "extensions": ["c4g", "c4d", "c4f", "c4p", "c4u"] }, "application/vnd.cluetrust.cartomobile-config": { "source": "iana", "extensions": ["c11amc"] }, "application/vnd.cluetrust.cartomobile-config-pkg": { "source": "iana", "extensions": ["c11amz"] }, "application/vnd.coffeescript": { "source": "iana" }, "application/vnd.collabio.xodocuments.document": { "source": "iana" }, "application/vnd.collabio.xodocuments.document-template": { "source": "iana" }, "application/vnd.collabio.xodocuments.presentation": { "source": "iana" }, "application/vnd.collabio.xodocuments.presentation-template": { "source": "iana" }, "application/vnd.collabio.xodocuments.spreadsheet": { "source": "iana" }, "application/vnd.collabio.xodocuments.spreadsheet-template": { "source": "iana" }, "application/vnd.collection+json": { "source": "iana", "compressible": true }, "application/vnd.collection.doc+json": { "source": "iana", "compressible": true }, "application/vnd.collection.next+json": { "source": "iana", "compressible": true }, "application/vnd.comicbook+zip": { "source": "iana", "compressible": false }, "application/vnd.comicbook-rar": { "source": "iana" }, "application/vnd.commerce-battelle": { "source": "iana" }, "application/vnd.commonspace": { "source": "iana", "extensions": ["csp"] }, "application/vnd.contact.cmsg": { "source": "iana", "extensions": ["cdbcmsg"] }, "application/vnd.coreos.ignition+json": { "source": "iana", "compressible": true }, "application/vnd.cosmocaller": { "source": "iana", "extensions": ["cmc"] }, "application/vnd.crick.clicker": { "source": "iana", "extensions": ["clkx"] }, "application/vnd.crick.clicker.keyboard": { "source": "iana", "extensions": ["clkk"] }, "application/vnd.crick.clicker.palette": { "source": "iana", "extensions": ["clkp"] }, "application/vnd.crick.clicker.template": { "source": "iana", "extensions": ["clkt"] }, "application/vnd.crick.clicker.wordbank": { "source": "iana", "extensions": ["clkw"] }, "application/vnd.criticaltools.wbs+xml": { "source": "iana", "compressible": true, "extensions": ["wbs"] }, "application/vnd.cryptii.pipe+json": { "source": "iana", "compressible": true }, "application/vnd.crypto-shade-file": { "source": "iana" }, "application/vnd.cryptomator.encrypted": { "source": "iana" }, "application/vnd.cryptomator.vault": { "source": "iana" }, "application/vnd.ctc-posml": { "source": "iana", "extensions": ["pml"] }, "application/vnd.ctct.ws+xml": { "source": "iana", "compressible": true }, "application/vnd.cups-pdf": { "source": "iana" }, "application/vnd.cups-postscript": { "source": "iana" }, "application/vnd.cups-ppd": { "source": "iana", "extensions": ["ppd"] }, "application/vnd.cups-raster": { "source": "iana" }, "application/vnd.cups-raw": { "source": "iana" }, "application/vnd.curl": { "source": "iana" }, "application/vnd.curl.car": { "source": "apache", "extensions": ["car"] }, "application/vnd.curl.pcurl": { "source": "apache", "extensions": ["pcurl"] }, "application/vnd.cyan.dean.root+xml": { "source": "iana", "compressible": true }, "application/vnd.cybank": { "source": "iana" }, "application/vnd.cyclonedx+json": { "source": "iana", "compressible": true }, "application/vnd.cyclonedx+xml": { "source": "iana", "compressible": true }, "application/vnd.d2l.coursepackage1p0+zip": { "source": "iana", "compressible": false }, "application/vnd.d3m-dataset": { "source": "iana" }, "application/vnd.d3m-problem": { "source": "iana" }, "application/vnd.dart": { "source": "iana", "compressible": true, "extensions": ["dart"] }, "application/vnd.data-vision.rdz": { "source": "iana", "extensions": ["rdz"] }, "application/vnd.datapackage+json": { "source": "iana", "compressible": true }, "application/vnd.dataresource+json": { "source": "iana", "compressible": true }, "application/vnd.dbf": { "source": "iana", "extensions": ["dbf"] }, "application/vnd.debian.binary-package": { "source": "iana" }, "application/vnd.dece.data": { "source": "iana", "extensions": ["uvf", "uvvf", "uvd", "uvvd"] }, "application/vnd.dece.ttml+xml": { "source": "iana", "compressible": true, "extensions": ["uvt", "uvvt"] }, "application/vnd.dece.unspecified": { "source": "iana", "extensions": ["uvx", "uvvx"] }, "application/vnd.dece.zip": { "source": "iana", "extensions": ["uvz", "uvvz"] }, "application/vnd.denovo.fcselayout-link": { "source": "iana", "extensions": ["fe_launch"] }, "application/vnd.desmume.movie": { "source": "iana" }, "application/vnd.dir-bi.plate-dl-nosuffix": { "source": "iana" }, "application/vnd.dm.delegation+xml": { "source": "iana", "compressible": true }, "application/vnd.dna": { "source": "iana", "extensions": ["dna"] }, "application/vnd.document+json": { "source": "iana", "compressible": true }, "application/vnd.dolby.mlp": { "source": "apache", "extensions": ["mlp"] }, "application/vnd.dolby.mobile.1": { "source": "iana" }, "application/vnd.dolby.mobile.2": { "source": "iana" }, "application/vnd.doremir.scorecloud-binary-document": { "source": "iana" }, "application/vnd.dpgraph": { "source": "iana", "extensions": ["dpg"] }, "application/vnd.dreamfactory": { "source": "iana", "extensions": ["dfac"] }, "application/vnd.drive+json": { "source": "iana", "compressible": true }, "application/vnd.ds-keypoint": { "source": "apache", "extensions": ["kpxx"] }, "application/vnd.dtg.local": { "source": "iana" }, "application/vnd.dtg.local.flash": { "source": "iana" }, "application/vnd.dtg.local.html": { "source": "iana" }, "application/vnd.dvb.ait": { "source": "iana", "extensions": ["ait"] }, "application/vnd.dvb.dvbisl+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.dvbj": { "source": "iana" }, "application/vnd.dvb.esgcontainer": { "source": "iana" }, "application/vnd.dvb.ipdcdftnotifaccess": { "source": "iana" }, "application/vnd.dvb.ipdcesgaccess": { "source": "iana" }, "application/vnd.dvb.ipdcesgaccess2": { "source": "iana" }, "application/vnd.dvb.ipdcesgpdd": { "source": "iana" }, "application/vnd.dvb.ipdcroaming": { "source": "iana" }, "application/vnd.dvb.iptv.alfec-base": { "source": "iana" }, "application/vnd.dvb.iptv.alfec-enhancement": { "source": "iana" }, "application/vnd.dvb.notif-aggregate-root+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.notif-container+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.notif-generic+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.notif-ia-msglist+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.notif-ia-registration-request+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.notif-ia-registration-response+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.notif-init+xml": { "source": "iana", "compressible": true }, "application/vnd.dvb.pfr": { "source": "iana" }, "application/vnd.dvb.service": { "source": "iana", "extensions": ["svc"] }, "application/vnd.dxr": { "source": "iana" }, "application/vnd.dynageo": { "source": "iana", "extensions": ["geo"] }, "application/vnd.dzr": { "source": "iana" }, "application/vnd.easykaraoke.cdgdownload": { "source": "iana" }, "application/vnd.ecdis-update": { "source": "iana" }, "application/vnd.ecip.rlp": { "source": "iana" }, "application/vnd.eclipse.ditto+json": { "source": "iana", "compressible": true }, "application/vnd.ecowin.chart": { "source": "iana", "extensions": ["mag"] }, "application/vnd.ecowin.filerequest": { "source": "iana" }, "application/vnd.ecowin.fileupdate": { "source": "iana" }, "application/vnd.ecowin.series": { "source": "iana" }, "application/vnd.ecowin.seriesrequest": { "source": "iana" }, "application/vnd.ecowin.seriesupdate": { "source": "iana" }, "application/vnd.efi.img": { "source": "iana" }, "application/vnd.efi.iso": { "source": "iana" }, "application/vnd.emclient.accessrequest+xml": { "source": "iana", "compressible": true }, "application/vnd.enliven": { "source": "iana", "extensions": ["nml"] }, "application/vnd.enphase.envoy": { "source": "iana" }, "application/vnd.eprints.data+xml": { "source": "iana", "compressible": true }, "application/vnd.epson.esf": { "source": "iana", "extensions": ["esf"] }, "application/vnd.epson.msf": { "source": "iana", "extensions": ["msf"] }, "application/vnd.epson.quickanime": { "source": "iana", "extensions": ["qam"] }, "application/vnd.epson.salt": { "source": "iana", "extensions": ["slt"] }, "application/vnd.epson.ssf": { "source": "iana", "extensions": ["ssf"] }, "application/vnd.ericsson.quickcall": { "source": "iana" }, "application/vnd.espass-espass+zip": { "source": "iana", "compressible": false }, "application/vnd.eszigno3+xml": { "source": "iana", "compressible": true, "extensions": ["es3", "et3"] }, "application/vnd.etsi.aoc+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.asic-e+zip": { "source": "iana", "compressible": false }, "application/vnd.etsi.asic-s+zip": { "source": "iana", "compressible": false }, "application/vnd.etsi.cug+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvcommand+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvdiscovery+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvprofile+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvsad-bc+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvsad-cod+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvsad-npvr+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvservice+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvsync+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.iptvueprofile+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.mcid+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.mheg5": { "source": "iana" }, "application/vnd.etsi.overload-control-policy-dataset+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.pstn+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.sci+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.simservs+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.timestamp-token": { "source": "iana" }, "application/vnd.etsi.tsl+xml": { "source": "iana", "compressible": true }, "application/vnd.etsi.tsl.der": { "source": "iana" }, "application/vnd.eu.kasparian.car+json": { "source": "iana", "compressible": true }, "application/vnd.eudora.data": { "source": "iana" }, "application/vnd.evolv.ecig.profile": { "source": "iana" }, "application/vnd.evolv.ecig.settings": { "source": "iana" }, "application/vnd.evolv.ecig.theme": { "source": "iana" }, "application/vnd.exstream-empower+zip": { "source": "iana", "compressible": false }, "application/vnd.exstream-package": { "source": "iana" }, "application/vnd.ezpix-album": { "source": "iana", "extensions": ["ez2"] }, "application/vnd.ezpix-package": { "source": "iana", "extensions": ["ez3"] }, "application/vnd.f-secure.mobile": { "source": "iana" }, "application/vnd.familysearch.gedcom+zip": { "source": "iana", "compressible": false }, "application/vnd.fastcopy-disk-image": { "source": "iana" }, "application/vnd.fdf": { "source": "iana", "extensions": ["fdf"] }, "application/vnd.fdsn.mseed": { "source": "iana", "extensions": ["mseed"] }, "application/vnd.fdsn.seed": { "source": "iana", "extensions": ["seed", "dataless"] }, "application/vnd.ffsns": { "source": "iana" }, "application/vnd.ficlab.flb+zip": { "source": "iana", "compressible": false }, "application/vnd.filmit.zfc": { "source": "iana" }, "application/vnd.fints": { "source": "iana" }, "application/vnd.firemonkeys.cloudcell": { "source": "iana" }, "application/vnd.flographit": { "source": "iana", "extensions": ["gph"] }, "application/vnd.fluxtime.clip": { "source": "iana", "extensions": ["ftc"] }, "application/vnd.font-fontforge-sfd": { "source": "iana" }, "application/vnd.framemaker": { "source": "iana", "extensions": ["fm", "frame", "maker", "book"] }, "application/vnd.frogans.fnc": { "source": "iana", "extensions": ["fnc"] }, "application/vnd.frogans.ltf": { "source": "iana", "extensions": ["ltf"] }, "application/vnd.fsc.weblaunch": { "source": "iana", "extensions": ["fsc"] }, "application/vnd.fujifilm.fb.docuworks": { "source": "iana" }, "application/vnd.fujifilm.fb.docuworks.binder": { "source": "iana" }, "application/vnd.fujifilm.fb.docuworks.container": { "source": "iana" }, "application/vnd.fujifilm.fb.jfi+xml": { "source": "iana", "compressible": true }, "application/vnd.fujitsu.oasys": { "source": "iana", "extensions": ["oas"] }, "application/vnd.fujitsu.oasys2": { "source": "iana", "extensions": ["oa2"] }, "application/vnd.fujitsu.oasys3": { "source": "iana", "extensions": ["oa3"] }, "application/vnd.fujitsu.oasysgp": { "source": "iana", "extensions": ["fg5"] }, "application/vnd.fujitsu.oasysprs": { "source": "iana", "extensions": ["bh2"] }, "application/vnd.fujixerox.art-ex": { "source": "iana" }, "application/vnd.fujixerox.art4": { "source": "iana" }, "application/vnd.fujixerox.ddd": { "source": "iana", "extensions": ["ddd"] }, "application/vnd.fujixerox.docuworks": { "source": "iana", "extensions": ["xdw"] }, "application/vnd.fujixerox.docuworks.binder": { "source": "iana", "extensions": ["xbd"] }, "application/vnd.fujixerox.docuworks.container": { "source": "iana" }, "application/vnd.fujixerox.hbpl": { "source": "iana" }, "application/vnd.fut-misnet": { "source": "iana" }, "application/vnd.futoin+cbor": { "source": "iana" }, "application/vnd.futoin+json": { "source": "iana", "compressible": true }, "application/vnd.fuzzysheet": { "source": "iana", "extensions": ["fzs"] }, "application/vnd.genomatix.tuxedo": { "source": "iana", "extensions": ["txd"] }, "application/vnd.gentics.grd+json": { "source": "iana", "compressible": true }, "application/vnd.geo+json": { "source": "iana", "compressible": true }, "application/vnd.geocube+xml": { "source": "iana", "compressible": true }, "application/vnd.geogebra.file": { "source": "iana", "extensions": ["ggb"] }, "application/vnd.geogebra.slides": { "source": "iana" }, "application/vnd.geogebra.tool": { "source": "iana", "extensions": ["ggt"] }, "application/vnd.geometry-explorer": { "source": "iana", "extensions": ["gex", "gre"] }, "application/vnd.geonext": { "source": "iana", "extensions": ["gxt"] }, "application/vnd.geoplan": { "source": "iana", "extensions": ["g2w"] }, "application/vnd.geospace": { "source": "iana", "extensions": ["g3w"] }, "application/vnd.gerber": { "source": "iana" }, "application/vnd.globalplatform.card-content-mgt": { "source": "iana" }, "application/vnd.globalplatform.card-content-mgt-response": { "source": "iana" }, "application/vnd.gmx": { "source": "iana", "extensions": ["gmx"] }, "application/vnd.google-apps.document": { "compressible": false, "extensions": ["gdoc"] }, "application/vnd.google-apps.presentation": { "compressible": false, "extensions": ["gslides"] }, "application/vnd.google-apps.spreadsheet": { "compressible": false, "extensions": ["gsheet"] }, "application/vnd.google-earth.kml+xml": { "source": "iana", "compressible": true, "extensions": ["kml"] }, "application/vnd.google-earth.kmz": { "source": "iana", "compressible": false, "extensions": ["kmz"] }, "application/vnd.gov.sk.e-form+xml": { "source": "iana", "compressible": true }, "application/vnd.gov.sk.e-form+zip": { "source": "iana", "compressible": false }, "application/vnd.gov.sk.xmldatacontainer+xml": { "source": "iana", "compressible": true }, "application/vnd.grafeq": { "source": "iana", "extensions": ["gqf", "gqs"] }, "application/vnd.gridmp": { "source": "iana" }, "application/vnd.groove-account": { "source": "iana", "extensions": ["gac"] }, "application/vnd.groove-help": { "source": "iana", "extensions": ["ghf"] }, "application/vnd.groove-identity-message": { "source": "iana", "extensions": ["gim"] }, "application/vnd.groove-injector": { "source": "iana", "extensions": ["grv"] }, "application/vnd.groove-tool-message": { "source": "iana", "extensions": ["gtm"] }, "application/vnd.groove-tool-template": { "source": "iana", "extensions": ["tpl"] }, "application/vnd.groove-vcard": { "source": "iana", "extensions": ["vcg"] }, "application/vnd.hal+json": { "source": "iana", "compressible": true }, "application/vnd.hal+xml": { "source": "iana", "compressible": true, "extensions": ["hal"] }, "application/vnd.handheld-entertainment+xml": { "source": "iana", "compressible": true, "extensions": ["zmm"] }, "application/vnd.hbci": { "source": "iana", "extensions": ["hbci"] }, "application/vnd.hc+json": { "source": "iana", "compressible": true }, "application/vnd.hcl-bireports": { "source": "iana" }, "application/vnd.hdt": { "source": "iana" }, "application/vnd.heroku+json": { "source": "iana", "compressible": true }, "application/vnd.hhe.lesson-player": { "source": "iana", "extensions": ["les"] }, "application/vnd.hl7cda+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/vnd.hl7v2+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/vnd.hp-hpgl": { "source": "iana", "extensions": ["hpgl"] }, "application/vnd.hp-hpid": { "source": "iana", "extensions": ["hpid"] }, "application/vnd.hp-hps": { "source": "iana", "extensions": ["hps"] }, "application/vnd.hp-jlyt": { "source": "iana", "extensions": ["jlt"] }, "application/vnd.hp-pcl": { "source": "iana", "extensions": ["pcl"] }, "application/vnd.hp-pclxl": { "source": "iana", "extensions": ["pclxl"] }, "application/vnd.httphone": { "source": "iana" }, "application/vnd.hydrostatix.sof-data": { "source": "iana", "extensions": ["sfd-hdstx"] }, "application/vnd.hyper+json": { "source": "iana", "compressible": true }, "application/vnd.hyper-item+json": { "source": "iana", "compressible": true }, "application/vnd.hyperdrive+json": { "source": "iana", "compressible": true }, "application/vnd.hzn-3d-crossword": { "source": "iana" }, "application/vnd.ibm.afplinedata": { "source": "iana" }, "application/vnd.ibm.electronic-media": { "source": "iana" }, "application/vnd.ibm.minipay": { "source": "iana", "extensions": ["mpy"] }, "application/vnd.ibm.modcap": { "source": "iana", "extensions": ["afp", "listafp", "list3820"] }, "application/vnd.ibm.rights-management": { "source": "iana", "extensions": ["irm"] }, "application/vnd.ibm.secure-container": { "source": "iana", "extensions": ["sc"] }, "application/vnd.iccprofile": { "source": "iana", "extensions": ["icc", "icm"] }, "application/vnd.ieee.1905": { "source": "iana" }, "application/vnd.igloader": { "source": "iana", "extensions": ["igl"] }, "application/vnd.imagemeter.folder+zip": { "source": "iana", "compressible": false }, "application/vnd.imagemeter.image+zip": { "source": "iana", "compressible": false }, "application/vnd.immervision-ivp": { "source": "iana", "extensions": ["ivp"] }, "application/vnd.immervision-ivu": { "source": "iana", "extensions": ["ivu"] }, "application/vnd.ims.imsccv1p1": { "source": "iana" }, "application/vnd.ims.imsccv1p2": { "source": "iana" }, "application/vnd.ims.imsccv1p3": { "source": "iana" }, "application/vnd.ims.lis.v2.result+json": { "source": "iana", "compressible": true }, "application/vnd.ims.lti.v2.toolconsumerprofile+json": { "source": "iana", "compressible": true }, "application/vnd.ims.lti.v2.toolproxy+json": { "source": "iana", "compressible": true }, "application/vnd.ims.lti.v2.toolproxy.id+json": { "source": "iana", "compressible": true }, "application/vnd.ims.lti.v2.toolsettings+json": { "source": "iana", "compressible": true }, "application/vnd.ims.lti.v2.toolsettings.simple+json": { "source": "iana", "compressible": true }, "application/vnd.informedcontrol.rms+xml": { "source": "iana", "compressible": true }, "application/vnd.informix-visionary": { "source": "iana" }, "application/vnd.infotech.project": { "source": "iana" }, "application/vnd.infotech.project+xml": { "source": "iana", "compressible": true }, "application/vnd.innopath.wamp.notification": { "source": "iana" }, "application/vnd.insors.igm": { "source": "iana", "extensions": ["igm"] }, "application/vnd.intercon.formnet": { "source": "iana", "extensions": ["xpw", "xpx"] }, "application/vnd.intergeo": { "source": "iana", "extensions": ["i2g"] }, "application/vnd.intertrust.digibox": { "source": "iana" }, "application/vnd.intertrust.nncp": { "source": "iana" }, "application/vnd.intu.qbo": { "source": "iana", "extensions": ["qbo"] }, "application/vnd.intu.qfx": { "source": "iana", "extensions": ["qfx"] }, "application/vnd.iptc.g2.catalogitem+xml": { "source": "iana", "compressible": true }, "application/vnd.iptc.g2.conceptitem+xml": { "source": "iana", "compressible": true }, "application/vnd.iptc.g2.knowledgeitem+xml": { "source": "iana", "compressible": true }, "application/vnd.iptc.g2.newsitem+xml": { "source": "iana", "compressible": true }, "application/vnd.iptc.g2.newsmessage+xml": { "source": "iana", "compressible": true }, "application/vnd.iptc.g2.packageitem+xml": { "source": "iana", "compressible": true }, "application/vnd.iptc.g2.planningitem+xml": { "source": "iana", "compressible": true }, "application/vnd.ipunplugged.rcprofile": { "source": "iana", "extensions": ["rcprofile"] }, "application/vnd.irepository.package+xml": { "source": "iana", "compressible": true, "extensions": ["irp"] }, "application/vnd.is-xpr": { "source": "iana", "extensions": ["xpr"] }, "application/vnd.isac.fcs": { "source": "iana", "extensions": ["fcs"] }, "application/vnd.iso11783-10+zip": { "source": "iana", "compressible": false }, "application/vnd.jam": { "source": "iana", "extensions": ["jam"] }, "application/vnd.japannet-directory-service": { "source": "iana" }, "application/vnd.japannet-jpnstore-wakeup": { "source": "iana" }, "application/vnd.japannet-payment-wakeup": { "source": "iana" }, "application/vnd.japannet-registration": { "source": "iana" }, "application/vnd.japannet-registration-wakeup": { "source": "iana" }, "application/vnd.japannet-setstore-wakeup": { "source": "iana" }, "application/vnd.japannet-verification": { "source": "iana" }, "application/vnd.japannet-verification-wakeup": { "source": "iana" }, "application/vnd.jcp.javame.midlet-rms": { "source": "iana", "extensions": ["rms"] }, "application/vnd.jisp": { "source": "iana", "extensions": ["jisp"] }, "application/vnd.joost.joda-archive": { "source": "iana", "extensions": ["joda"] }, "application/vnd.jsk.isdn-ngn": { "source": "iana" }, "application/vnd.kahootz": { "source": "iana", "extensions": ["ktz", "ktr"] }, "application/vnd.kde.karbon": { "source": "iana", "extensions": ["karbon"] }, "application/vnd.kde.kchart": { "source": "iana", "extensions": ["chrt"] }, "application/vnd.kde.kformula": { "source": "iana", "extensions": ["kfo"] }, "application/vnd.kde.kivio": { "source": "iana", "extensions": ["flw"] }, "application/vnd.kde.kontour": { "source": "iana", "extensions": ["kon"] }, "application/vnd.kde.kpresenter": { "source": "iana", "extensions": ["kpr", "kpt"] }, "application/vnd.kde.kspread": { "source": "iana", "extensions": ["ksp"] }, "application/vnd.kde.kword": { "source": "iana", "extensions": ["kwd", "kwt"] }, "application/vnd.kenameaapp": { "source": "iana", "extensions": ["htke"] }, "application/vnd.kidspiration": { "source": "iana", "extensions": ["kia"] }, "application/vnd.kinar": { "source": "iana", "extensions": ["kne", "knp"] }, "application/vnd.koan": { "source": "iana", "extensions": ["skp", "skd", "skt", "skm"] }, "application/vnd.kodak-descriptor": { "source": "iana", "extensions": ["sse"] }, "application/vnd.las": { "source": "iana" }, "application/vnd.las.las+json": { "source": "iana", "compressible": true }, "application/vnd.las.las+xml": { "source": "iana", "compressible": true, "extensions": ["lasxml"] }, "application/vnd.laszip": { "source": "iana" }, "application/vnd.leap+json": { "source": "iana", "compressible": true }, "application/vnd.liberty-request+xml": { "source": "iana", "compressible": true }, "application/vnd.llamagraphics.life-balance.desktop": { "source": "iana", "extensions": ["lbd"] }, "application/vnd.llamagraphics.life-balance.exchange+xml": { "source": "iana", "compressible": true, "extensions": ["lbe"] }, "application/vnd.logipipe.circuit+zip": { "source": "iana", "compressible": false }, "application/vnd.loom": { "source": "iana" }, "application/vnd.lotus-1-2-3": { "source": "iana", "extensions": ["123"] }, "application/vnd.lotus-approach": { "source": "iana", "extensions": ["apr"] }, "application/vnd.lotus-freelance": { "source": "iana", "extensions": ["pre"] }, "application/vnd.lotus-notes": { "source": "iana", "extensions": ["nsf"] }, "application/vnd.lotus-organizer": { "source": "iana", "extensions": ["org"] }, "application/vnd.lotus-screencam": { "source": "iana", "extensions": ["scm"] }, "application/vnd.lotus-wordpro": { "source": "iana", "extensions": ["lwp"] }, "application/vnd.macports.portpkg": { "source": "iana", "extensions": ["portpkg"] }, "application/vnd.mapbox-vector-tile": { "source": "iana", "extensions": ["mvt"] }, "application/vnd.marlin.drm.actiontoken+xml": { "source": "iana", "compressible": true }, "application/vnd.marlin.drm.conftoken+xml": { "source": "iana", "compressible": true }, "application/vnd.marlin.drm.license+xml": { "source": "iana", "compressible": true }, "application/vnd.marlin.drm.mdcf": { "source": "iana" }, "application/vnd.mason+json": { "source": "iana", "compressible": true }, "application/vnd.maxar.archive.3tz+zip": { "source": "iana", "compressible": false }, "application/vnd.maxmind.maxmind-db": { "source": "iana" }, "application/vnd.mcd": { "source": "iana", "extensions": ["mcd"] }, "application/vnd.medcalcdata": { "source": "iana", "extensions": ["mc1"] }, "application/vnd.mediastation.cdkey": { "source": "iana", "extensions": ["cdkey"] }, "application/vnd.meridian-slingshot": { "source": "iana" }, "application/vnd.mfer": { "source": "iana", "extensions": ["mwf"] }, "application/vnd.mfmp": { "source": "iana", "extensions": ["mfm"] }, "application/vnd.micro+json": { "source": "iana", "compressible": true }, "application/vnd.micrografx.flo": { "source": "iana", "extensions": ["flo"] }, "application/vnd.micrografx.igx": { "source": "iana", "extensions": ["igx"] }, "application/vnd.microsoft.portable-executable": { "source": "iana" }, "application/vnd.microsoft.windows.thumbnail-cache": { "source": "iana" }, "application/vnd.miele+json": { "source": "iana", "compressible": true }, "application/vnd.mif": { "source": "iana", "extensions": ["mif"] }, "application/vnd.minisoft-hp3000-save": { "source": "iana" }, "application/vnd.mitsubishi.misty-guard.trustweb": { "source": "iana" }, "application/vnd.mobius.daf": { "source": "iana", "extensions": ["daf"] }, "application/vnd.mobius.dis": { "source": "iana", "extensions": ["dis"] }, "application/vnd.mobius.mbk": { "source": "iana", "extensions": ["mbk"] }, "application/vnd.mobius.mqy": { "source": "iana", "extensions": ["mqy"] }, "application/vnd.mobius.msl": { "source": "iana", "extensions": ["msl"] }, "application/vnd.mobius.plc": { "source": "iana", "extensions": ["plc"] }, "application/vnd.mobius.txf": { "source": "iana", "extensions": ["txf"] }, "application/vnd.mophun.application": { "source": "iana", "extensions": ["mpn"] }, "application/vnd.mophun.certificate": { "source": "iana", "extensions": ["mpc"] }, "application/vnd.motorola.flexsuite": { "source": "iana" }, "application/vnd.motorola.flexsuite.adsi": { "source": "iana" }, "application/vnd.motorola.flexsuite.fis": { "source": "iana" }, "application/vnd.motorola.flexsuite.gotap": { "source": "iana" }, "application/vnd.motorola.flexsuite.kmr": { "source": "iana" }, "application/vnd.motorola.flexsuite.ttc": { "source": "iana" }, "application/vnd.motorola.flexsuite.wem": { "source": "iana" }, "application/vnd.motorola.iprm": { "source": "iana" }, "application/vnd.mozilla.xul+xml": { "source": "iana", "compressible": true, "extensions": ["xul"] }, "application/vnd.ms-3mfdocument": { "source": "iana" }, "application/vnd.ms-artgalry": { "source": "iana", "extensions": ["cil"] }, "application/vnd.ms-asf": { "source": "iana" }, "application/vnd.ms-cab-compressed": { "source": "iana", "extensions": ["cab"] }, "application/vnd.ms-color.iccprofile": { "source": "apache" }, "application/vnd.ms-excel": { "source": "iana", "compressible": false, "extensions": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] }, "application/vnd.ms-excel.addin.macroenabled.12": { "source": "iana", "extensions": ["xlam"] }, "application/vnd.ms-excel.sheet.binary.macroenabled.12": { "source": "iana", "extensions": ["xlsb"] }, "application/vnd.ms-excel.sheet.macroenabled.12": { "source": "iana", "extensions": ["xlsm"] }, "application/vnd.ms-excel.template.macroenabled.12": { "source": "iana", "extensions": ["xltm"] }, "application/vnd.ms-fontobject": { "source": "iana", "compressible": true, "extensions": ["eot"] }, "application/vnd.ms-htmlhelp": { "source": "iana", "extensions": ["chm"] }, "application/vnd.ms-ims": { "source": "iana", "extensions": ["ims"] }, "application/vnd.ms-lrm": { "source": "iana", "extensions": ["lrm"] }, "application/vnd.ms-office.activex+xml": { "source": "iana", "compressible": true }, "application/vnd.ms-officetheme": { "source": "iana", "extensions": ["thmx"] }, "application/vnd.ms-opentype": { "source": "apache", "compressible": true }, "application/vnd.ms-outlook": { "compressible": false, "extensions": ["msg"] }, "application/vnd.ms-package.obfuscated-opentype": { "source": "apache" }, "application/vnd.ms-pki.seccat": { "source": "apache", "extensions": ["cat"] }, "application/vnd.ms-pki.stl": { "source": "apache", "extensions": ["stl"] }, "application/vnd.ms-playready.initiator+xml": { "source": "iana", "compressible": true }, "application/vnd.ms-powerpoint": { "source": "iana", "compressible": false, "extensions": ["ppt", "pps", "pot"] }, "application/vnd.ms-powerpoint.addin.macroenabled.12": { "source": "iana", "extensions": ["ppam"] }, "application/vnd.ms-powerpoint.presentation.macroenabled.12": { "source": "iana", "extensions": ["pptm"] }, "application/vnd.ms-powerpoint.slide.macroenabled.12": { "source": "iana", "extensions": ["sldm"] }, "application/vnd.ms-powerpoint.slideshow.macroenabled.12": { "source": "iana", "extensions": ["ppsm"] }, "application/vnd.ms-powerpoint.template.macroenabled.12": { "source": "iana", "extensions": ["potm"] }, "application/vnd.ms-printdevicecapabilities+xml": { "source": "iana", "compressible": true }, "application/vnd.ms-printing.printticket+xml": { "source": "apache", "compressible": true }, "application/vnd.ms-printschematicket+xml": { "source": "iana", "compressible": true }, "application/vnd.ms-project": { "source": "iana", "extensions": ["mpp", "mpt"] }, "application/vnd.ms-tnef": { "source": "iana" }, "application/vnd.ms-windows.devicepairing": { "source": "iana" }, "application/vnd.ms-windows.nwprinting.oob": { "source": "iana" }, "application/vnd.ms-windows.printerpairing": { "source": "iana" }, "application/vnd.ms-windows.wsd.oob": { "source": "iana" }, "application/vnd.ms-wmdrm.lic-chlg-req": { "source": "iana" }, "application/vnd.ms-wmdrm.lic-resp": { "source": "iana" }, "application/vnd.ms-wmdrm.meter-chlg-req": { "source": "iana" }, "application/vnd.ms-wmdrm.meter-resp": { "source": "iana" }, "application/vnd.ms-word.document.macroenabled.12": { "source": "iana", "extensions": ["docm"] }, "application/vnd.ms-word.template.macroenabled.12": { "source": "iana", "extensions": ["dotm"] }, "application/vnd.ms-works": { "source": "iana", "extensions": ["wps", "wks", "wcm", "wdb"] }, "application/vnd.ms-wpl": { "source": "iana", "extensions": ["wpl"] }, "application/vnd.ms-xpsdocument": { "source": "iana", "compressible": false, "extensions": ["xps"] }, "application/vnd.msa-disk-image": { "source": "iana" }, "application/vnd.mseq": { "source": "iana", "extensions": ["mseq"] }, "application/vnd.msign": { "source": "iana" }, "application/vnd.multiad.creator": { "source": "iana" }, "application/vnd.multiad.creator.cif": { "source": "iana" }, "application/vnd.music-niff": { "source": "iana" }, "application/vnd.musician": { "source": "iana", "extensions": ["mus"] }, "application/vnd.muvee.style": { "source": "iana", "extensions": ["msty"] }, "application/vnd.mynfc": { "source": "iana", "extensions": ["taglet"] }, "application/vnd.nacamar.ybrid+json": { "source": "iana", "compressible": true }, "application/vnd.ncd.control": { "source": "iana" }, "application/vnd.ncd.reference": { "source": "iana" }, "application/vnd.nearst.inv+json": { "source": "iana", "compressible": true }, "application/vnd.nebumind.line": { "source": "iana" }, "application/vnd.nervana": { "source": "iana" }, "application/vnd.netfpx": { "source": "iana" }, "application/vnd.neurolanguage.nlu": { "source": "iana", "extensions": ["nlu"] }, "application/vnd.nimn": { "source": "iana" }, "application/vnd.nintendo.nitro.rom": { "source": "iana" }, "application/vnd.nintendo.snes.rom": { "source": "iana" }, "application/vnd.nitf": { "source": "iana", "extensions": ["ntf", "nitf"] }, "application/vnd.noblenet-directory": { "source": "iana", "extensions": ["nnd"] }, "application/vnd.noblenet-sealer": { "source": "iana", "extensions": ["nns"] }, "application/vnd.noblenet-web": { "source": "iana", "extensions": ["nnw"] }, "application/vnd.nokia.catalogs": { "source": "iana" }, "application/vnd.nokia.conml+wbxml": { "source": "iana" }, "application/vnd.nokia.conml+xml": { "source": "iana", "compressible": true }, "application/vnd.nokia.iptv.config+xml": { "source": "iana", "compressible": true }, "application/vnd.nokia.isds-radio-presets": { "source": "iana" }, "application/vnd.nokia.landmark+wbxml": { "source": "iana" }, "application/vnd.nokia.landmark+xml": { "source": "iana", "compressible": true }, "application/vnd.nokia.landmarkcollection+xml": { "source": "iana", "compressible": true }, "application/vnd.nokia.n-gage.ac+xml": { "source": "iana", "compressible": true, "extensions": ["ac"] }, "application/vnd.nokia.n-gage.data": { "source": "iana", "extensions": ["ngdat"] }, "application/vnd.nokia.n-gage.symbian.install": { "source": "iana", "extensions": ["n-gage"] }, "application/vnd.nokia.ncd": { "source": "iana" }, "application/vnd.nokia.pcd+wbxml": { "source": "iana" }, "application/vnd.nokia.pcd+xml": { "source": "iana", "compressible": true }, "application/vnd.nokia.radio-preset": { "source": "iana", "extensions": ["rpst"] }, "application/vnd.nokia.radio-presets": { "source": "iana", "extensions": ["rpss"] }, "application/vnd.novadigm.edm": { "source": "iana", "extensions": ["edm"] }, "application/vnd.novadigm.edx": { "source": "iana", "extensions": ["edx"] }, "application/vnd.novadigm.ext": { "source": "iana", "extensions": ["ext"] }, "application/vnd.ntt-local.content-share": { "source": "iana" }, "application/vnd.ntt-local.file-transfer": { "source": "iana" }, "application/vnd.ntt-local.ogw_remote-access": { "source": "iana" }, "application/vnd.ntt-local.sip-ta_remote": { "source": "iana" }, "application/vnd.ntt-local.sip-ta_tcp_stream": { "source": "iana" }, "application/vnd.oasis.opendocument.chart": { "source": "iana", "extensions": ["odc"] }, "application/vnd.oasis.opendocument.chart-template": { "source": "iana", "extensions": ["otc"] }, "application/vnd.oasis.opendocument.database": { "source": "iana", "extensions": ["odb"] }, "application/vnd.oasis.opendocument.formula": { "source": "iana", "extensions": ["odf"] }, "application/vnd.oasis.opendocument.formula-template": { "source": "iana", "extensions": ["odft"] }, "application/vnd.oasis.opendocument.graphics": { "source": "iana", "compressible": false, "extensions": ["odg"] }, "application/vnd.oasis.opendocument.graphics-template": { "source": "iana", "extensions": ["otg"] }, "application/vnd.oasis.opendocument.image": { "source": "iana", "extensions": ["odi"] }, "application/vnd.oasis.opendocument.image-template": { "source": "iana", "extensions": ["oti"] }, "application/vnd.oasis.opendocument.presentation": { "source": "iana", "compressible": false, "extensions": ["odp"] }, "application/vnd.oasis.opendocument.presentation-template": { "source": "iana", "extensions": ["otp"] }, "application/vnd.oasis.opendocument.spreadsheet": { "source": "iana", "compressible": false, "extensions": ["ods"] }, "application/vnd.oasis.opendocument.spreadsheet-template": { "source": "iana", "extensions": ["ots"] }, "application/vnd.oasis.opendocument.text": { "source": "iana", "compressible": false, "extensions": ["odt"] }, "application/vnd.oasis.opendocument.text-master": { "source": "iana", "extensions": ["odm"] }, "application/vnd.oasis.opendocument.text-template": { "source": "iana", "extensions": ["ott"] }, "application/vnd.oasis.opendocument.text-web": { "source": "iana", "extensions": ["oth"] }, "application/vnd.obn": { "source": "iana" }, "application/vnd.ocf+cbor": { "source": "iana" }, "application/vnd.oci.image.manifest.v1+json": { "source": "iana", "compressible": true }, "application/vnd.oftn.l10n+json": { "source": "iana", "compressible": true }, "application/vnd.oipf.contentaccessdownload+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.contentaccessstreaming+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.cspg-hexbinary": { "source": "iana" }, "application/vnd.oipf.dae.svg+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.dae.xhtml+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.mippvcontrolmessage+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.pae.gem": { "source": "iana" }, "application/vnd.oipf.spdiscovery+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.spdlist+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.ueprofile+xml": { "source": "iana", "compressible": true }, "application/vnd.oipf.userprofile+xml": { "source": "iana", "compressible": true }, "application/vnd.olpc-sugar": { "source": "iana", "extensions": ["xo"] }, "application/vnd.oma-scws-config": { "source": "iana" }, "application/vnd.oma-scws-http-request": { "source": "iana" }, "application/vnd.oma-scws-http-response": { "source": "iana" }, "application/vnd.oma.bcast.associated-procedure-parameter+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.drm-trigger+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.imd+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.ltkm": { "source": "iana" }, "application/vnd.oma.bcast.notification+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.provisioningtrigger": { "source": "iana" }, "application/vnd.oma.bcast.sgboot": { "source": "iana" }, "application/vnd.oma.bcast.sgdd+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.sgdu": { "source": "iana" }, "application/vnd.oma.bcast.simple-symbol-container": { "source": "iana" }, "application/vnd.oma.bcast.smartcard-trigger+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.sprov+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.bcast.stkm": { "source": "iana" }, "application/vnd.oma.cab-address-book+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.cab-feature-handler+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.cab-pcc+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.cab-subs-invite+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.cab-user-prefs+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.dcd": { "source": "iana" }, "application/vnd.oma.dcdc": { "source": "iana" }, "application/vnd.oma.dd2+xml": { "source": "iana", "compressible": true, "extensions": ["dd2"] }, "application/vnd.oma.drm.risd+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.group-usage-list+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.lwm2m+cbor": { "source": "iana" }, "application/vnd.oma.lwm2m+json": { "source": "iana", "compressible": true }, "application/vnd.oma.lwm2m+tlv": { "source": "iana" }, "application/vnd.oma.pal+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.poc.detailed-progress-report+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.poc.final-report+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.poc.groups+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.poc.invocation-descriptor+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.poc.optimized-progress-report+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.push": { "source": "iana" }, "application/vnd.oma.scidm.messages+xml": { "source": "iana", "compressible": true }, "application/vnd.oma.xcap-directory+xml": { "source": "iana", "compressible": true }, "application/vnd.omads-email+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/vnd.omads-file+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/vnd.omads-folder+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/vnd.omaloc-supl-init": { "source": "iana" }, "application/vnd.onepager": { "source": "iana" }, "application/vnd.onepagertamp": { "source": "iana" }, "application/vnd.onepagertamx": { "source": "iana" }, "application/vnd.onepagertat": { "source": "iana" }, "application/vnd.onepagertatp": { "source": "iana" }, "application/vnd.onepagertatx": { "source": "iana" }, "application/vnd.openblox.game+xml": { "source": "iana", "compressible": true, "extensions": ["obgx"] }, "application/vnd.openblox.game-binary": { "source": "iana" }, "application/vnd.openeye.oeb": { "source": "iana" }, "application/vnd.openofficeorg.extension": { "source": "apache", "extensions": ["oxt"] }, "application/vnd.openstreetmap.data+xml": { "source": "iana", "compressible": true, "extensions": ["osm"] }, "application/vnd.opentimestamps.ots": { "source": "iana" }, "application/vnd.openxmlformats-officedocument.custom-properties+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawing+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.extended-properties+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.presentation": { "source": "iana", "compressible": false, "extensions": ["pptx"] }, "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.slide": { "source": "iana", "extensions": ["sldx"] }, "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.slideshow": { "source": "iana", "extensions": ["ppsx"] }, "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.template": { "source": "iana", "extensions": ["potx"] }, "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { "source": "iana", "compressible": false, "extensions": ["xlsx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.template": { "source": "iana", "extensions": ["xltx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.theme+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.themeoverride+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.vmldrawing": { "source": "iana" }, "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { "source": "iana", "compressible": false, "extensions": ["docx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.template": { "source": "iana", "extensions": ["dotx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-package.core-properties+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": { "source": "iana", "compressible": true }, "application/vnd.openxmlformats-package.relationships+xml": { "source": "iana", "compressible": true }, "application/vnd.oracle.resource+json": { "source": "iana", "compressible": true }, "application/vnd.orange.indata": { "source": "iana" }, "application/vnd.osa.netdeploy": { "source": "iana" }, "application/vnd.osgeo.mapguide.package": { "source": "iana", "extensions": ["mgp"] }, "application/vnd.osgi.bundle": { "source": "iana" }, "application/vnd.osgi.dp": { "source": "iana", "extensions": ["dp"] }, "application/vnd.osgi.subsystem": { "source": "iana", "extensions": ["esa"] }, "application/vnd.otps.ct-kip+xml": { "source": "iana", "compressible": true }, "application/vnd.oxli.countgraph": { "source": "iana" }, "application/vnd.pagerduty+json": { "source": "iana", "compressible": true }, "application/vnd.palm": { "source": "iana", "extensions": ["pdb", "pqa", "oprc"] }, "application/vnd.panoply": { "source": "iana" }, "application/vnd.paos.xml": { "source": "iana" }, "application/vnd.patentdive": { "source": "iana" }, "application/vnd.patientecommsdoc": { "source": "iana" }, "application/vnd.pawaafile": { "source": "iana", "extensions": ["paw"] }, "application/vnd.pcos": { "source": "iana" }, "application/vnd.pg.format": { "source": "iana", "extensions": ["str"] }, "application/vnd.pg.osasli": { "source": "iana", "extensions": ["ei6"] }, "application/vnd.piaccess.application-licence": { "source": "iana" }, "application/vnd.picsel": { "source": "iana", "extensions": ["efif"] }, "application/vnd.pmi.widget": { "source": "iana", "extensions": ["wg"] }, "application/vnd.poc.group-advertisement+xml": { "source": "iana", "compressible": true }, "application/vnd.pocketlearn": { "source": "iana", "extensions": ["plf"] }, "application/vnd.powerbuilder6": { "source": "iana", "extensions": ["pbd"] }, "application/vnd.powerbuilder6-s": { "source": "iana" }, "application/vnd.powerbuilder7": { "source": "iana" }, "application/vnd.powerbuilder7-s": { "source": "iana" }, "application/vnd.powerbuilder75": { "source": "iana" }, "application/vnd.powerbuilder75-s": { "source": "iana" }, "application/vnd.preminet": { "source": "iana" }, "application/vnd.previewsystems.box": { "source": "iana", "extensions": ["box"] }, "application/vnd.proteus.magazine": { "source": "iana", "extensions": ["mgz"] }, "application/vnd.psfs": { "source": "iana" }, "application/vnd.publishare-delta-tree": { "source": "iana", "extensions": ["qps"] }, "application/vnd.pvi.ptid1": { "source": "iana", "extensions": ["ptid"] }, "application/vnd.pwg-multiplexed": { "source": "iana" }, "application/vnd.pwg-xhtml-print+xml": { "source": "iana", "compressible": true }, "application/vnd.qualcomm.brew-app-res": { "source": "iana" }, "application/vnd.quarantainenet": { "source": "iana" }, "application/vnd.quark.quarkxpress": { "source": "iana", "extensions": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] }, "application/vnd.quobject-quoxdocument": { "source": "iana" }, "application/vnd.radisys.moml+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-audit+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-audit-conf+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-audit-conn+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-audit-dialog+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-audit-stream+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-conf+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog-base+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog-fax-detect+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog-group+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog-speech+xml": { "source": "iana", "compressible": true }, "application/vnd.radisys.msml-dialog-transform+xml": { "source": "iana", "compressible": true }, "application/vnd.rainstor.data": { "source": "iana" }, "application/vnd.rapid": { "source": "iana" }, "application/vnd.rar": { "source": "iana", "extensions": ["rar"] }, "application/vnd.realvnc.bed": { "source": "iana", "extensions": ["bed"] }, "application/vnd.recordare.musicxml": { "source": "iana", "extensions": ["mxl"] }, "application/vnd.recordare.musicxml+xml": { "source": "iana", "compressible": true, "extensions": ["musicxml"] }, "application/vnd.renlearn.rlprint": { "source": "iana" }, "application/vnd.resilient.logic": { "source": "iana" }, "application/vnd.restful+json": { "source": "iana", "compressible": true }, "application/vnd.rig.cryptonote": { "source": "iana", "extensions": ["cryptonote"] }, "application/vnd.rim.cod": { "source": "apache", "extensions": ["cod"] }, "application/vnd.rn-realmedia": { "source": "apache", "extensions": ["rm"] }, "application/vnd.rn-realmedia-vbr": { "source": "apache", "extensions": ["rmvb"] }, "application/vnd.route66.link66+xml": { "source": "iana", "compressible": true, "extensions": ["link66"] }, "application/vnd.rs-274x": { "source": "iana" }, "application/vnd.ruckus.download": { "source": "iana" }, "application/vnd.s3sms": { "source": "iana" }, "application/vnd.sailingtracker.track": { "source": "iana", "extensions": ["st"] }, "application/vnd.sar": { "source": "iana" }, "application/vnd.sbm.cid": { "source": "iana" }, "application/vnd.sbm.mid2": { "source": "iana" }, "application/vnd.scribus": { "source": "iana" }, "application/vnd.sealed.3df": { "source": "iana" }, "application/vnd.sealed.csf": { "source": "iana" }, "application/vnd.sealed.doc": { "source": "iana" }, "application/vnd.sealed.eml": { "source": "iana" }, "application/vnd.sealed.mht": { "source": "iana" }, "application/vnd.sealed.net": { "source": "iana" }, "application/vnd.sealed.ppt": { "source": "iana" }, "application/vnd.sealed.tiff": { "source": "iana" }, "application/vnd.sealed.xls": { "source": "iana" }, "application/vnd.sealedmedia.softseal.html": { "source": "iana" }, "application/vnd.sealedmedia.softseal.pdf": { "source": "iana" }, "application/vnd.seemail": { "source": "iana", "extensions": ["see"] }, "application/vnd.seis+json": { "source": "iana", "compressible": true }, "application/vnd.sema": { "source": "iana", "extensions": ["sema"] }, "application/vnd.semd": { "source": "iana", "extensions": ["semd"] }, "application/vnd.semf": { "source": "iana", "extensions": ["semf"] }, "application/vnd.shade-save-file": { "source": "iana" }, "application/vnd.shana.informed.formdata": { "source": "iana", "extensions": ["ifm"] }, "application/vnd.shana.informed.formtemplate": { "source": "iana", "extensions": ["itp"] }, "application/vnd.shana.informed.interchange": { "source": "iana", "extensions": ["iif"] }, "application/vnd.shana.informed.package": { "source": "iana", "extensions": ["ipk"] }, "application/vnd.shootproof+json": { "source": "iana", "compressible": true }, "application/vnd.shopkick+json": { "source": "iana", "compressible": true }, "application/vnd.shp": { "source": "iana" }, "application/vnd.shx": { "source": "iana" }, "application/vnd.sigrok.session": { "source": "iana" }, "application/vnd.simtech-mindmapper": { "source": "iana", "extensions": ["twd", "twds"] }, "application/vnd.siren+json": { "source": "iana", "compressible": true }, "application/vnd.smaf": { "source": "iana", "extensions": ["mmf"] }, "application/vnd.smart.notebook": { "source": "iana" }, "application/vnd.smart.teacher": { "source": "iana", "extensions": ["teacher"] }, "application/vnd.snesdev-page-table": { "source": "iana" }, "application/vnd.software602.filler.form+xml": { "source": "iana", "compressible": true, "extensions": ["fo"] }, "application/vnd.software602.filler.form-xml-zip": { "source": "iana" }, "application/vnd.solent.sdkm+xml": { "source": "iana", "compressible": true, "extensions": ["sdkm", "sdkd"] }, "application/vnd.spotfire.dxp": { "source": "iana", "extensions": ["dxp"] }, "application/vnd.spotfire.sfs": { "source": "iana", "extensions": ["sfs"] }, "application/vnd.sqlite3": { "source": "iana" }, "application/vnd.sss-cod": { "source": "iana" }, "application/vnd.sss-dtf": { "source": "iana" }, "application/vnd.sss-ntf": { "source": "iana" }, "application/vnd.stardivision.calc": { "source": "apache", "extensions": ["sdc"] }, "application/vnd.stardivision.draw": { "source": "apache", "extensions": ["sda"] }, "application/vnd.stardivision.impress": { "source": "apache", "extensions": ["sdd"] }, "application/vnd.stardivision.math": { "source": "apache", "extensions": ["smf"] }, "application/vnd.stardivision.writer": { "source": "apache", "extensions": ["sdw", "vor"] }, "application/vnd.stardivision.writer-global": { "source": "apache", "extensions": ["sgl"] }, "application/vnd.stepmania.package": { "source": "iana", "extensions": ["smzip"] }, "application/vnd.stepmania.stepchart": { "source": "iana", "extensions": ["sm"] }, "application/vnd.street-stream": { "source": "iana" }, "application/vnd.sun.wadl+xml": { "source": "iana", "compressible": true, "extensions": ["wadl"] }, "application/vnd.sun.xml.calc": { "source": "apache", "extensions": ["sxc"] }, "application/vnd.sun.xml.calc.template": { "source": "apache", "extensions": ["stc"] }, "application/vnd.sun.xml.draw": { "source": "apache", "extensions": ["sxd"] }, "application/vnd.sun.xml.draw.template": { "source": "apache", "extensions": ["std"] }, "application/vnd.sun.xml.impress": { "source": "apache", "extensions": ["sxi"] }, "application/vnd.sun.xml.impress.template": { "source": "apache", "extensions": ["sti"] }, "application/vnd.sun.xml.math": { "source": "apache", "extensions": ["sxm"] }, "application/vnd.sun.xml.writer": { "source": "apache", "extensions": ["sxw"] }, "application/vnd.sun.xml.writer.global": { "source": "apache", "extensions": ["sxg"] }, "application/vnd.sun.xml.writer.template": { "source": "apache", "extensions": ["stw"] }, "application/vnd.sus-calendar": { "source": "iana", "extensions": ["sus", "susp"] }, "application/vnd.svd": { "source": "iana", "extensions": ["svd"] }, "application/vnd.swiftview-ics": { "source": "iana" }, "application/vnd.sycle+xml": { "source": "iana", "compressible": true }, "application/vnd.syft+json": { "source": "iana", "compressible": true }, "application/vnd.symbian.install": { "source": "apache", "extensions": ["sis", "sisx"] }, "application/vnd.syncml+xml": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["xsm"] }, "application/vnd.syncml.dm+wbxml": { "source": "iana", "charset": "UTF-8", "extensions": ["bdm"] }, "application/vnd.syncml.dm+xml": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["xdm"] }, "application/vnd.syncml.dm.notification": { "source": "iana" }, "application/vnd.syncml.dmddf+wbxml": { "source": "iana" }, "application/vnd.syncml.dmddf+xml": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["ddf"] }, "application/vnd.syncml.dmtnds+wbxml": { "source": "iana" }, "application/vnd.syncml.dmtnds+xml": { "source": "iana", "charset": "UTF-8", "compressible": true }, "application/vnd.syncml.ds.notification": { "source": "iana" }, "application/vnd.tableschema+json": { "source": "iana", "compressible": true }, "application/vnd.tao.intent-module-archive": { "source": "iana", "extensions": ["tao"] }, "application/vnd.tcpdump.pcap": { "source": "iana", "extensions": ["pcap", "cap", "dmp"] }, "application/vnd.think-cell.ppttc+json": { "source": "iana", "compressible": true }, "application/vnd.tmd.mediaflex.api+xml": { "source": "iana", "compressible": true }, "application/vnd.tml": { "source": "iana" }, "application/vnd.tmobile-livetv": { "source": "iana", "extensions": ["tmo"] }, "application/vnd.tri.onesource": { "source": "iana" }, "application/vnd.trid.tpt": { "source": "iana", "extensions": ["tpt"] }, "application/vnd.triscape.mxs": { "source": "iana", "extensions": ["mxs"] }, "application/vnd.trueapp": { "source": "iana", "extensions": ["tra"] }, "application/vnd.truedoc": { "source": "iana" }, "application/vnd.ubisoft.webplayer": { "source": "iana" }, "application/vnd.ufdl": { "source": "iana", "extensions": ["ufd", "ufdl"] }, "application/vnd.uiq.theme": { "source": "iana", "extensions": ["utz"] }, "application/vnd.umajin": { "source": "iana", "extensions": ["umj"] }, "application/vnd.unity": { "source": "iana", "extensions": ["unityweb"] }, "application/vnd.uoml+xml": { "source": "iana", "compressible": true, "extensions": ["uoml"] }, "application/vnd.uplanet.alert": { "source": "iana" }, "application/vnd.uplanet.alert-wbxml": { "source": "iana" }, "application/vnd.uplanet.bearer-choice": { "source": "iana" }, "application/vnd.uplanet.bearer-choice-wbxml": { "source": "iana" }, "application/vnd.uplanet.cacheop": { "source": "iana" }, "application/vnd.uplanet.cacheop-wbxml": { "source": "iana" }, "application/vnd.uplanet.channel": { "source": "iana" }, "application/vnd.uplanet.channel-wbxml": { "source": "iana" }, "application/vnd.uplanet.list": { "source": "iana" }, "application/vnd.uplanet.list-wbxml": { "source": "iana" }, "application/vnd.uplanet.listcmd": { "source": "iana" }, "application/vnd.uplanet.listcmd-wbxml": { "source": "iana" }, "application/vnd.uplanet.signal": { "source": "iana" }, "application/vnd.uri-map": { "source": "iana" }, "application/vnd.valve.source.material": { "source": "iana" }, "application/vnd.vcx": { "source": "iana", "extensions": ["vcx"] }, "application/vnd.vd-study": { "source": "iana" }, "application/vnd.vectorworks": { "source": "iana" }, "application/vnd.vel+json": { "source": "iana", "compressible": true }, "application/vnd.verimatrix.vcas": { "source": "iana" }, "application/vnd.veritone.aion+json": { "source": "iana", "compressible": true }, "application/vnd.veryant.thin": { "source": "iana" }, "application/vnd.ves.encrypted": { "source": "iana" }, "application/vnd.vidsoft.vidconference": { "source": "iana" }, "application/vnd.visio": { "source": "iana", "extensions": ["vsd", "vst", "vss", "vsw"] }, "application/vnd.visionary": { "source": "iana", "extensions": ["vis"] }, "application/vnd.vividence.scriptfile": { "source": "iana" }, "application/vnd.vsf": { "source": "iana", "extensions": ["vsf"] }, "application/vnd.wap.sic": { "source": "iana" }, "application/vnd.wap.slc": { "source": "iana" }, "application/vnd.wap.wbxml": { "source": "iana", "charset": "UTF-8", "extensions": ["wbxml"] }, "application/vnd.wap.wmlc": { "source": "iana", "extensions": ["wmlc"] }, "application/vnd.wap.wmlscriptc": { "source": "iana", "extensions": ["wmlsc"] }, "application/vnd.webturbo": { "source": "iana", "extensions": ["wtb"] }, "application/vnd.wfa.dpp": { "source": "iana" }, "application/vnd.wfa.p2p": { "source": "iana" }, "application/vnd.wfa.wsc": { "source": "iana" }, "application/vnd.windows.devicepairing": { "source": "iana" }, "application/vnd.wmc": { "source": "iana" }, "application/vnd.wmf.bootstrap": { "source": "iana" }, "application/vnd.wolfram.mathematica": { "source": "iana" }, "application/vnd.wolfram.mathematica.package": { "source": "iana" }, "application/vnd.wolfram.player": { "source": "iana", "extensions": ["nbp"] }, "application/vnd.wordperfect": { "source": "iana", "extensions": ["wpd"] }, "application/vnd.wqd": { "source": "iana", "extensions": ["wqd"] }, "application/vnd.wrq-hp3000-labelled": { "source": "iana" }, "application/vnd.wt.stf": { "source": "iana", "extensions": ["stf"] }, "application/vnd.wv.csp+wbxml": { "source": "iana" }, "application/vnd.wv.csp+xml": { "source": "iana", "compressible": true }, "application/vnd.wv.ssp+xml": { "source": "iana", "compressible": true }, "application/vnd.xacml+json": { "source": "iana", "compressible": true }, "application/vnd.xara": { "source": "iana", "extensions": ["xar"] }, "application/vnd.xfdl": { "source": "iana", "extensions": ["xfdl"] }, "application/vnd.xfdl.webform": { "source": "iana" }, "application/vnd.xmi+xml": { "source": "iana", "compressible": true }, "application/vnd.xmpie.cpkg": { "source": "iana" }, "application/vnd.xmpie.dpkg": { "source": "iana" }, "application/vnd.xmpie.plan": { "source": "iana" }, "application/vnd.xmpie.ppkg": { "source": "iana" }, "application/vnd.xmpie.xlim": { "source": "iana" }, "application/vnd.yamaha.hv-dic": { "source": "iana", "extensions": ["hvd"] }, "application/vnd.yamaha.hv-script": { "source": "iana", "extensions": ["hvs"] }, "application/vnd.yamaha.hv-voice": { "source": "iana", "extensions": ["hvp"] }, "application/vnd.yamaha.openscoreformat": { "source": "iana", "extensions": ["osf"] }, "application/vnd.yamaha.openscoreformat.osfpvg+xml": { "source": "iana", "compressible": true, "extensions": ["osfpvg"] }, "application/vnd.yamaha.remote-setup": { "source": "iana" }, "application/vnd.yamaha.smaf-audio": { "source": "iana", "extensions": ["saf"] }, "application/vnd.yamaha.smaf-phrase": { "source": "iana", "extensions": ["spf"] }, "application/vnd.yamaha.through-ngn": { "source": "iana" }, "application/vnd.yamaha.tunnel-udpencap": { "source": "iana" }, "application/vnd.yaoweme": { "source": "iana" }, "application/vnd.yellowriver-custom-menu": { "source": "iana", "extensions": ["cmp"] }, "application/vnd.youtube.yt": { "source": "iana" }, "application/vnd.zul": { "source": "iana", "extensions": ["zir", "zirz"] }, "application/vnd.zzazz.deck+xml": { "source": "iana", "compressible": true, "extensions": ["zaz"] }, "application/voicexml+xml": { "source": "iana", "compressible": true, "extensions": ["vxml"] }, "application/voucher-cms+json": { "source": "iana", "compressible": true }, "application/vq-rtcpxr": { "source": "iana" }, "application/wasm": { "source": "iana", "compressible": true, "extensions": ["wasm"] }, "application/watcherinfo+xml": { "source": "iana", "compressible": true, "extensions": ["wif"] }, "application/webpush-options+json": { "source": "iana", "compressible": true }, "application/whoispp-query": { "source": "iana" }, "application/whoispp-response": { "source": "iana" }, "application/widget": { "source": "iana", "extensions": ["wgt"] }, "application/winhlp": { "source": "apache", "extensions": ["hlp"] }, "application/wita": { "source": "iana" }, "application/wordperfect5.1": { "source": "iana" }, "application/wsdl+xml": { "source": "iana", "compressible": true, "extensions": ["wsdl"] }, "application/wspolicy+xml": { "source": "iana", "compressible": true, "extensions": ["wspolicy"] }, "application/x-7z-compressed": { "source": "apache", "compressible": false, "extensions": ["7z"] }, "application/x-abiword": { "source": "apache", "extensions": ["abw"] }, "application/x-ace-compressed": { "source": "apache", "extensions": ["ace"] }, "application/x-amf": { "source": "apache" }, "application/x-apple-diskimage": { "source": "apache", "extensions": ["dmg"] }, "application/x-arj": { "compressible": false, "extensions": ["arj"] }, "application/x-authorware-bin": { "source": "apache", "extensions": ["aab", "x32", "u32", "vox"] }, "application/x-authorware-map": { "source": "apache", "extensions": ["aam"] }, "application/x-authorware-seg": { "source": "apache", "extensions": ["aas"] }, "application/x-bcpio": { "source": "apache", "extensions": ["bcpio"] }, "application/x-bdoc": { "compressible": false, "extensions": ["bdoc"] }, "application/x-bittorrent": { "source": "apache", "extensions": ["torrent"] }, "application/x-blorb": { "source": "apache", "extensions": ["blb", "blorb"] }, "application/x-bzip": { "source": "apache", "compressible": false, "extensions": ["bz"] }, "application/x-bzip2": { "source": "apache", "compressible": false, "extensions": ["bz2", "boz"] }, "application/x-cbr": { "source": "apache", "extensions": ["cbr", "cba", "cbt", "cbz", "cb7"] }, "application/x-cdlink": { "source": "apache", "extensions": ["vcd"] }, "application/x-cfs-compressed": { "source": "apache", "extensions": ["cfs"] }, "application/x-chat": { "source": "apache", "extensions": ["chat"] }, "application/x-chess-pgn": { "source": "apache", "extensions": ["pgn"] }, "application/x-chrome-extension": { "extensions": ["crx"] }, "application/x-cocoa": { "source": "nginx", "extensions": ["cco"] }, "application/x-compress": { "source": "apache" }, "application/x-conference": { "source": "apache", "extensions": ["nsc"] }, "application/x-cpio": { "source": "apache", "extensions": ["cpio"] }, "application/x-csh": { "source": "apache", "extensions": ["csh"] }, "application/x-deb": { "compressible": false }, "application/x-debian-package": { "source": "apache", "extensions": ["deb", "udeb"] }, "application/x-dgc-compressed": { "source": "apache", "extensions": ["dgc"] }, "application/x-director": { "source": "apache", "extensions": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"] }, "application/x-doom": { "source": "apache", "extensions": ["wad"] }, "application/x-dtbncx+xml": { "source": "apache", "compressible": true, "extensions": ["ncx"] }, "application/x-dtbook+xml": { "source": "apache", "compressible": true, "extensions": ["dtb"] }, "application/x-dtbresource+xml": { "source": "apache", "compressible": true, "extensions": ["res"] }, "application/x-dvi": { "source": "apache", "compressible": false, "extensions": ["dvi"] }, "application/x-envoy": { "source": "apache", "extensions": ["evy"] }, "application/x-eva": { "source": "apache", "extensions": ["eva"] }, "application/x-font-bdf": { "source": "apache", "extensions": ["bdf"] }, "application/x-font-dos": { "source": "apache" }, "application/x-font-framemaker": { "source": "apache" }, "application/x-font-ghostscript": { "source": "apache", "extensions": ["gsf"] }, "application/x-font-libgrx": { "source": "apache" }, "application/x-font-linux-psf": { "source": "apache", "extensions": ["psf"] }, "application/x-font-pcf": { "source": "apache", "extensions": ["pcf"] }, "application/x-font-snf": { "source": "apache", "extensions": ["snf"] }, "application/x-font-speedo": { "source": "apache" }, "application/x-font-sunos-news": { "source": "apache" }, "application/x-font-type1": { "source": "apache", "extensions": ["pfa", "pfb", "pfm", "afm"] }, "application/x-font-vfont": { "source": "apache" }, "application/x-freearc": { "source": "apache", "extensions": ["arc"] }, "application/x-futuresplash": { "source": "apache", "extensions": ["spl"] }, "application/x-gca-compressed": { "source": "apache", "extensions": ["gca"] }, "application/x-glulx": { "source": "apache", "extensions": ["ulx"] }, "application/x-gnumeric": { "source": "apache", "extensions": ["gnumeric"] }, "application/x-gramps-xml": { "source": "apache", "extensions": ["gramps"] }, "application/x-gtar": { "source": "apache", "extensions": ["gtar"] }, "application/x-gzip": { "source": "apache" }, "application/x-hdf": { "source": "apache", "extensions": ["hdf"] }, "application/x-httpd-php": { "compressible": true, "extensions": ["php"] }, "application/x-install-instructions": { "source": "apache", "extensions": ["install"] }, "application/x-iso9660-image": { "source": "apache", "extensions": ["iso"] }, "application/x-iwork-keynote-sffkey": { "extensions": ["key"] }, "application/x-iwork-numbers-sffnumbers": { "extensions": ["numbers"] }, "application/x-iwork-pages-sffpages": { "extensions": ["pages"] }, "application/x-java-archive-diff": { "source": "nginx", "extensions": ["jardiff"] }, "application/x-java-jnlp-file": { "source": "apache", "compressible": false, "extensions": ["jnlp"] }, "application/x-javascript": { "compressible": true }, "application/x-keepass2": { "extensions": ["kdbx"] }, "application/x-latex": { "source": "apache", "compressible": false, "extensions": ["latex"] }, "application/x-lua-bytecode": { "extensions": ["luac"] }, "application/x-lzh-compressed": { "source": "apache", "extensions": ["lzh", "lha"] }, "application/x-makeself": { "source": "nginx", "extensions": ["run"] }, "application/x-mie": { "source": "apache", "extensions": ["mie"] }, "application/x-mobipocket-ebook": { "source": "apache", "extensions": ["prc", "mobi"] }, "application/x-mpegurl": { "compressible": false }, "application/x-ms-application": { "source": "apache", "extensions": ["application"] }, "application/x-ms-shortcut": { "source": "apache", "extensions": ["lnk"] }, "application/x-ms-wmd": { "source": "apache", "extensions": ["wmd"] }, "application/x-ms-wmz": { "source": "apache", "extensions": ["wmz"] }, "application/x-ms-xbap": { "source": "apache", "extensions": ["xbap"] }, "application/x-msaccess": { "source": "apache", "extensions": ["mdb"] }, "application/x-msbinder": { "source": "apache", "extensions": ["obd"] }, "application/x-mscardfile": { "source": "apache", "extensions": ["crd"] }, "application/x-msclip": { "source": "apache", "extensions": ["clp"] }, "application/x-msdos-program": { "extensions": ["exe"] }, "application/x-msdownload": { "source": "apache", "extensions": ["exe", "dll", "com", "bat", "msi"] }, "application/x-msmediaview": { "source": "apache", "extensions": ["mvb", "m13", "m14"] }, "application/x-msmetafile": { "source": "apache", "extensions": ["wmf", "wmz", "emf", "emz"] }, "application/x-msmoney": { "source": "apache", "extensions": ["mny"] }, "application/x-mspublisher": { "source": "apache", "extensions": ["pub"] }, "application/x-msschedule": { "source": "apache", "extensions": ["scd"] }, "application/x-msterminal": { "source": "apache", "extensions": ["trm"] }, "application/x-mswrite": { "source": "apache", "extensions": ["wri"] }, "application/x-netcdf": { "source": "apache", "extensions": ["nc", "cdf"] }, "application/x-ns-proxy-autoconfig": { "compressible": true, "extensions": ["pac"] }, "application/x-nzb": { "source": "apache", "extensions": ["nzb"] }, "application/x-perl": { "source": "nginx", "extensions": ["pl", "pm"] }, "application/x-pilot": { "source": "nginx", "extensions": ["prc", "pdb"] }, "application/x-pkcs12": { "source": "apache", "compressible": false, "extensions": ["p12", "pfx"] }, "application/x-pkcs7-certificates": { "source": "apache", "extensions": ["p7b", "spc"] }, "application/x-pkcs7-certreqresp": { "source": "apache", "extensions": ["p7r"] }, "application/x-pki-message": { "source": "iana" }, "application/x-rar-compressed": { "source": "apache", "compressible": false, "extensions": ["rar"] }, "application/x-redhat-package-manager": { "source": "nginx", "extensions": ["rpm"] }, "application/x-research-info-systems": { "source": "apache", "extensions": ["ris"] }, "application/x-sea": { "source": "nginx", "extensions": ["sea"] }, "application/x-sh": { "source": "apache", "compressible": true, "extensions": ["sh"] }, "application/x-shar": { "source": "apache", "extensions": ["shar"] }, "application/x-shockwave-flash": { "source": "apache", "compressible": false, "extensions": ["swf"] }, "application/x-silverlight-app": { "source": "apache", "extensions": ["xap"] }, "application/x-sql": { "source": "apache", "extensions": ["sql"] }, "application/x-stuffit": { "source": "apache", "compressible": false, "extensions": ["sit"] }, "application/x-stuffitx": { "source": "apache", "extensions": ["sitx"] }, "application/x-subrip": { "source": "apache", "extensions": ["srt"] }, "application/x-sv4cpio": { "source": "apache", "extensions": ["sv4cpio"] }, "application/x-sv4crc": { "source": "apache", "extensions": ["sv4crc"] }, "application/x-t3vm-image": { "source": "apache", "extensions": ["t3"] }, "application/x-tads": { "source": "apache", "extensions": ["gam"] }, "application/x-tar": { "source": "apache", "compressible": true, "extensions": ["tar"] }, "application/x-tcl": { "source": "apache", "extensions": ["tcl", "tk"] }, "application/x-tex": { "source": "apache", "extensions": ["tex"] }, "application/x-tex-tfm": { "source": "apache", "extensions": ["tfm"] }, "application/x-texinfo": { "source": "apache", "extensions": ["texinfo", "texi"] }, "application/x-tgif": { "source": "apache", "extensions": ["obj"] }, "application/x-ustar": { "source": "apache", "extensions": ["ustar"] }, "application/x-virtualbox-hdd": { "compressible": true, "extensions": ["hdd"] }, "application/x-virtualbox-ova": { "compressible": true, "extensions": ["ova"] }, "application/x-virtualbox-ovf": { "compressible": true, "extensions": ["ovf"] }, "application/x-virtualbox-vbox": { "compressible": true, "extensions": ["vbox"] }, "application/x-virtualbox-vbox-extpack": { "compressible": false, "extensions": ["vbox-extpack"] }, "application/x-virtualbox-vdi": { "compressible": true, "extensions": ["vdi"] }, "application/x-virtualbox-vhd": { "compressible": true, "extensions": ["vhd"] }, "application/x-virtualbox-vmdk": { "compressible": true, "extensions": ["vmdk"] }, "application/x-wais-source": { "source": "apache", "extensions": ["src"] }, "application/x-web-app-manifest+json": { "compressible": true, "extensions": ["webapp"] }, "application/x-www-form-urlencoded": { "source": "iana", "compressible": true }, "application/x-x509-ca-cert": { "source": "iana", "extensions": ["der", "crt", "pem"] }, "application/x-x509-ca-ra-cert": { "source": "iana" }, "application/x-x509-next-ca-cert": { "source": "iana" }, "application/x-xfig": { "source": "apache", "extensions": ["fig"] }, "application/x-xliff+xml": { "source": "apache", "compressible": true, "extensions": ["xlf"] }, "application/x-xpinstall": { "source": "apache", "compressible": false, "extensions": ["xpi"] }, "application/x-xz": { "source": "apache", "extensions": ["xz"] }, "application/x-zmachine": { "source": "apache", "extensions": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] }, "application/x400-bp": { "source": "iana" }, "application/xacml+xml": { "source": "iana", "compressible": true }, "application/xaml+xml": { "source": "apache", "compressible": true, "extensions": ["xaml"] }, "application/xcap-att+xml": { "source": "iana", "compressible": true, "extensions": ["xav"] }, "application/xcap-caps+xml": { "source": "iana", "compressible": true, "extensions": ["xca"] }, "application/xcap-diff+xml": { "source": "iana", "compressible": true, "extensions": ["xdf"] }, "application/xcap-el+xml": { "source": "iana", "compressible": true, "extensions": ["xel"] }, "application/xcap-error+xml": { "source": "iana", "compressible": true }, "application/xcap-ns+xml": { "source": "iana", "compressible": true, "extensions": ["xns"] }, "application/xcon-conference-info+xml": { "source": "iana", "compressible": true }, "application/xcon-conference-info-diff+xml": { "source": "iana", "compressible": true }, "application/xenc+xml": { "source": "iana", "compressible": true, "extensions": ["xenc"] }, "application/xhtml+xml": { "source": "iana", "compressible": true, "extensions": ["xhtml", "xht"] }, "application/xhtml-voice+xml": { "source": "apache", "compressible": true }, "application/xliff+xml": { "source": "iana", "compressible": true, "extensions": ["xlf"] }, "application/xml": { "source": "iana", "compressible": true, "extensions": ["xml", "xsl", "xsd", "rng"] }, "application/xml-dtd": { "source": "iana", "compressible": true, "extensions": ["dtd"] }, "application/xml-external-parsed-entity": { "source": "iana" }, "application/xml-patch+xml": { "source": "iana", "compressible": true }, "application/xmpp+xml": { "source": "iana", "compressible": true }, "application/xop+xml": { "source": "iana", "compressible": true, "extensions": ["xop"] }, "application/xproc+xml": { "source": "apache", "compressible": true, "extensions": ["xpl"] }, "application/xslt+xml": { "source": "iana", "compressible": true, "extensions": ["xsl", "xslt"] }, "application/xspf+xml": { "source": "apache", "compressible": true, "extensions": ["xspf"] }, "application/xv+xml": { "source": "iana", "compressible": true, "extensions": ["mxml", "xhvml", "xvml", "xvm"] }, "application/yang": { "source": "iana", "extensions": ["yang"] }, "application/yang-data+json": { "source": "iana", "compressible": true }, "application/yang-data+xml": { "source": "iana", "compressible": true }, "application/yang-patch+json": { "source": "iana", "compressible": true }, "application/yang-patch+xml": { "source": "iana", "compressible": true }, "application/yin+xml": { "source": "iana", "compressible": true, "extensions": ["yin"] }, "application/zip": { "source": "iana", "compressible": false, "extensions": ["zip"] }, "application/zlib": { "source": "iana" }, "application/zstd": { "source": "iana" }, "audio/1d-interleaved-parityfec": { "source": "iana" }, "audio/32kadpcm": { "source": "iana" }, "audio/3gpp": { "source": "iana", "compressible": false, "extensions": ["3gpp"] }, "audio/3gpp2": { "source": "iana" }, "audio/aac": { "source": "iana" }, "audio/ac3": { "source": "iana" }, "audio/adpcm": { "source": "apache", "extensions": ["adp"] }, "audio/amr": { "source": "iana", "extensions": ["amr"] }, "audio/amr-wb": { "source": "iana" }, "audio/amr-wb+": { "source": "iana" }, "audio/aptx": { "source": "iana" }, "audio/asc": { "source": "iana" }, "audio/atrac-advanced-lossless": { "source": "iana" }, "audio/atrac-x": { "source": "iana" }, "audio/atrac3": { "source": "iana" }, "audio/basic": { "source": "iana", "compressible": false, "extensions": ["au", "snd"] }, "audio/bv16": { "source": "iana" }, "audio/bv32": { "source": "iana" }, "audio/clearmode": { "source": "iana" }, "audio/cn": { "source": "iana" }, "audio/dat12": { "source": "iana" }, "audio/dls": { "source": "iana" }, "audio/dsr-es201108": { "source": "iana" }, "audio/dsr-es202050": { "source": "iana" }, "audio/dsr-es202211": { "source": "iana" }, "audio/dsr-es202212": { "source": "iana" }, "audio/dv": { "source": "iana" }, "audio/dvi4": { "source": "iana" }, "audio/eac3": { "source": "iana" }, "audio/encaprtp": { "source": "iana" }, "audio/evrc": { "source": "iana" }, "audio/evrc-qcp": { "source": "iana" }, "audio/evrc0": { "source": "iana" }, "audio/evrc1": { "source": "iana" }, "audio/evrcb": { "source": "iana" }, "audio/evrcb0": { "source": "iana" }, "audio/evrcb1": { "source": "iana" }, "audio/evrcnw": { "source": "iana" }, "audio/evrcnw0": { "source": "iana" }, "audio/evrcnw1": { "source": "iana" }, "audio/evrcwb": { "source": "iana" }, "audio/evrcwb0": { "source": "iana" }, "audio/evrcwb1": { "source": "iana" }, "audio/evs": { "source": "iana" }, "audio/flexfec": { "source": "iana" }, "audio/fwdred": { "source": "iana" }, "audio/g711-0": { "source": "iana" }, "audio/g719": { "source": "iana" }, "audio/g722": { "source": "iana" }, "audio/g7221": { "source": "iana" }, "audio/g723": { "source": "iana" }, "audio/g726-16": { "source": "iana" }, "audio/g726-24": { "source": "iana" }, "audio/g726-32": { "source": "iana" }, "audio/g726-40": { "source": "iana" }, "audio/g728": { "source": "iana" }, "audio/g729": { "source": "iana" }, "audio/g7291": { "source": "iana" }, "audio/g729d": { "source": "iana" }, "audio/g729e": { "source": "iana" }, "audio/gsm": { "source": "iana" }, "audio/gsm-efr": { "source": "iana" }, "audio/gsm-hr-08": { "source": "iana" }, "audio/ilbc": { "source": "iana" }, "audio/ip-mr_v2.5": { "source": "iana" }, "audio/isac": { "source": "apache" }, "audio/l16": { "source": "iana" }, "audio/l20": { "source": "iana" }, "audio/l24": { "source": "iana", "compressible": false }, "audio/l8": { "source": "iana" }, "audio/lpc": { "source": "iana" }, "audio/melp": { "source": "iana" }, "audio/melp1200": { "source": "iana" }, "audio/melp2400": { "source": "iana" }, "audio/melp600": { "source": "iana" }, "audio/mhas": { "source": "iana" }, "audio/midi": { "source": "apache", "extensions": ["mid", "midi", "kar", "rmi"] }, "audio/mobile-xmf": { "source": "iana", "extensions": ["mxmf"] }, "audio/mp3": { "compressible": false, "extensions": ["mp3"] }, "audio/mp4": { "source": "iana", "compressible": false, "extensions": ["m4a", "mp4a"] }, "audio/mp4a-latm": { "source": "iana" }, "audio/mpa": { "source": "iana" }, "audio/mpa-robust": { "source": "iana" }, "audio/mpeg": { "source": "iana", "compressible": false, "extensions": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] }, "audio/mpeg4-generic": { "source": "iana" }, "audio/musepack": { "source": "apache" }, "audio/ogg": { "source": "iana", "compressible": false, "extensions": ["oga", "ogg", "spx", "opus"] }, "audio/opus": { "source": "iana" }, "audio/parityfec": { "source": "iana" }, "audio/pcma": { "source": "iana" }, "audio/pcma-wb": { "source": "iana" }, "audio/pcmu": { "source": "iana" }, "audio/pcmu-wb": { "source": "iana" }, "audio/prs.sid": { "source": "iana" }, "audio/qcelp": { "source": "iana" }, "audio/raptorfec": { "source": "iana" }, "audio/red": { "source": "iana" }, "audio/rtp-enc-aescm128": { "source": "iana" }, "audio/rtp-midi": { "source": "iana" }, "audio/rtploopback": { "source": "iana" }, "audio/rtx": { "source": "iana" }, "audio/s3m": { "source": "apache", "extensions": ["s3m"] }, "audio/scip": { "source": "iana" }, "audio/silk": { "source": "apache", "extensions": ["sil"] }, "audio/smv": { "source": "iana" }, "audio/smv-qcp": { "source": "iana" }, "audio/smv0": { "source": "iana" }, "audio/sofa": { "source": "iana" }, "audio/sp-midi": { "source": "iana" }, "audio/speex": { "source": "iana" }, "audio/t140c": { "source": "iana" }, "audio/t38": { "source": "iana" }, "audio/telephone-event": { "source": "iana" }, "audio/tetra_acelp": { "source": "iana" }, "audio/tetra_acelp_bb": { "source": "iana" }, "audio/tone": { "source": "iana" }, "audio/tsvcis": { "source": "iana" }, "audio/uemclip": { "source": "iana" }, "audio/ulpfec": { "source": "iana" }, "audio/usac": { "source": "iana" }, "audio/vdvi": { "source": "iana" }, "audio/vmr-wb": { "source": "iana" }, "audio/vnd.3gpp.iufp": { "source": "iana" }, "audio/vnd.4sb": { "source": "iana" }, "audio/vnd.audiokoz": { "source": "iana" }, "audio/vnd.celp": { "source": "iana" }, "audio/vnd.cisco.nse": { "source": "iana" }, "audio/vnd.cmles.radio-events": { "source": "iana" }, "audio/vnd.cns.anp1": { "source": "iana" }, "audio/vnd.cns.inf1": { "source": "iana" }, "audio/vnd.dece.audio": { "source": "iana", "extensions": ["uva", "uvva"] }, "audio/vnd.digital-winds": { "source": "iana", "extensions": ["eol"] }, "audio/vnd.dlna.adts": { "source": "iana" }, "audio/vnd.dolby.heaac.1": { "source": "iana" }, "audio/vnd.dolby.heaac.2": { "source": "iana" }, "audio/vnd.dolby.mlp": { "source": "iana" }, "audio/vnd.dolby.mps": { "source": "iana" }, "audio/vnd.dolby.pl2": { "source": "iana" }, "audio/vnd.dolby.pl2x": { "source": "iana" }, "audio/vnd.dolby.pl2z": { "source": "iana" }, "audio/vnd.dolby.pulse.1": { "source": "iana" }, "audio/vnd.dra": { "source": "iana", "extensions": ["dra"] }, "audio/vnd.dts": { "source": "iana", "extensions": ["dts"] }, "audio/vnd.dts.hd": { "source": "iana", "extensions": ["dtshd"] }, "audio/vnd.dts.uhd": { "source": "iana" }, "audio/vnd.dvb.file": { "source": "iana" }, "audio/vnd.everad.plj": { "source": "iana" }, "audio/vnd.hns.audio": { "source": "iana" }, "audio/vnd.lucent.voice": { "source": "iana", "extensions": ["lvp"] }, "audio/vnd.ms-playready.media.pya": { "source": "iana", "extensions": ["pya"] }, "audio/vnd.nokia.mobile-xmf": { "source": "iana" }, "audio/vnd.nortel.vbk": { "source": "iana" }, "audio/vnd.nuera.ecelp4800": { "source": "iana", "extensions": ["ecelp4800"] }, "audio/vnd.nuera.ecelp7470": { "source": "iana", "extensions": ["ecelp7470"] }, "audio/vnd.nuera.ecelp9600": { "source": "iana", "extensions": ["ecelp9600"] }, "audio/vnd.octel.sbc": { "source": "iana" }, "audio/vnd.presonus.multitrack": { "source": "iana" }, "audio/vnd.qcelp": { "source": "iana" }, "audio/vnd.rhetorex.32kadpcm": { "source": "iana" }, "audio/vnd.rip": { "source": "iana", "extensions": ["rip"] }, "audio/vnd.rn-realaudio": { "compressible": false }, "audio/vnd.sealedmedia.softseal.mpeg": { "source": "iana" }, "audio/vnd.vmx.cvsd": { "source": "iana" }, "audio/vnd.wave": { "compressible": false }, "audio/vorbis": { "source": "iana", "compressible": false }, "audio/vorbis-config": { "source": "iana" }, "audio/wav": { "compressible": false, "extensions": ["wav"] }, "audio/wave": { "compressible": false, "extensions": ["wav"] }, "audio/webm": { "source": "apache", "compressible": false, "extensions": ["weba"] }, "audio/x-aac": { "source": "apache", "compressible": false, "extensions": ["aac"] }, "audio/x-aiff": { "source": "apache", "extensions": ["aif", "aiff", "aifc"] }, "audio/x-caf": { "source": "apache", "compressible": false, "extensions": ["caf"] }, "audio/x-flac": { "source": "apache", "extensions": ["flac"] }, "audio/x-m4a": { "source": "nginx", "extensions": ["m4a"] }, "audio/x-matroska": { "source": "apache", "extensions": ["mka"] }, "audio/x-mpegurl": { "source": "apache", "extensions": ["m3u"] }, "audio/x-ms-wax": { "source": "apache", "extensions": ["wax"] }, "audio/x-ms-wma": { "source": "apache", "extensions": ["wma"] }, "audio/x-pn-realaudio": { "source": "apache", "extensions": ["ram", "ra"] }, "audio/x-pn-realaudio-plugin": { "source": "apache", "extensions": ["rmp"] }, "audio/x-realaudio": { "source": "nginx", "extensions": ["ra"] }, "audio/x-tta": { "source": "apache" }, "audio/x-wav": { "source": "apache", "extensions": ["wav"] }, "audio/xm": { "source": "apache", "extensions": ["xm"] }, "chemical/x-cdx": { "source": "apache", "extensions": ["cdx"] }, "chemical/x-cif": { "source": "apache", "extensions": ["cif"] }, "chemical/x-cmdf": { "source": "apache", "extensions": ["cmdf"] }, "chemical/x-cml": { "source": "apache", "extensions": ["cml"] }, "chemical/x-csml": { "source": "apache", "extensions": ["csml"] }, "chemical/x-pdb": { "source": "apache" }, "chemical/x-xyz": { "source": "apache", "extensions": ["xyz"] }, "font/collection": { "source": "iana", "extensions": ["ttc"] }, "font/otf": { "source": "iana", "compressible": true, "extensions": ["otf"] }, "font/sfnt": { "source": "iana" }, "font/ttf": { "source": "iana", "compressible": true, "extensions": ["ttf"] }, "font/woff": { "source": "iana", "extensions": ["woff"] }, "font/woff2": { "source": "iana", "extensions": ["woff2"] }, "image/aces": { "source": "iana", "extensions": ["exr"] }, "image/apng": { "compressible": false, "extensions": ["apng"] }, "image/avci": { "source": "iana", "extensions": ["avci"] }, "image/avcs": { "source": "iana", "extensions": ["avcs"] }, "image/avif": { "source": "iana", "compressible": false, "extensions": ["avif"] }, "image/bmp": { "source": "iana", "compressible": true, "extensions": ["bmp"] }, "image/cgm": { "source": "iana", "extensions": ["cgm"] }, "image/dicom-rle": { "source": "iana", "extensions": ["drle"] }, "image/emf": { "source": "iana", "extensions": ["emf"] }, "image/fits": { "source": "iana", "extensions": ["fits"] }, "image/g3fax": { "source": "iana", "extensions": ["g3"] }, "image/gif": { "source": "iana", "compressible": false, "extensions": ["gif"] }, "image/heic": { "source": "iana", "extensions": ["heic"] }, "image/heic-sequence": { "source": "iana", "extensions": ["heics"] }, "image/heif": { "source": "iana", "extensions": ["heif"] }, "image/heif-sequence": { "source": "iana", "extensions": ["heifs"] }, "image/hej2k": { "source": "iana", "extensions": ["hej2"] }, "image/hsj2": { "source": "iana", "extensions": ["hsj2"] }, "image/ief": { "source": "iana", "extensions": ["ief"] }, "image/jls": { "source": "iana", "extensions": ["jls"] }, "image/jp2": { "source": "iana", "compressible": false, "extensions": ["jp2", "jpg2"] }, "image/jpeg": { "source": "iana", "compressible": false, "extensions": ["jpeg", "jpg", "jpe"] }, "image/jph": { "source": "iana", "extensions": ["jph"] }, "image/jphc": { "source": "iana", "extensions": ["jhc"] }, "image/jpm": { "source": "iana", "compressible": false, "extensions": ["jpm"] }, "image/jpx": { "source": "iana", "compressible": false, "extensions": ["jpx", "jpf"] }, "image/jxr": { "source": "iana", "extensions": ["jxr"] }, "image/jxra": { "source": "iana", "extensions": ["jxra"] }, "image/jxrs": { "source": "iana", "extensions": ["jxrs"] }, "image/jxs": { "source": "iana", "extensions": ["jxs"] }, "image/jxsc": { "source": "iana", "extensions": ["jxsc"] }, "image/jxsi": { "source": "iana", "extensions": ["jxsi"] }, "image/jxss": { "source": "iana", "extensions": ["jxss"] }, "image/ktx": { "source": "iana", "extensions": ["ktx"] }, "image/ktx2": { "source": "iana", "extensions": ["ktx2"] }, "image/naplps": { "source": "iana" }, "image/pjpeg": { "compressible": false }, "image/png": { "source": "iana", "compressible": false, "extensions": ["png"] }, "image/prs.btif": { "source": "iana", "extensions": ["btif"] }, "image/prs.pti": { "source": "iana", "extensions": ["pti"] }, "image/pwg-raster": { "source": "iana" }, "image/sgi": { "source": "apache", "extensions": ["sgi"] }, "image/svg+xml": { "source": "iana", "compressible": true, "extensions": ["svg", "svgz"] }, "image/t38": { "source": "iana", "extensions": ["t38"] }, "image/tiff": { "source": "iana", "compressible": false, "extensions": ["tif", "tiff"] }, "image/tiff-fx": { "source": "iana", "extensions": ["tfx"] }, "image/vnd.adobe.photoshop": { "source": "iana", "compressible": true, "extensions": ["psd"] }, "image/vnd.airzip.accelerator.azv": { "source": "iana", "extensions": ["azv"] }, "image/vnd.cns.inf2": { "source": "iana" }, "image/vnd.dece.graphic": { "source": "iana", "extensions": ["uvi", "uvvi", "uvg", "uvvg"] }, "image/vnd.djvu": { "source": "iana", "extensions": ["djvu", "djv"] }, "image/vnd.dvb.subtitle": { "source": "iana", "extensions": ["sub"] }, "image/vnd.dwg": { "source": "iana", "extensions": ["dwg"] }, "image/vnd.dxf": { "source": "iana", "extensions": ["dxf"] }, "image/vnd.fastbidsheet": { "source": "iana", "extensions": ["fbs"] }, "image/vnd.fpx": { "source": "iana", "extensions": ["fpx"] }, "image/vnd.fst": { "source": "iana", "extensions": ["fst"] }, "image/vnd.fujixerox.edmics-mmr": { "source": "iana", "extensions": ["mmr"] }, "image/vnd.fujixerox.edmics-rlc": { "source": "iana", "extensions": ["rlc"] }, "image/vnd.globalgraphics.pgb": { "source": "iana" }, "image/vnd.microsoft.icon": { "source": "iana", "compressible": true, "extensions": ["ico"] }, "image/vnd.mix": { "source": "iana" }, "image/vnd.mozilla.apng": { "source": "iana" }, "image/vnd.ms-dds": { "compressible": true, "extensions": ["dds"] }, "image/vnd.ms-modi": { "source": "iana", "extensions": ["mdi"] }, "image/vnd.ms-photo": { "source": "apache", "extensions": ["wdp"] }, "image/vnd.net-fpx": { "source": "iana", "extensions": ["npx"] }, "image/vnd.pco.b16": { "source": "iana", "extensions": ["b16"] }, "image/vnd.radiance": { "source": "iana" }, "image/vnd.sealed.png": { "source": "iana" }, "image/vnd.sealedmedia.softseal.gif": { "source": "iana" }, "image/vnd.sealedmedia.softseal.jpg": { "source": "iana" }, "image/vnd.svf": { "source": "iana" }, "image/vnd.tencent.tap": { "source": "iana", "extensions": ["tap"] }, "image/vnd.valve.source.texture": { "source": "iana", "extensions": ["vtf"] }, "image/vnd.wap.wbmp": { "source": "iana", "extensions": ["wbmp"] }, "image/vnd.xiff": { "source": "iana", "extensions": ["xif"] }, "image/vnd.zbrush.pcx": { "source": "iana", "extensions": ["pcx"] }, "image/webp": { "source": "apache", "extensions": ["webp"] }, "image/wmf": { "source": "iana", "extensions": ["wmf"] }, "image/x-3ds": { "source": "apache", "extensions": ["3ds"] }, "image/x-cmu-raster": { "source": "apache", "extensions": ["ras"] }, "image/x-cmx": { "source": "apache", "extensions": ["cmx"] }, "image/x-freehand": { "source": "apache", "extensions": ["fh", "fhc", "fh4", "fh5", "fh7"] }, "image/x-icon": { "source": "apache", "compressible": true, "extensions": ["ico"] }, "image/x-jng": { "source": "nginx", "extensions": ["jng"] }, "image/x-mrsid-image": { "source": "apache", "extensions": ["sid"] }, "image/x-ms-bmp": { "source": "nginx", "compressible": true, "extensions": ["bmp"] }, "image/x-pcx": { "source": "apache", "extensions": ["pcx"] }, "image/x-pict": { "source": "apache", "extensions": ["pic", "pct"] }, "image/x-portable-anymap": { "source": "apache", "extensions": ["pnm"] }, "image/x-portable-bitmap": { "source": "apache", "extensions": ["pbm"] }, "image/x-portable-graymap": { "source": "apache", "extensions": ["pgm"] }, "image/x-portable-pixmap": { "source": "apache", "extensions": ["ppm"] }, "image/x-rgb": { "source": "apache", "extensions": ["rgb"] }, "image/x-tga": { "source": "apache", "extensions": ["tga"] }, "image/x-xbitmap": { "source": "apache", "extensions": ["xbm"] }, "image/x-xcf": { "compressible": false }, "image/x-xpixmap": { "source": "apache", "extensions": ["xpm"] }, "image/x-xwindowdump": { "source": "apache", "extensions": ["xwd"] }, "message/cpim": { "source": "iana" }, "message/delivery-status": { "source": "iana" }, "message/disposition-notification": { "source": "iana", "extensions": ["disposition-notification"] }, "message/external-body": { "source": "iana" }, "message/feedback-report": { "source": "iana" }, "message/global": { "source": "iana", "extensions": ["u8msg"] }, "message/global-delivery-status": { "source": "iana", "extensions": ["u8dsn"] }, "message/global-disposition-notification": { "source": "iana", "extensions": ["u8mdn"] }, "message/global-headers": { "source": "iana", "extensions": ["u8hdr"] }, "message/http": { "source": "iana", "compressible": false }, "message/imdn+xml": { "source": "iana", "compressible": true }, "message/news": { "source": "iana" }, "message/partial": { "source": "iana", "compressible": false }, "message/rfc822": { "source": "iana", "compressible": true, "extensions": ["eml", "mime"] }, "message/s-http": { "source": "iana" }, "message/sip": { "source": "iana" }, "message/sipfrag": { "source": "iana" }, "message/tracking-status": { "source": "iana" }, "message/vnd.si.simp": { "source": "iana" }, "message/vnd.wfa.wsc": { "source": "iana", "extensions": ["wsc"] }, "model/3mf": { "source": "iana", "extensions": ["3mf"] }, "model/e57": { "source": "iana" }, "model/gltf+json": { "source": "iana", "compressible": true, "extensions": ["gltf"] }, "model/gltf-binary": { "source": "iana", "compressible": true, "extensions": ["glb"] }, "model/iges": { "source": "iana", "compressible": false, "extensions": ["igs", "iges"] }, "model/mesh": { "source": "iana", "compressible": false, "extensions": ["msh", "mesh", "silo"] }, "model/mtl": { "source": "iana", "extensions": ["mtl"] }, "model/obj": { "source": "iana", "extensions": ["obj"] }, "model/step": { "source": "iana" }, "model/step+xml": { "source": "iana", "compressible": true, "extensions": ["stpx"] }, "model/step+zip": { "source": "iana", "compressible": false, "extensions": ["stpz"] }, "model/step-xml+zip": { "source": "iana", "compressible": false, "extensions": ["stpxz"] }, "model/stl": { "source": "iana", "extensions": ["stl"] }, "model/vnd.collada+xml": { "source": "iana", "compressible": true, "extensions": ["dae"] }, "model/vnd.dwf": { "source": "iana", "extensions": ["dwf"] }, "model/vnd.flatland.3dml": { "source": "iana" }, "model/vnd.gdl": { "source": "iana", "extensions": ["gdl"] }, "model/vnd.gs-gdl": { "source": "apache" }, "model/vnd.gs.gdl": { "source": "iana" }, "model/vnd.gtw": { "source": "iana", "extensions": ["gtw"] }, "model/vnd.moml+xml": { "source": "iana", "compressible": true }, "model/vnd.mts": { "source": "iana", "extensions": ["mts"] }, "model/vnd.opengex": { "source": "iana", "extensions": ["ogex"] }, "model/vnd.parasolid.transmit.binary": { "source": "iana", "extensions": ["x_b"] }, "model/vnd.parasolid.transmit.text": { "source": "iana", "extensions": ["x_t"] }, "model/vnd.pytha.pyox": { "source": "iana" }, "model/vnd.rosette.annotated-data-model": { "source": "iana" }, "model/vnd.sap.vds": { "source": "iana", "extensions": ["vds"] }, "model/vnd.usdz+zip": { "source": "iana", "compressible": false, "extensions": ["usdz"] }, "model/vnd.valve.source.compiled-map": { "source": "iana", "extensions": ["bsp"] }, "model/vnd.vtu": { "source": "iana", "extensions": ["vtu"] }, "model/vrml": { "source": "iana", "compressible": false, "extensions": ["wrl", "vrml"] }, "model/x3d+binary": { "source": "apache", "compressible": false, "extensions": ["x3db", "x3dbz"] }, "model/x3d+fastinfoset": { "source": "iana", "extensions": ["x3db"] }, "model/x3d+vrml": { "source": "apache", "compressible": false, "extensions": ["x3dv", "x3dvz"] }, "model/x3d+xml": { "source": "iana", "compressible": true, "extensions": ["x3d", "x3dz"] }, "model/x3d-vrml": { "source": "iana", "extensions": ["x3dv"] }, "multipart/alternative": { "source": "iana", "compressible": false }, "multipart/appledouble": { "source": "iana" }, "multipart/byteranges": { "source": "iana" }, "multipart/digest": { "source": "iana" }, "multipart/encrypted": { "source": "iana", "compressible": false }, "multipart/form-data": { "source": "iana", "compressible": false }, "multipart/header-set": { "source": "iana" }, "multipart/mixed": { "source": "iana" }, "multipart/multilingual": { "source": "iana" }, "multipart/parallel": { "source": "iana" }, "multipart/related": { "source": "iana", "compressible": false }, "multipart/report": { "source": "iana" }, "multipart/signed": { "source": "iana", "compressible": false }, "multipart/vnd.bint.med-plus": { "source": "iana" }, "multipart/voice-message": { "source": "iana" }, "multipart/x-mixed-replace": { "source": "iana" }, "text/1d-interleaved-parityfec": { "source": "iana" }, "text/cache-manifest": { "source": "iana", "compressible": true, "extensions": ["appcache", "manifest"] }, "text/calendar": { "source": "iana", "extensions": ["ics", "ifb"] }, "text/calender": { "compressible": true }, "text/cmd": { "compressible": true }, "text/coffeescript": { "extensions": ["coffee", "litcoffee"] }, "text/cql": { "source": "iana" }, "text/cql-expression": { "source": "iana" }, "text/cql-identifier": { "source": "iana" }, "text/css": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["css"] }, "text/csv": { "source": "iana", "compressible": true, "extensions": ["csv"] }, "text/csv-schema": { "source": "iana" }, "text/directory": { "source": "iana" }, "text/dns": { "source": "iana" }, "text/ecmascript": { "source": "iana" }, "text/encaprtp": { "source": "iana" }, "text/enriched": { "source": "iana" }, "text/fhirpath": { "source": "iana" }, "text/flexfec": { "source": "iana" }, "text/fwdred": { "source": "iana" }, "text/gff3": { "source": "iana" }, "text/grammar-ref-list": { "source": "iana" }, "text/html": { "source": "iana", "compressible": true, "extensions": ["html", "htm", "shtml"] }, "text/jade": { "extensions": ["jade"] }, "text/javascript": { "source": "iana", "compressible": true }, "text/jcr-cnd": { "source": "iana" }, "text/jsx": { "compressible": true, "extensions": ["jsx"] }, "text/less": { "compressible": true, "extensions": ["less"] }, "text/markdown": { "source": "iana", "compressible": true, "extensions": ["markdown", "md"] }, "text/mathml": { "source": "nginx", "extensions": ["mml"] }, "text/mdx": { "compressible": true, "extensions": ["mdx"] }, "text/mizar": { "source": "iana" }, "text/n3": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["n3"] }, "text/parameters": { "source": "iana", "charset": "UTF-8" }, "text/parityfec": { "source": "iana" }, "text/plain": { "source": "iana", "compressible": true, "extensions": ["txt", "text", "conf", "def", "list", "log", "in", "ini"] }, "text/provenance-notation": { "source": "iana", "charset": "UTF-8" }, "text/prs.fallenstein.rst": { "source": "iana" }, "text/prs.lines.tag": { "source": "iana", "extensions": ["dsc"] }, "text/prs.prop.logic": { "source": "iana" }, "text/raptorfec": { "source": "iana" }, "text/red": { "source": "iana" }, "text/rfc822-headers": { "source": "iana" }, "text/richtext": { "source": "iana", "compressible": true, "extensions": ["rtx"] }, "text/rtf": { "source": "iana", "compressible": true, "extensions": ["rtf"] }, "text/rtp-enc-aescm128": { "source": "iana" }, "text/rtploopback": { "source": "iana" }, "text/rtx": { "source": "iana" }, "text/sgml": { "source": "iana", "extensions": ["sgml", "sgm"] }, "text/shaclc": { "source": "iana" }, "text/shex": { "source": "iana", "extensions": ["shex"] }, "text/slim": { "extensions": ["slim", "slm"] }, "text/spdx": { "source": "iana", "extensions": ["spdx"] }, "text/strings": { "source": "iana" }, "text/stylus": { "extensions": ["stylus", "styl"] }, "text/t140": { "source": "iana" }, "text/tab-separated-values": { "source": "iana", "compressible": true, "extensions": ["tsv"] }, "text/troff": { "source": "iana", "extensions": ["t", "tr", "roff", "man", "me", "ms"] }, "text/turtle": { "source": "iana", "charset": "UTF-8", "extensions": ["ttl"] }, "text/ulpfec": { "source": "iana" }, "text/uri-list": { "source": "iana", "compressible": true, "extensions": ["uri", "uris", "urls"] }, "text/vcard": { "source": "iana", "compressible": true, "extensions": ["vcard"] }, "text/vnd.a": { "source": "iana" }, "text/vnd.abc": { "source": "iana" }, "text/vnd.ascii-art": { "source": "iana" }, "text/vnd.curl": { "source": "iana", "extensions": ["curl"] }, "text/vnd.curl.dcurl": { "source": "apache", "extensions": ["dcurl"] }, "text/vnd.curl.mcurl": { "source": "apache", "extensions": ["mcurl"] }, "text/vnd.curl.scurl": { "source": "apache", "extensions": ["scurl"] }, "text/vnd.debian.copyright": { "source": "iana", "charset": "UTF-8" }, "text/vnd.dmclientscript": { "source": "iana" }, "text/vnd.dvb.subtitle": { "source": "iana", "extensions": ["sub"] }, "text/vnd.esmertec.theme-descriptor": { "source": "iana", "charset": "UTF-8" }, "text/vnd.familysearch.gedcom": { "source": "iana", "extensions": ["ged"] }, "text/vnd.ficlab.flt": { "source": "iana" }, "text/vnd.fly": { "source": "iana", "extensions": ["fly"] }, "text/vnd.fmi.flexstor": { "source": "iana", "extensions": ["flx"] }, "text/vnd.gml": { "source": "iana" }, "text/vnd.graphviz": { "source": "iana", "extensions": ["gv"] }, "text/vnd.hans": { "source": "iana" }, "text/vnd.hgl": { "source": "iana" }, "text/vnd.in3d.3dml": { "source": "iana", "extensions": ["3dml"] }, "text/vnd.in3d.spot": { "source": "iana", "extensions": ["spot"] }, "text/vnd.iptc.newsml": { "source": "iana" }, "text/vnd.iptc.nitf": { "source": "iana" }, "text/vnd.latex-z": { "source": "iana" }, "text/vnd.motorola.reflex": { "source": "iana" }, "text/vnd.ms-mediapackage": { "source": "iana" }, "text/vnd.net2phone.commcenter.command": { "source": "iana" }, "text/vnd.radisys.msml-basic-layout": { "source": "iana" }, "text/vnd.senx.warpscript": { "source": "iana" }, "text/vnd.si.uricatalogue": { "source": "iana" }, "text/vnd.sosi": { "source": "iana" }, "text/vnd.sun.j2me.app-descriptor": { "source": "iana", "charset": "UTF-8", "extensions": ["jad"] }, "text/vnd.trolltech.linguist": { "source": "iana", "charset": "UTF-8" }, "text/vnd.wap.si": { "source": "iana" }, "text/vnd.wap.sl": { "source": "iana" }, "text/vnd.wap.wml": { "source": "iana", "extensions": ["wml"] }, "text/vnd.wap.wmlscript": { "source": "iana", "extensions": ["wmls"] }, "text/vtt": { "source": "iana", "charset": "UTF-8", "compressible": true, "extensions": ["vtt"] }, "text/x-asm": { "source": "apache", "extensions": ["s", "asm"] }, "text/x-c": { "source": "apache", "extensions": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] }, "text/x-component": { "source": "nginx", "extensions": ["htc"] }, "text/x-fortran": { "source": "apache", "extensions": ["f", "for", "f77", "f90"] }, "text/x-gwt-rpc": { "compressible": true }, "text/x-handlebars-template": { "extensions": ["hbs"] }, "text/x-java-source": { "source": "apache", "extensions": ["java"] }, "text/x-jquery-tmpl": { "compressible": true }, "text/x-lua": { "extensions": ["lua"] }, "text/x-markdown": { "compressible": true, "extensions": ["mkd"] }, "text/x-nfo": { "source": "apache", "extensions": ["nfo"] }, "text/x-opml": { "source": "apache", "extensions": ["opml"] }, "text/x-org": { "compressible": true, "extensions": ["org"] }, "text/x-pascal": { "source": "apache", "extensions": ["p", "pas"] }, "text/x-processing": { "compressible": true, "extensions": ["pde"] }, "text/x-sass": { "extensions": ["sass"] }, "text/x-scss": { "extensions": ["scss"] }, "text/x-setext": { "source": "apache", "extensions": ["etx"] }, "text/x-sfv": { "source": "apache", "extensions": ["sfv"] }, "text/x-suse-ymp": { "compressible": true, "extensions": ["ymp"] }, "text/x-uuencode": { "source": "apache", "extensions": ["uu"] }, "text/x-vcalendar": { "source": "apache", "extensions": ["vcs"] }, "text/x-vcard": { "source": "apache", "extensions": ["vcf"] }, "text/xml": { "source": "iana", "compressible": true, "extensions": ["xml"] }, "text/xml-external-parsed-entity": { "source": "iana" }, "text/yaml": { "compressible": true, "extensions": ["yaml", "yml"] }, "video/1d-interleaved-parityfec": { "source": "iana" }, "video/3gpp": { "source": "iana", "extensions": ["3gp", "3gpp"] }, "video/3gpp-tt": { "source": "iana" }, "video/3gpp2": { "source": "iana", "extensions": ["3g2"] }, "video/av1": { "source": "iana" }, "video/bmpeg": { "source": "iana" }, "video/bt656": { "source": "iana" }, "video/celb": { "source": "iana" }, "video/dv": { "source": "iana" }, "video/encaprtp": { "source": "iana" }, "video/ffv1": { "source": "iana" }, "video/flexfec": { "source": "iana" }, "video/h261": { "source": "iana", "extensions": ["h261"] }, "video/h263": { "source": "iana", "extensions": ["h263"] }, "video/h263-1998": { "source": "iana" }, "video/h263-2000": { "source": "iana" }, "video/h264": { "source": "iana", "extensions": ["h264"] }, "video/h264-rcdo": { "source": "iana" }, "video/h264-svc": { "source": "iana" }, "video/h265": { "source": "iana" }, "video/iso.segment": { "source": "iana", "extensions": ["m4s"] }, "video/jpeg": { "source": "iana", "extensions": ["jpgv"] }, "video/jpeg2000": { "source": "iana" }, "video/jpm": { "source": "apache", "extensions": ["jpm", "jpgm"] }, "video/jxsv": { "source": "iana" }, "video/mj2": { "source": "iana", "extensions": ["mj2", "mjp2"] }, "video/mp1s": { "source": "iana" }, "video/mp2p": { "source": "iana" }, "video/mp2t": { "source": "iana", "extensions": ["ts"] }, "video/mp4": { "source": "iana", "compressible": false, "extensions": ["mp4", "mp4v", "mpg4"] }, "video/mp4v-es": { "source": "iana" }, "video/mpeg": { "source": "iana", "compressible": false, "extensions": ["mpeg", "mpg", "mpe", "m1v", "m2v"] }, "video/mpeg4-generic": { "source": "iana" }, "video/mpv": { "source": "iana" }, "video/nv": { "source": "iana" }, "video/ogg": { "source": "iana", "compressible": false, "extensions": ["ogv"] }, "video/parityfec": { "source": "iana" }, "video/pointer": { "source": "iana" }, "video/quicktime": { "source": "iana", "compressible": false, "extensions": ["qt", "mov"] }, "video/raptorfec": { "source": "iana" }, "video/raw": { "source": "iana" }, "video/rtp-enc-aescm128": { "source": "iana" }, "video/rtploopback": { "source": "iana" }, "video/rtx": { "source": "iana" }, "video/scip": { "source": "iana" }, "video/smpte291": { "source": "iana" }, "video/smpte292m": { "source": "iana" }, "video/ulpfec": { "source": "iana" }, "video/vc1": { "source": "iana" }, "video/vc2": { "source": "iana" }, "video/vnd.cctv": { "source": "iana" }, "video/vnd.dece.hd": { "source": "iana", "extensions": ["uvh", "uvvh"] }, "video/vnd.dece.mobile": { "source": "iana", "extensions": ["uvm", "uvvm"] }, "video/vnd.dece.mp4": { "source": "iana" }, "video/vnd.dece.pd": { "source": "iana", "extensions": ["uvp", "uvvp"] }, "video/vnd.dece.sd": { "source": "iana", "extensions": ["uvs", "uvvs"] }, "video/vnd.dece.video": { "source": "iana", "extensions": ["uvv", "uvvv"] }, "video/vnd.directv.mpeg": { "source": "iana" }, "video/vnd.directv.mpeg-tts": { "source": "iana" }, "video/vnd.dlna.mpeg-tts": { "source": "iana" }, "video/vnd.dvb.file": { "source": "iana", "extensions": ["dvb"] }, "video/vnd.fvt": { "source": "iana", "extensions": ["fvt"] }, "video/vnd.hns.video": { "source": "iana" }, "video/vnd.iptvforum.1dparityfec-1010": { "source": "iana" }, "video/vnd.iptvforum.1dparityfec-2005": { "source": "iana" }, "video/vnd.iptvforum.2dparityfec-1010": { "source": "iana" }, "video/vnd.iptvforum.2dparityfec-2005": { "source": "iana" }, "video/vnd.iptvforum.ttsavc": { "source": "iana" }, "video/vnd.iptvforum.ttsmpeg2": { "source": "iana" }, "video/vnd.motorola.video": { "source": "iana" }, "video/vnd.motorola.videop": { "source": "iana" }, "video/vnd.mpegurl": { "source": "iana", "extensions": ["mxu", "m4u"] }, "video/vnd.ms-playready.media.pyv": { "source": "iana", "extensions": ["pyv"] }, "video/vnd.nokia.interleaved-multimedia": { "source": "iana" }, "video/vnd.nokia.mp4vr": { "source": "iana" }, "video/vnd.nokia.videovoip": { "source": "iana" }, "video/vnd.objectvideo": { "source": "iana" }, "video/vnd.radgamettools.bink": { "source": "iana" }, "video/vnd.radgamettools.smacker": { "source": "iana" }, "video/vnd.sealed.mpeg1": { "source": "iana" }, "video/vnd.sealed.mpeg4": { "source": "iana" }, "video/vnd.sealed.swf": { "source": "iana" }, "video/vnd.sealedmedia.softseal.mov": { "source": "iana" }, "video/vnd.uvvu.mp4": { "source": "iana", "extensions": ["uvu", "uvvu"] }, "video/vnd.vivo": { "source": "iana", "extensions": ["viv"] }, "video/vnd.youtube.yt": { "source": "iana" }, "video/vp8": { "source": "iana" }, "video/vp9": { "source": "iana" }, "video/webm": { "source": "apache", "compressible": false, "extensions": ["webm"] }, "video/x-f4v": { "source": "apache", "extensions": ["f4v"] }, "video/x-fli": { "source": "apache", "extensions": ["fli"] }, "video/x-flv": { "source": "apache", "compressible": false, "extensions": ["flv"] }, "video/x-m4v": { "source": "apache", "extensions": ["m4v"] }, "video/x-matroska": { "source": "apache", "compressible": false, "extensions": ["mkv", "mk3d", "mks"] }, "video/x-mng": { "source": "apache", "extensions": ["mng"] }, "video/x-ms-asf": { "source": "apache", "extensions": ["asf", "asx"] }, "video/x-ms-vob": { "source": "apache", "extensions": ["vob"] }, "video/x-ms-wm": { "source": "apache", "extensions": ["wm"] }, "video/x-ms-wmv": { "source": "apache", "compressible": false, "extensions": ["wmv"] }, "video/x-ms-wmx": { "source": "apache", "extensions": ["wmx"] }, "video/x-ms-wvx": { "source": "apache", "extensions": ["wvx"] }, "video/x-msvideo": { "source": "apache", "extensions": ["avi"] }, "video/x-sgi-movie": { "source": "apache", "extensions": ["movie"] }, "video/x-smv": { "source": "apache", "extensions": ["smv"] }, "x-conference/x-cooltalk": { "source": "apache", "extensions": ["ice"] }, "x-shader/x-fragment": { "compressible": true }, "x-shader/x-vertex": { "compressible": true } };

      /***/
}),

/***/ 527:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateUserArray = exports.validateUser = exports.validateCommentArray = exports.validateComment = exports.validateLabelArray = exports.validateLabel = exports.validateSectionArray = exports.validateSection = exports.validateProjectArray = exports.validateProject = exports.validateTaskArray = exports.validateTask = void 0;
      var types_1 = __webpack_require__(39);
      function validateTask(input) {
        return types_1.Task.check(input);
      }
      exports.validateTask = validateTask;
      function validateTaskArray(input) {
        return input.map(validateTask);
      }
      exports.validateTaskArray = validateTaskArray;
      function validateProject(input) {
        return types_1.Project.check(input);
      }
      exports.validateProject = validateProject;
      function validateProjectArray(input) {
        return input.map(validateProject);
      }
      exports.validateProjectArray = validateProjectArray;
      function validateSection(input) {
        return types_1.Section.check(input);
      }
      exports.validateSection = validateSection;
      function validateSectionArray(input) {
        return input.map(validateSection);
      }
      exports.validateSectionArray = validateSectionArray;
      function validateLabel(input) {
        return types_1.Label.check(input);
      }
      exports.validateLabel = validateLabel;
      function validateLabelArray(input) {
        return input.map(validateLabel);
      }
      exports.validateLabelArray = validateLabelArray;
      function validateComment(input) {
        return types_1.Comment.check(input);
      }
      exports.validateComment = validateComment;
      function validateCommentArray(input) {
        return input.map(validateComment);
      }
      exports.validateCommentArray = validateCommentArray;
      function validateUser(input) {
        return types_1.User.check(input);
      }
      exports.validateUser = validateUser;
      function validateUserArray(input) {
        return input.map(validateUser);
      }
      exports.validateUserArray = validateUserArray;


      /***/
}),

/***/ 534:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      var __values = (this && this.__values) || function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
        }
        return ar;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.when = exports.match = void 0;
      function match() {
        var cases = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          cases[_i] = arguments[_i];
        }
        return function (x) {
          var e_1, _a;
          try {
            for (var cases_1 = __values(cases), cases_1_1 = cases_1.next(); !cases_1_1.done; cases_1_1 = cases_1.next()) {
              var _b = __read(cases_1_1.value, 2), T = _b[0], f = _b[1];
              if (T.guard(x))
                return f(x);
            }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
            try {
              if (cases_1_1 && !cases_1_1.done && (_a = cases_1.return)) _a.call(cases_1);
            }
            finally { if (e_1) throw e_1.error; }
          }
          throw new Error('No alternatives were matched');
        };
      }
      exports.match = match;
      function when(runtype, transformer) {
        return [runtype, transformer];
      }
      exports.when = when;


      /***/
}),

/***/ 541:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dotCase = void 0;
      var tslib_1 = __webpack_require__(259);
      var no_case_1 = __webpack_require__(555);
      function dotCase(input, options) {
        if (options === void 0) { options = {}; }
        return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "." }, options));
      }
      exports.dotCase = dotCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 547:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var util = __webpack_require__(669);
      var Stream = __webpack_require__(413).Stream;
      var DelayedStream = __webpack_require__(152);

      module.exports = CombinedStream;
      function CombinedStream() {
        this.writable = false;
        this.readable = true;
        this.dataSize = 0;
        this.maxDataSize = 2 * 1024 * 1024;
        this.pauseStreams = true;

        this._released = false;
        this._streams = [];
        this._currentStream = null;
        this._insideLoop = false;
        this._pendingNext = false;
      }
      util.inherits(CombinedStream, Stream);

      CombinedStream.create = function (options) {
        var combinedStream = new this();

        options = options || {};
        for (var option in options) {
          combinedStream[option] = options[option];
        }

        return combinedStream;
      };

      CombinedStream.isStreamLike = function (stream) {
        return (typeof stream !== 'function')
          && (typeof stream !== 'string')
          && (typeof stream !== 'boolean')
          && (typeof stream !== 'number')
          && (!Buffer.isBuffer(stream));
      };

      CombinedStream.prototype.append = function (stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);

        if (isStreamLike) {
          if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
              maxDataSize: Infinity,
              pauseStream: this.pauseStreams,
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
          }

          this._handleErrors(stream);

          if (this.pauseStreams) {
            stream.pause();
          }
        }

        this._streams.push(stream);
        return this;
      };

      CombinedStream.prototype.pipe = function (dest, options) {
        Stream.prototype.pipe.call(this, dest, options);
        this.resume();
        return dest;
      };

      CombinedStream.prototype._getNext = function () {
        this._currentStream = null;

        if (this._insideLoop) {
          this._pendingNext = true;
          return; // defer call
        }

        this._insideLoop = true;
        try {
          do {
            this._pendingNext = false;
            this._realGetNext();
          } while (this._pendingNext);
        } finally {
          this._insideLoop = false;
        }
      };

      CombinedStream.prototype._realGetNext = function () {
        var stream = this._streams.shift();


        if (typeof stream == 'undefined') {
          this.end();
          return;
        }

        if (typeof stream !== 'function') {
          this._pipeNext(stream);
          return;
        }

        var getStream = stream;
        getStream(function (stream) {
          var isStreamLike = CombinedStream.isStreamLike(stream);
          if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
          }

          this._pipeNext(stream);
        }.bind(this));
      };

      CombinedStream.prototype._pipeNext = function (stream) {
        this._currentStream = stream;

        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
          stream.on('end', this._getNext.bind(this));
          stream.pipe(this, { end: false });
          return;
        }

        var value = stream;
        this.write(value);
        this._getNext();
      };

      CombinedStream.prototype._handleErrors = function (stream) {
        var self = this;
        stream.on('error', function (err) {
          self._emitError(err);
        });
      };

      CombinedStream.prototype.write = function (data) {
        this.emit('data', data);
      };

      CombinedStream.prototype.pause = function () {
        if (!this.pauseStreams) {
          return;
        }

        if (this.pauseStreams && this._currentStream && typeof (this._currentStream.pause) == 'function') this._currentStream.pause();
        this.emit('pause');
      };

      CombinedStream.prototype.resume = function () {
        if (!this._released) {
          this._released = true;
          this.writable = true;
          this._getNext();
        }

        if (this.pauseStreams && this._currentStream && typeof (this._currentStream.resume) == 'function') this._currentStream.resume();
        this.emit('resume');
      };

      CombinedStream.prototype.end = function () {
        this._reset();
        this.emit('end');
      };

      CombinedStream.prototype.destroy = function () {
        this._reset();
        this.emit('close');
      };

      CombinedStream.prototype._reset = function () {
        this.writable = false;
        this._streams = [];
        this._currentStream = null;
      };

      CombinedStream.prototype._checkDataSize = function () {
        this._updateDataSize();
        if (this.dataSize <= this.maxDataSize) {
          return;
        }

        var message =
          'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
        this._emitError(new Error(message));
      };

      CombinedStream.prototype._updateDataSize = function () {
        this.dataSize = 0;

        var self = this;
        this._streams.forEach(function (stream) {
          if (!stream.dataSize) {
            return;
          }

          self.dataSize += stream.dataSize;
        });

        if (this._currentStream && this._currentStream.dataSize) {
          this.dataSize += this._currentStream.dataSize;
        }
      };

      CombinedStream.prototype._emitError = function (err) {
        this._reset();
        this.emit('error', err);
      };


      /***/
}),

/***/ 549:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var url = __webpack_require__(835);
      var URL = url.URL;
      var http = __webpack_require__(605);
      var https = __webpack_require__(211);
      var Writable = __webpack_require__(413).Writable;
      var assert = __webpack_require__(357);
      var debug = __webpack_require__(454);

      // Create handlers that pass events from native requests
      var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
      var eventHandlers = Object.create(null);
      events.forEach(function (event) {
        eventHandlers[event] = function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        };
      });

      var InvalidUrlError = createErrorType(
        "ERR_INVALID_URL",
        "Invalid URL",
        TypeError
      );
      // Error types with codes
      var RedirectionError = createErrorType(
        "ERR_FR_REDIRECTION_FAILURE",
        "Redirected request failed"
      );
      var TooManyRedirectsError = createErrorType(
        "ERR_FR_TOO_MANY_REDIRECTS",
        "Maximum number of redirects exceeded"
      );
      var MaxBodyLengthExceededError = createErrorType(
        "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
        "Request body larger than maxBodyLength limit"
      );
      var WriteAfterEndError = createErrorType(
        "ERR_STREAM_WRITE_AFTER_END",
        "write after end"
      );

      // An HTTP(S) request that can be redirected
      function RedirectableRequest(options, responseCallback) {
        // Initialize the request
        Writable.call(this);
        this._sanitizeOptions(options);
        this._options = options;
        this._ended = false;
        this._ending = false;
        this._redirectCount = 0;
        this._redirects = [];
        this._requestBodyLength = 0;
        this._requestBodyBuffers = [];

        // Attach a callback if passed
        if (responseCallback) {
          this.on("response", responseCallback);
        }

        // React to responses of native requests
        var self = this;
        this._onNativeResponse = function (response) {
          self._processResponse(response);
        };

        // Perform the first request
        this._performRequest();
      }
      RedirectableRequest.prototype = Object.create(Writable.prototype);

      RedirectableRequest.prototype.abort = function () {
        abortRequest(this._currentRequest);
        this.emit("abort");
      };

      // Writes buffered data to the current native request
      RedirectableRequest.prototype.write = function (data, encoding, callback) {
        // Writing is not allowed if end has been called
        if (this._ending) {
          throw new WriteAfterEndError();
        }

        // Validate input and shift parameters if necessary
        if (!isString(data) && !isBuffer(data)) {
          throw new TypeError("data should be a string, Buffer or Uint8Array");
        }
        if (isFunction(encoding)) {
          callback = encoding;
          encoding = null;
        }

        // Ignore empty buffers, since writing them doesn't invoke the callback
        // https://github.com/nodejs/node/issues/22066
        if (data.length === 0) {
          if (callback) {
            callback();
          }
          return;
        }
        // Only write when we don't exceed the maximum body length
        if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
          this._requestBodyLength += data.length;
          this._requestBodyBuffers.push({ data: data, encoding: encoding });
          this._currentRequest.write(data, encoding, callback);
        }
        // Error when we exceed the maximum body length
        else {
          this.emit("error", new MaxBodyLengthExceededError());
          this.abort();
        }
      };

      // Ends the current native request
      RedirectableRequest.prototype.end = function (data, encoding, callback) {
        // Shift parameters if necessary
        if (isFunction(data)) {
          callback = data;
          data = encoding = null;
        }
        else if (isFunction(encoding)) {
          callback = encoding;
          encoding = null;
        }

        // Write data if needed and end
        if (!data) {
          this._ended = this._ending = true;
          this._currentRequest.end(null, null, callback);
        }
        else {
          var self = this;
          var currentRequest = this._currentRequest;
          this.write(data, encoding, function () {
            self._ended = true;
            currentRequest.end(null, null, callback);
          });
          this._ending = true;
        }
      };

      // Sets a header value on the current native request
      RedirectableRequest.prototype.setHeader = function (name, value) {
        this._options.headers[name] = value;
        this._currentRequest.setHeader(name, value);
      };

      // Clears a header value on the current native request
      RedirectableRequest.prototype.removeHeader = function (name) {
        delete this._options.headers[name];
        this._currentRequest.removeHeader(name);
      };

      // Global timeout for all underlying requests
      RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
        var self = this;

        // Destroys the socket on timeout
        function destroyOnTimeout(socket) {
          socket.setTimeout(msecs);
          socket.removeListener("timeout", socket.destroy);
          socket.addListener("timeout", socket.destroy);
        }

        // Sets up a timer to trigger a timeout event
        function startTimer(socket) {
          if (self._timeout) {
            clearTimeout(self._timeout);
          }
          self._timeout = setTimeout(function () {
            self.emit("timeout");
            clearTimer();
          }, msecs);
          destroyOnTimeout(socket);
        }

        // Stops a timeout from triggering
        function clearTimer() {
          // Clear the timeout
          if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
          }

          // Clean up all attached listeners
          self.removeListener("abort", clearTimer);
          self.removeListener("error", clearTimer);
          self.removeListener("response", clearTimer);
          if (callback) {
            self.removeListener("timeout", callback);
          }
          if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
          }
        }

        // Attach callback if passed
        if (callback) {
          this.on("timeout", callback);
        }

        // Start the timer if or when the socket is opened
        if (this.socket) {
          startTimer(this.socket);
        }
        else {
          this._currentRequest.once("socket", startTimer);
        }

        // Clean up on events
        this.on("socket", destroyOnTimeout);
        this.on("abort", clearTimer);
        this.on("error", clearTimer);
        this.on("response", clearTimer);

        return this;
      };

      // Proxy all other public ClientRequest methods
      [
        "flushHeaders", "getHeader",
        "setNoDelay", "setSocketKeepAlive",
      ].forEach(function (method) {
        RedirectableRequest.prototype[method] = function (a, b) {
          return this._currentRequest[method](a, b);
        };
      });

      // Proxy all public ClientRequest properties
      ["aborted", "connection", "socket"].forEach(function (property) {
        Object.defineProperty(RedirectableRequest.prototype, property, {
          get: function () { return this._currentRequest[property]; },
        });
      });

      RedirectableRequest.prototype._sanitizeOptions = function (options) {
        // Ensure headers are always present
        if (!options.headers) {
          options.headers = {};
        }

        // Since http.request treats host as an alias of hostname,
        // but the url module interprets host as hostname plus port,
        // eliminate the host property to avoid confusion.
        if (options.host) {
          // Use hostname if set, because it has precedence
          if (!options.hostname) {
            options.hostname = options.host;
          }
          delete options.host;
        }

        // Complete the URL object when necessary
        if (!options.pathname && options.path) {
          var searchPos = options.path.indexOf("?");
          if (searchPos < 0) {
            options.pathname = options.path;
          }
          else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
          }
        }
      };


      // Executes the next native request (initial or redirect)
      RedirectableRequest.prototype._performRequest = function () {
        // Load the native protocol
        var protocol = this._options.protocol;
        var nativeProtocol = this._options.nativeProtocols[protocol];
        if (!nativeProtocol) {
          this.emit("error", new TypeError("Unsupported protocol " + protocol));
          return;
        }

        // If specified, use the agent corresponding to the protocol
        // (HTTP and HTTPS use different types of agents)
        if (this._options.agents) {
          var scheme = protocol.slice(0, -1);
          this._options.agent = this._options.agents[scheme];
        }

        // Create the native request and set up its event handlers
        var request = this._currentRequest =
          nativeProtocol.request(this._options, this._onNativeResponse);
        request._redirectable = this;
        for (var event of events) {
          request.on(event, eventHandlers[event]);
        }

        // RFC7230§5.3.1: When making a request directly to an origin server, […]
        // a client MUST send only the absolute path […] as the request-target.
        this._currentUrl = /^\//.test(this._options.path) ?
          url.format(this._options) :
          // When making a request to a proxy, […]
          // a client MUST send the target URI in absolute-form […].
          this._options.path;

        // End a redirected request
        // (The first request must be ended explicitly with RedirectableRequest#end)
        if (this._isRedirect) {
          // Write the request entity and end
          var i = 0;
          var self = this;
          var buffers = this._requestBodyBuffers;
          (function writeNext(error) {
            // Only write if this request has not been redirected yet
            /* istanbul ignore else */
            if (request === self._currentRequest) {
              // Report any write errors
              /* istanbul ignore if */
              if (error) {
                self.emit("error", error);
              }
              // Write the next buffer if there are still left
              else if (i < buffers.length) {
                var buffer = buffers[i++];
                /* istanbul ignore else */
                if (!request.finished) {
                  request.write(buffer.data, buffer.encoding, writeNext);
                }
              }
              // End the request if `end` has been called on us
              else if (self._ended) {
                request.end();
              }
            }
          }());
        }
      };

      // Processes a response from the current native request
      RedirectableRequest.prototype._processResponse = function (response) {
        // Store the redirected response
        var statusCode = response.statusCode;
        if (this._options.trackRedirects) {
          this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode,
          });
        }

        // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
        // that further action needs to be taken by the user agent in order to
        // fulfill the request. If a Location header field is provided,
        // the user agent MAY automatically redirect its request to the URI
        // referenced by the Location field value,
        // even if the specific status code is not understood.

        // If the response is not a redirect; return it as-is
        var location = response.headers.location;
        if (!location || this._options.followRedirects === false ||
          statusCode < 300 || statusCode >= 400) {
          response.responseUrl = this._currentUrl;
          response.redirects = this._redirects;
          this.emit("response", response);

          // Clean up
          this._requestBodyBuffers = [];
          return;
        }

        // The response is a redirect, so abort the current request
        abortRequest(this._currentRequest);
        // Discard the remainder of the response to avoid waiting for data
        response.destroy();

        // RFC7231§6.4: A client SHOULD detect and intervene
        // in cyclical redirections (i.e., "infinite" redirection loops).
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }

        // Store the request headers if applicable
        var requestHeaders;
        var beforeRedirect = this._options.beforeRedirect;
        if (beforeRedirect) {
          requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host"),
          }, this._options.headers);
        }

        // RFC7231§6.4: Automatic redirection needs to done with
        // care for methods not known to be safe, […]
        // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
        // the request method from POST to GET for the subsequent request.
        var method = this._options.method;
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
          // RFC7231§6.4.4: The 303 (See Other) status code indicates that
          // the server is redirecting the user agent to a different resource […]
          // A user agent can perform a retrieval request targeting that URI
          // (a GET or HEAD request if using HTTP) […]
          (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          // Drop a possible entity and headers related to it
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }

        // Drop the Host header, as the redirect might lead to a different host
        var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

        // If the redirect is relative, carry over the host of the last request
        var currentUrlParts = url.parse(this._currentUrl);
        var currentHost = currentHostHeader || currentUrlParts.host;
        var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
          url.format(Object.assign(currentUrlParts, { host: currentHost }));

        // Determine the URL of the redirection
        var redirectUrl;
        try {
          redirectUrl = url.resolve(currentUrl, location);
        }
        catch (cause) {
          this.emit("error", new RedirectionError({ cause: cause }));
          return;
        }

        // Create the redirected request
        debug("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = url.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);

        // Drop confidential headers when redirecting to a less secure protocol
        // or to a different domain that is not a superdomain
        if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
          redirectUrlParts.protocol !== "https:" ||
          redirectUrlParts.host !== currentHost &&
          !isSubdomain(redirectUrlParts.host, currentHost)) {
          removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
        }

        // Evaluate the beforeRedirect callback
        if (isFunction(beforeRedirect)) {
          var responseDetails = {
            headers: response.headers,
            statusCode: statusCode,
          };
          var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders,
          };
          try {
            beforeRedirect(this._options, responseDetails, requestDetails);
          }
          catch (err) {
            this.emit("error", err);
            return;
          }
          this._sanitizeOptions(this._options);
        }

        // Perform the redirected request
        try {
          this._performRequest();
        }
        catch (cause) {
          this.emit("error", new RedirectionError({ cause: cause }));
        }
      };

      // Wraps the key/value object of protocols with redirect functionality
      function wrap(protocols) {
        // Default settings
        var exports = {
          maxRedirects: 21,
          maxBodyLength: 10 * 1024 * 1024,
        };

        // Wrap each protocol
        var nativeProtocols = {};
        Object.keys(protocols).forEach(function (scheme) {
          var protocol = scheme + ":";
          var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
          var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

          // Executes a request, following redirects
          function request(input, options, callback) {
            // Parse parameters
            if (isString(input)) {
              var parsed;
              try {
                parsed = urlToOptions(new URL(input));
              }
              catch (err) {
                /* istanbul ignore next */
                parsed = url.parse(input);
              }
              if (!isString(parsed.protocol)) {
                throw new InvalidUrlError({ input });
              }
              input = parsed;
            }
            else if (URL && (input instanceof URL)) {
              input = urlToOptions(input);
            }
            else {
              callback = options;
              options = input;
              input = { protocol: protocol };
            }
            if (isFunction(options)) {
              callback = options;
              options = null;
            }

            // Set defaults
            options = Object.assign({
              maxRedirects: exports.maxRedirects,
              maxBodyLength: exports.maxBodyLength,
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
              options.hostname = "::1";
            }

            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
          }

          // Executes a GET request, following redirects
          function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
          }

          // Expose the properties on the wrapped protocol
          Object.defineProperties(wrappedProtocol, {
            request: { value: request, configurable: true, enumerable: true, writable: true },
            get: { value: get, configurable: true, enumerable: true, writable: true },
          });
        });
        return exports;
      }

      /* istanbul ignore next */
      function noop() { /* empty */ }

      // from https://github.com/nodejs/node/blob/master/lib/internal/url.js
      function urlToOptions(urlObject) {
        var options = {
          protocol: urlObject.protocol,
          hostname: urlObject.hostname.startsWith("[") ?
            /* istanbul ignore next */
            urlObject.hostname.slice(1, -1) :
            urlObject.hostname,
          hash: urlObject.hash,
          search: urlObject.search,
          pathname: urlObject.pathname,
          path: urlObject.pathname + urlObject.search,
          href: urlObject.href,
        };
        if (urlObject.port !== "") {
          options.port = Number(urlObject.port);
        }
        return options;
      }

      function removeMatchingHeaders(regex, headers) {
        var lastValue;
        for (var header in headers) {
          if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
          }
        }
        return (lastValue === null || typeof lastValue === "undefined") ?
          undefined : String(lastValue).trim();
      }

      function createErrorType(code, message, baseClass) {
        // Create constructor
        function CustomError(properties) {
          Error.captureStackTrace(this, this.constructor);
          Object.assign(this, properties || {});
          this.code = code;
          this.message = this.cause ? message + ": " + this.cause.message : message;
        }

        // Attach constructor and set default properties
        CustomError.prototype = new (baseClass || Error)();
        CustomError.prototype.constructor = CustomError;
        CustomError.prototype.name = "Error [" + code + "]";
        return CustomError;
      }

      function abortRequest(request) {
        for (var event of events) {
          request.removeListener(event, eventHandlers[event]);
        }
        request.on("error", noop);
        request.abort();
      }

      function isSubdomain(subdomain, domain) {
        assert(isString(subdomain) && isString(domain));
        var dot = subdomain.length - domain.length - 1;
        return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
      }

      function isString(value) {
        return typeof value === "string" || value instanceof String;
      }

      function isFunction(value) {
        return typeof value === "function";
      }

      function isBuffer(value) {
        return typeof value === "object" && ("length" in value);
      }

      // Exports
      module.exports = wrap({ http: http, https: https });
      module.exports.wrap = wrap;


      /***/
}),

/***/ 550:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __values = (this && this.__values) || function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Union = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      /**
       * Construct a union runtype from runtypes for its alternatives.
       */
      function Union() {
        var alternatives = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          alternatives[_i] = arguments[_i];
        }
        var match = function () {
          var cases = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            cases[_i] = arguments[_i];
          }
          return function (x) {
            for (var i = 0; i < alternatives.length; i++) {
              if (alternatives[i].guard(x)) {
                return cases[i](x);
              }
            }
          };
        };
        var self = { tag: 'union', alternatives: alternatives, match: match };
        return (0, runtype_1.create)(function (value, visited) {
          var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
          if (typeof value !== 'object' || value === null) {
            try {
              for (var alternatives_1 = __values(alternatives), alternatives_1_1 = alternatives_1.next(); !alternatives_1_1.done; alternatives_1_1 = alternatives_1.next()) {
                var alternative = alternatives_1_1.value;
                if ((0, runtype_1.innerValidate)(alternative, value, visited).success)
                  return (0, util_1.SUCCESS)(value);
              }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
              try {
                if (alternatives_1_1 && !alternatives_1_1.done && (_a = alternatives_1.return)) _a.call(alternatives_1);
              }
              finally { if (e_1) throw e_1.error; }
            }
            return util_1.FAILURE.TYPE_INCORRECT(self, value);
          }
          var commonLiteralFields = {};
          try {
            for (var alternatives_2 = __values(alternatives), alternatives_2_1 = alternatives_2.next(); !alternatives_2_1.done; alternatives_2_1 = alternatives_2.next()) {
              var alternative = alternatives_2_1.value;
              if (alternative.reflect.tag === 'record') {
                var _loop_1 = function (fieldName) {
                  var field = alternative.reflect.fields[fieldName];
                  if (field.tag === 'literal') {
                    if (commonLiteralFields[fieldName]) {
                      if (commonLiteralFields[fieldName].every(function (value) { return value !== field.value; })) {
                        commonLiteralFields[fieldName].push(field.value);
                      }
                    }
                    else {
                      commonLiteralFields[fieldName] = [field.value];
                    }
                  }
                };
                for (var fieldName in alternative.reflect.fields) {
                  _loop_1(fieldName);
                }
              }
            }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
            try {
              if (alternatives_2_1 && !alternatives_2_1.done && (_b = alternatives_2.return)) _b.call(alternatives_2);
            }
            finally { if (e_2) throw e_2.error; }
          }
          for (var fieldName in commonLiteralFields) {
            if (commonLiteralFields[fieldName].length === alternatives.length) {
              try {
                for (var alternatives_3 = (e_3 = void 0, __values(alternatives)), alternatives_3_1 = alternatives_3.next(); !alternatives_3_1.done; alternatives_3_1 = alternatives_3.next()) {
                  var alternative = alternatives_3_1.value;
                  if (alternative.reflect.tag === 'record') {
                    var field = alternative.reflect.fields[fieldName];
                    if (field.tag === 'literal' &&
                      (0, util_1.hasKey)(fieldName, value) &&
                      value[fieldName] === field.value) {
                      return (0, runtype_1.innerValidate)(alternative, value, visited);
                    }
                  }
                }
              }
              catch (e_3_1) { e_3 = { error: e_3_1 }; }
              finally {
                try {
                  if (alternatives_3_1 && !alternatives_3_1.done && (_c = alternatives_3.return)) _c.call(alternatives_3);
                }
                finally { if (e_3) throw e_3.error; }
              }
            }
          }
          try {
            for (var alternatives_4 = __values(alternatives), alternatives_4_1 = alternatives_4.next(); !alternatives_4_1.done; alternatives_4_1 = alternatives_4.next()) {
              var targetType = alternatives_4_1.value;
              if ((0, runtype_1.innerValidate)(targetType, value, visited).success)
                return (0, util_1.SUCCESS)(value);
            }
          }
          catch (e_4_1) { e_4 = { error: e_4_1 }; }
          finally {
            try {
              if (alternatives_4_1 && !alternatives_4_1.done && (_d = alternatives_4.return)) _d.call(alternatives_4);
            }
            finally { if (e_4) throw e_4.error; }
          }
          return util_1.FAILURE.TYPE_INCORRECT(self, value);
        }, self);
      }
      exports.Union = Union;


      /***/
}),

/***/ 555:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.noCase = void 0;
      var lower_case_1 = __webpack_require__(175);
      // Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
      var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
      // Remove all non-word characters.
      var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
      /**
       * Normalize the string into something other libraries can manipulate easier.
       */
      function noCase(input, options) {
        if (options === void 0) { options = {}; }
        var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
        var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
        var start = 0;
        var end = result.length;
        // Trim the delimiter from around the output string.
        while (result.charAt(start) === "\0")
          start++;
        while (result.charAt(end - 1) === "\0")
          end--;
        // Transform each token independently.
        return result.slice(start, end).split("\0").map(transform).join(delimiter);
      }
      exports.noCase = noCase;
      /**
       * Replace `re` in the input string with the replacement value.
       */
      function replace(input, re, value) {
        if (re instanceof RegExp)
          return input.replace(re, value);
        return re.reduce(function (input, re) { return input.replace(re, value); }, input);
      }
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 557:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InstanceOf = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      function InstanceOf(ctor) {
        var self = { tag: 'instanceof', ctor: ctor };
        return (0, runtype_1.create)(function (value) { return (value instanceof ctor ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, self);
      }
      exports.InstanceOf = InstanceOf;


      /***/
}),

/***/ 566:
/***/ (function (module) {

      // API
      module.exports = abort;

      /**
       * Aborts leftover active jobs
       *
       * @param {object} state - current state object
       */
      function abort(state) {
        Object.keys(state.jobs).forEach(clean.bind(state));

        // reset leftover jobs
        state.jobs = {};
      }

      /**
       * Cleans up leftover job by invoking abort function for the provided job id
       *
       * @this  state
       * @param {string|number} key - job id to abort
       */
      function clean(key) {
        if (typeof this.jobs[key] == 'function') {
          this.jobs[key]();
        }
      }


      /***/
}),

/***/ 576:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = (this && this.__exportStar) || function (m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(__webpack_require__(300), exports);
      __exportStar(__webpack_require__(192), exports);


      /***/
}),

/***/ 596:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Lazy = void 0;
      var runtype_1 = __webpack_require__(861);
      /**
       * Construct a possibly-recursive Runtype.
       */
      function Lazy(delayed) {
        var data = {
          get tag() {
            return getWrapped()['tag'];
          },
        };
        var cached;
        function getWrapped() {
          if (!cached) {
            cached = delayed();
            for (var k in cached)
              if (k !== 'tag')
                data[k] = cached[k];
          }
          return cached;
        }
        return (0, runtype_1.create)(function (x) {
          return getWrapped().validate(x);
        }, data);
      }
      exports.Lazy = Lazy;


      /***/
}),

/***/ 600:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });


      /***/
}),

/***/ 605:
/***/ (function (module) {

      module.exports = require("http");

      /***/
}),

/***/ 622:
/***/ (function (module) {

      module.exports = require("path");

      /***/
}),

/***/ 632:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
        }
        return ar;
      };
      var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncContract = void 0;
      var errors_1 = __webpack_require__(967);
      var util_1 = __webpack_require__(917);
      function AsyncContract() {
        var runtypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          runtypes[_i] = arguments[_i];
        }
        var lastIndex = runtypes.length - 1;
        var argRuntypes = runtypes.slice(0, lastIndex);
        var returnRuntype = runtypes[lastIndex];
        return {
          enforce: function (f) {
            return function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (args.length < argRuntypes.length) {
                var message = "Expected ".concat(argRuntypes.length, " arguments but only received ").concat(args.length);
                var failure = util_1.FAILURE.ARGUMENT_INCORRECT(message);
                throw new errors_1.ValidationError(failure);
              }
              for (var i = 0; i < argRuntypes.length; i++)
                argRuntypes[i].check(args[i]);
              var returnedPromise = f.apply(void 0, __spreadArray([], __read(args), false));
              if (!(returnedPromise instanceof Promise)) {
                var message = "Expected function to return a promise, but instead got ".concat(returnedPromise);
                var failure = util_1.FAILURE.RETURN_INCORRECT(message);
                throw new errors_1.ValidationError(failure);
              }
              return returnedPromise.then(returnRuntype.check);
            };
          },
        };
      }
      exports.AsyncContract = AsyncContract;


      /***/
}),

/***/ 640:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(259);
      var middleware_1 = __webpack_require__(234);
      exports.default = middleware_1.applyCaseMiddleware;
      tslib_1.__exportStar(__webpack_require__(988), exports);


      /***/
}),

/***/ 644:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var defaults = __webpack_require__(189);

      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });

        return data;
      };


      /***/
}),

/***/ 655:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var toPropertyKey = __webpack_require__(172);
      function _defineProperty(obj, key, value) {
        key = toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 662:
/***/ (function (module) {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 669:
/***/ (function (module) {

      module.exports = require("util");

      /***/
}),

/***/ 672:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TodoistApi = void 0;
      var runtypes_1 = __webpack_require__(81);
      var restClient_1 = __webpack_require__(485);
      var taskConverters_1 = __webpack_require__(263);
      var endpoints_1 = __webpack_require__(127);
      var validators_1 = __webpack_require__(527);
      /**
       * Joins path segments using `/` separator.
       * @param segments A list of **valid** path segments.
       * @returns A joined path.
       */
      function generatePath() {
        var segments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          segments[_i] = arguments[_i];
        }
        return segments.join('/');
      }
      var TodoistApi = /** @class */ (function () {
        function TodoistApi(authToken, baseUrl) {
          this.authToken = authToken;
          this.restApiBase = (0, endpoints_1.getRestBaseUri)(baseUrl);
          this.syncApiBase = (0, endpoints_1.getSyncBaseUri)(baseUrl);
        }
        TodoistApi.prototype.getTask = function (id) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_TASKS, id), this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateTask)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.getTasks = function (args) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, endpoints_1.ENDPOINT_REST_TASKS, this.authToken, args)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateTaskArray)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.addTask = function (args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_TASKS, this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateTask)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.quickAddTask = function (args) {
          return __awaiter(this, void 0, void 0, function () {
            var response, task;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.syncApiBase, endpoints_1.ENDPOINT_SYNC_QUICK_ADD, this.authToken, args)];
                case 1:
                  response = _a.sent();
                  task = (0, taskConverters_1.getTaskFromQuickAddResponse)(response.data);
                  return [2 /*return*/, (0, validators_1.validateTask)(task)];
              }
            });
          });
        };
        TodoistApi.prototype.updateTask = function (id, args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_TASKS, id), this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateTask)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.closeTask = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_TASKS, id, endpoints_1.ENDPOINT_REST_TASK_CLOSE), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        TodoistApi.prototype.reopenTask = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_TASKS, id, endpoints_1.ENDPOINT_REST_TASK_REOPEN), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        TodoistApi.prototype.deleteTask = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('DELETE', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_TASKS, id), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        TodoistApi.prototype.getProject = function (id) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_PROJECTS, id), this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateProject)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.getProjects = function () {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, endpoints_1.ENDPOINT_REST_PROJECTS, this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateProjectArray)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.addProject = function (args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_PROJECTS, this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateProject)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.updateProject = function (id, args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_PROJECTS, id), this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateProject)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.deleteProject = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('DELETE', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_PROJECTS, id), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        TodoistApi.prototype.getProjectCollaborators = function (projectId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(projectId);
                  return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_PROJECTS, projectId, endpoints_1.ENDPOINT_REST_PROJECT_COLLABORATORS), this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateUserArray)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.getSections = function (projectId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, endpoints_1.ENDPOINT_REST_SECTIONS, this.authToken, projectId ? { projectId: projectId } : undefined)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateSectionArray)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.getSection = function (id) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_SECTIONS, id), this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateSection)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.addSection = function (args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_SECTIONS, this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateSection)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.updateSection = function (id, args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_SECTIONS, id), this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateSection)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.deleteSection = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('DELETE', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_SECTIONS, id), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        /**
         * Fetches a personal label
         */
        TodoistApi.prototype.getLabel = function (id) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_LABELS, id), this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateLabel)(response.data)];
              }
            });
          });
        };
        /**
         * Fetches the personal labels
         */
        TodoistApi.prototype.getLabels = function () {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, endpoints_1.ENDPOINT_REST_LABELS, this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateLabelArray)(response.data)];
              }
            });
          });
        };
        /**
         * Adds a personal label
         */
        TodoistApi.prototype.addLabel = function (args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_LABELS, this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateLabel)(response.data)];
              }
            });
          });
        };
        /**
         * Updates a personal label
         */
        TodoistApi.prototype.updateLabel = function (id, args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_LABELS, id), this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateLabel)(response.data)];
              }
            });
          });
        };
        /**
         * Deletes a personal label
         */
        TodoistApi.prototype.deleteLabel = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('DELETE', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_LABELS, id), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        TodoistApi.prototype.getSharedLabels = function () {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, endpoints_1.ENDPOINT_REST_LABELS_SHARED, this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, response.data];
              }
            });
          });
        };
        TodoistApi.prototype.renameSharedLabel = function (args) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_LABELS_SHARED_RENAME, this.authToken, args)];
                case 1:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        };
        TodoistApi.prototype.removeSharedLabel = function (args) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_LABELS_SHARED_REMOVE, this.authToken, args)];
                case 1:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        };
        TodoistApi.prototype.getComments = function (args) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, endpoints_1.ENDPOINT_REST_COMMENTS, this.authToken, args)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateCommentArray)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.getComment = function (id) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('GET', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_COMMENTS, id), this.authToken)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateComment)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.addComment = function (args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, endpoints_1.ENDPOINT_REST_COMMENTS, this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateComment)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.updateComment = function (id, args, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('POST', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_COMMENTS, id), this.authToken, args, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, validators_1.validateComment)(response.data)];
              }
            });
          });
        };
        TodoistApi.prototype.deleteComment = function (id, requestId) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  runtypes_1.String.check(id);
                  return [4 /*yield*/, (0, restClient_1.request)('DELETE', this.restApiBase, generatePath(endpoints_1.ENDPOINT_REST_COMMENTS, id), this.authToken, undefined, requestId)];
                case 1:
                  response = _a.sent();
                  return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
              }
            });
          });
        };
        return TodoistApi;
      }());
      exports.TodoistApi = TodoistApi;


      /***/
}),

/***/ 692:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      function encode(val) {
        return encodeURIComponent(val).
          replace(/%3A/gi, ':').
          replace(/%24/g, '$').
          replace(/%2C/gi, ',').
          replace(/%20/g, '+').
          replace(/%5B/gi, '[').
          replace(/%5D/gi, ']');
      }

      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */
      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];

          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
              return;
            }

            if (utils.isArray(val)) {
              key = key + '[]';
            } else {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + '=' + encode(v));
            });
          });

          serializedParams = parts.join('&');
        }

        if (serializedParams) {
          var hashmarkIndex = url.indexOf('#');
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }

          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        }

        return url;
      };


      /***/
}),

/***/ 695:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      module.exports = (
        utils.isStandardBrowserEnv() ?

          // Standard browser envs support document.cookie
          (function standardBrowserEnv() {
            return {
              write: function write(name, value, expires, path, domain, secure) {
                var cookie = [];
                cookie.push(name + '=' + encodeURIComponent(value));

                if (utils.isNumber(expires)) {
                  cookie.push('expires=' + new Date(expires).toGMTString());
                }

                if (utils.isString(path)) {
                  cookie.push('path=' + path);
                }

                if (utils.isString(domain)) {
                  cookie.push('domain=' + domain);
                }

                if (secure === true) {
                  cookie.push('secure');
                }

                document.cookie = cookie.join('; ');
              },

              read: function read(name) {
                var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                return (match ? decodeURIComponent(match[3]) : null);
              },

              remove: function remove(name) {
                this.write(name, '', Date.now() - 86400000);
              }
            };
          })() :

          // Non standard browser env (web workers, react-native) lack needed support.
          (function nonStandardBrowserEnv() {
            return {
              write: function write() { },
              read: function read() { return null; },
              remove: function remove() { }
            };
          })()
      );


      /***/
}),

/***/ 710:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tuple = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      /**
       * Construct a tuple runtype from runtypes for each of its elements.
       */
      function Tuple() {
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          components[_i] = arguments[_i];
        }
        var self = { tag: 'tuple', components: components };
        return (0, runtype_1.create)(function (xs, visited) {
          if (!Array.isArray(xs))
            return util_1.FAILURE.TYPE_INCORRECT(self, xs);
          if (xs.length !== components.length)
            return util_1.FAILURE.CONSTRAINT_FAILED(self, "Expected length ".concat(components.length, ", but was ").concat(xs.length));
          var keys = (0, util_1.enumerableKeysOf)(xs);
          var results = keys.map(function (key) {
            return (0, runtype_1.innerValidate)(components[key], xs[key], visited);
          });
          var details = keys.reduce(function (details, key) {
            var result = results[key];
            if (!result.success)
              details[key] = result.details || result.message;
            return details;
          }, []);
          if ((0, util_1.enumerableKeysOf)(details).length !== 0)
            return util_1.FAILURE.CONTENT_INCORRECT(self, details);
          else
            return (0, util_1.SUCCESS)(xs);
        }, self);
      }
      exports.Tuple = Tuple;


      /***/
}),

/***/ 719:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unsafeStringify = unsafeStringify;

      var _validate = _interopRequireDefault(__webpack_require__(205));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /**
       * Convert array of 16 byte values to UUID string format of the form:
       * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
       */
      const byteToHex = [];

      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 0x100).toString(16).slice(1));
      }

      function unsafeStringify(arr, offset = 0) {
        // Note: Be careful editing this code!  It's been tuned for performance
        // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
        return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      }

      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
        // of the following:
        // - One or more input array values don't map to a hex octet (leading to
        // "undefined" in the uuid)
        // - Invalid input values for the RFC `version` or `variant` fields

        if (!(0, _validate.default)(uuid)) {
          throw TypeError('Stringified UUID is invalid');
        }

        return uuid;
      }

      var _default = stringify;
      exports.default = _default;

      /***/
}),

/***/ 723:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      var _interopRequireDefault = __webpack_require__(764);

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isNetworkError = isNetworkError;
      exports.isRetryableError = isRetryableError;
      exports.isSafeRequestError = isSafeRequestError;
      exports.isIdempotentRequestError = isIdempotentRequestError;
      exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
      exports.exponentialDelay = exponentialDelay;
      exports.default = axiosRetry;
      exports.namespace = void 0;

      var _regenerator = _interopRequireDefault(__webpack_require__(148));

      var _typeof2 = _interopRequireDefault(__webpack_require__(431));

      var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(662));

      var _defineProperty2 = _interopRequireDefault(__webpack_require__(655));

      var _isRetryAllowed = _interopRequireDefault(__webpack_require__(308));

      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      var namespace = 'axios-retry';
      /**
       * @param  {Error}  error
       * @return {boolean}
       */

      exports.namespace = namespace;

      function isNetworkError(error) {
        return !error.response && Boolean(error.code) && // Prevents retrying cancelled requests
          error.code !== 'ECONNABORTED' && // Prevents retrying timed out requests
          (0, _isRetryAllowed.default)(error); // Prevents retrying unsafe errors
      }

      var SAFE_HTTP_METHODS = ['get', 'head', 'options'];
      var IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
      /**
       * @param  {Error}  error
       * @return {boolean}
       */

      function isRetryableError(error) {
        return error.code !== 'ECONNABORTED' && (!error.response || error.response.status >= 500 && error.response.status <= 599);
      }
      /**
       * @param  {Error}  error
       * @return {boolean}
       */


      function isSafeRequestError(error) {
        if (!error.config) {
          // Cannot determine if the request can be retried
          return false;
        }

        return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
      }
      /**
       * @param  {Error}  error
       * @return {boolean}
       */


      function isIdempotentRequestError(error) {
        if (!error.config) {
          // Cannot determine if the request can be retried
          return false;
        }

        return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
      }
      /**
       * @param  {Error}  error
       * @return {boolean}
       */


      function isNetworkOrIdempotentRequestError(error) {
        return isNetworkError(error) || isIdempotentRequestError(error);
      }
      /**
       * @return {number} - delay in milliseconds, always 0
       */


      function noDelay() {
        return 0;
      }
      /**
       * @param  {number} [retryNumber=0]
       * @return {number} - delay in milliseconds
       */


      function exponentialDelay() {
        var retryNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var delay = Math.pow(2, retryNumber) * 100;
        var randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay

        return delay + randomSum;
      }
      /**
       * Initializes and returns the retry state for the given request/config
       * @param  {AxiosRequestConfig} config
       * @return {Object}
       */


      function getCurrentState(config) {
        var currentState = config[namespace] || {};
        currentState.retryCount = currentState.retryCount || 0;
        config[namespace] = currentState;
        return currentState;
      }
      /**
       * Returns the axios-retry options for the current request
       * @param  {AxiosRequestConfig} config
       * @param  {AxiosRetryConfig} defaultOptions
       * @return {AxiosRetryConfig}
       */


      function getRequestOptions(config, defaultOptions) {
        return _objectSpread(_objectSpread({}, defaultOptions), config[namespace]);
      }
      /**
       * @param  {Axios} axios
       * @param  {AxiosRequestConfig} config
       */


      function fixConfig(axios, config) {
        if (axios.defaults.agent === config.agent) {
          delete config.agent;
        }

        if (axios.defaults.httpAgent === config.httpAgent) {
          delete config.httpAgent;
        }

        if (axios.defaults.httpsAgent === config.httpsAgent) {
          delete config.httpsAgent;
        }
      }
      /**
       * Checks retryCondition if request can be retried. Handles it's retruning value or Promise.
       * @param  {number} retries
       * @param  {Function} retryCondition
       * @param  {Object} currentState
       * @param  {Error} error
       * @return {boolean}
       */


      function shouldRetry(_x, _x2, _x3, _x4) {
        return _shouldRetry.apply(this, arguments);
      }
      /**
       * Adds response interceptors to an axios instance to retry requests failed due to network issues
       *
       * @example
       *
       * import axios from 'axios';
       *
       * axiosRetry(axios, { retries: 3 });
       *
       * axios.get('http://example.com/test') // The first request fails and the second returns 'ok'
       *   .then(result => {
       *     result.data; // 'ok'
       *   });
       *
       * // Exponential back-off retry delay between requests
       * axiosRetry(axios, { retryDelay : axiosRetry.exponentialDelay});
       *
       * // Custom retry delay
       * axiosRetry(axios, { retryDelay : (retryCount) => {
       *   return retryCount * 1000;
       * }});
       *
       * // Also works with custom axios instances
       * const client = axios.create({ baseURL: 'http://example.com' });
       * axiosRetry(client, { retries: 3 });
       *
       * client.get('/test') // The first request fails and the second returns 'ok'
       *   .then(result => {
       *     result.data; // 'ok'
       *   });
       *
       * // Allows request-specific configuration
       * client
       *   .get('/test', {
       *     'axios-retry': {
       *       retries: 0
       *     }
       *   })
       *   .catch(error => { // The first request fails
       *     error !== undefined
       *   });
       *
       * @param {Axios} axios An axios instance (the axios object or one created from axios.create)
       * @param {Object} [defaultOptions]
       * @param {number} [defaultOptions.retries=3] Number of retries
       * @param {boolean} [defaultOptions.shouldResetTimeout=false]
       *        Defines if the timeout should be reset between retries
       * @param {Function} [defaultOptions.retryCondition=isNetworkOrIdempotentRequestError]
       *        A function to determine if the error can be retried
       * @param {Function} [defaultOptions.retryDelay=noDelay]
       *        A function to determine the delay between retry requests
       * @param {Function} [defaultOptions.onRetry=()=>{}]
       *        A function to get notified when a retry occurs
       */


      function _shouldRetry() {
        _shouldRetry = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(retries, retryCondition, currentState, error) {
          var shouldRetryOrPromise, shouldRetryPromiseResult;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  shouldRetryOrPromise = currentState.retryCount < retries && retryCondition(error); // This could be a promise

                  if (!((0, _typeof2.default)(shouldRetryOrPromise) === 'object')) {
                    _context2.next = 12;
                    break;
                  }

                  _context2.prev = 2;
                  _context2.next = 5;
                  return shouldRetryOrPromise;

                case 5:
                  shouldRetryPromiseResult = _context2.sent;
                  return _context2.abrupt("return", shouldRetryPromiseResult !== false);

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](2);
                  return _context2.abrupt("return", false);

                case 12:
                  return _context2.abrupt("return", shouldRetryOrPromise);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[2, 9]]);
        }));
        return _shouldRetry.apply(this, arguments);
      }

      function axiosRetry(axios, defaultOptions) {
        axios.interceptors.request.use(function (config) {
          var currentState = getCurrentState(config);
          currentState.lastRequestTime = Date.now();
          return config;
        });
        axios.interceptors.response.use(null, /*#__PURE__*/function () {
          var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(error) {
            var config, _getRequestOptions, _getRequestOptions$re, retries, _getRequestOptions$re2, retryCondition, _getRequestOptions$re3, retryDelay, _getRequestOptions$sh, shouldResetTimeout, _getRequestOptions$on, onRetry, currentState, delay, lastRequestDuration, timeout;

            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    config = error.config; // If we have no information to retry the request

                    if (config) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return", Promise.reject(error));

                  case 3:
                    _getRequestOptions = getRequestOptions(config, defaultOptions), _getRequestOptions$re = _getRequestOptions.retries, retries = _getRequestOptions$re === void 0 ? 3 : _getRequestOptions$re, _getRequestOptions$re2 = _getRequestOptions.retryCondition, retryCondition = _getRequestOptions$re2 === void 0 ? isNetworkOrIdempotentRequestError : _getRequestOptions$re2, _getRequestOptions$re3 = _getRequestOptions.retryDelay, retryDelay = _getRequestOptions$re3 === void 0 ? noDelay : _getRequestOptions$re3, _getRequestOptions$sh = _getRequestOptions.shouldResetTimeout, shouldResetTimeout = _getRequestOptions$sh === void 0 ? false : _getRequestOptions$sh, _getRequestOptions$on = _getRequestOptions.onRetry, onRetry = _getRequestOptions$on === void 0 ? function () { } : _getRequestOptions$on;
                    currentState = getCurrentState(config);
                    _context.next = 7;
                    return shouldRetry(retries, retryCondition, currentState, error);

                  case 7:
                    if (!_context.sent) {
                      _context.next = 20;
                      break;
                    }

                    currentState.retryCount += 1;
                    delay = retryDelay(currentState.retryCount, error); // Axios fails merging this configuration to the default configuration because it has an issue
                    // with circular structures: https://github.com/mzabriskie/axios/issues/370

                    fixConfig(axios, config);

                    if (!(!shouldResetTimeout && config.timeout && currentState.lastRequestTime)) {
                      _context.next = 17;
                      break;
                    }

                    lastRequestDuration = Date.now() - currentState.lastRequestTime;
                    timeout = config.timeout - lastRequestDuration - delay;

                    if (!(timeout <= 0)) {
                      _context.next = 16;
                      break;
                    }

                    return _context.abrupt("return", Promise.reject(error));

                  case 16:
                    config.timeout = timeout;

                  case 17:
                    config.transformRequest = [function (data) {
                      return data;
                    }];
                    onRetry(currentState.retryCount, error, config);
                    return _context.abrupt("return", new Promise(function (resolve) {
                      return setTimeout(function () {
                        return resolve(axios(config));
                      }, delay);
                    }));

                  case 20:
                    return _context.abrupt("return", Promise.reject(error));

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x5) {
            return _ref.apply(this, arguments);
          };
        }());
      } // Compatibility with CommonJS


      axiosRetry.isNetworkError = isNetworkError;
      axiosRetry.isSafeRequestError = isSafeRequestError;
      axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
      axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
      axiosRetry.exponentialDelay = exponentialDelay;
      axiosRetry.isRetryableError = isRetryableError;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 727:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Dictionary = void 0;
      var runtype_1 = __webpack_require__(861);
      var string_1 = __webpack_require__(955);
      var constraint_1 = __webpack_require__(951);
      var show_1 = __webpack_require__(828);
      var util_1 = __webpack_require__(917);
      var NumberKey = (0, constraint_1.Constraint)(string_1.String, function (s) { return !isNaN(+s); }, { name: 'number' });
      function Dictionary(value, key) {
        var keyRuntype = key === undefined
          ? string_1.String
          : key === 'string'
            ? string_1.String
            : key === 'number'
              ? NumberKey
              : key;
        var keyString = (0, show_1.default)(keyRuntype);
        var self = { tag: 'dictionary', key: keyString, value: value };
        return (0, runtype_1.create)(function (x, visited) {
          if (x === null || x === undefined || typeof x !== 'object')
            return util_1.FAILURE.TYPE_INCORRECT(self, x);
          if (Object.getPrototypeOf(x) !== Object.prototype)
            if (!Array.isArray(x) || keyString === 'string')
              return util_1.FAILURE.TYPE_INCORRECT(self, x);
          var numberString = /^(?:NaN|-?\d+(?:\.\d+)?)$/;
          var keys = (0, util_1.enumerableKeysOf)(x);
          var results = keys.reduce(function (results, key) {
            // We should provide interoperability with `number` and `string` here,
            // as a user would expect JavaScript engines to convert numeric keys to
            // string keys automatically. So, if the key can be interpreted as a
            // decimal number, then test it against a `Number` OR `String` runtype.
            var isNumberLikeKey = typeof key === 'string' && numberString.test(key);
            var keyInterop = isNumberLikeKey ? globalThis.Number(key) : key;
            if (isNumberLikeKey
              ? !keyRuntype.guard(keyInterop) && !keyRuntype.guard(key)
              : !keyRuntype.guard(keyInterop)) {
              results[key] = util_1.FAILURE.KEY_INCORRECT(self, keyRuntype.reflect, keyInterop);
            }
            else
              results[key] = (0, runtype_1.innerValidate)(value, x[key], visited);
            return results;
          }, {});
          var details = keys.reduce(function (details, key) {
            var result = results[key];
            if (!result.success)
              details[key] = result.details || result.message;
            return details;
          }, {});
          if ((0, util_1.enumerableKeysOf)(details).length !== 0)
            return util_1.FAILURE.CONTENT_INCORRECT(self, details);
          else
            return (0, util_1.SUCCESS)(x);
        }, self);
      }
      exports.Dictionary = Dictionary;


      /***/
}),

/***/ 735:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _rng = _interopRequireDefault(__webpack_require__(372));

      var _stringify = __webpack_require__(719);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      // **`v1()` - Generate time-based UUID**
      //
      // Inspired by https://github.com/LiosK/UUID.js
      // and http://docs.python.org/library/uuid.html
      let _nodeId;

      let _clockseq; // Previous uuid creation time


      let _lastMSecs = 0;
      let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
        // specified.  We do this lazily to minimize issues related to insufficient
        // system entropy.  See #189

        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();

          if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }

          if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
          }
        } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
        // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
        // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
        // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


        let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
        // cycle to simulate higher resolution clock

        let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 0x3fff;
        } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
        // time interval


        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        } // Per 4.2.1.2 Throw error if too many uuids are requested


        if (nsecs >= 10000) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }

        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

        msecs += 12219292800000; // `time_low`

        const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
        b[i++] = tl >>> 24 & 0xff;
        b[i++] = tl >>> 16 & 0xff;
        b[i++] = tl >>> 8 & 0xff;
        b[i++] = tl & 0xff; // `time_mid`

        const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
        b[i++] = tmh >>> 8 & 0xff;
        b[i++] = tmh & 0xff; // `time_high_and_version`

        b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

        b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

        b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

        b[i++] = clockseq & 0xff; // `node`

        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }

        return buf || (0, _stringify.unsafeStringify)(b);
      }

      var _default = v1;
      exports.default = _default;

      /***/
}),

/***/ 740:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Void = void 0;
      var unknown_1 = __webpack_require__(460);
      /**
       * Void is an alias for Unknown
       *
       * @deprecated Please use Unknown instead
       */
      exports.Void = unknown_1.Unknown;


      /***/
}),

/***/ 744:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var buildURL = __webpack_require__(692);
      var InterceptorManager = __webpack_require__(59);
      var dispatchRequest = __webpack_require__(374);
      var mergeConfig = __webpack_require__(280);
      var buildFullPath = __webpack_require__(747);
      var validator = __webpack_require__(287);

      var validators = validator.validators;
      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }

      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */
      Axios.prototype.request = function request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }

        config = mergeConfig(this.defaults, config);

        // Set config.method
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = 'get';
        }

        var transitional = config.transitional;

        if (transitional !== undefined) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }

        // filter out skipped interceptors
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
          }

          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });

        var promise;

        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, undefined];

          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);

          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }

          return promise;
        }


        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }

        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }

        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }

        return promise;
      };

      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        var fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      };

      // Provide aliases for supported request methods
      utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, config) {
          return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
          }));
        };
      });

      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        /*eslint func-names:0*/

        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method: method,
              headers: isForm ? {
                'Content-Type': 'multipart/form-data'
              } : {},
              url: url,
              data: data
            }));
          };
        }

        Axios.prototype[method] = generateHTTPMethod();

        Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
      });

      module.exports = Axios;


      /***/
}),

/***/ 745:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = (this && this.__exportStar) || function (m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(__webpack_require__(672), exports);
      __exportStar(__webpack_require__(485), exports);
      __exportStar(__webpack_require__(891), exports);
      __exportStar(__webpack_require__(39), exports);
      __exportStar(__webpack_require__(576), exports);


      /***/
}),

/***/ 747:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var isAbsoluteURL = __webpack_require__(338);
      var combineURLs = __webpack_require__(905);

      /**
       * Creates a new URL by combining the baseURL with the requestedURL,
       * only when the requestedURL is not already an absolute URL.
       * If the requestURL is absolute, this function returns the requestedURL untouched.
       *
       * @param {string} baseURL The base URL
       * @param {string} requestedURL Absolute or relative URL to combine
       * @returns {string} The combined full path
       */
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };


      /***/
}),

/***/ 748:
/***/ (function (__unusedmodule, exports) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = '00000000-0000-0000-0000-000000000000';
      exports.default = _default;

      /***/
}),

/***/ 751:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var defer = __webpack_require__(500);

      // API
      module.exports = async;

      /**
       * Runs provided callback asynchronously
       * even if callback itself is not
       *
       * @param   {function} callback - callback to invoke
       * @returns {function} - augmented callback
       */
      function async(callback) {
        var isAsync = false;

        // check if async happened
        defer(function () { isAsync = true; });

        return function async_callback(err, result) {
          if (isAsync) {
            callback(err, result);
          }
          else {
            defer(function nextTick_callback() {
              callback(err, result);
            });
          }
        };
      }


      /***/
}),

/***/ 755:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var bind = __webpack_require__(107);

      // utils is a library of generic helper functions non-specific to axios

      var toString = Object.prototype.toString;

      // eslint-disable-next-line func-names
      var kindOf = (function (cache) {
        // eslint-disable-next-line func-names
        return function (thing) {
          var str = toString.call(thing);
          return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        };
      })(Object.create(null));

      function kindOfTest(type) {
        type = type.toLowerCase();
        return function isKindOf(thing) {
          return kindOf(thing) === type;
        };
      }

      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */
      function isArray(val) {
        return Array.isArray(val);
      }

      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */
      function isUndefined(val) {
        return typeof val === 'undefined';
      }

      /**
       * Determine if a value is a Buffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Buffer, otherwise false
       */
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
          && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
      }

      /**
       * Determine if a value is an ArrayBuffer
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
      var isArrayBuffer = kindOfTest('ArrayBuffer');


      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */
      function isArrayBufferView(val) {
        var result;
        if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
          result = ArrayBuffer.isView(val);
        } else {
          result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
        }
        return result;
      }

      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */
      function isString(val) {
        return typeof val === 'string';
      }

      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */
      function isNumber(val) {
        return typeof val === 'number';
      }

      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
      function isObject(val) {
        return val !== null && typeof val === 'object';
      }

      /**
       * Determine if a value is a plain Object
       *
       * @param {Object} val The value to test
       * @return {boolean} True if value is a plain Object, otherwise false
       */
      function isPlainObject(val) {
        if (kindOf(val) !== 'object') {
          return false;
        }

        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }

      /**
       * Determine if a value is a Date
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */
      var isDate = kindOfTest('Date');

      /**
       * Determine if a value is a File
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
      var isFile = kindOfTest('File');

      /**
       * Determine if a value is a Blob
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */
      var isBlob = kindOfTest('Blob');

      /**
       * Determine if a value is a FileList
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
      var isFileList = kindOfTest('FileList');

      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
      function isFunction(val) {
        return toString.call(val) === '[object Function]';
      }

      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }

      /**
       * Determine if a value is a FormData
       *
       * @param {Object} thing The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */
      function isFormData(thing) {
        var pattern = '[object FormData]';
        return thing && (
          (typeof FormData === 'function' && thing instanceof FormData) ||
          toString.call(thing) === pattern ||
          (isFunction(thing.toString) && thing.toString() === pattern)
        );
      }

      /**
       * Determine if a value is a URLSearchParams object
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */
      var isURLSearchParams = kindOfTest('URLSearchParams');

      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
      }

      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       * nativescript
       *  navigator.product -> 'NativeScript' or 'NS'
       */
      function isStandardBrowserEnv() {
        if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
          navigator.product === 'NativeScript' ||
          navigator.product === 'NS')) {
          return false;
        }
        return (
          typeof window !== 'undefined' &&
          typeof document !== 'undefined'
        );
      }

      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
      function forEach(obj, fn) {
        // Don't bother if no value provided
        if (obj === null || typeof obj === 'undefined') {
          return;
        }

        // Force an array if not already something iterable
        if (typeof obj !== 'object') {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          // Iterate over array values
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          // Iterate over object keys
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }

      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */
      function merge(/* obj1, obj2, obj3, ... */) {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }

      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }

      /**
       * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
       *
       * @param {string} content with BOM
       * @return {string} content value without BOM
       */
      function stripBOM(content) {
        if (content.charCodeAt(0) === 0xFEFF) {
          content = content.slice(1);
        }
        return content;
      }

      /**
       * Inherit the prototype methods from one constructor into another
       * @param {function} constructor
       * @param {function} superConstructor
       * @param {object} [props]
       * @param {object} [descriptors]
       */

      function inherits(constructor, superConstructor, props, descriptors) {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors);
        constructor.prototype.constructor = constructor;
        props && Object.assign(constructor.prototype, props);
      }

      /**
       * Resolve object with deep prototype chain to a flat object
       * @param {Object} sourceObj source object
       * @param {Object} [destObj]
       * @param {Function} [filter]
       * @returns {Object}
       */

      function toFlatObject(sourceObj, destObj, filter) {
        var props;
        var i;
        var prop;
        var merged = {};

        destObj = destObj || {};

        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if (!merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = Object.getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

        return destObj;
      }

      /*
       * determines whether a string ends with the characters of a specified string
       * @param {String} str
       * @param {String} searchString
       * @param {Number} [position= 0]
       * @returns {boolean}
       */
      function endsWith(str, searchString, position) {
        str = String(str);
        if (position === undefined || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        var lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      }


      /**
       * Returns new array from array like object
       * @param {*} [thing]
       * @returns {Array}
       */
      function toArray(thing) {
        if (!thing) return null;
        var i = thing.length;
        if (isUndefined(i)) return null;
        var arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      }

      // eslint-disable-next-line func-names
      var isTypedArray = (function (TypedArray) {
        // eslint-disable-next-line func-names
        return function (thing) {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim,
        stripBOM: stripBOM,
        inherits: inherits,
        toFlatObject: toFlatObject,
        kindOf: kindOf,
        kindOfTest: kindOfTest,
        endsWith: endsWith,
        toArray: toArray,
        isTypedArray: isTypedArray,
        isFileList: isFileList
      };


      /***/
}),

/***/ 756:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      module.exports = (
        utils.isStandardBrowserEnv() ?

          // Standard browser envs have full support of the APIs needed to test
          // whether the request URL is of the same origin as current location.
          (function standardBrowserEnv() {
            var msie = /(msie|trident)/i.test(navigator.userAgent);
            var urlParsingNode = document.createElement('a');
            var originURL;

            /**
          * Parse a URL to discover it's components
          *
          * @param {String} url The URL to be parsed
          * @returns {Object}
          */
            function resolveURL(url) {
              var href = url;

              if (msie) {
                // IE needs attribute set twice to normalize properties
                urlParsingNode.setAttribute('href', href);
                href = urlParsingNode.href;
              }

              urlParsingNode.setAttribute('href', href);

              // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
              return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                host: urlParsingNode.host,
                search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
              };
            }

            originURL = resolveURL(window.location.href);

            /**
          * Determine if a URL shares the same origin as the current location
          *
          * @param {String} requestURL The URL to test
          * @returns {boolean} True if URL shares the same origin, otherwise false
          */
            return function isURLSameOrigin(requestURL) {
              var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
              return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
            };
          })() :

          // Non standard browser envs (web workers, react-native) lack needed support.
          (function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
              return true;
            };
          })()
      );


      /***/
}),

/***/ 761:
/***/ (function (module) {

      module.exports = require("zlib");

      /***/
}),

/***/ 763:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      // Headers whose duplicates are ignored by node
      // c.f. https://nodejs.org/api/http.html#http_message_headers
      var ignoreDuplicateOf = [
        'age', 'authorization', 'content-length', 'content-type', 'etag',
        'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
        'last-modified', 'location', 'max-forwards', 'proxy-authorization',
        'referer', 'retry-after', 'user-agent'
      ];

      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) { return parsed; }

        utils.forEach(headers.split('\n'), function parser(line) {
          i = line.indexOf(':');
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === 'set-cookie') {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          }
        });

        return parsed;
      };


      /***/
}),

/***/ 764:
/***/ (function (module) {

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 775:
/***/ (function (module, __unusedexports, __webpack_require__) {

      module.exports = __webpack_require__(913);

      /***/
}),

/***/ 779:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";
      /*!
       * mime-types
       * Copyright(c) 2014 Jonathan Ong
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */



      /**
       * Module dependencies.
       * @private
       */

      var db = __webpack_require__(852)
      var extname = __webpack_require__(622).extname

      /**
       * Module variables.
       * @private
       */

      var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
      var TEXT_TYPE_REGEXP = /^text\//i

      /**
       * Module exports.
       * @public
       */

      exports.charset = charset
      exports.charsets = { lookup: charset }
      exports.contentType = contentType
      exports.extension = extension
      exports.extensions = Object.create(null)
      exports.lookup = lookup
      exports.types = Object.create(null)

      // Populate the extensions/types maps
      populateMaps(exports.extensions, exports.types)

      /**
       * Get the default charset for a MIME type.
       *
       * @param {string} type
       * @return {boolean|string}
       */

      function charset(type) {
        if (!type || typeof type !== 'string') {
          return false
        }

        // TODO: use media-typer
        var match = EXTRACT_TYPE_REGEXP.exec(type)
        var mime = match && db[match[1].toLowerCase()]

        if (mime && mime.charset) {
          return mime.charset
        }

        // default text/* to utf-8
        if (match && TEXT_TYPE_REGEXP.test(match[1])) {
          return 'UTF-8'
        }

        return false
      }

      /**
       * Create a full Content-Type header given a MIME type or extension.
       *
       * @param {string} str
       * @return {boolean|string}
       */

      function contentType(str) {
        // TODO: should this even be in this module?
        if (!str || typeof str !== 'string') {
          return false
        }

        var mime = str.indexOf('/') === -1
          ? exports.lookup(str)
          : str

        if (!mime) {
          return false
        }

        // TODO: use content-type or other module
        if (mime.indexOf('charset') === -1) {
          var charset = exports.charset(mime)
          if (charset) mime += '; charset=' + charset.toLowerCase()
        }

        return mime
      }

      /**
       * Get the default extension for a MIME type.
       *
       * @param {string} type
       * @return {boolean|string}
       */

      function extension(type) {
        if (!type || typeof type !== 'string') {
          return false
        }

        // TODO: use media-typer
        var match = EXTRACT_TYPE_REGEXP.exec(type)

        // get extensions
        var exts = match && exports.extensions[match[1].toLowerCase()]

        if (!exts || !exts.length) {
          return false
        }

        return exts[0]
      }

      /**
       * Lookup the MIME type for a file path/extension.
       *
       * @param {string} path
       * @return {boolean|string}
       */

      function lookup(path) {
        if (!path || typeof path !== 'string') {
          return false
        }

        // get the extension ("ext" or ".ext" or full path)
        var extension = extname('x.' + path)
          .toLowerCase()
          .substr(1)

        if (!extension) {
          return false
        }

        return exports.types[extension] || false
      }

      /**
       * Populate the extensions and types maps.
       * @private
       */

      function populateMaps(extensions, types) {
        // source preference (least -> most)
        var preference = ['nginx', 'apache', undefined, 'iana']

        Object.keys(db).forEach(function forEachMimeType(type) {
          var mime = db[type]
          var exts = mime.extensions

          if (!exts || !exts.length) {
            return
          }

          // mime -> extensions
          extensions[type] = exts

          // extension -> mime
          for (var i = 0; i < exts.length; i++) {
            var extension = exts[i]

            if (types[extension]) {
              var from = preference.indexOf(db[types[extension]].source)
              var to = preference.indexOf(mime.source)

              if (types[extension] !== 'application/octet-stream' &&
                (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
                // skip the remapping
                continue
              }
            }

            // set the extension -> mime
            types[extension] = type
          }
        })
      }


      /***/
}),

/***/ 781:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var AxiosError = __webpack_require__(379);

      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            'Request failed with status code ' + response.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
            response.config,
            response.request,
            response
          ));
        }
      };


      /***/
}),

/***/ 792:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
        }
        return ar;
      };
      var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var __values = (this && this.__values) || function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Template = void 0;
      var runtype_1 = __webpack_require__(861);
      var show_1 = __webpack_require__(828);
      var util_1 = __webpack_require__(917);
      var literal_1 = __webpack_require__(301);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
      var escapeRegExp = function (string) { return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
      var parseArgs = function (args) {
        // If the first element is an `Array`, maybe it's called by the tagged style
        if (0 < args.length && Array.isArray(args[0])) {
          var _a = __read(args), strings = _a[0], runtypes = _a.slice(1);
          // For further manipulation, recreate an `Array` because `TemplateStringsArray` is readonly
          return [Array.from(strings), runtypes];
        }
        else {
          var convenient = args;
          var strings = convenient.reduce(function (strings, arg) {
            // Concatenate every consecutive literals as strings
            if (!(0, runtype_1.isRuntype)(arg))
              strings.push(strings.pop() + String(arg));
            // Skip runtypes
            else
              strings.push('');
            return strings;
          }, ['']);
          var runtypes = convenient.filter(runtype_1.isRuntype);
          return [strings, runtypes];
        }
      };
      /**
       * Flatten inner runtypes of a `Template` if possible, with in-place strategy
       */
      var flattenInnerRuntypes = function (strings, runtypes) {
        for (var i = 0; i < runtypes.length;) {
          switch (runtypes[i].reflect.tag) {
            case 'literal': {
              var literal_2 = runtypes[i];
              runtypes.splice(i, 1);
              var string = String(literal_2.value);
              strings.splice(i, 2, strings[i] + string + strings[i + 1]);
              break;
            }
            case 'template': {
              var template = runtypes[i];
              runtypes.splice.apply(runtypes, __spreadArray([i, 1], __read(template.runtypes), false));
              var innerStrings = template.strings;
              if (innerStrings.length === 1) {
                strings.splice(i, 2, strings[i] + innerStrings[0] + strings[i + 1]);
              }
              else {
                var first = innerStrings[0];
                var rest = innerStrings.slice(1, -1);
                var last = innerStrings[innerStrings.length - 1];
                strings.splice.apply(strings, __spreadArray(__spreadArray([i, 2, strings[i] + first], __read(rest), false), [last + strings[i + 1]], false));
              }
              break;
            }
            case 'union': {
              var union = runtypes[i];
              if (union.alternatives.length === 1) {
                try {
                  var literal_3 = getInnerLiteral(union);
                  runtypes.splice(i, 1);
                  var string = String(literal_3.value);
                  strings.splice(i, 2, strings[i] + string + strings[i + 1]);
                  break;
                }
                catch (_) {
                  i++;
                  break;
                }
              }
              else {
                i++;
                break;
              }
            }
            case 'intersect': {
              var intersect = runtypes[i];
              if (intersect.intersectees.length === 1) {
                try {
                  var literal_4 = getInnerLiteral(intersect);
                  runtypes.splice(i, 1);
                  var string = String(literal_4.value);
                  strings.splice(i, 2, strings[i] + string + strings[i + 1]);
                  break;
                }
                catch (_) {
                  i++;
                  break;
                }
              }
              else {
                i++;
                break;
              }
            }
            default:
              i++;
              break;
          }
        }
      };
      var normalizeArgs = function (args) {
        var _a = __read(parseArgs(args), 2), strings = _a[0], runtypes = _a[1];
        flattenInnerRuntypes(strings, runtypes);
        return [strings, runtypes];
      };
      var getInnerLiteral = function (runtype) {
        switch (runtype.reflect.tag) {
          case 'literal':
            return runtype;
          case 'brand':
            return getInnerLiteral(runtype.reflect.entity);
          case 'union':
            if (runtype.reflect.alternatives.length === 1)
              return getInnerLiteral(runtype.reflect.alternatives[0]);
            break;
          case 'intersect':
            if (runtype.reflect.intersectees.length === 1)
              return getInnerLiteral(runtype.reflect.intersectees[0]);
            break;
          default:
            break;
        }
        throw undefined;
      };
      var identity = function (s) { return s; };
      var revivers = {
        string: [function (s) { return globalThis.String(s); }, '.*'],
        number: [
          function (s) { return globalThis.Number(s); },
          '[+-]?(?:\\d*\\.\\d+|\\d+\\.\\d*|\\d+)(?:[Ee][+-]?\\d+)?',
          '0[Bb][01]+',
          '0[Oo][0-7]+',
          '0[Xx][0-9A-Fa-f]+',
          // Note: `"NaN"` isn't here, as TS doesn't allow `"NaN"` to be a `` `${number}` ``
        ],
        bigint: [function (s) { return globalThis.BigInt(s); }, '-?[1-9]d*'],
        boolean: [function (s) { return (s === 'false' ? false : true); }, 'true', 'false'],
        null: [function () { return null; }, 'null'],
        undefined: [function () { return undefined; }, 'undefined'],
      };
      var getReviversFor = function (reflect) {
        switch (reflect.tag) {
          case 'literal': {
            var _a = __read(revivers[(0, util_1.typeOf)(reflect.value)] || [identity], 1), reviver_1 = _a[0];
            return reviver_1;
          }
          case 'brand':
            return getReviversFor(reflect.entity);
          case 'constraint':
            return getReviversFor(reflect.underlying);
          case 'union':
            return reflect.alternatives.map(getReviversFor);
          case 'intersect':
            return reflect.intersectees.map(getReviversFor);
          default:
            var _b = __read(revivers[reflect.tag] || [identity], 1), reviver = _b[0];
            return reviver;
        }
      };
      /** Recursively map corresponding reviver and  */
      var reviveValidate = function (reflect, visited) {
        return function (value) {
          var e_1, _a, e_2, _b;
          var revivers = getReviversFor(reflect);
          if (Array.isArray(revivers)) {
            switch (reflect.tag) {
              case 'union':
                try {
                  for (var _c = __values(reflect.alternatives), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var alternative = _d.value;
                    var validated = reviveValidate(alternative.reflect, visited)(value);
                    if (validated.success)
                      return validated;
                  }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                  try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                  }
                  finally { if (e_1) throw e_1.error; }
                }
                return util_1.FAILURE.TYPE_INCORRECT(reflect, value);
              case 'intersect':
                try {
                  for (var _e = __values(reflect.intersectees), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var intersectee = _f.value;
                    var validated = reviveValidate(intersectee.reflect, visited)(value);
                    if (!validated.success)
                      return validated;
                  }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                  try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                  }
                  finally { if (e_2) throw e_2.error; }
                }
                return (0, util_1.SUCCESS)(value);
              default:
                /* istanbul ignore next */
                throw Error('impossible');
            }
          }
          else {
            var reviver = revivers;
            var validated = (0, runtype_1.innerValidate)(reflect, reviver(value), visited);
            if (!validated.success && validated.code === 'VALUE_INCORRECT' && reflect.tag === 'literal')
              // TODO: Temporary fix to show unrevived value in message; needs refactor
              return util_1.FAILURE.VALUE_INCORRECT('literal', "\"".concat((0, literal_1.literal)(reflect.value), "\""), "\"".concat(value, "\""));
            return validated;
          }
        };
      };
      var getRegExpPatternFor = function (reflect) {
        switch (reflect.tag) {
          case 'literal':
            return escapeRegExp(String(reflect.value));
          case 'brand':
            return getRegExpPatternFor(reflect.entity);
          case 'constraint':
            return getRegExpPatternFor(reflect.underlying);
          case 'union':
            return reflect.alternatives.map(getRegExpPatternFor).join('|');
          case 'template': {
            return reflect.strings.map(escapeRegExp).reduce(function (pattern, string, i) {
              var prefix = pattern + string;
              var runtype = reflect.runtypes[i];
              if (runtype)
                return prefix + "(?:".concat(getRegExpPatternFor(runtype.reflect), ")");
              else
                return prefix;
            }, '');
          }
          default:
            var _a = __read(revivers[reflect.tag] || [undefined, '.*']), patterns = _a.slice(1);
            return patterns.join('|');
        }
      };
      var createRegExpForTemplate = function (reflect) {
        var pattern = reflect.strings.map(escapeRegExp).reduce(function (pattern, string, i) {
          var prefix = pattern + string;
          var runtype = reflect.runtypes[i];
          if (runtype)
            return prefix + "(".concat(getRegExpPatternFor(runtype.reflect), ")");
          else
            return prefix;
        }, '');
        return new RegExp("^".concat(pattern, "$"), 'su');
      };
      function Template() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _a = __read(normalizeArgs(args), 2), strings = _a[0], runtypes = _a[1];
        var self = { tag: 'template', strings: strings, runtypes: runtypes };
        var regexp = createRegExpForTemplate(self);
        var test = function (value, visited) {
          var matches = value.match(regexp);
          if (matches) {
            var values = matches.slice(1);
            for (var i = 0; i < runtypes.length; i++) {
              var runtype = runtypes[i];
              var value_1 = values[i];
              var validated = reviveValidate(runtype.reflect, visited)(value_1);
              if (!validated.success)
                return validated;
            }
            return (0, util_1.SUCCESS)(value);
          }
          else {
            return util_1.FAILURE.VALUE_INCORRECT('string', "".concat((0, show_1.default)(self)), "\"".concat((0, literal_1.literal)(value), "\""));
          }
        };
        return (0, runtype_1.create)(function (value, visited) {
          if (typeof value !== 'string')
            return util_1.FAILURE.TYPE_INCORRECT(self, value);
          else {
            var validated = test(value, visited);
            if (!validated.success) {
              var result = util_1.FAILURE.VALUE_INCORRECT('string', "".concat((0, show_1.default)(self)), "\"".concat(value, "\""));
              if (result.message !== validated.message)
                // TODO: Should use `details` here, but it needs unionizing `string` anew to the definition of `Details`, which is a breaking change
                result.message += " (inner: ".concat(validated.message, ")");
              return result;
            }
            else
              return (0, util_1.SUCCESS)(value);
          }
        }, self);
      }
      exports.Template = Template;


      /***/
}),

/***/ 808:
/***/ (function (module) {

      "use strict";


      module.exports = function parseProtocol(url) {
        var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
        return match && match[1] || '';
      };


      /***/
}),

/***/ 812:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.headerCase = void 0;
      var tslib_1 = __webpack_require__(259);
      var capital_case_1 = __webpack_require__(244);
      function headerCase(input, options) {
        if (options === void 0) { options = {}; }
        return capital_case_1.capitalCase(input, tslib_1.__assign({ delimiter: "-" }, options));
      }
      exports.headerCase = headerCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 814:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Symbol = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var f = function (key) {
        var self = { tag: 'symbol', key: key };
        return (0, runtype_1.create)(function (value) {
          if (typeof value !== 'symbol')
            return util_1.FAILURE.TYPE_INCORRECT(self, value);
          else {
            var keyForValue = globalThis.Symbol.keyFor(value);
            if (keyForValue !== key)
              return util_1.FAILURE.VALUE_INCORRECT('symbol key', quoteIfPresent(key), quoteIfPresent(keyForValue));
            else
              return (0, util_1.SUCCESS)(value);
          }
        }, self);
      };
      var self = { tag: 'symbol' };
      /**
       * Validates that a value is a symbol, regardless of whether it is keyed or not.
       */
      exports.Symbol = (0, runtype_1.create)(function (value) { return (typeof value === 'symbol' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, Object.assign(f, self));
      var quoteIfPresent = function (key) { return (key === undefined ? 'undefined' : "\"".concat(key, "\"")); };


      /***/
}),

/***/ 817:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Array = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      /**
       * Construct an array runtype from a runtype for its elements.
       */
      function InternalArr(element, isReadonly) {
        var self = { tag: 'array', isReadonly: isReadonly, element: element };
        return withExtraModifierFuncs((0, runtype_1.create)(function (xs, visited) {
          if (!Array.isArray(xs))
            return util_1.FAILURE.TYPE_INCORRECT(self, xs);
          var keys = (0, util_1.enumerableKeysOf)(xs);
          var results = keys.map(function (key) {
            return (0, runtype_1.innerValidate)(element, xs[key], visited);
          });
          var details = keys.reduce(function (details, key) {
            var result = results[key];
            if (!result.success)
              details[key] = result.details || result.message;
            return details;
          }, []);
          if ((0, util_1.enumerableKeysOf)(details).length !== 0)
            return util_1.FAILURE.CONTENT_INCORRECT(self, details);
          else
            return (0, util_1.SUCCESS)(xs);
        }, self));
      }
      function Arr(element) {
        return InternalArr(element, false);
      }
      exports.Array = Arr;
      function withExtraModifierFuncs(A) {
        A.asReadonly = asReadonly;
        return A;
        function asReadonly() {
          return InternalArr(A.element, true);
        }
      }


      /***/
}),

/***/ 826:
/***/ (function (module) {

      module.exports = require("fs");

      /***/
}),

/***/ 828:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      /**
       * Return the display string for the stringified version of a type, e.g.
       *
       * - `Number` -> `` `${number}` ``
       * - `String` -> `string`
       * - `Literal(42)` -> `"42"`
       * - `Union(Literal("foo"), Number)` -> `` "foo" | `${number}` ``
       */
      var showStringified = function (circular) {
        return function (refl) {
          switch (refl.tag) {
            case 'literal':
              return "\"".concat(String(refl.value), "\"");
            case 'string':
              return 'string';
            case 'brand':
              return refl.brand;
            case 'constraint':
              return refl.name || showStringified(circular)(refl.underlying);
            case 'union':
              return refl.alternatives.map(showStringified(circular)).join(' | ');
            case 'intersect':
              return refl.intersectees.map(showStringified(circular)).join(' & ');
            default:
              break;
          }
          return "`${".concat(show(false, circular)(refl), "}`");
        };
      };
      /**
       * Return the display string which is to be embedded into the display string of
       * the surrounding template literal type, e.g.
       *
       * - `Number` -> `${number}`
       * - `String` -> `${string}`
       * - `Literal("foo")` -> `foo`
       * - `Union(Literal(42), Number)` -> `${"42" | number}`
       */
      var showEmbedded = function (circular) {
        return function (refl) {
          switch (refl.tag) {
            case 'literal':
              return String(refl.value);
            case 'brand':
              return "${".concat(refl.brand, "}");
            case 'constraint':
              return refl.name ? "${".concat(refl.name, "}") : showEmbedded(circular)(refl.underlying);
            case 'union':
              if (refl.alternatives.length === 1) {
                var inner = refl.alternatives[0];
                return showEmbedded(circular)(inner.reflect);
              }
              break;
            case 'intersect':
              if (refl.intersectees.length === 1) {
                var inner = refl.intersectees[0];
                return showEmbedded(circular)(inner.reflect);
              }
              break;
            default:
              break;
          }
          return "${".concat(show(false, circular)(refl), "}");
        };
      };
      var show = function (needsParens, circular) {
        return function (refl) {
          var parenthesize = function (s) { return (needsParens ? "(".concat(s, ")") : s); };
          if (circular.has(refl))
            return parenthesize("CIRCULAR ".concat(refl.tag));
          else
            circular.add(refl);
          try {
            switch (refl.tag) {
              // Primitive types
              case 'unknown':
              case 'never':
              case 'void':
              case 'boolean':
              case 'number':
              case 'bigint':
              case 'string':
              case 'symbol':
              case 'function':
                return refl.tag;
              case 'literal': {
                var value = refl.value;
                return typeof value === 'string' ? "\"".concat(value, "\"") : String(value);
              }
              // Complex types
              case 'template': {
                if (refl.strings.length === 0)
                  return '""';
                else if (refl.strings.length === 1)
                  return "\"".concat(refl.strings[0], "\"");
                else if (refl.strings.length === 2) {
                  if (refl.strings.every(function (string) { return string === ''; })) {
                    var runtype = refl.runtypes[0];
                    return showStringified(circular)(runtype.reflect);
                  }
                }
                var backtick_1 = false;
                var inner = refl.strings.reduce(function (inner, string, i) {
                  var prefix = inner + string;
                  var runtype = refl.runtypes[i];
                  if (runtype) {
                    var suffix = showEmbedded(circular)(runtype.reflect);
                    if (!backtick_1 && suffix.startsWith('$'))
                      backtick_1 = true;
                    return prefix + suffix;
                  }
                  else
                    return prefix;
                }, '');
                return backtick_1 ? "`".concat(inner, "`") : "\"".concat(inner, "\"");
              }
              case 'array':
                return "".concat(readonlyTag(refl)).concat(show(true, circular)(refl.element), "[]");
              case 'dictionary':
                return "{ [_: ".concat(refl.key, "]: ").concat(show(false, circular)(refl.value), " }");
              case 'record': {
                var keys = Object.keys(refl.fields);
                return keys.length
                  ? "{ ".concat(keys
                    .map(function (k) {
                      return "".concat(readonlyTag(refl)).concat(k).concat(partialTag(refl, k), ": ").concat(refl.fields[k].tag === 'optional'
                        ? show(false, circular)(refl.fields[k].underlying)
                        : show(false, circular)(refl.fields[k]), ";");
                    })
                    .join(' '), " }")
                  : '{}';
              }
              case 'tuple':
                return "[".concat(refl.components.map(show(false, circular)).join(', '), "]");
              case 'union':
                return parenthesize("".concat(refl.alternatives.map(show(true, circular)).join(' | ')));
              case 'intersect':
                return parenthesize("".concat(refl.intersectees.map(show(true, circular)).join(' & ')));
              case 'optional':
                return show(needsParens, circular)(refl.underlying) + ' | undefined';
              case 'constraint':
                return refl.name || show(needsParens, circular)(refl.underlying);
              case 'instanceof':
                return refl.ctor.name;
              case 'brand':
                return show(needsParens, circular)(refl.entity);
            }
          }
          finally {
            circular.delete(refl);
          }
          /* istanbul ignore next */
          throw Error('impossible');
        };
      };
      exports.default = show(false, new Set());
      function partialTag(_a, key) {
        var isPartial = _a.isPartial, fields = _a.fields;
        return isPartial || (key !== undefined && fields[key].tag === 'optional') ? '?' : '';
      }
      function readonlyTag(_a) {
        var isReadonly = _a.isReadonly;
        return isReadonly ? 'readonly ' : '';
      }


      /***/
}),

/***/ 830:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Function = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'function' };
      /**
       * Construct a runtype for functions.
       */
      exports.Function = (0, runtype_1.create)(function (value) { return (typeof value === 'function' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, self);


      /***/
}),

/***/ 831:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _crypto = _interopRequireDefault(__webpack_require__(417));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function sha1(bytes) {
        if (Array.isArray(bytes)) {
          bytes = Buffer.from(bytes);
        } else if (typeof bytes === 'string') {
          bytes = Buffer.from(bytes, 'utf8');
        }

        return _crypto.default.createHash('sha1').update(bytes).digest();
      }

      var _default = sha1;
      exports.default = _default;

      /***/
}),

/***/ 835:
/***/ (function (module) {

      module.exports = require("url");

      /***/
}),

/***/ 839:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createObjectTransformers = exports.createObjectTransformerOf = exports.createObjectTransformer = void 0;
      var tslib_1 = __webpack_require__(259);
      var camel_case_1 = __webpack_require__(947);
      var snake_case_1 = __webpack_require__(289);
      var header_case_1 = __webpack_require__(812);
      var decorators_1 = __webpack_require__(46);
      var util_1 = __webpack_require__(479);
      var caseFunctions = {
        snake: snake_case_1.snakeCase,
        camel: camel_case_1.camelCase,
        header: header_case_1.headerCase,
      };
      var transformObjectUsingCallbackRecursive = function (data, fn, overwrite) {
        var e_1, _a, e_2, _b, e_3, _c;
        if (!(0, util_1.isTransformable)(data)) {
          return data;
        }
        /* eslint-disable no-console */
        // Check FormData/URLSearchParams compatibility
        if (((0, util_1.isFormData)(data) || (0, util_1.isURLSearchParams)(data)) &&
          (!data.entries || (overwrite && !data.delete))) {
          var type = (0, util_1.isFormData)(data) ? 'FormData' : 'URLSearchParams';
          var polyfill = (0, util_1.isFormData)(data)
            ? 'https://github.com/jimmywarting/FormData'
            : 'https://github.com/jerrybendy/url-search-params-polyfill';
          if (typeof navigator !== 'undefined' &&
            navigator.product === 'ReactNative') {
            // You cannot transform FormData/URLSearchParams on React Native
            console.warn("Be careful that ".concat(type, " cannot be transformed on React Native. If you intentionally implemented, ignore this kind of warning: https://facebook.github.io/react-native/docs/debugging.html"));
          }
          else {
            if (!data.entries) {
              // You need to polyfill `entries` method
              console.warn("You must use polyfill of ".concat(type, ".prototype.entries() on Internet Explorer or Safari: ").concat(polyfill));
            }
            if (overwrite && !data.delete) {
              // You need to polyfill `delete` method for overwriting
              console.warn("You must use polyfill of ".concat(type, ".prototype.delete() on Internet Explorer or Safari: ").concat(polyfill));
            }
          }
          return data;
        }
        /* eslint-enable no-console */
        var prototype = Object.getPrototypeOf(data);
        // Storage of new values.
        // New instances are created when overwriting is disabled.
        var store = overwrite
          ? data
          : !prototype
            ? Object.create(null)
            : new prototype.constructor();
        // We need to clean up all entries before overwriting.
        var series;
        if ((0, util_1.isFormData)(data) || (0, util_1.isURLSearchParams)(data)) {
          // Create native iterator from FormData/URLSearchParams
          series = data.entries();
          if (overwrite) {
            // When overwriting, native iterator needs to be copied as array.
            series = tslib_1.__spreadArray([], tslib_1.__read(series), false);
            try {
              for (var series_1 = tslib_1.__values(series), series_1_1 = series_1.next(); !series_1_1.done; series_1_1 = series_1.next()) {
                var _d = tslib_1.__read(series_1_1.value, 1), key = _d[0];
                data.delete(key);
              }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
              try {
                if (series_1_1 && !series_1_1.done && (_a = series_1.return)) _a.call(series_1);
              }
              finally { if (e_1) throw e_1.error; }
            }
          }
        }
        else {
          // Create array from objects
          series = Object.entries(data);
          // Array keys never change, so we don't need to clean up
          if (overwrite && !Array.isArray(data)) {
            try {
              for (var series_2 = tslib_1.__values(series), series_2_1 = series_2.next(); !series_2_1.done; series_2_1 = series_2.next()) {
                var _e = tslib_1.__read(series_2_1.value, 1), key = _e[0];
                delete data[key];
              }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
              try {
                if (series_2_1 && !series_2_1.done && (_b = series_2.return)) _b.call(series_2);
              }
              finally { if (e_2) throw e_2.error; }
            }
          }
        }
        try {
          for (var series_3 = tslib_1.__values(series), series_3_1 = series_3.next(); !series_3_1.done; series_3_1 = series_3.next()) {
            var _f = tslib_1.__read(series_3_1.value, 2), key = _f[0], value = _f[1];
            if ((0, util_1.isFormData)(store) || (0, util_1.isURLSearchParams)(store)) {
              store.append(fn(key), value);
            }
            else if (key !== '__proto__') {
              store[fn(typeof key === 'string' ? key : "".concat(key))] =
                transformObjectUsingCallbackRecursive(value, fn, overwrite);
            }
          }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
          try {
            if (series_3_1 && !series_3_1.done && (_c = series_3.return)) _c.call(series_3);
          }
          finally { if (e_3) throw e_3.error; }
        }
        return store;
      };
      var transformObjectUsingCallback = function (data, fn, options) {
        fn = (0, decorators_1.applyCaseOptions)(fn, tslib_1.__assign({ stripRegexp: /[^A-Z0-9[\]]+/gi }, options === null || options === void 0 ? void 0 : options.caseOptions));
        if (options === null || options === void 0 ? void 0 : options.preservedKeys) {
          fn = (0, decorators_1.preserveSpecificKeys)(fn, options.preservedKeys);
        }
        return transformObjectUsingCallbackRecursive(data, fn, (options === null || options === void 0 ? void 0 : options.overwrite) || false);
      };
      var createObjectTransformer = function (fn) {
        return function (data, options) {
          return transformObjectUsingCallback(data, fn, options);
        };
      };
      exports.createObjectTransformer = createObjectTransformer;
      var createObjectTransformerOf = function (functionName, options) {
        return (0, exports.createObjectTransformer)((options === null || options === void 0 ? void 0 : options[functionName]) || caseFunctions[functionName]);
      };
      exports.createObjectTransformerOf = createObjectTransformerOf;
      var createObjectTransformers = function (options) {
        var e_4, _a;
        var functionNames = Object.keys(caseFunctions);
        var objectTransformers = {};
        try {
          for (var functionNames_1 = tslib_1.__values(functionNames), functionNames_1_1 = functionNames_1.next(); !functionNames_1_1.done; functionNames_1_1 = functionNames_1.next()) {
            var functionName = functionNames_1_1.value;
            objectTransformers[functionName] = (0, exports.createObjectTransformerOf)(functionName, options);
          }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
          try {
            if (functionNames_1_1 && !functionNames_1_1.done && (_a = functionNames_1.return)) _a.call(functionNames_1);
          }
          finally { if (e_4) throw e_4.error; }
        }
        return objectTransformers;
      };
      exports.createObjectTransformers = createObjectTransformers;


      /***/
}),

/***/ 847:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };


      /***/
}),

/***/ 852:
/***/ (function (module, __unusedexports, __webpack_require__) {

      /*!
       * mime-db
       * Copyright(c) 2014 Jonathan Ong
       * Copyright(c) 2015-2022 Douglas Christopher Wilson
       * MIT Licensed
       */

      /**
       * Module exports.
       */

      module.exports = __webpack_require__(512)


      /***/
}),

/***/ 857:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pascalCase = exports.pascalCaseTransformMerge = exports.pascalCaseTransform = void 0;
      var tslib_1 = __webpack_require__(259);
      var no_case_1 = __webpack_require__(555);
      function pascalCaseTransform(input, index) {
        var firstChar = input.charAt(0);
        var lowerChars = input.substr(1).toLowerCase();
        if (index > 0 && firstChar >= "0" && firstChar <= "9") {
          return "_" + firstChar + lowerChars;
        }
        return "" + firstChar.toUpperCase() + lowerChars;
      }
      exports.pascalCaseTransform = pascalCaseTransform;
      function pascalCaseTransformMerge(input) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      }
      exports.pascalCaseTransformMerge = pascalCaseTransformMerge;
      function pascalCase(input, options) {
        if (options === void 0) { options = {}; }
        return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "", transform: pascalCaseTransform }, options));
      }
      exports.pascalCase = pascalCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 861:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerValidate = exports.create = exports.isRuntype = void 0;
      var index_1 = __webpack_require__(81);
      var show_1 = __webpack_require__(828);
      var errors_1 = __webpack_require__(967);
      var util_1 = __webpack_require__(917);
      var RuntypeSymbol = Symbol();
      var isRuntype = function (x) { return (0, util_1.hasKey)(RuntypeSymbol, x); };
      exports.isRuntype = isRuntype;
      function create(validate, A) {
        A[RuntypeSymbol] = true;
        A.check = check;
        A.assert = check;
        A._innerValidate = function (value, visited) {
          if (visited.has(value, A))
            return (0, util_1.SUCCESS)(value);
          return validate(value, visited);
        };
        A.validate = function (value) { return A._innerValidate(value, VisitedState()); };
        A.guard = guard;
        A.Or = Or;
        A.And = And;
        A.optional = optional;
        A.nullable = nullable;
        A.withConstraint = withConstraint;
        A.withGuard = withGuard;
        A.withBrand = withBrand;
        A.reflect = A;
        A.toString = function () { return "Runtype<".concat((0, show_1.default)(A), ">"); };
        return A;
        function check(x) {
          var result = A.validate(x);
          if (result.success)
            return result.value;
          else
            throw new errors_1.ValidationError(result);
        }
        function guard(x) {
          return A.validate(x).success;
        }
        function Or(B) {
          return (0, index_1.Union)(A, B);
        }
        function And(B) {
          return (0, index_1.Intersect)(A, B);
        }
        function optional() {
          return (0, index_1.Optional)(A);
        }
        function nullable() {
          return (0, index_1.Union)(A, index_1.Null);
        }
        function withConstraint(constraint, options) {
          return (0, index_1.Constraint)(A, constraint, options);
        }
        function withGuard(guard, options) {
          return (0, index_1.Constraint)(A, guard, options);
        }
        function withBrand(B) {
          return (0, index_1.Brand)(B, A);
        }
      }
      exports.create = create;
      function innerValidate(targetType, value, visited) {
        return targetType._innerValidate(value, visited);
      }
      exports.innerValidate = innerValidate;
      function VisitedState() {
        var members = new WeakMap();
        var add = function (candidate, type) {
          if (candidate === null || !(typeof candidate === 'object'))
            return;
          var typeSet = members.get(candidate);
          members.set(candidate, typeSet
            ? typeSet.set(type, true)
            : new WeakMap().set(type, true));
        };
        var has = function (candidate, type) {
          var typeSet = members.get(candidate);
          var value = (typeSet && typeSet.get(type)) || false;
          add(candidate, type);
          return value;
        };
        return { has: has };
      }


      /***/
}),

/***/ 884:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "NIL", {
        enumerable: true,
        get: function () {
          return _nil.default;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function () {
          return _parse.default;
        }
      });
      Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function () {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports, "v1", {
        enumerable: true,
        get: function () {
          return _v.default;
        }
      });
      Object.defineProperty(exports, "v3", {
        enumerable: true,
        get: function () {
          return _v2.default;
        }
      });
      Object.defineProperty(exports, "v4", {
        enumerable: true,
        get: function () {
          return _v3.default;
        }
      });
      Object.defineProperty(exports, "v5", {
        enumerable: true,
        get: function () {
          return _v4.default;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function () {
          return _validate.default;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function () {
          return _version.default;
        }
      });

      var _v = _interopRequireDefault(__webpack_require__(735));

      var _v2 = _interopRequireDefault(__webpack_require__(389));

      var _v3 = _interopRequireDefault(__webpack_require__(916));

      var _v4 = _interopRequireDefault(__webpack_require__(121));

      var _nil = _interopRequireDefault(__webpack_require__(748));

      var _version = _interopRequireDefault(__webpack_require__(163));

      var _validate = _interopRequireDefault(__webpack_require__(205));

      var _stringify = _interopRequireDefault(__webpack_require__(719));

      var _parse = _interopRequireDefault(__webpack_require__(53));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /***/
}),

/***/ 887:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _crypto = _interopRequireDefault(__webpack_require__(417));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var _default = {
        randomUUID: _crypto.default.randomUUID
      };
      exports.default = _default;

      /***/
}),

/***/ 891:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.revokeAuthToken = exports.getAuthToken = exports.getAuthorizationUrl = exports.getAuthStateParameter = void 0;
      var restClient_1 = __webpack_require__(485);
      var uuid_1 = __webpack_require__(884);
      var types_1 = __webpack_require__(39);
      var endpoints_1 = __webpack_require__(127);
      function getAuthStateParameter() {
        return (0, uuid_1.v4)();
      }
      exports.getAuthStateParameter = getAuthStateParameter;
      function getAuthorizationUrl(clientId, permissions, state, baseUrl) {
        if (!(permissions === null || permissions === void 0 ? void 0 : permissions.length)) {
          throw new Error('At least one scope value should be passed for permissions.');
        }
        var scope = permissions.join(',');
        return "".concat((0, endpoints_1.getAuthBaseUri)(baseUrl)).concat(endpoints_1.ENDPOINT_AUTHORIZATION, "?client_id=").concat(clientId, "&scope=").concat(scope, "&state=").concat(state);
      }
      exports.getAuthorizationUrl = getAuthorizationUrl;
      function getAuthToken(args, baseUrl) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
          var response;
          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', (0, endpoints_1.getAuthBaseUri)(baseUrl), endpoints_1.ENDPOINT_GET_TOKEN, undefined, args)];
              case 1:
                response = _b.sent();
                if (response.status !== 200 || !((_a = response.data) === null || _a === void 0 ? void 0 : _a.accessToken)) {
                  throw new types_1.TodoistRequestError('Authentication token exchange failed.', response.status, response.data);
                }
                return [2 /*return*/, response.data];
            }
          });
        });
      }
      exports.getAuthToken = getAuthToken;
      function revokeAuthToken(args, baseUrl) {
        return __awaiter(this, void 0, void 0, function () {
          var response;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0: return [4 /*yield*/, (0, restClient_1.request)('POST', (0, endpoints_1.getSyncBaseUri)(baseUrl), endpoints_1.ENDPOINT_REVOKE_TOKEN, undefined, args)];
              case 1:
                response = _a.sent();
                return [2 /*return*/, (0, restClient_1.isSuccess)(response)];
            }
          });
        });
      }
      exports.revokeAuthToken = revokeAuthToken;


      /***/
}),

/***/ 892:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var iterate = __webpack_require__(157)
        , initState = __webpack_require__(147)
        , terminator = __webpack_require__(939)
        ;

      // Public API
      module.exports = serialOrdered;
      // sorting helpers
      module.exports.ascending = ascending;
      module.exports.descending = descending;

      /**
       * Runs iterator over provided sorted array elements in series
       *
       * @param   {array|object} list - array or object (named list) to iterate over
       * @param   {function} iterator - iterator to run
       * @param   {function} sortMethod - custom sort function
       * @param   {function} callback - invoked when all elements processed
       * @returns {function} - jobs terminator
       */
      function serialOrdered(list, iterator, sortMethod, callback) {
        var state = initState(list, sortMethod);

        iterate(list, iterator, state, function iteratorHandler(error, result) {
          if (error) {
            callback(error, result);
            return;
          }

          state.index++;

          // are we there yet?
          if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
          }

          // done here
          callback(null, state.results);
        });

        return terminator.bind(state, callback);
      }

      /*
       * -- Sort methods
       */

      /**
       * sort helper to sort array elements in ascending order
       *
       * @param   {mixed} a - an item to compare
       * @param   {mixed} b - an item to compare
       * @returns {number} - comparison result
       */
      function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      }

      /**
       * sort helper to sort array elements in descending order
       *
       * @param   {mixed} a - an item to compare
       * @param   {mixed} b - an item to compare
       * @returns {number} - comparison result
       */
      function descending(a, b) {
        return -1 * ascending(a, b);
      }


      /***/
}),

/***/ 898:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Boolean = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'boolean' };
      /**
       * Validates that a value is a boolean.
       */
      exports.Boolean = (0, runtype_1.create)(function (value) { return (typeof value === 'boolean' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, self);


      /***/
}),

/***/ 905:
/***/ (function (module) {

      "use strict";


      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL
          ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
          : baseURL;
      };


      /***/
}),

/***/ 912:
/***/ (function (__unusedmodule, exports) {

      function fixProto(target, prototype) {
        var setPrototypeOf = Object.setPrototypeOf;
        setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
      }
      function fixStack(target, fn) {
        if (fn === void 0) {
          fn = target.constructor;
        }

        var captureStackTrace = Error.captureStackTrace;
        captureStackTrace && captureStackTrace(target, fn);
      }

      var __extends = undefined && undefined.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var CustomError = function (_super) {
        __extends(CustomError, _super);

        function CustomError(message, options) {
          var _newTarget = this.constructor;

          var _this = _super.call(this, message, options) || this;

          Object.defineProperty(_this, 'name', {
            value: _newTarget.name,
            enumerable: false,
            configurable: true
          });
          fixProto(_this, _newTarget.prototype);
          fixStack(_this);
          return _this;
        }

        return CustomError;
      }(Error);

      var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      function customErrorFactory(fn, parent) {
        if (parent === void 0) {
          parent = Error;
        }

        function CustomError() {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!(this instanceof CustomError)) return new (CustomError.bind.apply(CustomError, __spreadArray([void 0], args, false)))();
          parent.apply(this, args);
          Object.defineProperty(this, 'name', {
            value: fn.name || parent.name,
            enumerable: false,
            configurable: true
          });
          fn.apply(this, args);
          fixStack(this, CustomError);
        }

        return Object.defineProperties(CustomError, {
          prototype: {
            value: Object.create(parent.prototype, {
              constructor: {
                value: CustomError,
                writable: true,
                configurable: true
              }
            })
          }
        });
      }

      exports.CustomError = CustomError;
      exports.customErrorFactory = customErrorFactory;
      //# sourceMappingURL=custom-error.js.map


      /***/
}),

/***/ 913:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var utils = __webpack_require__(755);
      var bind = __webpack_require__(107);
      var Axios = __webpack_require__(744);
      var mergeConfig = __webpack_require__(280);
      var defaults = __webpack_require__(189);

      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);

        // Copy axios.prototype to instance
        utils.extend(instance, Axios.prototype, context);

        // Copy context to instance
        utils.extend(instance, context);

        // Factory for creating new instances
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };

        return instance;
      }

      // Create the default instance to be exported
      var axios = createInstance(defaults);

      // Expose Axios class to allow class inheritance
      axios.Axios = Axios;

      // Expose Cancel & CancelToken
      axios.CanceledError = __webpack_require__(948);
      axios.CancelToken = __webpack_require__(914);
      axios.isCancel = __webpack_require__(422);
      axios.VERSION = __webpack_require__(42).version;
      axios.toFormData = __webpack_require__(239);

      // Expose AxiosError class
      axios.AxiosError = __webpack_require__(379);

      // alias for CanceledError for backward compatibility
      axios.Cancel = axios.CanceledError;

      // Expose all/spread
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = __webpack_require__(261);

      // Expose isAxiosError
      axios.isAxiosError = __webpack_require__(195);

      module.exports = axios;

      // Allow use of default import syntax in TypeScript
      module.exports.default = axios;


      /***/
}),

/***/ 914:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var CanceledError = __webpack_require__(948);

      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */
      function CancelToken(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        var resolvePromise;

        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        var token = this;

        // eslint-disable-next-line func-names
        this.promise.then(function (cancel) {
          if (!token._listeners) return;

          var i;
          var l = token._listeners.length;

          for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });

        // eslint-disable-next-line func-names
        this.promise.then = function (onfulfilled) {
          var _resolve;
          // eslint-disable-next-line func-names
          var promise = new Promise(function (resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);

          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };

          return promise;
        };

        executor(function cancel(message) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new CanceledError(message);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };

      /**
       * Subscribe to the cancel signal
       */

      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }

        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };

      /**
       * Unsubscribe from the cancel signal
       */

      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      };

      module.exports = CancelToken;


      /***/
}),

/***/ 916:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _native = _interopRequireDefault(__webpack_require__(887));

      var _rng = _interopRequireDefault(__webpack_require__(372));

      var _stringify = __webpack_require__(719);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }

        options = options || {};

        const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

        if (buf) {
          offset = offset || 0;

          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }

          return buf;
        }

        return (0, _stringify.unsafeStringify)(rnds);
      }

      var _default = v4;
      exports.default = _default;

      /***/
}),

/***/ 917:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      // Type guard to determine if an object has a given key
      var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FAILURE = exports.SUCCESS = exports.enumerableKeysOf = exports.typeOf = exports.hasKey = void 0;
      var result_1 = __webpack_require__(133);
      var show_1 = __webpack_require__(828);
      // If this feature gets implemented, we can use `in` instead: https://github.com/Microsoft/TypeScript/issues/10485
      function hasKey(key, object) {
        return typeof object === 'object' && object !== null && key in object;
      }
      exports.hasKey = hasKey;
      var typeOf = function (value) {
        var _a, _b, _c;
        return typeof value === 'object'
          ? value === null
            ? 'null'
            : Array.isArray(value)
              ? 'array'
              : ((_a = value.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Object'
                ? 'object'
                : (_c = (_b = value.constructor) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : typeof value
          : typeof value;
      };
      exports.typeOf = typeOf;
      var enumerableKeysOf = function (object) {
        return typeof object === 'object' && object !== null
          ? // Objects with a null prototype may not have `propertyIsEnumerable`
          Reflect.ownKeys(object).filter(function (key) { var _a, _b; return (_b = (_a = object.propertyIsEnumerable) === null || _a === void 0 ? void 0 : _a.call(object, key)) !== null && _b !== void 0 ? _b : true; })
          : [];
      };
      exports.enumerableKeysOf = enumerableKeysOf;
      function SUCCESS(value) {
        return { success: true, value: value };
      }
      exports.SUCCESS = SUCCESS;
      exports.FAILURE = Object.assign(function (code, message, details) { return (__assign({ success: false, code: code, message: message }, (details ? { details: details } : {}))); }, {
        TYPE_INCORRECT: function (self, value) {
          var message = "Expected ".concat(self.tag === 'template' ? "string ".concat((0, show_1.default)(self)) : (0, show_1.default)(self), ", but was ").concat((0, exports.typeOf)(value));
          return (0, exports.FAILURE)(result_1.Failcode.TYPE_INCORRECT, message);
        },
        VALUE_INCORRECT: function (name, expected, received) {
          return (0, exports.FAILURE)(result_1.Failcode.VALUE_INCORRECT, "Expected ".concat(name, " ").concat(String(expected), ", but was ").concat(String(received)));
        },
        KEY_INCORRECT: function (self, expected, value) {
          return (0, exports.FAILURE)(result_1.Failcode.KEY_INCORRECT, "Expected ".concat((0, show_1.default)(self), " key to be ").concat((0, show_1.default)(expected), ", but was ").concat((0, exports.typeOf)(value)));
        },
        CONTENT_INCORRECT: function (self, details) {
          var formattedDetails = JSON.stringify(details, null, 2).replace(/^ *null,\n/gm, '');
          var message = "Validation failed:\n".concat(formattedDetails, ".\nObject should match ").concat((0, show_1.default)(self));
          return (0, exports.FAILURE)(result_1.Failcode.CONTENT_INCORRECT, message, details);
        },
        ARGUMENT_INCORRECT: function (message) {
          return (0, exports.FAILURE)(result_1.Failcode.ARGUMENT_INCORRECT, message);
        },
        RETURN_INCORRECT: function (message) {
          return (0, exports.FAILURE)(result_1.Failcode.RETURN_INCORRECT, message);
        },
        CONSTRAINT_FAILED: function (self, message) {
          var info = message ? ": ".concat(message) : '';
          return (0, exports.FAILURE)(result_1.Failcode.CONSTRAINT_FAILED, "Failed constraint check for ".concat((0, show_1.default)(self)).concat(info));
        },
        PROPERTY_MISSING: function (self) {
          var message = "Expected ".concat((0, show_1.default)(self), ", but was missing");
          return (0, exports.FAILURE)(result_1.Failcode.PROPERTY_MISSING, message);
        },
        PROPERTY_PRESENT: function (value) {
          var message = "Expected nothing, but was ".concat((0, exports.typeOf)(value));
          return (0, exports.FAILURE)(result_1.Failcode.PROPERTY_PRESENT, message);
        },
        NOTHING_EXPECTED: function (value) {
          var message = "Expected nothing, but was ".concat((0, exports.typeOf)(value));
          return (0, exports.FAILURE)(result_1.Failcode.NOTHING_EXPECTED, message);
        },
      });


      /***/
}),

/***/ 928:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var CombinedStream = __webpack_require__(547);
      var util = __webpack_require__(669);
      var path = __webpack_require__(622);
      var http = __webpack_require__(605);
      var https = __webpack_require__(211);
      var parseUrl = __webpack_require__(835).parse;
      var fs = __webpack_require__(826);
      var Stream = __webpack_require__(413).Stream;
      var mime = __webpack_require__(779);
      var asynckit = __webpack_require__(334);
      var populate = __webpack_require__(69);

      // Public API
      module.exports = FormData;

      // make it a Stream
      util.inherits(FormData, CombinedStream);

      /**
       * Create readable "multipart/form-data" streams.
       * Can be used to submit forms
       * and file uploads to other web applications.
       *
       * @constructor
       * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
       */
      function FormData(options) {
        if (!(this instanceof FormData)) {
          return new FormData(options);
        }

        this._overheadLength = 0;
        this._valueLength = 0;
        this._valuesToMeasure = [];

        CombinedStream.call(this);

        options = options || {};
        for (var option in options) {
          this[option] = options[option];
        }
      }

      FormData.LINE_BREAK = '\r\n';
      FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

      FormData.prototype.append = function (field, value, options) {

        options = options || {};

        // allow filename as single option
        if (typeof options == 'string') {
          options = { filename: options };
        }

        var append = CombinedStream.prototype.append.bind(this);

        // all that streamy business can't handle numbers
        if (typeof value == 'number') {
          value = '' + value;
        }

        // https://github.com/felixge/node-form-data/issues/38
        if (util.isArray(value)) {
          // Please convert your array into string
          // the way web server expects it
          this._error(new Error('Arrays are not supported.'));
          return;
        }

        var header = this._multiPartHeader(field, value, options);
        var footer = this._multiPartFooter();

        append(header);
        append(value);
        append(footer);

        // pass along options.knownLength
        this._trackLength(header, value, options);
      };

      FormData.prototype._trackLength = function (header, value, options) {
        var valueLength = 0;

        // used w/ getLengthSync(), when length is known.
        // e.g. for streaming directly from a remote server,
        // w/ a known file a size, and not wanting to wait for
        // incoming file to finish to get its size.
        if (options.knownLength != null) {
          valueLength += +options.knownLength;
        } else if (Buffer.isBuffer(value)) {
          valueLength = value.length;
        } else if (typeof value === 'string') {
          valueLength = Buffer.byteLength(value);
        }

        this._valueLength += valueLength;

        // @check why add CRLF? does this account for custom/multiple CRLFs?
        this._overheadLength +=
          Buffer.byteLength(header) +
          FormData.LINE_BREAK.length;

        // empty or either doesn't have path or not an http response or not a stream
        if (!value || (!value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
          return;
        }

        // no need to bother with the length
        if (!options.knownLength) {
          this._valuesToMeasure.push(value);
        }
      };

      FormData.prototype._lengthRetriever = function (value, callback) {

        if (value.hasOwnProperty('fd')) {

          // take read range into a account
          // `end` = Infinity –> read file till the end
          //
          // TODO: Looks like there is bug in Node fs.createReadStream
          // it doesn't respect `end` options without `start` options
          // Fix it when node fixes it.
          // https://github.com/joyent/node/issues/7819
          if (value.end != undefined && value.end != Infinity && value.start != undefined) {

            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0));

            // not that fast snoopy
          } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function (err, stat) {

              var fileSize;

              if (err) {
                callback(err);
                return;
              }

              // update final size based on the range options
              fileSize = stat.size - (value.start ? value.start : 0);
              callback(null, fileSize);
            });
          }

          // or http response
        } else if (value.hasOwnProperty('httpVersion')) {
          callback(null, +value.headers['content-length']);

          // or request stream http://github.com/mikeal/request
        } else if (value.hasOwnProperty('httpModule')) {
          // wait till response come back
          value.on('response', function (response) {
            value.pause();
            callback(null, +response.headers['content-length']);
          });
          value.resume();

          // something else
        } else {
          callback('Unknown stream');
        }
      };

      FormData.prototype._multiPartHeader = function (field, value, options) {
        // custom header specified (as string)?
        // it becomes responsible for boundary
        // (e.g. to handle extra CRLFs on .NET servers)
        if (typeof options.header == 'string') {
          return options.header;
        }

        var contentDisposition = this._getContentDisposition(value, options);
        var contentType = this._getContentType(value, options);

        var contents = '';
        var headers = {
          // add custom disposition as third element or keep it two elements if not
          'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
          // if no content type. allow it to be empty array
          'Content-Type': [].concat(contentType || [])
        };

        // allow custom headers.
        if (typeof options.header == 'object') {
          populate(headers, options.header);
        }

        var header;
        for (var prop in headers) {
          if (!headers.hasOwnProperty(prop)) continue;
          header = headers[prop];

          // skip nullish headers.
          if (header == null) {
            continue;
          }

          // convert all headers to arrays.
          if (!Array.isArray(header)) {
            header = [header];
          }

          // add non-empty headers.
          if (header.length) {
            contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
          }
        }

        return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
      };

      FormData.prototype._getContentDisposition = function (value, options) {

        var filename
          , contentDisposition
          ;

        if (typeof options.filepath === 'string') {
          // custom filepath for relative paths
          filename = path.normalize(options.filepath).replace(/\\/g, '/');
        } else if (options.filename || value.name || value.path) {
          // custom filename take precedence
          // formidable and the browser add a name property
          // fs- and request- streams have path property
          filename = path.basename(options.filename || value.name || value.path);
        } else if (value.readable && value.hasOwnProperty('httpVersion')) {
          // or try http response
          filename = path.basename(value.client._httpMessage.path || '');
        }

        if (filename) {
          contentDisposition = 'filename="' + filename + '"';
        }

        return contentDisposition;
      };

      FormData.prototype._getContentType = function (value, options) {

        // use custom content-type above all
        var contentType = options.contentType;

        // or try `name` from formidable, browser
        if (!contentType && value.name) {
          contentType = mime.lookup(value.name);
        }

        // or try `path` from fs-, request- streams
        if (!contentType && value.path) {
          contentType = mime.lookup(value.path);
        }

        // or if it's http-reponse
        if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
          contentType = value.headers['content-type'];
        }

        // or guess it from the filepath or filename
        if (!contentType && (options.filepath || options.filename)) {
          contentType = mime.lookup(options.filepath || options.filename);
        }

        // fallback to the default content type if `value` is not simple value
        if (!contentType && typeof value == 'object') {
          contentType = FormData.DEFAULT_CONTENT_TYPE;
        }

        return contentType;
      };

      FormData.prototype._multiPartFooter = function () {
        return function (next) {
          var footer = FormData.LINE_BREAK;

          var lastPart = (this._streams.length === 0);
          if (lastPart) {
            footer += this._lastBoundary();
          }

          next(footer);
        }.bind(this);
      };

      FormData.prototype._lastBoundary = function () {
        return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
      };

      FormData.prototype.getHeaders = function (userHeaders) {
        var header;
        var formHeaders = {
          'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
        };

        for (header in userHeaders) {
          if (userHeaders.hasOwnProperty(header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
          }
        }

        return formHeaders;
      };

      FormData.prototype.setBoundary = function (boundary) {
        this._boundary = boundary;
      };

      FormData.prototype.getBoundary = function () {
        if (!this._boundary) {
          this._generateBoundary();
        }

        return this._boundary;
      };

      FormData.prototype.getBuffer = function () {
        var dataBuffer = new Buffer.alloc(0);
        var boundary = this.getBoundary();

        // Create the form content. Add Line breaks to the end of data.
        for (var i = 0, len = this._streams.length; i < len; i++) {
          if (typeof this._streams[i] !== 'function') {

            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
              dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
            } else {
              dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
            }

            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
              dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData.LINE_BREAK)]);
            }
          }
        }

        // Add the footer and return the Buffer object.
        return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
      };

      FormData.prototype._generateBoundary = function () {
        // This generates a 50 character boundary similar to those used by Firefox.
        // They are optimized for boyer-moore parsing.
        var boundary = '--------------------------';
        for (var i = 0; i < 24; i++) {
          boundary += Math.floor(Math.random() * 10).toString(16);
        }

        this._boundary = boundary;
      };

      // Note: getLengthSync DOESN'T calculate streams length
      // As workaround one can calculate file size manually
      // and add it as knownLength option
      FormData.prototype.getLengthSync = function () {
        var knownLength = this._overheadLength + this._valueLength;

        // Don't get confused, there are 3 "internal" streams for each keyval pair
        // so it basically checks if there is any value added to the form
        if (this._streams.length) {
          knownLength += this._lastBoundary().length;
        }

        // https://github.com/form-data/form-data/issues/40
        if (!this.hasKnownLength()) {
          // Some async length retrievers are present
          // therefore synchronous length calculation is false.
          // Please use getLength(callback) to get proper length
          this._error(new Error('Cannot calculate proper length in synchronous way.'));
        }

        return knownLength;
      };

      // Public API to check if length of added values is known
      // https://github.com/form-data/form-data/issues/196
      // https://github.com/form-data/form-data/issues/262
      FormData.prototype.hasKnownLength = function () {
        var hasKnownLength = true;

        if (this._valuesToMeasure.length) {
          hasKnownLength = false;
        }

        return hasKnownLength;
      };

      FormData.prototype.getLength = function (cb) {
        var knownLength = this._overheadLength + this._valueLength;

        if (this._streams.length) {
          knownLength += this._lastBoundary().length;
        }

        if (!this._valuesToMeasure.length) {
          process.nextTick(cb.bind(this, null, knownLength));
          return;
        }

        asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function (err, values) {
          if (err) {
            cb(err);
            return;
          }

          values.forEach(function (length) {
            knownLength += length;
          });

          cb(null, knownLength);
        });
      };

      FormData.prototype.submit = function (params, cb) {
        var request
          , options
          , defaults = { method: 'post' }
          ;

        // parse provided url if it's string
        // or treat it as options object
        if (typeof params == 'string') {

          params = parseUrl(params);
          options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
          }, defaults);

          // use custom params
        } else {

          options = populate(params, defaults);
          // if no port provided use default one
          if (!options.port) {
            options.port = options.protocol == 'https:' ? 443 : 80;
          }
        }

        // put that good code in getHeaders to some use
        options.headers = this.getHeaders(params.headers);

        // https if specified, fallback to http in any other case
        if (options.protocol == 'https:') {
          request = https.request(options);
        } else {
          request = http.request(options);
        }

        // get content length and fire away
        this.getLength(function (err, length) {
          if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
          }

          // add content length
          if (length) {
            request.setHeader('Content-Length', length);
          }

          this.pipe(request);
          if (cb) {
            var onResponse;

            var callback = function (error, responce) {
              request.removeListener('error', callback);
              request.removeListener('response', onResponse);

              return cb.call(this, error, responce);
            };

            onResponse = callback.bind(this, null);

            request.on('error', callback);
            request.on('response', onResponse);
          }
        }.bind(this));

        return request;
      };

      FormData.prototype._error = function (err) {
        if (!this.error) {
          this.error = err;
          this.pause();
          this.emit('error', err);
        }
      };

      FormData.prototype.toString = function () {
        return '[object FormData]';
      };


      /***/
}),

/***/ 936:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var _typeof = __webpack_require__(431)["default"];
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
}),

/***/ 939:
/***/ (function (module, __unusedexports, __webpack_require__) {

      var abort = __webpack_require__(566)
        , async = __webpack_require__(751)
        ;

      // API
      module.exports = terminator;

      /**
       * Terminates jobs in the attached state context
       *
       * @this  AsyncKitState#
       * @param {function} callback - final callback to invoke after termination
       */
      function terminator(callback) {
        if (!Object.keys(this.jobs).length) {
          return;
        }

        // fast forward iteration index
        this.index = this.size;

        // abort jobs
        abort(this);

        // send back results we have so far
        async(callback)(null, this.results);
      }


      /***/
}),

/***/ 944:
/***/ (function (module) {

      module.exports = eval("require")("debug");


      /***/
}),

/***/ 947:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;
      var tslib_1 = __webpack_require__(259);
      var pascal_case_1 = __webpack_require__(857);
      function camelCaseTransform(input, index) {
        if (index === 0)
          return input.toLowerCase();
        return pascal_case_1.pascalCaseTransform(input, index);
      }
      exports.camelCaseTransform = camelCaseTransform;
      function camelCaseTransformMerge(input, index) {
        if (index === 0)
          return input.toLowerCase();
        return pascal_case_1.pascalCaseTransformMerge(input);
      }
      exports.camelCaseTransformMerge = camelCaseTransformMerge;
      function camelCase(input, options) {
        if (options === void 0) { options = {}; }
        return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));
      }
      exports.camelCase = camelCase;
      //# sourceMappingURL=index.js.map

      /***/
}),

/***/ 948:
/***/ (function (module, __unusedexports, __webpack_require__) {

      "use strict";


      var AxiosError = __webpack_require__(379);
      var utils = __webpack_require__(755);

      /**
       * A `CanceledError` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */
      function CanceledError(message) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
        this.name = 'CanceledError';
      }

      utils.inherits(CanceledError, AxiosError, {
        __CANCEL__: true
      });

      module.exports = CanceledError;


      /***/
}),

/***/ 951:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Guard = exports.Constraint = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var unknown_1 = __webpack_require__(460);
      function Constraint(underlying, constraint, options) {
        var name = options && options.name;
        var args = options && options.args;
        var self = {
          tag: 'constraint',
          underlying: underlying,
          constraint: constraint,
          name: name,
          args: args,
        };
        return (0, runtype_1.create)(function (value) {
          var result = underlying.validate(value);
          if (!result.success)
            return result;
          var message = constraint(result.value);
          if (typeof message === 'string')
            return util_1.FAILURE.CONSTRAINT_FAILED(self, message);
          else if (!message)
            return util_1.FAILURE.CONSTRAINT_FAILED(self);
          return (0, util_1.SUCCESS)(result.value);
        }, self);
      }
      exports.Constraint = Constraint;
      var Guard = function (guard, options) { return unknown_1.Unknown.withGuard(guard, options); };
      exports.Guard = Guard;


      /***/
}),

/***/ 955:
/***/ (function (__unusedmodule, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.String = void 0;
      var runtype_1 = __webpack_require__(861);
      var util_1 = __webpack_require__(917);
      var self = { tag: 'string' };
      /**
       * Validates that a value is a string.
       */
      exports.String = (0, runtype_1.create)(function (value) { return (typeof value === 'string' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value)); }, self);


      /***/
}),

/***/ 967:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
        };
        return function (d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ValidationError = void 0;
      var ValidationError = /** @class */ (function (_super) {
        __extends(ValidationError, _super);
        function ValidationError(failure) {
          var _this = _super.call(this, failure.message) || this;
          _this.name = 'ValidationError';
          _this.code = failure.code;
          if (failure.details !== undefined)
            _this.details = failure.details;
          Object.setPrototypeOf(_this, ValidationError.prototype);
          return _this;
        }
        return ValidationError;
      }(Error));
      exports.ValidationError = ValidationError;


      /***/
}),

/***/ 988:
/***/ (function (__unusedmodule, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });


      /***/
})

  /******/
},
/******/ function (__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function () {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function (exports) {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
        /******/
};
      /******/
}();
/******/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function () {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function (module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function getDefault() { return module['default']; } :
/******/ 				function getModuleExports() { return module; };
/******/ 			__webpack_require__.d(getter, 'a', getter);
/******/ 			return getter;
        /******/
};
      /******/
}();
/******/
/******/ 	/* webpack/runtime/define property getter */
/******/ 	!function () {
/******/ 		// define getter function for harmony exports
/******/ 		var hasOwnProperty = Object.prototype.hasOwnProperty;
/******/ 		__webpack_require__.d = function (exports, name, getter) {
/******/ 			if (!hasOwnProperty.call(exports, name)) {
/******/ 				Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
}
        /******/
};
      /******/
}();
    /******/
    /******/
}
);