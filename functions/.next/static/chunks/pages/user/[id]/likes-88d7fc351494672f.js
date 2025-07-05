(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [155],
  {
    598: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/user/[id]/likes',
        function () {
          return t(6753);
        }
      ]);
    },
    6753: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return m;
          }
        });
      var r = t(6042),
        s = t(9396),
        i = t(5893),
        c = t(7294),
        u = t(5820),
        a = t(5321),
        l = t(3872),
        o = t(1940),
        d = t(5127),
        h = t(9806),
        w = t(7913),
        f = t(585),
        _ = t(6993),
        j = t(2474),
        x = t(5053),
        k = t(9570),
        p = t(6781);
      function m() {
        var e = (0, d.aF)().user,
          n = null != e ? e : {},
          t = n.id,
          h = n.name,
          w = n.username,
          _ = (0, l.K)(
            (0, a.IO)(
              o.VV,
              (0, a.ar)('userLikes', 'array-contains', t),
              (0, a.Xo)('createdAt', 'desc')
            ),
            { includeUser: !0, allowNull: !0 }
          ),
          j = _.data,
          m = _.loading;
        return (0, i.jsxs)('section', {
          children: [
            (0, i.jsx)(f.H, {
              title: 'Tweets liked by '
                .concat(h, ' (@')
                .concat(w, ') / Twitter')
            }),
            m
              ? (0, i.jsx)(k.g, { className: 'mt-5' })
              : j
              ? (0, i.jsx)(u.M, {
                  mode: 'popLayout',
                  children: j.map(function (e) {
                    return (0,
                    c.createElement)(x.t, (0, s.Z)((0, r.Z)({}, e), { key: e.id }));
                  })
                })
              : (0, i.jsx)(p.Q, {
                  title: '@'.concat(w, " hasn't liked any Tweets"),
                  description: 'When they do, those Tweets will show up here.'
                })
          ]
        });
      }
      m.getLayout = function (e) {
        return (0, i.jsx)(h.IP, {
          children: (0, i.jsx)(w.Z, {
            children: (0, i.jsx)(h.rf, {
              children: (0, i.jsx)(_.I, {
                children: (0, i.jsx)(j.w, { children: e })
              })
            })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 465, 478, 774, 888, 179], function () {
      return e((e.s = 598));
    }),
      (_N_E = e.O());
  }
]);
