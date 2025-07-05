'use strict';
(() => {
  var exports = {};
  exports.id = 563;
  exports.ids = [563];
  exports.modules = {
    /***/ 682: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ People
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6689);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_1__
              );
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1853);
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_router__WEBPACK_IMPORTED_MODULE_2__
              );
            /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6197);
            /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(1492);
            /* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(2108);
            /* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(5342);
            /* harmony import */ var _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(4089);
            /* harmony import */ var _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(3238);
            /* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(4415);
            /* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(585);
            /* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(3258);
            /* harmony import */ var _components_home_main_container__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(722);
            /* harmony import */ var _components_user_user_card__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(7238);
            /* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(9570);
            /* harmony import */ var _components_ui_error__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(6028);
            /* harmony import */ var _components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(254);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                framer_motion__WEBPACK_IMPORTED_MODULE_3__,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_4__,
                _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__,
                _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__,
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__,
                _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__,
                _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__,
                _components_user_user_card__WEBPACK_IMPORTED_MODULE_13__,
                _components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_16__
              ]);
            [
              framer_motion__WEBPACK_IMPORTED_MODULE_3__,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_4__,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__,
              _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__,
              _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__,
              _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__,
              _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__,
              _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__,
              _components_user_user_card__WEBPACK_IMPORTED_MODULE_13__,
              _components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_16__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function People() {
              const { user } = (0,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__ /* .useAuth */.aC)();
              const { data, loading, LoadMore } = (0,
              _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ /* .useInfiniteScroll */.M)(
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__ /* .usersCollection */.W$,
                [
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(
                    'id',
                    '!=',
                    user?.id
                  )
                ],
                {
                  allowNull: true,
                  preserve: true
                },
                {
                  marginBottom: 500
                }
              );
              const { back } = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _components_home_main_container__WEBPACK_IMPORTED_MODULE_12__ /* .MainContainer */.t,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_common_seo__WEBPACK_IMPORTED_MODULE_10__ /* .SEO */.H,
                      {
                        title: 'People / Twitter'
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__ /* .MainHeader */.c,
                      {
                        useActionButton: true,
                        title: 'People',
                        action: back
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'section',
                      {
                        children: loading
                          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_loading__WEBPACK_IMPORTED_MODULE_14__ /* .Loading */.g,
                              {
                                className: 'mt-5'
                              }
                            )
                          : !data
                          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_error__WEBPACK_IMPORTED_MODULE_15__ /* .Error */.j,
                              {
                                message: 'Something went wrong'
                              }
                            )
                          : /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                              {
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    framer_motion__WEBPACK_IMPORTED_MODULE_3__
                                      .motion.div,
                                    {
                                      className: 'mt-0.5',
                                      ..._components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_16__ /* .variants */.o,
                                      children: data?.map((userData) =>
                                        /*#__PURE__*/ (0,
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                                          _components_user_user_card__WEBPACK_IMPORTED_MODULE_13__ /* .UserCard */.O,
                                          {
                                            ...userData,
                                            key: userData.id,
                                            follow: true
                                          }
                                        )
                                      )
                                    }
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    LoadMore,
                                    {}
                                  )
                                ]
                              }
                            )
                      }
                    )
                  ]
                }
              );
            }
            People.getLayout = (page) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__ /* .ProtectedLayout */.IP,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__ /* .MainLayout */.Z,
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__ /* .PeopleLayout */.vK,
                            {
                              children: page
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
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [675, 676, 63, 108, 655, 585, 246, 371, 89],
    () => __webpack_exec__(682)
  );
  module.exports = __webpack_exports__;
})();
