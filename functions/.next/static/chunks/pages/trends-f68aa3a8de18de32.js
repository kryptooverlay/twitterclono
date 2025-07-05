(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [319],
  {
    1105: function (r, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/trends',
        function () {
          return t(7768);
        }
      ]);
    },
    7768: function (r, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          }
        });
      var e = t(5893),
        i = t(1163),
        s = t(9806),
        a = t(7913),
        c = t(585),
        o = t(4856),
        u = t(722),
        d = t(7471),
        l = t(4685),
        h = t(3276),
        g = t(4266);
      function _() {
        var r = (0, i.useRouter)().back;
        return (0, e.jsxs)(u.t, {
          children: [
            (0, e.jsx)(c.H, { title: 'Trends / Twitter' }),
            (0, e.jsx)(o.c, {
              useActionButton: !0,
              title: 'Trends',
              action: r,
              children: (0, e.jsxs)(l.z, {
                className:
                  'dark-bg-tab group relative ml-auto cursor-not-allowed p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                children: [
                  (0, e.jsx)(g.e, {
                    className: 'h-5 w-5',
                    iconName: 'Cog8ToothIcon'
                  }),
                  (0, e.jsx)(h.e, { tip: 'Settings' })
                ]
              })
            }),
            (0, e.jsx)(d.j, { inTrendsPage: !0 })
          ]
        });
      }
      _.getLayout = function (r) {
        return (0, e.jsx)(s.IP, {
          children: (0, e.jsx)(a.Z, {
            children: (0, e.jsx)(s.OS, { children: r })
          })
        });
      };
    }
  },
  function (r) {
    r.O(0, [986, 80, 501, 774, 888, 179], function () {
      return r((r.s = 1105));
    }),
      (_N_E = r.O());
  }
]);
