(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [380],
  {
    4729: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/user/[id]/with_replies',
        function () {
          return t(1320);
        }
      ]);
    },
    1320: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return T;
          }
        });
      var r = t(6042),
        d = t(9396),
        i = t(5893),
        a = t(7294),
        u = t(5820),
        c = t(5321),
        l = t(3872),
        s = t(5662),
        o = t(1940),
        f = t(5127),
        h = t(9806),
        p = t(7913),
        w = t(585),
        j = t(6993),
        x = t(2474),
        m = t(5053),
        _ = t(9570),
        I = t(6781),
        N = t(9815),
        k = t(5195);
      function E(e) {
        var n = e.parentId,
          t = e.loadedParents,
          d = e.addParentId,
          u = (0, a.useMemo)(k.w, []),
          l = t.some(function (e) {
            return e.childId === u;
          }),
          f = (0, s.k)((0, c.JU)(o.VV, n), {
            includeUser: !0,
            allowNull: !0,
            disabled: l
          }),
          h = f.data,
          p = f.loading;
        return ((0, a.useEffect)(function () {
          d(n, u);
        }, []),
        !p && l && h)
          ? (0, i.jsx)(m.t, (0, r.Z)({ parentTweet: !0 }, h))
          : null;
      }
      function P(e) {
        var n = e.data,
          t = (0, a.useState)([]),
          d = t[0],
          u = t[1],
          c = function (e, n) {
            return u(function (t) {
              return t.some(function (n) {
                return n.parentId === e;
              })
                ? t
                : (0, N.Z)(t).concat([{ parentId: e, childId: n }]);
            });
          },
          l = n.filter(function (e) {
            return !d.some(function (n) {
              return n.parentId === e.id;
            });
          });
        return (0, i.jsx)(i.Fragment, {
          children: l.map(function (e) {
            return (0,
            i.jsxs)('div', { className: '[&>article:nth-child(2)]:-mt-1', children: [e.parent && (0, i.jsx)(E, { parentId: e.parent.id, loadedParents: d, addParentId: c }), (0, i.jsx)(m.t, (0, r.Z)({}, e))] }, e.id);
          })
        });
      }
      function T() {
        var e = (0, f.aF)().user,
          n = null != e ? e : {},
          t = n.id,
          h = n.name,
          p = n.username,
          j = n.pinnedTweet,
          x = (0, s.k)((0, c.JU)(o.VV, null != j ? j : 'null'), {
            disabled: !j,
            allowNull: !0,
            includeUser: !0
          }).data,
          N = (0, l.K)(
            (0, c.IO)(
              o.VV,
              (0, c.ar)('createdBy', '==', t),
              (0, c.Xo)('createdAt', 'desc')
            ),
            { includeUser: !0, allowNull: !0 }
          ),
          k = N.data,
          E = N.loading;
        return (0, i.jsxs)('section', {
          children: [
            (0, i.jsx)(w.H, {
              title: 'Tweets with replies by '
                .concat(h, ' (@')
                .concat(p, ') / Twitter')
            }),
            E
              ? (0, i.jsx)(_.g, { className: 'mt-5' })
              : k
              ? (0, i.jsxs)(u.M, {
                  mode: 'popLayout',
                  children: [
                    x &&
                      (0, a.createElement)(
                        m.t,
                        (0, d.Z)((0, r.Z)({ pinned: !0 }, x), {
                          key: 'pinned-'.concat(x.id)
                        })
                      ),
                    (0, i.jsx)(P, { data: k })
                  ]
                })
              : (0, i.jsx)(I.Q, {
                  title: '@'.concat(p, " hasn't tweeted"),
                  description: 'When they do, their Tweets will show up here.'
                })
          ]
        });
      }
      T.getLayout = function (e) {
        return (0, i.jsx)(h.IP, {
          children: (0, i.jsx)(p.Z, {
            children: (0, i.jsx)(h.rf, {
              children: (0, i.jsx)(j.I, {
                children: (0, i.jsx)(x.w, { children: e })
              })
            })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 465, 478, 774, 888, 179], function () {
      return e((e.s = 4729));
    }),
      (_N_E = e.O());
  }
]);
