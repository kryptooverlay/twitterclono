'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [501],
  {
    7471: function (e, n, r) {
      r.d(n, {
        j: function () {
          return b;
        },
        o: function () {
          return v;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(5893),
        s = r(1664),
        o = r.n(s),
        l = r(6010),
        c = r(3136),
        d = r(1944),
        u = r(6269),
        m = r(8100),
        h = r(6028),
        x = r(4266),
        f = r(4685),
        p = r(3276),
        g = r(9570),
        v = {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8 }
        };
      function b(e) {
        var n,
          r,
          s,
          b,
          j,
          y = e.inTrendsPage,
          w =
            ((n = y ? 100 : 10),
            (b = (s = (0, m.ZP)(
              '/api/trends/place/'
                .concat(1)
                .concat(n ? '?limit='.concat(n) : ''),
              { refreshInterval: 3e4 }
            )).data),
            (j = s.error),
            b && 'errors' in b
              ? {
                  data: void 0,
                  loading: !1,
                  error: Error(
                    'Sorry we could not find any trends for this place'
                  )
                }
              : { data: b, error: j, loading: !j && !b }),
          N = w.data,
          k = w.loading,
          C = null != N ? N : {},
          Z = C.trends,
          I = C.location;
        return (0, i.jsx)('section', {
          className: (0, l.Z)(
            !y && 'hover-animation rounded-2xl bg-main-sidebar-background'
          ),
          children: k
            ? (0, i.jsx)(g.g, {})
            : Z
            ? (0, i.jsxs)(
                c.E.div,
                (0, a.Z)(
                  (0, t.Z)(
                    {
                      className: (0, l.Z)(
                        'inner:px-4 inner:py-3',
                        y && 'mt-0.5'
                      )
                    },
                    v
                  ),
                  {
                    children: [
                      !y &&
                        (0, i.jsx)('h2', {
                          className: 'text-xl font-extrabold',
                          children: 'Trends for you'
                        }),
                      Z.map(function (e) {
                        var n = e.name,
                          r = e.query,
                          t = e.tweet_volume,
                          a = e.url;
                        return (0,
                        i.jsx)(o(), { href: a, children: (0, i.jsxs)('a', { className: 'hover-animation accent-tab hover-card relative flex cursor-not-allowed flex-col gap-0.5', onClick: (0, u.Db)(), children: [(0, i.jsx)('div', { className: 'absolute right-2 top-2', children: (0, i.jsxs)(f.z, { className: 'hover-animation group relative cursor-not-allowed p-2 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/20 focus-visible:!ring-accent-blue/80', onClick: (0, u.Db)(), children: [(0, i.jsx)(x.e, { className: 'h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary', iconName: 'EllipsisHorizontalIcon' }), (0, i.jsx)(p.e, { tip: 'More' })] }) }), (0, i.jsxs)('p', { className: 'text-sm text-light-secondary dark:text-dark-secondary', children: ['Trending', ' ', 'Worldwide' === I ? 'Worldwide' : 'in '.concat(I)] }), (0, i.jsx)('p', { className: 'font-bold', children: n }), (0, i.jsxs)('p', { className: 'text-sm text-light-secondary dark:text-dark-secondary', children: [(0, d.u)(t), ' tweets'] })] }) }, r);
                      }),
                      !y &&
                        (0, i.jsx)(o(), {
                          href: '/trends',
                          children: (0, i.jsx)('a', {
                            className:
                              'custom-button accent-tab hover-card block w-full rounded-2xl rounded-t-none text-center text-main-accent',
                            children: 'Show more'
                          })
                        })
                    ]
                  }
                )
              )
            : (0, i.jsx)(h.j, {})
        });
      }
    },
    643: function (e, n, r) {
      r.d(n, {
        V: function () {
          return s;
        }
      });
      var t = r(5893),
        a = r(2365),
        i = r(585);
      function s() {
        return (0, t.jsxs)('main', {
          className: 'flex min-h-screen items-center justify-center',
          children: [
            (0, t.jsx)(i.H, {
              title: 'Twitter',
              description:
                'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
              image: '/home.png'
            }),
            (0, t.jsx)('i', {
              children: (0, t.jsx)(a.d, {
                className: 'h-20 w-20 text-[#1DA1F2]',
                iconName: 'TwitterIcon'
              })
            })
          ]
        });
      }
    },
    585: function (e, n, r) {
      r.d(n, {
        H: function () {
          return l;
        }
      });
      var t = r(5893),
        a = r(1163),
        i = r(9008),
        s = r.n(i),
        o = r(1923);
      function l(e) {
        var n = e.title,
          r = e.image,
          i = e.description,
          l = (0, a.useRouter)().asPath;
        return (0, t.jsxs)(s(), {
          children: [
            (0, t.jsx)('title', { children: n }),
            (0, t.jsx)('meta', { name: 'og:title', content: n }),
            i && (0, t.jsx)('meta', { name: 'description', content: i }),
            i && (0, t.jsx)('meta', { name: 'og:description', content: i }),
            r && (0, t.jsx)('meta', { property: 'og:image', content: r }),
            (0, t.jsx)('meta', {
              name: 'og:url',
              content: ''.concat(o.f7).concat('/' === l ? '' : l)
            })
          ]
        });
      }
    },
    722: function (e, n, r) {
      r.d(n, {
        t: function () {
          return i;
        }
      });
      var t = r(5893),
        a = r(6010);
      function i(e) {
        var n = e.children,
          r = e.className;
        return (0, t.jsx)('main', {
          className: (0, a.Z)(
            'hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0\n         border-light-border pb-96 dark:border-dark-border xs:border-x',
            r
          ),
          children: n
        });
      }
    },
    4856: function (e, n, r) {
      r.d(n, {
        c: function () {
          return B;
        }
      });
      var t = r(5893),
        a = r(6010),
        i = r(4685),
        s = r(4266),
        o = r(3276),
        l = r(6042),
        c = r(9396),
        d = r(2108),
        u = r(3040),
        m = r(9099),
        h = r(828),
        x = r(7294),
        f = r(1664),
        p = r.n(f),
        g = r(1708),
        v = r(4664),
        b = r(4531),
        j = r(7876),
        y = r(6269);
      function w(e) {
        var n = e.href,
          r = e.bottom,
          i = e.linkName,
          o = e.iconName,
          l = e.disabled;
        return (0, t.jsx)(
          p(),
          {
            href: n,
            children: (0, t.jsxs)('a', {
              className: (0, a.Z)(
                'custom-button accent-tab accent-bg-tab flex items-center rounded-md font-bold \n           transition hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c]\n           dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white',
                r ? 'gap-2 p-1.5 text-base' : 'gap-4 p-2 text-xl',
                l && 'cursor-not-allowed'
              ),
              onClick: l ? (0, y.Db)() : void 0,
              children: [
                (0, t.jsx)(s.e, {
                  className: r ? 'h-5 w-5' : 'h-7 w-7',
                  iconName: o
                }),
                i
              ]
            })
          },
          n
        );
      }
      var N = r(9253),
        k = r(5691),
        C = [
          {
            href: '/trends',
            linkName: 'Topics',
            iconName: 'ChatBubbleBottomCenterTextIcon'
          },
          {
            href: '/bookmarks',
            linkName: 'Bookmarks',
            iconName: 'BookmarkIcon'
          },
          {
            href: '/lists',
            linkName: 'Lists',
            iconName: 'Bars3BottomLeftIcon',
            disabled: !0
          },
          {
            href: '/people',
            linkName: 'Twitter Circle',
            iconName: 'UserGroupIcon'
          }
        ],
        Z = [
          {
            href: '/settings',
            linkName: 'Settings and privacy',
            iconName: 'Cog8ToothIcon',
            disabled: !0
          },
          {
            href: '/help-center',
            linkName: 'Help center',
            iconName: 'QuestionMarkCircleIcon',
            disabled: !0
          }
        ];
      function I(e) {
        var n = e.name,
          r = e.username,
          a = e.verified,
          o = e.photoURL,
          f = e.following,
          y = e.followers,
          I = e.coverPhotoURL,
          M = e.closeModal,
          T = (0, d.aC)().signOut,
          E = (0, u.d)(),
          L = E.open,
          z = E.openModal,
          D = E.closeModal,
          F = (0, u.d)(),
          S = F.open,
          _ = F.openModal,
          R = F.closeModal,
          U = [
            ['following', 'Following', f.length],
            ['followers', 'Followers', y.length]
          ],
          P = '/user/'.concat(r);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(m.u_, {
              className: 'items-center justify-center xs:flex',
              modalClassName:
                'max-w-xl bg-main-background w-full p-8 rounded-2xl hover-animation',
              open: L,
              closeModal: D,
              children: (0, t.jsx)(k.J, { closeModal: D })
            }),
            (0, t.jsx)(m.u_, {
              modalClassName:
                'max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: S,
              closeModal: R,
              children: (0, t.jsx)(N.W, {
                useIcon: !0,
                focusOnMainBtn: !0,
                title: 'Log out of Twitter?',
                description:
                  'You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.',
                mainBtnLabel: 'Log out',
                action: T,
                closeModal: R
              })
            }),
            (0, t.jsx)(B, {
              useActionButton: !0,
              className: 'flex flex-row-reverse items-center justify-between',
              iconName: 'XMarkIcon',
              title: 'Account info',
              tip: 'Close',
              action: M
            }),
            (0, t.jsxs)('section', {
              className: 'mt-0.5 flex flex-col gap-2 px-4',
              children: [
                (0, t.jsx)(p(), {
                  href: P,
                  children: (0, t.jsx)('a', {
                    className: 'blur-picture relative h-20 rounded-md',
                    children: I
                      ? (0, t.jsx)(v.o, {
                          useSkeleton: !0,
                          imgClassName: 'rounded-md',
                          src: I,
                          alt: n,
                          layout: 'fill'
                        })
                      : (0, t.jsx)('div', {
                          className:
                            'h-full rounded-md bg-light-line-reply dark:bg-dark-line-reply'
                        })
                  })
                }),
                (0, t.jsx)('div', {
                  className: 'mb-8 ml-2 -mt-4',
                  children: (0, t.jsx)(g.Y, {
                    className:
                      'absolute -translate-y-1/2 bg-main-background p-1 hover:brightness-100 [&>figure>span]:[transition:200ms] [&:hover>figure>span]:brightness-75',
                    username: r,
                    src: o,
                    alt: n,
                    size: 60
                  })
                }),
                (0, t.jsxs)('div', {
                  className:
                    'flex flex-col gap-4 rounded-xl bg-main-sidebar-background p-4',
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'flex flex-col',
                      children: [
                        (0, t.jsx)(b.v, {
                          name: n,
                          username: r,
                          verified: a,
                          className: '-mb-1'
                        }),
                        (0, t.jsx)(j.a, { username: r })
                      ]
                    }),
                    (0, t.jsx)('div', {
                      className: 'text-secondary flex gap-4',
                      children: U.map(function (e) {
                        var n = (0, h.Z)(e, 3),
                          r = n[0],
                          a = n[1],
                          i = n[2];
                        return (0,
                        t.jsx)(p(), { href: ''.concat(P, '/').concat(r), children: (0, t.jsxs)('a', { className: 'hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary', children: [(0, t.jsx)('p', { className: 'font-bold', children: i }), (0, t.jsx)('p', { className: 'text-light-secondary dark:text-dark-secondary', children: a })] }) }, r);
                      })
                    }),
                    (0, t.jsx)('i', {
                      className:
                        'h-0.5 bg-light-line-reply dark:bg-dark-line-reply'
                    }),
                    (0, t.jsxs)('nav', {
                      className: 'flex flex-col',
                      children: [
                        (0, t.jsx)(w, {
                          href: '/user/'.concat(r),
                          iconName: 'UserIcon',
                          linkName: 'Profile'
                        }),
                        C.map(function (e) {
                          return (0,
                          x.createElement)(w, (0, c.Z)((0, l.Z)({}, e), { key: e.href }));
                        })
                      ]
                    }),
                    (0, t.jsx)('i', {
                      className:
                        'h-0.5 bg-light-line-reply dark:bg-dark-line-reply'
                    }),
                    (0, t.jsxs)('nav', {
                      className: 'flex flex-col',
                      children: [
                        Z.map(function (e) {
                          return (0,
                          x.createElement)(w, (0, c.Z)((0, l.Z)({ bottom: !0 }, e), { key: e.href }));
                        }),
                        (0, t.jsxs)(i.z, {
                          className:
                            'accent-tab accent-bg-tab flex items-center gap-2 rounded-md p-1.5 font-bold transition hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c] dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white',
                          onClick: z,
                          children: [
                            (0, t.jsx)(s.e, {
                              className: 'h-5 w-5',
                              iconName: 'PaintBrushIcon'
                            }),
                            'Display'
                          ]
                        }),
                        (0, t.jsxs)(i.z, {
                          className:
                            'accent-tab accent-bg-tab flex items-center gap-2 rounded-md p-1.5 font-bold transition hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c] dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white',
                          onClick: _,
                          children: [
                            (0, t.jsx)(s.e, {
                              className: 'h-5 w-5',
                              iconName: 'ArrowRightOnRectangleIcon'
                            }),
                            'Log out'
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
      var M = {
        initial: { x: '-100%', opacity: 0.8 },
        animate: {
          x: -8,
          opacity: 1,
          transition: { type: 'spring', duration: 0.8 }
        },
        exit: { x: '-100%', opacity: 0.8, transition: { duration: 0.4 } }
      };
      function T() {
        var e = (0, d.aC)().user,
          n = e.photoURL,
          r = e.name,
          a = (0, u.d)(),
          s = a.open,
          o = a.openModal,
          h = a.closeModal;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(m.u_, {
              className: 'p-0',
              modalAnimation: M,
              modalClassName: 'pb-4 pl-2 min-h-screen w-72 bg-main-background',
              open: s,
              closeModal: h,
              children: (0, t.jsx)(
                I,
                (0, c.Z)((0, l.Z)({}, e), { closeModal: h })
              )
            }),
            (0, t.jsx)(i.z, {
              className: 'accent-tab p-0 xs:hidden',
              onClick: o,
              children: (0, t.jsx)(g.Y, { src: n, alt: r, size: 30 })
            })
          ]
        });
      }
      function B(e) {
        var n = e.tip,
          r = e.title,
          l = e.children,
          c = e.iconName,
          d = e.className,
          u = e.disableSticky,
          m = e.useActionButton,
          h = e.useMobileSidebar,
          x = e.action;
        return (0, t.jsxs)('header', {
          className: (0, a.Z)(
            'hover-animation even z-10 bg-main-background/60 px-4 py-2 backdrop-blur-md',
            !u && 'sticky top-0',
            null != d ? d : 'flex items-center gap-6'
          ),
          children: [
            m &&
              (0, t.jsxs)(i.z, {
                className:
                  'dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                onClick: x,
                children: [
                  (0, t.jsx)(s.e, {
                    className: 'h-5 w-5',
                    iconName: null != c ? c : 'ArrowLeftIcon'
                  }),
                  (0, t.jsx)(o.e, { tip: null != n ? n : 'Back' })
                ]
              }),
            r &&
              (0, t.jsxs)('div', {
                className: 'flex gap-8',
                children: [
                  h && (0, t.jsx)(T, {}),
                  (0, t.jsx)(
                    'h2',
                    { className: 'text-xl font-bold', children: r },
                    r
                  )
                ]
              }),
            l
          ]
        });
      }
    },
    1400: function (e, n, r) {
      r.d(n, {
        e: function () {
          return j;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(5893),
        s = r(7294),
        o = r(5820),
        l = r(3136),
        c = r(6010),
        d = r(3040),
        u = r(6269),
        m = r(3644),
        h = r(9099),
        x = r(4664),
        f = r(4685),
        p = r(4266),
        g = r(3276),
        v = {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
          exit: { opacity: 0, scale: 0.5 },
          transition: { type: 'spring', duration: 0.5 }
        },
        b = {
          1: ['rounded-2xl'],
          2: ['rounded-tl-2xl rounded-bl-2xl', 'rounded-tr-2xl rounded-br-2xl'],
          3: [
            'rounded-tl-2xl rounded-bl-2xl',
            'rounded-tr-2xl',
            'rounded-br-2xl'
          ],
          4: [
            'rounded-tl-2xl',
            'rounded-tr-2xl',
            'rounded-bl-2xl',
            'rounded-br-2xl'
          ]
        };
      function j(e) {
        var n = e.tweet,
          r = e.viewTweet,
          j = e.previewCount,
          y = e.imagesPreview,
          w = e.removeImage,
          N = (0, s.useState)(0),
          k = N[0],
          C = N[1],
          Z = (0, s.useState)(null),
          I = Z[0],
          M = Z[1],
          T = (0, s.useRef)(null),
          B = (0, d.d)(),
          E = B.open,
          L = B.openModal,
          z = B.closeModal;
        (0, s.useEffect)(
          function () {
            M(y[k]);
          },
          [k]
        );
        var D = function () {
            T.current && T.current.pause();
          },
          F = function (e) {
            return function () {
              C(
                'prev' === e
                  ? 0 === k
                    ? j - 1
                    : k - 1
                  : k === j - 1
                  ? 0
                  : k + 1
              );
            };
          },
          S = null != n ? n : r;
        return (0, i.jsxs)('div', {
          className: (0, c.Z)(
            'grid grid-cols-2 grid-rows-2 rounded-2xl',
            r
              ? 'h-[51vw] xs:h-[42vw] md:h-[305px]'
              : 'h-[42vw] xs:h-[37vw] md:h-[271px]',
            S ? 'mt-2 gap-0.5' : 'gap-3'
          ),
          children: [
            (0, i.jsx)(h.u_, {
              modalClassName: (0, c.Z)(
                'flex justify-center w-full items-center relative',
                S && 'h-full'
              ),
              open: E,
              closeModal: z,
              closePanelOnClick: !0,
              children: (0, i.jsx)(m.y, {
                tweet: S,
                imageData: I,
                previewCount: j,
                selectedIndex: k,
                handleNextIndex: F
              })
            }),
            (0, i.jsx)(o.M, {
              mode: 'popLayout',
              children: y.map(function (e, n) {
                var r,
                  o,
                  d,
                  m = e.id,
                  h = e.src,
                  N = e.alt,
                  k =
                    null === (r = y[n].type) || void 0 === r
                      ? void 0
                      : r.includes('video');
                return (0, s.createElement)(
                  l.E.button,
                  (0, a.Z)(
                    (0, t.Z)(
                      {
                        type: 'button',
                        className: (0, c.Z)(
                          'accent-tab group relative transition-shadow',
                          S ? b[j][n] : 'rounded-2xl',
                          {
                            'col-span-2 row-span-2': 1 === j,
                            'row-span-2': 2 === j || (0 === n && 3 === j)
                          }
                        )
                      },
                      v
                    ),
                    {
                      onClick: (0, u.Db)(function () {
                        k && D(), C(n), L();
                      }),
                      layout: !S,
                      key: m,
                      children: [
                        k
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(f.z, {
                                  className:
                                    'visible absolute top-0 right-0 z-10 -translate-x-1 translate-y-1 bg-light-primary/75 p-1 opacity-0 backdrop-blur-sm transition hover:bg-image-preview-hover/75 group-hover:opacity-100 xs:invisible',
                                  children: (0, i.jsx)(p.e, {
                                    className: 'h-5 w-5',
                                    iconName: 'ArrowUpRightIcon'
                                  })
                                }),
                                (0, i.jsx)('video', {
                                  ref: T,
                                  className: (0, c.Z)(
                                    'relative h-full w-full cursor-pointer transition \n                       hover:brightness-75 hover:duration-200',
                                    S ? b[j][n] : 'rounded-2xl'
                                  ),
                                  src: h,
                                  controls: !0,
                                  muted: !0
                                })
                              ]
                            })
                          : (0, i.jsx)(x.o, {
                              className:
                                'relative h-full w-full cursor-pointer transition hover:brightness-75 hover:duration-200',
                              imgClassName: (0, c.Z)(
                                S ? b[j][n] : 'rounded-2xl'
                              ),
                              previewCount: j,
                              layout: 'fill',
                              src: h,
                              alt: N,
                              useSkeleton: S
                            }),
                        w &&
                          (0, i.jsxs)(f.z, {
                            className:
                              'group absolute top-0 left-0 translate-x-1 translate-y-1 bg-light-primary/75 p-1 backdrop-blur-sm hover:bg-image-preview-hover/75',
                            onClick: (0, u.Db)(w(m)),
                            children: [
                              (0, i.jsx)(p.e, {
                                className: 'h-5 w-5 text-white',
                                iconName: 'XMarkIcon'
                              }),
                              (0, i.jsx)(g.e, {
                                className: 'translate-y-2',
                                tip: 'Remove'
                              })
                            ]
                          })
                      ]
                    }
                  )
                );
              })
            })
          ]
        });
      }
    },
    1273: function (e, n, r) {
      r.d(n, {
        M5: function () {
          return v;
        },
        TW: function () {
          return p;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(828),
        s = r(5893),
        o = r(7294),
        l = r(8908),
        c = r(3136),
        d = r(3040),
        u = r(9099),
        m = r(9253),
        h = r(4266),
        x = r(4685),
        f = (0, i.Z)(
          [
            {
              initial: { y: -25, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { type: 'spring' } }
            },
            {
              initial: { x: 25, opacity: 0 },
              animate: { x: 0, opacity: 1, transition: { type: 'spring' } }
            }
          ],
          2
        ),
        p = f[0],
        g = f[1];
      function v(e) {
        var n = e.modal,
          r = e.reply,
          i = e.formId,
          f = e.loading,
          v = e.visited,
          b = e.children,
          j = e.inputRef,
          y = e.replyModal,
          w = e.inputValue,
          N = e.isValidTweet,
          k = e.isUploadingImages,
          C = e.sendTweet,
          Z = e.handleFocus,
          I = e.discardTweet,
          M = e.handleChange,
          T = e.handleImageUpload,
          B = (0, d.d)(),
          E = B.open,
          L = B.openModal,
          z = B.closeModal;
        (0, o.useEffect)(function () {
          return F(!0);
        }, []);
        var D = function (e) {
            var r,
              t = e.key,
              a = e.ctrlKey;
            n || 'Escape' !== t
              ? a && 'Enter' === t && N && C()
              : N
              ? (null === (r = j.current) || void 0 === r || r.blur(), L())
              : I();
          },
          F = function (e) {
            return function () {
              var n = document.getElementById('sidebar');
              if (n) {
                if (e) {
                  setTimeout(function () {
                    return (n.style.opacity = '');
                  }, 200);
                  return;
                }
                window.innerWidth < 500 && (n.style.opacity = '0');
              }
            };
          },
          S = function () {
            F()(), Z();
          },
          _ = function () {
            I(), z();
          },
          R = v && !r && !y && !f;
        return (0, s.jsxs)('div', {
          className: 'flex min-h-[48px] w-full flex-col justify-center gap-4',
          children: [
            (0, s.jsx)(u.u_, {
              modalClassName:
                'max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: E,
              closeModal: z,
              children: (0, s.jsx)(m.W, {
                title: 'Discard Tweet?',
                description: 'This can’t be undone and you’ll lose your draft.',
                mainBtnClassName:
                  'bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75',
                mainBtnLabel: 'Discard',
                action: _,
                closeModal: z
              })
            }),
            (0, s.jsxs)('div', {
              className: 'flex flex-col gap-6',
              children: [
                R &&
                  (0, s.jsxs)(
                    c.E.button,
                    (0, a.Z)(
                      (0, t.Z)(
                        {
                          type: 'button',
                          className:
                            'custom-button accent-tab accent-bg-tab flex cursor-not-allowed items-center gap-1 self-start border border-light-line-reply py-0 px-3 text-main-accent hover:bg-main-accent/10 active:bg-main-accent/20 dark:border-light-secondary'
                        },
                        p
                      ),
                      {
                        children: [
                          (0, s.jsx)('p', {
                            className: 'font-bold',
                            children: 'Everyone'
                          }),
                          (0, s.jsx)(h.e, {
                            className: 'h-4 w-4',
                            iconName: 'ChevronDownIcon'
                          })
                        ]
                      }
                    )
                  ),
                (0, s.jsxs)('div', {
                  className: 'flex items-center gap-3',
                  children: [
                    (0, s.jsx)(l.Z, {
                      id: i,
                      className:
                        'w-full min-w-0 resize-none bg-transparent text-xl outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary',
                      value: w,
                      placeholder:
                        r || y ? 'Tweet your reply' : "What's happening?",
                      onBlur: F(!0),
                      minRows: f ? 1 : n && !k ? 3 : 1,
                      maxRows: k ? 5 : 15,
                      onFocus: S,
                      onPaste: T,
                      onKeyUp: D,
                      onChange: M,
                      ref: j
                    }),
                    r &&
                      !v &&
                      (0, s.jsx)(x.z, {
                        className:
                          'cursor-pointer bg-main-accent px-4 py-1.5 font-bold text-white opacity-50',
                        onClick: Z,
                        children: 'Reply'
                      })
                  ]
                })
              ]
            }),
            b,
            R &&
              (0, s.jsx)(
                c.E.div,
                (0, a.Z)(
                  (0, t.Z)(
                    {
                      className:
                        'flex border-b border-light-border pb-2 dark:border-dark-border'
                    },
                    g
                  ),
                  {
                    children: (0, s.jsxs)('button', {
                      type: 'button',
                      className:
                        'custom-button accent-tab accent-bg-tab flex cursor-not-allowed items-center gap-1 py-0 px-3 text-main-accent hover:bg-main-accent/10 active:bg-main-accent/20',
                      children: [
                        (0, s.jsx)(h.e, {
                          className: 'h-4 w-4',
                          iconName: 'GlobeAmericasIcon'
                        }),
                        (0, s.jsx)('p', {
                          className: 'font-bold',
                          children: 'Everyone can reply'
                        })
                      ]
                    })
                  }
                )
              )
          ]
        });
      }
    },
    9557: function (e, n, r) {
      r.d(n, {
        I: function () {
          return F;
        },
        o: function () {
          return D;
        }
      });
      var t = r(7568),
        a = r(6042),
        i = r(9396),
        s = r(828),
        o = r(9815),
        l = r(655),
        c = r(5893),
        d = r(1664),
        u = r.n(d),
        m = r(7294),
        h = r(3136),
        x = r(5820),
        f = r(6010),
        p = r(6501),
        g = r(5321),
        v = r(1940),
        b = r(7359),
        j = r(2108),
        y = r(6269),
        w = r(3521),
        N = r(1708),
        k = r(1273),
        C = r(1400),
        Z = r(4685),
        I = r(4266),
        M = r(3276),
        T = [56.5487, 87.9646],
        B = [
          {
            container: null,
            viewBox: '0 0 20 20',
            stroke: 'stroke-main-accent',
            r: 9
          },
          {
            container: 'scale-150',
            viewBox: '0 0 30 30',
            stroke: 'stroke-accent-yellow',
            r: 14
          }
        ];
      function E(e) {
        var n = e.modal,
          r = e.inputLimit,
          t = e.inputLength,
          a = e.isCharLimitExceeded,
          i = t >= r - 20,
          s = T[+i],
          o = r - t,
          l = o <= 0,
          d = B[+i],
          u = d.container,
          m = d.viewBox,
          h = d.stroke,
          x = d.r;
        return (0, c.jsxs)('button', {
          className: 'group relative cursor-pointer outline-none',
          type: 'button',
          children: [
            (0, c.jsx)('i', {
              className: (0, f.Z)(
                'flex h-5 w-5 -rotate-90 items-center justify-center transition',
                u,
                o <= -10 && 'opacity-0'
              ),
              children: (0, c.jsxs)('svg', {
                className: 'overflow-visible',
                width: '100%',
                height: '100%',
                viewBox: m,
                children: [
                  (0, c.jsx)('circle', {
                    className: 'stroke-light-border dark:stroke-dark-border',
                    cx: '50%',
                    cy: '50%',
                    fill: 'none',
                    strokeWidth: '2',
                    r: x
                  }),
                  (0, c.jsx)('circle', {
                    className: (0, f.Z)(
                      'transition-colors',
                      l ? 'stroke-accent-red' : h
                    ),
                    cx: '50%',
                    cy: '50%',
                    fill: 'none',
                    strokeWidth: '2',
                    r: x,
                    strokeLinecap: 'round',
                    style: {
                      strokeDashoffset: a ? 0 : s - (s * ((t / r) * 100)) / 100,
                      strokeDasharray: s
                    }
                  })
                ]
              })
            }),
            (0, c.jsx)('span', {
              className: (0, f.Z)(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]\n           scale-50 text-xs opacity-0',
                { 'scale-100 opacity-100 transition': i, 'text-accent-red': l }
              ),
              children: o
            }),
            (0, c.jsx)(M.e, {
              tip: a
                ? 'You have exceeded the character limit'
                : ''.concat(o, ' characters remaining'),
              modal: n
            })
          ]
        });
      }
      var L = [
        { name: 'Media', iconName: 'PhotoIcon', disabled: !1 },
        { name: 'GIF', iconName: 'GifIcon', disabled: !0 },
        { name: 'Poll', iconName: 'ChartBarIcon', disabled: !0 },
        { name: 'Emoji', iconName: 'FaceSmileIcon', disabled: !0 },
        { name: 'Schedule', iconName: 'CalendarDaysIcon', disabled: !0 },
        { name: 'Location', iconName: 'MapPinIcon', disabled: !0 }
      ];
      function z(e) {
        var n = e.reply,
          r = e.modal,
          t = e.inputLimit,
          s = e.inputLength,
          o = e.isValidTweet,
          l = e.isCharLimitExceeded,
          d = e.handleImageUpload,
          u = (0, m.useRef)(null),
          x = function () {
            var e;
            return null === (e = u.current) || void 0 === e
              ? void 0
              : e.click();
          },
          f = L;
        return (
          n &&
            (f = f.filter(function (e, n) {
              return ![2, 4].includes(n);
            })),
          (0, c.jsxs)(
            h.E.div,
            (0, i.Z)((0, a.Z)({ className: 'flex justify-between' }, D), {
              children: [
                (0, c.jsxs)('div', {
                  className:
                    'flex text-main-accent xs:[&>button:nth-child(n+6)]:hidden md:[&>button]:!block [&>button:nth-child(n+4)]:hidden',
                  children: [
                    (0, c.jsx)('input', {
                      className: 'hidden',
                      type: 'file',
                      accept: 'image/*,video/*',
                      onChange: d,
                      ref: u,
                      multiple: !0
                    }),
                    f.map(function (e, n) {
                      var t = e.name,
                        a = e.iconName,
                        i = e.disabled;
                      return (0,
                      c.jsxs)(Z.z, { className: 'accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20', onClick: 0 === n ? x : void 0, disabled: i, children: [(0, c.jsx)(I.e, { className: 'h-5 w-5', iconName: a }), (0, c.jsx)(M.e, { tip: t, modal: r })] }, t);
                    })
                  ]
                }),
                (0, c.jsxs)('div', {
                  className: 'flex items-center gap-4',
                  children: [
                    (0, c.jsxs)(h.E.div, {
                      className: 'flex items-center gap-4',
                      animate: s
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 },
                      children: [
                        (0, c.jsx)(E, {
                          modal: r,
                          inputLimit: t,
                          inputLength: s,
                          isCharLimitExceeded: l
                        }),
                        !n &&
                          (0, c.jsxs)(c.Fragment, {
                            children: [
                              (0, c.jsx)('i', {
                                className:
                                  'hidden h-8 w-[1px] bg-[#B9CAD3] dark:bg-[#3E4144] xs:block'
                              }),
                              (0, c.jsxs)(Z.z, {
                                className:
                                  'group relative hidden rounded-full border border-light-line-reply p-[1px] text-main-accent dark:border-light-secondary xs:block',
                                disabled: !0,
                                children: [
                                  (0, c.jsx)(I.e, {
                                    className: 'h-5 w-5',
                                    iconName: 'PlusIcon'
                                  }),
                                  (0, c.jsx)(M.e, { tip: 'Add', modal: r })
                                ]
                              })
                            ]
                          })
                      ]
                    }),
                    (0, c.jsx)(Z.z, {
                      type: 'submit',
                      className:
                        'accent-tab bg-main-accent px-4 py-1.5 font-bold text-white enabled:hover:bg-main-accent/90 enabled:active:bg-main-accent/75',
                      disabled: !o,
                      children: n ? 'Reply' : 'Tweet'
                    })
                  ]
                })
              ]
            })
          )
        );
      }
      var D = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      function F(e) {
        var n,
          r = e.modal,
          d = e.reply,
          Z = e.parent,
          I = e.disabled,
          M = e.children,
          T = e.replyModal,
          B = e.closeModal,
          E = (0, m.useState)([]),
          L = E[0],
          F = E[1],
          S = (0, m.useState)([]),
          _ = S[0],
          R = S[1],
          U = (0, m.useState)(''),
          P = U[0],
          A = U[1],
          Y = (0, m.useState)(!1),
          H = Y[0],
          W = Y[1],
          O = (0, m.useState)(!1),
          V = O[0],
          J = O[1],
          G = (0, j.aC)(),
          $ = G.user,
          K = G.isAdmin,
          X = $.name,
          Q = $.username,
          q = $.photoURL,
          ee = (0, m.useRef)(null),
          en = _.length,
          er = !!en;
        (0, m.useEffect)(function () {
          var e;
          return (
            r && (null === (e = ee.current) || void 0 === e || e.focus()), es
          );
        }, []);
        var et =
            ((n = (0, t.Z)(function () {
              var e, n, t, a, i, o, m, h, x;
              return (0, l.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      null === (e = ee.current) || void 0 === e || e.blur(),
                      W(!0),
                      (n = null != d ? d : T),
                      (t = null == $ ? void 0 : $.id),
                      (i = {
                        text: P.trim() || null,
                        parent: n && Z ? Z : null
                      }),
                      [4, (0, b.eg)(t, L)]
                    );
                  case 1:
                    return (
                      (i.images = o.sent()),
                      (i.userLikes = []),
                      (i.createdBy = t),
                      (i.createdAt = (0, g.Bt)()),
                      (i.updatedAt = null),
                      (i.userReplies = 0),
                      (i.userRetweets = []),
                      (a = i),
                      [4, (0, y._v)(500)]
                    );
                  case 2:
                    return (
                      o.sent(),
                      [
                        4,
                        Promise.all([
                          (0, g.ET)(v.VV, a),
                          (0, b.$1)('increment', t),
                          a.images && (0, b.iq)('increment', t),
                          n && (0, b.Mq)('increment', null == Z ? void 0 : Z.id)
                        ])
                      ]
                    );
                  case 3:
                    return (
                      (m = s.Z.apply(void 0, [o.sent(), 1])[0]),
                      [4, (0, g.QT)(m)]
                    );
                  case 4:
                    return (
                      (x = o.sent().id),
                      r || T || (eo(), W(!1)),
                      B && B(),
                      p.Am.success(
                        function () {
                          return (0, c.jsxs)('span', {
                            className: 'flex gap-2',
                            children: [
                              'Your Tweet was sent',
                              (0, c.jsx)(u(), {
                                href: '/tweet/'.concat(x),
                                children: (0, c.jsx)('a', {
                                  className: 'custom-underline font-bold',
                                  children: 'View'
                                })
                              })
                            ]
                          });
                        },
                        { duration: 6e3 }
                      ),
                      [2]
                    );
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          ea = function (e) {
            var n,
              r = 'clipboardData' in e;
            if (!(r && e.clipboardData.getData('text'))) {
              var t = r ? e.clipboardData.files : e.target.files,
                a = (0, w.t6)(t, {
                  currentFiles: en,
                  allowUploadingVideos: !0
                });
              if (!a) {
                p.Am.error('Please choose a GIF or photo up to 4');
                return;
              }
              var i = a.imagesPreviewData,
                s = a.selectedImagesData;
              R((0, o.Z)(_).concat((0, o.Z)(i))),
                F((0, o.Z)(L).concat((0, o.Z)(s))),
                null === (n = ee.current) || void 0 === n || n.focus();
            }
          },
          ei = function (e) {
            return function () {
              F(
                L.filter(function (n) {
                  return n.id !== e;
                })
              ),
                R(
                  _.filter(function (n) {
                    return n.id !== e;
                  })
                );
              var n = _.find(function (n) {
                return n.id === e;
              }).src;
              URL.revokeObjectURL(n);
            };
          },
          es = function () {
            _.forEach(function (e) {
              var n = e.src;
              return URL.revokeObjectURL(n);
            }),
              F([]),
              R([]);
          },
          eo = function () {
            var e;
            A(''),
              J(!1),
              es(),
              null === (e = ee.current) || void 0 === e || e.blur();
          },
          el = function (e) {
            return A(e.target.value);
          },
          ec = function (e) {
            e.preventDefault(), et();
          },
          ed = function () {
            return J(!H);
          },
          eu = (0, m.useId)(),
          em = K ? 560 : 280,
          eh = P.length,
          ex = !!P.trim().length,
          ef = eh > em,
          ep = !ef && (ex || er);
        return (0, c.jsxs)('form', {
          className: (0, f.Z)('flex flex-col', {
            '-mx-4': d,
            'gap-2': T,
            'cursor-not-allowed': I
          }),
          onSubmit: ec,
          children: [
            H &&
              (0, c.jsx)(
                h.E.i,
                (0, a.Z)({ className: 'h-1 animate-pulse bg-main-accent' }, D)
              ),
            M,
            d &&
              V &&
              (0, c.jsxs)(
                h.E.p,
                (0, i.Z)(
                  (0, a.Z)(
                    {
                      className:
                        'ml-[75px] -mb-2 mt-2 text-light-secondary dark:text-dark-secondary'
                    },
                    k.TW
                  ),
                  {
                    children: [
                      'Replying to',
                      ' ',
                      (0, c.jsx)(u(), {
                        href: '/user/'.concat(null == Z ? void 0 : Z.username),
                        children: (0, c.jsx)('a', {
                          className: 'custom-underline text-main-accent',
                          children: null == Z ? void 0 : Z.username
                        })
                      })
                    ]
                  }
                )
              ),
            (0, c.jsxs)('label', {
              className: (0, f.Z)(
                'hover-animation grid w-full grid-cols-[auto,1fr] gap-3 px-4 py-3',
                d
                  ? 'pt-3 pb-1'
                  : T
                  ? 'pt-0'
                  : 'border-b-2 border-light-border dark:border-dark-border',
                (I || H) && 'pointer-events-none opacity-50'
              ),
              htmlFor: eu,
              children: [
                (0, c.jsx)(N.Y, { src: q, alt: X, username: Q }),
                (0, c.jsxs)('div', {
                  className: 'flex w-full flex-col gap-4',
                  children: [
                    (0, c.jsx)(k.M5, {
                      modal: r,
                      reply: d,
                      formId: eu,
                      visited: V,
                      loading: H,
                      inputRef: ee,
                      replyModal: T,
                      inputValue: P,
                      isValidTweet: ep,
                      isUploadingImages: er,
                      sendTweet: et,
                      handleFocus: ed,
                      discardTweet: eo,
                      handleChange: el,
                      handleImageUpload: ea,
                      children:
                        er &&
                        (0, c.jsx)(C.e, {
                          imagesPreview: _,
                          previewCount: en,
                          removeImage: H ? void 0 : ei
                        })
                    }),
                    (0, c.jsx)(x.M, {
                      initial: !1,
                      children:
                        (d ? d && V && !H : !H) &&
                        (0, c.jsx)(z, {
                          reply: d,
                          modal: r,
                          inputLimit: em,
                          inputLength: eh,
                          isValidTweet: ep,
                          isCharLimitExceeded: ef,
                          handleImageUpload: ea
                        })
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    },
    9806: function (e, n, r) {
      r.d(n, {
        Os: function () {
          return L;
        },
        vK: function () {
          return F;
        },
        IP: function () {
          return E;
        },
        OS: function () {
          return D;
        },
        rf: function () {
          return z;
        }
      });
      var t = r(5893),
        a = r(7294),
        i = r(1163),
        s = r(2108),
        o = r(6625),
        l = r(6010),
        c = r(4266),
        d = r(4685);
      function u() {
        var e = (0, a.useState)(''),
          n = e[0],
          r = e[1],
          s = (0, i.useRouter)().push,
          o = (0, a.useRef)(null),
          u = function (e) {
            return r(e.target.value);
          },
          m = function (e) {
            e.preventDefault(), n && s('/search?q='.concat(n));
          },
          h = function (e) {
            return function () {
              var n, t;
              e
                ? null === (n = o.current) || void 0 === n || n.focus()
                : null === (t = o.current) || void 0 === t || t.blur(),
                r('');
            };
          },
          x = function (e) {
            'Escape' === e.key && h()();
          };
        return (0, t.jsx)('form', {
          className:
            'hover-animation sticky top-0 z-10 -my-2 bg-main-background py-2',
          onSubmit: m,
          children: (0, t.jsxs)('label', {
            className:
              'group flex items-center justify-between gap-4 rounded-full bg-main-search-background px-4 py-2 transition focus-within:bg-main-background focus-within:ring-2 focus-within:ring-main-accent',
            children: [
              (0, t.jsx)('i', {
                children: (0, t.jsx)(c.e, {
                  className:
                    'h-5 w-5 text-light-secondary transition-colors group-focus-within:text-main-accent dark:text-dark-secondary',
                  iconName: 'MagnifyingGlassIcon'
                })
              }),
              (0, t.jsx)('input', {
                className:
                  'peer flex-1 bg-transparent outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary',
                type: 'text',
                placeholder: 'Search Twitter',
                ref: o,
                value: n,
                onChange: u,
                onKeyUp: x
              }),
              (0, t.jsx)(d.z, {
                className: (0, l.Z)(
                  'accent-tab scale-50 bg-main-accent p-1 opacity-0 transition hover:brightness-90 disabled:opacity-0',
                  n &&
                    'focus:scale-100 focus:opacity-100 peer-focus:scale-100 peer-focus:opacity-100'
                ),
                onClick: h(!0),
                disabled: !n,
                children: (0, t.jsx)(c.e, {
                  className: 'h-3 w-3 stroke-white',
                  iconName: 'XMarkIcon'
                })
              })
            ]
          })
        });
      }
      var m = r(828),
        h = [
          ['Terms of Service', 'https://twitter.com/tos'],
          ['Privacy Policy', 'https://twitter.com/privacy'],
          ['Cookie Policy', 'https://support.twitter.com/articles/20170514'],
          ['Accessibility', 'https://help.twitter.com/resources/accessibility'],
          [
            'Ads Info',
            'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html'
          ]
        ];
      function x() {
        return (0, t.jsxs)('footer', {
          className:
            'sticky top-16 flex flex-col gap-3 text-center text-sm text-light-secondary dark:text-dark-secondary',
          children: [
            (0, t.jsx)('nav', {
              className: 'flex flex-wrap justify-center gap-2',
              children: h.map(function (e) {
                var n = (0, m.Z)(e, 2),
                  r = n[0],
                  a = n[1];
                return (0,
                t.jsx)('a', { className: 'custom-underline', target: '_blank', rel: 'noreferrer', href: a, children: r }, a);
              })
            }),
            (0, t.jsx)('p', { children: '\xa9 2022 Twitter, Inc.' })
          ]
        });
      }
      function f(e) {
        var n = e.children;
        return (0, o.zY)().width < 1024
          ? null
          : (0, t.jsxs)('aside', {
              className: 'flex w-96 flex-col gap-4 px-4 py-3 pt-1',
              children: [(0, t.jsx)(u, {}), n, (0, t.jsx)(x, {})]
            });
      }
      var p = r(7471),
        g = r(6042),
        v = r(9396),
        b = r(1664),
        j = r.n(b),
        y = r(3136),
        w = r(5321),
        N = r(3872),
        k = r(5662),
        C = r(1940),
        Z = r(7238),
        I = r(9570),
        M = r(6028);
      function T() {
        var e = (0, s.aC)().randomSeed,
          n = (0, k.k)((0, w.JU)(C.W$, 'Twt0A27bx9YcG4vu3RTsR7ifJzf2'), {
            allowNull: !0
          }),
          r = n.data,
          i = n.loading,
          o = (0, N.K)(
            (0, w.IO)(
              C.W$,
              (0, w.ar)((0, w.Jm)(), '>=', e),
              (0, w.Xo)((0, w.Jm)()),
              (0, w.b9)(2)
            ),
            { allowNull: !0 }
          ),
          l = o.data,
          c = o.loading;
        return (0, t.jsx)('section', {
          className: 'hover-animation rounded-2xl bg-main-sidebar-background',
          children:
            i || c
              ? (0, t.jsx)(I.g, {
                  className: 'flex h-52 items-center justify-center p-4'
                })
              : l
              ? (0, t.jsxs)(
                  y.E.div,
                  (0, v.Z)(
                    (0, g.Z)({ className: 'inner:px-4 inner:py-3' }, p.o),
                    {
                      children: [
                        (0, t.jsx)('h2', {
                          className: 'text-xl font-bold',
                          children: 'Who to follow'
                        }),
                        r && (0, t.jsx)(Z.O, (0, g.Z)({}, r)),
                        null == l
                          ? void 0
                          : l.map(function (e) {
                              return (0,
                              a.createElement)(Z.O, (0, v.Z)((0, g.Z)({}, e), { key: e.id }));
                            }),
                        (0, t.jsx)(j(), {
                          href: '/people',
                          children: (0, t.jsx)('a', {
                            className:
                              'custom-button accent-tab hover-card block w-full rounded-2xl rounded-t-none text-center text-main-accent',
                            children: 'Show more'
                          })
                        })
                      ]
                    }
                  )
                )
              : (0, t.jsx)(M.j, {})
        });
      }
      var B = r(643);
      function E(e) {
        var n,
          r,
          o,
          l,
          c,
          d = e.children;
        return ((o = (r = (0, s.aC)()).user),
        (l = r.loading),
        (c = (0, i.useRouter)().replace),
        (0, a.useEffect)(
          function () {
            l || o || c(null != n ? n : '/');
          },
          [o, l]
        ),
        o)
          ? (0, t.jsx)(t.Fragment, { children: d })
          : (0, t.jsx)(B.V, {});
      }
      function L(e) {
        var n = e.children;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            n,
            (0, t.jsxs)(f, {
              children: [(0, t.jsx)(p.j, {}), (0, t.jsx)(T, {})]
            })
          ]
        });
      }
      function z(e) {
        var n = e.children;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            n,
            (0, t.jsxs)(f, {
              children: [(0, t.jsx)(T, {}), (0, t.jsx)(p.j, {})]
            })
          ]
        });
      }
      function D(e) {
        var n = e.children;
        return (0, t.jsxs)(t.Fragment, {
          children: [n, (0, t.jsx)(f, { children: (0, t.jsx)(T, {}) })]
        });
      }
      function F(e) {
        var n = e.children;
        return (0, t.jsxs)(t.Fragment, {
          children: [n, (0, t.jsx)(f, { children: (0, t.jsx)(p.j, {}) })]
        });
      }
    },
    7913: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return W;
        }
      });
      var t = r(5893),
        a = r(8100),
        i = r(6501),
        s = r(7568),
        o = r(655);
      function l(e, n) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, s.Z)(function (e, n) {
          var r, t;
          return (0, o.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, fetch(e, n)];
              case 1:
                return [4, r.sent().json()];
              case 2:
                return [2, r.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var d = r(6625),
        u = r(872),
        m = r(6042),
        h = r(9396),
        x = r(7294),
        f = r(1664),
        p = r.n(f),
        g = r(2108),
        v = r(3040),
        b = r(9099),
        j = r(9557),
        y = r(2365),
        w = r(4685),
        N = r(1163),
        k = r(6010),
        C = r(6269),
        Z = r(4266);
      function I(e) {
        var n = e.href,
          r = e.username,
          a = e.iconName,
          i = e.linkName,
          s = e.disabled,
          o = e.canBeHidden,
          l = (0, N.useRouter)().asPath,
          c = r ? l.includes(r) : l === n;
        return (0, t.jsx)(p(), {
          href: n,
          children: (0, t.jsx)('a', {
            className: (0, k.Z)(
              'group py-1 outline-none',
              o ? 'hidden xs:flex' : 'flex',
              s && 'cursor-not-allowed'
            ),
            onClick: s ? (0, C.Db)() : void 0,
            children: (0, t.jsxs)('div', {
              className: (0, k.Z)(
                'custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition \n             duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 \n             group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 \n             dark:group-focus-visible:ring-white xs:p-3 xl:pr-5',
                c && 'font-bold'
              ),
              children: [
                (0, t.jsx)(Z.e, {
                  className: (0, k.Z)(
                    'h-7 w-7',
                    c && ['Explore', 'Lists'].includes(i) && 'stroke-white'
                  ),
                  iconName: a,
                  solid: c
                }),
                (0, t.jsx)('p', { className: 'hidden xl:block', children: i })
              ]
            })
          })
        });
      }
      var M = r(5820),
        T = r(3136),
        B = r(8039),
        E = r(5691),
        L = r(9534),
        z = (0, x.forwardRef)(function (e, n) {
          var r = e.href,
            a = e.children,
            i = (0, L.Z)(e, ['href', 'children']);
          return (0,
          t.jsx)(p(), { href: r, children: (0, t.jsx)('a', (0, h.Z)((0, m.Z)({ ref: n }, i), { children: a })) });
        }),
        D = {
          initial: { opacity: 0, y: 50 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', duration: 0.4 }
          },
          exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
        };
      function F() {
        var e = (0, v.d)(),
          n = e.open,
          r = e.openModal,
          a = e.closeModal;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(b.u_, {
              modalClassName:
                'max-w-xl bg-main-background w-full p-8 rounded-2xl hover-animation',
              open: n,
              closeModal: a,
              children: (0, t.jsx)(E.J, { closeModal: a })
            }),
            (0, t.jsx)(B.v, {
              className: 'relative',
              as: 'div',
              children: function (e) {
                var n = e.open;
                return (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(B.v.Button, {
                      className: 'group relative flex w-full py-1 outline-none',
                      children: (0, t.jsxs)('div', {
                        className: (0, k.Z)(
                          'custom-button flex gap-4 text-xl transition group-hover:bg-light-primary/10 group-focus-visible:ring-2\n                   group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 dark:group-focus-visible:ring-white\n                   xl:pr-5',
                          n && 'bg-light-primary/10 dark:bg-dark-primary/10'
                        ),
                        children: [
                          (0, t.jsx)(Z.e, {
                            className: 'h-7 w-7',
                            iconName: 'EllipsisHorizontalCircleIcon'
                          }),
                          ' ',
                          (0, t.jsx)('p', {
                            className: 'hidden xl:block',
                            children: 'More'
                          })
                        ]
                      })
                    }),
                    (0, t.jsx)(M.M, {
                      children:
                        n &&
                        (0, t.jsxs)(
                          B.v.Items,
                          (0, h.Z)(
                            (0, m.Z)(
                              {
                                className:
                                  'menu-container absolute -top-44 w-60 font-medium xl:w-11/12',
                                as: T.E.div
                              },
                              D
                            ),
                            {
                              static: !0,
                              children: [
                                (0, t.jsx)(B.v.Item, {
                                  children: function (e) {
                                    var n = e.active;
                                    return (0, t.jsxs)(z, {
                                      className: (0, k.Z)(
                                        'flex w-full cursor-not-allowed gap-3 rounded-t-md p-4 duration-200',
                                        n && 'bg-main-sidebar-background'
                                      ),
                                      href: '/settings',
                                      onClick: (0, C.Db)(),
                                      children: [
                                        (0, t.jsx)(Z.e, {
                                          iconName: 'Cog8ToothIcon'
                                        }),
                                        'Settings and privacy'
                                      ]
                                    });
                                  }
                                }),
                                (0, t.jsx)(B.v.Item, {
                                  children: function (e) {
                                    var n = e.active;
                                    return (0, t.jsxs)(z, {
                                      className: (0, k.Z)(
                                        'flex w-full cursor-not-allowed gap-3 rounded-t-md p-4 duration-200',
                                        n && 'bg-main-sidebar-background'
                                      ),
                                      href: '/help-center',
                                      onClick: (0, C.Db)(),
                                      children: [
                                        (0, t.jsx)(Z.e, {
                                          iconName: 'QuestionMarkCircleIcon'
                                        }),
                                        'Help center'
                                      ]
                                    });
                                  }
                                }),
                                (0, t.jsx)(B.v.Item, {
                                  children: function (e) {
                                    var n = e.active;
                                    return (0, t.jsxs)(w.z, {
                                      className: (0, k.Z)(
                                        'flex w-full gap-3 rounded-none rounded-b-md p-4 duration-200',
                                        n && 'bg-main-sidebar-background'
                                      ),
                                      onClick: r,
                                      children: [
                                        (0, t.jsx)(Z.e, {
                                          iconName: 'PaintBrushIcon'
                                        }),
                                        'Display'
                                      ]
                                    });
                                  }
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
      var S = r(9253),
        _ = r(1708),
        R = r(4531),
        U = r(7876);
      function P() {
        var e = (0, g.aC)(),
          n = e.user,
          r = e.signOut,
          a = (0, v.d)(),
          i = a.open,
          s = a.openModal,
          o = a.closeModal,
          l = n.name,
          c = n.username,
          d = n.verified,
          u = n.photoURL;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(b.u_, {
              modalClassName:
                'max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: i,
              closeModal: o,
              children: (0, t.jsx)(S.W, {
                useIcon: !0,
                focusOnMainBtn: !0,
                title: 'Log out of Twitter?',
                description:
                  'You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.',
                mainBtnLabel: 'Log out',
                action: r,
                closeModal: o
              })
            }),
            (0, t.jsx)(B.v, {
              className: 'relative',
              as: 'section',
              children: function (e) {
                var n = e.open;
                return (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(B.v.Button, {
                      className: (0, k.Z)(
                        'custom-button main-tab dark-bg-tab flex w-full items-center \n                 justify-between hover:bg-light-primary/10 active:bg-light-primary/20\n                 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                        n && 'bg-light-primary/10 dark:bg-dark-primary/10'
                      ),
                      children: [
                        (0, t.jsxs)('div', {
                          className: 'flex gap-3 truncate',
                          children: [
                            (0, t.jsx)(_.Y, { src: u, alt: l, size: 40 }),
                            (0, t.jsxs)('div', {
                              className:
                                'hidden truncate text-start leading-5 xl:block',
                              children: [
                                (0, t.jsx)(R.v, {
                                  name: l,
                                  className: 'start',
                                  verified: d
                                }),
                                (0, t.jsx)(U.a, {
                                  username: c,
                                  disableLink: !0
                                })
                              ]
                            })
                          ]
                        }),
                        (0, t.jsx)(Z.e, {
                          className: 'hidden h-6 w-6 xl:block',
                          iconName: 'EllipsisHorizontalIcon'
                        })
                      ]
                    }),
                    (0, t.jsx)(M.M, {
                      children:
                        n &&
                        (0, t.jsxs)(
                          B.v.Items,
                          (0, h.Z)(
                            (0, m.Z)(
                              {
                                className:
                                  'menu-container absolute left-0 right-0 -top-36 w-60 xl:w-full',
                                as: T.E.div
                              },
                              D
                            ),
                            {
                              static: !0,
                              children: [
                                (0, t.jsxs)(B.v.Item, {
                                  className:
                                    'flex items-center justify-between gap-4 border-b border-light-border px-4 py-3 dark:border-dark-border',
                                  as: 'div',
                                  disabled: !0,
                                  children: [
                                    (0, t.jsxs)('div', {
                                      className:
                                        'flex items-center gap-3 truncate',
                                      children: [
                                        (0, t.jsx)(_.Y, { src: u, alt: l }),
                                        (0, t.jsxs)('div', {
                                          className: 'truncate',
                                          children: [
                                            (0, t.jsx)(R.v, {
                                              name: l,
                                              verified: d
                                            }),
                                            (0, t.jsx)(U.a, {
                                              username: c,
                                              disableLink: !0
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, t.jsx)('i', {
                                      children: (0, t.jsx)(Z.e, {
                                        className: 'h-5 w-5 text-main-accent',
                                        iconName: 'CheckIcon'
                                      })
                                    })
                                  ]
                                }),
                                (0, t.jsx)(B.v.Item, {
                                  children: function (e) {
                                    var n = e.active;
                                    return (0, t.jsxs)(w.z, {
                                      className: (0, k.Z)(
                                        'flex w-full gap-3 rounded-md rounded-t-none p-4',
                                        n && 'bg-main-sidebar-background'
                                      ),
                                      onClick: s,
                                      children: [
                                        (0, t.jsx)(Z.e, {
                                          iconName: 'ArrowRightOnRectangleIcon'
                                        }),
                                        'Log out @',
                                        c
                                      ]
                                    });
                                  }
                                }),
                                (0, t.jsx)('i', {
                                  className:
                                    'absolute -bottom-[10px] left-2 translate-x-1/2 rotate-180 [filter:drop-shadow(#cfd9de_1px_-1px_1px)] dark:[filter:drop-shadow(#333639_1px_-1px_1px)] xl:left-1/2 xl:-translate-x-1/2',
                                  children: (0, t.jsx)(y.d, {
                                    className: 'h-4 w-6 fill-main-background',
                                    iconName: 'TriangleIcon'
                                  })
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
      var A = [
        { href: '/home', linkName: 'Home', iconName: 'HomeIcon' },
        {
          href: '/explore',
          linkName: 'Explore',
          iconName: 'HashtagIcon',
          disabled: !0,
          canBeHidden: !0
        },
        {
          href: '/notifications',
          linkName: 'Notifications',
          iconName: 'BellIcon',
          disabled: !0
        },
        {
          href: '/messages',
          linkName: 'Messages',
          iconName: 'EnvelopeIcon',
          disabled: !0
        },
        {
          href: '/bookmarks',
          linkName: 'Bookmarks',
          iconName: 'BookmarkIcon',
          canBeHidden: !0
        },
        {
          href: '/lists',
          linkName: 'Lists',
          iconName: 'Bars3BottomLeftIcon',
          disabled: !0,
          canBeHidden: !0
        }
      ];
      function Y() {
        var e = (0, g.aC)().user,
          n = (0, d.zY)().isMobile,
          r = (0, v.d)(),
          a = r.open,
          i = r.openModal,
          s = r.closeModal,
          o = null == e ? void 0 : e.username;
        return (0, t.jsxs)('header', {
          id: 'sidebar',
          className:
            'flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end',
          children: [
            (0, t.jsx)(b.u_, {
              className: 'flex items-start justify-center',
              modalClassName:
                'bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden',
              open: a,
              closeModal: s,
              children: (0, t.jsx)(j.I, { modal: !0, closeModal: s })
            }),
            (0, t.jsxs)('div', {
              className:
                'fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72',
              children: [
                (0, t.jsxs)('section', {
                  className:
                    'flex flex-col justify-center gap-2 xs:items-center xl:items-stretch',
                  children: [
                    (0, t.jsx)('h1', {
                      className: 'hidden xs:flex',
                      children: (0, t.jsx)(p(), {
                        href: '/home',
                        children: (0, t.jsx)('a', {
                          className:
                            'custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 dark:text-twitter-icon dark:hover:bg-dark-primary/10',
                          children: (0, t.jsx)(y.d, {
                            className: 'h-7 w-7',
                            iconName: 'TwitterIcon'
                          })
                        })
                      })
                    }),
                    (0, t.jsxs)('nav', {
                      className:
                        'flex items-center justify-around xs:flex-col xs:justify-center xl:block',
                      children: [
                        A.map(function (e) {
                          var n = (0, u.Z)({}, e);
                          return (0,
                          x.createElement)(I, (0, h.Z)((0, m.Z)({}, n), { key: n.href }));
                        }),
                        (0, t.jsx)(I, {
                          href: '/user/'.concat(o),
                          username: o,
                          linkName: 'Profile',
                          iconName: 'UserIcon'
                        }),
                        !n && (0, t.jsx)(F, {})
                      ]
                    }),
                    (0, t.jsxs)(w.z, {
                      className:
                        'accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12',
                      onClick: i,
                      children: [
                        (0, t.jsx)(y.d, {
                          className: 'block h-6 w-6 xl:hidden',
                          iconName: 'FeatherIcon'
                        }),
                        (0, t.jsx)('p', {
                          className: 'hidden xl:block',
                          children: 'Tweet'
                        })
                      ]
                    })
                  ]
                }),
                !n && (0, t.jsx)(P, {})
              ]
            })
          ]
        });
      }
      var H = {
        style: {
          color: 'white',
          borderRadius: '4px',
          backgroundColor: 'rgb(var(--main-accent))'
        },
        success: { duration: 4e3 }
      };
      function W(e) {
        var n = e.children;
        return (0, t.jsxs)('div', {
          className: 'flex w-full justify-center gap-0 lg:gap-4',
          children: [
            (0, t.jsxs)(d.En, {
              children: [
                (0, t.jsx)(Y, {}),
                (0, t.jsx)(a.J$, { value: { fetcher: l }, children: n })
              ]
            }),
            (0, t.jsx)(i.x7, {
              position: 'bottom-center',
              toastOptions: H,
              containerClassName: 'mb-12 xs:mb-0'
            })
          ]
        });
      }
    },
    9253: function (e, n, r) {
      r.d(n, {
        W: function () {
          return c;
        }
      });
      var t = r(5893),
        a = r(7294),
        i = r(6010),
        s = r(3835),
        o = r(4685),
        l = r(2365);
      function c(e) {
        var n = e.title,
          r = e.useIcon,
          c = e.description,
          d = e.mainBtnLabel,
          u = e.focusOnMainBtn,
          m = e.mainBtnClassName,
          h = e.secondaryBtnLabel,
          x = e.secondaryBtnClassName,
          f = e.action,
          p = e.closeModal,
          g = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(function () {
            if (u) {
              var e = setTimeout(function () {
                var e;
                return null === (e = g.current) || void 0 === e
                  ? void 0
                  : e.focus();
              }, 50);
              return function () {
                return clearTimeout(e);
              };
            }
          }, []),
          (0, t.jsxs)('div', {
            className: 'flex flex-col gap-6',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex flex-col gap-4',
                children: [
                  r &&
                    (0, t.jsx)('i', {
                      className: 'mx-auto',
                      children: (0, t.jsx)(l.d, {
                        className:
                          'h-10 w-10 text-accent-blue dark:text-twitter-icon',
                        iconName: 'TwitterIcon'
                      })
                    }),
                  (0, t.jsxs)('div', {
                    className: 'flex flex-col gap-2',
                    children: [
                      (0, t.jsx)(s.V.Title, {
                        className: 'text-xl font-bold',
                        children: n
                      }),
                      (0, t.jsx)(s.V.Description, {
                        className:
                          'text-light-secondary dark:text-dark-secondary',
                        children: c
                      })
                    ]
                  })
                ]
              }),
              (0, t.jsxs)('div', {
                className: 'flex flex-col gap-3 inner:py-2 inner:font-bold',
                children: [
                  (0, t.jsx)('button', {
                    className: (0, i.Z)(
                      'custom-button main-tab text-white',
                      null != m
                        ? m
                        : 'bg-light-primary hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-primary/80\n               dark:bg-light-border dark:text-light-primary dark:hover:bg-light-border/90\n               dark:focus-visible:bg-light-border/90 dark:active:bg-light-border/75'
                    ),
                    ref: g,
                    onClick: f,
                    children: d
                  }),
                  (0, t.jsx)(o.z, {
                    className: (0, i.Z)(
                      'border border-light-line-reply dark:border-light-secondary dark:text-light-border',
                      null != x
                        ? x
                        : 'hover:bg-light-primary/10 focus-visible:bg-light-primary/10 active:bg-light-primary/20\n               dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 dark:active:bg-light-border/20'
                    ),
                    onClick: p,
                    children: null != h ? h : 'Cancel'
                  })
                ]
              })
            ]
          })
        );
      }
    },
    5691: function (e, n, r) {
      r.d(n, {
        J: function () {
          return g;
        }
      });
      var t = r(828),
        a = r(5893),
        i = r(1708),
        s = r(4531),
        o = r(6010),
        l = r(5655),
        c = r(4266),
        d = {
          light: {
            textColor: 'text-black',
            backgroundColor: 'bg-white',
            iconBorderColor: 'border-[#B9CAD3]',
            hoverBackgroundColor:
              '[&:hover>div]:bg-light-secondary/10 [&:active>div]:bg-light-secondary/20'
          },
          dim: {
            textColor: 'text-[#F7F9F9]',
            backgroundColor: 'bg-[#15202B]',
            iconBorderColor: 'border-[#5C6E7E]',
            hoverBackgroundColor:
              '[&:hover>div]:bg-light-secondary/10 [&:active>div]:bg-light-secondary/20'
          },
          dark: {
            textColor: 'text-dark-primary',
            backgroundColor: 'bg-black',
            iconBorderColor: 'border-[#3E4144]',
            hoverBackgroundColor:
              '[&:hover>div]:bg-dark-primary/10 [&:active>div]:bg-dark-primary/20'
          }
        };
      function u(e) {
        var n = e.type,
          r = e.label,
          t = (0, l.Fg)(),
          i = t.theme,
          s = t.changeTheme,
          u = d[n],
          m = u.textColor,
          h = u.backgroundColor,
          x = u.iconBorderColor,
          f = u.hoverBackgroundColor;
        return (0, a.jsxs)('label', {
          className: (0, o.Z)(
            'flex cursor-pointer items-center gap-2 rounded p-3 font-bold ring-main-accent transition\n         duration-200 [&:has(div>input:checked)]:ring-2',
            m,
            h,
            f
          ),
          htmlFor: n,
          children: [
            (0, a.jsxs)('div', {
              className:
                'hover-animation flex h-10 w-10 items-center justify-center rounded-full',
              children: [
                (0, a.jsx)('input', {
                  className: 'peer absolute h-0 w-0 opacity-0',
                  id: n,
                  type: 'radio',
                  name: 'theme',
                  value: n,
                  checked: n == i,
                  onChange: s
                }),
                (0, a.jsx)('i', {
                  className: (0, o.Z)(
                    'flex h-5 w-5 items-center justify-center rounded-full \n             border-2 border-[#B9CAD3] text-white transition\n             duration-200 peer-checked:border-transparent\n             peer-checked:bg-main-accent peer-checked:inner:opacity-100',
                    x
                  ),
                  children: (0, a.jsx)(c.e, {
                    className:
                      'h-full w-full p-0.5 opacity-0 transition-opacity duration-200',
                    iconName: 'CheckIcon'
                  })
                })
              ]
            }),
            r
          ]
        });
      }
      var m = r(4685),
        h = {
          yellow:
            'bg-accent-yellow hover:ring-accent-yellow/10 active:ring-accent-yellow/20',
          blue: 'bg-accent-blue hover:ring-accent-blue/10 active:ring-accent-blue/20',
          pink: 'bg-accent-pink hover:ring-accent-pink/10 active:ring-accent-pink/20',
          purple:
            'bg-accent-purple hover:ring-accent-purple/10 active:ring-accent-purple/20',
          orange:
            'bg-accent-orange hover:ring-accent-orange/10 active:ring-accent-orange/20',
          green:
            'bg-accent-green hover:ring-accent-green/10 active:ring-accent-green/20'
        };
      function x(e) {
        var n = e.type,
          r = (0, l.Fg)(),
          t = r.accent,
          i = r.changeAccent,
          s = h[n];
        return (0, a.jsxs)('label', {
          className: (0, o.Z)(
            'hover-animation flex h-10 w-10 cursor-pointer items-center justify-center\n         rounded-full hover:ring',
            s
          ),
          htmlFor: n,
          children: [
            (0, a.jsx)('input', {
              className: 'peer absolute h-0 w-0 opacity-0',
              id: n,
              type: 'radio',
              name: 'accent',
              value: n,
              checked: n === t,
              onChange: i
            }),
            (0, a.jsx)('i', {
              className: 'text-white peer-checked:inner:opacity-100',
              children: (0, a.jsx)(c.e, {
                className: 'h-6 w-6 opacity-0 transition-opacity duration-200',
                iconName: 'CheckIcon'
              })
            })
          ]
        });
      }
      var f = [
          ['light', 'Default'],
          ['dim', 'Dim'],
          ['dark', 'Lights out']
        ],
        p = ['blue', 'yellow', 'pink', 'purple', 'orange', 'green'];
      function g(e) {
        var n = e.closeModal;
        return (0, a.jsxs)('div', {
          className: 'flex flex-col items-center gap-6',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex flex-col gap-3 text-center',
              children: [
                (0, a.jsx)('h2', {
                  className: 'text-2xl font-bold',
                  children: 'Customize your view'
                }),
                (0, a.jsx)('p', {
                  className: 'text-light-secondary dark:text-dark-secondary',
                  children:
                    'These settings affect all the Twitter accounts on this browser.'
                })
              ]
            }),
            (0, a.jsx)('article', {
              className:
                'hover-animation mx-8 rounded-2xl border border-light-border px-4 py-3 dark:border-dark-border',
              children: (0, a.jsxs)('div', {
                className: 'grid grid-cols-[auto,1fr] gap-3',
                children: [
                  (0, a.jsx)(i.Y, {
                    src: '/assets/twitter-avatar.jpg',
                    alt: 'Twitter'
                  }),
                  (0, a.jsxs)('div', {
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex gap-1',
                        children: [
                          (0, a.jsx)(s.v, { verified: !0, name: 'Twitter' }),
                          (0, a.jsx)('p', {
                            className:
                              'text-light-secondary dark:text-dark-secondary',
                            children: '@twitter'
                          }),
                          (0, a.jsxs)('div', {
                            className:
                              'flex gap-1 text-light-secondary dark:text-dark-secondary',
                            children: [
                              (0, a.jsx)('i', { children: '\xb7' }),
                              (0, a.jsx)('p', { children: '26m' })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)('p', {
                        className: 'whitespace-pre-line break-words',
                        children: [
                          'At the heart of Twitter are short messages called Tweets — just like this one — which can include photos, videos, links, text, hashtags, and mentions like',
                          ' ',
                          (0, a.jsx)('span', {
                            className: 'text-main-accent',
                            children: '@twitter'
                          }),
                          '.'
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, a.jsxs)('div', {
              className: 'flex w-full flex-col gap-1',
              children: [
                (0, a.jsx)('p', {
                  className:
                    'text-sm font-bold text-light-secondary dark:text-dark-secondary',
                  children: 'Color'
                }),
                (0, a.jsx)('div', {
                  className:
                    'hover-animation grid grid-cols-3 grid-rows-2 justify-items-center gap-3 rounded-2xl bg-main-sidebar-background py-3 xs:grid-cols-6 xs:grid-rows-none',
                  children: p.map(function (e) {
                    return (0, a.jsx)(x, { type: e }, e);
                  })
                })
              ]
            }),
            (0, a.jsxs)('div', {
              className: 'flex w-full flex-col gap-1',
              children: [
                (0, a.jsx)('p', {
                  className:
                    'text-sm font-bold text-light-secondary dark:text-dark-secondary',
                  children: 'Background'
                }),
                (0, a.jsx)('div', {
                  className:
                    'hover-animation grid grid-rows-3 gap-3 rounded-2xl bg-main-sidebar-background px-4 py-3 xs:grid-cols-3 xs:grid-rows-none',
                  children: f.map(function (e) {
                    var n = (0, t.Z)(e, 2),
                      r = n[0],
                      i = n[1];
                    return (0, a.jsx)(u, { type: r, label: i }, r);
                  })
                })
              ]
            }),
            (0, a.jsx)(m.z, {
              className:
                'bg-main-accent px-4 py-1.5 font-bold text-white hover:bg-main-accent/90 active:bg-main-accent/75',
              onClick: n,
              children: 'Done'
            })
          ]
        });
      }
    },
    3644: function (e, n, r) {
      r.d(n, {
        y: function () {
          return v;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(828),
        s = r(9815),
        o = r(5893),
        l = r(7294),
        c = r(5820),
        d = r(3136),
        u = r(6010),
        m = r(6269),
        h = r(4685),
        x = r(4266),
        f = r(9570),
        p = r(9099),
        g = [
          ['prev', null, 'ArrowLeftIcon'],
          ['next', 'order-1', 'ArrowRightIcon']
        ];
      function v(e) {
        var n = e.tweet,
          r = e.imageData,
          v = e.previewCount,
          b = e.selectedIndex,
          j = e.handleNextIndex,
          y = (0, l.useState)([]),
          w = y[0],
          N = y[1],
          k = (0, l.useState)(!0),
          C = k[0],
          Z = k[1],
          I = r.src,
          M = r.alt,
          T = r.type,
          B = null == T ? void 0 : T.includes('video'),
          E = j && v > 1;
        return (
          (0, l.useEffect)(function () {
            n &&
              void 0 !== b &&
              !w.includes(b) &&
              (Z(!0), N((0, s.Z)(w).concat([b])));
            var e = B ? document.createElement('video') : new Image();
            e.src = I;
            var r = function () {
              return Z(!1);
            };
            B ? (e.onloadeddata = r) : (e.onload = r);
          }, (0, s.Z)(n && v > 1 ? [I] : [])),
          (0, l.useEffect)(
            function () {
              if (E) {
                var e = function (e) {
                  var n = e.key,
                    r =
                      'ArrowLeft' === n
                        ? j('prev')
                        : 'ArrowRight' === n
                        ? j('next')
                        : null;
                  r && r();
                };
                return (
                  document.addEventListener('keydown', e),
                  function () {
                    return document.removeEventListener('keydown', e);
                  }
                );
              }
            },
            [j]
          ),
          (0, o.jsxs)(o.Fragment, {
            children: [
              E &&
                g.map(function (e) {
                  var n = (0, i.Z)(e, 3),
                    r = n[0],
                    t = n[1],
                    a = n[2];
                  return (0,
                  o.jsx)(h.z, { className: (0, u.Z)('absolute z-10 hover:bg-light-primary/10 active:bg-light-primary/20\n               dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20', 'prev' === r ? 'left-2' : 'right-2', t), onClick: (0, m.Db)(j(r)), children: (0, o.jsx)(x.e, { iconName: a }) }, r);
                }),
              (0, o.jsx)(c.M, {
                mode: 'wait',
                children: C
                  ? (0, o.jsx)(
                      d.E.div,
                      (0, a.Z)((0, t.Z)({ className: 'mx-auto' }, p.zi), {
                        exit: n ? p.zi.exit : void 0,
                        transition: { duration: 0.15 },
                        children: (0, o.jsx)(f.g, {
                          iconClassName: 'w-20 h-20'
                        })
                      })
                    )
                  : (0, l.createElement)(
                      d.E.div,
                      (0, a.Z)(
                        (0, t.Z)({ className: 'relative mx-auto' }, p.oC),
                        {
                          key: I,
                          children: [
                            B
                              ? (0, o.jsx)('div', {
                                  className: 'group relative flex max-w-3xl',
                                  children: (0, o.jsx)('video', {
                                    className: (0, u.Z)(
                                      'max-h-[75vh] rounded-md object-contain md:max-h-[80vh]',
                                      C ? 'hidden' : 'block'
                                    ),
                                    src: I,
                                    autoPlay: !0,
                                    controls: !0,
                                    onClick: (0, m.Db)(),
                                    children: (0, o.jsx)('source', {
                                      srcSet: I,
                                      type: 'video/*'
                                    })
                                  })
                                })
                              : (0, o.jsxs)('picture', {
                                  className: 'group relative flex max-w-3xl',
                                  children: [
                                    (0, o.jsx)('source', {
                                      srcSet: I,
                                      type: 'image/*'
                                    }),
                                    (0, o.jsx)('img', {
                                      className:
                                        'max-h-[75vh] rounded-md object-contain md:max-h-[80vh]',
                                      src: I,
                                      alt: M,
                                      onClick: (0, m.Db)()
                                    }),
                                    (0, o.jsx)('a', {
                                      className:
                                        'trim-alt accent-tab absolute bottom-0 right-0 mx-2 mb-2 translate-y-4 rounded-md bg-main-background/40 px-2 py-1 text-sm text-light-primary/80 opacity-0 transition hover:bg-main-accent hover:text-white focus-visible:translate-y-0 focus-visible:bg-main-accent focus-visible:text-white focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 dark:text-dark-primary/80',
                                      href: I,
                                      target: '_blank',
                                      rel: 'noreferrer',
                                      onClick: (0, m.Db)(null, !0),
                                      children: M
                                    })
                                  ]
                                }),
                            (0, o.jsx)('a', {
                              className:
                                'custom-underline absolute left-0 -bottom-7 font-medium text-light-primary/80 decoration-transparent underline-offset-2 transition hover:text-light-primary hover:underline hover:decoration-light-primary focus-visible:text-light-primary dark:text-dark-primary/80 dark:hover:text-dark-primary dark:hover:decoration-dark-primary dark:focus-visible:text-dark-primary',
                              href: I,
                              target: '_blank',
                              rel: 'noreferrer',
                              onClick: (0, m.Db)(null, !0),
                              children: 'Open original'
                            })
                          ]
                        }
                      )
                    )
              })
            ]
          })
        );
      }
    },
    9099: function (e, n, r) {
      r.d(n, {
        oC: function () {
          return h;
        },
        u_: function () {
          return x;
        },
        zi: function () {
          return m;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(828),
        s = r(5893),
        o = r(5820),
        l = r(3136),
        c = r(3835),
        d = r(6010),
        u = (0, i.Z)(
          [
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 }
            },
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', duration: 0.5, bounce: 0.4 }
              },
              exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } }
            }
          ],
          2
        ),
        m = u[0],
        h = u[1];
      function x(e) {
        var n = e.open,
          r = e.children,
          i = e.className,
          u = e.modalAnimation,
          x = e.modalClassName,
          f = e.closePanelOnClick,
          p = e.closeModal;
        return (0, s.jsx)(o.M, {
          children:
            n &&
            (0, s.jsxs)(c.V, {
              className: 'relative z-50',
              open: n,
              onClose: p,
              static: !0,
              children: [
                (0, s.jsx)(
                  l.E.div,
                  (0, t.Z)(
                    {
                      className:
                        'hover-animation fixed inset-0 bg-black/40 dark:bg-[#5B7083]/40',
                      'aria-hidden': 'true'
                    },
                    m
                  )
                ),
                (0, s.jsx)('div', {
                  className: (0, d.Z)(
                    'fixed inset-0 overflow-y-auto p-4',
                    null != i ? i : 'flex items-center justify-center'
                  ),
                  children: (0, s.jsx)(
                    c.V.Panel,
                    (0, a.Z)(
                      (0, t.Z)(
                        { className: x, as: l.E.div },
                        null != u ? u : h
                      ),
                      { onClick: f ? p : void 0, children: r }
                    )
                  )
                })
              ]
            })
        });
      }
    },
    4685: function (e, n, r) {
      r.d(n, {
        z: function () {
          return d;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(9534),
        s = r(5893),
        o = r(7294),
        l = r(6010),
        c = r(9570),
        d = (0, o.forwardRef)(function (e, n) {
          var r = e.className,
            o = e.loading,
            d = e.disabled,
            u = e.children,
            m = (0, i.Z)(e, ['className', 'loading', 'disabled', 'children']);
          return (0,
          s.jsxs)('button', (0, a.Z)((0, t.Z)({ className: (0, l.Z)('custom-button main-tab', o && 'relative !text-transparent disabled:cursor-wait', r), type: 'button', disabled: o || d, ref: n }, m), { children: [o && (0, s.jsx)(c.g, { iconClassName: 'h-5 w-5', className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' }), u] }));
        });
    },
    2365: function (e, n, r) {
      r.d(n, {
        d: function () {
          return s;
        }
      });
      var t = r(5893),
        a = r(6010),
        i = {
          PinIcon: function (e) {
            var n = e.className;
            return (0, t.jsxs)('svg', {
              className: n,
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              strokeWidth: '2',
              stroke: 'currentColor',
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              children: [
                (0, t.jsx)('path', {
                  stroke: 'none',
                  d: 'M0 0h24v24H0z',
                  fill: 'none'
                }),
                (0, t.jsx)('path', {
                  d: 'M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4'
                }),
                (0, t.jsx)('line', {
                  x1: '9',
                  y1: '15',
                  x2: '4.5',
                  y2: '19.5'
                }),
                (0, t.jsx)('line', { x1: '14.5', y1: '4', x2: '20', y2: '9.5' })
              ]
            });
          },
          AppleIcon: function (e) {
            var n = e.className;
            return (0, t.jsx)('svg', {
              className: n,
              viewBox: '0 0 24 24',
              children: (0, t.jsx)('g', {
                children: (0, t.jsx)('path', {
                  d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z'
                })
              })
            });
          },
          PinOffIcon: function (e) {
            var n = e.className;
            return (0, t.jsxs)('svg', {
              className: n,
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              strokeWidth: '2',
              stroke: 'currentColor',
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              children: [
                (0, t.jsx)('path', {
                  stroke: 'none',
                  d: 'M0 0h24v24H0z',
                  fill: 'none'
                }),
                (0, t.jsx)('line', { x1: '3', y1: '3', x2: '21', y2: '21' }),
                (0, t.jsx)('path', {
                  d: 'M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251'
                }),
                (0, t.jsx)('line', {
                  x1: '9',
                  y1: '15',
                  x2: '4.5',
                  y2: '19.5'
                }),
                (0, t.jsx)('line', { x1: '14.5', y1: '4', x2: '20', y2: '9.5' })
              ]
            });
          },
          GoogleIcon: function (e) {
            var n = e.className;
            return (0, t.jsx)('svg', {
              className: n,
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 48 48',
              children: (0, t.jsxs)('g', {
                children: [
                  (0, t.jsx)('path', {
                    fill: '#EA4335',
                    d: 'M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                  }),
                  (0, t.jsx)('path', {
                    fill: '#4285F4',
                    d: 'M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                  }),
                  (0, t.jsx)('path', {
                    fill: '#FBBC05',
                    d: 'M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                  }),
                  (0, t.jsx)('path', {
                    fill: '#34A853',
                    d: 'M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                  }),
                  (0, t.jsx)('path', { fill: 'none', d: 'M0 0h48v48H0z' })
                ]
              })
            });
          },
          TwitterIcon: function (e) {
            var n = e.className;
            return (0, t.jsx)('svg', {
              className: (0, a.Z)('fill-current', n),
              viewBox: '0 0 24 24',
              children: (0, t.jsx)('g', {
                children: (0, t.jsx)('path', {
                  d: 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'
                })
              })
            });
          },
          FeatherIcon: function (e) {
            var n = e.className;
            return (0, t.jsx)('svg', {
              className: (0, a.Z)('fill-current', n),
              viewBox: '0 0 24 24',
              'aria-hidden': 'true',
              children: (0, t.jsx)('g', {
                children: (0, t.jsx)('path', {
                  d: 'M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z'
                })
              })
            });
          },
          SpinnerIcon: function (e) {
            var n = e.className;
            return (0, t.jsxs)('svg', {
              className: (0, a.Z)('animate-spin', n),
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              children: [
                (0, t.jsx)('circle', {
                  className: 'opacity-25',
                  cx: '12',
                  cy: '12',
                  r: '10',
                  stroke: 'currentColor',
                  strokeWidth: '4'
                }),
                (0, t.jsx)('path', {
                  className: 'opacity-75',
                  fill: 'currentColor',
                  d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                })
              ]
            });
          },
          TriangleIcon: function (e) {
            var n = e.className;
            return (0, t.jsx)('svg', {
              className: n,
              viewBox: '0 0 24 24',
              'aria-hidden': 'true',
              children: (0, t.jsx)('g', {
                children: (0, t.jsx)('path', {
                  d: 'M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z'
                })
              })
            });
          }
        };
      function s(e) {
        var n = e.iconName,
          r = e.className,
          a = i[n];
        return (0, t.jsx)(a, { className: null != r ? r : 'h-6 w-6' });
      }
    },
    6028: function (e, n, r) {
      r.d(n, {
        j: function () {
          return i;
        }
      });
      var t = r(5893),
        a = r(4266);
      function i(e) {
        var n = e.message;
        return (0, t.jsxs)('div', {
          className:
            'flex flex-col items-center justify-center gap-2 py-5 px-3 text-light-secondary dark:text-dark-secondary',
          children: [
            (0, t.jsx)('i', {
              children: (0, t.jsx)(a.e, {
                className: 'h-10 w-10',
                iconName: 'ExclamationTriangleIcon'
              })
            }),
            (0, t.jsx)('p', {
              children: null != n ? n : 'Something went wrong. Try Loading.'
            })
          ]
        });
      }
    },
    5122: function (e, n, r) {
      r.d(n, {
        e: function () {
          return h;
        }
      });
      var t = r(7568),
        a = r(655),
        i = r(5893),
        s = r(2108),
        o = r(3040),
        l = r(7359),
        c = r(6269),
        d = r(9099),
        u = r(9253),
        m = r(4685);
      function h(e) {
        var n = e.userTargetId,
          r = e.userTargetUsername,
          h = (0, s.aC)().user,
          x = (0, o.d)(),
          f = x.open,
          p = x.openModal,
          g = x.closeModal;
        if ((null == h ? void 0 : h.id) === n) return null;
        var v,
          b = null != h ? h : {},
          j = b.id,
          y = b.following,
          w = function () {
            return (0, l.gL)('follow', j, n);
          },
          N =
            ((v = (0, t.Z)(function () {
              return (0, a.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, (0, l.gL)('unfollow', j, n)];
                  case 1:
                    return e.sent(), g(), [2];
                }
              });
            })),
            function () {
              return v.apply(this, arguments);
            }),
          k = !!(null == y ? void 0 : y.includes(null != n ? n : ''));
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.u_, {
              modalClassName:
                'flex flex-col gap-6 max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: f,
              closeModal: g,
              children: (0, i.jsx)(u.W, {
                title: 'Unfollow @'.concat(r, '?'),
                description:
                  'Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.',
                mainBtnLabel: 'Unfollow',
                action: N,
                closeModal: g
              })
            }),
            k
              ? (0, i.jsx)(m.z, {
                  className:
                    'dark-bg-tab min-w-[106px] self-start border border-light-line-reply px-4 py-1.5 font-bold hover:border-accent-red hover:bg-accent-red/10 hover:text-accent-red hover:before:content-["Unfollow"] inner:hover:hidden dark:border-light-secondary',
                  onClick: (0, c.Db)(p),
                  children: (0, i.jsx)('span', { children: 'Following' })
                })
              : (0, i.jsx)(m.z, {
                  className:
                    'self-start border bg-light-primary px-4 py-1.5 font-bold text-white hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border dark:text-light-primary dark:hover:bg-light-border/90 dark:focus-visible:bg-light-border/90 dark:active:bg-light-border/75',
                  onClick: (0, c.Db)(w),
                  children: 'Follow'
                })
          ]
        });
      }
    },
    4266: function (e, n, r) {
      r.d(n, {
        e: function () {
          return s;
        }
      });
      var t = r(5893),
        a = r(8911),
        i = r(6431);
      function s(e) {
        var n = e.solid,
          r = e.iconName,
          s = e.className,
          o = n ? a[r] : i[r];
        return (0, t.jsx)(o, { className: null != s ? s : 'h-6 w-6' });
      }
    },
    9570: function (e, n, r) {
      r.d(n, {
        g: function () {
          return s;
        }
      });
      var t = r(5893),
        a = r(6010),
        i = r(2365);
      function s(e) {
        var n = e.className,
          r = e.iconClassName;
        return (0, t.jsx)('i', {
          className: (0, a.Z)('flex justify-center', null != n ? n : 'p-4'),
          children: (0, t.jsx)(i.d, {
            className: (0, a.Z)('text-main-accent', null != r ? r : 'h-7 w-7'),
            iconName: 'SpinnerIcon'
          })
        });
      }
    },
    4664: function (e, n, r) {
      r.d(n, {
        o: function () {
          return d;
        }
      });
      var t = r(6042),
        a = r(9534),
        i = r(5893),
        s = r(7294),
        o = r(5675),
        l = r.n(o),
        c = r(6010);
      function d(e) {
        var n = e.src,
          r = e.alt,
          o = e.width,
          d = e.height,
          u = e.children,
          m = e.className,
          h = e.useSkeleton,
          x = e.imgClassName,
          f = e.previewCount,
          p = e.blurClassName,
          g = (0, a.Z)(e, [
            'src',
            'alt',
            'width',
            'height',
            'children',
            'className',
            'useSkeleton',
            'imgClassName',
            'previewCount',
            'blurClassName'
          ]),
          v = (0, s.useState)(!!h),
          b = v[0],
          j = v[1],
          y = function () {
            return j(!1);
          };
        return (0, i.jsxs)('figure', {
          style: { width: o },
          className: m,
          children: [
            (0, i.jsx)(
              l(),
              (0, t.Z)(
                {
                  className: (0, c.Z)(
                    x,
                    b
                      ? null != p
                        ? p
                        : 'animate-pulse bg-light-secondary dark:bg-dark-secondary'
                      : 1 === f
                      ? '!h-auto !min-h-0 !w-auto !min-w-0 rounded-lg object-contain'
                      : 'object-cover'
                  ),
                  src: n,
                  width: o,
                  height: d,
                  alt: r,
                  onLoadingComplete: y,
                  layout: 'responsive'
                },
                g
              )
            ),
            u
          ]
        });
      }
    },
    3276: function (e, n, r) {
      r.d(n, {
        e: function () {
          return i;
        }
      });
      var t = r(5893),
        a = r(6010);
      function i(e) {
        var n = e.tip,
          r = e.modal,
          i = e.className,
          s = e.groupInner;
        return r
          ? null
          : (0, t.jsx)('div', {
              className: (0, a.Z)(
                'invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs\n         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69]',
                s
                  ? 'group-hover/inner:visible group-hover/inner:opacity-100 group-hover/inner:delay-500 \n             group-focus-visible/inner:visible group-focus-visible/inner:opacity-100 group-focus-visible/inner:delay-200'
                  : 'group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible \n             group-focus-visible:opacity-100',
                null != i ? i : 'translate-y-3'
              ),
              children: (0, t.jsx)('span', { children: n })
            });
      }
    },
    1708: function (e, n, r) {
      r.d(n, {
        Y: function () {
          return l;
        }
      });
      var t = r(5893),
        a = r(1664),
        i = r.n(a),
        s = r(6010),
        o = r(4664);
      function l(e) {
        var n = e.src,
          r = e.alt,
          a = e.size,
          l = e.username,
          c = e.className,
          d = null != a ? a : 48;
        return (0, t.jsx)(i(), {
          href: l ? '/user/'.concat(l) : '#',
          children: (0, t.jsx)('a', {
            className: (0, s.Z)(
              'blur-picture flex self-start',
              !l && 'pointer-events-none',
              c
            ),
            tabIndex: l ? 0 : -1,
            children: (0, t.jsx)(
              o.o,
              {
                useSkeleton: !0,
                imgClassName: 'rounded-full',
                width: d,
                height: d,
                src: n,
                alt: r
              },
              n
            )
          })
        });
      }
    },
    7238: function (e, n, r) {
      r.d(n, {
        O: function () {
          return x;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(5893),
        s = r(1664),
        o = r.n(s),
        l = r(1708),
        c = r(5122),
        d = r(7391),
        u = r(4531),
        m = r(6154),
        h = r(7876);
      function x(e) {
        var n = e.id,
          r = e.bio,
          s = e.name,
          x = e.modal,
          f = e.follow,
          p = e.username,
          g = e.verified,
          v = e.photoURL;
        return (0, i.jsx)(o(), {
          href: '/user/'.concat(p),
          children: (0, i.jsxs)('a', {
            className:
              'accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4 py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5',
            children: [
              (0, i.jsx)(
                d.Y,
                (0, a.Z)((0, t.Z)({ avatar: !0 }, e), {
                  modal: x,
                  children: (0, i.jsx)(l.Y, { src: v, alt: s, username: p })
                })
              ),
              (0, i.jsxs)('div', {
                className: 'flex flex-col gap-1 truncate xs:overflow-visible',
                children: [
                  (0, i.jsxs)('div', {
                    className:
                      'flex items-center justify-between gap-2 truncate xs:overflow-visible',
                    children: [
                      (0, i.jsxs)('div', {
                        className:
                          'flex flex-col justify-center truncate xs:overflow-visible xs:whitespace-normal',
                        children: [
                          (0, i.jsx)(
                            d.Y,
                            (0, a.Z)((0, t.Z)({}, e), {
                              modal: x,
                              children: (0, i.jsx)(u.v, {
                                className: '-mb-1',
                                name: s,
                                username: p,
                                verified: g
                              })
                            })
                          ),
                          (0, i.jsxs)('div', {
                            className:
                              'flex items-center gap-1 text-light-secondary dark:text-dark-secondary',
                            children: [
                              (0, i.jsx)(
                                d.Y,
                                (0, a.Z)((0, t.Z)({}, e), {
                                  modal: x,
                                  children: (0, i.jsx)(h.a, { username: p })
                                })
                              ),
                              f && (0, i.jsx)(m.y, { userTargetId: n })
                            ]
                          })
                        ]
                      }),
                      (0, i.jsx)(c.e, {
                        userTargetId: n,
                        userTargetUsername: p
                      })
                    ]
                  }),
                  f &&
                    r &&
                    (0, i.jsx)('p', {
                      className: 'whitespace-normal',
                      children: r
                    })
                ]
              })
            ]
          })
        });
      }
    },
    6154: function (e, n, r) {
      r.d(n, {
        y: function () {
          return i;
        }
      });
      var t = r(5893),
        a = r(2108);
      function i(e) {
        var n = e.userTargetId,
          r = (0, a.aC)().user;
        return (null == r ? void 0 : r.id) !== n &&
          (null == r ? void 0 : r.followers.includes(n))
          ? (0, t.jsx)('p', {
              className: 'rounded bg-main-search-background px-1 text-xs',
              children: 'Follows you'
            })
          : null;
      }
    },
    4531: function (e, n, r) {
      r.d(n, {
        v: function () {
          return l;
        }
      });
      var t = r(5893),
        a = r(6010),
        i = r(1664),
        s = r.n(i),
        o = r(4266);
      function l(e) {
        var n = e.tag,
          r = e.name,
          i = e.verified,
          l = e.username,
          c = e.className,
          d = e.iconClassName;
        return (0, t.jsx)(s(), {
          href: l ? '/user/'.concat(l) : '#',
          children: (0, t.jsxs)('a', {
            className: (0, a.Z)(
              'flex items-center gap-1 truncate font-bold',
              l ? 'custom-underline' : 'pointer-events-none',
              c
            ),
            tabIndex: l ? 0 : -1,
            children: [
              (0, t.jsx)(n || 'p', { className: 'truncate', children: r }),
              i &&
                (0, t.jsx)('i', {
                  children: (0, t.jsx)(o.e, {
                    className: (0, a.Z)(
                      'fill-accent-blue',
                      null != d ? d : 'h-5 w-5'
                    ),
                    iconName: 'CheckBadgeIcon',
                    solid: !0
                  })
                })
            ]
          })
        });
      }
    },
    7391: function (e, n, r) {
      r.d(n, {
        Y: function () {
          return f;
        }
      });
      var t = r(828),
        a = r(5893),
        i = r(1664),
        s = r.n(i),
        o = r(6010),
        l = r(6625),
        c = r(5122),
        d = r(4664),
        u = r(1708),
        m = r(4531),
        h = r(6154),
        x = r(7876);
      function f(e) {
        var n = e.id,
          r = e.bio,
          i = e.name,
          f = e.modal,
          p = e.avatar,
          g = e.verified,
          v = e.children,
          b = e.photoURL,
          j = e.username,
          y = e.following,
          w = e.followers,
          N = e.coverPhotoURL;
        if ((0, l.zY)().isMobile || f)
          return (0, a.jsx)(a.Fragment, { children: v });
        var k = '/user/'.concat(j),
          C = [
            ['following', 'Following', y.length],
            ['followers', 'Followers', w.length]
          ];
        return (0, a.jsxs)('div', {
          className: (0, o.Z)(
            'group relative self-start text-light-primary dark:text-dark-primary',
            p ? '[&>div]:translate-y-2' : 'grid [&>div]:translate-y-7'
          ),
          children: [
            v,
            (0, a.jsx)('div', {
              className:
                'menu-container invisible absolute left-1/2 w-72 -translate-x-1/2 rounded-2xl opacity-0 [transition:visibility_0ms_ease_400ms,opacity_200ms_ease_200ms] group-hover:visible group-hover:opacity-100 group-hover:delay-500',
              children: (0, a.jsxs)('div', {
                className: 'flex flex-col gap-3 p-4',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex flex-col gap-2',
                    children: [
                      (0, a.jsx)('div', {
                        className: '-mx-4 -mt-4',
                        children: N
                          ? (0, a.jsx)(s(), {
                              href: k,
                              children: (0, a.jsx)('a', {
                                className: 'blur-picture',
                                children: (0, a.jsx)(d.o, {
                                  useSkeleton: !0,
                                  className: 'relative h-24',
                                  imgClassName: 'rounded-t-2xl',
                                  src: N,
                                  alt: i,
                                  layout: 'fill'
                                })
                              })
                            })
                          : (0, a.jsx)('div', {
                              className:
                                'h-16 rounded-t-2xl bg-light-line-reply dark:bg-dark-line-reply'
                            })
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex justify-between',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'mb-10',
                            children: (0, a.jsx)(u.Y, {
                              className:
                                'absolute -translate-y-1/2 bg-main-background p-1 hover:brightness-100 [&>figure>span]:[transition:200ms] [&:hover>figure>span]:brightness-75',
                              src: b,
                              alt: i,
                              size: 64,
                              username: j
                            })
                          }),
                          (0, a.jsx)(c.e, {
                            userTargetId: n,
                            userTargetUsername: j
                          })
                        ]
                      }),
                      (0, a.jsxs)('div', {
                        children: [
                          (0, a.jsx)(m.v, {
                            className: '-mb-1 text-lg',
                            name: i,
                            username: j,
                            verified: g
                          }),
                          (0, a.jsxs)('div', {
                            className:
                              'flex items-center gap-1 text-light-secondary dark:text-dark-secondary',
                            children: [
                              (0, a.jsx)(x.a, { username: j }),
                              (0, a.jsx)(h.y, { userTargetId: n })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  r && (0, a.jsx)('p', { children: r }),
                  (0, a.jsx)('div', {
                    className: 'text-secondary flex gap-4',
                    children: C.map(function (e) {
                      var n = (0, t.Z)(e, 3),
                        r = n[0],
                        i = n[1],
                        o = n[2];
                      return (0,
                      a.jsx)(s(), { href: ''.concat(k, '/').concat(r), children: (0, a.jsxs)('a', { className: 'hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary', children: [(0, a.jsx)('p', { className: 'font-bold', children: o }), (0, a.jsx)('p', { className: 'text-light-secondary dark:text-dark-secondary', children: i })] }) }, r);
                    })
                  })
                ]
              })
            })
          ]
        });
      }
    },
    7876: function (e, n, r) {
      r.d(n, {
        a: function () {
          return o;
        }
      });
      var t = r(5893),
        a = r(1664),
        i = r.n(a),
        s = r(6010);
      function o(e) {
        var n = e.username,
          r = e.className,
          a = e.disableLink;
        return (0, t.jsx)(i(), {
          href: '/user/'.concat(n),
          children: (0, t.jsxs)('a', {
            className: (0, s.Z)(
              'truncate text-light-secondary dark:text-dark-secondary',
              r,
              a && 'pointer-events-none'
            ),
            tabIndex: -1,
            children: ['@', n]
          })
        });
      }
    },
    6625: function (e, n, r) {
      r.d(n, {
        En: function () {
          return l;
        },
        zY: function () {
          return c;
        }
      });
      var t = r(6042),
        a = r(9396),
        i = r(5893),
        s = r(7294),
        o = (0, s.createContext)(null);
      function l(e) {
        var n = e.children,
          r = (0, s.useState)({
            width: window.innerWidth,
            height: window.innerHeight
          }),
          l = r[0],
          c = r[1];
        (0, s.useEffect)(function () {
          var e = function () {
            return c({ width: window.innerWidth, height: window.innerHeight });
          };
          return (
            window.addEventListener('resize', e),
            function () {
              return window.removeEventListener('resize', e);
            }
          );
        }, []);
        var d = (0, a.Z)((0, t.Z)({}, l), { isMobile: l.width < 500 });
        return (0, i.jsx)(o.Provider, { value: d, children: n });
      }
      function c() {
        var e = (0, s.useContext)(o);
        if (!e)
          throw Error('useWindow must be used within an WindowContextProvider');
        return e;
      }
    },
    1944: function (e, n, r) {
      r.d(n, {
        p: function () {
          return o;
        },
        u: function () {
          return l;
        }
      });
      var t = r(828),
        a = r(9815),
        i = new Intl.RelativeTimeFormat('en-gb', {
          style: 'short',
          numeric: 'auto'
        }),
        s = { day: 864e5, hour: 36e5, minute: 6e4 };
      function o(e, n) {
        var r,
          a,
          o,
          l,
          m,
          h = e.toDate();
        return 'full' === n
          ? c(h)
          : 'tweet' === n
          ? ((r = h),
            d(r)
              ? (function (e) {
                  var n = (function (e) {
                    var n = +e - +new Date();
                    if (n > 0) return 'now';
                    var r = Object.entries(s),
                      a = !0,
                      o = !1,
                      l = void 0;
                    try {
                      for (
                        var c, d = r[Symbol.iterator]();
                        !(a = (c = d.next()).done);
                        a = !0
                      ) {
                        var u = (0, t.Z)(c.value, 2),
                          m = u[0],
                          h = u[1];
                        if (Math.abs(n) > h)
                          return i.format(Math.round(n / h), m);
                      }
                    } catch (x) {
                      (o = !0), (l = x);
                    } finally {
                      try {
                        a || null == d.return || d.return();
                      } finally {
                        if (o) throw l;
                      }
                    }
                    return i.format(Math.round(n / 1e3), 'second');
                  })(e);
                  if ('now' === n) return n;
                  var r = (0, t.Z)(n.split(' '), 2),
                    a = r[0],
                    o = r[1];
                  return ''.concat(a).concat(o[0]);
                })(r)
              : u(r)
              ? new Intl.DateTimeFormat('en-gb', {
                  day: 'numeric',
                  month: 'short'
                }).format(r)
              : new Intl.DateTimeFormat('en-gb', {
                  day: 'numeric',
                  month: 'short',
                  year: ((a = r), a.getFullYear() === new Date().getFullYear())
                    ? void 0
                    : 'numeric'
                }).format(r))
          : 'joined' === n
          ? ((o = h),
            new Intl.DateTimeFormat('en-gb', {
              month: 'long',
              year: 'numeric'
            }).format(o))
          : ((l = h),
            (m = d(l) ? 'today' : u(l) ? 'yesterday' : null),
            m
              ? ''
                  .concat('today' === m ? 'Today' : 'Yesterday', ' at ')
                  .concat(l.toLocaleTimeString('en-gb').slice(0, -3))
              : c(l));
      }
      function l(e) {
        return new Intl.NumberFormat('en-GB', {
          notation: e > 1e4 ? 'compact' : 'standard',
          maximumFractionDigits: 1
        }).format(e);
      }
      function c(e) {
        var n = new Intl.DateTimeFormat('en-gb', {
          hour: 'numeric',
          minute: 'numeric',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
          .format(e)
          .split(', ');
        return 2 === n.length
          ? (0, a.Z)(n).reverse().join(' \xb7 ')
          : [n.slice(0, 2).join(', '), n.slice(-1)].reverse().join(' \xb7 ');
      }
      function d(e) {
        return new Date().toDateString() === e.toDateString();
      }
      function u(e) {
        var n = new Date();
        return (
          n.setDate(n.getDate() - 1), n.toDateString() === e.toDateString()
        );
      }
    },
    3872: function (e, n, r) {
      r.d(n, {
        K: function () {
          return d;
        }
      });
      var t = r(7568),
        a = r(6042),
        i = r(9396),
        s = r(655),
        o = r(7294),
        l = r(5321),
        c = r(1940);
      function d(e, n) {
        var r,
          d,
          u,
          m,
          h = (0, o.useState)(null),
          x = h[0],
          f = h[1],
          p = (0, o.useState)(!0),
          g = p[0],
          v = p[1],
          b =
            ((u = (d = (0, o.useState)(e))[0]),
            (m = d[1]),
            (0, o.useEffect)(
              function () {
                (0, l.iE)(e, u) || m(e);
              },
              [e]
            ),
            u),
          j = null != n ? n : {},
          y = j.includeUser,
          w = j.allowNull,
          N = j.disabled,
          k = j.preserve;
        return (
          (0, o.useEffect)(
            function () {
              if (N) {
                v(!1);
                return;
              }
              !k && x && (f(null), v(!0));
              var e,
                n =
                  ((e = (0, t.Z)(function (e) {
                    var n;
                    return (0, s.__generator)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          var r;
                          return [
                            4,
                            Promise.all(
                              e.map(
                                ((r = (0, t.Z)(function (e) {
                                  var n;
                                  return (0, s.__generator)(this, function (r) {
                                    switch (r.label) {
                                      case 0:
                                        return [
                                          4,
                                          (0, l.QT)(
                                            (0, l.JU)(c.W$, e.createdBy)
                                          )
                                        ];
                                      case 1:
                                        return (
                                          (n = r.sent().data()),
                                          [
                                            2,
                                            (0, i.Z)((0, a.Z)({}, e), {
                                              user: n
                                            })
                                          ]
                                        );
                                    }
                                  });
                                })),
                                function (e) {
                                  return r.apply(this, arguments);
                                })
                              )
                            )
                          ];
                        case 1:
                          return f(n.sent()), v(!1), [2];
                      }
                    });
                  })),
                  function (n) {
                    return e.apply(this, arguments);
                  });
              return (0, l.cf)(b, function (e) {
                var r = e.docs.map(function (e) {
                  return e.data({ serverTimestamps: 'estimate' });
                });
                if (w && !r.length) {
                  f(null), v(!1);
                  return;
                }
                y ? n(r) : (f(r), v(!1));
              });
            },
            [b, N]
          ),
          { data: x, loading: g }
        );
      }
    },
    5662: function (e, n, r) {
      r.d(n, {
        k: function () {
          return d;
        }
      });
      var t = r(7568),
        a = r(6042),
        i = r(9396),
        s = r(655),
        o = r(7294),
        l = r(5321),
        c = r(1940);
      function d(e, n) {
        var r,
          d,
          u,
          m,
          h = (0, o.useState)(null),
          x = h[0],
          f = h[1],
          p = (0, o.useState)(!0),
          g = p[0],
          v = p[1],
          b =
            ((u = (d = (0, o.useState)(e))[0]),
            (m = d[1]),
            (0, o.useEffect)(
              function () {
                (0, l.Eo)(e, u) || m(e);
              },
              [e]
            ),
            u),
          j = null != n ? n : {},
          y = j.includeUser,
          w = j.allowNull,
          N = j.disabled;
        return (
          (0, o.useEffect)(
            function () {
              if (N) {
                f(null), v(!1);
                return;
              }
              f(null), v(!0);
              var n,
                r =
                  ((n = (0, t.Z)(function (e) {
                    var n, r;
                    return (0, s.__generator)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, (0, l.QT)((0, l.JU)(c.W$, e.createdBy))];
                        case 1:
                          return (
                            (n = r.sent()),
                            f((0, i.Z)((0, a.Z)({}, e), { user: n.data() })),
                            v(!1),
                            [2]
                          );
                      }
                    });
                  })),
                  function (e) {
                    return n.apply(this, arguments);
                  });
              return (0, l.cf)(e, function (e) {
                var n = e.data({ serverTimestamps: 'estimate' });
                if (w && !n) {
                  f(null), v(!1);
                  return;
                }
                y ? r(n) : (f(n), v(!1));
              });
            },
            [b]
          ),
          { data: x, loading: g }
        );
      }
    },
    3040: function (e, n, r) {
      r.d(n, {
        d: function () {
          return a;
        }
      });
      var t = r(7294);
      function a() {
        var e = (0, t.useState)(!1),
          n = e[0],
          r = e[1];
        return {
          open: n,
          openModal: function () {
            return r(!0);
          },
          closeModal: function () {
            return r(!1);
          }
        };
      }
    },
    6269: function (e, n, r) {
      function t(e, n) {
        return function (r) {
          r.stopPropagation(), n || r.preventDefault(), e && e();
        };
      }
      function a(e) {
        return function () {
          return setTimeout(function () {
            return window.scrollTo(0, 0);
          }, e);
        };
      }
      function i(e) {
        return new Promise(function (n) {
          return setTimeout(n, e);
        });
      }
      function s(e) {
        return {
          initial: { opacity: 0, y: -e },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: e },
          transition: { type: 'tween', duration: 0.15 }
        };
      }
      function o(e) {
        return e > 1 ? 's' : '';
      }
      r.d(n, {
        DX: function () {
          return s;
        },
        Db: function () {
          return t;
        },
        _v: function () {
          return i;
        },
        uz: function () {
          return o;
        },
        wX: function () {
          return a;
        }
      });
    },
    3521: function (e, n, r) {
      r.d(n, {
        rh: function () {
          return o;
        },
        t6: function () {
          return l;
        }
      });
      var t = r(9815),
        a = r(5195),
        i = [
          'apng',
          'avif',
          'gif',
          'jpg',
          'jpeg',
          'jfif',
          'pjpeg',
          'pjp',
          'png',
          'svg',
          'webp'
        ],
        s = (0, t.Z)(i).concat(['mp4', 'mov', 'avi', 'mkv', 'webm']);
      function o(e, n) {
        return n.length < 4
          ? 'Your username must be longer than 4 characters.'
          : n.length > 15
          ? 'Your username must be shorter than 15 characters.'
          : /^\w+$/i.test(n)
          ? /[a-z]/i.test(n)
            ? n === e
              ? 'This is your current username.'
              : null
            : 'Include a non-number character.'
          : "Your username can only contain letters, numbers and '_'.";
      }
      function l(e) {
        var n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = r.currentFiles,
          o = r.allowUploadingVideos;
        if (!e || !e.length) return null;
        var l =
          void 0 !== t && (4 === t || e.length > 4 - t)
            ? null
            : Array.from(e).filter(function (e) {
                var n,
                  r,
                  t,
                  a,
                  l,
                  c,
                  d,
                  u,
                  m = e.name,
                  h = e.size;
                return o
                  ? s.includes(
                      null === (a = m.split('.').pop()) || void 0 === a
                        ? void 0
                        : a.toLowerCase()
                    ) && h < 52428800
                  : i.includes(
                      null === (u = m.split('.').pop()) || void 0 === u
                        ? void 0
                        : u.toLowerCase()
                    ) && h < 20971520;
              });
        if (!l || !l.length) return null;
        var c,
          d = l.map(function (e) {
            var n = e.name,
              r = (0, a.w)();
            return {
              id: r,
              name: 'image.png' === n ? ''.concat(r, '.png') : null
            };
          });
        return {
          imagesPreviewData: l.map(function (e, r) {
            return {
              id: d[r].id,
              src: URL.createObjectURL(e),
              alt: null !== (n = d[r].name) && void 0 !== n ? n : e.name,
              type: e.type
            };
          }),
          selectedImagesData: l.map(function (e, n) {
            var r, t, a;
            return (
              (r = e),
              (t = d[n].id),
              (a = d[n].name),
              Object.assign(
                a
                  ? new File([r], a, {
                      type: r.type,
                      lastModified: r.lastModified
                    })
                  : r,
                { id: t }
              )
            );
          })
        };
      }
    }
  }
]);
