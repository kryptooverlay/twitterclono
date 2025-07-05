(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [562],
  {
    5096: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/user/[id]/media',
        function () {
          return n(4618);
        }
      ]);
    },
    7664: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return i;
        }
      });
      var r = n(9815);
      function i(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        var a = n
          .filter(function (e) {
            return e;
          })
          .reduce(function (e, t) {
            return (0, r.Z)(e).concat((0, r.Z)(t));
          }, []);
        return a.length
          ? e
            ? a.sort(function (e, t) {
                return +t.createdAt.toDate() - +e.createdAt.toDate();
              })
            : a
          : null;
      }
    },
    4618: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          }
        });
      var r = n(6042),
        i = n(9396),
        a = n(5893),
        c = n(7294),
        u = n(5820),
        s = n(5321),
        o = n(3872),
        l = n(1940),
        d = n(5127),
        f = n(7664),
        h = n(9806),
        w = n(7913),
        m = n(585),
        _ = n(6993),
        j = n(2474),
        p = n(5053),
        x = n(9570),
        g = n(6781);
      function N() {
        var e = (0, d.aF)().user,
          t = null != e ? e : {},
          n = t.id,
          h = t.name,
          w = t.username,
          _ = (0, o.K)(
            (0, s.IO)(
              l.VV,
              (0, s.ar)('createdBy', '==', n),
              (0, s.ar)('images', '!=', null)
            ),
            { includeUser: !0, allowNull: !0 }
          ),
          j = _.data,
          N = _.loading,
          y = (0, f.b)(!0, j);
        return (0, a.jsxs)('section', {
          children: [
            (0, a.jsx)(m.H, {
              title: 'Media Tweets by '
                .concat(h, ' (@')
                .concat(w, ') / Twitter')
            }),
            N
              ? (0, a.jsx)(x.g, { className: 'mt-5' })
              : y
              ? (0, a.jsx)(u.M, {
                  mode: 'popLayout',
                  children: y.map(function (e) {
                    return (0,
                    c.createElement)(p.t, (0, i.Z)((0, r.Z)({}, e), { key: e.id }));
                  })
                })
              : (0, a.jsx)(g.Q, {
                  title: '@'.concat(w, " hasn't Tweeted Media"),
                  description: 'Once they do, those Tweets will show up here.',
                  imageData: { src: '/assets/no-media.png', alt: 'No media' }
                })
          ]
        });
      }
      N.getLayout = function (e) {
        return (0, a.jsx)(h.IP, {
          children: (0, a.jsx)(w.Z, {
            children: (0, a.jsx)(h.rf, {
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
      return e((e.s = 5096));
    }),
      (_N_E = e.O());
  }
]);
