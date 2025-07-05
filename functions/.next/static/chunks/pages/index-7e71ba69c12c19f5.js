(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(5933);
        }
      ]);
    },
    643: function (e, t, r) {
      'use strict';
      r.d(t, {
        V: function () {
          return a;
        }
      });
      var n = r(5893),
        s = r(2365),
        i = r(585);
      function a() {
        return (0, n.jsxs)('main', {
          className: 'flex min-h-screen items-center justify-center',
          children: [
            (0, n.jsx)(i.H, {
              title: 'Twitter',
              description:
                'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
              image: '/home.png'
            }),
            (0, n.jsx)('i', {
              children: (0, n.jsx)(s.d, {
                className: 'h-20 w-20 text-[#1DA1F2]',
                iconName: 'TwitterIcon'
              })
            })
          ]
        });
      }
    },
    585: function (e, t, r) {
      'use strict';
      r.d(t, {
        H: function () {
          return l;
        }
      });
      var n = r(5893),
        s = r(1163),
        i = r(9008),
        a = r.n(i),
        c = r(1923);
      function l(e) {
        var t = e.title,
          r = e.image,
          i = e.description,
          l = (0, s.useRouter)().asPath;
        return (0, n.jsxs)(a(), {
          children: [
            (0, n.jsx)('title', { children: t }),
            (0, n.jsx)('meta', { name: 'og:title', content: t }),
            i && (0, n.jsx)('meta', { name: 'description', content: i }),
            i && (0, n.jsx)('meta', { name: 'og:description', content: i }),
            r && (0, n.jsx)('meta', { property: 'og:image', content: r }),
            (0, n.jsx)('meta', {
              name: 'og:url',
              content: ''.concat(c.f7).concat('/' === l ? '' : l)
            })
          ]
        });
      }
    },
    4685: function (e, t, r) {
      'use strict';
      r.d(t, {
        z: function () {
          return u;
        }
      });
      var n = r(6042),
        s = r(9396),
        i = r(9534),
        a = r(5893),
        c = r(7294),
        l = r(6010),
        o = r(9570),
        u = (0, c.forwardRef)(function (e, t) {
          var r = e.className,
            c = e.loading,
            u = e.disabled,
            d = e.children,
            h = (0, i.Z)(e, ['className', 'loading', 'disabled', 'children']);
          return (0,
          a.jsxs)('button', (0, s.Z)((0, n.Z)({ className: (0, l.Z)('custom-button main-tab', c && 'relative !text-transparent disabled:cursor-wait', r), type: 'button', disabled: c || u, ref: t }, h), { children: [c && (0, a.jsx)(o.g, { iconClassName: 'h-5 w-5', className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' }), d] }));
        });
    },
    2365: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return a;
        }
      });
      var n = r(5893),
        s = r(6010),
        i = {
          PinIcon: function (e) {
            var t = e.className;
            return (0, n.jsxs)('svg', {
              className: t,
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
                (0, n.jsx)('path', {
                  stroke: 'none',
                  d: 'M0 0h24v24H0z',
                  fill: 'none'
                }),
                (0, n.jsx)('path', {
                  d: 'M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4'
                }),
                (0, n.jsx)('line', {
                  x1: '9',
                  y1: '15',
                  x2: '4.5',
                  y2: '19.5'
                }),
                (0, n.jsx)('line', { x1: '14.5', y1: '4', x2: '20', y2: '9.5' })
              ]
            });
          },
          AppleIcon: function (e) {
            var t = e.className;
            return (0, n.jsx)('svg', {
              className: t,
              viewBox: '0 0 24 24',
              children: (0, n.jsx)('g', {
                children: (0, n.jsx)('path', {
                  d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z'
                })
              })
            });
          },
          PinOffIcon: function (e) {
            var t = e.className;
            return (0, n.jsxs)('svg', {
              className: t,
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
                (0, n.jsx)('path', {
                  stroke: 'none',
                  d: 'M0 0h24v24H0z',
                  fill: 'none'
                }),
                (0, n.jsx)('line', { x1: '3', y1: '3', x2: '21', y2: '21' }),
                (0, n.jsx)('path', {
                  d: 'M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251'
                }),
                (0, n.jsx)('line', {
                  x1: '9',
                  y1: '15',
                  x2: '4.5',
                  y2: '19.5'
                }),
                (0, n.jsx)('line', { x1: '14.5', y1: '4', x2: '20', y2: '9.5' })
              ]
            });
          },
          GoogleIcon: function (e) {
            var t = e.className;
            return (0, n.jsx)('svg', {
              className: t,
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 48 48',
              children: (0, n.jsxs)('g', {
                children: [
                  (0, n.jsx)('path', {
                    fill: '#EA4335',
                    d: 'M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                  }),
                  (0, n.jsx)('path', {
                    fill: '#4285F4',
                    d: 'M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                  }),
                  (0, n.jsx)('path', {
                    fill: '#FBBC05',
                    d: 'M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                  }),
                  (0, n.jsx)('path', {
                    fill: '#34A853',
                    d: 'M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                  }),
                  (0, n.jsx)('path', { fill: 'none', d: 'M0 0h48v48H0z' })
                ]
              })
            });
          },
          TwitterIcon: function (e) {
            var t = e.className;
            return (0, n.jsx)('svg', {
              className: (0, s.Z)('fill-current', t),
              viewBox: '0 0 24 24',
              children: (0, n.jsx)('g', {
                children: (0, n.jsx)('path', {
                  d: 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'
                })
              })
            });
          },
          FeatherIcon: function (e) {
            var t = e.className;
            return (0, n.jsx)('svg', {
              className: (0, s.Z)('fill-current', t),
              viewBox: '0 0 24 24',
              'aria-hidden': 'true',
              children: (0, n.jsx)('g', {
                children: (0, n.jsx)('path', {
                  d: 'M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z'
                })
              })
            });
          },
          SpinnerIcon: function (e) {
            var t = e.className;
            return (0, n.jsxs)('svg', {
              className: (0, s.Z)('animate-spin', t),
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              children: [
                (0, n.jsx)('circle', {
                  className: 'opacity-25',
                  cx: '12',
                  cy: '12',
                  r: '10',
                  stroke: 'currentColor',
                  strokeWidth: '4'
                }),
                (0, n.jsx)('path', {
                  className: 'opacity-75',
                  fill: 'currentColor',
                  d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                })
              ]
            });
          },
          TriangleIcon: function (e) {
            var t = e.className;
            return (0, n.jsx)('svg', {
              className: t,
              viewBox: '0 0 24 24',
              'aria-hidden': 'true',
              children: (0, n.jsx)('g', {
                children: (0, n.jsx)('path', {
                  d: 'M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z'
                })
              })
            });
          }
        };
      function a(e) {
        var t = e.iconName,
          r = e.className,
          s = i[t];
        return (0, n.jsx)(s, { className: null != r ? r : 'h-6 w-6' });
      }
    },
    9570: function (e, t, r) {
      'use strict';
      r.d(t, {
        g: function () {
          return a;
        }
      });
      var n = r(5893),
        s = r(6010),
        i = r(2365);
      function a(e) {
        var t = e.className,
          r = e.iconClassName;
        return (0, n.jsx)('i', {
          className: (0, s.Z)('flex justify-center', null != t ? t : 'p-4'),
          children: (0, n.jsx)(i.d, {
            className: (0, s.Z)('text-main-accent', null != r ? r : 'h-7 w-7'),
            iconName: 'SpinnerIcon'
          })
        });
      }
    },
    4664: function (e, t, r) {
      'use strict';
      r.d(t, {
        o: function () {
          return u;
        }
      });
      var n = r(6042),
        s = r(9534),
        i = r(5893),
        a = r(7294),
        c = r(5675),
        l = r.n(c),
        o = r(6010);
      function u(e) {
        var t = e.src,
          r = e.alt,
          c = e.width,
          u = e.height,
          d = e.children,
          h = e.className,
          x = e.useSkeleton,
          m = e.imgClassName,
          g = e.previewCount,
          f = e.blurClassName,
          p = (0, s.Z)(e, [
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
          w = (0, a.useState)(!!x),
          b = w[0],
          v = w[1],
          j = function () {
            return v(!1);
          };
        return (0, i.jsxs)('figure', {
          style: { width: c },
          className: h,
          children: [
            (0, i.jsx)(
              l(),
              (0, n.Z)(
                {
                  className: (0, o.Z)(
                    m,
                    b
                      ? null != f
                        ? f
                        : 'animate-pulse bg-light-secondary dark:bg-dark-secondary'
                      : 1 === g
                      ? '!h-auto !min-h-0 !w-auto !min-w-0 rounded-lg object-contain'
                      : 'object-cover'
                  ),
                  src: t,
                  width: c,
                  height: u,
                  alt: r,
                  onLoadingComplete: j,
                  layout: 'responsive'
                },
                p
              )
            ),
            d
          ]
        });
      }
    },
    6269: function (e, t, r) {
      'use strict';
      function n(e, t) {
        return function (r) {
          r.stopPropagation(), t || r.preventDefault(), e && e();
        };
      }
      function s(e) {
        return function () {
          return setTimeout(function () {
            return window.scrollTo(0, 0);
          }, e);
        };
      }
      function i(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }
      function a(e) {
        return {
          initial: { opacity: 0, y: -e },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: e },
          transition: { type: 'tween', duration: 0.15 }
        };
      }
      function c(e) {
        return e > 1 ? 's' : '';
      }
      r.d(t, {
        DX: function () {
          return a;
        },
        Db: function () {
          return n;
        },
        _v: function () {
          return i;
        },
        uz: function () {
          return c;
        },
        wX: function () {
          return s;
        }
      });
    },
    5933: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return v;
          }
        });
      var n = r(5893),
        s = r(7568),
        i = r(655),
        a = r(7294),
        c = r(1163),
        l = r(2108),
        o = r(6269),
        u = r(643);
      function d(e) {
        var t = e.children,
          r = (0, a.useState)(!0),
          d = r[0],
          h = r[1],
          x = (0, l.aC)(),
          m = x.user,
          g = x.loading,
          f = (0, c.useRouter)().replace;
        return ((0, a.useEffect)(
          function () {
            var e;
            ((e = (0, s.Z)(function () {
              return (0, i.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if ((h(!0), !m)) return [3, 2];
                    return [4, (0, o._v)(500)];
                  case 1:
                    return e.sent(), f('/home'), [3, 4];
                  case 2:
                    if (g) return [3, 4];
                    return [4, (0, o._v)(500)];
                  case 3:
                    e.sent(), h(!1), (e.label = 4);
                  case 4:
                    return [2];
                }
              });
            })),
            function () {
              return e.apply(this, arguments);
            })();
          },
          [m, g]
        ),
        g || d)
          ? (0, n.jsx)(u.V, {})
          : (0, n.jsx)(n.Fragment, { children: t });
      }
      var h = r(585),
        x = r(4664),
        m = r(2365),
        g = r(4685);
      function f() {
        var e = (0, l.aC)().signInWithGoogle;
        return (0, n.jsxs)('main', {
          className: 'grid lg:grid-cols-[1fr,45vw]',
          children: [
            (0, n.jsxs)('div', {
              className: 'relative hidden items-center justify-center lg:flex',
              children: [
                (0, n.jsx)(x.o, {
                  imgClassName: 'object-cover',
                  blurClassName: 'bg-accent-blue',
                  src: '/assets/twitter-banner.png',
                  alt: 'Twitter banner',
                  layout: 'fill',
                  useSkeleton: !0
                }),
                (0, n.jsx)('i', {
                  className: 'absolute',
                  children: (0, n.jsx)(m.d, {
                    className: 'h-96 w-96 text-white',
                    iconName: 'TwitterIcon'
                  })
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className:
                'flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center',
              children: [
                (0, n.jsx)('i', {
                  className: 'mb-0 self-center lg:mb-10 lg:self-auto',
                  children: (0, n.jsx)(m.d, {
                    className:
                      '-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon',
                    iconName: 'TwitterIcon'
                  })
                }),
                (0, n.jsxs)('div', {
                  className:
                    'flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16',
                  children: [
                    (0, n.jsx)('h1', {
                      className:
                        'text-3xl before:content-["See_what’s_happening_in_the_world_right_now."] lg:text-6xl lg:before:content-["Happening_now"]'
                    }),
                    (0, n.jsx)('h2', {
                      className: 'hidden text-xl lg:block lg:text-3xl',
                      children: 'Join Twitter today.'
                    })
                  ]
                }),
                (0, n.jsxs)('div', {
                  className: 'flex max-w-xs flex-col gap-6 [&_button]:py-2',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'grid gap-3 font-bold',
                      children: [
                        (0, n.jsxs)(g.z, {
                          className:
                            'flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75',
                          onClick: e,
                          children: [
                            (0, n.jsx)(m.d, { iconName: 'GoogleIcon' }),
                            ' Sign up with Google'
                          ]
                        }),
                        (0, n.jsxs)(g.z, {
                          className:
                            'flex cursor-not-allowed justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75',
                          children: [
                            (0, n.jsx)(m.d, { iconName: 'AppleIcon' }),
                            ' Sign up with Apple'
                          ]
                        }),
                        (0, n.jsxs)('div', {
                          className:
                            'grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2',
                          children: [
                            (0, n.jsx)('i', {
                              className:
                                'border-b border-light-border dark:border-dark-border'
                            }),
                            (0, n.jsx)('p', { children: 'or' }),
                            (0, n.jsx)('i', {
                              className:
                                'border-b border-light-border dark:border-dark-border'
                            })
                          ]
                        }),
                        (0, n.jsx)(g.z, {
                          className:
                            'cursor-not-allowed bg-accent-blue text-white transition hover:brightness-90 focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75',
                          children: 'Sign up with phone or email'
                        }),
                        (0, n.jsxs)('p', {
                          className:
                            'inner:custom-underline inner:custom-underline text-center text-xs text-light-secondary inner:text-accent-blue dark:text-dark-secondary',
                          children: [
                            'By signing up, you agree to the',
                            ' ',
                            (0, n.jsx)('a', {
                              href: 'https://twitter.com/tos',
                              target: '_blank',
                              rel: 'noreferrer',
                              children: 'Terms of Service'
                            }),
                            ' ',
                            'and',
                            ' ',
                            (0, n.jsx)('a', {
                              href: 'https://twitter.com/privacy',
                              target: '_blank',
                              rel: 'noreferrer',
                              children: 'Privacy Policy'
                            }),
                            ', including',
                            ' ',
                            (0, n.jsx)('a', {
                              href: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                              target: '_blank',
                              rel: 'noreferrer',
                              children: 'Cookie Use'
                            }),
                            '.'
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex-col gap-3',
                      children: [
                        (0, n.jsx)('p', {
                          className: 'font-bold',
                          children: 'Already have an account? '
                        }),
                        (0, n.jsx)(g.z, {
                          className:
                            'border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20 dark:border-light-secondary',
                          onClick: e,
                          children: 'Sign in'
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
      var p = r(828),
        w = [
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
      function b() {
        return (0, n.jsx)('footer', {
          className:
            'hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex',
          children: (0, n.jsxs)('nav', {
            className: 'flex flex-wrap justify-center gap-4 gap-y-2',
            children: [
              w.map(function (e) {
                var t = (0, p.Z)(e, 2),
                  r = t[0],
                  s = t[1];
                return (0,
                n.jsx)('a', { className: 'custom-underline', target: '_blank', rel: 'noreferrer', href: s, children: r }, r);
              }),
              (0, n.jsx)('p', { children: '\xa9 2022 Twitter, Inc.' })
            ]
          })
        });
      }
      function v() {
        return (0, n.jsxs)('div', {
          className: 'grid min-h-screen grid-rows-[1fr,auto]',
          children: [
            (0, n.jsx)(h.H, {
              title: 'Twitter - It’s what’s happening',
              description:
                'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
            }),
            (0, n.jsx)(f, {}),
            (0, n.jsx)(b, {})
          ]
        });
      }
      v.getLayout = function (e) {
        return (0, n.jsx)(d, { children: e });
      };
    }
  },
  function (e) {
    e.O(0, [986, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  }
]);
