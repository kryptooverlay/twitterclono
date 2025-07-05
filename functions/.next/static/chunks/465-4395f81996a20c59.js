'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    2706: function (e, t, n) {
      n.d(t, {
        h: function () {
          return s;
        }
      });
      var r = n(6042),
        a = n(5893),
        o = n(9557),
        l = n(5053);
      function s(e) {
        var t = e.tweet,
          n = e.closeModal;
        return (0, a.jsx)(o.I, {
          modal: !0,
          replyModal: !0,
          parent: { id: t.id, username: t.user.username },
          closeModal: n,
          children: (0, a.jsx)(l.t, (0, r.Z)({ modal: !0, parentTweet: !0 }, t))
        });
      }
    },
    5072: function (e, t, n) {
      n.d(t, {
        H: function () {
          return d;
        }
      });
      var r = n(6042),
        a = n(9396),
        o = n(5893),
        l = n(7294),
        s = n(5820),
        i = n(3136),
        c = n(6269),
        u = n(1944);
      function d(e) {
        var t = e.move,
          n = e.stats,
          d = e.alwaysShowStats;
        return (0, o.jsx)('div', {
          className: 'overflow-hidden',
          children: (0, o.jsx)(s.M, {
            mode: 'wait',
            initial: !1,
            children:
              (d || !!n) &&
              (0, l.createElement)(
                i.E.p,
                (0, a.Z)((0, r.Z)({ className: 'text-sm' }, (0, c.DX)(t)), {
                  key: n
                }),
                (0, u.u)(n)
              )
          })
        });
      }
    },
    6781: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return l;
        }
      });
      var r = n(5893),
        a = n(6010),
        o = n(4664);
      function l(e) {
        var t = e.title,
          n = e.modal,
          l = e.imageData,
          s = e.description;
        return (0, r.jsx)('div', {
          className: (0, a.Z)('flex justify-center p-8', n && 'mt-[52px]'),
          children: (0, r.jsx)('div', {
            className: 'w-full max-w-sm',
            children: (0, r.jsxs)('div', {
              className: 'flex flex-col items-center gap-6',
              children: [
                l &&
                  (0, r.jsx)(o.o, {
                    width: 336,
                    height: 168,
                    src: l.src,
                    alt: l.alt
                  }),
                (0, r.jsxs)('div', {
                  className: 'flex flex-col gap-2 text-center',
                  children: [
                    (0, r.jsx)('p', {
                      className: 'text-3xl font-extrabold',
                      children: t
                    }),
                    (0, r.jsx)('p', {
                      className:
                        'text-light-secondary dark:text-dark-secondary',
                      children: s
                    })
                  ]
                })
              ]
            })
          })
        });
      }
    },
    44: function (e, t, n) {
      n.d(t, {
        o: function () {
          return Z;
        },
        r: function () {
          return C;
        }
      });
      var r = n(7568),
        a = n(6042),
        o = n(9396),
        l = n(828),
        s = n(9815),
        i = n(655),
        c = n(5893),
        u = n(7294),
        d = n(1163),
        p = n(5321),
        f = n(6215),
        m = n(5820),
        v = n(3136),
        h = n(6010),
        b = n(6501),
        x = n(2108),
        g = n(3040),
        w = n(1940),
        y = n(7359),
        k = n(6269),
        j = n(9099),
        N = n(9253),
        P = n(4685),
        T = n(3276),
        I = n(4266),
        S = n(2365),
        Z = {
          initial: { opacity: 0, y: -25 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', duration: 0.4 }
          },
          exit: { opacity: 0, y: -25, transition: { duration: 0.2 } }
        },
        M = [
          {
            title: 'Pin Tweet to from profile?',
            description:
              'This will appear at the top of your profile and replace any previously pinned Tweet.',
            mainBtnLabel: 'Pin'
          },
          {
            title: 'Unpin Tweet from profile?',
            description:
              'This will no longer appear automatically at the top of your profile.',
            mainBtnLabel: 'Unpin'
          }
        ];
      function C(e) {
        var t,
          n,
          C = e.isOwner,
          E = e.ownerId,
          R = e.tweetId,
          B = e.parentId,
          O = e.username,
          A = e.hasImages,
          L = e.viewTweet,
          _ = e.createdBy,
          z = (0, x.aC)(),
          F = z.user,
          D = z.isAdmin,
          J = (0, d.useRouter)().push,
          U = (0, g.d)(),
          Y = U.open,
          G = U.openModal,
          V = U.closeModal,
          W = (0, g.d)(),
          $ = W.open,
          H = W.openModal,
          q = W.closeModal,
          Q = F.id,
          X = F.following,
          K = F.pinnedTweet,
          ee = D && !C,
          et = K === R,
          en =
            ((t = (0, r.Z)(function () {
              var e;
              return (0, i.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!L) return [3, 9];
                    if (!B) return [3, 7];
                    return [4, (0, p.QT)((0, p.JU)(w.VV, B))];
                  case 1:
                    if (!e.sent().exists()) return [3, 4];
                    return [4, J('/tweet/'.concat(B), void 0, { scroll: !1 })];
                  case 2:
                    return e.sent(), (0, k.wX)(200)(), [4, (0, k._v)(50)];
                  case 3:
                    return e.sent(), [3, 6];
                  case 4:
                    return [4, J('/home')];
                  case 5:
                    e.sent(), (e.label = 6);
                  case 6:
                    return [3, 9];
                  case 7:
                    return [4, J('/home')];
                  case 8:
                    e.sent(), (e.label = 9);
                  case 9:
                    return [
                      4,
                      Promise.all([
                        (0, y._A)(R),
                        (0, y.$1)('decrement', E),
                        A && (0, y.iq)('decrement', _),
                        B && (0, y.Mq)('decrement', B)
                      ])
                    ];
                  case 10:
                    return (
                      e.sent(),
                      b.Am.success(
                        ''.concat(
                          ee ? '@'.concat(O, "'s") : 'Your',
                          ' Tweet was deleted'
                        )
                      ),
                      V(),
                      [2]
                    );
                }
              });
            })),
            function () {
              return t.apply(this, arguments);
            }),
          er =
            ((n = (0, r.Z)(function () {
              return (0, i.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, (0, y.X_)(et ? 'unpin' : 'pin', Q, R)];
                  case 1:
                    return (
                      e.sent(),
                      b.Am.success(
                        'Your tweet was '.concat(
                          et ? 'unpinned' : 'pinned',
                          ' to your profile'
                        )
                      ),
                      q(),
                      [2]
                    );
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          ea = function (e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              n[a - 1] = arguments[a];
            return (0, r.Z)(function () {
              var t, r;
              return (0, i.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (r = (0, l.Z)(n, 1)[0]),
                      e(),
                      [4, y.gL.apply(void 0, (0, s.Z)(n))]
                    );
                  case 1:
                    return (
                      t.sent(),
                      b.Am.success(
                        'You '
                          .concat(
                            'follow' === r ? 'followed' : 'unfollowed',
                            ' @'
                          )
                          .concat(O)
                      ),
                      [2]
                    );
                }
              });
            });
          },
          eo = X.includes(_),
          el = (0, u.useMemo)(
            function () {
              return M[+et];
            },
            [$]
          );
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(j.u_, {
              modalClassName:
                'max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: Y,
              closeModal: V,
              children: (0, c.jsx)(N.W, {
                title: 'Delete Tweet?',
                description: 'This can’t be undone and it will be removed from '
                  .concat(
                    ee ? '@'.concat(O, "'s") : 'your',
                    ' profile, the timeline of any accounts that follow '
                  )
                  .concat(
                    ee ? '@'.concat(O) : 'you',
                    ', and from Twitter search results.'
                  ),
                mainBtnClassName:
                  'bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab focus-visible:bg-accent-red/90',
                mainBtnLabel: 'Delete',
                focusOnMainBtn: !0,
                action: en,
                closeModal: V
              })
            }),
            (0, c.jsx)(j.u_, {
              modalClassName:
                'max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: $,
              closeModal: q,
              children: (0, c.jsx)(
                N.W,
                (0, o.Z)((0, a.Z)({}, el), {
                  mainBtnClassName:
                    'bg-light-primary hover:bg-light-primary/90 active:bg-light-primary/80 dark:text-light-primary dark:bg-light-border dark:hover:bg-light-border/90 dark:active:bg-light-border/75',
                  focusOnMainBtn: !0,
                  action: er,
                  closeModal: q
                })
              )
            }),
            (0, c.jsx)(f.J, {
              children: function (e) {
                var t = e.open,
                  n = e.close;
                return (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(f.J.Button, {
                      as: P.z,
                      className: (0, h.Z)(
                        'main-tab group group absolute top-2 right-2 p-2 \n                 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10\n                 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20',
                        t && 'bg-accent-blue/10 [&>div>svg]:text-accent-blue'
                      ),
                      children: (0, c.jsxs)('div', {
                        className: 'group relative',
                        children: [
                          (0, c.jsx)(I.e, {
                            className:
                              'h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary/80',
                            iconName: 'EllipsisHorizontalIcon'
                          }),
                          !t && (0, c.jsx)(T.e, { tip: 'More' })
                        ]
                      })
                    }),
                    (0, c.jsx)(m.M, {
                      children:
                        t &&
                        (0, c.jsxs)(
                          f.J.Panel,
                          (0, o.Z)(
                            (0, a.Z)(
                              {
                                className:
                                  'menu-container group absolute top-[50px] right-2 whitespace-nowrap text-light-primary dark:text-dark-primary',
                                as: v.E.div
                              },
                              Z
                            ),
                            {
                              static: !0,
                              children: [
                                (D || C) &&
                                  (0, c.jsxs)(f.J.Button, {
                                    className:
                                      'accent-tab flex w-full gap-3 rounded-md rounded-b-none p-4 text-accent-red hover:bg-main-sidebar-background',
                                    as: P.z,
                                    onClick: (0, k.Db)(G),
                                    children: [
                                      (0, c.jsx)(I.e, {
                                        iconName: 'TrashIcon'
                                      }),
                                      'Delete'
                                    ]
                                  }),
                                C
                                  ? (0, c.jsx)(f.J.Button, {
                                      className:
                                        'accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background',
                                      as: P.z,
                                      onClick: (0, k.Db)(H),
                                      children: et
                                        ? (0, c.jsxs)(c.Fragment, {
                                            children: [
                                              (0, c.jsx)(S.d, {
                                                iconName: 'PinOffIcon'
                                              }),
                                              'Unpin from profile'
                                            ]
                                          })
                                        : (0, c.jsxs)(c.Fragment, {
                                            children: [
                                              (0, c.jsx)(S.d, {
                                                iconName: 'PinIcon'
                                              }),
                                              'Pin to your profile'
                                            ]
                                          })
                                    })
                                  : eo
                                  ? (0, c.jsxs)(f.J.Button, {
                                      className:
                                        'accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background',
                                      as: P.z,
                                      onClick: (0, k.Db)(
                                        ea(n, 'unfollow', Q, _)
                                      ),
                                      children: [
                                        (0, c.jsx)(I.e, {
                                          iconName: 'UserMinusIcon'
                                        }),
                                        'Unfollow @',
                                        O
                                      ]
                                    })
                                  : (0, c.jsxs)(f.J.Button, {
                                      className:
                                        'accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background',
                                      as: P.z,
                                      onClick: (0, k.Db)(ea(n, 'follow', Q, _)),
                                      children: [
                                        (0, c.jsx)(I.e, {
                                          iconName: 'UserPlusIcon'
                                        }),
                                        'Follow @',
                                        O
                                      ]
                                    })
                              ]
                            }
                          )
                        )
                    })
                  ]
                });
              }
            })
          ]
        });
      }
    },
    581: function (e, t, n) {
      n.d(t, {
        C: function () {
          return c;
        }
      });
      var r = n(5893),
        a = n(1664),
        o = n.n(a),
        l = n(6010),
        s = n(1944),
        i = n(3276);
      function c(e) {
        var t = e.createdAt,
          n = e.tweetLink,
          a = e.viewTweet;
        return (0, r.jsxs)('div', {
          className: (0, l.Z)('flex gap-1', a && 'py-4'),
          children: [
            !a && (0, r.jsx)('i', { children: '\xb7' }),
            (0, r.jsxs)('div', {
              className: 'group relative',
              children: [
                (0, r.jsx)(o(), {
                  href: n,
                  children: (0, r.jsx)('a', {
                    className: (0, l.Z)(
                      'custom-underline peer whitespace-nowrap',
                      a && 'text-light-secondary dark:text-dark-secondary'
                    ),
                    children: (0, s.p)(t, a ? 'full' : 'tweet')
                  })
                }),
                (0, r.jsx)(i.e, {
                  className:
                    'translate-y-1 peer-focus:opacity-100 peer-focus-visible:visible peer-focus-visible:delay-200',
                  tip: (0, s.p)(t, 'full')
                })
              ]
            })
          ]
        });
      }
    },
    4851: function (e, t, n) {
      n.d(t, {
        b: function () {
          return L;
        }
      });
      var r = n(5893),
        a = n(7294),
        o = n(6010),
        l = n(7359),
        s = n(828),
        i = n(5651),
        c = n(3040),
        u = n(1940),
        d = n(9099),
        p = n(4856);
      function f(e) {
        var t = e.children,
          n = e.statsType,
          a = e.handleClose;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(p.c, {
              useActionButton: !0,
              disableSticky: !0,
              tip: 'Close',
              iconName: 'XMarkIcon',
              className:
                'absolute flex w-full items-center gap-6 rounded-tl-2xl',
              title: ''.concat('likes' === n ? 'Liked' : 'Retweeted', ' by'),
              action: a
            }),
            t
          ]
        });
      }
      var m = n(5072),
        v = n(3779);
      function h(e) {
        var t = e.likeMove,
          n = e.userLikes,
          l = e.tweetMove,
          p = e.replyMove,
          h = e.userRetweets,
          b = e.currentLikes,
          x = e.currentTweets,
          g = e.currentReplies,
          w = e.isStatsVisible,
          y = (0, a.useState)(null),
          k = y[0],
          j = y[1],
          N = (0, c.d)(),
          P = N.open,
          T = N.openModal,
          I = N.closeModal,
          S = (0, i.z)(k ? ('likes' === k ? n : h) : [], u.W$, {
            disabled: !k
          }),
          Z = S.data,
          M = S.loading,
          C = function () {
            j(null), I();
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.u_, {
              modalClassName:
                'relative bg-main-background rounded-2xl max-w-xl w-full h-[672px] overflow-hidden rounded-2xl',
              open: P,
              closeModal: C,
              children: (0, r.jsx)(f, {
                statsType: k,
                handleClose: C,
                children: (0, r.jsx)(v.G, {
                  follow: !0,
                  type: k,
                  data: Z,
                  loading: M
                })
              })
            }),
            w &&
              (0, r.jsx)('div', {
                className:
                  'flex gap-4 px-1 py-4 text-light-secondary dark:text-dark-secondary [&>button>div]:font-bold [&>button>div]:text-light-primary dark:[&>button>div]:text-dark-primary',
                children: [
                  ['Reply', null, p, g],
                  ['Retweet', 'retweets', l, x],
                  ['Like', 'likes', t, b]
                ].map(function (e, t) {
                  var n,
                    a = (0, s.Z)(e, 4),
                    l = a[0],
                    i = a[1],
                    c = a[2],
                    u = a[3];
                  return (
                    !!u &&
                    (0, r.jsxs)(
                      'button',
                      {
                        className: (0, o.Z)(
                          'hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b \n                     border-b-transparent outline-none hover:border-b-light-primary \n                     focus-visible:border-b-light-primary dark:hover:border-b-dark-primary\n                     dark:focus-visible:border-b-dark-primary',
                          0 === t && 'cursor-not-allowed'
                        ),
                        onClick: i
                          ? function () {
                              j(i), T();
                            }
                          : void 0,
                        children: [
                          (0, r.jsx)(m.H, { move: c, stats: u }),
                          (0, r.jsx)('p', {
                            children: ''.concat(
                              1 === u
                                ? l
                                : u > 1 && 0 === t
                                ? ''.concat(l.slice(0, -1), 'ies')
                                : ''.concat(l, 's')
                            )
                          })
                        ]
                      },
                      l
                    )
                  );
                })
              })
          ]
        });
      }
      var b = n(6269),
        x = n(4266),
        g = n(3276);
      function w(e) {
        var t = e.tip,
          n = e.move,
          a = e.stats,
          l = e.disabled,
          s = e.iconName,
          i = e.className,
          c = e.viewTweet,
          u = e.iconClassName,
          d = e.onClick;
        return (0, r.jsxs)('button', {
          className: (0, o.Z)(
            'group flex items-center gap-1.5 p-0 transition-none\n         disabled:cursor-not-allowed inner:transition inner:duration-200',
            l && 'cursor-not-allowed',
            i
          ),
          onClick: (0, b.Db)(d),
          children: [
            (0, r.jsxs)('i', {
              className: (0, o.Z)(
                'relative rounded-full p-2 not-italic group-focus-visible:ring-2',
                u
              ),
              children: [
                (0, r.jsx)(x.e, {
                  className: c ? 'h-6 w-6' : 'h-5 w-5',
                  iconName: s
                }),
                (0, r.jsx)(g.e, { tip: t })
              ]
            }),
            !c && (0, r.jsx)(m.H, { move: n, stats: a })
          ]
        });
      }
      var y = n(7568),
        k = n(6042),
        j = n(9396),
        N = n(9815),
        P = n(655),
        T = n(1664),
        I = n.n(T),
        S = n(6215),
        Z = n(5820),
        M = n(3136),
        C = n(6501),
        E = n(2108),
        R = n(1923),
        B = n(4685),
        O = n(44);
      function A(e) {
        var t = e.userId,
          n = e.tweetId,
          a = e.viewTweet,
          i = (0, E.aC)().userBookmarks,
          c = function (e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              n[a - 1] = arguments[a];
            return (0, y.Z)(function () {
              var t, a;
              return (0, P.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (a = (0, s.Z)(n, 1)[0]),
                      e(),
                      [4, l.mN.apply(void 0, (0, N.Z)(n))]
                    );
                  case 1:
                    return (
                      t.sent(),
                      C.Am.success(
                        'bookmark' === a
                          ? function () {
                              return (0, r.jsxs)('span', {
                                className: 'flex gap-2',
                                children: [
                                  'Tweet added to your Bookmarks',
                                  (0, r.jsx)(I(), {
                                    href: '/bookmarks',
                                    children: (0, r.jsx)('a', {
                                      className: 'custom-underline font-bold',
                                      children: 'View'
                                    })
                                  })
                                ]
                              });
                            }
                          : 'Tweet removed from your bookmarks'
                      ),
                      [2]
                    );
                }
              });
            });
          },
          u = !!(null == i
            ? void 0
            : i.some(function (e) {
                return e.id === n;
              }));
        return (0, r.jsx)(S.J, {
          className: 'relative',
          children: function (e) {
            var l,
              s = e.open,
              i = e.close;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(S.J.Button, {
                  className: (0, o.Z)(
                    'group relative flex items-center gap-1 p-0 outline-none \n               transition-none hover:text-accent-blue focus-visible:text-accent-blue',
                    s && 'text-accent-blue inner:bg-accent-blue/10'
                  ),
                  children: (0, r.jsxs)('i', {
                    className:
                      'relative rounded-full p-2 not-italic duration-200 group-hover:bg-accent-blue/10 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-2 group-focus-visible:ring-accent-blue/80 group-active:bg-accent-blue/20',
                    children: [
                      (0, r.jsx)(x.e, {
                        className: a ? 'h-6 w-6' : 'h-5 w-5',
                        iconName: 'ArrowUpTrayIcon'
                      }),
                      !s && (0, r.jsx)(g.e, { tip: 'Share' })
                    ]
                  })
                }),
                (0, r.jsx)(Z.M, {
                  children:
                    s &&
                    (0, r.jsxs)(
                      S.J.Panel,
                      (0, j.Z)(
                        (0, k.Z)(
                          {
                            className:
                              'menu-container group absolute right-0 top-11 whitespace-nowrap text-light-primary dark:text-dark-primary',
                            as: M.E.div
                          },
                          O.o
                        ),
                        {
                          static: !0,
                          children: [
                            (0, r.jsxs)(S.J.Button, {
                              className:
                                'accent-tab flex w-full gap-3 rounded-md rounded-b-none p-4 hover:bg-main-sidebar-background',
                              as: B.z,
                              onClick: (0, b.Db)(
                                (0, y.Z)(function () {
                                  return (0, P.__generator)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        return (
                                          i(),
                                          [
                                            4,
                                            navigator.clipboard.writeText(
                                              ''
                                                .concat(R.f7, '/tweet/')
                                                .concat(n)
                                            )
                                          ]
                                        );
                                      case 1:
                                        return (
                                          e.sent(),
                                          C.Am.success('Copied to clipboard'),
                                          [2]
                                        );
                                    }
                                  });
                                })
                              ),
                              children: [
                                (0, r.jsx)(x.e, { iconName: 'LinkIcon' }),
                                'Copy link to Tweet'
                              ]
                            }),
                            u
                              ? (0, r.jsxs)(S.J.Button, {
                                  className:
                                    'accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background',
                                  as: B.z,
                                  onClick: (0, b.Db)(c(i, 'unbookmark', t, n)),
                                  children: [
                                    (0, r.jsx)(x.e, {
                                      iconName: 'BookmarkSlashIcon'
                                    }),
                                    'Remove Tweet from Bookmarks'
                                  ]
                                })
                              : (0, r.jsxs)(S.J.Button, {
                                  className:
                                    'accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background',
                                  as: B.z,
                                  onClick: (0, b.Db)(c(i, 'bookmark', t, n)),
                                  children: [
                                    (0, r.jsx)(x.e, {
                                      iconName: 'BookmarkIcon'
                                    }),
                                    'Bookmark'
                                  ]
                                })
                          ]
                        }
                      )
                    )
                })
              ]
            });
          }
        });
      }
      function L(e) {
        var t = e.reply,
          n = e.userId,
          s = e.isOwner,
          i = e.tweetId,
          c = e.userLikes,
          u = e.viewTweet,
          d = e.userRetweets,
          p = e.userReplies,
          f = e.openModal,
          m = c.length,
          v = d.length,
          b = (0, a.useState)({
            currentReplies: p,
            currentLikes: m,
            currentTweets: v
          }),
          x = b[0],
          g = x.currentReplies,
          y = x.currentTweets,
          k = x.currentLikes,
          j = b[1];
        (0, a.useEffect)(
          function () {
            j({ currentReplies: p, currentLikes: m, currentTweets: v });
          },
          [p, m, v]
        );
        var N = (0, a.useMemo)(
            function () {
              return p > g ? -25 : 25;
            },
            [p]
          ),
          P = (0, a.useMemo)(
            function () {
              return m > k ? -25 : 25;
            },
            [m]
          ),
          T = (0, a.useMemo)(
            function () {
              return v > y ? -25 : 25;
            },
            [v]
          ),
          I = c.includes(n),
          S = d.includes(n);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            u &&
              (0, r.jsx)(h, {
                likeMove: P,
                userLikes: c,
                tweetMove: T,
                replyMove: N,
                userRetweets: d,
                currentLikes: k,
                currentTweets: y,
                currentReplies: g,
                isStatsVisible: !!(p || v || m)
              }),
            (0, r.jsxs)('div', {
              className: (0, o.Z)(
                'flex text-light-secondary inner:outline-none dark:text-dark-secondary',
                u ? 'justify-around py-2' : 'max-w-md justify-between'
              ),
              children: [
                (0, r.jsx)(w, {
                  className:
                    'hover:text-accent-blue focus-visible:text-accent-blue',
                  iconClassName:
                    'group-hover:bg-accent-blue/10 group-active:bg-accent-blue/20 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-accent-blue/80',
                  tip: 'Reply',
                  move: N,
                  stats: g,
                  iconName: 'ChatBubbleOvalLeftIcon',
                  viewTweet: u,
                  onClick: f,
                  disabled: t
                }),
                (0, r.jsx)(w, {
                  className: (0, o.Z)(
                    'hover:text-accent-green focus-visible:text-accent-green',
                    S && 'text-accent-green [&>i>svg]:[stroke-width:2px]'
                  ),
                  iconClassName:
                    'group-hover:bg-accent-green/10 group-active:bg-accent-green/20 group-focus-visible:bg-accent-green/10 group-focus-visible:ring-accent-green/80',
                  tip: S ? 'Undo Retweet' : 'Retweet',
                  move: T,
                  stats: y,
                  iconName: 'ArrowPathRoundedSquareIcon',
                  viewTweet: u,
                  onClick: (0, l.aE)(S ? 'unretweet' : 'retweet', n, i)
                }),
                (0, r.jsx)(w, {
                  className: (0, o.Z)(
                    'hover:text-accent-pink focus-visible:text-accent-pink',
                    I && 'text-accent-pink [&>i>svg]:fill-accent-pink'
                  ),
                  iconClassName:
                    'group-hover:bg-accent-pink/10 group-active:bg-accent-pink/20 group-focus-visible:bg-accent-pink/10 group-focus-visible:ring-accent-pink/80',
                  tip: I ? 'Unlike' : 'Like',
                  move: P,
                  stats: k,
                  iconName: 'HeartIcon',
                  viewTweet: u,
                  onClick: (0, l.R1)(I ? 'unlike' : 'like', n, i)
                }),
                (0, r.jsx)(A, { userId: n, tweetId: i, viewTweet: u }),
                s &&
                  (0, r.jsx)(w, {
                    className:
                      'hover:text-accent-blue focus-visible:text-accent-blue',
                    iconClassName:
                      'group-hover:bg-accent-blue/10 group-active:bg-accent-blue/20 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-accent-blue/80',
                    tip: 'Analytics',
                    iconName: 'ChartPieIcon',
                    disabled: !0
                  })
              ]
            })
          ]
        });
      }
    },
    5053: function (e, t, n) {
      n.d(t, {
        t: function () {
          return Z;
        },
        o: function () {
          return S;
        }
      });
      var r = n(6042),
        a = n(9396),
        o = n(5893),
        l = n(1664),
        s = n.n(l),
        i = n(3136),
        c = n(5820),
        u = n(6010),
        d = n(2108),
        p = n(3040),
        f = n(6269),
        m = n(9099),
        v = n(2706),
        h = n(1400),
        b = n(1708),
        x = n(7391),
        g = n(4531),
        w = n(7876),
        y = n(44),
        k = n(4266),
        j = n(2365),
        N = n(1273);
      function P(e) {
        var t = e.type,
          n = e.children;
        return (0, o.jsxs)(
          i.E.div,
          (0, a.Z)(
            (0, r.Z)(
              {
                className:
                  'col-span-2 grid grid-cols-[48px,1fr] gap-3 text-light-secondary dark:text-dark-secondary'
              },
              N.TW
            ),
            {
              children: [
                (0, o.jsx)('i', {
                  className: 'justify-self-end',
                  children:
                    'pin' === t
                      ? (0, o.jsx)(j.d, {
                          className:
                            'h-5 w-5 -rotate-45 fill-light-secondary dark:fill-dark-secondary',
                          iconName: 'PinIcon'
                        })
                      : (0, o.jsx)(k.e, {
                          className: 'h-5 w-5',
                          iconName: 'ArrowPathRoundedSquareIcon'
                        })
                }),
                n
              ]
            }
          )
        );
      }
      var T = n(4851),
        I = n(581),
        S = {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.8 } },
          exit: { opacity: 0, transition: { duration: 0.2 } }
        };
      function Z(e) {
        var t = e.id,
          n = e.text,
          l = e.modal,
          k = e.images,
          j = e.parent,
          N = e.pinned,
          Z = e.profile,
          M = e.userLikes,
          C = e.createdBy,
          E = e.createdAt,
          R = e.parentTweet,
          B = e.userReplies,
          O = e.userRetweets,
          A = e.user,
          L = A.id,
          _ = A.name,
          z = A.username,
          F = A.verified,
          D = A.photoURL,
          J = (0, d.aC)().user,
          U = (0, p.d)(),
          Y = U.open,
          G = U.openModal,
          V = U.closeModal,
          W = '/tweet/'.concat(t),
          $ = null == J ? void 0 : J.id,
          H = $ === C,
          q = null != j ? j : {},
          Q = q.id,
          X = q.username,
          K = void 0 === X ? z : X,
          ee = null != Z ? Z : {},
          et = ee.id,
          en = ee.name,
          er = ee.username,
          ea = !!j,
          eo = O.includes(null != et ? et : '');
        return (0, o.jsxs)(
          i.E.article,
          (0, a.Z)(
            (0, r.Z)(
              {},
              l ? {} : (0, a.Z)((0, r.Z)({}, S), { layout: 'position' })
            ),
            {
              animate: (0, r.Z)(
                {},
                S.animate,
                R && { transition: { duration: 0.2 } }
              ),
              children: [
                (0, o.jsx)(m.u_, {
                  className: 'flex items-start justify-center',
                  modalClassName:
                    'bg-main-background rounded-2xl max-w-xl w-full my-8 overflow-hidden',
                  open: Y,
                  closeModal: V,
                  children: (0, o.jsx)(v.h, { tweet: e, closeModal: V })
                }),
                (0, o.jsx)(s(), {
                  href: W,
                  scroll: !ea,
                  children: (0, o.jsx)('a', {
                    className: (0, u.Z)(
                      'accent-tab hover-card relative flex flex-col \n             gap-y-4 px-4 py-3 outline-none duration-200',
                      R
                        ? 'mt-0.5 pt-2.5 pb-0'
                        : 'border-b border-light-border dark:border-dark-border'
                    ),
                    draggable: !1,
                    onClick: (0, f.wX)(200),
                    children: (0, o.jsxs)('div', {
                      className: 'grid grid-cols-[auto,1fr] gap-x-3 gap-y-1',
                      children: [
                        (0, o.jsx)(c.M, {
                          initial: !1,
                          children: l
                            ? null
                            : N
                            ? (0, o.jsx)(P, {
                                type: 'pin',
                                children: (0, o.jsx)('p', {
                                  className: 'text-sm font-bold',
                                  children: 'Pinned Tweet'
                                })
                              })
                            : eo &&
                              (0, o.jsx)(P, {
                                type: 'tweet',
                                children: (0, o.jsx)(s(), {
                                  href: er,
                                  children: (0, o.jsxs)('a', {
                                    className:
                                      'custom-underline truncate text-sm font-bold',
                                    children: [
                                      $ === et ? 'You' : en,
                                      ' Retweeted'
                                    ]
                                  })
                                })
                              })
                        }),
                        (0, o.jsxs)('div', {
                          className: 'flex flex-col items-center gap-2',
                          children: [
                            (0, o.jsx)(
                              x.Y,
                              (0, a.Z)((0, r.Z)({ avatar: !0, modal: l }, A), {
                                children: (0, o.jsx)(b.Y, {
                                  src: D,
                                  alt: _,
                                  username: z
                                })
                              })
                            ),
                            R &&
                              (0, o.jsx)('i', {
                                className:
                                  'hover-animation h-full w-0.5 bg-light-line-reply dark:bg-dark-line-reply'
                              })
                          ]
                        }),
                        (0, o.jsxs)('div', {
                          className: 'flex min-w-0 flex-col',
                          children: [
                            (0, o.jsxs)('div', {
                              className:
                                'flex justify-between gap-2 text-light-secondary dark:text-dark-secondary',
                              children: [
                                (0, o.jsxs)('div', {
                                  className:
                                    'flex gap-1 truncate xs:overflow-visible xs:whitespace-normal',
                                  children: [
                                    (0, o.jsx)(
                                      x.Y,
                                      (0, a.Z)((0, r.Z)({ modal: l }, A), {
                                        children: (0, o.jsx)(g.v, {
                                          name: _,
                                          username: z,
                                          verified: F,
                                          className:
                                            'text-light-primary dark:text-dark-primary'
                                        })
                                      })
                                    ),
                                    (0, o.jsx)(
                                      x.Y,
                                      (0, a.Z)((0, r.Z)({ modal: l }, A), {
                                        children: (0, o.jsx)(w.a, {
                                          username: z
                                        })
                                      })
                                    ),
                                    (0, o.jsx)(I.C, {
                                      tweetLink: W,
                                      createdAt: E
                                    })
                                  ]
                                }),
                                (0, o.jsx)('div', {
                                  className: 'px-4',
                                  children:
                                    !l &&
                                    (0, o.jsx)(y.r, {
                                      isOwner: H,
                                      ownerId: L,
                                      tweetId: t,
                                      parentId: Q,
                                      username: z,
                                      hasImages: !!k,
                                      createdBy: C
                                    })
                                })
                              ]
                            }),
                            (ea || l) &&
                              (0, o.jsxs)('p', {
                                className: (0, u.Z)(
                                  'text-light-secondary dark:text-dark-secondary',
                                  l && 'order-1 my-2'
                                ),
                                children: [
                                  'Replying to',
                                  ' ',
                                  (0, o.jsx)(s(), {
                                    href: '/user/'.concat(K),
                                    children: (0, o.jsxs)('a', {
                                      className:
                                        'custom-underline text-main-accent',
                                      children: ['@', K]
                                    })
                                  })
                                ]
                              }),
                            n &&
                              (0, o.jsx)('p', {
                                className: 'whitespace-pre-line break-words',
                                children: n
                              }),
                            (0, o.jsxs)('div', {
                              className: 'mt-1 flex flex-col gap-2',
                              children: [
                                k &&
                                  (0, o.jsx)(h.e, {
                                    tweet: !0,
                                    imagesPreview: k,
                                    previewCount: k.length
                                  }),
                                !l &&
                                  (0, o.jsx)(T.b, {
                                    reply: ea,
                                    userId: $,
                                    isOwner: H,
                                    tweetId: t,
                                    userLikes: M,
                                    userReplies: B,
                                    userRetweets: O,
                                    openModal: j ? void 0 : G
                                  })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  })
                })
              ]
            }
          )
        );
      }
    },
    3779: function (e, t, n) {
      n.d(t, {
        G: function () {
          return m;
        }
      });
      var r = n(6042),
        a = n(9396),
        o = n(5893),
        l = n(6010),
        s = n(5820),
        i = n(3136),
        c = n(6781),
        u = n(9570),
        d = n(8162),
        p = n(7238),
        f = {
          retweets: {
            title: 'Amplify Tweets you like',
            imageData: { src: '/assets/no-retweets.png', alt: 'No retweets' },
            description:
              'Share someone else’s Tweet on your timeline by Retweeting it. When you do, it’ll show up here.'
          },
          likes: {
            title: 'No Tweet Likes yet',
            imageData: { src: '/assets/no-likes.png', alt: 'No likes' },
            description: 'When you like a Tweet, it’ll show up here.'
          },
          following: {
            title: 'Be in the know',
            description:
              'Following accounts is an easy way to curate your timeline and know what’s happening with the topics and people you’re interested in.'
          },
          followers: {
            title: 'Looking for followers?',
            imageData: { src: '/assets/no-followers.png', alt: 'No followers' },
            description:
              'When someone follows this account, they’ll show up here. Tweeting and interacting with others helps boost followers.'
          }
        };
      function m(e) {
        var t = e.data,
          n = e.type,
          m = e.follow,
          v = e.loading,
          h = f[n],
          b = ['retweets', 'likes'].includes(n);
        return (0, o.jsx)('section', {
          className: (0, l.Z)(
            b && 'h-full overflow-y-auto [&>div:first-child>a]:mt-[52px]',
            v && 'flex items-center justify-center'
          ),
          children: v
            ? (0, o.jsx)(u.g, { className: b ? 'mt-[52px]' : 'mt-5' })
            : (0, o.jsx)(s.M, {
                mode: 'popLayout',
                children: (null == t ? void 0 : t.length)
                  ? t.map(function (e) {
                      return (0,
                      o.jsx)(i.E.div, (0, a.Z)((0, r.Z)({ layout: 'position' }, d.o), { children: (0, o.jsx)(p.O, (0, a.Z)((0, r.Z)({}, e), { follow: m, modal: b })) }), e.id);
                    })
                  : (0, o.jsx)(c.Q, (0, a.Z)((0, r.Z)({}, h), { modal: b }))
              })
        });
      }
    },
    8162: function (e, t, n) {
      n.d(t, {
        o: function () {
          return h;
        },
        w: function () {
          return b;
        }
      });
      var r = n(6042),
        a = n(9396),
        o = n(5893),
        l = n(7294),
        s = n(1163),
        i = n(5321),
        c = n(5820),
        u = n(3136),
        d = n(5662),
        p = n(5127),
        f = n(6269),
        m = n(1940),
        v = n(4531),
        h = {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.4 } },
          exit: { opacity: 0, transition: { duration: 0.2 } }
        };
      function b() {
        var e,
          t,
          n,
          b = (0, s.useRouter)(),
          x = b.pathname,
          g = b.query.id,
          w = (0, p.aF)(),
          y = w.user,
          k = w.loading,
          j = y ? y.id : null,
          N = (0, d.k)((0, i.JU)((0, m.bR)(null != j ? j : 'null'), 'stats'), {
            allowNull: !0,
            disabled: !j
          }),
          P = N.data,
          T = N.loading,
          I = null != P ? P : {},
          S = I.tweets,
          Z = I.likes,
          M = [
            (null !== (e = null == y ? void 0 : y.totalTweets) && void 0 !== e
              ? e
              : 0) +
              (null !== (t = null == S ? void 0 : S.length) && void 0 !== t
                ? t
                : 0),
            null == y ? void 0 : y.totalPhotos,
            null == Z ? void 0 : Z.length
          ],
          C = M[0],
          E = M[1],
          R = M[2],
          B = null !== (n = x.split('/').pop()) && void 0 !== n ? n : '',
          O = ['[id]', 'with_replies'].includes(B),
          A = ['following', 'followers'].includes(B);
        return (0, o.jsx)(c.M, {
          mode: 'popLayout',
          children:
            k || T
              ? (0, l.createElement)(
                  u.E.div,
                  (0, a.Z)(
                    (0, r.Z)(
                      {
                        className:
                          '-mb-1 inner:animate-pulse inner:rounded-lg inner:bg-light-secondary dark:inner:bg-dark-secondary'
                      },
                      h
                    ),
                    {
                      key: 'loading',
                      children: [
                        (0, o.jsx)('div', { className: 'mb-1 -mt-1 h-5 w-24' }),
                        (0, o.jsx)('div', { className: 'h-4 w-12' })
                      ]
                    }
                  )
                )
              : y
              ? (0, l.createElement)(
                  u.E.div,
                  (0, a.Z)((0, r.Z)({ className: '-mb-1 truncate' }, h), {
                    key: 'found',
                    children: [
                      (0, o.jsx)(v.v, {
                        tag: 'h2',
                        name: y.name,
                        className: '-mt-1 text-xl',
                        iconClassName: 'w-6 h-6',
                        verified: y.verified
                      }),
                      (0, o.jsx)('p', {
                        className:
                          'text-xs text-light-secondary dark:text-dark-secondary',
                        children: A
                          ? '@'.concat(y.username)
                          : O
                          ? C
                            ? ''
                                .concat(C, ' ')
                                .concat('Tweet'.concat((0, f.uz)(C)))
                            : 'No Tweet'
                          : 'media' === B
                          ? E
                            ? ''
                                .concat(E, ' Photo')
                                .concat((0, f.uz)(E), ' & GIF')
                                .concat((0, f.uz)(E))
                            : 'No Photo & GIF'
                          : R
                          ? ''.concat(R, ' Like').concat((0, f.uz)(R))
                          : 'No Like'
                      })
                    ]
                  })
                )
              : (0, l.createElement)(
                  u.E.h2,
                  (0, a.Z)((0, r.Z)({ className: 'text-xl font-bold' }, h), {
                    key: 'not-found'
                  }),
                  A ? '@'.concat(g) : 'User'
                )
        });
      }
    },
    5127: function (e, t, n) {
      n.d(t, {
        aF: function () {
          return s;
        },
        fS: function () {
          return l;
        }
      });
      var r = n(5893),
        a = n(7294),
        o = (0, a.createContext)(null);
      function l(e) {
        var t = e.value,
          n = e.children;
        return (0, r.jsx)(o.Provider, { value: t, children: n });
      }
      function s() {
        var e = (0, a.useContext)(o);
        if (!e)
          throw Error('useUser must be used within an UserContextProvider');
        return e;
      }
    },
    5651: function (e, t, n) {
      n.d(t, {
        z: function () {
          return u;
        }
      });
      var r = n(7568),
        a = n(6042),
        o = n(9396),
        l = n(655),
        s = n(7294),
        i = n(5321),
        c = n(1940);
      function u(e, t, n) {
        var u = (0, s.useState)(null),
          d = u[0],
          p = u[1],
          f = (0, s.useState)(!0),
          m = f[0],
          v = f[1],
          h = (0, s.useMemo)(
            function () {
              return e;
            },
            [e]
          ),
          b = null != n ? n : {},
          x = b.includeUser,
          g = b.disabled;
        return (
          (0, s.useEffect)(
            function () {
              if (!g) {
                x && !d && v(!0);
                var e,
                  n,
                  s =
                    ((e = (0, r.Z)(function (e) {
                      var t;
                      return (0, l.__generator)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            var n;
                            return [
                              4,
                              Promise.all(
                                e.map(
                                  ((n = (0, r.Z)(function (e) {
                                    var t;
                                    return (0,
                                    l.__generator)(this, function (n) {
                                      switch (n.label) {
                                        case 0:
                                          return [
                                            4,
                                            (0, i.QT)(
                                              (0, i.JU)(c.W$, e.createdBy)
                                            )
                                          ];
                                        case 1:
                                          return (
                                            (t = n.sent().data()),
                                            [
                                              2,
                                              (0, o.Z)((0, a.Z)({}, e), {
                                                user: t
                                              })
                                            ]
                                          );
                                      }
                                    });
                                  })),
                                  function (e) {
                                    return n.apply(this, arguments);
                                  })
                                )
                              )
                            ];
                          case 1:
                            return p(t.sent()), v(!1), [2];
                        }
                      });
                    })),
                    function (t) {
                      return e.apply(this, arguments);
                    });
                ((n = (0, r.Z)(function () {
                  var e, n;
                  return (0, l.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          e.trys.push([0, 2, , 3]),
                          [
                            4,
                            Promise.all(
                              h.map(function (e) {
                                return (0, i.QT)((0, i.JU)(t, e));
                              })
                            )
                          ]
                        );
                      case 1:
                        if (
                          !(n = e
                            .sent()
                            .filter(function (e) {
                              return e.exists();
                            })
                            .map(function (e) {
                              return e.data({ serverTimestamps: 'estimate' });
                            })).length
                        )
                          return p(null), v(!1), [2];
                        return x ? s(n) : (p(n), v(!1)), [3, 3];
                      case 2:
                        return e.sent(), p(null), v(!1), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                })),
                function () {
                  return n.apply(this, arguments);
                })();
              }
            },
            [h]
          ),
          { data: d, loading: m }
        );
      }
    },
    6215: function (e, t, n) {
      n.d(t, {
        J: function () {
          return z;
        }
      });
      var r,
        a,
        o = n(7294),
        l = n(2984),
        s = n(2351),
        i = n(3784),
        c = n(9946),
        u = n(1363),
        d = n(4103),
        p = n(4575),
        f = n(6567),
        m = n(4157),
        v = n(9650),
        h = n(5466),
        b = n(1074),
        x = n(4007),
        g = n(6045),
        w = n(3781),
        y = n(638),
        k =
          (((r = k || {})[(r.Open = 0)] = 'Open'),
          (r[(r.Closed = 1)] = 'Closed'),
          r),
        j =
          (((a = j || {})[(a.TogglePopover = 0)] = 'TogglePopover'),
          (a[(a.ClosePopover = 1)] = 'ClosePopover'),
          (a[(a.SetButton = 2)] = 'SetButton'),
          (a[(a.SetButtonId = 3)] = 'SetButtonId'),
          (a[(a.SetPanel = 4)] = 'SetPanel'),
          (a[(a.SetPanelId = 5)] = 'SetPanelId'),
          a);
      let N = {
          0: (e) => ({
            ...e,
            popoverState: (0, l.E)(e.popoverState, { 0: 1, 1: 0 })
          }),
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId }
        },
        P = (0, o.createContext)(null);
      function T(e) {
        let t = (0, o.useContext)(P);
        if (null === t) {
          let n = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(n, T), n);
        }
        return t;
      }
      P.displayName = 'PopoverContext';
      let I = (0, o.createContext)(null);
      function S(e) {
        let t = (0, o.useContext)(I);
        if (null === t) {
          let n = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(n, S), n);
        }
        return t;
      }
      I.displayName = 'PopoverAPIContext';
      let Z = (0, o.createContext)(null);
      function M() {
        return (0, o.useContext)(Z);
      }
      Z.displayName = 'PopoverGroupContext';
      let C = (0, o.createContext)(null);
      function E(e, t) {
        return (0, l.E)(t.type, N, e, t);
      }
      C.displayName = 'PopoverPanelContext';
      let R = (0, s.yV)(function (e, t) {
          var n;
          let r = `headlessui-popover-button-${(0, c.M)()}`,
            a = `headlessui-popover-panel-${(0, c.M)()}`,
            u = (0, o.useRef)(null),
            d = (0, i.T)(
              t,
              (0, i.h)((e) => {
                u.current = e;
              })
            ),
            m = (0, o.useReducer)(E, {
              popoverState: 1,
              button: null,
              buttonId: r,
              panel: null,
              panelId: a,
              beforePanelSentinel: (0, o.createRef)(),
              afterPanelSentinel: (0, o.createRef)()
            }),
            [
              {
                popoverState: h,
                button: g,
                panel: y,
                beforePanelSentinel: k,
                afterPanelSentinel: j
              },
              N
            ] = m,
            T = (0, b.i)(null != (n = u.current) ? n : g);
          (0, o.useEffect)(() => N({ type: 3, buttonId: r }), [r, N]),
            (0, o.useEffect)(() => N({ type: 5, panelId: a }), [a, N]);
          let S = (0, o.useMemo)(() => {
              if (!g || !y) return !1;
              for (let e of document.querySelectorAll('body > *'))
                if (
                  Number(null == e ? void 0 : e.contains(g)) ^
                  Number(null == e ? void 0 : e.contains(y))
                )
                  return !0;
              let t = (0, p.GO)(),
                n = t.indexOf(g),
                r = (n + t.length - 1) % t.length,
                a = (n + 1) % t.length,
                o = t[r],
                l = t[a];
              return !y.contains(o) && !y.contains(l);
            }, [g, y]),
            Z = (0, o.useMemo)(
              () => ({ buttonId: r, panelId: a, close: () => N({ type: 1 }) }),
              [r, a, N]
            ),
            C = M(),
            R = null == C ? void 0 : C.registerPopover,
            B = (0, w.z)(() => {
              var e;
              return null !=
                (e = null == C ? void 0 : C.isFocusWithinPopoverGroup())
                ? e
                : (null == T ? void 0 : T.activeElement) &&
                    ((null == g ? void 0 : g.contains(T.activeElement)) ||
                      (null == y ? void 0 : y.contains(T.activeElement)));
            });
          (0, o.useEffect)(() => (null == R ? void 0 : R(Z)), [R, Z]),
            (0, x.O)(
              null == T ? void 0 : T.defaultView,
              'focus',
              (e) => {
                var t, n, r, a;
                0 === h &&
                  (B() ||
                    !g ||
                    !y ||
                    (null !=
                      (n = null == (t = k.current) ? void 0 : t.contains) &&
                      n.call(t, e.target)) ||
                    (null !=
                      (a = null == (r = j.current) ? void 0 : r.contains) &&
                      a.call(r, e.target)) ||
                    N({ type: 1 }));
              },
              !0
            ),
            (0, v.O)(
              [g, y],
              (e, t) => {
                N({ type: 1 }),
                  (0, p.sP)(t, p.tJ.Loose) ||
                    (e.preventDefault(), null == g || g.focus());
              },
              0 === h
            );
          let O = (0, w.z)((e) => {
              N({ type: 1 });
              let t = e
                ? e instanceof HTMLElement
                  ? e
                  : 'current' in e && e.current instanceof HTMLElement
                  ? e.current
                  : g
                : g;
              null == t || t.focus();
            }),
            A = (0, o.useMemo)(() => ({ close: O, isPortalled: S }), [O, S]),
            L = (0, o.useMemo)(() => ({ open: 0 === h, close: O }), [h, O]);
          return o.createElement(
            P.Provider,
            { value: m },
            o.createElement(
              I.Provider,
              { value: A },
              o.createElement(
                f.up,
                { value: (0, l.E)(h, { 0: f.ZM.Open, 1: f.ZM.Closed }) },
                (0, s.sY)({
                  ourProps: { ref: d },
                  theirProps: e,
                  slot: L,
                  defaultTag: 'div',
                  name: 'Popover'
                })
              )
            )
          );
        }),
        B = (0, s.yV)(function (e, t) {
          let [n, r] = T('Popover.Button'),
            { isPortalled: a } = S('Popover.Button'),
            f = (0, o.useRef)(null),
            v = `headlessui-focus-sentinel-${(0, c.M)()}`,
            h = M(),
            x = null == h ? void 0 : h.closeOthers,
            k = (0, o.useContext)(C),
            j = null !== k && k === n.panelId,
            N = (0, i.T)(f, t, j ? null : (e) => r({ type: 2, button: e })),
            P = (0, i.T)(f, t),
            I = (0, b.i)(f),
            Z = (0, w.z)((e) => {
              var t, a, o;
              if (j) {
                if (1 === n.popoverState) return;
                switch (e.key) {
                  case u.R.Space:
                  case u.R.Enter:
                    e.preventDefault(),
                      null == (a = (t = e.target).click) || a.call(t),
                      r({ type: 1 }),
                      null == (o = n.button) || o.focus();
                }
              } else
                switch (e.key) {
                  case u.R.Space:
                  case u.R.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === n.popoverState && (null == x || x(n.buttonId)),
                      r({ type: 0 });
                    break;
                  case u.R.Escape:
                    if (0 !== n.popoverState)
                      return null == x ? void 0 : x(n.buttonId);
                    if (
                      !f.current ||
                      ((null == I ? void 0 : I.activeElement) &&
                        !f.current.contains(I.activeElement))
                    )
                      return;
                    e.preventDefault(), e.stopPropagation(), r({ type: 1 });
                }
            }),
            E = (0, w.z)((e) => {
              j || (e.key === u.R.Space && e.preventDefault());
            }),
            R = (0, w.z)((t) => {
              var a, o;
              (0, d.P)(t.currentTarget) ||
                e.disabled ||
                (j
                  ? (r({ type: 1 }), null == (a = n.button) || a.focus())
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === n.popoverState && (null == x || x(n.buttonId)),
                    r({ type: 0 }),
                    null == (o = n.button) || o.focus()));
            }),
            B = (0, w.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            O = 0 === n.popoverState,
            A = (0, o.useMemo)(() => ({ open: O }), [O]),
            L = (0, m.f)(e, f),
            _ = j
              ? { ref: P, type: L, onKeyDown: Z, onClick: R }
              : {
                  ref: N,
                  id: n.buttonId,
                  type: L,
                  'aria-expanded': e.disabled ? void 0 : 0 === n.popoverState,
                  'aria-controls': n.panel ? n.panelId : void 0,
                  onKeyDown: Z,
                  onKeyUp: E,
                  onClick: R,
                  onMouseDown: B
                },
            z = (0, y.l)(),
            F = (0, w.z)(() => {
              let e = n.panel;
              e &&
                (0, l.E)(z.current, {
                  [y.N.Forwards]: () => (0, p.jA)(e, p.TO.First),
                  [y.N.Backwards]: () => (0, p.jA)(e, p.TO.Last)
                });
            });
          return o.createElement(
            o.Fragment,
            null,
            (0, s.sY)({
              ourProps: _,
              theirProps: e,
              slot: A,
              defaultTag: 'button',
              name: 'Popover.Button'
            }),
            O &&
              !j &&
              a &&
              o.createElement(g._, {
                id: v,
                features: g.A.Focusable,
                as: 'button',
                type: 'button',
                onFocus: F
              })
          );
        }),
        O = s.AN.RenderStrategy | s.AN.Static,
        A = (0, s.yV)(function (e, t) {
          let [{ popoverState: n }, r] = T('Popover.Overlay'),
            a = (0, i.T)(t),
            l = `headlessui-popover-overlay-${(0, c.M)()}`,
            u = (0, f.oJ)(),
            p = null !== u ? u === f.ZM.Open : 0 === n,
            m = (0, w.z)((e) => {
              if ((0, d.P)(e.currentTarget)) return e.preventDefault();
              r({ type: 1 });
            }),
            v = (0, o.useMemo)(() => ({ open: 0 === n }), [n]);
          return (0,
          s.sY)({ ourProps: { ref: a, id: l, 'aria-hidden': !0, onClick: m }, theirProps: e, slot: v, defaultTag: 'div', features: O, visible: p, name: 'Popover.Overlay' });
        }),
        L = s.AN.RenderStrategy | s.AN.Static,
        _ = (0, s.yV)(function (e, t) {
          let { focus: n = !1, ...r } = e,
            [a, d] = T('Popover.Panel'),
            { close: m, isPortalled: v } = S('Popover.Panel'),
            h = `headlessui-focus-sentinel-before-${(0, c.M)()}`,
            x = `headlessui-focus-sentinel-after-${(0, c.M)()}`,
            k = (0, o.useRef)(null),
            j = (0, i.T)(k, t, (e) => {
              d({ type: 4, panel: e });
            }),
            N = (0, b.i)(k),
            P = (0, f.oJ)(),
            I = null !== P ? P === f.ZM.Open : 0 === a.popoverState,
            Z = (0, w.z)((e) => {
              var t;
              if (e.key === u.R.Escape) {
                if (
                  0 !== a.popoverState ||
                  !k.current ||
                  ((null == N ? void 0 : N.activeElement) &&
                    !k.current.contains(N.activeElement))
                )
                  return;
                e.preventDefault(),
                  e.stopPropagation(),
                  d({ type: 1 }),
                  null == (t = a.button) || t.focus();
              }
            });
          (0, o.useEffect)(() => {
            var t;
            e.static ||
              (1 === a.popoverState &&
                (null == (t = e.unmount) || t) &&
                d({ type: 4, panel: null }));
          }, [a.popoverState, e.unmount, e.static, d]),
            (0, o.useEffect)(() => {
              if (!n || 0 !== a.popoverState || !k.current) return;
              let e = null == N ? void 0 : N.activeElement;
              k.current.contains(e) || (0, p.jA)(k.current, p.TO.First);
            }, [n, k, a.popoverState]);
          let M = (0, o.useMemo)(
              () => ({ open: 0 === a.popoverState, close: m }),
              [a, m]
            ),
            E = {
              ref: j,
              id: a.panelId,
              onKeyDown: Z,
              onBlur:
                n && 0 === a.popoverState
                  ? (e) => {
                      var t, n, r, o, l;
                      let s = e.relatedTarget;
                      !s ||
                        !k.current ||
                        (null != (t = k.current) && t.contains(s)) ||
                        (d({ type: 1 }),
                        ((null ==
                        (r =
                          null == (n = a.beforePanelSentinel.current)
                            ? void 0
                            : n.contains)
                          ? void 0
                          : r.call(n, s)) ||
                          (null ==
                          (l =
                            null == (o = a.afterPanelSentinel.current)
                              ? void 0
                              : o.contains)
                            ? void 0
                            : l.call(o, s))) &&
                          s.focus({ preventScroll: !0 }));
                    }
                  : void 0,
              tabIndex: -1
            },
            R = (0, y.l)(),
            B = (0, w.z)(() => {
              let e = k.current;
              e &&
                (0, l.E)(R.current, {
                  [y.N.Forwards]() {
                    (0, p.jA)(e, p.TO.First);
                  },
                  [y.N.Backwards]() {
                    var e;
                    null == (e = a.button) || e.focus({ preventScroll: !0 });
                  }
                });
            }),
            O = (0, w.z)(() => {
              let e = k.current;
              e &&
                (0, l.E)(R.current, {
                  [y.N.Forwards]() {
                    var e, t, n;
                    if (!a.button) return;
                    let r = (0, p.GO)(),
                      o = r.indexOf(a.button),
                      l = r.slice(0, o + 1),
                      s = [...r.slice(o + 1), ...l];
                    for (let i of s.slice())
                      if (
                        (null ==
                        (t =
                          null == (e = null == i ? void 0 : i.id)
                            ? void 0
                            : e.startsWith)
                          ? void 0
                          : t.call(e, 'headlessui-focus-sentinel-')) ||
                        (null == (n = a.panel) ? void 0 : n.contains(i))
                      ) {
                        let c = s.indexOf(i);
                        -1 !== c && s.splice(c, 1);
                      }
                    (0, p.jA)(s, p.TO.First, !1);
                  },
                  [y.N.Backwards]: () => (0, p.jA)(e, p.TO.Last)
                });
            });
          return o.createElement(
            C.Provider,
            { value: a.panelId },
            I &&
              v &&
              o.createElement(g._, {
                id: h,
                ref: a.beforePanelSentinel,
                features: g.A.Focusable,
                as: 'button',
                type: 'button',
                onFocus: B
              }),
            (0, s.sY)({
              ourProps: E,
              theirProps: r,
              slot: M,
              defaultTag: 'div',
              features: L,
              visible: I,
              name: 'Popover.Panel'
            }),
            I &&
              v &&
              o.createElement(g._, {
                id: x,
                ref: a.afterPanelSentinel,
                features: g.A.Focusable,
                as: 'button',
                type: 'button',
                onFocus: O
              })
          );
        }),
        z = Object.assign(R, {
          Button: B,
          Overlay: A,
          Panel: _,
          Group: (0, s.yV)(function (e, t) {
            let n = (0, o.useRef)(null),
              r = (0, i.T)(n, t),
              [a, l] = (0, o.useState)([]),
              c = (0, w.z)((e) => {
                l((t) => {
                  let n = t.indexOf(e);
                  if (-1 !== n) {
                    let r = t.slice();
                    return r.splice(n, 1), r;
                  }
                  return t;
                });
              }),
              u = (0, w.z)((e) => (l((t) => [...t, e]), () => c(e))),
              d = (0, w.z)(() => {
                var e;
                let t = (0, h.r)(n);
                if (!t) return !1;
                let r = t.activeElement;
                return (
                  !!(null != (e = n.current) && e.contains(r)) ||
                  a.some((e) => {
                    var n, a;
                    return (
                      (null == (n = t.getElementById(e.buttonId))
                        ? void 0
                        : n.contains(r)) ||
                      (null == (a = t.getElementById(e.panelId))
                        ? void 0
                        : a.contains(r))
                    );
                  })
                );
              }),
              p = (0, w.z)((e) => {
                for (let t of a) t.buttonId !== e && t.close();
              }),
              f = (0, o.useMemo)(
                () => ({
                  registerPopover: u,
                  unregisterPopover: c,
                  isFocusWithinPopoverGroup: d,
                  closeOthers: p
                }),
                [u, c, d, p]
              ),
              m = (0, o.useMemo)(() => ({}), []);
            return o.createElement(
              Z.Provider,
              { value: f },
              (0, s.sY)({
                ourProps: { ref: r },
                theirProps: e,
                slot: m,
                defaultTag: 'div',
                name: 'Popover.Group'
              })
            );
          })
        });
    }
  }
]);
