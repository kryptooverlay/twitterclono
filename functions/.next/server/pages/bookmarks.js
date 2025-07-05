'use strict';
(() => {
  var exports = {};
  exports.id = 664;
  exports.ids = [664];
  exports.modules = {
    /***/ 8627: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ Bookmarks
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
            /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(6197);
            /* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6201);
            /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(1492);
            /* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(2108);
            /* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(3040);
            /* harmony import */ var _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(3639);
            /* harmony import */ var _lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(2322);
            /* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(7359);
            /* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(5342);
            /* harmony import */ var _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(3238);
            /* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(4415);
            /* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(585);
            /* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(3258);
            /* harmony import */ var _components_home_main_container__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(722);
            /* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(9099);
            /* harmony import */ var _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_17__ =
              __webpack_require__(9253);
            /* harmony import */ var _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_18__ =
              __webpack_require__(7293);
            /* harmony import */ var _components_tweet_stats_empty__WEBPACK_IMPORTED_MODULE_19__ =
              __webpack_require__(6781);
            /* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_20__ =
              __webpack_require__(4685);
            /* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_21__ =
              __webpack_require__(3276);
            /* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_22__ =
              __webpack_require__(4266);
            /* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_23__ =
              __webpack_require__(9570);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                framer_motion__WEBPACK_IMPORTED_MODULE_2__,
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_4__,
                _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__,
                _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_7__,
                _lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_8__,
                _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_9__,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__,
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_11__,
                _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_12__,
                _components_home_main_header__WEBPACK_IMPORTED_MODULE_14__,
                _components_modal_modal__WEBPACK_IMPORTED_MODULE_16__,
                _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_17__,
                _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_18__
              ]);
            [
              framer_motion__WEBPACK_IMPORTED_MODULE_2__,
              react_hot_toast__WEBPACK_IMPORTED_MODULE_3__,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_4__,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__,
              _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_7__,
              _lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_8__,
              _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_9__,
              _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__,
              _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_11__,
              _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_12__,
              _components_home_main_header__WEBPACK_IMPORTED_MODULE_14__,
              _components_modal_modal__WEBPACK_IMPORTED_MODULE_16__,
              _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_17__,
              _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_18__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function Bookmarks() {
              const { user } = (0,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__ /* .useAuth */.aC)();
              const { open, openModal, closeModal } = (0,
              _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_6__ /* .useModal */.d)();
              const userId = user?.id;
              const { data: bookmarksRef, loading: bookmarksRefLoading } = (0,
              _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_7__ /* .useCollection */.K)(
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(
                  (0,
                  _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__ /* .userBookmarksCollection */.we)(
                    userId
                  ),
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(
                    'createdAt',
                    'desc'
                  )
                ),
                {
                  allowNull: true
                }
              );
              const tweetIds = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => bookmarksRef?.map(({ id }) => id) ?? [],
                [bookmarksRef]
              );
              const { data: tweetData, loading: tweetLoading } = (0,
              _lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_8__ /* .useArrayDocument */.z)(
                tweetIds,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__ /* .tweetsCollection */.VV,
                {
                  includeUser: true
                }
              );
              const handleClear = async () => {
                await (0,
                _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_9__ /* .clearAllBookmarks */.as)(
                  userId
                );
                closeModal();
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                  'Successfully cleared all bookmarks'
                );
              };
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _components_home_main_container__WEBPACK_IMPORTED_MODULE_15__ /* .MainContainer */.t,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_common_seo__WEBPACK_IMPORTED_MODULE_13__ /* .SEO */.H,
                      {
                        title: 'Bookmarks / Twitter'
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_modal_modal__WEBPACK_IMPORTED_MODULE_16__ /* .Modal */.u_,
                      {
                        modalClassName:
                          'max-w-xs bg-main-background w-full p-8 rounded-2xl',
                        open: open,
                        closeModal: closeModal,
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_17__ /* .ActionModal */.W,
                            {
                              title: 'Clear all Bookmarks?',
                              description:
                                'This can’t be undone and you’ll remove all Tweets you’ve added to your Bookmarks.',
                              mainBtnClassName:
                                'bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab focus-visible:bg-accent-red/90',
                              mainBtnLabel: 'Clear',
                              action: handleClear,
                              closeModal: closeModal
                            }
                          )
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _components_home_main_header__WEBPACK_IMPORTED_MODULE_14__ /* .MainHeader */.c,
                      {
                        className: 'flex items-center justify-between',
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: '-mb-1 flex flex-col',
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'h2',
                                  {
                                    className: '-mt-1 text-xl font-bold',
                                    children: 'Bookmarks'
                                  }
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'p',
                                  {
                                    className:
                                      'text-xs text-light-secondary dark:text-dark-secondary',
                                    children: ['@', user?.username]
                                  }
                                )
                              ]
                            }
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            _components_ui_button__WEBPACK_IMPORTED_MODULE_20__ /* .Button */.z,
                            {
                              className:
                                'dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                              onClick: openModal,
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_22__ /* .HeroIcon */.e,
                                  {
                                    className: 'h-5 w-5',
                                    iconName: 'ArchiveBoxXMarkIcon'
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_21__ /* .ToolTip */.e,
                                  {
                                    className:
                                      '!-translate-x-20 translate-y-3 md:-translate-x-1/2',
                                    tip: 'Clear bookmarks'
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'section',
                      {
                        className: 'mt-0.5',
                        children:
                          bookmarksRefLoading || tweetLoading
                            ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                _components_ui_loading__WEBPACK_IMPORTED_MODULE_23__ /* .Loading */.g,
                                {
                                  className: 'mt-5'
                                }
                              )
                            : !bookmarksRef
                            ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                _components_tweet_stats_empty__WEBPACK_IMPORTED_MODULE_19__ /* .StatsEmpty */.Q,
                                {
                                  title: 'Save Tweets for later',
                                  description:
                                    'Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.',
                                  imageData: {
                                    src: '/assets/no-bookmarks.png',
                                    alt: 'No bookmarks'
                                  }
                                }
                              )
                            : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence,
                                {
                                  mode: 'popLayout',
                                  children: tweetData?.map((tweet) =>
                                    /*#__PURE__*/ (0,
                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                                      _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_18__ /* .Tweet */.t,
                                      {
                                        ...tweet,
                                        key: tweet.id
                                      }
                                    )
                                  )
                                }
                              )
                      }
                    )
                  ]
                }
              );
            }
            Bookmarks.getLayout = (page) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_11__ /* .ProtectedLayout */.IP,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_12__ /* .MainLayout */.Z,
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_11__ /* .HomeLayout */.Os,
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
    [675, 676, 63, 108, 655, 585, 246, 371, 779, 891],
    () => __webpack_exec__(8627)
  );
  module.exports = __webpack_exports__;
})();
