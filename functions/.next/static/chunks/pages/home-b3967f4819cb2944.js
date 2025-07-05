(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [229],
  {
    4309: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/home',
        function () {
          return n(2086);
        }
      ]);
    },
    2050: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return l;
        }
      });
      var a = n(5893),
        r = n(6010);
      function l(e) {
        var t,
          n = e.label,
          l = e.inputId,
          i = e.inputValue,
          s = e.inputLimit,
          c = e.useTextArea,
          o = e.errorMessage,
          u = e.handleChange,
          d = e.handleKeyboardShortcut,
          h =
            null !== (t = null == i ? void 0 : i.slice(0, s)) && void 0 !== t
              ? t
              : '',
          p = h.length,
          g = s && p > s;
        return (0, a.jsxs)('div', {
          className: 'flex flex-col gap-1',
          children: [
            (0, a.jsxs)('div', {
              className: (0, r.Z)(
                'relative rounded ring-1 transition-shadow duration-200',
                o
                  ? 'ring-accent-red'
                  : 'ring-light-line-reply focus-within:ring-2 \n                 focus-within:!ring-main-accent dark:ring-dark-border'
              ),
              children: [
                c
                  ? (0, a.jsx)('textarea', {
                      className:
                        'peer mt-6 w-full resize-none bg-inherit px-3 pb-1 placeholder-transparent outline-none transition',
                      id: l,
                      placeholder: l,
                      onChange: g ? void 0 : u,
                      onKeyUp: d,
                      value: h,
                      rows: 3
                    })
                  : (0, a.jsx)('input', {
                      className:
                        'peer mt-6 w-full bg-inherit px-3 pb-1 placeholder-transparent outline-none transition',
                      id: l,
                      type: 'text',
                      placeholder: l,
                      onChange: g ? void 0 : u,
                      value: h,
                      onKeyUp: d
                    }),
                (0, a.jsx)('label', {
                  className: (0, r.Z)(
                    'group-peer absolute left-3 translate-y-1 bg-main-background text-sm\n             text-light-secondary transition-all peer-placeholder-shown:translate-y-3\n             peer-placeholder-shown:text-lg peer-focus:translate-y-1 peer-focus:text-sm\n             dark:text-dark-secondary',
                    o
                      ? '!text-accent-red peer-focus:text-accent-red'
                      : 'peer-focus:text-main-accent'
                  ),
                  htmlFor: l,
                  children: n
                }),
                s &&
                  (0, a.jsxs)('span', {
                    className: (0, r.Z)(
                      'absolute right-3 top-0 translate-y-1 text-sm text-light-secondary transition-opacity \n               duration-200 peer-focus:visible peer-focus:opacity-100 dark:text-dark-secondary',
                      o ? 'visible opacity-100' : 'invisible opacity-0'
                    ),
                    children: [p, ' / ', s]
                  })
              ]
            }),
            o &&
              (0, a.jsx)('p', {
                className: 'text-sm text-accent-red',
                children: o
              })
          ]
        });
      }
    },
    4089: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return p;
        }
      });
      var a = n(7568),
        r = n(9815),
        l = n(655),
        i = n(5893),
        s = n(7294),
        c = n(3136),
        o = n(5321),
        u = n(7359),
        d = n(9570),
        h = n(3872);
      function p(e, t, n, p) {
        var g,
          x = null != p ? p : {},
          f = x.initialSize,
          m = x.stepSize,
          b = x.marginBottom,
          v = (0, s.useState)(null != f ? f : 20),
          y = v[0],
          j = v[1],
          k = (0, s.useState)(null),
          w = k[0],
          N = k[1],
          S = (0, s.useState)(!1),
          _ = S[0],
          E = S[1],
          C = (0, s.useState)(!1),
          U = C[0],
          Z = C[1],
          M = (0, h.K)(
            o.IO.apply(
              void 0,
              [e].concat(
                (0, r.Z)(
                  (0, r.Z)(null != t ? t : []).concat(
                    (0, r.Z)(_ ? [] : [(0, o.b9)(y)])
                  )
                )
              )
            ),
            n
          ),
          L = M.data,
          I = M.loading;
        (0, s.useEffect)(
          function () {
            E(!!w && y >= w);
          },
          [w, y]
        ),
          (0, s.useEffect)(
            function () {
              if (!_) {
                var n;
                ((n = (0, a.Z)(function () {
                  var n;
                  return (0, l.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          (0, u.BB)(
                            o.IO.apply(
                              void 0,
                              [e].concat((0, r.Z)(null != t ? t : []))
                            )
                          )
                        ];
                      case 1:
                        return N(n.sent()), [2];
                    }
                  });
                })),
                function () {
                  return n.apply(this, arguments);
                })();
              }
            },
            [null == L ? void 0 : L.length]
          ),
          (0, s.useEffect)(
            function () {
              !_ && U && j(y + (null != m ? m : 20));
            },
            [U]
          );
        var T = function () {
            return Z(!0);
          },
          V = function () {
            return Z(!1);
          },
          z =
            _ &&
            (null !== (g = null == L ? void 0 : L.length) && void 0 !== g
              ? g
              : 0) >= (null != w ? w : 0);
        return {
          data: L,
          loading: I,
          LoadMore: (0, s.useCallback)(
            function () {
              return (0, i.jsx)(c.E.div, {
                className: z ? 'hidden' : 'block',
                viewport: {
                  margin: '0px 0px '.concat(null != b ? b : 1e3, 'px')
                },
                onViewportEnter: T,
                onViewportLeave: V,
                children: (0, i.jsx)(d.g, { className: 'mt-5' })
              });
            },
            [z]
          )
        };
      }
    },
    2086: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          }
        });
      var a = n(6042),
        r = n(9396),
        l = n(5893),
        i = n(7294),
        s = n(5820),
        c = n(5321),
        o = n(6625),
        u = n(4089),
        d = n(1940),
        h = n(9806),
        p = n(7913),
        g = n(585),
        x = n(722),
        f = n(9557),
        m = n(7568),
        b = n(655),
        v = n(6501),
        y = n(7359),
        j = n(2108),
        k = n(3040),
        w = n(3521),
        N = n(6269),
        S = n(4685),
        _ = n(4266),
        E = n(3276),
        C = n(9099),
        U = n(3835),
        Z = n(2365),
        M = [
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
      function L(e) {
        var t = e.loading,
          n = e.children,
          a = e.available,
          r = e.alreadySet,
          i = e.changeUsername,
          s = e.cancelUpdateUsername,
          c = M[+r],
          o = c.title,
          u = c.description,
          d = c.cancelLabel;
        return (0, l.jsxs)('form', {
          className: 'flex h-full flex-col justify-between',
          onSubmit: i,
          children: [
            (0, l.jsxs)('div', {
              className: 'flex flex-col gap-6',
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, l.jsx)('i', {
                      className: 'mx-auto',
                      children: (0, l.jsx)(Z.d, {
                        className: 'h-10 w-10',
                        iconName: 'TwitterIcon'
                      })
                    }),
                    (0, l.jsxs)('div', {
                      className: 'flex flex-col gap-2',
                      children: [
                        (0, l.jsx)(U.V.Title, {
                          className:
                            'text-2xl font-bold xs:text-3xl sm:text-4xl',
                          children: o
                        }),
                        (0, l.jsx)(U.V.Description, {
                          className:
                            'text-light-secondary dark:text-dark-secondary',
                          children: u
                        })
                      ]
                    })
                  ]
                }),
                n
              ]
            }),
            (0, l.jsxs)('div', {
              className: 'flex flex-col gap-3 inner:py-2 inner:font-bold',
              children: [
                (0, l.jsx)(S.z, {
                  className:
                    'bg-light-primary text-white transition focus-visible:bg-light-primary/90 enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80 dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90 dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75',
                  type: 'submit',
                  loading: t,
                  disabled: !a,
                  children: 'Set username'
                }),
                (0, l.jsx)(S.z, {
                  className:
                    'border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 dark:active:bg-light-border/20',
                  onClick: s,
                  children: d
                })
              ]
            })
          ]
        });
      }
      var I = n(2050);
      function T() {
        var e,
          t = (0, i.useState)(!1),
          n = t[0],
          a = t[1],
          r = (0, i.useState)(!1),
          s = r[0],
          c = r[1],
          o = (0, i.useState)(!1),
          u = o[0],
          d = o[1],
          h = (0, i.useState)(!1),
          p = h[0],
          g = h[1],
          x = (0, i.useState)(!1),
          f = x[0],
          U = x[1],
          Z = (0, i.useState)(''),
          M = Z[0],
          T = Z[1],
          V = (0, i.useState)(''),
          z = V[0],
          O = V[1],
          Y = (0, j.aC)().user,
          A = (0, k.d)(),
          K = A.open,
          P = A.openModal,
          B = A.closeModal;
        (0, i.useEffect)(
          function () {
            var e,
              t =
                ((e = (0, m.Z)(function (e) {
                  var t;
                  return (0, b.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return U(!0), [4, (0, y.EJ)(e)];
                      case 1:
                        return (
                          t.sent()
                            ? c(!0)
                            : (c(!1),
                              O(
                                'This username has been taken. Please choose another.'
                              )),
                          U(!1),
                          [2]
                        );
                    }
                  });
                })),
                function (t) {
                  return e.apply(this, arguments);
                });
            if ((!p && M.length > 0 && g(!0), p)) {
              z && O('');
              var n = (0, w.rh)(null == Y ? void 0 : Y.username, M);
              n ? (c(!1), O(n)) : t(M);
            }
          },
          [M]
        ),
          (0, i.useEffect)(function () {
            (null == Y ? void 0 : Y.updatedAt) ? a(!0) : P();
          }, []);
        var F =
            ((e = (0, m.Z)(function (e) {
              return (0, b.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((e.preventDefault(), !s || f)) return [2];
                    return d(!0), [4, (0, N._v)(500)];
                  case 1:
                    return (
                      t.sent(), [4, (0, y._S)(null == Y ? void 0 : Y.id, M)]
                    );
                  case 2:
                    return (
                      t.sent(),
                      B(),
                      d(!1),
                      T(''),
                      g(!1),
                      c(!1),
                      v.Am.success('Username updated successfully'),
                      [2]
                    );
                }
              });
            })),
            function (t) {
              return e.apply(this, arguments);
            }),
          H = function () {
            B(), n || (0, y._S)(null == Y ? void 0 : Y.id);
          },
          X = function (e) {
            return T(e.target.value);
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(C.u_, {
              modalClassName:
                'flex flex-col gap-6 max-w-xl bg-main-background w-full p-8 rounded-2xl h-[576px]',
              open: K,
              closeModal: H,
              children: (0, l.jsx)(L, {
                loading: u,
                available: s,
                alreadySet: n,
                changeUsername: F,
                cancelUpdateUsername: H,
                children: (0, l.jsx)(I.U, {
                  label: 'Username',
                  inputId: 'username',
                  inputValue: M,
                  errorMessage: z,
                  handleChange: X
                })
              })
            }),
            (0, l.jsxs)(S.z, {
              className:
                'dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
              onClick: P,
              children: [
                (0, l.jsx)(_.e, {
                  className: 'h-5 w-5',
                  iconName: 'SparklesIcon'
                }),
                (0, l.jsx)(E.e, { tip: 'Top tweets' })
              ]
            })
          ]
        });
      }
      var V = n(4856),
        z = n(5053),
        O = n(9570),
        Y = n(6028);
      function A() {
        var e = (0, o.zY)().isMobile,
          t = (0, u.M)(
            d.VV,
            [(0, c.ar)('parent', '==', null), (0, c.Xo)('createdAt', 'desc')],
            { includeUser: !0, allowNull: !0, preserve: !0 }
          ),
          n = t.data,
          h = t.loading,
          p = t.LoadMore;
        return (0, l.jsxs)(x.t, {
          children: [
            (0, l.jsx)(g.H, { title: 'Home / Twitter' }),
            (0, l.jsx)(V.c, {
              useMobileSidebar: !0,
              title: 'Home',
              className: 'flex items-center justify-between',
              children: (0, l.jsx)(T, {})
            }),
            !e && (0, l.jsx)(f.I, {}),
            (0, l.jsx)('section', {
              className: 'mt-0.5 xs:mt-0',
              children: h
                ? (0, l.jsx)(O.g, { className: 'mt-5' })
                : n
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(s.M, {
                        mode: 'popLayout',
                        children: n.map(function (e) {
                          return (0,
                          i.createElement)(z.t, (0, r.Z)((0, a.Z)({}, e), { key: e.id }));
                        })
                      }),
                      (0, l.jsx)(p, {})
                    ]
                  })
                : (0, l.jsx)(Y.j, { message: 'Something went wrong' })
            })
          ]
        });
      }
      A.getLayout = function (e) {
        return (0, l.jsx)(h.IP, {
          children: (0, l.jsx)(p.Z, {
            children: (0, l.jsx)(h.Os, { children: e })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 465, 774, 888, 179], function () {
      return e((e.s = 4309));
    }),
      (_N_E = e.O());
  }
]);
