(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    4715: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/user/[id]',
        function () {
          return t(3328);
        }
      ]);
    },
    7664: function (e, n, t) {
      'use strict';
      t.d(n, {
        b: function () {
          return u;
        }
      });
      var r = t(9815);
      function u(e) {
        for (
          var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), u = 1;
          u < n;
          u++
        )
          t[u - 1] = arguments[u];
        var a = t
          .filter(function (e) {
            return e;
          })
          .reduce(function (e, n) {
            return (0, r.Z)(e).concat((0, r.Z)(n));
          }, []);
        return a.length
          ? e
            ? a.sort(function (e, n) {
                return +n.createdAt.toDate() - +e.createdAt.toDate();
              })
            : a
          : null;
      }
    },
    3328: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return k;
          }
        });
      var r = t(6042),
        u = t(9396),
        a = t(5893),
        i = t(7294),
        l = t(5321),
        c = t(5820),
        o = t(5127),
        d = t(3872),
        s = t(5662),
        f = t(1940),
        h = t(7664),
        w = t(9806),
        p = t(7913),
        _ = t(6993),
        j = t(2474),
        x = t(6781),
        y = t(9570),
        N = t(5053);
      function k() {
        var e = (0, o.aF)().user,
          n = null != e ? e : {},
          t = n.id,
          w = n.username,
          p = n.pinnedTweet,
          _ = (0, s.k)((0, l.JU)(f.VV, null != p ? p : 'null'), {
            disabled: !p,
            allowNull: !0,
            includeUser: !0
          }).data,
          j = (0, d.K)(
            (0, l.IO)(
              f.VV,
              (0, l.ar)('createdBy', '==', t),
              (0, l.ar)('parent', '==', null)
            ),
            { includeUser: !0, allowNull: !0 }
          ),
          k = j.data,
          m = j.loading,
          E = (0, d.K)(
            (0, l.IO)(
              f.VV,
              (0, l.ar)('createdBy', '!=', t),
              (0, l.ar)('userRetweets', 'array-contains', t)
            ),
            { includeUser: !0, allowNull: !0 }
          ),
          Z = E.data,
          g = E.loading,
          V = (0, h.b)(!0, k, Z);
        return (0, a.jsx)('section', {
          children:
            m || g
              ? (0, a.jsx)(y.g, { className: 'mt-5' })
              : V
              ? (0, a.jsxs)(c.M, {
                  mode: 'popLayout',
                  children: [
                    _ &&
                      (0, i.createElement)(
                        N.t,
                        (0, u.Z)((0, r.Z)({ pinned: !0 }, _), {
                          key: 'pinned-'.concat(_.id)
                        })
                      ),
                    V.map(function (n) {
                      return (0,
                      i.createElement)(N.t, (0, u.Z)((0, r.Z)({}, n), { profile: e, key: n.id }));
                    })
                  ]
                })
              : (0, a.jsx)(x.Q, {
                  title: '@'.concat(w, " hasn't tweeted"),
                  description: 'When they do, their Tweets will show up here.'
                })
        });
      }
      k.getLayout = function (e) {
        return (0, a.jsx)(w.IP, {
          children: (0, a.jsx)(p.Z, {
            children: (0, a.jsx)(w.rf, {
              children: (0, a.jsx)(_.I, {
                children: (0, a.jsx)(j.w, { children: e })
              })
            })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 465, 478, 774, 888, 179], function () {
      return e((e.s = 4715));
    }),
      (_N_E = e.O());
  }
]);
