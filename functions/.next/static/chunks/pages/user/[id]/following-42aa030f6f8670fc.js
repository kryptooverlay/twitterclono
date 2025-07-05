(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [535],
  {
    8274: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/user/[id]/following',
        function () {
          return n(9791);
        }
      ]);
    },
    6993: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return f;
        }
      });
      var a = n(5893),
        i = n(1163),
        o = n(5321),
        r = n(5127),
        l = n(3872),
        s = n(1940),
        c = n(585),
        d = n(722),
        u = n(4856),
        h = n(8162);
      function f(e) {
        var t = e.children,
          n = (0, i.useRouter)(),
          f = n.query.id,
          x = n.back,
          m = (0, l.K)(
            (0, o.IO)(s.W$, (0, o.ar)('username', '==', f), (0, o.b9)(1)),
            { allowNull: !0 }
          ),
          w = m.data,
          p = m.loading,
          g = w ? w[0] : null;
        return (0, a.jsxs)(r.fS, {
          value: { user: g, loading: p },
          children: [
            !g && !p && (0, a.jsx)(c.H, { title: 'User not found / Twitter' }),
            (0, a.jsxs)(d.t, {
              children: [
                (0, a.jsx)(u.c, {
                  useActionButton: !0,
                  action: x,
                  children: (0, a.jsx)(h.w, {})
                }),
                t
              ]
            })
          ]
        });
      }
    },
    8893: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return u;
        }
      });
      var a = n(6042),
        i = n(9396),
        o = n(5893),
        r = n(3136),
        l = n(5127),
        s = n(9570),
        c = n(9186),
        d = n(8162);
      function u(e) {
        var t = e.children,
          n = (0, l.aF)(),
          u = n.user,
          h = n.loading;
        return (0, o.jsx)(o.Fragment, {
          children: u
            ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(c.T, { follow: !0 }), t]
              })
            : (0, o.jsx)(
                r.E.section,
                (0, i.Z)((0, a.Z)({}, d.o), {
                  children: h
                    ? (0, o.jsx)(s.g, { className: 'mt-5 w-full' })
                    : (0, o.jsxs)('div', {
                        className: 'w-full p-8 text-center',
                        children: [
                          (0, o.jsx)('p', {
                            className: 'text-3xl font-bold',
                            children: 'This account doesn’t exist'
                          }),
                          (0, o.jsx)('p', {
                            className:
                              'text-light-secondary dark:text-dark-secondary',
                            children: 'Try searching for another.'
                          })
                        ]
                      })
                })
              )
        });
      }
    },
    6781: function (e, t, n) {
      'use strict';
      n.d(t, {
        Q: function () {
          return r;
        }
      });
      var a = n(5893),
        i = n(6010),
        o = n(4664);
      function r(e) {
        var t = e.title,
          n = e.modal,
          r = e.imageData,
          l = e.description;
        return (0, a.jsx)('div', {
          className: (0, i.Z)('flex justify-center p-8', n && 'mt-[52px]'),
          children: (0, a.jsx)('div', {
            className: 'w-full max-w-sm',
            children: (0, a.jsxs)('div', {
              className: 'flex flex-col items-center gap-6',
              children: [
                r &&
                  (0, a.jsx)(o.o, {
                    width: 336,
                    height: 168,
                    src: r.src,
                    alt: r.alt
                  }),
                (0, a.jsxs)('div', {
                  className: 'flex flex-col gap-2 text-center',
                  children: [
                    (0, a.jsx)('p', {
                      className: 'text-3xl font-extrabold',
                      children: t
                    }),
                    (0, a.jsx)('p', {
                      className:
                        'text-light-secondary dark:text-dark-secondary',
                      children: l
                    })
                  ]
                })
              ]
            })
          })
        });
      }
    },
    3779: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return x;
        }
      });
      var a = n(6042),
        i = n(9396),
        o = n(5893),
        r = n(6010),
        l = n(5820),
        s = n(3136),
        c = n(6781),
        d = n(9570),
        u = n(8162),
        h = n(7238),
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
      function x(e) {
        var t = e.data,
          n = e.type,
          x = e.follow,
          m = e.loading,
          w = f[n],
          p = ['retweets', 'likes'].includes(n);
        return (0, o.jsx)('section', {
          className: (0, r.Z)(
            p && 'h-full overflow-y-auto [&>div:first-child>a]:mt-[52px]',
            m && 'flex items-center justify-center'
          ),
          children: m
            ? (0, o.jsx)(d.g, { className: p ? 'mt-[52px]' : 'mt-5' })
            : (0, o.jsx)(l.M, {
                mode: 'popLayout',
                children: (null == t ? void 0 : t.length)
                  ? t.map(function (e) {
                      return (0,
                      o.jsx)(s.E.div, (0, i.Z)((0, a.Z)({ layout: 'position' }, u.o), { children: (0, o.jsx)(h.O, (0, i.Z)((0, a.Z)({}, e), { follow: x, modal: p })) }), e.id);
                    })
                  : (0, o.jsx)(c.Q, (0, i.Z)((0, a.Z)({}, w), { modal: p }))
              })
        });
      }
    },
    6809: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return d;
        }
      });
      var a = n(5893),
        i = n(5321),
        o = n(5127),
        r = n(3872),
        l = n(1940),
        s = n(585),
        c = n(3779);
      function d(e) {
        var t = e.type,
          n = (0, o.aF)().user,
          d = n.name,
          u = n.username,
          h = (0, r.K)(
            (0, i.IO)(
              l.W$,
              (0, i.ar)(
                'following' === t ? 'followers' : 'following',
                'array-contains',
                null == n ? void 0 : n.id
              )
            ),
            { allowNull: !0 }
          ),
          f = h.data,
          x = h.loading;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.H, {
              title: 'People '
                .concat('following' === t ? 'followed by' : 'following', ' ')
                .concat(d, ' (@')
                .concat(u, ') / Twitter')
            }),
            (0, a.jsx)(c.G, { follow: !0, data: f, type: t, loading: x })
          ]
        });
      }
    },
    8162: function (e, t, n) {
      'use strict';
      n.d(t, {
        o: function () {
          return w;
        },
        w: function () {
          return p;
        }
      });
      var a = n(6042),
        i = n(9396),
        o = n(5893),
        r = n(7294),
        l = n(1163),
        s = n(5321),
        c = n(5820),
        d = n(3136),
        u = n(5662),
        h = n(5127),
        f = n(6269),
        x = n(1940),
        m = n(4531),
        w = {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.4 } },
          exit: { opacity: 0, transition: { duration: 0.2 } }
        };
      function p() {
        var e,
          t,
          n,
          p = (0, l.useRouter)(),
          g = p.pathname,
          v = p.query.id,
          y = (0, h.aF)(),
          j = y.user,
          k = y.loading,
          N = j ? j.id : null,
          b = (0, u.k)((0, s.JU)((0, x.bR)(null != N ? N : 'null'), 'stats'), {
            allowNull: !0,
            disabled: !N
          }),
          Z = b.data,
          T = b.loading,
          E = null != Z ? Z : {},
          _ = E.tweets,
          F = E.likes,
          P = [
            (null !== (e = null == j ? void 0 : j.totalTweets) && void 0 !== e
              ? e
              : 0) +
              (null !== (t = null == _ ? void 0 : _.length) && void 0 !== t
                ? t
                : 0),
            null == j ? void 0 : j.totalPhotos,
            null == F ? void 0 : F.length
          ],
          L = P[0],
          I = P[1],
          C = P[2],
          O = null !== (n = g.split('/').pop()) && void 0 !== n ? n : '',
          R = ['[id]', 'with_replies'].includes(O),
          U = ['following', 'followers'].includes(O);
        return (0, o.jsx)(c.M, {
          mode: 'popLayout',
          children:
            k || T
              ? (0, r.createElement)(
                  d.E.div,
                  (0, i.Z)(
                    (0, a.Z)(
                      {
                        className:
                          '-mb-1 inner:animate-pulse inner:rounded-lg inner:bg-light-secondary dark:inner:bg-dark-secondary'
                      },
                      w
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
              : j
              ? (0, r.createElement)(
                  d.E.div,
                  (0, i.Z)((0, a.Z)({ className: '-mb-1 truncate' }, w), {
                    key: 'found',
                    children: [
                      (0, o.jsx)(m.v, {
                        tag: 'h2',
                        name: j.name,
                        className: '-mt-1 text-xl',
                        iconClassName: 'w-6 h-6',
                        verified: j.verified
                      }),
                      (0, o.jsx)('p', {
                        className:
                          'text-xs text-light-secondary dark:text-dark-secondary',
                        children: U
                          ? '@'.concat(j.username)
                          : R
                          ? L
                            ? ''
                                .concat(L, ' ')
                                .concat('Tweet'.concat((0, f.uz)(L)))
                            : 'No Tweet'
                          : 'media' === O
                          ? I
                            ? ''
                                .concat(I, ' Photo')
                                .concat((0, f.uz)(I), ' & GIF')
                                .concat((0, f.uz)(I))
                            : 'No Photo & GIF'
                          : C
                          ? ''.concat(C, ' Like').concat((0, f.uz)(C))
                          : 'No Like'
                      })
                    ]
                  })
                )
              : (0, r.createElement)(
                  d.E.h2,
                  (0, i.Z)((0, a.Z)({ className: 'text-xl font-bold' }, w), {
                    key: 'not-found'
                  }),
                  U ? '@'.concat(v) : 'User'
                )
        });
      }
    },
    9186: function (e, t, n) {
      'use strict';
      n.d(t, {
        T: function () {
          return x;
        }
      });
      var a = n(6042),
        i = n(9396),
        o = n(5893),
        r = n(3136),
        l = n(6010),
        s = n(8162),
        c = n(1163),
        d = n(1664),
        u = n.n(d);
      function h(e) {
        var t = e.name,
          n = e.path,
          a = (0, c.useRouter)(),
          i = a.asPath,
          r = a.query.id,
          s = '/user/'.concat(r).concat(n ? '/'.concat(n) : '');
        return (0, o.jsx)(u(), {
          href: s,
          scroll: !1,
          children: (0, o.jsx)('a', {
            className:
              'hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10',
            children: (0, o.jsx)('div', {
              className: 'px-6 md:px-8',
              children: (0, o.jsxs)('p', {
                className: (0, l.Z)(
                  'flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200',
                  i === s
                    ? 'text-light-primary dark:text-dark-primary [&>i]:scale-100 [&>i]:opacity-100'
                    : 'text-light-secondary dark:text-dark-secondary'
                ),
                children: [
                  t,
                  (0, o.jsx)('i', {
                    className:
                      'h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200'
                  })
                ]
              })
            })
          })
        });
      }
      var f = [
        [
          { name: 'Tweets', path: '' },
          { name: 'Tweets & replies', path: 'with_replies' },
          { name: 'Media', path: 'media' },
          { name: 'Likes', path: 'likes' }
        ],
        [
          { name: 'Following', path: 'following' },
          { name: 'Followers', path: 'followers' }
        ]
      ];
      function x(e) {
        var t = e.follow,
          n = f[+!!t];
        return (0, o.jsx)(
          r.E.nav,
          (0, i.Z)(
            (0, a.Z)(
              {
                className: (0, l.Z)(
                  'hover-animation flex justify-between overflow-y-auto\n         border-b border-light-border dark:border-dark-border',
                  t && 'mt-1 mb-0.5'
                )
              },
              s.o
            ),
            {
              exit: void 0,
              children: n.map(function (e) {
                var t = e.name,
                  n = e.path;
                return (0, o.jsx)(h, { name: t, path: n }, t);
              })
            }
          )
        );
      }
    },
    5127: function (e, t, n) {
      'use strict';
      n.d(t, {
        aF: function () {
          return l;
        },
        fS: function () {
          return r;
        }
      });
      var a = n(5893),
        i = n(7294),
        o = (0, i.createContext)(null);
      function r(e) {
        var t = e.value,
          n = e.children;
        return (0, a.jsx)(o.Provider, { value: t, children: n });
      }
      function l() {
        var e = (0, i.useContext)(o);
        if (!e)
          throw Error('useUser must be used within an UserContextProvider');
        return e;
      }
    },
    9791: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          }
        });
      var a = n(5893),
        i = n(9806),
        o = n(7913),
        r = n(6993),
        l = n(8893),
        s = n(6809);
      function c() {
        return (0, a.jsx)(s.J, { type: 'following' });
      }
      c.getLayout = function (e) {
        return (0, a.jsx)(i.IP, {
          children: (0, a.jsx)(o.Z, {
            children: (0, a.jsx)(i.rf, {
              children: (0, a.jsx)(r.I, {
                children: (0, a.jsx)(l.$, { children: e })
              })
            })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 774, 888, 179], function () {
      return e((e.s = 8274));
    }),
      (_N_E = e.O());
  }
]);
