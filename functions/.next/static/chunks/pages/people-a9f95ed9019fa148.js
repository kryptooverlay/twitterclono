(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [563],
  {
    1480: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/people',
        function () {
          return e(682);
        }
      ]);
    },
    4089: function (n, t, e) {
      'use strict';
      e.d(t, {
        M: function () {
          return p;
        }
      });
      var i = e(7568),
        u = e(9815),
        r = e(655),
        l = e(5893),
        o = e(7294),
        a = e(3136),
        c = e(5321),
        s = e(7359),
        d = e(9570),
        f = e(3872);
      function p(n, t, e, p) {
        var v,
          h = null != p ? p : {},
          m = h.initialSize,
          x = h.stepSize,
          g = h.marginBottom,
          j = (0, o.useState)(null != m ? m : 20),
          w = j[0],
          _ = j[1],
          E = (0, o.useState)(null),
          N = E[0],
          Z = E[1],
          k = (0, o.useState)(!1),
          b = k[0],
          S = k[1],
          y = (0, o.useState)(!1),
          B = y[0],
          O = y[1],
          P = (0, f.K)(
            c.IO.apply(
              void 0,
              [n].concat(
                (0, u.Z)(
                  (0, u.Z)(null != t ? t : []).concat(
                    (0, u.Z)(b ? [] : [(0, c.b9)(w)])
                  )
                )
              )
            ),
            e
          ),
          C = P.data,
          L = P.loading;
        (0, o.useEffect)(
          function () {
            S(!!N && w >= N);
          },
          [N, w]
        ),
          (0, o.useEffect)(
            function () {
              if (!b) {
                var e;
                ((e = (0, i.Z)(function () {
                  var e;
                  return (0, r.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          (0, s.BB)(
                            c.IO.apply(
                              void 0,
                              [n].concat((0, u.Z)(null != t ? t : []))
                            )
                          )
                        ];
                      case 1:
                        return Z(e.sent()), [2];
                    }
                  });
                })),
                function () {
                  return e.apply(this, arguments);
                })();
              }
            },
            [null == C ? void 0 : C.length]
          ),
          (0, o.useEffect)(
            function () {
              !b && B && _(w + (null != x ? x : 20));
            },
            [B]
          );
        var M = function () {
            return O(!0);
          },
          I = function () {
            return O(!1);
          },
          T =
            b &&
            (null !== (v = null == C ? void 0 : C.length) && void 0 !== v
              ? v
              : 0) >= (null != N ? N : 0);
        return {
          data: C,
          loading: L,
          LoadMore: (0, o.useCallback)(
            function () {
              return (0, l.jsx)(a.E.div, {
                className: T ? 'hidden' : 'block',
                viewport: {
                  margin: '0px 0px '.concat(null != g ? g : 1e3, 'px')
                },
                onViewportEnter: M,
                onViewportLeave: I,
                children: (0, l.jsx)(d.g, { className: 'mt-5' })
              });
            },
            [T]
          )
        };
      }
    },
    682: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          default: function () {
            return E;
          }
        });
      var i = e(6042),
        u = e(9396),
        r = e(5893),
        l = e(7294),
        o = e(1163),
        a = e(3136),
        c = e(5321),
        s = e(2108),
        d = e(1940),
        f = e(4089),
        p = e(9806),
        v = e(7913),
        h = e(585),
        m = e(4856),
        x = e(722),
        g = e(7238),
        j = e(9570),
        w = e(6028),
        _ = e(7471);
      function E() {
        var n = (0, s.aC)().user,
          t = (0, f.M)(
            d.W$,
            [(0, c.ar)('id', '!=', null == n ? void 0 : n.id)],
            { allowNull: !0, preserve: !0 },
            { marginBottom: 500 }
          ),
          e = t.data,
          p = t.loading,
          v = t.LoadMore,
          E = (0, o.useRouter)().back;
        return (0, r.jsxs)(x.t, {
          children: [
            (0, r.jsx)(h.H, { title: 'People / Twitter' }),
            (0, r.jsx)(m.c, {
              useActionButton: !0,
              title: 'People',
              action: E
            }),
            (0, r.jsx)('section', {
              children: p
                ? (0, r.jsx)(j.g, { className: 'mt-5' })
                : e
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(
                        a.E.div,
                        (0, u.Z)((0, i.Z)({ className: 'mt-0.5' }, _.o), {
                          children:
                            null == e
                              ? void 0
                              : e.map(function (n) {
                                  return (0,
                                  l.createElement)(g.O, (0, u.Z)((0, i.Z)({}, n), { key: n.id, follow: !0 }));
                                })
                        })
                      ),
                      (0, r.jsx)(v, {})
                    ]
                  })
                : (0, r.jsx)(w.j, { message: 'Something went wrong' })
            })
          ]
        });
      }
      E.getLayout = function (n) {
        return (0, r.jsx)(p.IP, {
          children: (0, r.jsx)(v.Z, {
            children: (0, r.jsx)(p.vK, { children: n })
          })
        });
      };
    }
  },
  function (n) {
    n.O(0, [986, 80, 501, 774, 888, 179], function () {
      return n((n.s = 1480));
    }),
      (_N_E = n.O());
  }
]);
