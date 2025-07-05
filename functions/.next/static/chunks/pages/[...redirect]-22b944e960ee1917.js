(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [963],
  {
    9367: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[...redirect]',
        function () {
          return e(3141);
        }
      ]);
    },
    585: function (t, n, e) {
      'use strict';
      e.d(n, {
        H: function () {
          return s;
        }
      });
      var r = e(5893),
        o = e(1163),
        i = e(9008),
        u = e.n(i),
        c = e(1923);
      function s(t) {
        var n = t.title,
          e = t.image,
          i = t.description,
          s = (0, o.useRouter)().asPath;
        return (0, r.jsxs)(u(), {
          children: [
            (0, r.jsx)('title', { children: n }),
            (0, r.jsx)('meta', { name: 'og:title', content: n }),
            i && (0, r.jsx)('meta', { name: 'description', content: i }),
            i && (0, r.jsx)('meta', { name: 'og:description', content: i }),
            e && (0, r.jsx)('meta', { property: 'og:image', content: e }),
            (0, r.jsx)('meta', {
              name: 'og:url',
              content: ''.concat(c.f7).concat('/' === s ? '' : s)
            })
          ]
        });
      }
    },
    9622: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          }
        });
      var r = e(5893),
        o = e(2918),
        i = e(5655),
        u = e(585);
      function c() {
        var t = ['dim', 'dark'].includes((0, i.Fg)().theme);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(u.H, {
              title: 'Page not found / Twitter',
              description:
                'Sorry we couldn’t find the page you were looking for.',
              image: '/404.png'
            }),
            (0, r.jsx)(o.default, { statusCode: 404, withDarkMode: t })
          ]
        });
      }
    },
    3141: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          default: function () {
            return i;
          }
        });
      var r = e(5893),
        o = e(9622);
      function i() {
        return (0, r.jsx)(o.default, {});
      }
    },
    2918: function (t, n, e) {
      t.exports = e(9185);
    },
    1163: function (t, n, e) {
      t.exports = e(387);
    }
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return t((t.s = 9367));
    }),
      (_N_E = t.O());
  }
]);
