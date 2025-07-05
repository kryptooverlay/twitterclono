(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [664],
  {
    2003: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/bookmarks',
        function () {
          return t(8627);
        }
      ]);
    },
    8627: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return O;
          }
        });
      var n = t(7568),
        s = t(6042),
        r = t(9396),
        l = t(655),
        o = t(5893),
        c = t(7294),
        i = t(5820),
        d = t(6501),
        u = t(5321),
        m = t(2108),
        k = t(3040),
        x = t(3872),
        h = t(5651),
        f = t(7359),
        b = t(1940),
        p = t(9806),
        g = t(7913),
        v = t(585),
        j = t(4856),
        y = t(722),
        N = t(9099),
        w = t(9253),
        _ = t(5053),
        C = t(6781),
        B = t(4685),
        M = t(3276),
        T = t(4266),
        E = t(9570);
      function O() {
        var e,
          a,
          t = (0, m.aC)().user,
          p = (0, k.d)(),
          g = p.open,
          O = p.openModal,
          X = p.closeModal,
          Z = null == t ? void 0 : t.id,
          A = (0, x.K)(
            (0, u.IO)((0, b.we)(Z), (0, u.Xo)('createdAt', 'desc')),
            { allowNull: !0 }
          ),
          I = A.data,
          L = A.loading,
          P = (0, c.useMemo)(
            function () {
              return null !==
                (e =
                  null == I
                    ? void 0
                    : I.map(function (e) {
                        return e.id;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [I]
          ),
          z = (0, h.z)(P, b.VV, { includeUser: !0 }),
          D = z.data,
          S = z.loading,
          V =
            ((a = (0, n.Z)(function () {
              return (0, l.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, (0, f.as)(Z)];
                  case 1:
                    return (
                      e.sent(),
                      X(),
                      d.Am.success('Successfully cleared all bookmarks'),
                      [2]
                    );
                }
              });
            })),
            function () {
              return a.apply(this, arguments);
            });
        return (0, o.jsxs)(y.t, {
          children: [
            (0, o.jsx)(v.H, { title: 'Bookmarks / Twitter' }),
            (0, o.jsx)(N.u_, {
              modalClassName:
                'max-w-xs bg-main-background w-full p-8 rounded-2xl',
              open: g,
              closeModal: X,
              children: (0, o.jsx)(w.W, {
                title: 'Clear all Bookmarks?',
                description:
                  'This can’t be undone and you’ll remove all Tweets you’ve added to your Bookmarks.',
                mainBtnClassName:
                  'bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab focus-visible:bg-accent-red/90',
                mainBtnLabel: 'Clear',
                action: V,
                closeModal: X
              })
            }),
            (0, o.jsxs)(j.c, {
              className: 'flex items-center justify-between',
              children: [
                (0, o.jsxs)('div', {
                  className: '-mb-1 flex flex-col',
                  children: [
                    (0, o.jsx)('h2', {
                      className: '-mt-1 text-xl font-bold',
                      children: 'Bookmarks'
                    }),
                    (0, o.jsxs)('p', {
                      className:
                        'text-xs text-light-secondary dark:text-dark-secondary',
                      children: ['@', null == t ? void 0 : t.username]
                    })
                  ]
                }),
                (0, o.jsxs)(B.z, {
                  className:
                    'dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                  onClick: O,
                  children: [
                    (0, o.jsx)(T.e, {
                      className: 'h-5 w-5',
                      iconName: 'ArchiveBoxXMarkIcon'
                    }),
                    (0, o.jsx)(M.e, {
                      className:
                        '!-translate-x-20 translate-y-3 md:-translate-x-1/2',
                      tip: 'Clear bookmarks'
                    })
                  ]
                })
              ]
            }),
            (0, o.jsx)('section', {
              className: 'mt-0.5',
              children:
                L || S
                  ? (0, o.jsx)(E.g, { className: 'mt-5' })
                  : I
                  ? (0, o.jsx)(i.M, {
                      mode: 'popLayout',
                      children:
                        null == D
                          ? void 0
                          : D.map(function (e) {
                              return (0,
                              c.createElement)(_.t, (0, r.Z)((0, s.Z)({}, e), { key: e.id }));
                            })
                    })
                  : (0, o.jsx)(C.Q, {
                      title: 'Save Tweets for later',
                      description:
                        'Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.',
                      imageData: {
                        src: '/assets/no-bookmarks.png',
                        alt: 'No bookmarks'
                      }
                    })
            })
          ]
        });
      }
      O.getLayout = function (e) {
        return (0, o.jsx)(p.IP, {
          children: (0, o.jsx)(g.Z, {
            children: (0, o.jsx)(p.Os, { children: e })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 465, 774, 888, 179], function () {
      return e((e.s = 2003));
    }),
      (_N_E = e.O());
  }
]);
