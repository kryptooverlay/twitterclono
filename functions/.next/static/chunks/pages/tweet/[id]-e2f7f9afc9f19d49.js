(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [925],
  {
    6332: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/tweet/[id]',
        function () {
          return t(1052);
        }
      ]);
    },
    1052: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          default: function () {
            return X;
          }
        });
      var n = t(6042),
        s = t(9396),
        a = t(5893),
        l = t(7294),
        i = t(1163),
        d = t(5820),
        c = t(5321),
        o = t(1940),
        u = t(3872),
        x = t(5662),
        m = t(6269),
        w = t(9806),
        h = t(7913),
        p = t(722),
        j = t(4856),
        f = t(5053),
        v = t(1664),
        g = t.n(v),
        b = t(3136),
        N = t(6010),
        k = t(2108),
        y = t(3040),
        T = t(9099),
        Z = t(2706),
        _ = t(1400),
        I = t(1708),
        R = t(7391),
        E = t(4531),
        L = t(7876),
        V = t(44),
        C = t(4851),
        M = t(581),
        O = t(9557);
      function U(e) {
        var r = e.id,
          t = e.text,
          l = e.images,
          i = e.parent,
          d = e.userLikes,
          c = e.createdBy,
          o = e.createdAt,
          u = e.userRetweets,
          x = e.userReplies,
          m = e.viewTweetRef,
          w = e.user,
          h = w.id,
          p = w.name,
          j = w.username,
          v = w.verified,
          U = w.photoURL,
          A = (0, k.aC)().user,
          P = (0, y.d)(),
          Y = P.open,
          B = P.openModal,
          X = P.closeModal,
          F = '/tweet/'.concat(r),
          H = null == A ? void 0 : A.id,
          J = H === c,
          q = !!i,
          z = null != i ? i : {},
          K = z.id,
          D = z.username,
          G = void 0 === D ? j : D;
        return (0, a.jsxs)(
          b.E.article,
          (0, s.Z)(
            (0, n.Z)(
              {
                className: (0, N.Z)(
                  'accent-tab h- relative flex cursor-default flex-col gap-3 border-b\n         border-light-border px-4 py-3 outline-none dark:border-dark-border',
                  q && 'scroll-m-[3.25rem] pt-0'
                )
              },
              f.o
            ),
            {
              animate: (0, s.Z)((0, n.Z)({}, f.o.animate), {
                transition: { duration: 0.2 }
              }),
              exit: void 0,
              ref: m,
              children: [
                (0, a.jsx)(T.u_, {
                  className: 'flex items-start justify-center',
                  modalClassName:
                    'bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden',
                  open: Y,
                  closeModal: X,
                  children: (0, a.jsx)(Z.h, { tweet: e, closeModal: X })
                }),
                (0, a.jsxs)('div', {
                  className: 'flex flex-col gap-2',
                  children: [
                    q &&
                      (0, a.jsx)('div', {
                        className: 'flex w-12 items-center justify-center',
                        children: (0, a.jsx)('i', {
                          className:
                            'hover-animation h-2 w-0.5 bg-light-line-reply dark:bg-dark-line-reply'
                        })
                      }),
                    (0, a.jsxs)('div', {
                      className: 'grid grid-cols-[auto,1fr] gap-3',
                      children: [
                        (0, a.jsx)(
                          R.Y,
                          (0, s.Z)((0, n.Z)({ avatar: !0 }, w), {
                            children: (0, a.jsx)(I.Y, {
                              src: U,
                              alt: p,
                              username: j
                            })
                          })
                        ),
                        (0, a.jsxs)('div', {
                          className: 'flex min-w-0 justify-between',
                          children: [
                            (0, a.jsxs)('div', {
                              className:
                                'flex flex-col truncate xs:overflow-visible xs:whitespace-normal',
                              children: [
                                (0, a.jsx)(
                                  R.Y,
                                  (0, s.Z)((0, n.Z)({}, w), {
                                    children: (0, a.jsx)(E.v, {
                                      className: '-mb-1',
                                      name: p,
                                      username: j,
                                      verified: v
                                    })
                                  })
                                ),
                                (0, a.jsx)(
                                  R.Y,
                                  (0, s.Z)((0, n.Z)({}, w), {
                                    children: (0, a.jsx)(L.a, { username: j })
                                  })
                                )
                              ]
                            }),
                            (0, a.jsx)('div', {
                              className: 'px-4',
                              children: (0, a.jsx)(V.r, {
                                viewTweet: !0,
                                isOwner: J,
                                ownerId: h,
                                tweetId: r,
                                parentId: K,
                                username: j,
                                hasImages: !!l,
                                createdBy: c
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                q &&
                  (0, a.jsxs)('p', {
                    className: 'text-light-secondary dark:text-dark-secondary',
                    children: [
                      'Replying to',
                      ' ',
                      (0, a.jsx)(g(), {
                        href: '/user/'.concat(G),
                        children: (0, a.jsxs)('a', {
                          className: 'custom-underline text-main-accent',
                          children: ['@', G]
                        })
                      })
                    ]
                  }),
                (0, a.jsxs)('div', {
                  children: [
                    t &&
                      (0, a.jsx)('p', {
                        className: 'whitespace-pre-line break-words text-2xl',
                        children: t
                      }),
                    l &&
                      (0, a.jsx)(_.e, {
                        viewTweet: !0,
                        imagesPreview: l,
                        previewCount: l.length
                      }),
                    (0, a.jsxs)('div', {
                      className:
                        'inner:hover-animation inner:border-b inner:border-light-border dark:inner:border-dark-border',
                      children: [
                        (0, a.jsx)(M.C, {
                          viewTweet: !0,
                          tweetLink: F,
                          createdAt: o
                        }),
                        (0, a.jsx)(C.b, {
                          viewTweet: !0,
                          reply: q,
                          userId: H,
                          isOwner: J,
                          tweetId: r,
                          userLikes: d,
                          userRetweets: u,
                          userReplies: x,
                          openModal: B
                        })
                      ]
                    }),
                    (0, a.jsx)(O.I, {
                      reply: !0,
                      parent: { id: r, username: j }
                    })
                  ]
                })
              ]
            }
          )
        );
      }
      var A = t(585),
        P = t(9570),
        Y = t(6028);
      function B(e) {
        var r = e.parentId,
          t = e.viewTweetRef,
          s = (0, x.k)((0, c.JU)(o.VV, r), { includeUser: !0, allowNull: !0 }),
          i = s.data,
          d = s.loading;
        return ((0, l.useEffect)(
          function () {
            var e;
            d || null === (e = t.current) || void 0 === e || e.scrollIntoView();
          },
          [null == i ? void 0 : i.id, d]
        ),
        d)
          ? null
          : i
          ? (0, a.jsx)(f.t, (0, n.Z)({ parentTweet: !0 }, i))
          : (0, a.jsx)('div', {
              className: 'px-4 pt-3 pb-2',
              children: (0, a.jsxs)('p', {
                className:
                  'rounded-2xl bg-main-sidebar-background py-3 px-1 pl-4 text-light-secondary dark:text-dark-secondary',
                children: [
                  'This Tweet was deleted by the Tweet author.',
                  ' ',
                  (0, a.jsx)('a', {
                    className: 'custom-underline text-main-accent',
                    href: 'https://help.twitter.com/rules-and-policies/notices-on-twitter',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Learn more'
                  })
                ]
              })
            });
      }
      function X() {
        var e,
          r,
          t = (0, i.useRouter)(),
          w = t.query.id,
          h = t.back,
          v = (0, x.k)((0, c.JU)(o.VV, w), { includeUser: !0, allowNull: !0 }),
          g = v.data,
          b = v.loading,
          N = (0, l.useRef)(null),
          k = (0, u.K)(
            (0, c.IO)(
              o.VV,
              (0, c.ar)('parent.id', '==', w),
              (0, c.Xo)('createdAt', 'desc')
            ),
            { includeUser: !0, allowNull: !0 }
          ),
          y = k.data,
          T = k.loading,
          Z = null != g ? g : {},
          _ = Z.text,
          I = Z.images,
          R =
            null !== (r = null == I ? void 0 : I.length) && void 0 !== r
              ? r
              : 0,
          E =
            null == g
              ? void 0
              : null === (e = g.parent) || void 0 === e
              ? void 0
              : e.id,
          L = g
            ? ''
                .concat(g.user.name, ' on Twitter: "')
                .concat(null != _ ? _ : '')
                .concat(
                  I ? ' ('.concat(R, ' image').concat((0, m.uz)(R), ')') : '',
                  '" / Twitter'
                )
            : null;
        return (0, a.jsxs)(p.t, {
          className: '!pb-[1280px]',
          children: [
            (0, a.jsx)(j.c, {
              useActionButton: !0,
              title: E ? 'Thread' : 'Tweet',
              action: h
            }),
            (0, a.jsx)('section', {
              children: b
                ? (0, a.jsx)(P.g, { className: 'mt-5' })
                : g
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      L && (0, a.jsx)(A.H, { title: L }),
                      E && (0, a.jsx)(B, { parentId: E, viewTweetRef: N }),
                      (0, a.jsx)(U, (0, n.Z)({ viewTweetRef: N }, g)),
                      g &&
                        (T
                          ? (0, a.jsx)(P.g, { className: 'mt-5' })
                          : (0, a.jsx)(d.M, {
                              mode: 'popLayout',
                              children:
                                null == y
                                  ? void 0
                                  : y.map(function (e) {
                                      return (0,
                                      l.createElement)(f.t, (0, s.Z)((0, n.Z)({}, e), { key: e.id }));
                                    })
                            }))
                    ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(A.H, { title: 'Tweet not found / Twitter' }),
                      (0, a.jsx)(Y.j, { message: 'Tweet not found' })
                    ]
                  })
            })
          ]
        });
      }
      X.getLayout = function (e) {
        return (0, a.jsx)(w.IP, {
          children: (0, a.jsx)(h.Z, {
            children: (0, a.jsx)(w.Os, { children: e })
          })
        });
      };
    }
  },
  function (e) {
    e.O(0, [986, 80, 501, 465, 774, 888, 179], function () {
      return e((e.s = 6332));
    }),
      (_N_E = e.O());
  }
]);
