'use strict';
(() => {
  var exports = {};
  exports.id = 197;
  exports.ids = [197];
  exports.modules = {
    /***/ 9622: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ NotFound
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(5566);
            /* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_error__WEBPACK_IMPORTED_MODULE_1__
              );
            /* harmony import */ var _lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(5655);
            /* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(585);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__
              ]);
            _lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            function NotFound() {
              const { theme } = (0,
              _lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ /* .useTheme */.Fg)();
              const isDarkMode = ['dim', 'dark'].includes(theme);
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_common_seo__WEBPACK_IMPORTED_MODULE_3__ /* .SEO */.H,
                      {
                        title: 'Page not found / Twitter',
                        description:
                          'Sorry we couldn’t find the page you were looking for.',
                        image: '/404.png'
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      next_error__WEBPACK_IMPORTED_MODULE_1___default(),
                      {
                        statusCode: 404,
                        withDarkMode: isDarkMode
                      }
                    )
                  ]
                }
              );
            }

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 5566: /***/ (module) => {
      module.exports = require('next/error');

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

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime');

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
    }
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [108, 655, 585], () =>
    __webpack_exec__(9622)
  );
  module.exports = __webpack_exports__;
})();
