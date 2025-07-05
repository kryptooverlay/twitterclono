'use strict';
(() => {
  var exports = {};
  exports.id = 925;
  exports.ids = [925];
  exports.modules = {
    /***/ 4872: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ e: () => /* binding */ ViewParentTweet
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
            /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1492);
            /* harmony import */ var _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6051);
            /* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(5342);
            /* harmony import */ var _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(7293);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                firebase_firestore__WEBPACK_IMPORTED_MODULE_2__,
                _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_3__,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__,
                _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_5__
              ]);
            [
              firebase_firestore__WEBPACK_IMPORTED_MODULE_2__,
              _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_3__,
              _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__,
              _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_5__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function ViewParentTweet({ parentId, viewTweetRef }) {
              const { data, loading } = (0,
              _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_3__ /* .useDocument */.k)(
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(
                  _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__ /* .tweetsCollection */.VV,
                  parentId
                ),
                {
                  includeUser: true,
                  allowNull: true
                }
              );
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                if (!loading) viewTweetRef.current?.scrollIntoView();
                // eslint-disable-next-line react-hooks/exhaustive-deps
              }, [data?.id, loading]);
              if (loading) return null;
              if (!data)
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'div',
                  {
                    className: 'px-4 pt-3 pb-2',
                    children: /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('p', {
                      className:
                        'rounded-2xl bg-main-sidebar-background py-3 px-1 pl-4 text-light-secondary dark:text-dark-secondary',
                      children: [
                        'This Tweet was deleted by the Tweet author.',
                        ' ',
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'a',
                          {
                            className: 'custom-underline text-main-accent',
                            href: 'https://help.twitter.com/rules-and-policies/notices-on-twitter',
                            target: '_blank',
                            rel: 'noreferrer',
                            children: 'Learn more'
                          }
                        )
                      ]
                    })
                  }
                );
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_5__ /* .Tweet */.t,
                {
                  parentTweet: true,
                  ...data
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

    /***/ 8515: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ D: () => /* binding */ ViewTweet
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(1664);
            /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_link__WEBPACK_IMPORTED_MODULE_1__
              );
            /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(6197);
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(8103);
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                clsx__WEBPACK_IMPORTED_MODULE_3__
              );
            /* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(2108);
            /* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(3040);
            /* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(9099);
            /* harmony import */ var _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(2706);
            /* harmony import */ var _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(1400);
            /* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(1708);
            /* harmony import */ var _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(7391);
            /* harmony import */ var _components_user_user_name__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(4531);
            /* harmony import */ var _components_user_user_username__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(7876);
            /* harmony import */ var _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(7293);
            /* harmony import */ var _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(44);
            /* harmony import */ var _components_tweet_tweet_stats__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(3894);
            /* harmony import */ var _components_tweet_tweet_date__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(581);
            /* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_17__ =
              __webpack_require__(7277);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                framer_motion__WEBPACK_IMPORTED_MODULE_2__,
                _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__,
                _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__,
                _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__,
                _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__,
                _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__,
                _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_13__,
                _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_14__,
                _components_tweet_tweet_stats__WEBPACK_IMPORTED_MODULE_15__,
                _components_input_input__WEBPACK_IMPORTED_MODULE_17__
              ]);
            [
              framer_motion__WEBPACK_IMPORTED_MODULE_2__,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__,
              _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__,
              _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__,
              _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__,
              _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__,
              _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_13__,
              _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_14__,
              _components_tweet_tweet_stats__WEBPACK_IMPORTED_MODULE_15__,
              _components_input_input__WEBPACK_IMPORTED_MODULE_17__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function ViewTweet(tweet) {
              const {
                id: tweetId,
                text,
                images,
                parent,
                userLikes,
                createdBy,
                createdAt,
                userRetweets,
                userReplies,
                viewTweetRef,
                user: tweetUserData
              } = tweet;
              const {
                id: ownerId,
                name,
                username,
                verified,
                photoURL
              } = tweetUserData;
              const { user } = (0,
              _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__ /* .useAuth */.aC)();
              const { open, openModal, closeModal } = (0,
              _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ /* .useModal */.d)();
              const tweetLink = `/tweet/${tweetId}`;
              const userId = user?.id;
              const isOwner = userId === createdBy;
              const reply = !!parent;
              const { id: parentId, username: parentUsername = username } =
                parent ?? {};
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article,
                {
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    `accent-tab h- relative flex cursor-default flex-col gap-3 border-b
         border-light-border px-4 py-3 outline-none dark:border-dark-border`,
                    reply && 'scroll-m-[3.25rem] pt-0'
                  ),
                  ..._components_tweet_tweet__WEBPACK_IMPORTED_MODULE_13__ /* .variants */.o,
                  animate: {
                    ..._components_tweet_tweet__WEBPACK_IMPORTED_MODULE_13__ /* .variants.animate */
                      .o.animate,
                    transition: {
                      duration: 0.2
                    }
                  },
                  exit: undefined,
                  ref: viewTweetRef,
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ /* .Modal */.u_,
                      {
                        className: 'flex items-start justify-center',
                        modalClassName:
                          'bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden',
                        open: open,
                        closeModal: closeModal,
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__ /* .TweetReplyModal */.h,
                            {
                              tweet: tweet,
                              closeModal: closeModal
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
                          reply &&
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'div',
                              {
                                className:
                                  'flex w-12 items-center justify-center',
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    'i',
                                    {
                                      className:
                                        'hover-animation h-2 w-0.5 bg-light-line-reply dark:bg-dark-line-reply'
                                    }
                                  )
                              }
                            ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: 'grid grid-cols-[auto,1fr] gap-3',
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__ /* .UserTooltip */.Y,
                                  {
                                    avatar: true,
                                    ...tweetUserData,
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_9__ /* .UserAvatar */.Y,
                                        {
                                          src: photoURL,
                                          alt: name,
                                          username: username
                                        }
                                      )
                                  }
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className: 'flex min-w-0 justify-between',
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                        'div',
                                        {
                                          className:
                                            'flex flex-col truncate xs:overflow-visible xs:whitespace-normal',
                                          children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__ /* .UserTooltip */.Y,
                                              {
                                                ...tweetUserData,
                                                children:
                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                    _components_user_user_name__WEBPACK_IMPORTED_MODULE_11__ /* .UserName */.v,
                                                    {
                                                      className: '-mb-1',
                                                      name: name,
                                                      username: username,
                                                      verified: verified
                                                    }
                                                  )
                                              }
                                            ),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__ /* .UserTooltip */.Y,
                                              {
                                                ...tweetUserData,
                                                children:
                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                    _components_user_user_username__WEBPACK_IMPORTED_MODULE_12__ /* .UserUsername */.a,
                                                    {
                                                      username: username
                                                    }
                                                  )
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        'div',
                                        {
                                          className: 'px-4',
                                          children:
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_14__ /* .TweetActions */.r,
                                              {
                                                viewTweet: true,
                                                isOwner: isOwner,
                                                ownerId: ownerId,
                                                tweetId: tweetId,
                                                parentId: parentId,
                                                username: username,
                                                hasImages: !!images,
                                                createdBy: createdBy
                                              }
                                            )
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    reply &&
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'p',
                        {
                          className:
                            'text-light-secondary dark:text-dark-secondary',
                          children: [
                            'Replying to',
                            ' ',
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                              {
                                href: `/user/${parentUsername}`,
                                children: /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'a',
                                  {
                                    className:
                                      'custom-underline text-main-accent',
                                    children: ['@', parentUsername]
                                  }
                                )
                              }
                            )
                          ]
                        }
                      ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        children: [
                          text &&
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'p',
                              {
                                className:
                                  'whitespace-pre-line break-words text-2xl',
                                children: text
                              }
                            ),
                          images &&
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__ /* .ImagePreview */.e,
                              {
                                viewTweet: true,
                                imagesPreview: images,
                                previewCount: images.length
                              }
                            ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className:
                                'inner:hover-animation inner:border-b inner:border-light-border dark:inner:border-dark-border',
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_tweet_tweet_date__WEBPACK_IMPORTED_MODULE_16__ /* .TweetDate */.C,
                                  {
                                    viewTweet: true,
                                    tweetLink: tweetLink,
                                    createdAt: createdAt
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _components_tweet_tweet_stats__WEBPACK_IMPORTED_MODULE_15__ /* .TweetStats */.b,
                                  {
                                    viewTweet: true,
                                    reply: reply,
                                    userId: userId,
                                    isOwner: isOwner,
                                    tweetId: tweetId,
                                    userLikes: userLikes,
                                    userRetweets: userRetweets,
                                    userReplies: userReplies,
                                    openModal: openModal
                                  }
                                )
                              ]
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_input_input__WEBPACK_IMPORTED_MODULE_17__ /* .Input */.I,
                            {
                              reply: true,
                              parent: {
                                id: tweetId,
                                username: username
                              }
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

    /***/ 6768: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ TweetId
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
            /* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(5342);
            /* harmony import */ var _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(3639);
            /* harmony import */ var _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(6051);
            /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_18__ =
              __webpack_require__(6269);
            /* harmony import */ var _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(3238);
            /* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(4415);
            /* harmony import */ var _components_home_main_container__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(722);
            /* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(3258);
            /* harmony import */ var _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(7293);
            /* harmony import */ var _components_view_view_tweet__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(8515);
            /* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(585);
            /* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_15__ =
              __webpack_require__(9570);
            /* harmony import */ var _components_ui_error__WEBPACK_IMPORTED_MODULE_16__ =
              __webpack_require__(6028);
            /* harmony import */ var _components_view_view_parent_tweet__WEBPACK_IMPORTED_MODULE_17__ =
              __webpack_require__(4872);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                framer_motion__WEBPACK_IMPORTED_MODULE_3__,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_4__,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__,
                _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__,
                _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__,
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__,
                _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__,
                _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__,
                _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_12__,
                _components_view_view_tweet__WEBPACK_IMPORTED_MODULE_13__,
                _components_view_view_parent_tweet__WEBPACK_IMPORTED_MODULE_17__
              ]);
            [
              framer_motion__WEBPACK_IMPORTED_MODULE_3__,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_4__,
              _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__,
              _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__,
              _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__,
              _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__,
              _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__,
              _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__,
              _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_12__,
              _components_view_view_tweet__WEBPACK_IMPORTED_MODULE_13__,
              _components_view_view_parent_tweet__WEBPACK_IMPORTED_MODULE_17__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            function TweetId() {
              const {
                query: { id },
                back
              } = (0, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              const { data: tweetData, loading: tweetLoading } = (0,
              _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__ /* .useDocument */.k)(
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(
                  _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .tweetsCollection */.VV,
                  id
                ),
                {
                  includeUser: true,
                  allowNull: true
                }
              );
              const viewTweetRef = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
              const { data: repliesData, loading: repliesLoading } = (0,
              _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__ /* .useCollection */.K)(
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(
                  _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .tweetsCollection */.VV,
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(
                    'parent.id',
                    '==',
                    id
                  ),
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(
                    'createdAt',
                    'desc'
                  )
                ),
                {
                  includeUser: true,
                  allowNull: true
                }
              );
              const { text, images } = tweetData ?? {};
              const imagesLength = images?.length ?? 0;
              const parentId = tweetData?.parent?.id;
              const pageTitle = tweetData
                ? `${tweetData.user.name} on Twitter: "${text ?? ''}${
                    images
                      ? ` (${imagesLength} image${(0,
                        _lib_utils__WEBPACK_IMPORTED_MODULE_18__ /* .isPlural */.uz)(
                          imagesLength
                        )})`
                      : ''
                  }" / Twitter`
                : null;
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _components_home_main_container__WEBPACK_IMPORTED_MODULE_10__ /* .MainContainer */.t,
                {
                  className: '!pb-[1280px]',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_home_main_header__WEBPACK_IMPORTED_MODULE_11__ /* .MainHeader */.c,
                      {
                        useActionButton: true,
                        title: parentId ? 'Thread' : 'Tweet',
                        action: back
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'section',
                      {
                        children: tweetLoading
                          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _components_ui_loading__WEBPACK_IMPORTED_MODULE_15__ /* .Loading */.g,
                              {
                                className: 'mt-5'
                              }
                            )
                          : !tweetData
                          ? /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                              {
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _components_common_seo__WEBPACK_IMPORTED_MODULE_14__ /* .SEO */.H,
                                    {
                                      title: 'Tweet not found / Twitter'
                                    }
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _components_ui_error__WEBPACK_IMPORTED_MODULE_16__ /* .Error */.j,
                                    {
                                      message: 'Tweet not found'
                                    }
                                  )
                                ]
                              }
                            )
                          : /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                              {
                                children: [
                                  pageTitle &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      _components_common_seo__WEBPACK_IMPORTED_MODULE_14__ /* .SEO */.H,
                                      {
                                        title: pageTitle
                                      }
                                    ),
                                  parentId &&
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      _components_view_view_parent_tweet__WEBPACK_IMPORTED_MODULE_17__ /* .ViewParentTweet */.e,
                                      {
                                        parentId: parentId,
                                        viewTweetRef: viewTweetRef
                                      }
                                    ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _components_view_view_tweet__WEBPACK_IMPORTED_MODULE_13__ /* .ViewTweet */.D,
                                    {
                                      viewTweetRef: viewTweetRef,
                                      ...tweetData
                                    }
                                  ),
                                  tweetData &&
                                    (repliesLoading
                                      ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          _components_ui_loading__WEBPACK_IMPORTED_MODULE_15__ /* .Loading */.g,
                                          {
                                            className: 'mt-5'
                                          }
                                        )
                                      : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence,
                                          {
                                            mode: 'popLayout',
                                            children: repliesData?.map(
                                              (tweet) =>
                                                /*#__PURE__*/ (0,
                                                react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                                                  _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_12__ /* .Tweet */.t,
                                                  {
                                                    ...tweet,
                                                    key: tweet.id
                                                  }
                                                )
                                            )
                                          }
                                        ))
                                ]
                              }
                            )
                      }
                    )
                  ]
                }
              );
            }
            TweetId.getLayout = (page) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__ /* .ProtectedLayout */.IP,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_9__ /* .MainLayout */.Z,
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _components_layout_common_layout__WEBPACK_IMPORTED_MODULE_8__ /* .HomeLayout */.Os,
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
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [675, 676, 63, 108, 655, 585, 246, 371, 779, 891],
    () => __webpack_exec__(6768)
  );
  module.exports = __webpack_exports__;
})();
