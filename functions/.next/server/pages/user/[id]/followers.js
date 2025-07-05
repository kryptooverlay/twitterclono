'use strict';
(() => {
  var exports = {};
  exports.id = 913;
  exports.ids = [913];
  exports.modules = {
    /***/ 4810: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ UserFollowers
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(3238);
            /* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(4415);
            /* harmony import */ var _components_layout_user_data_layout__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6993);
            /* harmony import */ var _components_layout_user_follow_layout__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(8893);
            /* harmony import */ var _components_user_user_follow__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(6809);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_1__,
                _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__,
                _components_layout_user_data_layout__WEBPACK_IMPORTED_MODULE_3__,
                _components_layout_user_follow_layout__WEBPACK_IMPORTED_MODULE_4__,
                _components_user_user_follow__WEBPACK_IMPORTED_MODULE_5__
              ]);
            [
              _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_1__,
              _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__,
              _components_layout_user_data_layout__WEBPACK_IMPORTED_MODULE_3__,
              _components_layout_user_follow_layout__WEBPACK_IMPORTED_MODULE_4__,
              _components_user_user_follow__WEBPACK_IMPORTED_MODULE_5__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function UserFollowers() {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_user_user_follow__WEBPACK_IMPORTED_MODULE_5__ /* .UserFollow */.J,
                {
                  type: 'followers'
                }
              );
            }
            UserFollowers.getLayout = (page) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_1__ /* .ProtectedLayout */.IP,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__ /* .MainLayout */.Z,
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_1__ /* .UserLayout */.rf,
                            {
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_layout_user_data_layout__WEBPACK_IMPORTED_MODULE_3__ /* .UserDataLayout */.I,
                                  {
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        _components_layout_user_follow_layout__WEBPACK_IMPORTED_MODULE_4__ /* .UserFollowLayout */.$,
                                        {
                                          children: page
                                        }
                                      )
                                  }
                                )
                            }
                          )
                      }
                    )
                }
              );

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 2135: /***/ (module) => {
      module.exports = require('@heroicons/react/24/outline');

      /***/
    },

    /***/ 8802: /***/ (module) => {
      module.exports = require('@heroicons/react/24/solid');

      /***/
    },

    /***/ 8103: /***/ (module) => {
      module.exports = require('clsx');

      /***/
    },

    /***/ 3280: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/app-router-context.js');

      /***/
    },

    /***/ 2796: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/head-manager-context.js');

      /***/
    },

    /***/ 4957: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/head.js');

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

      /***/
    },

    /***/ 744: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/image-config-context.js');

      /***/
    },

    /***/ 5843: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/image-config.js');

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 8020: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/mitt.js');

      /***/
    },

    /***/ 4406: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/page-path/denormalize-page-path.js');

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 1751: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js');

      /***/
    },

    /***/ 6220: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/compare-states.js');

      /***/
    },

    /***/ 299: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-next-pathname-info.js');

      /***/
    },

    /***/ 3938: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js');

      /***/
    },

    /***/ 9565: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js');

      /***/
    },

    /***/ 5789: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-next-pathname-info.js');

      /***/
    },

    /***/ 1897: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-bot.js');

      /***/
    },

    /***/ 1428: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js');

      /***/
    },

    /***/ 8854: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js');

      /***/
    },

    /***/ 1292: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js');

      /***/
    },

    /***/ 4567: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/path-has-prefix.js');

      /***/
    },

    /***/ 979: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js');

      /***/
    },

    /***/ 3297: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js');

      /***/
    },

    /***/ 6052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js');

      /***/
    },

    /***/ 4226: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js');

      /***/
    },

    /***/ 5052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js');

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head');

      /***/
    },

    /***/ 1853: /***/ (module) => {
      module.exports = require('next/router');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },

    /***/ 649: /***/ (module) => {
      module.exports = require('react-textarea-autosize');

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime');

      /***/
    },

    /***/ 1185: /***/ (module) => {
      module.exports = import('@headlessui/react');

      /***/
    },

    /***/ 3745: /***/ (module) => {
      module.exports = import('firebase/app');

      /***/
    },

    /***/ 401: /***/ (module) => {
      module.exports = import('firebase/auth');

      /***/
    },

    /***/ 1492: /***/ (module) => {
      module.exports = import('firebase/firestore');

      /***/
    },

    /***/ 8937: /***/ (module) => {
      module.exports = import('firebase/functions');

      /***/
    },

    /***/ 3392: /***/ (module) => {
      module.exports = import('firebase/storage');

      /***/
    },

    /***/ 6197: /***/ (module) => {
      module.exports = import('framer-motion');

      /***/
    },

    /***/ 6201: /***/ (module) => {
      module.exports = import('react-hot-toast');

      /***/
    },

    /***/ 5941: /***/ (module) => {
      module.exports = import('swr');

      /***/
    }
  };
  // load runtime
  var __webpack_require__ = require('../../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [675, 676, 63, 108, 655, 585, 246, 371, 779, 994, 928],
    () => __webpack_exec__(4810)
  );
  module.exports = __webpack_exports__;
})();
