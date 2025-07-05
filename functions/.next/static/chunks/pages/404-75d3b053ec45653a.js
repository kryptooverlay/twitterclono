(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    6141: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return e(9622);
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
      var o = e(5893),
        i = e(1163),
        r = e(9008),
        c = e.n(r),
        u = e(1923);
      function s(t) {
        var n = t.title,
          e = t.image,
          r = t.description,
          s = (0, i.useRouter)().asPath;
        return (0, o.jsxs)(c(), {
          children: [
            (0, o.jsx)('title', { children: n }),
            (0, o.jsx)('meta', { name: 'og:title', content: n }),
            r && (0, o.jsx)('meta', { name: 'description', content: r }),
            r && (0, o.jsx)('meta', { name: 'og:description', content: r }),
            e && (0, o.jsx)('meta', { property: 'og:image', content: e }),
            (0, o.jsx)('meta', {
              name: 'og:url',
              content: ''.concat(u.f7).concat('/' === s ? '' : s)
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
            return u;
          }
        });
      var o = e(5893),
        i = e(2918),
        r = e(5655),
        c = e(585);
      function u() {
        var t = ['dim', 'dark'].includes((0, r.Fg)().theme);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(c.H, {
              title: 'Page not found / Twitter',
              description:
                'Sorry we couldn’t find the page you were looking for.',
              image: '/404.png'
            }),
            (0, o.jsx)(i.default, { statusCode: 404, withDarkMode: t })
          ]
        });
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
      return t((t.s = 6141));
    }),
      (_N_E = t.O());
  }
]);
