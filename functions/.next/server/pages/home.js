'use strict';
(() => {
  var exports = {};
  exports.id = 229;
  exports.ids = [229];
  exports.modules = {
    /***/ 1119: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ f: () => /* binding */ UpdateUsername
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
            /* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(6201);
            /* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(7359);
            /* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(2108);
            /* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(3040);
            /* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(3521);
            /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(6269);
            /* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(4685);
            /* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(4266);
            /* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(3276);
            /* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(9099);
            /* harmony import */ var _components_modal_username_modal__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(3440);
            /* harmony import */ var _components_input_input_field__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(2050);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__,
                _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__,
                _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__,
                _components_modal_modal__WEBPACK_IMPORTED_MODULE_10__,
                _components_modal_username_modal__WEBPACK_IMPORTED_MODULE_11__
              ]);
            [
              react_hot_toast__WEBPACK_IMPORTED_MODULE_2__,
              _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__,
              _components_modal_modal__WEBPACK_IMPORTED_MODULE_10__,
              _components_modal_username_modal__WEBPACK_IMPORTED_MODULE_11__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;
            /* eslint-disable react-hooks/exhaustive-deps */

            function UpdateUsername() {
              const { 0: alreadySet, 1: setAlreadySet } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
              const { 0: available, 1: setAvailable } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
              const { 0: loading, 1: setLoading } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
              const { 0: visited, 1: setVisited } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
              const { 0: searching, 1: setSearching } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
              const { 0: inputValue, 1: setInputValue } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
              const { 0: errorMessage, 1: setErrorMessage } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
              const { user } = (0,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__ /* .useAuth */.aC)();
              const { open, openModal, closeModal } = (0,
              _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ /* .useModal */.d)();
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                const checkAvailability = async (value) => {
                  setSearching(true);
                  const empty = await (0,
                  _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ /* .checkUsernameAvailability */.EJ)(
                    value
                  );
                  if (empty) setAvailable(true);
                  else {
                    setAvailable(false);
                    setErrorMessage(
                      'This username has been taken. Please choose another.'
                    );
                  }
                  setSearching(false);
                };
                if (!visited && inputValue.length > 0) setVisited(true);
                if (visited) {
                  if (errorMessage) setErrorMessage('');
                  const error = (0,
                  _lib_validation__WEBPACK_IMPORTED_MODULE_6__ /* .isValidUsername */.rh)(
                    user?.username,
                    inputValue
                  );
                  if (error) {
                    setAvailable(false);
                    setErrorMessage(error);
                  } else void checkAvailability(inputValue);
                }
              }, [inputValue]);
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                if (!user?.updatedAt) openModal();
                else setAlreadySet(true);
              }, []);
              const changeUsername = async (e) => {
                e.preventDefault();
                if (!available) return;
                if (searching) return;
                setLoading(true);
                await (0,
                _lib_utils__WEBPACK_IMPORTED_MODULE_13__ /* .sleep */._v)(500);
                await (0,
                _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ /* .updateUsername */._S)(
                  user?.id,
                  inputValue
                );
                closeModal();
                setLoading(false);
                setInputValue('');
                setVisited(false);
                setAvailable(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(
                  'Username updated successfully'
                );
              };
              const cancelUpdateUsername = () => {
                closeModal();
                if (!alreadySet)
                  void (0,
                  _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ /* .updateUsername */._S)(
                    user?.id
                  );
              };
              const handleChange = ({ target: { value } }) =>
                setInputValue(value);
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_modal_modal__WEBPACK_IMPORTED_MODULE_10__ /* .Modal */.u_,
                      {
                        modalClassName:
                          'flex flex-col gap-6 max-w-xl bg-main-background w-full p-8 rounded-2xl h-[576px]',
                        open: open,
                        closeModal: cancelUpdateUsername,
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_modal_username_modal__WEBPACK_IMPORTED_MODULE_11__ /* .UsernameModal */.t,
                            {
                              loading: loading,
                              available: available,
                              alreadySet: alreadySet,
                              changeUsername: changeUsername,
                              cancelUpdateUsername: cancelUpdateUsername,
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_input_input_field__WEBPACK_IMPORTED_MODULE_12__ /* .InputField */.U,
                                  {
                                    label: 'Username',
                                    inputId: 'username',
                                    inputValue: inputValue,
                                    errorMessage: errorMessage,
                                    handleChange: handleChange
                                  }
                                )
                            }
                          )
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ /* .Button */.z,
                      {
                        className:
                          'dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                        onClick: openModal,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_8__ /* .HeroIcon */.e,
                            {
                              className: 'h-5 w-5',
                              iconName: 'SparklesIcon'
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__ /* .ToolTip */.e,
                            {
                              tip: 'Top tweets'
                            }
                          )
                        ]
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

    /***/ 3440: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ t: () => /* binding */ UsernameModal
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(1185);
            /* harmony import */ var _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(2365);
            /* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(4685);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _headlessui_react__WEBPACK_IMPORTED_MODULE_1__
              ]);
            _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            const usernameModalData = [
              {
                title: 'What should we call you?',
                description:
                  'Your @username is unique. You can always change it later.',
                cancelLabel: 'Skip'
              },
              {
                title: 'Change your username?',
                description:
                  'Your @username is unique. You can always change it here again.',
                cancelLabel: 'Cancel'
              }
            ];
            function UsernameModal({
              loading,
              children,
              available,
              alreadySet,
              changeUsername,
              cancelUpdateUsername
            }) {
              const { title, description, cancelLabel } =
                usernameModalData[+alreadySet];
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('form', {
                className: 'flex h-full flex-col justify-between',
                onSubmit: changeUsername,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'flex flex-col gap-6',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col gap-4',
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'i',
                              {
                                className: 'mx-auto',
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_2__ /* .CustomIcon */.d,
                                    {
                                      className: 'h-10 w-10',
                                      iconName: 'TwitterIcon'
                                    }
                                  )
                              }
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex flex-col gap-2',
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _headlessui_react__WEBPACK_IMPORTED_MODULE_1__
                                      .Dialog.Title,
                                    {
                                      className:
                                        'text-2xl font-bold xs:text-3xl sm:text-4xl',
                                      children: title
                                    }
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _headlessui_react__WEBPACK_IMPORTED_MODULE_1__
                                      .Dialog.Description,
                                    {
                                      className:
                                        'text-light-secondary dark:text-dark-secondary',
                                      children: description
                                    }
                                  )
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      children
                    ]
                  }),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'flex flex-col gap-3 inner:py-2 inner:font-bold',
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ /* .Button */.z,
                        {
                          className:
                            'bg-light-primary text-white transition focus-visible:bg-light-primary/90 enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80 dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90 dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75',
                          type: 'submit',
                          loading: loading,
                          disabled: !available,
                          children: 'Set username'
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ /* .Button */.z,
                        {
                          className:
                            'border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 dark:active:bg-light-border/20',
                          onClick: cancelUpdateUsername,
                          children: cancelLabel
                        }
                      )
                    ]
                  })
                ]
              });
            }

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 1647: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ Home
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
            /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(1492);
            /* harmony import */ var _lib_context_window_context__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(6625);
            /* harmony import */ var _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(4089);
            /* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(5342);
            /* harmony import */ var _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(3238);
            /* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(4415);
            /* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(585);
            /* harmony import */ var _components_home_main_container__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(722);
            /* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(7277);
            /* harmony import */ var _components_home_update_username__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(1119);
            /* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(3258);
            /* harmony import */ var _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(7293);
            /* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(9570);
            /* harmony import */ var _components_ui_error__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(6028);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                framer_motion__WEBPACK_IMPORTED_MODULE_2__,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_3__,
                _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__,
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_7__,
                _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_8__,
                _components_input_input__WEBPACK_IMPORTED_MODULE_11__,
                _components_home_update_username__WEBPACK_IMPORTED_MODULE_12__,
                _components_home_main_header__WEBPACK_IMPORTED_MODULE_13__,
                _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_14__
              ]);
            [
              framer_motion__WEBPACK_IMPORTED_MODULE_2__,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_3__,
              _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__,
              _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__,
              _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_7__,
              _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_8__,
              _components_input_input__WEBPACK_IMPORTED_MODULE_11__,
              _components_home_update_username__WEBPACK_IMPORTED_MODULE_12__,
              _components_home_main_header__WEBPACK_IMPORTED_MODULE_13__,
              _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_14__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function Home() {
              const { isMobile } = (0,
              _lib_context_window_context__WEBPACK_IMPORTED_MODULE_4__ /* .useWindow */.zY)();
              const { data, loading, LoadMore } = (0,
              _lib_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ /* .useInfiniteScroll */.M)(
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_6__ /* .tweetsCollection */.VV,
                [
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(
                    'parent',
                    '==',
                    null
                  ),
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(
                    'createdAt',
                    'desc'
                  )
                ],
                {
                  includeUser: true,
                  allowNull: true,
                  preserve: true
                }
              );
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _components_home_main_container__WEBPACK_IMPORTED_MODULE_10__ /* .MainContainer */.t,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_common_seo__WEBPACK_IMPORTED_MODULE_9__ /* .SEO */.H,
                      {
                        title: 'Home / Twitter'
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_home_main_header__WEBPACK_IMPORTED_MODULE_13__ /* .MainHeader */.c,
                      {
                        useMobileSidebar: true,
                        title: 'Home',
                        className: 'flex items-center justify-between',
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_home_update_username__WEBPACK_IMPORTED_MODULE_12__ /* .UpdateUsername */.f,
                            {}
                          )
                      }
                    ),
                    !isMobile &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        _components_input_input__WEBPACK_IMPORTED_MODULE_11__ /* .Input */.I,
                        {}
                      ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'section',
                      {
                        className: 'mt-0.5 xs:mt-0',
                        children: loading
                          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_loading__WEBPACK_IMPORTED_MODULE_15__ /* .Loading */.g,
                              {
                                className: 'mt-5'
                              }
                            )
                          : !data
                          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_error__WEBPACK_IMPORTED_MODULE_16__ /* .Error */.j,
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
                                    framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence,
                                    {
                                      mode: 'popLayout',
                                      children: data.map((tweet) =>
                                        /*#__PURE__*/ (0,
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                                          _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_14__ /* .Tweet */.t,
                                          {
                                            ...tweet,
                                            key: tweet.id
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
            Home.getLayout = (page) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_7__ /* .ProtectedLayout */.IP,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_8__ /* .MainLayout */.Z,
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_7__ /* .HomeLayout */.Os,
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
    [675, 676, 63, 108, 655, 585, 246, 371, 779, 891, 50, 89],
    () => __webpack_exec__(1647)
  );
  module.exports = __webpack_exports__;
})();
