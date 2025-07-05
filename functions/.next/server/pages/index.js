'use strict';
(() => {
  var exports = {};
  exports.id = 405;
  exports.ids = [405];
  exports.modules = {
    /***/ 1603: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ g: () => /* binding */ AuthLayout
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
            /* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(2108);
            /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(6269);
            /* harmony import */ var _components_common_placeholder__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(643);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__
              ]);
            _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            function AuthLayout({ children }) {
              const { 0: pending, 1: setPending } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
              const { user, loading } = (0,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__ /* .useAuth */.aC)();
              const { replace } = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                const checkLogin = async () => {
                  setPending(true);
                  if (user) {
                    await (0,
                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__ /* .sleep */._v)(
                      500
                    );
                    void replace('/home');
                  } else if (!loading) {
                    await (0,
                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__ /* .sleep */._v)(
                      500
                    );
                    setPending(false);
                  }
                };
                void checkLogin();
                // eslint-disable-next-line react-hooks/exhaustive-deps
              }, [user, loading]);
              if (loading || pending)
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  _components_common_placeholder__WEBPACK_IMPORTED_MODULE_4__ /* .Placeholder */.V,
                  {}
                );
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: children
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

    /***/ 6623: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ U: () => /* binding */ LoginFooter
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
        );

      const footerLinks = [
        ['About', 'https://about.twitter.com'],
        ['Help Center', 'https://help.twitter.com'],
        ['Privacy Policy', 'https://twitter.com/tos'],
        ['Cookie Policy', 'https://support.twitter.com/articles/20170514'],
        ['Accessibility', 'https://help.twitter.com/resources/accessibility'],
        [
          'Ads Info',
          'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html'
        ],
        ['Blog', 'https://blog.twitter.com'],
        ['Status', 'https://status.twitterstat.us'],
        ['Careers', 'https://careers.twitter.com'],
        ['Brand Resources', 'https://about.twitter.com/press/brand-assets'],
        [
          'Advertising',
          'https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise'
        ],
        ['Marketing', 'https://marketing.twitter.com'],
        ['Twitter for Business', 'https://business.twitter.com'],
        ['Developers', 'https://developer.twitter.com'],
        ['Directory', 'https://twitter.com/i/directory/profiles'],
        ['Settings', 'https://twitter.com/settings']
      ];
      function LoginFooter() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'footer',
          {
            className:
              'hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex',
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('nav', {
              className: 'flex flex-wrap justify-center gap-4 gap-y-2',
              children: [
                footerLinks.map(([linkName, href]) =>
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'a',
                    {
                      className: 'custom-underline',
                      target: '_blank',
                      rel: 'noreferrer',
                      href: href,
                      children: linkName
                    },
                    linkName
                  )
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'p',
                  {
                    children: '\xa9 2022 Twitter, Inc.'
                  }
                )
              ]
            })
          }
        );
      }

      /***/
    },

    /***/ 148: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ p: () => /* binding */ LoginMain
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(2108);
            /* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(4664);
            /* harmony import */ var _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(2365);
            /* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(4685);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__
              ]);
            _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            function LoginMain() {
              const { signInWithGoogle } = (0,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ /* .useAuth */.aC)();
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('main', {
                className: 'grid lg:grid-cols-[1fr,45vw]',
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className:
                      'relative hidden items-center justify-center lg:flex',
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        _components_ui_next_image__WEBPACK_IMPORTED_MODULE_2__ /* .NextImage */.o,
                        {
                          imgClassName: 'object-cover',
                          blurClassName: 'bg-accent-blue',
                          src: '/assets/twitter-banner.png',
                          alt: 'Twitter banner',
                          layout: 'fill',
                          useSkeleton: true
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'i',
                        {
                          className: 'absolute',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__ /* .CustomIcon */.d,
                              {
                                className: 'h-96 w-96 text-white',
                                iconName: 'TwitterIcon'
                              }
                            )
                        }
                      )
                    ]
                  }),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className:
                      'flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center',
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'i',
                        {
                          className: 'mb-0 self-center lg:mb-10 lg:self-auto',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__ /* .CustomIcon */.d,
                              {
                                className:
                                  '-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon',
                                iconName: 'TwitterIcon'
                              }
                            )
                        }
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className:
                            'flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16',
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'h1',
                              {
                                className:
                                  'text-3xl before:content-["See_what’s_happening_in_the_world_right_now."] lg:text-6xl lg:before:content-["Happening_now"]'
                              }
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'h2',
                              {
                                className:
                                  'hidden text-xl lg:block lg:text-3xl',
                                children: 'Join Twitter today.'
                              }
                            )
                          ]
                        }
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className:
                            'flex max-w-xs flex-col gap-6 [&_button]:py-2',
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'grid gap-3 font-bold',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ /* .Button */.z,
                                    {
                                      className:
                                        'flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75',
                                      onClick: signInWithGoogle,
                                      children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__ /* .CustomIcon */.d,
                                          {
                                            iconName: 'GoogleIcon'
                                          }
                                        ),
                                        ' Sign up with Google'
                                      ]
                                    }
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ /* .Button */.z,
                                    {
                                      className:
                                        'flex cursor-not-allowed justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75',
                                      children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__ /* .CustomIcon */.d,
                                          {
                                            iconName: 'AppleIcon'
                                          }
                                        ),
                                        ' Sign up with Apple'
                                      ]
                                    }
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'div',
                                    {
                                      className:
                                        'grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2',
                                      children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'i',
                                          {
                                            className:
                                              'border-b border-light-border dark:border-dark-border'
                                          }
                                        ),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'p',
                                          {
                                            children: 'or'
                                          }
                                        ),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'i',
                                          {
                                            className:
                                              'border-b border-light-border dark:border-dark-border'
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ /* .Button */.z,
                                    {
                                      className:
                                        'cursor-not-allowed bg-accent-blue text-white transition hover:brightness-90 focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75',
                                      children: 'Sign up with phone or email'
                                    }
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'p',
                                    {
                                      className:
                                        'inner:custom-underline inner:custom-underline text-center text-xs text-light-secondary inner:text-accent-blue dark:text-dark-secondary',
                                      children: [
                                        'By signing up, you agree to the',
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'a',
                                          {
                                            href: 'https://twitter.com/tos',
                                            target: '_blank',
                                            rel: 'noreferrer',
                                            children: 'Terms of Service'
                                          }
                                        ),
                                        ' ',
                                        'and',
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'a',
                                          {
                                            href: 'https://twitter.com/privacy',
                                            target: '_blank',
                                            rel: 'noreferrer',
                                            children: 'Privacy Policy'
                                          }
                                        ),
                                        ', including',
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'a',
                                          {
                                            href: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                                            target: '_blank',
                                            rel: 'noreferrer',
                                            children: 'Cookie Use'
                                          }
                                        ),
                                        '.'
                                      ]
                                    }
                                  )
                                ]
                              }
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex flex-col gap-3',
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    'p',
                                    {
                                      className: 'font-bold',
                                      children: 'Already have an account? '
                                    }
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ /* .Button */.z,
                                    {
                                      className:
                                        'border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20 dark:border-light-secondary',
                                      onClick: signInWithGoogle,
                                      children: 'Sign in'
                                    }
                                  )
                                ]
                              }
                            )
                          ]
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

    /***/ 441: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ Login
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _components_layout_auth_layout__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(1603);
            /* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(585);
            /* harmony import */ var _components_login_login_main__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(148);
            /* harmony import */ var _components_login_login_footer__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(6623);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _components_layout_auth_layout__WEBPACK_IMPORTED_MODULE_1__,
                _components_login_login_main__WEBPACK_IMPORTED_MODULE_3__
              ]);
            [
              _components_layout_auth_layout__WEBPACK_IMPORTED_MODULE_1__,
              _components_login_login_main__WEBPACK_IMPORTED_MODULE_3__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function Login() {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'grid min-h-screen grid-rows-[1fr,auto]',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _components_common_seo__WEBPACK_IMPORTED_MODULE_2__ /* .SEO */.H,
                    {
                      title: 'Twitter - It’s what’s happening',
                      description:
                        'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _components_login_login_main__WEBPACK_IMPORTED_MODULE_3__ /* .LoginMain */.p,
                    {}
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _components_login_login_footer__WEBPACK_IMPORTED_MODULE_4__ /* .LoginFooter */.U,
                    {}
                  )
                ]
              });
            }
            Login.getLayout = (page) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_layout_auth_layout__WEBPACK_IMPORTED_MODULE_1__ /* .AuthLayout */.g,
                {
                  children: page
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

    /***/ 8103: /***/ (module) => {
      module.exports = require('clsx');

      /***/
    },

    /***/ 4957: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/head.js');

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

    /***/ 8854: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js');

      /***/
    },

    /***/ 3297: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js');

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
  var __webpack_exports__ = __webpack_require__.X(0, [675, 108, 585, 246], () =>
    __webpack_exec__(441)
  );
  module.exports = __webpack_exports__;
})();
