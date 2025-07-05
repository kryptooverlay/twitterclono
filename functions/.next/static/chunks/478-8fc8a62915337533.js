'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [478],
  {
    2050: function (e, r, a) {
      a.d(r, {
        U: function () {
          return i;
        }
      });
      var t = a(5893),
        n = a(6010);
      function i(e) {
        var r,
          a = e.label,
          i = e.inputId,
          o = e.inputValue,
          l = e.inputLimit,
          s = e.useTextArea,
          c = e.errorMessage,
          d = e.handleChange,
          u = e.handleKeyboardShortcut,
          h =
            null !== (r = null == o ? void 0 : o.slice(0, l)) && void 0 !== r
              ? r
              : '',
          m = h.length,
          p = l && m > l;
        return (0, t.jsxs)('div', {
          className: 'flex flex-col gap-1',
          children: [
            (0, t.jsxs)('div', {
              className: (0, n.Z)(
                'relative rounded ring-1 transition-shadow duration-200',
                c
                  ? 'ring-accent-red'
                  : 'ring-light-line-reply focus-within:ring-2 \n                 focus-within:!ring-main-accent dark:ring-dark-border'
              ),
              children: [
                s
                  ? (0, t.jsx)('textarea', {
                      className:
                        'peer mt-6 w-full resize-none bg-inherit px-3 pb-1 placeholder-transparent outline-none transition',
                      id: i,
                      placeholder: i,
                      onChange: p ? void 0 : d,
                      onKeyUp: u,
                      value: h,
                      rows: 3
                    })
                  : (0, t.jsx)('input', {
                      className:
                        'peer mt-6 w-full bg-inherit px-3 pb-1 placeholder-transparent outline-none transition',
                      id: i,
                      type: 'text',
                      placeholder: i,
                      onChange: p ? void 0 : d,
                      value: h,
                      onKeyUp: u
                    }),
                (0, t.jsx)('label', {
                  className: (0, n.Z)(
                    'group-peer absolute left-3 translate-y-1 bg-main-background text-sm\n             text-light-secondary transition-all peer-placeholder-shown:translate-y-3\n             peer-placeholder-shown:text-lg peer-focus:translate-y-1 peer-focus:text-sm\n             dark:text-dark-secondary',
                    c
                      ? '!text-accent-red peer-focus:text-accent-red'
                      : 'peer-focus:text-main-accent'
                  ),
                  htmlFor: i,
                  children: a
                }),
                l &&
                  (0, t.jsxs)('span', {
                    className: (0, n.Z)(
                      'absolute right-3 top-0 translate-y-1 text-sm text-light-secondary transition-opacity \n               duration-200 peer-focus:visible peer-focus:opacity-100 dark:text-dark-secondary',
                      c ? 'visible opacity-100' : 'invisible opacity-0'
                    ),
                    children: [m, ' / ', l]
                  })
              ]
            }),
            c &&
              (0, t.jsx)('p', {
                className: 'text-sm text-accent-red',
                children: c
              })
          ]
        });
      }
    },
    6993: function (e, r, a) {
      a.d(r, {
        I: function () {
          return m;
        }
      });
      var t = a(5893),
        n = a(1163),
        i = a(5321),
        o = a(5127),
        l = a(3872),
        s = a(1940),
        c = a(585),
        d = a(722),
        u = a(4856),
        h = a(8162);
      function m(e) {
        var r = e.children,
          a = (0, n.useRouter)(),
          m = a.query.id,
          p = a.back,
          x = (0, l.K)(
            (0, i.IO)(s.W$, (0, i.ar)('username', '==', m), (0, i.b9)(1)),
            { allowNull: !0 }
          ),
          g = x.data,
          v = x.loading,
          b = g ? g[0] : null;
        return (0, t.jsxs)(o.fS, {
          value: { user: b, loading: v },
          children: [
            !b && !v && (0, t.jsx)(c.H, { title: 'User not found / Twitter' }),
            (0, t.jsxs)(d.t, {
              children: [
                (0, t.jsx)(u.c, {
                  useActionButton: !0,
                  action: p,
                  children: (0, t.jsx)(h.w, {})
                }),
                r
              ]
            })
          ]
        });
      }
    },
    2474: function (e, r, a) {
      a.d(r, {
        w: function () {
          return $;
        }
      });
      var t = a(6042),
        n = a(9396),
        i = a(5893),
        o = a(1163),
        l = a(3136),
        s = a(2108),
        c = a(5127),
        d = a(585),
        u = a(3040),
        h = a(4685),
        m = a(4664),
        p = a(9099),
        x = a(3644);
      function g(e) {
        var r = e.coverData,
          a = (0, u.d)(),
          t = a.open,
          n = a.openModal,
          o = a.closeModal;
        return (0, i.jsxs)('div', {
          className: 'mt-0.5 h-36 xs:h-48 sm:h-52',
          children: [
            (0, i.jsx)(p.u_, {
              open: t,
              closeModal: o,
              children: (0, i.jsx)(x.y, { imageData: r, previewCount: 1 })
            }),
            r
              ? (0, i.jsx)(h.z, {
                  className:
                    'accent-tab relative h-full w-full rounded-none p-0 transition hover:brightness-75',
                  onClick: n,
                  children: (0, i.jsx)(
                    m.o,
                    {
                      useSkeleton: !0,
                      layout: 'fill',
                      imgClassName: 'object-cover',
                      src: r.src,
                      alt: r.alt
                    },
                    r.src
                  )
                })
              : (0, i.jsx)('div', {
                  className:
                    'h-full bg-light-line-reply dark:bg-dark-line-reply'
                })
          ]
        });
      }
      function v(e) {
        var r = e.profileData,
          a = (0, u.d)(),
          t = a.open,
          n = a.openModal,
          o = a.closeModal;
        return (0, i.jsxs)('div', {
          className: 'mb-8 xs:mb-14 sm:mb-16',
          children: [
            (0, i.jsx)(p.u_, {
              open: t,
              closeModal: o,
              children: (0, i.jsx)(x.y, {
                imageData: {
                  src: null == r ? void 0 : r.src,
                  alt: null == r ? void 0 : r.alt
                },
                previewCount: 1
              })
            }),
            (0, i.jsx)(h.z, {
              className:
                'accent-tab absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0 disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36 [&:hover>figure>span]:brightness-75',
              onClick: n,
              disabled: !r,
              children: r
                ? (0, i.jsx)(
                    m.o,
                    {
                      useSkeleton: !0,
                      className:
                        'hover-animation relative h-full w-full bg-main-background inner:!m-1 inner:rounded-full inner:transition inner:duration-200',
                      imgClassName: 'rounded-full',
                      src: r.src,
                      alt: r.alt,
                      layout: 'fill'
                    },
                    r.src
                  )
                : (0, i.jsx)('div', {
                    className: 'h-full rounded-full bg-main-background p-1',
                    children: (0, i.jsx)('div', {
                      className:
                        'h-full rounded-full bg-main-sidebar-background'
                    })
                  })
            })
          ]
        });
      }
      var b = a(828),
        f = a(1944),
        j = a(4266),
        y = a(3276),
        k = a(4531),
        w = a(6154),
        N = a(7294),
        L = a(1664),
        R = a.n(L),
        U = a(5072);
      function Z(e) {
        var r = e.following,
          a = e.followers,
          t = r.length,
          n = a.length,
          l = (0, N.useState)({ currentFollowing: t, currentFollowers: n }),
          s = l[0],
          c = s.currentFollowers,
          d = s.currentFollowing,
          u = l[1];
        (0, N.useEffect)(
          function () {
            u({ currentFollowing: t, currentFollowers: n });
          },
          [t, n]
        );
        var h = (0, N.useMemo)(
            function () {
              return t > d ? -25 : 25;
            },
            [t]
          ),
          m = (0, N.useMemo)(
            function () {
              return n > c ? -25 : 25;
            },
            [n]
          ),
          p = (0, o.useRouter)().query.id,
          x = '/user/'.concat(p),
          g = [
            ['Following', ''.concat(x, '/following'), h, d],
            ['Follower', ''.concat(x, '/followers'), m, c]
          ];
        return (0, i.jsx)('div', {
          className:
            'flex gap-4 text-light-secondary dark:text-dark-secondary [&>a>div]:font-bold [&>a>div]:text-light-primary dark:[&>a>div]:text-dark-primary',
          children: g.map(function (e, r) {
            var a = (0, b.Z)(e, 4),
              t = a[0],
              n = a[1],
              o = a[2],
              l = a[3];
            return (0,
            i.jsx)(R(), { href: n, children: (0, i.jsxs)('a', { className: 'hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary', children: [(0, i.jsx)(U.H, { move: o, stats: l, alwaysShowStats: !0 }), (0, i.jsx)('p', { children: 1 === r && l > 1 ? ''.concat(t, 's') : t })] }) }, t);
          })
        });
      }
      function C(e) {
        var r = e.id,
          a = e.bio,
          t = e.name,
          n = e.website,
          o = e.username,
          l = e.location,
          s = e.verified,
          c = e.createdAt,
          d = e.following,
          u = e.followers,
          h = [
            [l, 'MapPinIcon'],
            [n, 'LinkIcon'],
            ['Joined '.concat((0, f.p)(c, 'joined')), 'CalendarDaysIcon']
          ];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(k.v, {
                  className: '-mb-1 text-xl',
                  name: t,
                  iconClassName: 'w-6 h-6',
                  verified: s
                }),
                (0, i.jsxs)('div', {
                  className:
                    'flex items-center gap-1 text-light-secondary dark:text-dark-secondary',
                  children: [
                    (0, i.jsxs)('p', { children: ['@', o] }),
                    (0, i.jsx)(w.y, { userTargetId: r })
                  ]
                })
              ]
            }),
            (0, i.jsxs)('div', {
              className: 'flex flex-col gap-2',
              children: [
                a &&
                  (0, i.jsx)('p', {
                    className: 'whitespace-pre-line break-words',
                    children: a
                  }),
                (0, i.jsx)('div', {
                  className:
                    'flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary',
                  children: h.map(function (e, r) {
                    var a = (0, b.Z)(e, 2),
                      t = a[0],
                      n = a[1];
                    return (
                      t &&
                      (0, i.jsxs)(
                        'div',
                        {
                          className: 'flex items-center gap-1',
                          children: [
                            (0, i.jsx)('i', {
                              children: (0, i.jsx)(j.e, {
                                className: 'h-5 w-5',
                                iconName: n
                              })
                            }),
                            1 === r
                              ? (0, i.jsx)('a', {
                                  className:
                                    'custom-underline text-main-accent',
                                  href: 'https://'.concat(t),
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  children: t
                                })
                              : 2 === r
                              ? (0, i.jsxs)('button', {
                                  className: 'custom-underline group relative',
                                  children: [
                                    t,
                                    (0, i.jsx)(y.e, {
                                      className: 'translate-y-1',
                                      tip: (0, f.p)(c, 'full')
                                    })
                                  ]
                                })
                              : (0, i.jsx)('p', { children: t })
                          ]
                        },
                        n
                      )
                    );
                  })
                })
              ]
            }),
            (0, i.jsx)(Z, { following: d, followers: u })
          ]
        });
      }
      var I = a(9186),
        P = a(9570),
        M = a(5122),
        F = a(8162),
        E = a(7568),
        S = a(4924),
        z = a(655),
        D = a(6501),
        T = a(6010),
        _ = a(7359),
        A = a(6269),
        q = a(3521),
        K = a(4856);
      function B(e) {
        var r = e.name,
          a = e.loading,
          t = e.photoURL,
          n = e.children,
          o = e.coverPhotoURL,
          l = e.inputNameError,
          s = e.editImage,
          c = e.closeModal,
          d = e.updateData,
          u = e.removeCoverImage,
          p = e.resetUserEditData,
          x = (0, N.useRef)(null),
          g = (0, N.useRef)(null),
          v = function (e) {
            return function () {
              var r, a;
              'cover' === e
                ? null === (r = x.current) || void 0 === r || r.click()
                : null === (a = g.current) || void 0 === a || a.click();
            };
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(K.c, {
              useActionButton: !0,
              disableSticky: !0,
              iconName: 'XMarkIcon',
              tip: 'Close',
              className:
                'absolute flex w-full items-center gap-6 rounded-tl-2xl',
              title: 'Edit profile',
              action: c,
              children: (0, i.jsxs)('div', {
                className: 'ml-auto flex items-center gap-3',
                children: [
                  (0, i.jsxs)(h.z, {
                    className:
                      'dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/10',
                    onClick: p,
                    disabled: a,
                    children: [
                      (0, i.jsx)(j.e, {
                        className: 'h-5 w-5',
                        iconName: 'ArrowPathIcon'
                      }),
                      (0, i.jsx)(y.e, { tip: 'Reset' })
                    ]
                  }),
                  (0, i.jsx)(h.z, {
                    className:
                      'bg-light-primary py-1 px-4 font-bold text-white focus-visible:bg-light-primary/90 enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80 disabled:brightness-75 dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90 dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75',
                    onClick: d,
                    disabled: !!l,
                    loading: a,
                    children: 'Save'
                  })
                ]
              })
            }),
            (0, i.jsxs)('section', {
              className: (0, T.Z)(
                'h-full overflow-y-auto transition-opacity',
                a && 'pointer-events-none opacity-50'
              ),
              children: [
                (0, i.jsxs)('div', {
                  className: 'group relative mt-[52px] h-36 xs:h-44 sm:h-48',
                  children: [
                    (0, i.jsx)('input', {
                      className: 'hidden',
                      type: 'file',
                      accept: 'image/*',
                      ref: x,
                      onChange: s('cover')
                    }),
                    o
                      ? (0, i.jsx)(m.o, {
                          useSkeleton: !0,
                          className: 'relative h-full',
                          imgClassName:
                            'object-cover transition group-hover:brightness-75 duration-200 group-focus-within:brightness-75',
                          src: o,
                          alt: r,
                          layout: 'fill'
                        })
                      : (0, i.jsx)('div', {
                          className:
                            'h-full bg-light-line-reply dark:bg-dark-line-reply'
                        }),
                    (0, i.jsxs)('div', {
                      className:
                        'absolute left-1/2 top-1/2 flex -translate-y-1/2 -translate-x-1/2 gap-4',
                      children: [
                        (0, i.jsxs)(h.z, {
                          className:
                            'group/inner relative bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50',
                          onClick: v('cover'),
                          children: [
                            (0, i.jsx)(j.e, {
                              className:
                                'hover-animation h-6 w-6 text-dark-primary group-hover:text-white',
                              iconName: 'CameraIcon'
                            }),
                            (0, i.jsx)(y.e, {
                              groupInner: !0,
                              tip: 'Add photo'
                            })
                          ]
                        }),
                        o &&
                          (0, i.jsxs)(h.z, {
                            className:
                              'group/inner relative bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50',
                            onClick: u,
                            children: [
                              (0, i.jsx)(j.e, {
                                className:
                                  'hover-animation h-6 w-6 text-dark-primary group-hover:text-white',
                                iconName: 'XMarkIcon'
                              }),
                              (0, i.jsx)(y.e, {
                                groupInner: !0,
                                tip: 'Remove photo'
                              })
                            ]
                          })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)('div', {
                  className: 'relative flex flex-col gap-6 px-4 py-3',
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'mb-8 xs:mb-12 sm:mb-14',
                      children: [
                        (0, i.jsx)('input', {
                          className: 'hidden',
                          type: 'file',
                          accept: 'image/*',
                          ref: g,
                          onChange: s('profile')
                        }),
                        (0, i.jsxs)('div', {
                          className:
                            'group absolute aspect-square w-24 -translate-y-1/2 overflow-hidden rounded-full xs:w-32 sm:w-36',
                          children: [
                            (0, i.jsx)(m.o, {
                              useSkeleton: !0,
                              className:
                                'h-full w-full bg-main-background inner:!m-1 inner:rounded-full',
                              imgClassName:
                                'rounded-full transition group-hover:brightness-75 duration-200 group-focus-within:brightness-75',
                              src: t,
                              alt: r,
                              layout: 'fill'
                            }),
                            (0, i.jsxs)(h.z, {
                              className:
                                'group/inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50',
                              onClick: v('profile'),
                              children: [
                                (0, i.jsx)(j.e, {
                                  className:
                                    'hover-animation h-6 w-6 text-dark-primary group-hover:text-white',
                                  iconName: 'CameraIcon'
                                }),
                                (0, i.jsx)(y.e, {
                                  groupInner: !0,
                                  tip: 'Add photo'
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    n,
                    (0, i.jsxs)(h.z, {
                      className:
                        'accent-tab -mx-4 mb-4 flex cursor-not-allowed items-center justify-between rounded-none py-2 hover:bg-light-primary/10 active:bg-light-primary/20 disabled:brightness-100 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                      children: [
                        (0, i.jsx)('span', {
                          className: 'mx-2 text-xl',
                          children: 'Switch to professional'
                        }),
                        (0, i.jsx)('i', {
                          children: (0, i.jsx)(j.e, {
                            className:
                              'h-6 w-6 text-light-secondary dark:text-dark-secondary',
                            iconName: 'ChevronRightIcon'
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
      var J = a(2050);
      function V(e) {
        var r,
          a = e.hide,
          o = (0, c.aF)().user,
          l = (0, u.d)(),
          s = l.open,
          d = l.openModal,
          m = l.closeModal,
          x = (0, N.useState)(!1),
          g = x[0],
          v = x[1],
          f = o.bio,
          j = o.name,
          y = o.website,
          k = o.location,
          w = o.photoURL,
          L = o.coverPhotoURL,
          R = (0, N.useState)({
            bio: f,
            name: j,
            website: y,
            photoURL: w,
            location: k,
            coverPhotoURL: L
          }),
          U = R[0],
          Z = R[1],
          C = (0, N.useState)({ photoURL: [], coverPhotoURL: [] }),
          I = C[0],
          P = C[1];
        (0, N.useEffect)(function () {
          return O;
        }, []);
        var M,
          F = (null === (r = U.name) || void 0 === r ? void 0 : r.trim())
            ? ''
            : "Name can't be blank",
          K =
            ((M = (0, E.Z)(function () {
              var e, r, a, i, l, s, c, d, u, h, p;
              return (0, z.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      v(!0),
                      (e = null == o ? void 0 : o.id),
                      [
                        4,
                        Promise.all(
                          [(r = I.photoURL), (0, I.coverPhotoURL)].map(
                            function (r) {
                              return (0, _.eg)(e, r);
                            }
                          )
                        )
                      ]
                    );
                  case 1:
                    return (
                      (l = (i = b.Z.apply(void 0, [a.sent(), 2]))[0]),
                      (s = i[1]),
                      (d = (0, t.Z)(
                        {
                          coverPhotoURL:
                            L === U.coverPhotoURL
                              ? L
                              : null !== (c = null == s ? void 0 : s[0].src) &&
                                void 0 !== c
                              ? c
                              : null
                        },
                        l && { photoURL: l[0].src }
                      )),
                      (h = ['name', 'bio', 'location', 'website'].reduce(
                        function (e, r) {
                          var a;
                          return (0, n.Z)(
                            (0, t.Z)({}, e),
                            (0, S.Z)(
                              {},
                              r,
                              null !==
                                (u =
                                  null === (a = U[r]) || void 0 === a
                                    ? void 0
                                    : a.trim()) && void 0 !== u
                                ? u
                                : null
                            )
                          );
                        },
                        {}
                      )),
                      (p = (0, t.Z)({}, U, h, d)),
                      [4, (0, A._v)(500)]
                    );
                  case 2:
                    return a.sent(), [4, (0, _.Al)(e, p)];
                  case 3:
                    return (
                      a.sent(),
                      m(),
                      O(),
                      v(!1),
                      Z(p),
                      D.Am.success('Profile updated successfully'),
                      [2]
                    );
                }
              });
            })),
            function () {
              return M.apply(this, arguments);
            }),
          V = function (e) {
            return function (r) {
              var a = r.target.files,
                i = (0, q.t6)(a);
              if (!i) {
                D.Am.error('Please choose a valid GIF or Photo');
                return;
              }
              var o = i.imagesPreviewData,
                l = i.selectedImagesData,
                s = 'cover' === e ? 'coverPhotoURL' : 'photoURL',
                c = o[0].src;
              Z((0, n.Z)((0, t.Z)({}, U), (0, S.Z)({}, s, c))),
                P((0, n.Z)((0, t.Z)({}, I), (0, S.Z)({}, s, l)));
            };
          },
          H = function () {
            var e;
            Z((0, n.Z)((0, t.Z)({}, U), { coverPhotoURL: null })),
              P((0, n.Z)((0, t.Z)({}, I), { coverPhotoURL: [] })),
              URL.revokeObjectURL(
                null !== (e = U.coverPhotoURL) && void 0 !== e ? e : ''
              );
          },
          O = function () {
            var e;
            ['photoURL', 'coverPhotoURL'].forEach(function (r) {
              return URL.revokeObjectURL(
                null !== (e = U[r]) && void 0 !== e ? e : ''
              );
            }),
              P({ photoURL: [], coverPhotoURL: [] });
          },
          W = function () {
            return Z({
              bio: f,
              name: j,
              website: y,
              photoURL: w,
              location: k,
              coverPhotoURL: L
            });
          },
          X = function (e) {
            var r = e.key,
              a = e.target;
            e.ctrlKey && 'Enter' === r && !F && (a.blur(), K());
          },
          G = [
            {
              label: 'Name',
              inputId: 'name',
              inputValue: U.name,
              inputLimit: 50,
              errorMessage: F
            },
            {
              label: 'Bio',
              inputId: 'bio',
              inputValue: U.bio,
              inputLimit: 160,
              useTextArea: !0
            },
            {
              label: 'Location',
              inputId: 'location',
              inputValue: U.location,
              inputLimit: 30
            },
            {
              label: 'Website',
              inputId: 'website',
              inputValue: U.website,
              inputLimit: 100
            }
          ];
        return (0, i.jsxs)('form', {
          className: (0, T.Z)(a && 'hidden md:block'),
          children: [
            (0, i.jsx)(p.u_, {
              modalClassName:
                'relative bg-main-background rounded-2xl max-w-xl w-full h-[672px] overflow-hidden',
              open: s,
              closeModal: m,
              children: (0, i.jsx)(B, {
                name: j,
                loading: g,
                photoURL: U.photoURL,
                coverPhotoURL: U.coverPhotoURL,
                inputNameError: F,
                editImage: V,
                closeModal: m,
                updateData: K,
                removeCoverImage: H,
                resetUserEditData: W,
                children: G.map(function (e) {
                  var r;
                  return (0, N.createElement)(
                    J.U,
                    (0, n.Z)((0, t.Z)({}, e), {
                      handleChange:
                        ((r = e.inputId),
                        function (e) {
                          var a = e.target.value;
                          return Z(
                            (0, n.Z)((0, t.Z)({}, U), (0, S.Z)({}, r, a))
                          );
                        }),
                      handleKeyboardShortcut: X,
                      key: e.inputId
                    })
                  );
                })
              })
            }),
            (0, i.jsx)(h.z, {
              className:
                'dark-bg-tab self-start border border-light-line-reply px-4 py-1.5 font-bold hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
              onClick: d,
              children: 'Edit profile'
            })
          ]
        });
      }
      var H = a(6215),
        O = a(5820),
        W = a(1923),
        X = a(44);
      function G(e) {
        var r = e.username;
        return (0, i.jsx)(H.J, {
          className: 'relative',
          children: function (e) {
            var a,
              o = e.open,
              s = e.close;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(H.J.Button, {
                  as: h.z,
                  className: (0, T.Z)(
                    'dark-bg-tab group relative border border-light-line-reply p-2\n               hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary\n               dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                    o && 'bg-light-primary/10 dark:bg-dark-primary/10'
                  ),
                  children: [
                    (0, i.jsx)(j.e, {
                      className: 'h-5 w-5',
                      iconName: 'EllipsisHorizontalIcon'
                    }),
                    !o && (0, i.jsx)(y.e, { tip: 'More' })
                  ]
                }),
                (0, i.jsx)(O.M, {
                  children:
                    o &&
                    (0, i.jsx)(
                      H.J.Panel,
                      (0, n.Z)(
                        (0, t.Z)(
                          {
                            className:
                              'menu-container group absolute right-0 top-11 whitespace-nowrap text-light-primary dark:text-dark-primary',
                            as: l.E.div
                          },
                          X.o
                        ),
                        {
                          static: !0,
                          children: (0, i.jsxs)(H.J.Button, {
                            className:
                              'flex w-full gap-3 rounded-md rounded-b-none p-4 hover:bg-main-sidebar-background',
                            as: h.z,
                            onClick: (0, A.Db)(
                              (0, E.Z)(function () {
                                return (0, z.__generator)(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return (
                                        s(),
                                        [
                                          4,
                                          navigator.clipboard.writeText(
                                            ''.concat(W.f7, '/user/').concat(r)
                                          )
                                        ]
                                      );
                                    case 1:
                                      return (
                                        e.sent(),
                                        D.Am.success('Copied to clipboard'),
                                        [2]
                                      );
                                  }
                                });
                              })
                            ),
                            children: [
                              (0, i.jsx)(j.e, { iconName: 'LinkIcon' }),
                              'Copy link to Profile'
                            ]
                          })
                        }
                      )
                    )
                })
              ]
            });
          }
        });
      }
      function $(e) {
        var r = e.children,
          a = (0, s.aC)(),
          u = a.user,
          m = a.isAdmin,
          p = (0, c.aF)(),
          x = p.user,
          b = p.loading,
          f = (0, o.useRouter)().query.id,
          k = (null == x ? void 0 : x.coverPhotoURL)
            ? { src: x.coverPhotoURL, alt: x.name }
            : null,
          w = x ? { src: x.photoURL, alt: x.name } : null,
          N = (null != u ? u : {}).id,
          L = (null == x ? void 0 : x.id) === N;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            x &&
              (0, i.jsx)(d.H, {
                title: ''.concat(
                  ''.concat(x.name, ' (@').concat(x.username, ')'),
                  ' / Twitter'
                )
              }),
            (0, i.jsx)(
              l.E.section,
              (0, n.Z)((0, t.Z)({}, F.o), {
                exit: void 0,
                children: b
                  ? (0, i.jsx)(P.g, { className: 'mt-5' })
                  : x
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(g, { coverData: k }),
                        (0, i.jsxs)('div', {
                          className: 'relative flex flex-col gap-3 px-4 py-3',
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'flex justify-between',
                              children: [
                                (0, i.jsx)(v, { profileData: w }),
                                L
                                  ? (0, i.jsx)(V, {})
                                  : (0, i.jsxs)('div', {
                                      className: 'flex gap-2 self-start',
                                      children: [
                                        (0, i.jsx)(G, { username: x.username }),
                                        (0, i.jsxs)(h.z, {
                                          className:
                                            'dark-bg-tab group relative cursor-not-allowed border border-light-line-reply p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20',
                                          children: [
                                            (0, i.jsx)(j.e, {
                                              className: 'h-5 w-5',
                                              iconName: 'EnvelopeIcon'
                                            }),
                                            (0, i.jsx)(y.e, { tip: 'Message' })
                                          ]
                                        }),
                                        (0, i.jsx)(M.e, {
                                          userTargetId: x.id,
                                          userTargetUsername: x.username
                                        }),
                                        m && (0, i.jsx)(V, { hide: !0 })
                                      ]
                                    })
                              ]
                            }),
                            (0, i.jsx)(C, (0, t.Z)({}, x))
                          ]
                        })
                      ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(g, {}),
                        (0, i.jsxs)('div', {
                          className: 'flex flex-col gap-8',
                          children: [
                            (0, i.jsxs)('div', {
                              className:
                                'relative flex flex-col gap-3 px-4 py-3',
                              children: [
                                (0, i.jsx)(v, {}),
                                (0, i.jsxs)('p', {
                                  className: 'text-xl font-bold',
                                  children: ['@', f]
                                })
                              ]
                            }),
                            (0, i.jsxs)('div', {
                              className: 'p-8 text-center',
                              children: [
                                (0, i.jsx)('p', {
                                  className: 'text-3xl font-bold',
                                  children: 'This account doesn’t exist'
                                }),
                                (0, i.jsx)('p', {
                                  className:
                                    'text-light-secondary dark:text-dark-secondary',
                                  children: 'Try searching for another.'
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
              })
            ),
            x && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(I.T, {}), r] })
          ]
        });
      }
    },
    9186: function (e, r, a) {
      a.d(r, {
        T: function () {
          return p;
        }
      });
      var t = a(6042),
        n = a(9396),
        i = a(5893),
        o = a(3136),
        l = a(6010),
        s = a(8162),
        c = a(1163),
        d = a(1664),
        u = a.n(d);
      function h(e) {
        var r = e.name,
          a = e.path,
          t = (0, c.useRouter)(),
          n = t.asPath,
          o = t.query.id,
          s = '/user/'.concat(o).concat(a ? '/'.concat(a) : '');
        return (0, i.jsx)(u(), {
          href: s,
          scroll: !1,
          children: (0, i.jsx)('a', {
            className:
              'hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10',
            children: (0, i.jsx)('div', {
              className: 'px-6 md:px-8',
              children: (0, i.jsxs)('p', {
                className: (0, l.Z)(
                  'flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200',
                  n === s
                    ? 'text-light-primary dark:text-dark-primary [&>i]:scale-100 [&>i]:opacity-100'
                    : 'text-light-secondary dark:text-dark-secondary'
                ),
                children: [
                  r,
                  (0, i.jsx)('i', {
                    className:
                      'h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200'
                  })
                ]
              })
            })
          })
        });
      }
      var m = [
        [
          { name: 'Tweets', path: '' },
          { name: 'Tweets & replies', path: 'with_replies' },
          { name: 'Media', path: 'media' },
          { name: 'Likes', path: 'likes' }
        ],
        [
          { name: 'Following', path: 'following' },
          { name: 'Followers', path: 'followers' }
        ]
      ];
      function p(e) {
        var r = e.follow,
          a = m[+!!r];
        return (0, i.jsx)(
          o.E.nav,
          (0, n.Z)(
            (0, t.Z)(
              {
                className: (0, l.Z)(
                  'hover-animation flex justify-between overflow-y-auto\n         border-b border-light-border dark:border-dark-border',
                  r && 'mt-1 mb-0.5'
                )
              },
              s.o
            ),
            {
              exit: void 0,
              children: a.map(function (e) {
                var r = e.name,
                  a = e.path;
                return (0, i.jsx)(h, { name: r, path: a }, r);
              })
            }
          )
        );
      }
    }
  }
]);
