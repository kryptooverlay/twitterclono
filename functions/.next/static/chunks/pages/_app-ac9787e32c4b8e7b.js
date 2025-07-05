(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    4444: function (e, t, n) {
      'use strict';
      n.d(t, {
        BH: function () {
          return S;
        },
        L: function () {
          return l;
        },
        LL: function () {
          return R;
        },
        P0: function () {
          return I;
        },
        Pz: function () {
          return k;
        },
        Sg: function () {
          return C;
        },
        UG: function () {
          return d;
        },
        ZR: function () {
          return A;
        },
        aH: function () {
          return E;
        },
        b$: function () {
          return p;
        },
        eu: function () {
          return y;
        },
        hl: function () {
          return g;
        },
        m9: function () {
          return V;
        },
        ne: function () {
          return M;
        },
        pd: function () {
          return x;
        },
        q4: function () {
          return T;
        },
        ru: function () {
          return f;
        },
        tV: function () {
          return u;
        },
        uI: function () {
          return c;
        },
        vZ: function () {
          return function e(t, n) {
            if (t === n) return !0;
            let r = Object.keys(t),
              i = Object.keys(n);
            for (let s of r) {
              if (!i.includes(s)) return !1;
              let a = t[s],
                o = n[s];
              if (O(a) && O(o)) {
                if (!e(a, o)) return !1;
              } else if (a !== o) return !1;
            }
            for (let l of i) if (!r.includes(l)) return !1;
            return !0;
          };
        },
        w1: function () {
          return m;
        },
        xO: function () {
          return L;
        },
        xb: function () {
          return D;
        },
        z$: function () {
          return h;
        },
        zd: function () {
          return P;
        }
      });
      var r = n(3454);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let i = function (e) {
          let t = [],
            n = 0;
          for (let r = 0; r < e.length; r++) {
            let i = e.charCodeAt(r);
            i < 128
              ? (t[n++] = i)
              : i < 2048
              ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
              : (64512 & i) == 55296 &&
                r + 1 < e.length &&
                (64512 & e.charCodeAt(r + 1)) == 56320
              ? ((i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
                (t[n++] = (i >> 18) | 240),
                (t[n++] = ((i >> 12) & 63) | 128),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128))
              : ((t[n++] = (i >> 12) | 224),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128));
          }
          return t;
        },
        s = function (e) {
          let t = [],
            n = 0,
            r = 0;
          for (; n < e.length; ) {
            let i = e[n++];
            if (i < 128) t[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
              let s = e[n++];
              t[r++] = String.fromCharCode(((31 & i) << 6) | (63 & s));
            } else if (i > 239 && i < 365) {
              let a = e[n++],
                o = e[n++],
                l = e[n++],
                u =
                  (((7 & i) << 18) |
                    ((63 & a) << 12) |
                    ((63 & o) << 6) |
                    (63 & l)) -
                  65536;
              (t[r++] = String.fromCharCode(55296 + (u >> 10))),
                (t[r++] = String.fromCharCode(56320 + (1023 & u)));
            } else {
              let h = e[n++],
                c = e[n++];
              t[r++] = String.fromCharCode(
                ((15 & i) << 12) | ((63 & h) << 6) | (63 & c)
              );
            }
          }
          return t.join('');
        },
        a = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + '+/=';
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + '-_.';
          },
          HAS_NATIVE_SUPPORT: 'function' == typeof atob,
          encodeByteArray(e, t) {
            if (!Array.isArray(e))
              throw Error('encodeByteArray takes an array as a parameter');
            this.init_();
            let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [];
            for (let i = 0; i < e.length; i += 3) {
              let s = e[i],
                a = i + 1 < e.length,
                o = a ? e[i + 1] : 0,
                l = i + 2 < e.length,
                u = l ? e[i + 2] : 0,
                h = s >> 2,
                c = ((3 & s) << 4) | (o >> 4),
                d = ((15 & o) << 2) | (u >> 6),
                f = 63 & u;
              l || ((f = 64), a || (d = 64)), r.push(n[h], n[c], n[d], n[f]);
            }
            return r.join('');
          },
          encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(i(e), t);
          },
          decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : s(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray(e, t) {
            this.init_();
            let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [];
            for (let i = 0; i < e.length; ) {
              let s = n[e.charAt(i++)],
                a = i < e.length,
                o = a ? n[e.charAt(i)] : 0;
              ++i;
              let l = i < e.length,
                u = l ? n[e.charAt(i)] : 64;
              ++i;
              let h = i < e.length,
                c = h ? n[e.charAt(i)] : 64;
              if ((++i, null == s || null == o || null == u || null == c))
                throw Error();
              let d = (s << 2) | (o >> 4);
              if ((r.push(d), 64 !== u)) {
                let f = ((o << 4) & 240) | (u >> 2);
                if ((r.push(f), 64 !== c)) {
                  let p = ((u << 6) & 192) | c;
                  r.push(p);
                }
              }
            }
            return r;
          },
          init_() {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          }
        },
        o = function (e) {
          let t = i(e);
          return a.encodeByteArray(t, !0);
        },
        l = function (e) {
          return o(e).replace(/\./g, '');
        },
        u = function (e) {
          try {
            return a.decodeString(e, !0);
          } catch (t) {
            console.error('base64Decode failed: ', t);
          }
          return null;
        };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function h() {
        return 'undefined' != typeof navigator &&
          'string' == typeof navigator.userAgent
          ? navigator.userAgent
          : '';
      }
      function c() {
        return (
          'undefined' != typeof window &&
          !!(window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())
        );
      }
      function d() {
        try {
          return (
            '[object process]' === Object.prototype.toString.call(n.g.process)
          );
        } catch (e) {
          return !1;
        }
      }
      function f() {
        let e =
          'object' == typeof chrome
            ? chrome.runtime
            : 'object' == typeof browser
            ? browser.runtime
            : void 0;
        return 'object' == typeof e && void 0 !== e.id;
      }
      function p() {
        return (
          'object' == typeof navigator && 'ReactNative' === navigator.product
        );
      }
      function m() {
        let e = h();
        return e.indexOf('MSIE ') >= 0 || e.indexOf('Trident/') >= 0;
      }
      function g() {
        return 'object' == typeof indexedDB;
      }
      function y() {
        return new Promise((e, t) => {
          try {
            let n = !0,
              r = 'validate-browser-context-for-indexeddb-analytics-module',
              i = self.indexedDB.open(r);
            (i.onsuccess = () => {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (i.onupgradeneeded = () => {
                n = !1;
              }),
              (i.onerror = () => {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ''
                );
              });
          } catch (s) {
            t(s);
          }
        });
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let v = () =>
          (function () {
            if ('undefined' != typeof self) return self;
            if ('undefined' != typeof window) return window;
            if (void 0 !== n.g) return n.g;
            throw Error('Unable to locate global object.');
          })().__FIREBASE_DEFAULTS__,
        w = () => {
          if (void 0 === r || void 0 === r.env) return;
          let e = r.env.__FIREBASE_DEFAULTS__;
          if (e) return JSON.parse(e);
        },
        _ = () => {
          if ('undefined' == typeof document) return;
          let e;
          try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (t) {
            return;
          }
          let n = e && u(e[1]);
          return n && JSON.parse(n);
        },
        b = () => {
          try {
            return v() || w() || _();
          } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return;
          }
        },
        T = (e) => {
          var t, n;
          return null ===
            (n =
              null === (t = b()) || void 0 === t ? void 0 : t.emulatorHosts) ||
            void 0 === n
            ? void 0
            : n[e];
        },
        I = (e) => {
          let t = T(e);
          if (!t) return;
          let n = t.lastIndexOf(':');
          if (n <= 0 || n + 1 === t.length)
            throw Error(
              `Invalid host ${t} with no separate hostname and port!`
            );
          let r = parseInt(t.substring(n + 1), 10);
          return '[' === t[0]
            ? [t.substring(1, n - 1), r]
            : [t.substring(0, n), r];
        },
        E = () => {
          var e;
          return null === (e = b()) || void 0 === e ? void 0 : e.config;
        },
        k = (e) => {
          var t;
          return null === (t = b()) || void 0 === t ? void 0 : t[`_${e}`];
        };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class S {
        constructor() {
          (this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        wrapCallback(e) {
          return (t, n) => {
            t ? this.reject(t) : this.resolve(n),
              'function' == typeof e &&
                (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n));
          };
        }
      }
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function C(e, t) {
        if (e.uid)
          throw Error(
            'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
          );
        let n = t || 'demo-project',
          r = e.iat || 0,
          i = e.sub || e.user_id;
        if (!i)
          throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
        let s = Object.assign(
          {
            iss: `https://securetoken.google.com/${n}`,
            aud: n,
            iat: r,
            exp: r + 3600,
            auth_time: r,
            sub: i,
            user_id: i,
            firebase: { sign_in_provider: 'custom', identities: {} }
          },
          e
        );
        return [
          l(JSON.stringify({ alg: 'none', type: 'JWT' })),
          l(JSON.stringify(s)),
          ''
        ].join('.');
      }
      class A extends Error {
        constructor(e, t, n) {
          super(t),
            (this.code = e),
            (this.customData = n),
            (this.name = 'FirebaseError'),
            Object.setPrototypeOf(this, A.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, R.prototype.create);
        }
      }
      class R {
        constructor(e, t, n) {
          (this.service = e), (this.serviceName = t), (this.errors = n);
        }
        create(e, ...t) {
          var n, r;
          let i = t[0] || {},
            s = `${this.service}/${e}`,
            a = this.errors[e],
            o = a
              ? ((n = a),
                (r = i),
                n.replace(N, (e, t) => {
                  let n = r[t];
                  return null != n ? String(n) : `<${t}?>`;
                }))
              : 'Error',
            l = `${this.serviceName}: ${o} (${s}).`,
            u = new A(s, l, i);
          return u;
        }
      }
      let N = /\{\$([^}]+)}/g;
      function D(e) {
        for (let t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function O(e) {
        return null !== e && 'object' == typeof e;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function L(e) {
        let t = [];
        for (let [n, r] of Object.entries(e))
          Array.isArray(r)
            ? r.forEach((e) => {
                t.push(encodeURIComponent(n) + '=' + encodeURIComponent(e));
              })
            : t.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
        return t.length ? '&' + t.join('&') : '';
      }
      function P(e) {
        let t = {},
          n = e.replace(/^\?/, '').split('&');
        return (
          n.forEach((e) => {
            if (e) {
              let [n, r] = e.split('=');
              t[decodeURIComponent(n)] = decodeURIComponent(r);
            }
          }),
          t
        );
      }
      function x(e) {
        let t = e.indexOf('?');
        if (!t) return '';
        let n = e.indexOf('#', t);
        return e.substring(t, n > 0 ? n : void 0);
      }
      function M(e, t) {
        let n = new U(e, t);
        return n.subscribe.bind(n);
      }
      class U {
        constructor(e, t) {
          (this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = t),
            this.task
              .then(() => {
                e(this);
              })
              .catch((e) => {
                this.error(e);
              });
        }
        next(e) {
          this.forEachObserver((t) => {
            t.next(e);
          });
        }
        error(e) {
          this.forEachObserver((t) => {
            t.error(e);
          }),
            this.close(e);
        }
        complete() {
          this.forEachObserver((e) => {
            e.complete();
          }),
            this.close();
        }
        subscribe(e, t, n) {
          let r;
          if (void 0 === e && void 0 === t && void 0 === n)
            throw Error('Missing Observer.');
          void 0 ===
            (r = !(function (e, t) {
              if ('object' != typeof e || null === e) return !1;
              for (let n of t)
                if (n in e && 'function' == typeof e[n]) return !0;
              return !1;
            })(e, ['next', 'error', 'complete'])
              ? { next: e, error: t, complete: n }
              : e).next && (r.next = F),
            void 0 === r.error && (r.error = F),
            void 0 === r.complete && (r.complete = F);
          let i = this.unsubscribeOne.bind(this, this.observers.length);
          return (
            this.finalized &&
              this.task.then(() => {
                try {
                  this.finalError ? r.error(this.finalError) : r.complete();
                } catch (e) {}
              }),
            this.observers.push(r),
            i
          );
        }
        unsubscribeOne(e) {
          void 0 !== this.observers &&
            void 0 !== this.observers[e] &&
            (delete this.observers[e],
            (this.observerCount -= 1),
            0 === this.observerCount &&
              void 0 !== this.onNoObservers &&
              this.onNoObservers(this));
        }
        forEachObserver(e) {
          if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
        }
        sendOne(e, t) {
          this.task.then(() => {
            if (void 0 !== this.observers && void 0 !== this.observers[e])
              try {
                t(this.observers[e]);
              } catch (n) {
                'undefined' != typeof console &&
                  console.error &&
                  console.error(n);
              }
          });
        }
        close(e) {
          !this.finalized &&
            ((this.finalized = !0),
            void 0 !== e && (this.finalError = e),
            this.task.then(() => {
              (this.observers = void 0), (this.onNoObservers = void 0);
            }));
        }
      }
      function F() {}
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function V(e) {
        return e && e._delegate ? e._delegate : e;
      }
    },
    8006: function (e, t, n) {
      'use strict';
      n.d(t, {
        hJ: function () {
          return eU;
        },
        S$: function () {
          return em;
        },
        v0: function () {
          return tW;
        },
        Aj: function () {
          return eG;
        },
        rh: function () {
          return tm;
        },
        w7: function () {
          return eW;
        }
      });
      var r,
        i = n(4444),
        s = n(5816),
        a = n(3333),
        o = n(655),
        l = n(8463);
      function u() {
        return {
          'dependent-sdk-initialized-before-auth':
            'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.'
        };
      }
      let h = new i.LL('auth', 'Firebase', u()),
        c = new a.Yd('@firebase/auth');
      function d(e, ...t) {
        c.logLevel <= a.in.ERROR && c.error(`Auth (${s.Jn}): ${e}`, ...t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function f(e, ...t) {
        throw g(e, ...t);
      }
      function p(e, ...t) {
        return g(e, ...t);
      }
      function m(e, t, n) {
        let r = Object.assign(Object.assign({}, u()), { [t]: n }),
          s = new i.LL('auth', 'Firebase', r);
        return s.create(t, { appName: e.name });
      }
      function g(e, ...t) {
        if ('string' != typeof e) {
          let n = t[0],
            r = [...t.slice(1)];
          return (
            r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r)
          );
        }
        return h.create(e, ...t);
      }
      function y(e, t, ...n) {
        if (!e) throw g(t, ...n);
      }
      function v(e) {
        let t = 'INTERNAL ASSERTION FAILED: ' + e;
        throw (d(t), Error(t));
      }
      function w(e, t) {
        e || v(t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let _ = new Map();
      function b(e) {
        w(e instanceof Function, 'Expected a class definition');
        let t = _.get(e);
        return t
          ? (w(
              t instanceof e,
              'Instance stored in cache mismatched with class'
            ),
            t)
          : ((t = new e()), _.set(e, t), t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function T() {
        var e;
        return (
          ('undefined' != typeof self &&
            (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
          ''
        );
      }
      function I() {
        var e;
        return (
          ('undefined' != typeof self &&
            (null === (e = self.location) || void 0 === e
              ? void 0
              : e.protocol)) ||
          null
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class E {
        constructor(e, t) {
          (this.shortDelay = e),
            (this.longDelay = t),
            w(t > e, 'Short delay should be less than long delay!'),
            (this.isMobile = (0, i.uI)() || (0, i.b$)());
        }
        get() {
          return !(
            'undefined' != typeof navigator &&
            navigator &&
            'onLine' in navigator &&
            'boolean' == typeof navigator.onLine &&
            ('http:' === I() ||
              'https:' === I() ||
              (0, i.ru)() ||
              'connection' in navigator)
          ) || navigator.onLine
            ? this.isMobile
              ? this.longDelay
              : this.shortDelay
            : Math.min(5e3, this.shortDelay);
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function k(e, t) {
        w(e.emulator, 'Emulator should always be set here');
        let { url: n } = e.emulator;
        return t ? `${n}${t.startsWith('/') ? t.slice(1) : t}` : n;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class S {
        static initialize(e, t, n) {
          (this.fetchImpl = e),
            t && (this.headersImpl = t),
            n && (this.responseImpl = n);
        }
        static fetch() {
          return this.fetchImpl
            ? this.fetchImpl
            : 'undefined' != typeof self && 'fetch' in self
            ? self.fetch
            : void v(
                'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
              );
        }
        static headers() {
          return this.headersImpl
            ? this.headersImpl
            : 'undefined' != typeof self && 'Headers' in self
            ? self.Headers
            : void v(
                'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
              );
        }
        static response() {
          return this.responseImpl
            ? this.responseImpl
            : 'undefined' != typeof self && 'Response' in self
            ? self.Response
            : void v(
                'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
              );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let C = {
          CREDENTIAL_MISMATCH: 'custom-token-mismatch',
          MISSING_CUSTOM_TOKEN: 'internal-error',
          INVALID_IDENTIFIER: 'invalid-email',
          MISSING_CONTINUE_URI: 'internal-error',
          INVALID_PASSWORD: 'wrong-password',
          MISSING_PASSWORD: 'internal-error',
          EMAIL_EXISTS: 'email-already-in-use',
          PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
          INVALID_IDP_RESPONSE: 'invalid-credential',
          INVALID_PENDING_TOKEN: 'invalid-credential',
          FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
          MISSING_REQ_TYPE: 'internal-error',
          EMAIL_NOT_FOUND: 'user-not-found',
          RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
          EXPIRED_OOB_CODE: 'expired-action-code',
          INVALID_OOB_CODE: 'invalid-action-code',
          MISSING_OOB_CODE: 'internal-error',
          CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
          INVALID_ID_TOKEN: 'invalid-user-token',
          TOKEN_EXPIRED: 'user-token-expired',
          USER_NOT_FOUND: 'user-token-expired',
          TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
          INVALID_CODE: 'invalid-verification-code',
          INVALID_SESSION_INFO: 'invalid-verification-id',
          INVALID_TEMPORARY_PROOF: 'invalid-credential',
          MISSING_SESSION_INFO: 'missing-verification-id',
          SESSION_EXPIRED: 'code-expired',
          MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
          UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
          INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
          ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
          INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
          MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
          MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
          MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
          SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
          SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
          BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error'
        },
        A = new E(3e4, 6e4);
      function R(e, t) {
        return e.tenantId && !t.tenantId
          ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
          : t;
      }
      async function N(e, t, n, r, s = {}) {
        return D(e, s, async () => {
          let s = {},
            a = {};
          r && ('GET' === t ? (a = r) : (s = { body: JSON.stringify(r) }));
          let o = (0, i.xO)(Object.assign({ key: e.config.apiKey }, a)).slice(
              1
            ),
            l = await e._getAdditionalHeaders();
          return (
            (l['Content-Type'] = 'application/json'),
            e.languageCode && (l['X-Firebase-Locale'] = e.languageCode),
            S.fetch()(
              L(e, e.config.apiHost, n, o),
              Object.assign(
                { method: t, headers: l, referrerPolicy: 'no-referrer' },
                s
              )
            )
          );
        });
      }
      async function D(e, t, n) {
        e._canInitEmulator = !1;
        let r = Object.assign(Object.assign({}, C), t);
        try {
          let s = new P(e),
            a = await Promise.race([n(), s.promise]);
          s.clearNetworkTimeout();
          let o = await a.json();
          if ('needConfirmation' in o)
            throw x(e, 'account-exists-with-different-credential', o);
          if (a.ok && !('errorMessage' in o)) return o;
          {
            let l = a.ok ? o.errorMessage : o.error.message,
              [u, h] = l.split(' : ');
            if ('FEDERATED_USER_ID_ALREADY_LINKED' === u)
              throw x(e, 'credential-already-in-use', o);
            if ('EMAIL_EXISTS' === u) throw x(e, 'email-already-in-use', o);
            if ('USER_DISABLED' === u) throw x(e, 'user-disabled', o);
            let c = r[u] || u.toLowerCase().replace(/[_\s]+/g, '-');
            if (h) throw m(e, c, h);
            f(e, c);
          }
        } catch (d) {
          if (d instanceof i.ZR) throw d;
          f(e, 'network-request-failed');
        }
      }
      async function O(e, t, n, r, i = {}) {
        let s = await N(e, t, n, r, i);
        return (
          'mfaPendingCredential' in s &&
            f(e, 'multi-factor-auth-required', { _serverResponse: s }),
          s
        );
      }
      function L(e, t, n, r) {
        let i = `${t}${n}?${r}`;
        return e.config.emulator
          ? k(e.config, i)
          : `${e.config.apiScheme}://${i}`;
      }
      class P {
        constructor(e) {
          (this.auth = e),
            (this.timer = null),
            (this.promise = new Promise((e, t) => {
              this.timer = setTimeout(
                () => t(p(this.auth, 'network-request-failed')),
                A.get()
              );
            }));
        }
        clearNetworkTimeout() {
          clearTimeout(this.timer);
        }
      }
      function x(e, t, n) {
        let r = { appName: e.name };
        n.email && (r.email = n.email),
          n.phoneNumber && (r.phoneNumber = n.phoneNumber);
        let i = p(e, t, r);
        return (i.customData._tokenResponse = n), i;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function M(e, t) {
        return N(e, 'POST', '/v1/accounts:delete', t);
      }
      async function U(e, t) {
        return N(e, 'POST', '/v1/accounts:lookup', t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function F(e) {
        if (e)
          try {
            let t = new Date(Number(e));
            if (!isNaN(t.getTime())) return t.toUTCString();
          } catch (n) {}
      }
      async function V(e, t = !1) {
        let n = (0, i.m9)(e),
          r = await n.getIdToken(t),
          s = j(r);
        y(s && s.exp && s.auth_time && s.iat, n.auth, 'internal-error');
        let a = 'object' == typeof s.firebase ? s.firebase : void 0,
          o = null == a ? void 0 : a.sign_in_provider;
        return {
          claims: s,
          token: r,
          authTime: F(B(s.auth_time)),
          issuedAtTime: F(B(s.iat)),
          expirationTime: F(B(s.exp)),
          signInProvider: o || null,
          signInSecondFactor:
            (null == a ? void 0 : a.sign_in_second_factor) || null
        };
      }
      function B(e) {
        return 1e3 * Number(e);
      }
      function j(e) {
        var t;
        let [n, r, s] = e.split('.');
        if (void 0 === n || void 0 === r || void 0 === s)
          return d('JWT malformed, contained fewer than 3 sections'), null;
        try {
          let a = (0, i.tV)(r);
          if (!a) return d('Failed to decode base64 JWT payload'), null;
          return JSON.parse(a);
        } catch (o) {
          return (
            d(
              'Caught error parsing JWT payload as JSON',
              null === (t = o) || void 0 === t ? void 0 : t.toString()
            ),
            null
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function q(e, t, n = !1) {
        if (n) return t;
        try {
          return await t;
        } catch (r) {
          throw (
            (r instanceof i.ZR &&
              (function ({ code: e }) {
                return (
                  'auth/user-disabled' === e || 'auth/user-token-expired' === e
                );
              })(r) &&
              e.auth.currentUser === e &&
              (await e.auth.signOut()),
            r)
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class $ {
        constructor(e) {
          (this.user = e),
            (this.isRunning = !1),
            (this.timerId = null),
            (this.errorBackoff = 3e4);
        }
        _start() {
          !this.isRunning && ((this.isRunning = !0), this.schedule());
        }
        _stop() {
          this.isRunning &&
            ((this.isRunning = !1),
            null !== this.timerId && clearTimeout(this.timerId));
        }
        getInterval(e) {
          var t;
          if (e) {
            let n = this.errorBackoff;
            return (
              (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), n
            );
          }
          {
            this.errorBackoff = 3e4;
            let r =
                null !== (t = this.user.stsTokenManager.expirationTime) &&
                void 0 !== t
                  ? t
                  : 0,
              i = r - Date.now() - 3e5;
            return Math.max(0, i);
          }
        }
        schedule(e = !1) {
          if (!this.isRunning) return;
          let t = this.getInterval(e);
          this.timerId = setTimeout(async () => {
            await this.iteration();
          }, t);
        }
        async iteration() {
          var e;
          try {
            await this.user.getIdToken(!0);
          } catch (t) {
            (null === (e = t) || void 0 === e ? void 0 : e.code) ===
              'auth/network-request-failed' && this.schedule(!0);
            return;
          }
          this.schedule();
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class z {
        constructor(e, t) {
          (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
        }
        _initializeTime() {
          (this.lastSignInTime = F(this.lastLoginAt)),
            (this.creationTime = F(this.createdAt));
        }
        _copy(e) {
          (this.createdAt = e.createdAt),
            (this.lastLoginAt = e.lastLoginAt),
            this._initializeTime();
        }
        toJSON() {
          return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function H(e) {
        var t, n;
        let r = e.auth,
          i = await e.getIdToken(),
          s = await q(e, U(r, { idToken: i }));
        y(null == s ? void 0 : s.users.length, r, 'internal-error');
        let a = s.users[0];
        e._notifyReloadListener(a);
        let l = (
            null === (t = a.providerUserInfo) || void 0 === t
              ? void 0
              : t.length
          )
            ? ((n = a.providerUserInfo),
              n.map((e) => {
                var { providerId: t } = e,
                  n = (0, o.__rest)(e, ['providerId']);
                return {
                  providerId: t,
                  uid: n.rawId || '',
                  displayName: n.displayName || null,
                  email: n.email || null,
                  phoneNumber: n.phoneNumber || null,
                  photoURL: n.photoUrl || null
                };
              }))
            : [],
          u = (function (e, t) {
            let n = e.filter(
              (e) => !t.some((t) => t.providerId === e.providerId)
            );
            return [...n, ...t];
          })(e.providerData, l),
          h = e.isAnonymous,
          c = !(e.email && a.passwordHash) && !(null == u ? void 0 : u.length),
          d = {
            uid: a.localId,
            displayName: a.displayName || null,
            photoURL: a.photoUrl || null,
            email: a.email || null,
            emailVerified: a.emailVerified || !1,
            phoneNumber: a.phoneNumber || null,
            tenantId: a.tenantId || null,
            providerData: u,
            metadata: new z(a.createdAt, a.lastLoginAt),
            isAnonymous: !!h && c
          };
        Object.assign(e, d);
      }
      async function K(e) {
        let t = (0, i.m9)(e);
        await H(t),
          await t.auth._persistUserIfCurrent(t),
          t.auth._notifyListenersIfCurrent(t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function G(e, t) {
        let n = await D(e, {}, async () => {
          let n = (0, i.xO)({
              grant_type: 'refresh_token',
              refresh_token: t
            }).slice(1),
            { tokenApiHost: r, apiKey: s } = e.config,
            a = L(e, r, '/v1/token', `key=${s}`),
            o = await e._getAdditionalHeaders();
          return (
            (o['Content-Type'] = 'application/x-www-form-urlencoded'),
            S.fetch()(a, { method: 'POST', headers: o, body: n })
          );
        });
        return {
          accessToken: n.access_token,
          expiresIn: n.expires_in,
          refreshToken: n.refresh_token
        };
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class W {
        constructor() {
          (this.refreshToken = null),
            (this.accessToken = null),
            (this.expirationTime = null);
        }
        get isExpired() {
          return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
        }
        updateFromServerResponse(e) {
          y(e.idToken, 'internal-error'),
            y(void 0 !== e.idToken, 'internal-error'),
            y(void 0 !== e.refreshToken, 'internal-error');
          let t =
            'expiresIn' in e && void 0 !== e.expiresIn
              ? Number(e.expiresIn)
              : (function (e) {
                  let t = j(e);
                  return (
                    y(t, 'internal-error'),
                    y(void 0 !== t.exp, 'internal-error'),
                    y(void 0 !== t.iat, 'internal-error'),
                    Number(t.exp) - Number(t.iat)
                  );
                })(e.idToken);
          this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
        }
        async getToken(e, t = !1) {
          return (y(
            !this.accessToken || this.refreshToken,
            e,
            'user-token-expired'
          ),
          t || !this.accessToken || this.isExpired)
            ? this.refreshToken
              ? (await this.refresh(e, this.refreshToken), this.accessToken)
              : null
            : this.accessToken;
        }
        clearRefreshToken() {
          this.refreshToken = null;
        }
        async refresh(e, t) {
          let { accessToken: n, refreshToken: r, expiresIn: i } = await G(e, t);
          this.updateTokensAndExpiration(n, r, Number(i));
        }
        updateTokensAndExpiration(e, t, n) {
          (this.refreshToken = t || null),
            (this.accessToken = e || null),
            (this.expirationTime = Date.now() + 1e3 * n);
        }
        static fromJSON(e, t) {
          let { refreshToken: n, accessToken: r, expirationTime: i } = t,
            s = new W();
          return (
            n &&
              (y('string' == typeof n, 'internal-error', { appName: e }),
              (s.refreshToken = n)),
            r &&
              (y('string' == typeof r, 'internal-error', { appName: e }),
              (s.accessToken = r)),
            i &&
              (y('number' == typeof i, 'internal-error', { appName: e }),
              (s.expirationTime = i)),
            s
          );
        }
        toJSON() {
          return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
          };
        }
        _assign(e) {
          (this.accessToken = e.accessToken),
            (this.refreshToken = e.refreshToken),
            (this.expirationTime = e.expirationTime);
        }
        _clone() {
          return Object.assign(new W(), this.toJSON());
        }
        _performRefresh() {
          return v('not implemented');
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function Q(e, t) {
        y('string' == typeof e || void 0 === e, 'internal-error', {
          appName: t
        });
      }
      class X {
        constructor(e) {
          var { uid: t, auth: n, stsTokenManager: r } = e,
            i = (0, o.__rest)(e, ['uid', 'auth', 'stsTokenManager']);
          (this.providerId = 'firebase'),
            (this.proactiveRefresh = new $(this)),
            (this.reloadUserInfo = null),
            (this.reloadListener = null),
            (this.uid = t),
            (this.auth = n),
            (this.stsTokenManager = r),
            (this.accessToken = r.accessToken),
            (this.displayName = i.displayName || null),
            (this.email = i.email || null),
            (this.emailVerified = i.emailVerified || !1),
            (this.phoneNumber = i.phoneNumber || null),
            (this.photoURL = i.photoURL || null),
            (this.isAnonymous = i.isAnonymous || !1),
            (this.tenantId = i.tenantId || null),
            (this.providerData = i.providerData ? [...i.providerData] : []),
            (this.metadata = new z(
              i.createdAt || void 0,
              i.lastLoginAt || void 0
            ));
        }
        async getIdToken(e) {
          let t = await q(this, this.stsTokenManager.getToken(this.auth, e));
          return (
            y(t, this.auth, 'internal-error'),
            this.accessToken !== t &&
              ((this.accessToken = t),
              await this.auth._persistUserIfCurrent(this),
              this.auth._notifyListenersIfCurrent(this)),
            t
          );
        }
        getIdTokenResult(e) {
          return V(this, e);
        }
        reload() {
          return K(this);
        }
        _assign(e) {
          this !== e &&
            (y(this.uid === e.uid, this.auth, 'internal-error'),
            (this.displayName = e.displayName),
            (this.photoURL = e.photoURL),
            (this.email = e.email),
            (this.emailVerified = e.emailVerified),
            (this.phoneNumber = e.phoneNumber),
            (this.isAnonymous = e.isAnonymous),
            (this.tenantId = e.tenantId),
            (this.providerData = e.providerData.map((e) =>
              Object.assign({}, e)
            )),
            this.metadata._copy(e.metadata),
            this.stsTokenManager._assign(e.stsTokenManager));
        }
        _clone(e) {
          return new X(
            Object.assign(Object.assign({}, this), {
              auth: e,
              stsTokenManager: this.stsTokenManager._clone()
            })
          );
        }
        _onReload(e) {
          y(!this.reloadListener, this.auth, 'internal-error'),
            (this.reloadListener = e),
            this.reloadUserInfo &&
              (this._notifyReloadListener(this.reloadUserInfo),
              (this.reloadUserInfo = null));
        }
        _notifyReloadListener(e) {
          this.reloadListener
            ? this.reloadListener(e)
            : (this.reloadUserInfo = e);
        }
        _startProactiveRefresh() {
          this.proactiveRefresh._start();
        }
        _stopProactiveRefresh() {
          this.proactiveRefresh._stop();
        }
        async _updateTokensIfNecessary(e, t = !1) {
          let n = !1;
          e.idToken &&
            e.idToken !== this.stsTokenManager.accessToken &&
            (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
            t && (await H(this)),
            await this.auth._persistUserIfCurrent(this),
            n && this.auth._notifyListenersIfCurrent(this);
        }
        async delete() {
          let e = await this.getIdToken();
          return (
            await q(this, M(this.auth, { idToken: e })),
            this.stsTokenManager.clearRefreshToken(),
            this.auth.signOut()
          );
        }
        toJSON() {
          return Object.assign(
            Object.assign(
              {
                uid: this.uid,
                email: this.email || void 0,
                emailVerified: this.emailVerified,
                displayName: this.displayName || void 0,
                isAnonymous: this.isAnonymous,
                photoURL: this.photoURL || void 0,
                phoneNumber: this.phoneNumber || void 0,
                tenantId: this.tenantId || void 0,
                providerData: this.providerData.map((e) =>
                  Object.assign({}, e)
                ),
                stsTokenManager: this.stsTokenManager.toJSON(),
                _redirectEventId: this._redirectEventId
              },
              this.metadata.toJSON()
            ),
            { apiKey: this.auth.config.apiKey, appName: this.auth.name }
          );
        }
        get refreshToken() {
          return this.stsTokenManager.refreshToken || '';
        }
        static _fromJSON(e, t) {
          var n, r, i, s, a, o, l, u;
          let h = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
            c = null !== (r = t.email) && void 0 !== r ? r : void 0,
            d = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
            f = null !== (s = t.photoURL) && void 0 !== s ? s : void 0,
            p = null !== (a = t.tenantId) && void 0 !== a ? a : void 0,
            m = null !== (o = t._redirectEventId) && void 0 !== o ? o : void 0,
            g = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
            v = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
            {
              uid: w,
              emailVerified: _,
              isAnonymous: b,
              providerData: T,
              stsTokenManager: I
            } = t;
          y(w && I, e, 'internal-error');
          let E = W.fromJSON(this.name, I);
          y('string' == typeof w, e, 'internal-error'),
            Q(h, e.name),
            Q(c, e.name),
            y('boolean' == typeof _, e, 'internal-error'),
            y('boolean' == typeof b, e, 'internal-error'),
            Q(d, e.name),
            Q(f, e.name),
            Q(p, e.name),
            Q(m, e.name),
            Q(g, e.name),
            Q(v, e.name);
          let k = new X({
            uid: w,
            auth: e,
            email: c,
            emailVerified: _,
            displayName: h,
            isAnonymous: b,
            photoURL: f,
            phoneNumber: d,
            tenantId: p,
            stsTokenManager: E,
            createdAt: g,
            lastLoginAt: v
          });
          return (
            T &&
              Array.isArray(T) &&
              (k.providerData = T.map((e) => Object.assign({}, e))),
            m && (k._redirectEventId = m),
            k
          );
        }
        static async _fromIdTokenResponse(e, t, n = !1) {
          let r = new W();
          r.updateFromServerResponse(t);
          let i = new X({
            uid: t.localId,
            auth: e,
            stsTokenManager: r,
            isAnonymous: n
          });
          return await H(i), i;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class J {
        constructor() {
          (this.type = 'NONE'), (this.storage = {});
        }
        async _isAvailable() {
          return !0;
        }
        async _set(e, t) {
          this.storage[e] = t;
        }
        async _get(e) {
          let t = this.storage[e];
          return void 0 === t ? null : t;
        }
        async _remove(e) {
          delete this.storage[e];
        }
        _addListener(e, t) {}
        _removeListener(e, t) {}
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function Y(e, t, n) {
        return `firebase:${e}:${t}:${n}`;
      }
      J.type = 'NONE';
      class Z {
        constructor(e, t, n) {
          (this.persistence = e), (this.auth = t), (this.userKey = n);
          let { config: r, name: i } = this.auth;
          (this.fullUserKey = Y(this.userKey, r.apiKey, i)),
            (this.fullPersistenceKey = Y('persistence', r.apiKey, i)),
            (this.boundEventHandler = t._onStorageEvent.bind(t)),
            this.persistence._addListener(
              this.fullUserKey,
              this.boundEventHandler
            );
        }
        setCurrentUser(e) {
          return this.persistence._set(this.fullUserKey, e.toJSON());
        }
        async getCurrentUser() {
          let e = await this.persistence._get(this.fullUserKey);
          return e ? X._fromJSON(this.auth, e) : null;
        }
        removeCurrentUser() {
          return this.persistence._remove(this.fullUserKey);
        }
        savePersistenceForRedirect() {
          return this.persistence._set(
            this.fullPersistenceKey,
            this.persistence.type
          );
        }
        async setPersistence(e) {
          if (this.persistence === e) return;
          let t = await this.getCurrentUser();
          if ((await this.removeCurrentUser(), (this.persistence = e), t))
            return this.setCurrentUser(t);
        }
        delete() {
          this.persistence._removeListener(
            this.fullUserKey,
            this.boundEventHandler
          );
        }
        static async create(e, t, n = 'authUser') {
          if (!t.length) return new Z(b(J), e, n);
          let r = (
              await Promise.all(
                t.map(async (e) => {
                  if (await e._isAvailable()) return e;
                })
              )
            ).filter((e) => e),
            i = r[0] || b(J),
            s = Y(n, e.config.apiKey, e.name),
            a = null;
          for (let o of t)
            try {
              let l = await o._get(s);
              if (l) {
                let u = X._fromJSON(e, l);
                o !== i && (a = u), (i = o);
                break;
              }
            } catch (h) {}
          let c = r.filter((e) => e._shouldAllowMigration);
          return (
            i._shouldAllowMigration &&
              c.length &&
              ((i = c[0]),
              a && (await i._set(s, a.toJSON())),
              await Promise.all(
                t.map(async (e) => {
                  if (e !== i)
                    try {
                      await e._remove(s);
                    } catch (t) {}
                })
              )),
            new Z(i, e, n)
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function ee(e) {
        let t = e.toLowerCase();
        if (t.includes('opera/') || t.includes('opr/') || t.includes('opios/'))
          return 'Opera';
        if (ei(t)) return 'IEMobile';
        if (t.includes('msie') || t.includes('trident/')) return 'IE';
        {
          if (t.includes('edge/')) return 'Edge';
          if (et(t)) return 'Firefox';
          if (t.includes('silk/')) return 'Silk';
          if (ea(t)) return 'Blackberry';
          if (eo(t)) return 'Webos';
          if (en(t)) return 'Safari';
          if ((t.includes('chrome/') || er(t)) && !t.includes('edge/'))
            return 'Chrome';
          if (es(t)) return 'Android';
          let n = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
          if ((null == n ? void 0 : n.length) === 2) return n[1];
        }
        return 'Other';
      }
      function et(e = (0, i.z$)()) {
        return /firefox\//i.test(e);
      }
      function en(e = (0, i.z$)()) {
        let t = e.toLowerCase();
        return (
          t.includes('safari/') &&
          !t.includes('chrome/') &&
          !t.includes('crios/') &&
          !t.includes('android')
        );
      }
      function er(e = (0, i.z$)()) {
        return /crios\//i.test(e);
      }
      function ei(e = (0, i.z$)()) {
        return /iemobile/i.test(e);
      }
      function es(e = (0, i.z$)()) {
        return /android/i.test(e);
      }
      function ea(e = (0, i.z$)()) {
        return /blackberry/i.test(e);
      }
      function eo(e = (0, i.z$)()) {
        return /webos/i.test(e);
      }
      function el(e = (0, i.z$)()) {
        return (
          /iphone|ipad|ipod/i.test(e) ||
          (/macintosh/i.test(e) && /mobile/i.test(e))
        );
      }
      function eu(e = (0, i.z$)()) {
        return (
          el(e) || es(e) || eo(e) || ea(e) || /windows phone/i.test(e) || ei(e)
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function eh(e, t = []) {
        let n;
        switch (e) {
          case 'Browser':
            n = ee((0, i.z$)());
            break;
          case 'Worker':
            n = `${ee((0, i.z$)())}-${e}`;
            break;
          default:
            n = e;
        }
        let r = t.length ? t.join(',') : 'FirebaseCore-web';
        return `${n}/JsCore/${s.Jn}/${r}`;
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ec {
        constructor(e) {
          (this.auth = e), (this.queue = []);
        }
        pushCallback(e, t) {
          let n = (t) =>
            new Promise((n, r) => {
              try {
                let i = e(t);
                n(i);
              } catch (s) {
                r(s);
              }
            });
          (n.onAbort = t), this.queue.push(n);
          let r = this.queue.length - 1;
          return () => {
            this.queue[r] = () => Promise.resolve();
          };
        }
        async runMiddleware(e) {
          var t;
          if (this.auth.currentUser === e) return;
          let n = [];
          try {
            for (let r of this.queue)
              await r(e), r.onAbort && n.push(r.onAbort);
          } catch (a) {
            for (let i of (n.reverse(), n))
              try {
                i();
              } catch (s) {}
            throw this.auth._errorFactory.create('login-blocked', {
              originalMessage:
                null === (t = a) || void 0 === t ? void 0 : t.message
            });
          }
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ed {
        constructor(e, t, n) {
          (this.app = e),
            (this.heartbeatServiceProvider = t),
            (this.config = n),
            (this.currentUser = null),
            (this.emulatorConfig = null),
            (this.operations = Promise.resolve()),
            (this.authStateSubscription = new ep(this)),
            (this.idTokenSubscription = new ep(this)),
            (this.beforeStateQueue = new ec(this)),
            (this.redirectUser = null),
            (this.isProactiveRefreshEnabled = !1),
            (this._canInitEmulator = !0),
            (this._isInitialized = !1),
            (this._deleted = !1),
            (this._initializationPromise = null),
            (this._popupRedirectResolver = null),
            (this._errorFactory = h),
            (this.lastNotifiedUid = void 0),
            (this.languageCode = null),
            (this.tenantId = null),
            (this.settings = { appVerificationDisabledForTesting: !1 }),
            (this.frameworks = []),
            (this.name = e.name),
            (this.clientVersion = n.sdkClientVersion);
        }
        _initializeWithPersistence(e, t) {
          return (
            t && (this._popupRedirectResolver = b(t)),
            (this._initializationPromise = this.queue(async () => {
              var n, r;
              if (
                !this._deleted &&
                ((this.persistenceManager = await Z.create(this, e)),
                !this._deleted)
              ) {
                if (
                  null === (n = this._popupRedirectResolver) || void 0 === n
                    ? void 0
                    : n._shouldInitProactively
                )
                  try {
                    await this._popupRedirectResolver._initialize(this);
                  } catch (i) {}
                await this.initializeCurrentUser(t),
                  (this.lastNotifiedUid =
                    (null === (r = this.currentUser) || void 0 === r
                      ? void 0
                      : r.uid) || null),
                  !this._deleted && (this._isInitialized = !0);
              }
            })),
            this._initializationPromise
          );
        }
        async _onStorageEvent() {
          if (this._deleted) return;
          let e = await this.assertedPersistence.getCurrentUser();
          if (this.currentUser || e) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
              this._currentUser._assign(e), await this.currentUser.getIdToken();
              return;
            }
            await this._updateCurrentUser(e, !0);
          }
        }
        async initializeCurrentUser(e) {
          var t;
          let n = await this.assertedPersistence.getCurrentUser(),
            r = n,
            i = !1;
          if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            let s =
                null === (t = this.redirectUser) || void 0 === t
                  ? void 0
                  : t._redirectEventId,
              a = null == r ? void 0 : r._redirectEventId,
              o = await this.tryRedirectSignIn(e);
            (!s || s === a) &&
              (null == o ? void 0 : o.user) &&
              ((r = o.user), (i = !0));
          }
          if (!r) return this.directlySetCurrentUser(null);
          if (!r._redirectEventId) {
            if (i)
              try {
                await this.beforeStateQueue.runMiddleware(r);
              } catch (l) {
                (r = n),
                  this._popupRedirectResolver._overrideRedirectResult(
                    this,
                    () => Promise.reject(l)
                  );
              }
            return r
              ? this.reloadAndSetCurrentUserOrClear(r)
              : this.directlySetCurrentUser(null);
          }
          return (y(this._popupRedirectResolver, this, 'argument-error'),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser &&
            this.redirectUser._redirectEventId === r._redirectEventId)
            ? this.directlySetCurrentUser(r)
            : this.reloadAndSetCurrentUserOrClear(r);
        }
        async tryRedirectSignIn(e) {
          let t = null;
          try {
            t = await this._popupRedirectResolver._completeRedirectFn(
              this,
              e,
              !0
            );
          } catch (n) {
            await this._setRedirectUser(null);
          }
          return t;
        }
        async reloadAndSetCurrentUserOrClear(e) {
          var t;
          try {
            await H(e);
          } catch (n) {
            if (
              (null === (t = n) || void 0 === t ? void 0 : t.code) !==
              'auth/network-request-failed'
            )
              return this.directlySetCurrentUser(null);
          }
          return this.directlySetCurrentUser(e);
        }
        useDeviceLanguage() {
          this.languageCode = (function () {
            if ('undefined' == typeof navigator) return null;
            let e = navigator;
            return (e.languages && e.languages[0]) || e.language || null;
          })();
        }
        async _delete() {
          this._deleted = !0;
        }
        async updateCurrentUser(e) {
          let t = e ? (0, i.m9)(e) : null;
          return (
            t &&
              y(
                t.auth.config.apiKey === this.config.apiKey,
                this,
                'invalid-user-token'
              ),
            this._updateCurrentUser(t && t._clone(this))
          );
        }
        async _updateCurrentUser(e, t = !1) {
          if (!this._deleted)
            return (
              e && y(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
              t || (await this.beforeStateQueue.runMiddleware(e)),
              this.queue(async () => {
                await this.directlySetCurrentUser(e),
                  this.notifyAuthListeners();
              })
            );
        }
        async signOut() {
          return (
            await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this._popupRedirectResolver) &&
              (await this._setRedirectUser(null)),
            this._updateCurrentUser(null, !0)
          );
        }
        setPersistence(e) {
          return this.queue(async () => {
            await this.assertedPersistence.setPersistence(b(e));
          });
        }
        _getPersistence() {
          return this.assertedPersistence.persistence.type;
        }
        _updateErrorMap(e) {
          this._errorFactory = new i.LL('auth', 'Firebase', e());
        }
        onAuthStateChanged(e, t, n) {
          return this.registerStateListener(
            this.authStateSubscription,
            e,
            t,
            n
          );
        }
        beforeAuthStateChanged(e, t) {
          return this.beforeStateQueue.pushCallback(e, t);
        }
        onIdTokenChanged(e, t, n) {
          return this.registerStateListener(this.idTokenSubscription, e, t, n);
        }
        toJSON() {
          var e;
          return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser:
              null === (e = this._currentUser) || void 0 === e
                ? void 0
                : e.toJSON()
          };
        }
        async _setRedirectUser(e, t) {
          let n = await this.getOrInitRedirectPersistenceManager(t);
          return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
        }
        async getOrInitRedirectPersistenceManager(e) {
          if (!this.redirectPersistenceManager) {
            let t = (e && b(e)) || this._popupRedirectResolver;
            y(t, this, 'argument-error'),
              (this.redirectPersistenceManager = await Z.create(
                this,
                [b(t._redirectPersistence)],
                'redirectUser'
              )),
              (this.redirectUser =
                await this.redirectPersistenceManager.getCurrentUser());
          }
          return this.redirectPersistenceManager;
        }
        async _redirectUserForId(e) {
          var t, n;
          return (this._isInitialized && (await this.queue(async () => {})),
          (null === (t = this._currentUser) || void 0 === t
            ? void 0
            : t._redirectEventId) === e)
            ? this._currentUser
            : (null === (n = this.redirectUser) || void 0 === n
                ? void 0
                : n._redirectEventId) === e
            ? this.redirectUser
            : null;
        }
        async _persistUserIfCurrent(e) {
          if (e === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(e));
        }
        _notifyListenersIfCurrent(e) {
          e === this.currentUser && this.notifyAuthListeners();
        }
        _key() {
          return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
        }
        _startProactiveRefresh() {
          (this.isProactiveRefreshEnabled = !0),
            this.currentUser && this._currentUser._startProactiveRefresh();
        }
        _stopProactiveRefresh() {
          (this.isProactiveRefreshEnabled = !1),
            this.currentUser && this._currentUser._stopProactiveRefresh();
        }
        get _currentUser() {
          return this.currentUser;
        }
        notifyAuthListeners() {
          var e, t;
          if (!this._isInitialized) return;
          this.idTokenSubscription.next(this.currentUser);
          let n =
            null !==
              (t =
                null === (e = this.currentUser) || void 0 === e
                  ? void 0
                  : e.uid) && void 0 !== t
              ? t
              : null;
          this.lastNotifiedUid !== n &&
            ((this.lastNotifiedUid = n),
            this.authStateSubscription.next(this.currentUser));
        }
        registerStateListener(e, t, n, r) {
          if (this._deleted) return () => {};
          let i = 'function' == typeof t ? t : t.next.bind(t),
            s = this._isInitialized
              ? Promise.resolve()
              : this._initializationPromise;
          return (y(s, this, 'internal-error'),
          s.then(() => i(this.currentUser)),
          'function' == typeof t)
            ? e.addObserver(t, n, r)
            : e.addObserver(t);
        }
        async directlySetCurrentUser(e) {
          this.currentUser &&
            this.currentUser !== e &&
            this._currentUser._stopProactiveRefresh(),
            e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
            (this.currentUser = e),
            e
              ? await this.assertedPersistence.setCurrentUser(e)
              : await this.assertedPersistence.removeCurrentUser();
        }
        queue(e) {
          return (
            (this.operations = this.operations.then(e, e)), this.operations
          );
        }
        get assertedPersistence() {
          return (
            y(this.persistenceManager, this, 'internal-error'),
            this.persistenceManager
          );
        }
        _logFramework(e) {
          !(!e || this.frameworks.includes(e)) &&
            (this.frameworks.push(e),
            this.frameworks.sort(),
            (this.clientVersion = eh(
              this.config.clientPlatform,
              this._getFrameworks()
            )));
        }
        _getFrameworks() {
          return this.frameworks;
        }
        async _getAdditionalHeaders() {
          var e;
          let t = { 'X-Client-Version': this.clientVersion };
          this.app.options.appId &&
            (t['X-Firebase-gmpid'] = this.app.options.appId);
          let n = await (null ===
            (e = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === e
            ? void 0
            : e.getHeartbeatsHeader());
          return n && (t['X-Firebase-Client'] = n), t;
        }
      }
      function ef(e) {
        return (0, i.m9)(e);
      }
      class ep {
        constructor(e) {
          (this.auth = e),
            (this.observer = null),
            (this.addObserver = (0, i.ne)((e) => (this.observer = e)));
        }
        get next() {
          return (
            y(this.observer, this.auth, 'internal-error'),
            this.observer.next.bind(this.observer)
          );
        }
      }
      function em(e, t, n) {
        let r = ef(e);
        y(r._canInitEmulator, r, 'emulator-config-failed'),
          y(/^https?:\/\//.test(t), r, 'invalid-emulator-scheme');
        let i = !!(null == n ? void 0 : n.disableWarnings),
          s = eg(t),
          { host: a, port: o } = (function (e) {
            let t = eg(e),
              n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
            if (!n) return { host: '', port: null };
            let r = n[2].split('@').pop() || '',
              i = /^(\[[^\]]+\])(:|$)/.exec(r);
            if (i) {
              let s = i[1];
              return { host: s, port: ey(r.substr(s.length + 1)) };
            }
            {
              let [a, o] = r.split(':');
              return { host: a, port: ey(o) };
            }
          })(t),
          l = null === o ? '' : `:${o}`;
        (r.config.emulator = { url: `${s}//${a}${l}/` }),
          (r.settings.appVerificationDisabledForTesting = !0),
          (r.emulatorConfig = Object.freeze({
            host: a,
            port: o,
            protocol: s.replace(':', ''),
            options: Object.freeze({ disableWarnings: i })
          })),
          i ||
            (function () {
              function e() {
                let e = document.createElement('p'),
                  t = e.style;
                (e.innerText =
                  'Running in emulator mode. Do not use with production credentials.'),
                  (t.position = 'fixed'),
                  (t.width = '100%'),
                  (t.backgroundColor = '#ffffff'),
                  (t.border = '.1em solid #000000'),
                  (t.color = '#b50000'),
                  (t.bottom = '0px'),
                  (t.left = '0px'),
                  (t.margin = '0px'),
                  (t.zIndex = '10000'),
                  (t.textAlign = 'center'),
                  e.classList.add('firebase-emulator-warning'),
                  document.body.appendChild(e);
              }
              'undefined' != typeof console &&
                'function' == typeof console.info &&
                console.info(
                  'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
                ),
                'undefined' != typeof window &&
                  'undefined' != typeof document &&
                  ('loading' === document.readyState
                    ? window.addEventListener('DOMContentLoaded', e)
                    : e());
            })();
      }
      function eg(e) {
        let t = e.indexOf(':');
        return t < 0 ? '' : e.substr(0, t + 1);
      }
      function ey(e) {
        if (!e) return null;
        let t = Number(e);
        return isNaN(t) ? null : t;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ev {
        constructor(e, t) {
          (this.providerId = e), (this.signInMethod = t);
        }
        toJSON() {
          return v('not implemented');
        }
        _getIdTokenResponse(e) {
          return v('not implemented');
        }
        _linkToIdToken(e, t) {
          return v('not implemented');
        }
        _getReauthenticationResolver(e) {
          return v('not implemented');
        }
      }
      async function ew(e, t) {
        return N(e, 'POST', '/v1/accounts:update', t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function e_(e, t) {
        return O(e, 'POST', '/v1/accounts:signInWithPassword', R(e, t));
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function eb(e, t) {
        return O(e, 'POST', '/v1/accounts:signInWithEmailLink', R(e, t));
      }
      async function eT(e, t) {
        return O(e, 'POST', '/v1/accounts:signInWithEmailLink', R(e, t));
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eI extends ev {
        constructor(e, t, n, r = null) {
          super('password', n),
            (this._email = e),
            (this._password = t),
            (this._tenantId = r);
        }
        static _fromEmailAndPassword(e, t) {
          return new eI(e, t, 'password');
        }
        static _fromEmailAndCode(e, t, n = null) {
          return new eI(e, t, 'emailLink', n);
        }
        toJSON() {
          return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
          };
        }
        static fromJSON(e) {
          let t = 'string' == typeof e ? JSON.parse(e) : e;
          if (
            (null == t ? void 0 : t.email) &&
            (null == t ? void 0 : t.password)
          ) {
            if ('password' === t.signInMethod)
              return this._fromEmailAndPassword(t.email, t.password);
            if ('emailLink' === t.signInMethod)
              return this._fromEmailAndCode(t.email, t.password, t.tenantId);
          }
          return null;
        }
        async _getIdTokenResponse(e) {
          switch (this.signInMethod) {
            case 'password':
              return e_(e, {
                returnSecureToken: !0,
                email: this._email,
                password: this._password
              });
            case 'emailLink':
              return eb(e, { email: this._email, oobCode: this._password });
            default:
              f(e, 'internal-error');
          }
        }
        async _linkToIdToken(e, t) {
          switch (this.signInMethod) {
            case 'password':
              return ew(e, {
                idToken: t,
                returnSecureToken: !0,
                email: this._email,
                password: this._password
              });
            case 'emailLink':
              return eT(e, {
                idToken: t,
                email: this._email,
                oobCode: this._password
              });
            default:
              f(e, 'internal-error');
          }
        }
        _getReauthenticationResolver(e) {
          return this._getIdTokenResponse(e);
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function eE(e, t) {
        return O(e, 'POST', '/v1/accounts:signInWithIdp', R(e, t));
      }
      class ek extends ev {
        constructor() {
          super(...arguments), (this.pendingToken = null);
        }
        static _fromParams(e) {
          let t = new ek(e.providerId, e.signInMethod);
          return (
            e.idToken || e.accessToken
              ? (e.idToken && (t.idToken = e.idToken),
                e.accessToken && (t.accessToken = e.accessToken),
                e.nonce && !e.pendingToken && (t.nonce = e.nonce),
                e.pendingToken && (t.pendingToken = e.pendingToken))
              : e.oauthToken && e.oauthTokenSecret
              ? ((t.accessToken = e.oauthToken),
                (t.secret = e.oauthTokenSecret))
              : f('argument-error'),
            t
          );
        }
        toJSON() {
          return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
        }
        static fromJSON(e) {
          let t = 'string' == typeof e ? JSON.parse(e) : e,
            { providerId: n, signInMethod: r } = t,
            i = (0, o.__rest)(t, ['providerId', 'signInMethod']);
          if (!n || !r) return null;
          let s = new ek(n, r);
          return (
            (s.idToken = i.idToken || void 0),
            (s.accessToken = i.accessToken || void 0),
            (s.secret = i.secret),
            (s.nonce = i.nonce),
            (s.pendingToken = i.pendingToken || null),
            s
          );
        }
        _getIdTokenResponse(e) {
          let t = this.buildRequest();
          return eE(e, t);
        }
        _linkToIdToken(e, t) {
          let n = this.buildRequest();
          return (n.idToken = t), eE(e, n);
        }
        _getReauthenticationResolver(e) {
          let t = this.buildRequest();
          return (t.autoCreate = !1), eE(e, t);
        }
        buildRequest() {
          let e = { requestUri: 'http://localhost', returnSecureToken: !0 };
          if (this.pendingToken) e.pendingToken = this.pendingToken;
          else {
            let t = {};
            this.idToken && (t.id_token = this.idToken),
              this.accessToken && (t.access_token = this.accessToken),
              this.secret && (t.oauth_token_secret = this.secret),
              (t.providerId = this.providerId),
              this.nonce && !this.pendingToken && (t.nonce = this.nonce),
              (e.postBody = (0, i.xO)(t));
          }
          return e;
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function eS(e, t) {
        return N(e, 'POST', '/v1/accounts:sendVerificationCode', R(e, t));
      }
      async function eC(e, t) {
        return O(e, 'POST', '/v1/accounts:signInWithPhoneNumber', R(e, t));
      }
      async function eA(e, t) {
        let n = await O(
          e,
          'POST',
          '/v1/accounts:signInWithPhoneNumber',
          R(e, t)
        );
        if (n.temporaryProof)
          throw x(e, 'account-exists-with-different-credential', n);
        return n;
      }
      let eR = { USER_NOT_FOUND: 'user-not-found' };
      async function eN(e, t) {
        let n = Object.assign(Object.assign({}, t), { operation: 'REAUTH' });
        return O(e, 'POST', '/v1/accounts:signInWithPhoneNumber', R(e, n), eR);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eD extends ev {
        constructor(e) {
          super('phone', 'phone'), (this.params = e);
        }
        static _fromVerification(e, t) {
          return new eD({ verificationId: e, verificationCode: t });
        }
        static _fromTokenResponse(e, t) {
          return new eD({ phoneNumber: e, temporaryProof: t });
        }
        _getIdTokenResponse(e) {
          return eC(e, this._makeVerificationRequest());
        }
        _linkToIdToken(e, t) {
          return eA(
            e,
            Object.assign({ idToken: t }, this._makeVerificationRequest())
          );
        }
        _getReauthenticationResolver(e) {
          return eN(e, this._makeVerificationRequest());
        }
        _makeVerificationRequest() {
          let {
            temporaryProof: e,
            phoneNumber: t,
            verificationId: n,
            verificationCode: r
          } = this.params;
          return e && t
            ? { temporaryProof: e, phoneNumber: t }
            : { sessionInfo: n, code: r };
        }
        toJSON() {
          let e = { providerId: this.providerId };
          return (
            this.params.phoneNumber &&
              (e.phoneNumber = this.params.phoneNumber),
            this.params.temporaryProof &&
              (e.temporaryProof = this.params.temporaryProof),
            this.params.verificationCode &&
              (e.verificationCode = this.params.verificationCode),
            this.params.verificationId &&
              (e.verificationId = this.params.verificationId),
            e
          );
        }
        static fromJSON(e) {
          'string' == typeof e && (e = JSON.parse(e));
          let {
            verificationId: t,
            verificationCode: n,
            phoneNumber: r,
            temporaryProof: i
          } = e;
          return n || t || r || i
            ? new eD({
                verificationId: t,
                verificationCode: n,
                phoneNumber: r,
                temporaryProof: i
              })
            : null;
        }
      }
      class eO {
        constructor(e) {
          var t, n, r, s, a, o;
          let l = (0, i.zd)((0, i.pd)(e)),
            u = null !== (t = l.apiKey) && void 0 !== t ? t : null,
            h = null !== (n = l.oobCode) && void 0 !== n ? n : null,
            c = /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */ (function (e) {
              switch (e) {
                case 'recoverEmail':
                  return 'RECOVER_EMAIL';
                case 'resetPassword':
                  return 'PASSWORD_RESET';
                case 'signIn':
                  return 'EMAIL_SIGNIN';
                case 'verifyEmail':
                  return 'VERIFY_EMAIL';
                case 'verifyAndChangeEmail':
                  return 'VERIFY_AND_CHANGE_EMAIL';
                case 'revertSecondFactorAddition':
                  return 'REVERT_SECOND_FACTOR_ADDITION';
                default:
                  return null;
              }
            })(null !== (r = l.mode) && void 0 !== r ? r : null);
          y(u && h && c, 'argument-error'),
            (this.apiKey = u),
            (this.operation = c),
            (this.code = h),
            (this.continueUrl =
              null !== (s = l.continueUrl) && void 0 !== s ? s : null),
            (this.languageCode =
              null !== (a = l.languageCode) && void 0 !== a ? a : null),
            (this.tenantId =
              null !== (o = l.tenantId) && void 0 !== o ? o : null);
        }
        static parseLink(e) {
          let t = (function (e) {
            let t = (0, i.zd)((0, i.pd)(e)).link,
              n = t ? (0, i.zd)((0, i.pd)(t)).deep_link_id : null,
              r = (0, i.zd)((0, i.pd)(e)).deep_link_id,
              s = r ? (0, i.zd)((0, i.pd)(r)).link : null;
            return s || r || n || t || e;
          })(e);
          try {
            return new eO(t);
          } catch (n) {
            return null;
          }
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eL {
        constructor() {
          this.providerId = eL.PROVIDER_ID;
        }
        static credential(e, t) {
          return eI._fromEmailAndPassword(e, t);
        }
        static credentialWithLink(e, t) {
          let n = eO.parseLink(t);
          return (
            y(n, 'argument-error'), eI._fromEmailAndCode(e, n.code, n.tenantId)
          );
        }
      }
      (eL.PROVIDER_ID = 'password'),
        (eL.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password'),
        (eL.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink');
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eP {
        constructor(e) {
          (this.providerId = e),
            (this.defaultLanguageCode = null),
            (this.customParameters = {});
        }
        setDefaultLanguage(e) {
          this.defaultLanguageCode = e;
        }
        setCustomParameters(e) {
          return (this.customParameters = e), this;
        }
        getCustomParameters() {
          return this.customParameters;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ex extends eP {
        constructor() {
          super(...arguments), (this.scopes = []);
        }
        addScope(e) {
          return this.scopes.includes(e) || this.scopes.push(e), this;
        }
        getScopes() {
          return [...this.scopes];
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eM extends ex {
        constructor() {
          super('facebook.com');
        }
        static credential(e) {
          return ek._fromParams({
            providerId: eM.PROVIDER_ID,
            signInMethod: eM.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
          });
        }
        static credentialFromResult(e) {
          return eM.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
          return eM.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
          if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken)
            return null;
          try {
            return eM.credential(e.oauthAccessToken);
          } catch (t) {
            return null;
          }
        }
      }
      (eM.FACEBOOK_SIGN_IN_METHOD = 'facebook.com'),
        (eM.PROVIDER_ID = 'facebook.com');
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eU extends ex {
        constructor() {
          super('google.com'), this.addScope('profile');
        }
        static credential(e, t) {
          return ek._fromParams({
            providerId: eU.PROVIDER_ID,
            signInMethod: eU.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: t
          });
        }
        static credentialFromResult(e) {
          return eU.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
          return eU.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
          if (!e) return null;
          let { oauthIdToken: t, oauthAccessToken: n } = e;
          if (!t && !n) return null;
          try {
            return eU.credential(t, n);
          } catch (r) {
            return null;
          }
        }
      }
      (eU.GOOGLE_SIGN_IN_METHOD = 'google.com'),
        (eU.PROVIDER_ID = 'google.com');
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eF extends ex {
        constructor() {
          super('github.com');
        }
        static credential(e) {
          return ek._fromParams({
            providerId: eF.PROVIDER_ID,
            signInMethod: eF.GITHUB_SIGN_IN_METHOD,
            accessToken: e
          });
        }
        static credentialFromResult(e) {
          return eF.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
          return eF.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
          if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken)
            return null;
          try {
            return eF.credential(e.oauthAccessToken);
          } catch (t) {
            return null;
          }
        }
      }
      (eF.GITHUB_SIGN_IN_METHOD = 'github.com'),
        (eF.PROVIDER_ID = 'github.com');
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eV extends ex {
        constructor() {
          super('twitter.com');
        }
        static credential(e, t) {
          return ek._fromParams({
            providerId: eV.PROVIDER_ID,
            signInMethod: eV.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: t
          });
        }
        static credentialFromResult(e) {
          return eV.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
          return eV.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
          if (!e) return null;
          let { oauthAccessToken: t, oauthTokenSecret: n } = e;
          if (!t || !n) return null;
          try {
            return eV.credential(t, n);
          } catch (r) {
            return null;
          }
        }
      }
      (eV.TWITTER_SIGN_IN_METHOD = 'twitter.com'),
        (eV.PROVIDER_ID = 'twitter.com');
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eB {
        constructor(e) {
          (this.user = e.user),
            (this.providerId = e.providerId),
            (this._tokenResponse = e._tokenResponse),
            (this.operationType = e.operationType);
        }
        static async _fromIdTokenResponse(e, t, n, r = !1) {
          let i = await X._fromIdTokenResponse(e, n, r),
            s = ej(n),
            a = new eB({
              user: i,
              providerId: s,
              _tokenResponse: n,
              operationType: t
            });
          return a;
        }
        static async _forOperation(e, t, n) {
          await e._updateTokensIfNecessary(n, !0);
          let r = ej(n);
          return new eB({
            user: e,
            providerId: r,
            _tokenResponse: n,
            operationType: t
          });
        }
      }
      function ej(e) {
        return e.providerId
          ? e.providerId
          : 'phoneNumber' in e
          ? 'phone'
          : null;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eq extends i.ZR {
        constructor(e, t, n, r) {
          var i;
          super(t.code, t.message),
            (this.operationType = n),
            (this.user = r),
            Object.setPrototypeOf(this, eq.prototype),
            (this.customData = {
              appName: e.name,
              tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
              _serverResponse: t.customData._serverResponse,
              operationType: n
            });
        }
        static _fromErrorAndOperation(e, t, n, r) {
          return new eq(e, t, n, r);
        }
      }
      function e$(e, t, n, r) {
        let i =
          'reauthenticate' === t
            ? n._getReauthenticationResolver(e)
            : n._getIdTokenResponse(e);
        return i.catch((n) => {
          if ('auth/multi-factor-auth-required' === n.code)
            throw eq._fromErrorAndOperation(e, n, t, r);
          throw n;
        });
      }
      async function ez(e, t, n = !1) {
        let r = await q(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
        return eB._forOperation(e, 'link', r);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function eH(e, t, n = !1) {
        var r;
        let { auth: i } = e,
          s = 'reauthenticate';
        try {
          let a = await q(e, e$(i, s, t, e), n);
          y(a.idToken, i, 'internal-error');
          let o = j(a.idToken);
          y(o, i, 'internal-error');
          let { sub: l } = o;
          return y(e.uid === l, i, 'user-mismatch'), eB._forOperation(e, s, a);
        } catch (u) {
          throw (
            ((null === (r = u) || void 0 === r ? void 0 : r.code) ===
              'auth/user-not-found' && f(i, 'user-mismatch'),
            u)
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function eK(e, t, n = !1) {
        let r = 'signIn',
          i = await e$(e, r, t),
          s = await eB._fromIdTokenResponse(e, r, i);
        return n || (await e._updateCurrentUser(s.user)), s;
      }
      function eG(e, t, n, r) {
        return (0, i.m9)(e).onAuthStateChanged(t, n, r);
      }
      function eW(e) {
        return (0, i.m9)(e).signOut();
      }
      new WeakMap();
      let eQ = '__sak';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eX {
        constructor(e, t) {
          (this.storageRetriever = e), (this.type = t);
        }
        _isAvailable() {
          try {
            if (!this.storage) return Promise.resolve(!1);
            return (
              this.storage.setItem(eQ, '1'),
              this.storage.removeItem(eQ),
              Promise.resolve(!0)
            );
          } catch (e) {
            return Promise.resolve(!1);
          }
        }
        _set(e, t) {
          return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
        }
        _get(e) {
          let t = this.storage.getItem(e);
          return Promise.resolve(t ? JSON.parse(t) : null);
        }
        _remove(e) {
          return this.storage.removeItem(e), Promise.resolve();
        }
        get storage() {
          return this.storageRetriever();
        }
      }
      class eJ extends eX {
        constructor() {
          super(() => window.localStorage, 'LOCAL'),
            (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
            (this.listeners = {}),
            (this.localCache = {}),
            (this.pollTimer = null),
            (this.safariLocalStorageNotSynced =
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ (function () {
                let e = (0, i.z$)();
                return en(e) || el(e);
              })() &&
              (function () {
                try {
                  return !!(window && window !== window.top);
                } catch (e) {
                  return !1;
                }
              })()),
            (this.fallbackToPolling = eu()),
            (this._shouldAllowMigration = !0);
        }
        forAllChangedKeys(e) {
          for (let t of Object.keys(this.listeners)) {
            let n = this.storage.getItem(t),
              r = this.localCache[t];
            n !== r && e(t, r, n);
          }
        }
        onStorageEvent(e, t = !1) {
          if (!e.key) {
            this.forAllChangedKeys((e, t, n) => {
              this.notifyListeners(e, n);
            });
            return;
          }
          let n = e.key;
          if (
            (t ? this.detachListener() : this.stopPolling(),
            this.safariLocalStorageNotSynced)
          ) {
            let r = this.storage.getItem(n);
            if (e.newValue !== r)
              null !== e.newValue
                ? this.storage.setItem(n, e.newValue)
                : this.storage.removeItem(n);
            else if (this.localCache[n] === e.newValue && !t) return;
          }
          let s = () => {
              let e = this.storage.getItem(n);
              (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
            },
            a = this.storage.getItem(n);
          (0, i.w1)() &&
          10 === document.documentMode &&
          a !== e.newValue &&
          e.newValue !== e.oldValue
            ? setTimeout(s, 10)
            : s();
        }
        notifyListeners(e, t) {
          this.localCache[e] = t;
          let n = this.listeners[e];
          if (n) for (let r of Array.from(n)) r(t ? JSON.parse(t) : t);
        }
        startPolling() {
          this.stopPolling(),
            (this.pollTimer = setInterval(() => {
              this.forAllChangedKeys((e, t, n) => {
                this.onStorageEvent(
                  new StorageEvent('storage', {
                    key: e,
                    oldValue: t,
                    newValue: n
                  }),
                  !0
                );
              });
            }, 1e3));
        }
        stopPolling() {
          this.pollTimer &&
            (clearInterval(this.pollTimer), (this.pollTimer = null));
        }
        attachListener() {
          window.addEventListener('storage', this.boundEventHandler);
        }
        detachListener() {
          window.removeEventListener('storage', this.boundEventHandler);
        }
        _addListener(e, t) {
          0 === Object.keys(this.listeners).length &&
            (this.fallbackToPolling
              ? this.startPolling()
              : this.attachListener()),
            this.listeners[e] ||
              ((this.listeners[e] = new Set()),
              (this.localCache[e] = this.storage.getItem(e))),
            this.listeners[e].add(t);
        }
        _removeListener(e, t) {
          this.listeners[e] &&
            (this.listeners[e].delete(t),
            0 === this.listeners[e].size && delete this.listeners[e]),
            0 === Object.keys(this.listeners).length &&
              (this.detachListener(), this.stopPolling());
        }
        async _set(e, t) {
          await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
        }
        async _get(e) {
          let t = await super._get(e);
          return (this.localCache[e] = JSON.stringify(t)), t;
        }
        async _remove(e) {
          await super._remove(e), delete this.localCache[e];
        }
      }
      eJ.type = 'LOCAL';
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eY extends eX {
        constructor() {
          super(() => window.sessionStorage, 'SESSION');
        }
        _addListener(e, t) {}
        _removeListener(e, t) {}
      }
      eY.type = 'SESSION';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eZ {
        constructor(e) {
          (this.eventTarget = e),
            (this.handlersMap = {}),
            (this.boundEventHandler = this.handleEvent.bind(this));
        }
        static _getInstance(e) {
          let t = this.receivers.find((t) => t.isListeningto(e));
          if (t) return t;
          let n = new eZ(e);
          return this.receivers.push(n), n;
        }
        isListeningto(e) {
          return this.eventTarget === e;
        }
        async handleEvent(e) {
          var t;
          let { eventId: n, eventType: r, data: i } = e.data,
            s = this.handlersMap[r];
          if (!(null == s ? void 0 : s.size)) return;
          e.ports[0].postMessage({ status: 'ack', eventId: n, eventType: r });
          let a = Array.from(s).map(async (t) => t(e.origin, i)),
            o = await Promise.all(
              a.map(async (e) => {
                try {
                  let t = await e;
                  return { fulfilled: !0, value: t };
                } catch (n) {
                  return { fulfilled: !1, reason: n };
                }
              })
            );
          e.ports[0].postMessage({
            status: 'done',
            eventId: n,
            eventType: r,
            response: o
          });
        }
        _subscribe(e, t) {
          0 === Object.keys(this.handlersMap).length &&
            this.eventTarget.addEventListener(
              'message',
              this.boundEventHandler
            ),
            this.handlersMap[e] || (this.handlersMap[e] = new Set()),
            this.handlersMap[e].add(t);
        }
        _unsubscribe(e, t) {
          this.handlersMap[e] && t && this.handlersMap[e].delete(t),
            (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
            0 === Object.keys(this.handlersMap).length &&
              this.eventTarget.removeEventListener(
                'message',
                this.boundEventHandler
              );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function e0(e = '', t = 10) {
        let n = '';
        for (let r = 0; r < t; r++) n += Math.floor(10 * Math.random());
        return e + n;
      }
      eZ.receivers = [];
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class e1 {
        constructor(e) {
          (this.target = e), (this.handlers = new Set());
        }
        removeMessageHandler(e) {
          e.messageChannel &&
            (e.messageChannel.port1.removeEventListener('message', e.onMessage),
            e.messageChannel.port1.close()),
            this.handlers.delete(e);
        }
        async _send(e, t, n = 50) {
          let r =
            'undefined' != typeof MessageChannel ? new MessageChannel() : null;
          if (!r) throw Error('connection_unavailable');
          let i, s;
          return new Promise((a, o) => {
            let l = e0('', 20);
            r.port1.start();
            let u = setTimeout(() => {
              o(Error('unsupported_event'));
            }, n);
            (s = {
              messageChannel: r,
              onMessage(e) {
                if (e.data.eventId === l)
                  switch (e.data.status) {
                    case 'ack':
                      clearTimeout(u),
                        (i = setTimeout(() => {
                          o(Error('timeout'));
                        }, 3e3));
                      break;
                    case 'done':
                      clearTimeout(i), a(e.data.response);
                      break;
                    default:
                      clearTimeout(u),
                        clearTimeout(i),
                        o(Error('invalid_response'));
                  }
              }
            }),
              this.handlers.add(s),
              r.port1.addEventListener('message', s.onMessage),
              this.target.postMessage({ eventType: e, eventId: l, data: t }, [
                r.port2
              ]);
          }).finally(() => {
            s && this.removeMessageHandler(s);
          });
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function e2() {
        return window;
      }
      /**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function e4() {
        return (
          void 0 !== e2().WorkerGlobalScope &&
          'function' == typeof e2().importScripts
        );
      }
      async function e3() {
        if (!(null == navigator ? void 0 : navigator.serviceWorker))
          return null;
        try {
          let e = await navigator.serviceWorker.ready;
          return e.active;
        } catch (t) {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let e6 = 'firebaseLocalStorageDb',
        e9 = 'firebaseLocalStorage',
        e5 = 'fbase_key';
      class e8 {
        constructor(e) {
          this.request = e;
        }
        toPromise() {
          return new Promise((e, t) => {
            this.request.addEventListener('success', () => {
              e(this.request.result);
            }),
              this.request.addEventListener('error', () => {
                t(this.request.error);
              });
          });
        }
      }
      function e7(e, t) {
        return e
          .transaction([e9], t ? 'readwrite' : 'readonly')
          .objectStore(e9);
      }
      function te() {
        let e = indexedDB.open(e6, 1);
        return new Promise((t, n) => {
          e.addEventListener('error', () => {
            n(e.error);
          }),
            e.addEventListener('upgradeneeded', () => {
              let t = e.result;
              try {
                t.createObjectStore(e9, { keyPath: e5 });
              } catch (r) {
                n(r);
              }
            }),
            e.addEventListener('success', async () => {
              let n = e.result;
              n.objectStoreNames.contains(e9)
                ? t(n)
                : (n.close(),
                  await (function () {
                    let e = indexedDB.deleteDatabase(e6);
                    return new e8(e).toPromise();
                  })(),
                  t(await te()));
            });
        });
      }
      async function tt(e, t, n) {
        let r = e7(e, !0).put({ [e5]: t, value: n });
        return new e8(r).toPromise();
      }
      async function tn(e, t) {
        let n = e7(e, !1).get(t),
          r = await new e8(n).toPromise();
        return void 0 === r ? null : r.value;
      }
      function tr(e, t) {
        let n = e7(e, !0).delete(t);
        return new e8(n).toPromise();
      }
      class ti {
        constructor() {
          (this.type = 'LOCAL'),
            (this._shouldAllowMigration = !0),
            (this.listeners = {}),
            (this.localCache = {}),
            (this.pollTimer = null),
            (this.pendingWrites = 0),
            (this.receiver = null),
            (this.sender = null),
            (this.serviceWorkerReceiverAvailable = !1),
            (this.activeServiceWorker = null),
            (this._workerInitializationPromise =
              this.initializeServiceWorkerMessaging().then(
                () => {},
                () => {}
              ));
        }
        async _openDb() {
          return this.db || (this.db = await te()), this.db;
        }
        async _withRetries(e) {
          let t = 0;
          for (;;)
            try {
              let n = await this._openDb();
              return await e(n);
            } catch (r) {
              if (t++ > 3) throw r;
              this.db && (this.db.close(), (this.db = void 0));
            }
        }
        async initializeServiceWorkerMessaging() {
          return e4() ? this.initializeReceiver() : this.initializeSender();
        }
        async initializeReceiver() {
          (this.receiver = eZ._getInstance(e4() ? self : null)),
            this.receiver._subscribe('keyChanged', async (e, t) => {
              let n = await this._poll();
              return { keyProcessed: n.includes(t.key) };
            }),
            this.receiver._subscribe('ping', async (e, t) => ['keyChanged']);
        }
        async initializeSender() {
          var e, t;
          if (
            ((this.activeServiceWorker = await e3()), !this.activeServiceWorker)
          )
            return;
          this.sender = new e1(this.activeServiceWorker);
          let n = await this.sender._send('ping', {}, 800);
          n &&
            (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
            (null === (t = n[0]) || void 0 === t
              ? void 0
              : t.value.includes('keyChanged')) &&
            (this.serviceWorkerReceiverAvailable = !0);
        }
        async notifyServiceWorker(e) {
          var t;
          if (
            this.sender &&
            this.activeServiceWorker &&
            ((null ===
              (t = null == navigator ? void 0 : navigator.serviceWorker) ||
            void 0 === t
              ? void 0
              : t.controller) || null) === this.activeServiceWorker
          )
            try {
              await this.sender._send(
                'keyChanged',
                { key: e },
                this.serviceWorkerReceiverAvailable ? 800 : 50
              );
            } catch (n) {}
        }
        async _isAvailable() {
          try {
            if (!indexedDB) return !1;
            let e = await te();
            return await tt(e, eQ, '1'), await tr(e, eQ), !0;
          } catch (t) {}
          return !1;
        }
        async _withPendingWrite(e) {
          this.pendingWrites++;
          try {
            await e();
          } finally {
            this.pendingWrites--;
          }
        }
        async _set(e, t) {
          return this._withPendingWrite(
            async () => (
              await this._withRetries((n) => tt(n, e, t)),
              (this.localCache[e] = t),
              this.notifyServiceWorker(e)
            )
          );
        }
        async _get(e) {
          let t = await this._withRetries((t) => tn(t, e));
          return (this.localCache[e] = t), t;
        }
        async _remove(e) {
          return this._withPendingWrite(
            async () => (
              await this._withRetries((t) => tr(t, e)),
              delete this.localCache[e],
              this.notifyServiceWorker(e)
            )
          );
        }
        async _poll() {
          let e = await this._withRetries((e) => {
            let t = e7(e, !1).getAll();
            return new e8(t).toPromise();
          });
          if (!e || 0 !== this.pendingWrites) return [];
          let t = [],
            n = new Set();
          for (let { fbase_key: r, value: i } of e)
            n.add(r),
              JSON.stringify(this.localCache[r]) !== JSON.stringify(i) &&
                (this.notifyListeners(r, i), t.push(r));
          for (let s of Object.keys(this.localCache))
            this.localCache[s] &&
              !n.has(s) &&
              (this.notifyListeners(s, null), t.push(s));
          return t;
        }
        notifyListeners(e, t) {
          this.localCache[e] = t;
          let n = this.listeners[e];
          if (n) for (let r of Array.from(n)) r(t);
        }
        startPolling() {
          this.stopPolling(),
            (this.pollTimer = setInterval(async () => this._poll(), 800));
        }
        stopPolling() {
          this.pollTimer &&
            (clearInterval(this.pollTimer), (this.pollTimer = null));
        }
        _addListener(e, t) {
          0 === Object.keys(this.listeners).length && this.startPolling(),
            this.listeners[e] ||
              ((this.listeners[e] = new Set()), this._get(e)),
            this.listeners[e].add(t);
        }
        _removeListener(e, t) {
          this.listeners[e] &&
            (this.listeners[e].delete(t),
            0 === this.listeners[e].size && delete this.listeners[e]),
            0 === Object.keys(this.listeners).length && this.stopPolling();
        }
      }
      function ts(e) {
        return `__${e}${Math.floor(1e6 * Math.random())}`;
      }
      async function ta(e, t, n) {
        var r, i, s, a, o;
        let l = await n.verify();
        try {
          y('string' == typeof l, e, 'argument-error'),
            y('recaptcha' === n.type, e, 'argument-error');
          let u;
          if (
            ((u = 'string' == typeof t ? { phoneNumber: t } : t),
            'session' in u)
          ) {
            let h = u.session;
            if ('phoneNumber' in u) {
              y('enroll' === h.type, e, 'internal-error');
              let c = await ((i = e),
              (s = {
                idToken: h.credential,
                phoneEnrollmentInfo: {
                  phoneNumber: u.phoneNumber,
                  recaptchaToken: l
                }
              }),
              N(i, 'POST', '/v2/accounts/mfaEnrollment:start', R(i, s)));
              return c.phoneSessionInfo.sessionInfo;
            }
            {
              y('signin' === h.type, e, 'internal-error');
              let d =
                (null === (r = u.multiFactorHint) || void 0 === r
                  ? void 0
                  : r.uid) || u.multiFactorUid;
              y(d, e, 'missing-multi-factor-info');
              let f = await ((a = e),
              (o = {
                mfaPendingCredential: h.credential,
                mfaEnrollmentId: d,
                phoneSignInInfo: { recaptchaToken: l }
              }),
              N(a, 'POST', '/v2/accounts/mfaSignIn:start', R(a, o)));
              return f.phoneResponseInfo.sessionInfo;
            }
          }
          {
            let { sessionInfo: p } = await eS(e, {
              phoneNumber: u.phoneNumber,
              recaptchaToken: l
            });
            return p;
          }
        } finally {
          n._reset();
        }
      }
      (ti.type = 'LOCAL'), ts('rcb'), new E(3e4, 6e4);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class to {
        constructor(e) {
          (this.providerId = to.PROVIDER_ID), (this.auth = ef(e));
        }
        verifyPhoneNumber(e, t) {
          return ta(this.auth, e, (0, i.m9)(t));
        }
        static credential(e, t) {
          return eD._fromVerification(e, t);
        }
        static credentialFromResult(e) {
          return to.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
          return to.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
          if (!e) return null;
          let { phoneNumber: t, temporaryProof: n } = e;
          return t && n ? eD._fromTokenResponse(t, n) : null;
        }
      }
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function tl(e, t) {
        return t
          ? b(t)
          : (y(e._popupRedirectResolver, e, 'argument-error'),
            e._popupRedirectResolver);
      }
      (to.PROVIDER_ID = 'phone'), (to.PHONE_SIGN_IN_METHOD = 'phone');
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class tu extends ev {
        constructor(e) {
          super('custom', 'custom'), (this.params = e);
        }
        _getIdTokenResponse(e) {
          return eE(e, this._buildIdpRequest());
        }
        _linkToIdToken(e, t) {
          return eE(e, this._buildIdpRequest(t));
        }
        _getReauthenticationResolver(e) {
          return eE(e, this._buildIdpRequest());
        }
        _buildIdpRequest(e) {
          let t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
          };
          return e && (t.idToken = e), t;
        }
      }
      function th(e) {
        return eK(e.auth, new tu(e), e.bypassAuthState);
      }
      function tc(e) {
        let { auth: t, user: n } = e;
        return y(n, t, 'internal-error'), eH(n, new tu(e), e.bypassAuthState);
      }
      async function td(e) {
        let { auth: t, user: n } = e;
        return y(n, t, 'internal-error'), ez(n, new tu(e), e.bypassAuthState);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class tf {
        constructor(e, t, n, r, i = !1) {
          (this.auth = e),
            (this.resolver = n),
            (this.user = r),
            (this.bypassAuthState = i),
            (this.pendingPromise = null),
            (this.eventManager = null),
            (this.filter = Array.isArray(t) ? t : [t]);
        }
        execute() {
          return new Promise(async (e, t) => {
            this.pendingPromise = { resolve: e, reject: t };
            try {
              (this.eventManager = await this.resolver._initialize(this.auth)),
                await this.onExecution(),
                this.eventManager.registerConsumer(this);
            } catch (n) {
              this.reject(n);
            }
          });
        }
        async onAuthEvent(e) {
          let {
            urlResponse: t,
            sessionId: n,
            postBody: r,
            tenantId: i,
            error: s,
            type: a
          } = e;
          if (s) {
            this.reject(s);
            return;
          }
          let o = {
            auth: this.auth,
            requestUri: t,
            sessionId: n,
            tenantId: i || void 0,
            postBody: r || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
          };
          try {
            this.resolve(await this.getIdpTask(a)(o));
          } catch (l) {
            this.reject(l);
          }
        }
        onError(e) {
          this.reject(e);
        }
        getIdpTask(e) {
          switch (e) {
            case 'signInViaPopup':
            case 'signInViaRedirect':
              return th;
            case 'linkViaPopup':
            case 'linkViaRedirect':
              return td;
            case 'reauthViaPopup':
            case 'reauthViaRedirect':
              return tc;
            default:
              f(this.auth, 'internal-error');
          }
        }
        resolve(e) {
          w(this.pendingPromise, 'Pending promise was never set'),
            this.pendingPromise.resolve(e),
            this.unregisterAndCleanUp();
        }
        reject(e) {
          w(this.pendingPromise, 'Pending promise was never set'),
            this.pendingPromise.reject(e),
            this.unregisterAndCleanUp();
        }
        unregisterAndCleanUp() {
          this.eventManager && this.eventManager.unregisterConsumer(this),
            (this.pendingPromise = null),
            this.cleanUp();
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let tp = new E(2e3, 1e4);
      async function tm(e, t, n) {
        let r = ef(e);
        !(function (e, t, n) {
          if (!(t instanceof n))
            throw (
              (n.name !== t.constructor.name && f(e, 'argument-error'),
              m(
                e,
                'argument-error',
                `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
              ))
            );
        })(e, t, eP);
        let i = tl(r, n),
          s = new tg(r, 'signInViaPopup', t, i);
        return s.executeNotNull();
      }
      class tg extends tf {
        constructor(e, t, n, r, i) {
          super(e, t, r, i),
            (this.provider = n),
            (this.authWindow = null),
            (this.pollId = null),
            tg.currentPopupAction && tg.currentPopupAction.cancel(),
            (tg.currentPopupAction = this);
        }
        async executeNotNull() {
          let e = await this.execute();
          return y(e, this.auth, 'internal-error'), e;
        }
        async onExecution() {
          w(1 === this.filter.length, 'Popup operations only handle one event');
          let e = e0();
          (this.authWindow = await this.resolver._openPopup(
            this.auth,
            this.provider,
            this.filter[0],
            e
          )),
            (this.authWindow.associatedEvent = e),
            this.resolver._originValidation(this.auth).catch((e) => {
              this.reject(e);
            }),
            this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
              e || this.reject(p(this.auth, 'web-storage-unsupported'));
            }),
            this.pollUserCancellation();
        }
        get eventId() {
          var e;
          return (
            (null === (e = this.authWindow) || void 0 === e
              ? void 0
              : e.associatedEvent) || null
          );
        }
        cancel() {
          this.reject(p(this.auth, 'cancelled-popup-request'));
        }
        cleanUp() {
          this.authWindow && this.authWindow.close(),
            this.pollId && window.clearTimeout(this.pollId),
            (this.authWindow = null),
            (this.pollId = null),
            (tg.currentPopupAction = null);
        }
        pollUserCancellation() {
          let e = () => {
            var t, n;
            if (
              null ===
                (n =
                  null === (t = this.authWindow) || void 0 === t
                    ? void 0
                    : t.window) || void 0 === n
                ? void 0
                : n.closed
            ) {
              this.pollId = window.setTimeout(() => {
                (this.pollId = null),
                  this.reject(p(this.auth, 'popup-closed-by-user'));
              }, 2e3);
              return;
            }
            this.pollId = window.setTimeout(e, tp.get());
          };
          e();
        }
      }
      tg.currentPopupAction = null;
      let ty = new Map();
      class tv extends tf {
        constructor(e, t, n = !1) {
          super(
            e,
            [
              'signInViaRedirect',
              'linkViaRedirect',
              'reauthViaRedirect',
              'unknown'
            ],
            t,
            void 0,
            n
          ),
            (this.eventId = null);
        }
        async execute() {
          let e = ty.get(this.auth._key());
          if (!e) {
            try {
              let t = await tw(this.resolver, this.auth),
                n = t ? await super.execute() : null;
              e = () => Promise.resolve(n);
            } catch (r) {
              e = () => Promise.reject(r);
            }
            ty.set(this.auth._key(), e);
          }
          return (
            this.bypassAuthState ||
              ty.set(this.auth._key(), () => Promise.resolve(null)),
            e()
          );
        }
        async onAuthEvent(e) {
          if ('signInViaRedirect' === e.type) return super.onAuthEvent(e);
          if ('unknown' === e.type) {
            this.resolve(null);
            return;
          }
          if (e.eventId) {
            let t = await this.auth._redirectUserForId(e.eventId);
            if (t) return (this.user = t), super.onAuthEvent(e);
            this.resolve(null);
          }
        }
        async onExecution() {}
        cleanUp() {}
      }
      async function tw(e, t) {
        var n, r;
        let i = ((n = t), Y('pendingRedirect', n.config.apiKey, n.name)),
          s = ((r = e), b(r._redirectPersistence));
        if (!(await s._isAvailable())) return !1;
        let a = (await s._get(i)) === 'true';
        return await s._remove(i), a;
      }
      function t_(e, t) {
        ty.set(e._key(), t);
      }
      async function tb(e, t, n = !1) {
        let r = ef(e),
          i = tl(r, t),
          s = new tv(r, i, n),
          a = await s.execute();
        return (
          a &&
            !n &&
            (delete a.user._redirectEventId,
            await r._persistUserIfCurrent(a.user),
            await r._setRedirectUser(null, t)),
          a
        );
      }
      class tT {
        constructor(e) {
          (this.auth = e),
            (this.cachedEventUids = new Set()),
            (this.consumers = new Set()),
            (this.queuedRedirectEvent = null),
            (this.hasHandledPotentialRedirect = !1),
            (this.lastProcessedEventTime = Date.now());
        }
        registerConsumer(e) {
          this.consumers.add(e),
            this.queuedRedirectEvent &&
              this.isEventForConsumer(this.queuedRedirectEvent, e) &&
              (this.sendToConsumer(this.queuedRedirectEvent, e),
              this.saveEventToCache(this.queuedRedirectEvent),
              (this.queuedRedirectEvent = null));
        }
        unregisterConsumer(e) {
          this.consumers.delete(e);
        }
        onEvent(e) {
          if (this.hasEventBeenHandled(e)) return !1;
          let t = !1;
          return (
            this.consumers.forEach((n) => {
              this.isEventForConsumer(e, n) &&
                ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
            }),
            this.hasHandledPotentialRedirect ||
              !(function (e) {
                switch (e.type) {
                  case 'signInViaRedirect':
                  case 'linkViaRedirect':
                  case 'reauthViaRedirect':
                    return !0;
                  case 'unknown':
                    return tE(e);
                  default:
                    return !1;
                }
              })(e) ||
              ((this.hasHandledPotentialRedirect = !0),
              t || ((this.queuedRedirectEvent = e), (t = !0))),
            t
          );
        }
        sendToConsumer(e, t) {
          var n;
          if (e.error && !tE(e)) {
            let r =
              (null === (n = e.error.code) || void 0 === n
                ? void 0
                : n.split('auth/')[1]) || 'internal-error';
            t.onError(p(this.auth, r));
          } else t.onAuthEvent(e);
        }
        isEventForConsumer(e, t) {
          let n =
            null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
          return t.filter.includes(e.type) && n;
        }
        hasEventBeenHandled(e) {
          return (
            Date.now() - this.lastProcessedEventTime >= 6e5 &&
              this.cachedEventUids.clear(),
            this.cachedEventUids.has(tI(e))
          );
        }
        saveEventToCache(e) {
          this.cachedEventUids.add(tI(e)),
            (this.lastProcessedEventTime = Date.now());
        }
      }
      function tI(e) {
        return [e.type, e.eventId, e.sessionId, e.tenantId]
          .filter((e) => e)
          .join('-');
      }
      function tE({ type: e, error: t }) {
        return (
          'unknown' === e &&
          (null == t ? void 0 : t.code) === 'auth/no-auth-event'
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function tk(e, t = {}) {
        return N(e, 'GET', '/v1/projects', t);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let tS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        tC = /^https?/;
      async function tA(e) {
        if (e.config.emulator) return;
        let { authorizedDomains: t } = await tk(e);
        for (let n of t)
          try {
            if (tR(n)) return;
          } catch (r) {}
        f(e, 'unauthorized-domain');
      }
      function tR(e) {
        let t = T(),
          { protocol: n, hostname: r } = new URL(t);
        if (e.startsWith('chrome-extension://')) {
          let i = new URL(e);
          return '' === i.hostname && '' === r
            ? 'chrome-extension:' === n &&
                e.replace('chrome-extension://', '') ===
                  t.replace('chrome-extension://', '')
            : 'chrome-extension:' === n && i.hostname === r;
        }
        if (!tC.test(n)) return !1;
        if (tS.test(e)) return r === e;
        let s = e.replace(/\./g, '\\.'),
          a = RegExp('^(.+\\.' + s + '|' + s + ')$', 'i');
        return a.test(r);
      }
      /**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let tN = new E(3e4, 6e4);
      function tD() {
        let e = e2().___jsl;
        if (null == e ? void 0 : e.H) {
          for (let t of Object.keys(e.H))
            if (
              ((e.H[t].r = e.H[t].r || []),
              (e.H[t].L = e.H[t].L || []),
              (e.H[t].r = [...e.H[t].L]),
              e.CP)
            )
              for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
        }
      }
      let tO = null,
        tL = new E(5e3, 15e3),
        tP = {
          style: {
            position: 'absolute',
            top: '-100px',
            width: '1px',
            height: '1px'
          },
          'aria-hidden': 'true',
          tabindex: '-1'
        },
        tx = new Map([
          ['identitytoolkit.googleapis.com', 'p'],
          ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
          ['test-identitytoolkit.sandbox.googleapis.com', 't']
        ]);
      async function tM(e) {
        var t, n;
        let r = await (tO =
            tO ||
            new Promise((t, n) => {
              var r, i, s, a;
              function o() {
                tD(),
                  gapi.load('gapi.iframes', {
                    callback() {
                      t(gapi.iframes.getContext());
                    },
                    ontimeout() {
                      tD(), n(p(e, 'network-request-failed'));
                    },
                    timeout: tN.get()
                  });
              }
              if (
                null ===
                  (i =
                    null === (r = e2().gapi) || void 0 === r
                      ? void 0
                      : r.iframes) || void 0 === i
                  ? void 0
                  : i.Iframe
              )
                t(gapi.iframes.getContext());
              else if (
                null === (s = e2().gapi) || void 0 === s ? void 0 : s.load
              )
                o();
              else {
                let l = ts('iframefcb');
                return (
                  (e2()[l] = () => {
                    gapi.load ? o() : n(p(e, 'network-request-failed'));
                  }),
                  ((a = `https://apis.google.com/js/api.js?onload=${l}`),
                  new Promise((e, t) => {
                    var n, r;
                    let i = document.createElement('script');
                    i.setAttribute('src', a),
                      (i.onload = e),
                      (i.onerror = (e) => {
                        let n = p('internal-error');
                        (n.customData = e), t(n);
                      }),
                      (i.type = 'text/javascript'),
                      (i.charset = 'UTF-8'),
                      (null !==
                        (r =
                          null ===
                            (n = document.getElementsByTagName('head')) ||
                          void 0 === n
                            ? void 0
                            : n[0]) && void 0 !== r
                        ? r
                        : document
                      ).appendChild(i);
                  })).catch((e) => n(e))
                );
              }
            }).catch((e) => {
              throw ((tO = null), e);
            })),
          a = e2().gapi;
        return (
          y(a, e, 'internal-error'),
          r.open(
            {
              where: document.body,
              url: (function (e) {
                let t = e.config;
                y(t.authDomain, e, 'auth-domain-config-required');
                let n = t.emulator
                    ? k(t, 'emulator/auth/iframe')
                    : `https://${e.config.authDomain}/__/auth/iframe`,
                  r = { apiKey: t.apiKey, appName: e.name, v: s.Jn },
                  a = tx.get(e.config.apiHost);
                a && (r.eid = a);
                let o = e._getFrameworks();
                return (
                  o.length && (r.fw = o.join(',')),
                  `${n}?${(0, i.xO)(r).slice(1)}`
                );
              })(e),
              messageHandlersFilter: a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
              attributes: tP,
              dontclear: !0
            },
            (t) =>
              new Promise(async (n, r) => {
                await t.restyle({ setHideOnLeave: !1 });
                let i = p(e, 'network-request-failed'),
                  s = e2().setTimeout(() => {
                    r(i);
                  }, tL.get());
                function a() {
                  e2().clearTimeout(s), n(t);
                }
                t.ping(a).then(a, () => {
                  r(i);
                });
              })
          )
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let tU = {
        location: 'yes',
        resizable: 'yes',
        statusbar: 'yes',
        toolbar: 'no'
      };
      class tF {
        constructor(e) {
          (this.window = e), (this.associatedEvent = null);
        }
        close() {
          if (this.window)
            try {
              this.window.close();
            } catch (e) {}
        }
      }
      function tV(e, t, n, r, a, o) {
        y(e.config.authDomain, e, 'auth-domain-config-required'),
          y(e.config.apiKey, e, 'invalid-api-key');
        let l = {
          apiKey: e.config.apiKey,
          appName: e.name,
          authType: n,
          redirectUrl: r,
          v: s.Jn,
          eventId: a
        };
        if (t instanceof eP)
          for (let [u, h] of (t.setDefaultLanguage(e.languageCode),
          (l.providerId = t.providerId || ''),
          (0, i.xb)(t.getCustomParameters()) ||
            (l.customParameters = JSON.stringify(t.getCustomParameters())),
          Object.entries(o || {})))
            l[u] = h;
        if (t instanceof ex) {
          let c = t.getScopes().filter((e) => '' !== e);
          c.length > 0 && (l.scopes = c.join(','));
        }
        for (let d of (e.tenantId && (l.tid = e.tenantId), Object.keys(l)))
          void 0 === l[d] && delete l[d];
        return `${(function ({ config: e }) {
          return e.emulator
            ? k(e, 'emulator/auth/handler')
            : `https://${e.authDomain}/__/auth/handler`;
        })(e)}?${(0, i.xO)(l).slice(1)}`;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let tB = 'webStorageSupport',
        tj = class {
          constructor() {
            (this.eventManagers = {}),
              (this.iframes = {}),
              (this.originValidationPromises = {}),
              (this._redirectPersistence = eY),
              (this._completeRedirectFn = tb),
              (this._overrideRedirectResult = t_);
          }
          async _openPopup(e, t, n, r) {
            var s;
            w(
              null === (s = this.eventManagers[e._key()]) || void 0 === s
                ? void 0
                : s.manager,
              '_initialize() not called before _openPopup()'
            );
            let a = tV(e, t, n, T(), r);
            return (function (e, t, n, r = 500, s = 600) {
              let a = Math.max(
                  (window.screen.availHeight - s) / 2,
                  0
                ).toString(),
                o = Math.max((window.screen.availWidth - r) / 2, 0).toString(),
                l = '',
                u = Object.assign(Object.assign({}, tU), {
                  width: r.toString(),
                  height: s.toString(),
                  top: a,
                  left: o
                }),
                h = (0, i.z$)().toLowerCase();
              n && (l = er(h) ? '_blank' : n),
                et(h) &&
                  ((t = t || 'http://localhost'), (u.scrollbars = 'yes'));
              let c = Object.entries(u).reduce(
                (e, [t, n]) => `${e}${t}=${n},`,
                ''
              );
              if (
                (function (e = (0, i.z$)()) {
                  var t;
                  return (
                    el(e) &&
                    !!(null === (t = window.navigator) || void 0 === t
                      ? void 0
                      : t.standalone)
                  );
                })(h) &&
                '_self' !== l
              )
                return (
                  (function (e, t) {
                    let n = document.createElement('a');
                    (n.href = e), (n.target = t);
                    let r = document.createEvent('MouseEvent');
                    r.initMouseEvent(
                      'click',
                      !0,
                      !0,
                      window,
                      1,
                      0,
                      0,
                      0,
                      0,
                      !1,
                      !1,
                      !1,
                      !1,
                      1,
                      null
                    ),
                      n.dispatchEvent(r);
                  })(t || '', l),
                  new tF(null)
                );
              let d = window.open(t || '', l, c);
              y(d, e, 'popup-blocked');
              try {
                d.focus();
              } catch (f) {}
              return new tF(d);
            })(e, a, e0());
          }
          async _openRedirect(e, t, n, r) {
            var i;
            return (
              await this._originValidation(e),
              (i = tV(e, t, n, T(), r)),
              (e2().location.href = i),
              new Promise(() => {})
            );
          }
          _initialize(e) {
            let t = e._key();
            if (this.eventManagers[t]) {
              let { manager: n, promise: r } = this.eventManagers[t];
              return n
                ? Promise.resolve(n)
                : (w(r, 'If manager is not set, promise should be'), r);
            }
            let i = this.initAndGetManager(e);
            return (
              (this.eventManagers[t] = { promise: i }),
              i.catch(() => {
                delete this.eventManagers[t];
              }),
              i
            );
          }
          async initAndGetManager(e) {
            let t = await tM(e),
              n = new tT(e);
            return (
              t.register(
                'authEvent',
                (t) => {
                  y(null == t ? void 0 : t.authEvent, e, 'invalid-auth-event');
                  let r = n.onEvent(t.authEvent);
                  return { status: r ? 'ACK' : 'ERROR' };
                },
                gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
              ),
              (this.eventManagers[e._key()] = { manager: n }),
              (this.iframes[e._key()] = t),
              n
            );
          }
          _isIframeWebStorageSupported(e, t) {
            let n = this.iframes[e._key()];
            n.send(
              tB,
              { type: tB },
              (n) => {
                var r;
                let i =
                  null === (r = null == n ? void 0 : n[0]) || void 0 === r
                    ? void 0
                    : r[tB];
                void 0 !== i && t(!!i), f(e, 'internal-error');
              },
              gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
            );
          }
          _originValidation(e) {
            let t = e._key();
            return (
              this.originValidationPromises[t] ||
                (this.originValidationPromises[t] = tA(e)),
              this.originValidationPromises[t]
            );
          }
          get _shouldInitProactively() {
            return eu() || en() || el();
          }
        };
      var tq = '@firebase/auth',
        t$ = '0.20.11';
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class tz {
        constructor(e) {
          (this.auth = e), (this.internalListeners = new Map());
        }
        getUid() {
          var e;
          return (
            this.assertAuthConfigured(),
            (null === (e = this.auth.currentUser) || void 0 === e
              ? void 0
              : e.uid) || null
          );
        }
        async getToken(e) {
          if (
            (this.assertAuthConfigured(),
            await this.auth._initializationPromise,
            !this.auth.currentUser)
          )
            return null;
          let t = await this.auth.currentUser.getIdToken(e);
          return { accessToken: t };
        }
        addAuthTokenListener(e) {
          if ((this.assertAuthConfigured(), this.internalListeners.has(e)))
            return;
          let t = this.auth.onIdTokenChanged((t) => {
            e((null == t ? void 0 : t.stsTokenManager.accessToken) || null);
          });
          this.internalListeners.set(e, t), this.updateProactiveRefresh();
        }
        removeAuthTokenListener(e) {
          this.assertAuthConfigured();
          let t = this.internalListeners.get(e);
          t &&
            (this.internalListeners.delete(e),
            t(),
            this.updateProactiveRefresh());
        }
        assertAuthConfigured() {
          y(
            this.auth._initializationPromise,
            'dependent-sdk-initialized-before-auth'
          );
        }
        updateProactiveRefresh() {
          this.internalListeners.size > 0
            ? this.auth._startProactiveRefresh()
            : this.auth._stopProactiveRefresh();
        }
      }
      let tH = (0, i.Pz)('authIdTokenMaxAge') || 300,
        tK = null,
        tG = (e) => async (t) => {
          let n = t && (await t.getIdTokenResult()),
            r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
          if (r && r > tH) return;
          let i = null == n ? void 0 : n.token;
          tK !== i &&
            ((tK = i),
            await fetch(e, {
              method: i ? 'POST' : 'DELETE',
              headers: i ? { Authorization: `Bearer ${i}` } : {}
            }));
        };
      function tW(e = (0, s.Mq)()) {
        let t = (0, s.qX)(e, 'auth');
        if (t.isInitialized()) return t.getImmediate();
        let n = /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */ (function (e, t) {
            let n = (0, s.qX)(e, 'auth');
            if (n.isInitialized()) {
              let r = n.getImmediate(),
                a = n.getOptions();
              if ((0, i.vZ)(a, null != t ? t : {})) return r;
              f(r, 'already-initialized');
            }
            let o = n.initialize({ options: t });
            return o;
          })(e, { popupRedirectResolver: tj, persistence: [ti, eJ, eY] }),
          r = (0, i.Pz)('authTokenSyncURL');
        if (r) {
          var a, o, l, u, h;
          let c = tG(r);
          (l = () => c(n.currentUser)),
            (0, i.m9)(n).beforeAuthStateChanged(c, l),
            (h = (e) => c(e)),
            (0, i.m9)(n).onIdTokenChanged(h, void 0, void 0);
        }
        let d = (0, i.q4)('auth');
        return d && em(n, `http://${d}`), n;
      }
      (r = 'Browser'),
        (0, s.Xd)(
          new l.wA(
            'auth',
            (e, { options: t }) => {
              let n = e.getProvider('app').getImmediate(),
                i = e.getProvider('heartbeat'),
                { apiKey: s, authDomain: a } = n.options;
              return ((e, n) => {
                y(s && !s.includes(':'), 'invalid-api-key', {
                  appName: e.name
                }),
                  y(!(null == a ? void 0 : a.includes(':')), 'argument-error', {
                    appName: e.name
                  });
                let i = {
                    apiKey: s,
                    authDomain: a,
                    clientPlatform: r,
                    apiHost: 'identitytoolkit.googleapis.com',
                    tokenApiHost: 'securetoken.googleapis.com',
                    apiScheme: 'https',
                    sdkClientVersion: eh(r)
                  },
                  o = new ed(e, n, i);
                return (
                  (function (e, t) {
                    let n = (null == t ? void 0 : t.persistence) || [],
                      r = (Array.isArray(n) ? n : [n]).map(b);
                    (null == t ? void 0 : t.errorMap) &&
                      e._updateErrorMap(t.errorMap),
                      e._initializeWithPersistence(
                        r,
                        null == t ? void 0 : t.popupRedirectResolver
                      );
                  })(o, t),
                  o
                );
              })(n, i);
            },
            'PUBLIC'
          )
            .setInstantiationMode('EXPLICIT')
            .setInstanceCreatedCallback((e, t, n) => {
              let r = e.getProvider('auth-internal');
              r.initialize();
            })
        ),
        (0, s.Xd)(
          new l.wA(
            'auth-internal',
            (e) => {
              var t;
              let n = ef(e.getProvider('auth').getImmediate());
              return new tz(n);
            },
            'PRIVATE'
          ).setInstantiationMode('EXPLICIT')
        ),
        (0, s.KN)(
          tq,
          t$,
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */ (function (e) {
            switch (e) {
              case 'Node':
                return 'node';
              case 'ReactNative':
                return 'rn';
              case 'Worker':
                return 'webworker';
              case 'Cordova':
                return 'cordova';
              default:
                return;
            }
          })(r)
        ),
        (0, s.KN)(tq, t$, 'esm2017');
    },
    5321: function (e, t, n) {
      'use strict';
      n.d(t, {
        ET: function () {
          return lQ;
        },
        Ab: function () {
          return l3;
        },
        vr: function () {
          return l4;
        },
        hJ: function () {
          return oU;
        },
        at: function () {
          return oL;
        },
        oe: function () {
          return lW;
        },
        JU: function () {
          return oF;
        },
        Jm: function () {
          return o3;
        },
        Yp: function () {
          return lZ;
        },
        QT: function () {
          return l$;
        },
        PL: function () {
          return lH;
        },
        ad: function () {
          return oZ;
        },
        nP: function () {
          return l6;
        },
        b9: function () {
          return lL;
        },
        cf: function () {
          return lX;
        },
        Xo: function () {
          return lD;
        },
        IO: function () {
          return lC;
        },
        iE: function () {
          return oB;
        },
        Eo: function () {
          return oV;
        },
        Bt: function () {
          return l2;
        },
        pl: function () {
          return lK;
        },
        r7: function () {
          return lG;
        },
        ar: function () {
          return lR;
        },
        qs: function () {
          return l9;
        }
      });
      var r,
        i,
        s,
        a,
        o,
        l,
        u,
        h,
        c,
        d = n(5816),
        f = n(8463),
        p = n(3333),
        m = n(4444),
        g =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : 'undefined' != typeof self
            ? self
            : {},
        y = {},
        v = v || {},
        w = g || self;
      function _() {}
      function b(e) {
        var t = typeof e;
        return (
          'array' ==
            (t =
              'object' != t
                ? t
                : e
                ? Array.isArray(e)
                  ? 'array'
                  : t
                : 'null') ||
          ('object' == t && 'number' == typeof e.length)
        );
      }
      function T(e) {
        var t = typeof e;
        return ('object' == t && null != e) || 'function' == t;
      }
      function I(e, t, n) {
        return e.call.apply(e.bind, arguments);
      }
      function E(e, t, n) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var n = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(n, r), e.apply(t, n);
          };
        }
        return function () {
          return e.apply(t, arguments);
        };
      }
      function k(e, t, n) {
        return (k =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code')
            ? I
            : E).apply(null, arguments);
      }
      function S(e, t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
          var t = n.slice();
          return t.push.apply(t, arguments), e.apply(this, t);
        };
      }
      function C(e, t) {
        function n() {}
        (n.prototype = t.prototype),
          (e.X = t.prototype),
          (e.prototype = new n()),
          (e.prototype.constructor = e),
          (e.Wb = function (e, n, r) {
            for (
              var i = Array(arguments.length - 2), s = 2;
              s < arguments.length;
              s++
            )
              i[s - 2] = arguments[s];
            return t.prototype[n].apply(e, i);
          });
      }
      function A() {
        (this.s = this.s), (this.o = this.o);
      }
      (A.prototype.s = !1),
        (A.prototype.na = function () {
          this.s || ((this.s = !0), this.M());
        }),
        (A.prototype.M = function () {
          if (this.o) for (; this.o.length; ) this.o.shift()();
        });
      let R = Array.prototype.indexOf
        ? function (e, t) {
            return Array.prototype.indexOf.call(e, t, void 0);
          }
        : function (e, t) {
            if ('string' == typeof e)
              return 'string' != typeof t || 1 != t.length
                ? -1
                : e.indexOf(t, 0);
            for (let n = 0; n < e.length; n++)
              if (n in e && e[n] === t) return n;
            return -1;
          };
      function N(e) {
        let t = e.length;
        if (0 < t) {
          let n = Array(t);
          for (let r = 0; r < t; r++) n[r] = e[r];
          return n;
        }
        return [];
      }
      function D(e, t) {
        for (let n = 1; n < arguments.length; n++) {
          let r = arguments[n];
          if (b(r)) {
            let i = e.length || 0,
              s = r.length || 0;
            e.length = i + s;
            for (let a = 0; a < s; a++) e[i + a] = r[a];
          } else e.push(r);
        }
      }
      function O(e, t) {
        (this.type = e),
          (this.g = this.target = t),
          (this.defaultPrevented = !1);
      }
      O.prototype.h = function () {
        this.defaultPrevented = !0;
      };
      var L = (function () {
        if (!w.addEventListener || !Object.defineProperty) return !1;
        var e = !1,
          t = Object.defineProperty({}, 'passive', {
            get: function () {
              e = !0;
            }
          });
        try {
          w.addEventListener('test', _, t), w.removeEventListener('test', _, t);
        } catch (n) {}
        return e;
      })();
      function P(e) {
        return /^[\s\xa0]*$/.test(e);
      }
      var x = String.prototype.trim
        ? function (e) {
            return e.trim();
          }
        : function (e) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1];
          };
      function M(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function U() {
        var e = w.navigator;
        return e && (e = e.userAgent) ? e : '';
      }
      function F(e) {
        return -1 != U().indexOf(e);
      }
      function V(e) {
        return V[' '](e), e;
      }
      V[' '] = _;
      var B = F('Opera'),
        j = F('Trident') || F('MSIE'),
        q = F('Edge'),
        $ = q || j,
        z =
          F('Gecko') &&
          !(-1 != U().toLowerCase().indexOf('webkit') && !F('Edge')) &&
          !(F('Trident') || F('MSIE')) &&
          !F('Edge'),
        H = -1 != U().toLowerCase().indexOf('webkit') && !F('Edge');
      function K() {
        var e = w.document;
        return e ? e.documentMode : void 0;
      }
      a: {
        var G,
          W = '',
          Q =
            ((G = U()),
            z
              ? /rv:([^\);]+)(\)|;)/.exec(G)
              : q
              ? /Edge\/([\d\.]+)/.exec(G)
              : j
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(G)
              : H
              ? /WebKit\/(\S+)/.exec(G)
              : B
              ? /(?:Version)[ \/]?(\S+)/.exec(G)
              : void 0);
        if ((Q && (W = Q ? Q[1] : ''), j)) {
          var X = K();
          if (null != X && X > parseFloat(W)) {
            s = String(X);
            break a;
          }
        }
        s = W;
      }
      var J = {};
      if (w.document && j) {
        a = K() || parseInt(s, 10) || void 0;
      } else a = void 0;
      var Y = a;
      function Z(e, t) {
        if (
          (O.call(this, e ? e.type : ''),
          (this.relatedTarget = this.g = this.target = null),
          (this.button =
            this.screenY =
            this.screenX =
            this.clientY =
            this.clientX =
              0),
          (this.key = ''),
          (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
          (this.state = null),
          (this.pointerId = 0),
          (this.pointerType = ''),
          (this.i = null),
          e)
        ) {
          var n = (this.type = e.type),
            r =
              e.changedTouches && e.changedTouches.length
                ? e.changedTouches[0]
                : null;
          if (
            ((this.target = e.target || e.srcElement),
            (this.g = t),
            (t = e.relatedTarget))
          ) {
            if (z) {
              a: {
                try {
                  V(t.nodeName);
                  var i = !0;
                  break a;
                } catch (s) {}
                i = !1;
              }
              i || (t = null);
            }
          } else
            'mouseover' == n
              ? (t = e.fromElement)
              : 'mouseout' == n && (t = e.toElement);
          (this.relatedTarget = t),
            r
              ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                (this.screenX = r.screenX || 0),
                (this.screenY = r.screenY || 0))
              : ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
                (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
                (this.screenX = e.screenX || 0),
                (this.screenY = e.screenY || 0)),
            (this.button = e.button),
            (this.key = e.key || ''),
            (this.ctrlKey = e.ctrlKey),
            (this.altKey = e.altKey),
            (this.shiftKey = e.shiftKey),
            (this.metaKey = e.metaKey),
            (this.pointerId = e.pointerId || 0),
            (this.pointerType =
              'string' == typeof e.pointerType
                ? e.pointerType
                : ee[e.pointerType] || ''),
            (this.state = e.state),
            (this.i = e),
            e.defaultPrevented && Z.X.h.call(this);
        }
      }
      C(Z, O);
      var ee = { 2: 'touch', 3: 'pen', 4: 'mouse' };
      Z.prototype.h = function () {
        Z.X.h.call(this);
        var e = this.i;
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      };
      var et = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
        en = 0;
      function er(e, t, n, r, i) {
        (this.listener = e),
          (this.proxy = null),
          (this.src = t),
          (this.type = n),
          (this.capture = !!r),
          (this.ha = i),
          (this.key = ++en),
          (this.ba = this.ea = !1);
      }
      function ei(e) {
        (e.ba = !0),
          (e.listener = null),
          (e.proxy = null),
          (e.src = null),
          (e.ha = null);
      }
      function es(e, t, n) {
        for (let r in e) t.call(n, e[r], r, e);
      }
      function ea(e) {
        let t = {};
        for (let n in e) t[n] = e[n];
        return t;
      }
      let eo =
        'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
          ' '
        );
      function el(e, t) {
        let n, r;
        for (let i = 1; i < arguments.length; i++) {
          for (n in (r = arguments[i])) e[n] = r[n];
          for (let s = 0; s < eo.length; s++)
            (n = eo[s]),
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }
      function eu(e) {
        (this.src = e), (this.g = {}), (this.h = 0);
      }
      function eh(e, t) {
        var n = t.type;
        if (n in e.g) {
          var r,
            i = e.g[n],
            s = R(i, t);
          (r = 0 <= s) && Array.prototype.splice.call(i, s, 1),
            r && (ei(t), 0 == e.g[n].length && (delete e.g[n], e.h--));
        }
      }
      function ec(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
          var s = e[i];
          if (!s.ba && s.listener == t && !!n == s.capture && s.ha == r)
            return i;
        }
        return -1;
      }
      eu.prototype.add = function (e, t, n, r, i) {
        var s = e.toString();
        (e = this.g[s]) || ((e = this.g[s] = []), this.h++);
        var a = ec(e, t, r, i);
        return (
          -1 < a
            ? ((t = e[a]), n || (t.ea = !1))
            : (((t = new er(t, this.src, s, !!r, i)).ea = n), e.push(t)),
          t
        );
      };
      var ed = 'closure_lm_' + ((1e6 * Math.random()) | 0),
        ef = {};
      function ep(e, t, n, r, i) {
        if (r && r.once)
          return (function e(t, n, r, i, s) {
            if (Array.isArray(n)) {
              for (var a = 0; a < n.length; a++) e(t, n[a], r, i, s);
              return null;
            }
            return (
              (r = eb(r)),
              t && t[et]
                ? t.O(n, r, T(i) ? !!i.capture : !!i, s)
                : em(t, n, r, !0, i, s)
            );
          })(e, t, n, r, i);
        if (Array.isArray(t)) {
          for (var s = 0; s < t.length; s++) ep(e, t[s], n, r, i);
          return null;
        }
        return (
          (n = eb(n)),
          e && e[et]
            ? e.N(t, n, T(r) ? !!r.capture : !!r, i)
            : em(e, t, n, !1, r, i)
        );
      }
      function em(e, t, n, r, i, s) {
        if (!t) throw Error('Invalid event type');
        var a = T(i) ? !!i.capture : !!i,
          o = ew(e);
        if ((o || (e[ed] = o = new eu(e)), (n = o.add(t, n, r, a, s)).proxy))
          return n;
        if (
          ((r = (function () {
            function e(n) {
              return t.call(e.src, e.listener, n);
            }
            let t = ev;
            return e;
          })()),
          (n.proxy = r),
          (r.src = e),
          (r.listener = n),
          e.addEventListener)
        )
          L || (i = a),
            void 0 === i && (i = !1),
            e.addEventListener(t.toString(), r, i);
        else if (e.attachEvent) e.attachEvent(ey(t.toString()), r);
        else if (e.addListener && e.removeListener) e.addListener(r);
        else throw Error('addEventListener and attachEvent are unavailable.');
        return n;
      }
      function eg(e) {
        if ('number' != typeof e && e && !e.ba) {
          var t = e.src;
          if (t && t[et]) eh(t.i, e);
          else {
            var n = e.type,
              r = e.proxy;
            t.removeEventListener
              ? t.removeEventListener(n, r, e.capture)
              : t.detachEvent
              ? t.detachEvent(ey(n), r)
              : t.addListener && t.removeListener && t.removeListener(r),
              (n = ew(t))
                ? (eh(n, e), 0 == n.h && ((n.src = null), (t[ed] = null)))
                : ei(e);
          }
        }
      }
      function ey(e) {
        return e in ef ? ef[e] : (ef[e] = 'on' + e);
      }
      function ev(e, t) {
        if (e.ba) e = !0;
        else {
          t = new Z(t, this);
          var n = e.listener,
            r = e.ha || e.src;
          e.ea && eg(e), (e = n.call(r, t));
        }
        return e;
      }
      function ew(e) {
        return (e = e[ed]) instanceof eu ? e : null;
      }
      var e_ = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
      function eb(e) {
        return 'function' == typeof e
          ? e
          : (e[e_] ||
              (e[e_] = function (t) {
                return e.handleEvent(t);
              }),
            e[e_]);
      }
      function eT() {
        A.call(this), (this.i = new eu(this)), (this.P = this), (this.I = null);
      }
      function eI(e, t) {
        var n,
          r = e.I;
        if (r) for (n = []; r; r = r.I) n.push(r);
        if (((e = e.P), (r = t.type || t), 'string' == typeof t))
          t = new O(t, e);
        else if (t instanceof O) t.target = t.target || e;
        else {
          var i = t;
          el((t = new O(r, e)), i);
        }
        if (((i = !0), n))
          for (var s = n.length - 1; 0 <= s; s--) {
            var a = (t.g = n[s]);
            i = eE(a, r, !0, t) && i;
          }
        if (
          ((i = eE((a = t.g = e), r, !0, t) && i),
          (i = eE(a, r, !1, t) && i),
          n)
        )
          for (s = 0; s < n.length; s++)
            i = eE((a = t.g = n[s]), r, !1, t) && i;
      }
      function eE(e, t, n, r) {
        if (!(t = e.i.g[String(t)])) return !0;
        t = t.concat();
        for (var i = !0, s = 0; s < t.length; ++s) {
          var a = t[s];
          if (a && !a.ba && a.capture == n) {
            var o = a.listener,
              l = a.ha || a.src;
            a.ea && eh(e.i, a), (i = !1 !== o.call(l, r) && i);
          }
        }
        return i && !r.defaultPrevented;
      }
      C(eT, A),
        (eT.prototype[et] = !0),
        (eT.prototype.removeEventListener = function (e, t, n, r) {
          !(function e(t, n, r, i, s) {
            if (Array.isArray(n))
              for (var a = 0; a < n.length; a++) e(t, n[a], r, i, s);
            else
              ((i = T(i) ? !!i.capture : !!i), (r = eb(r)), t && t[et])
                ? ((t = t.i),
                  (n = String(n).toString()) in t.g &&
                    -1 < (r = ec((a = t.g[n]), r, i, s)) &&
                    (ei(a[r]),
                    Array.prototype.splice.call(a, r, 1),
                    0 == a.length && (delete t.g[n], t.h--)))
                : t &&
                  (t = ew(t)) &&
                  ((n = t.g[n.toString()]),
                  (t = -1),
                  n && (t = ec(n, r, i, s)),
                  (r = -1 < t ? n[t] : null) && eg(r));
          })(this, e, t, n, r);
        }),
        (eT.prototype.M = function () {
          if ((eT.X.M.call(this), this.i)) {
            var e,
              t = this.i;
            for (e in t.g) {
              for (var n = t.g[e], r = 0; r < n.length; r++) ei(n[r]);
              delete t.g[e], t.h--;
            }
          }
          this.I = null;
        }),
        (eT.prototype.N = function (e, t, n, r) {
          return this.i.add(String(e), t, !1, n, r);
        }),
        (eT.prototype.O = function (e, t, n, r) {
          return this.i.add(String(e), t, !0, n, r);
        });
      var ek = w.JSON.stringify;
      function eS() {
        var e = eO;
        let t = null;
        return (
          e.g &&
            ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)),
          t
        );
      }
      var eC = new (class {
        constructor(e, t) {
          (this.i = e), (this.j = t), (this.h = 0), (this.g = null);
        }
        get() {
          let e;
          return (
            0 < this.h
              ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
              : (e = this.i()),
            e
          );
        }
      })(
        () => new eA(),
        (e) => e.reset()
      );
      class eA {
        constructor() {
          this.next = this.g = this.h = null;
        }
        set(e, t) {
          (this.h = e), (this.g = t), (this.next = null);
        }
        reset() {
          this.next = this.g = this.h = null;
        }
      }
      function eR(e) {
        w.setTimeout(() => {
          throw e;
        }, 0);
      }
      function eN(e, t) {
        var n;
        o ||
          ((n = w.Promise.resolve(void 0)),
          (o = function () {
            n.then(eL);
          })),
          eD || (o(), (eD = !0)),
          eO.add(e, t);
      }
      var eD = !1,
        eO = new (class {
          constructor() {
            this.h = this.g = null;
          }
          add(e, t) {
            let n = eC.get();
            n.set(e, t),
              this.h ? (this.h.next = n) : (this.g = n),
              (this.h = n);
          }
        })();
      function eL() {
        for (var e; (e = eS()); ) {
          try {
            e.h.call(e.g);
          } catch (t) {
            eR(t);
          }
          var n = eC;
          n.j(e), 100 > n.h && (n.h++, (e.next = n.g), (n.g = e));
        }
        eD = !1;
      }
      function eP(e, t) {
        eT.call(this),
          (this.h = e || 1),
          (this.g = t || w),
          (this.j = k(this.lb, this)),
          (this.l = Date.now());
      }
      function ex(e) {
        (e.ca = !1), e.R && (e.g.clearTimeout(e.R), (e.R = null));
      }
      function eM(e, t, n) {
        if ('function' == typeof e) n && (e = k(e, n));
        else if (e && 'function' == typeof e.handleEvent)
          e = k(e.handleEvent, e);
        else throw Error('Invalid listener argument');
        return 2147483647 < Number(t) ? -1 : w.setTimeout(e, t || 0);
      }
      C(eP, eT),
        ((c = eP.prototype).ca = !1),
        (c.R = null),
        (c.lb = function () {
          if (this.ca) {
            var e = Date.now() - this.l;
            0 < e && e < 0.8 * this.h
              ? (this.R = this.g.setTimeout(this.j, this.h - e))
              : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
                eI(this, 'tick'),
                this.ca && (ex(this), this.start()));
          }
        }),
        (c.start = function () {
          (this.ca = !0),
            this.R ||
              ((this.R = this.g.setTimeout(this.j, this.h)),
              (this.l = Date.now()));
        }),
        (c.M = function () {
          eP.X.M.call(this), ex(this), delete this.g;
        });
      class eU extends A {
        constructor(e, t) {
          super(),
            (this.m = e),
            (this.j = t),
            (this.h = null),
            (this.i = !1),
            (this.g = null);
        }
        l(e) {
          (this.h = arguments),
            this.g
              ? (this.i = !0)
              : (function e(t) {
                  t.g = eM(() => {
                    (t.g = null), t.i && ((t.i = !1), e(t));
                  }, t.j);
                  let n = t.h;
                  (t.h = null), t.m.apply(null, n);
                })(this);
        }
        M() {
          super.M(),
            this.g &&
              (w.clearTimeout(this.g),
              (this.g = null),
              (this.i = !1),
              (this.h = null));
        }
      }
      function eF(e) {
        A.call(this), (this.h = e), (this.g = {});
      }
      C(eF, A);
      var eV = [];
      function eB(e, t, n, r) {
        Array.isArray(n) || (n && (eV[0] = n.toString()), (n = eV));
        for (var i = 0; i < n.length; i++) {
          var s = ep(t, n[i], r || e.handleEvent, !1, e.h || e);
          if (!s) break;
          e.g[s.key] = s;
        }
      }
      function ej(e) {
        es(
          e.g,
          function (e, t) {
            this.g.hasOwnProperty(t) && eg(e);
          },
          e
        ),
          (e.g = {});
      }
      function eq() {
        this.g = !0;
      }
      function e$(e, t, n, r) {
        e.info(function () {
          return (
            'XMLHTTP TEXT (' +
            t +
            '): ' +
            (function (e, t) {
              if (!e.g) return t;
              if (!t) return null;
              try {
                var n = JSON.parse(t);
                if (n) {
                  for (e = 0; e < n.length; e++)
                    if (Array.isArray(n[e])) {
                      var r = n[e];
                      if (!(2 > r.length)) {
                        var i = r[1];
                        if (Array.isArray(i) && !(1 > i.length)) {
                          var s = i[0];
                          if ('noop' != s && 'stop' != s && 'close' != s)
                            for (var a = 1; a < i.length; a++) i[a] = '';
                        }
                      }
                    }
                }
                return ek(n);
              } catch (o) {
                return t;
              }
            })(e, n) +
            (r ? ' ' + r : '')
          );
        });
      }
      (eF.prototype.M = function () {
        eF.X.M.call(this), ej(this);
      }),
        (eF.prototype.handleEvent = function () {
          throw Error('EventHandler.handleEvent not implemented');
        }),
        (eq.prototype.Aa = function () {
          this.g = !1;
        }),
        (eq.prototype.info = function () {});
      var ez = {},
        eH = null;
      function eK() {
        return (eH = eH || new eT());
      }
      function eG(e) {
        O.call(this, ez.Pa, e);
      }
      function eW(e) {
        let t = eK();
        eI(t, new eG(t));
      }
      function eQ(e, t) {
        O.call(this, ez.STAT_EVENT, e), (this.stat = t);
      }
      function eX(e) {
        let t = eK();
        eI(t, new eQ(t, e));
      }
      function eJ(e, t) {
        O.call(this, ez.Qa, e), (this.size = t);
      }
      function eY(e, t) {
        if ('function' != typeof e)
          throw Error('Fn must not be null and must be a function');
        return w.setTimeout(function () {
          e();
        }, t);
      }
      (ez.Pa = 'serverreachability'),
        C(eG, O),
        (ez.STAT_EVENT = 'statevent'),
        C(eQ, O),
        (ez.Qa = 'timingevent'),
        C(eJ, O);
      var eZ = {
          NO_ERROR: 0,
          mb: 1,
          zb: 2,
          yb: 3,
          tb: 4,
          xb: 5,
          Ab: 6,
          Ma: 7,
          TIMEOUT: 8,
          Db: 9
        },
        e0 = {
          rb: 'complete',
          Nb: 'success',
          Na: 'error',
          Ma: 'abort',
          Fb: 'ready',
          Gb: 'readystatechange',
          TIMEOUT: 'timeout',
          Bb: 'incrementaldata',
          Eb: 'progress',
          ub: 'downloadprogress',
          Vb: 'uploadprogress'
        };
      function e1() {}
      function e2(e) {
        return e.h || (e.h = e.i());
      }
      function e4() {}
      e1.prototype.h = null;
      var e3 = { OPEN: 'a', qb: 'b', Na: 'c', Cb: 'd' };
      function e6() {
        O.call(this, 'd');
      }
      function e9() {
        O.call(this, 'c');
      }
      function e5() {}
      function e8(e, t, n, r) {
        (this.l = e),
          (this.j = t),
          (this.m = n),
          (this.U = r || 1),
          (this.S = new eF(this)),
          (this.O = te),
          (e = $ ? 125 : void 0),
          (this.T = new eP(e)),
          (this.H = null),
          (this.i = !1),
          (this.s = this.A = this.v = this.K = this.F = this.V = this.B = null),
          (this.D = []),
          (this.g = null),
          (this.C = 0),
          (this.o = this.u = null),
          (this.Y = -1),
          (this.I = !1),
          (this.N = 0),
          (this.L = null),
          (this.$ = this.J = this.Z = this.P = !1),
          (this.h = new e7());
      }
      function e7() {
        (this.i = null), (this.g = ''), (this.h = !1);
      }
      C(e6, O),
        C(e9, O),
        C(e5, e1),
        (e5.prototype.g = function () {
          return new XMLHttpRequest();
        }),
        (e5.prototype.i = function () {
          return {};
        }),
        (l = new e5());
      var te = 45e3,
        tt = {},
        tn = {};
      function tr(e, t, n) {
        (e.K = 1), (e.v = tT(ty(t))), (e.s = n), (e.P = !0), ti(e, null);
      }
      function ti(e, t) {
        (e.F = Date.now()), tl(e), (e.A = ty(e.v));
        var n = e.A,
          r = e.U;
        Array.isArray(r) || (r = [String(r)]),
          tx(n.i, 't', r),
          (e.C = 0),
          (n = e.l.H),
          (e.h = new e7()),
          (e.g = nk(e.l, n ? t : null, !e.s)),
          0 < e.N && (e.L = new eU(k(e.La, e, e.g), e.N)),
          eB(e.S, e.g, 'readystatechange', e.ib),
          (t = e.H ? ea(e.H) : {}),
          e.s
            ? (e.u || (e.u = 'POST'),
              (t['Content-Type'] = 'application/x-www-form-urlencoded'),
              e.g.da(e.A, e.u, e.s, t))
            : ((e.u = 'GET'), e.g.da(e.A, e.u, null, t)),
          eW(),
          (function (e, t, n, r, i, s) {
            e.info(function () {
              if (e.g) {
                if (s)
                  for (var a = '', o = s.split('&'), l = 0; l < o.length; l++) {
                    var u = o[l].split('=');
                    if (1 < u.length) {
                      var h = u[0];
                      u = u[1];
                      var c = h.split('_');
                      a =
                        2 <= c.length && 'type' == c[1]
                          ? a + (h + '=') + u + '&'
                          : a + (h + '=redacted&');
                    }
                  }
                else a = null;
              } else a = s;
              return (
                'XMLHTTP REQ (' +
                r +
                ') [attempt ' +
                i +
                ']: ' +
                t +
                '\n' +
                n +
                '\n' +
                a
              );
            });
          })(e.j, e.u, e.A, e.m, e.U, e.s);
      }
      function ts(e) {
        return !!e.g && 'GET' == e.u && 2 != e.K && e.l.Da;
      }
      function ta(e, t, n) {
        let r = !0,
          i;
        for (; !e.I && e.C < n.length; )
          if ((i = to(e, n)) == tn) {
            4 == t && ((e.o = 4), eX(14), (r = !1)),
              e$(e.j, e.m, null, '[Incomplete Response]');
            break;
          } else if (i == tt) {
            (e.o = 4), eX(15), e$(e.j, e.m, n, '[Invalid Chunk]'), (r = !1);
            break;
          } else e$(e.j, e.m, i, null), tf(e, i);
        ts(e) && i != tn && i != tt && ((e.h.g = ''), (e.C = 0)),
          4 != t || 0 != n.length || e.h.h || ((e.o = 1), eX(16), (r = !1)),
          (e.i = e.i && r),
          r
            ? 0 < n.length &&
              !e.$ &&
              ((e.$ = !0),
              (t = e.l).g == e &&
                t.$ &&
                !t.K &&
                (t.j.info(
                  'Great, no buffering proxy detected. Bytes received: ' +
                    n.length
                ),
                ny(t),
                (t.K = !0),
                eX(11)))
            : (e$(e.j, e.m, n, '[Invalid Chunked Response]'), td(e), tc(e));
      }
      function to(e, t) {
        var n = e.C,
          r = t.indexOf('\n', n);
        return -1 == r
          ? tn
          : isNaN((n = Number(t.substring(n, r))))
          ? tt
          : (r += 1) + n > t.length
          ? tn
          : ((t = t.substr(r, n)), (e.C = r + n), t);
      }
      function tl(e) {
        (e.V = Date.now() + e.O), tu(e, e.O);
      }
      function tu(e, t) {
        if (null != e.B) throw Error('WatchDog timer not null');
        e.B = eY(k(e.gb, e), t);
      }
      function th(e) {
        e.B && (w.clearTimeout(e.B), (e.B = null));
      }
      function tc(e) {
        0 == e.l.G || e.I || n_(e.l, e);
      }
      function td(e) {
        th(e);
        var t = e.L;
        t && 'function' == typeof t.na && t.na(),
          (e.L = null),
          ex(e.T),
          ej(e.S),
          e.g && ((t = e.g), (e.g = null), t.abort(), t.na());
      }
      function tf(e, t) {
        try {
          var n = e.l;
          if (0 != n.G && (n.g == e || tq(n.h, e))) {
            if (!e.J && tq(n.h, e) && 3 == n.G) {
              try {
                var r = n.Fa.g.parse(t);
              } catch (i) {
                r = null;
              }
              if (Array.isArray(r) && 3 == r.length) {
                var s = r;
                if (0 == s[0]) {
                  a: if (!n.u) {
                    if (n.g) {
                      if (n.g.F + 3e3 < e.F) nw(n), nu(n);
                      else break a;
                    }
                    ng(n), eX(18);
                  }
                } else
                  (n.Ba = s[1]),
                    0 < n.Ba - n.T &&
                      37500 > s[2] &&
                      n.L &&
                      0 == n.A &&
                      !n.v &&
                      (n.v = eY(k(n.cb, n), 6e3));
                if (1 >= tj(n.h) && n.ja) {
                  try {
                    n.ja();
                  } catch (a) {}
                  n.ja = void 0;
                }
              } else nT(n, 11);
            } else if (((e.J || n.g == e) && nw(n), !P(t)))
              for (s = n.Fa.g.parse(t), t = 0; t < s.length; t++) {
                let o = s[t];
                if (((n.T = o[0]), (o = o[1]), 2 == n.G)) {
                  if ('c' == o[0]) {
                    (n.I = o[1]), (n.ka = o[2]);
                    let l = o[3];
                    null != l && ((n.ma = l), n.j.info('VER=' + n.ma));
                    let u = o[4];
                    null != u && ((n.Ca = u), n.j.info('SVER=' + n.Ca));
                    let h = o[5];
                    null != h &&
                      'number' == typeof h &&
                      0 < h &&
                      ((r = 1.5 * h),
                      (n.J = r),
                      n.j.info('backChannelRequestTimeoutMs_=' + r)),
                      (r = n);
                    let c = e.g;
                    if (c) {
                      let d = c.g
                        ? c.g.getResponseHeader('X-Client-Wire-Protocol')
                        : null;
                      if (d) {
                        var f = r.h;
                        f.g ||
                          (-1 == d.indexOf('spdy') &&
                            -1 == d.indexOf('quic') &&
                            -1 == d.indexOf('h2')) ||
                          ((f.j = f.l),
                          (f.g = new Set()),
                          f.h && (t$(f, f.h), (f.h = null)));
                      }
                      if (r.D) {
                        let p = c.g
                          ? c.g.getResponseHeader('X-HTTP-Session-Id')
                          : null;
                        p && ((r.za = p), tb(r.F, r.D, p));
                      }
                    }
                    if (
                      ((n.G = 3),
                      n.l && n.l.xa(),
                      n.$ &&
                        ((n.P = Date.now() - e.F),
                        n.j.info('Handshake RTT: ' + n.P + 'ms')),
                      ((r = n).sa = nE(r, r.H ? r.ka : null, r.V)),
                      e.J)
                    ) {
                      tz(r.h, e);
                      var m = r.J;
                      m && e.setTimeout(m), e.B && (th(e), tl(e)), (r.g = e);
                    } else nm(r);
                    0 < n.i.length && nc(n);
                  } else ('stop' != o[0] && 'close' != o[0]) || nT(n, 7);
                } else
                  3 == n.G &&
                    ('stop' == o[0] || 'close' == o[0]
                      ? 'stop' == o[0]
                        ? nT(n, 7)
                        : nl(n)
                      : 'noop' != o[0] && n.l && n.l.wa(o),
                    (n.A = 0));
              }
          }
          eW(4);
        } catch (g) {}
      }
      function tp(e, t) {
        if (e.forEach && 'function' == typeof e.forEach) e.forEach(t, void 0);
        else if (b(e) || 'string' == typeof e)
          Array.prototype.forEach.call(e, t, void 0);
        else
          for (
            var n = (function (e) {
                if (e.oa && 'function' == typeof e.oa) return e.oa();
                if (!e.W || 'function' != typeof e.W) {
                  if ('undefined' != typeof Map && e instanceof Map)
                    return Array.from(e.keys());
                  if (!('undefined' != typeof Set && e instanceof Set)) {
                    if (b(e) || 'string' == typeof e) {
                      var t = [];
                      e = e.length;
                      for (var n = 0; n < e; n++) t.push(n);
                      return t;
                    }
                    for (let r in ((t = []), (n = 0), e)) t[n++] = r;
                    return t;
                  }
                }
              })(e),
              r = (function (e) {
                if (e.W && 'function' == typeof e.W) return e.W();
                if (
                  ('undefined' != typeof Map && e instanceof Map) ||
                  ('undefined' != typeof Set && e instanceof Set)
                )
                  return Array.from(e.values());
                if ('string' == typeof e) return e.split('');
                if (b(e)) {
                  for (var t = [], n = e.length, r = 0; r < n; r++)
                    t.push(e[r]);
                  return t;
                }
                for (r in ((t = []), (n = 0), e)) t[n++] = e[r];
                return t;
              })(e),
              i = r.length,
              s = 0;
            s < i;
            s++
          )
            t.call(void 0, r[s], n && n[s], e);
      }
      ((c = e8.prototype).setTimeout = function (e) {
        this.O = e;
      }),
        (c.ib = function (e) {
          e = e.target;
          let t = this.L;
          t && 3 == nn(e) ? t.l() : this.La(e);
        }),
        (c.La = function (e) {
          try {
            if (e == this.g)
              a: {
                let t = nn(this.g);
                var n = this.g.Ea();
                let r = this.g.aa();
                if (
                  !(3 > t) &&
                  (3 != t ||
                    $ ||
                    (this.g && (this.h.h || this.g.fa() || nr(this.g))))
                ) {
                  this.I ||
                    4 != t ||
                    7 == n ||
                    (8 == n || 0 >= r ? eW(3) : eW(2)),
                    th(this);
                  var i = this.g.aa();
                  this.Y = i;
                  b: if (ts(this)) {
                    var s = nr(this.g);
                    e = '';
                    var a = s.length,
                      o = 4 == nn(this.g);
                    if (!this.h.i) {
                      if ('undefined' == typeof TextDecoder) {
                        td(this), tc(this);
                        var l = '';
                        break b;
                      }
                      this.h.i = new w.TextDecoder();
                    }
                    for (n = 0; n < a; n++)
                      (this.h.h = !0),
                        (e += this.h.i.decode(s[n], {
                          stream: o && n == a - 1
                        }));
                    s.splice(0, a),
                      (this.h.g += e),
                      (this.C = 0),
                      (l = this.h.g);
                  } else l = this.g.fa();
                  if (
                    ((this.i = 200 == i),
                    (function (e, t, n, r, i, s, a) {
                      e.info(function () {
                        return (
                          'XMLHTTP RESP (' +
                          r +
                          ') [ attempt ' +
                          i +
                          ']: ' +
                          t +
                          '\n' +
                          n +
                          '\n' +
                          s +
                          ' ' +
                          a
                        );
                      });
                    })(this.j, this.u, this.A, this.m, this.U, t, i),
                    this.i)
                  ) {
                    if (this.Z && !this.J) {
                      b: {
                        if (this.g) {
                          var u,
                            h = this.g;
                          if (
                            (u = h.g
                              ? h.g.getResponseHeader('X-HTTP-Initial-Response')
                              : null) &&
                            !P(u)
                          ) {
                            var c = u;
                            break b;
                          }
                        }
                        c = null;
                      }
                      if ((i = c))
                        e$(
                          this.j,
                          this.m,
                          i,
                          'Initial handshake response via X-HTTP-Initial-Response'
                        ),
                          (this.J = !0),
                          tf(this, i);
                      else {
                        (this.i = !1), (this.o = 3), eX(12), td(this), tc(this);
                        break a;
                      }
                    }
                    this.P
                      ? (ta(this, t, l),
                        $ &&
                          this.i &&
                          3 == t &&
                          (eB(this.S, this.T, 'tick', this.hb), this.T.start()))
                      : (e$(this.j, this.m, l, null), tf(this, l)),
                      4 == t && td(this),
                      this.i &&
                        !this.I &&
                        (4 == t ? n_(this.l, this) : ((this.i = !1), tl(this)));
                  } else
                    400 == i && 0 < l.indexOf('Unknown SID')
                      ? ((this.o = 3), eX(12))
                      : ((this.o = 0), eX(13)),
                      td(this),
                      tc(this);
                }
              }
          } catch (d) {
          } finally {
          }
        }),
        (c.hb = function () {
          if (this.g) {
            var e = nn(this.g),
              t = this.g.fa();
            this.C < t.length &&
              (th(this), ta(this, e, t), this.i && 4 != e && tl(this));
          }
        }),
        (c.cancel = function () {
          (this.I = !0), td(this);
        }),
        (c.gb = function () {
          this.B = null;
          let e = Date.now();
          0 <= e - this.V
            ? ((function (e, t) {
                e.info(function () {
                  return 'TIMEOUT: ' + t;
                });
              })(this.j, this.A),
              2 != this.K && (eW(), eX(17)),
              td(this),
              (this.o = 2),
              tc(this))
            : tu(this, this.V - e);
        });
      var tm = RegExp(
        '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
      );
      function tg(e, t) {
        if (
          ((this.g = this.s = this.j = ''),
          (this.m = null),
          (this.o = this.l = ''),
          (this.h = !1),
          e instanceof tg)
        ) {
          (this.h = void 0 !== t ? t : e.h),
            tv(this, e.j),
            (this.s = e.s),
            (this.g = e.g),
            tw(this, e.m),
            (this.l = e.l),
            (t = e.i);
          var n = new tD();
          (n.i = t.i),
            t.g && ((n.g = new Map(t.g)), (n.h = t.h)),
            t_(this, n),
            (this.o = e.o);
        } else
          e && (n = String(e).match(tm))
            ? ((this.h = !!t),
              tv(this, n[1] || '', !0),
              (this.s = tI(n[2] || '')),
              (this.g = tI(n[3] || '', !0)),
              tw(this, n[4]),
              (this.l = tI(n[5] || '', !0)),
              t_(this, n[6] || '', !0),
              (this.o = tI(n[7] || '')))
            : ((this.h = !!t), (this.i = new tD(null, this.h)));
      }
      function ty(e) {
        return new tg(e);
      }
      function tv(e, t, n) {
        (e.j = n ? tI(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ''));
      }
      function tw(e, t) {
        if (t) {
          if (isNaN((t = Number(t))) || 0 > t)
            throw Error('Bad port number ' + t);
          e.m = t;
        } else e.m = null;
      }
      function t_(e, t, n) {
        var r, i;
        t instanceof tD
          ? ((e.i = t),
            (r = e.i),
            (i = e.h) &&
              !r.j &&
              (tO(r),
              (r.i = null),
              r.g.forEach(function (e, t) {
                var n = t.toLowerCase();
                t != n && (tL(this, t), tx(this, n, e));
              }, r)),
            (r.j = i))
          : (n || (t = tE(t, tR)), (e.i = new tD(t, e.h)));
      }
      function tb(e, t, n) {
        e.i.set(t, n);
      }
      function tT(e) {
        return (
          tb(
            e,
            'zx',
            Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(
                Math.floor(2147483648 * Math.random()) ^ Date.now()
              ).toString(36)
          ),
          e
        );
      }
      function tI(e, t) {
        return e
          ? t
            ? decodeURI(e.replace(/%25/g, '%2525'))
            : decodeURIComponent(e)
          : '';
      }
      function tE(e, t, n) {
        return 'string' == typeof e
          ? ((e = encodeURI(e).replace(t, tk)),
            n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
            e)
          : null;
      }
      function tk(e) {
        return (
          '%' +
          (((e = e.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & e).toString(16)
        );
      }
      tg.prototype.toString = function () {
        var e = [],
          t = this.j;
        t && e.push(tE(t, tS, !0), ':');
        var n = this.g;
        return (
          (n || 'file' == t) &&
            (e.push('//'),
            (t = this.s) && e.push(tE(t, tS, !0), '@'),
            e.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                '%$1'
              )
            ),
            null != (n = this.m) && e.push(':', String(n))),
          (n = this.l) &&
            (this.g && '/' != n.charAt(0) && e.push('/'),
            e.push(tE(n, '/' == n.charAt(0) ? tA : tC, !0))),
          (n = this.i.toString()) && e.push('?', n),
          (n = this.o) && e.push('#', tE(n, tN)),
          e.join('')
        );
      };
      var tS = /[#\/\?@]/g,
        tC = /[#\?:]/g,
        tA = /[#\?]/g,
        tR = /[#\?@]/g,
        tN = /#/g;
      function tD(e, t) {
        (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
      }
      function tO(e) {
        e.g ||
          ((e.g = new Map()),
          (e.h = 0),
          e.i &&
            (function (e, t) {
              if (e) {
                e = e.split('&');
                for (var n = 0; n < e.length; n++) {
                  var r = e[n].indexOf('='),
                    i = null;
                  if (0 <= r) {
                    var s = e[n].substring(0, r);
                    i = e[n].substring(r + 1);
                  } else s = e[n];
                  t(s, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
                }
              }
            })(e.i, function (t, n) {
              e.add(decodeURIComponent(t.replace(/\+/g, ' ')), n);
            }));
      }
      function tL(e, t) {
        tO(e),
          (t = tM(e, t)),
          e.g.has(t) &&
            ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t));
      }
      function tP(e, t) {
        return tO(e), (t = tM(e, t)), e.g.has(t);
      }
      function tx(e, t, n) {
        tL(e, t),
          0 < n.length &&
            ((e.i = null), e.g.set(tM(e, t), N(n)), (e.h += n.length));
      }
      function tM(e, t) {
        return (t = String(t)), e.j && (t = t.toLowerCase()), t;
      }
      ((c = tD.prototype).add = function (e, t) {
        tO(this), (this.i = null), (e = tM(this, e));
        var n = this.g.get(e);
        return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
      }),
        (c.forEach = function (e, t) {
          tO(this),
            this.g.forEach(function (n, r) {
              n.forEach(function (n) {
                e.call(t, n, r, this);
              }, this);
            }, this);
        }),
        (c.oa = function () {
          tO(this);
          let e = Array.from(this.g.values()),
            t = Array.from(this.g.keys()),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = e[r];
            for (let s = 0; s < i.length; s++) n.push(t[r]);
          }
          return n;
        }),
        (c.W = function (e) {
          tO(this);
          let t = [];
          if ('string' == typeof e)
            tP(this, e) && (t = t.concat(this.g.get(tM(this, e))));
          else {
            e = Array.from(this.g.values());
            for (let n = 0; n < e.length; n++) t = t.concat(e[n]);
          }
          return t;
        }),
        (c.set = function (e, t) {
          return (
            tO(this),
            (this.i = null),
            tP(this, (e = tM(this, e))) && (this.h -= this.g.get(e).length),
            this.g.set(e, [t]),
            (this.h += 1),
            this
          );
        }),
        (c.get = function (e, t) {
          return e && 0 < (e = this.W(e)).length ? String(e[0]) : t;
        }),
        (c.toString = function () {
          if (this.i) return this.i;
          if (!this.g) return '';
          let e = [],
            t = Array.from(this.g.keys());
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            let i = encodeURIComponent(String(r)),
              s = this.W(r);
            for (r = 0; r < s.length; r++) {
              var a = i;
              '' !== s[r] && (a += '=' + encodeURIComponent(String(s[r]))),
                e.push(a);
            }
          }
          return (this.i = e.join('&'));
        });
      var tU = class {
        constructor(e, t) {
          (this.h = e), (this.g = t);
        }
      };
      function tF(e) {
        (this.l = e || tV),
          (e = w.PerformanceNavigationTiming
            ? 0 < (e = w.performance.getEntriesByType('navigation')).length &&
              ('hq' == e[0].nextHopProtocol || 'h2' == e[0].nextHopProtocol)
            : !!(w.g && w.g.Ga && w.g.Ga() && w.g.Ga().$b)),
          (this.j = e ? this.l : 1),
          (this.g = null),
          1 < this.j && (this.g = new Set()),
          (this.h = null),
          (this.i = []);
      }
      var tV = 10;
      function tB(e) {
        return !!e.h || (!!e.g && e.g.size >= e.j);
      }
      function tj(e) {
        return e.h ? 1 : e.g ? e.g.size : 0;
      }
      function tq(e, t) {
        return e.h ? e.h == t : !!e.g && e.g.has(t);
      }
      function t$(e, t) {
        e.g ? e.g.add(t) : (e.h = t);
      }
      function tz(e, t) {
        e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
      }
      function tH(e) {
        if (null != e.h) return e.i.concat(e.h.D);
        if (null != e.g && 0 !== e.g.size) {
          let t = e.i;
          for (let n of e.g.values()) t = t.concat(n.D);
          return t;
        }
        return N(e.i);
      }
      function tK() {}
      function tG() {
        this.g = new tK();
      }
      function tW(e, t, n) {
        let r = n || '';
        try {
          tp(e, function (e, n) {
            let i = e;
            T(e) && (i = ek(e)), t.push(r + n + '=' + encodeURIComponent(i));
          });
        } catch (i) {
          throw (t.push(r + 'type=' + encodeURIComponent('_badmap')), i);
        }
      }
      function tQ(e, t, n, r, i) {
        try {
          (t.onload = null),
            (t.onerror = null),
            (t.onabort = null),
            (t.ontimeout = null),
            i(r);
        } catch (s) {}
      }
      function tX(e) {
        (this.l = e.ac || null), (this.j = e.jb || !1);
      }
      function tJ(e, t) {
        eT.call(this),
          (this.D = e),
          (this.u = t),
          (this.m = void 0),
          (this.readyState = tY),
          (this.status = 0),
          (this.responseType =
            this.responseText =
            this.response =
            this.statusText =
              ''),
          (this.onreadystatechange = null),
          (this.v = new Headers()),
          (this.h = null),
          (this.C = 'GET'),
          (this.B = ''),
          (this.g = !1),
          (this.A = this.j = this.l = null);
      }
      (tF.prototype.cancel = function () {
        if (((this.i = tH(this)), this.h)) this.h.cancel(), (this.h = null);
        else if (this.g && 0 !== this.g.size) {
          for (let e of this.g.values()) e.cancel();
          this.g.clear();
        }
      }),
        (tK.prototype.stringify = function (e) {
          return w.JSON.stringify(e, void 0);
        }),
        (tK.prototype.parse = function (e) {
          return w.JSON.parse(e, void 0);
        }),
        C(tX, e1),
        (tX.prototype.g = function () {
          return new tJ(this.l, this.j);
        }),
        (tX.prototype.i =
          ((i = {}),
          function () {
            return i;
          })),
        C(tJ, eT);
      var tY = 0;
      function tZ(e) {
        e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e));
      }
      function t0(e) {
        (e.readyState = 4), (e.l = null), (e.j = null), (e.A = null), t1(e);
      }
      function t1(e) {
        e.onreadystatechange && e.onreadystatechange.call(e);
      }
      ((c = tJ.prototype).open = function (e, t) {
        if (this.readyState != tY)
          throw (this.abort(), Error('Error reopening a connection'));
        (this.C = e), (this.B = t), (this.readyState = 1), t1(this);
      }),
        (c.send = function (e) {
          if (1 != this.readyState)
            throw (this.abort(), Error('need to call open() first. '));
          this.g = !0;
          let t = {
            headers: this.v,
            method: this.C,
            credentials: this.m,
            cache: void 0
          };
          e && (t.body = e),
            (this.D || w)
              .fetch(new Request(this.B, t))
              .then(this.Wa.bind(this), this.ga.bind(this));
        }),
        (c.abort = function () {
          (this.response = this.responseText = ''),
            (this.v = new Headers()),
            (this.status = 0),
            this.j && this.j.cancel('Request was aborted.').catch(() => {}),
            1 <= this.readyState &&
              this.g &&
              4 != this.readyState &&
              ((this.g = !1), t0(this)),
            (this.readyState = tY);
        }),
        (c.Wa = function (e) {
          if (
            this.g &&
            ((this.l = e),
            this.h ||
              ((this.status = this.l.status),
              (this.statusText = this.l.statusText),
              (this.h = e.headers),
              (this.readyState = 2),
              t1(this)),
            this.g && ((this.readyState = 3), t1(this), this.g))
          ) {
            if ('arraybuffer' === this.responseType)
              e.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
            else if (void 0 !== w.ReadableStream && 'body' in e) {
              if (((this.j = e.body.getReader()), this.u)) {
                if (this.responseType)
                  throw Error(
                    'responseType must be empty for "streamBinaryChunks" mode responses.'
                  );
                this.response = [];
              } else
                (this.response = this.responseText = ''),
                  (this.A = new TextDecoder());
              tZ(this);
            } else e.text().then(this.Va.bind(this), this.ga.bind(this));
          }
        }),
        (c.Ta = function (e) {
          if (this.g) {
            if (this.u && e.value) this.response.push(e.value);
            else if (!this.u) {
              var t = e.value ? e.value : new Uint8Array(0);
              (t = this.A.decode(t, { stream: !e.done })) &&
                (this.response = this.responseText += t);
            }
            e.done ? t0(this) : t1(this), 3 == this.readyState && tZ(this);
          }
        }),
        (c.Va = function (e) {
          this.g && ((this.response = this.responseText = e), t0(this));
        }),
        (c.Ua = function (e) {
          this.g && ((this.response = e), t0(this));
        }),
        (c.ga = function () {
          this.g && t0(this);
        }),
        (c.setRequestHeader = function (e, t) {
          this.v.append(e, t);
        }),
        (c.getResponseHeader = function (e) {
          return (this.h && this.h.get(e.toLowerCase())) || '';
        }),
        (c.getAllResponseHeaders = function () {
          if (!this.h) return '';
          let e = [],
            t = this.h.entries();
          for (var n = t.next(); !n.done; )
            e.push((n = n.value)[0] + ': ' + n[1]), (n = t.next());
          return e.join('\r\n');
        }),
        Object.defineProperty(tJ.prototype, 'withCredentials', {
          get: function () {
            return 'include' === this.m;
          },
          set: function (e) {
            this.m = e ? 'include' : 'same-origin';
          }
        });
      var t2 = w.JSON.parse;
      function t4(e) {
        eT.call(this),
          (this.headers = new Map()),
          (this.u = e || null),
          (this.h = !1),
          (this.C = this.g = null),
          (this.H = ''),
          (this.m = 0),
          (this.j = ''),
          (this.l = this.F = this.v = this.D = !1),
          (this.B = 0),
          (this.A = null),
          (this.J = t3),
          (this.K = this.L = !1);
      }
      C(t4, eT);
      var t3 = '',
        t6 = /^https?$/i,
        t9 = ['POST', 'PUT'];
      function t5(e, t) {
        (e.h = !1),
          e.g && ((e.l = !0), e.g.abort(), (e.l = !1)),
          (e.j = t),
          (e.m = 5),
          t8(e),
          ne(e);
      }
      function t8(e) {
        e.D || ((e.D = !0), eI(e, 'complete'), eI(e, 'error'));
      }
      function t7(e) {
        if (e.h && void 0 !== v && (!e.C[1] || 4 != nn(e) || 2 != e.aa())) {
          if (e.v && 4 == nn(e)) eM(e.Ha, 0, e);
          else if ((eI(e, 'readystatechange'), 4 == nn(e))) {
            e.h = !1;
            try {
              let t = e.aa();
              a: switch (t) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var n,
                    r,
                    i = !0;
                  break a;
                default:
                  i = !1;
              }
              if (!(n = i)) {
                if ((r = 0 === t)) {
                  var s = String(e.H).match(tm)[1] || null;
                  if (!s && w.self && w.self.location) {
                    var a = w.self.location.protocol;
                    s = a.substr(0, a.length - 1);
                  }
                  r = !t6.test(s ? s.toLowerCase() : '');
                }
                n = r;
              }
              if (n) eI(e, 'complete'), eI(e, 'success');
              else {
                e.m = 6;
                try {
                  var o = 2 < nn(e) ? e.g.statusText : '';
                } catch (l) {
                  o = '';
                }
                (e.j = o + ' [' + e.aa() + ']'), t8(e);
              }
            } finally {
              ne(e);
            }
          }
        }
      }
      function ne(e, t) {
        if (e.g) {
          nt(e);
          let n = e.g,
            r = e.C[0] ? _ : null;
          (e.g = null), (e.C = null), t || eI(e, 'ready');
          try {
            n.onreadystatechange = r;
          } catch (i) {}
        }
      }
      function nt(e) {
        e.g && e.K && (e.g.ontimeout = null),
          e.A && (w.clearTimeout(e.A), (e.A = null));
      }
      function nn(e) {
        return e.g ? e.g.readyState : 0;
      }
      function nr(e) {
        try {
          if (!e.g) return null;
          if ('response' in e.g) return e.g.response;
          switch (e.J) {
            case t3:
            case 'text':
              return e.g.responseText;
            case 'arraybuffer':
              if ('mozResponseArrayBuffer' in e.g)
                return e.g.mozResponseArrayBuffer;
          }
          return null;
        } catch (t) {
          return null;
        }
      }
      function ni(e) {
        let t = '';
        return (
          es(e, function (e, n) {
            (t += n), (t += ':'), (t += e), (t += '\r\n');
          }),
          t
        );
      }
      function ns(e, t, n) {
        a: {
          for (r in n) {
            var r = !1;
            break a;
          }
          r = !0;
        }
        r ||
          ((n = ni(n)),
          'string' == typeof e
            ? null != n && encodeURIComponent(String(n))
            : tb(e, t, n));
      }
      function na(e, t, n) {
        return (
          (n && n.internalChannelParams && n.internalChannelParams[e]) || t
        );
      }
      function no(e) {
        (this.Ca = 0),
          (this.i = []),
          (this.j = new eq()),
          (this.ka =
            this.sa =
            this.F =
            this.V =
            this.g =
            this.za =
            this.D =
            this.ia =
            this.o =
            this.S =
            this.s =
              null),
          (this.ab = this.U = 0),
          (this.Za = na('failFast', !1, e)),
          (this.L = this.v = this.u = this.m = this.l = null),
          (this.Y = !0),
          (this.pa = this.Ba = this.T = -1),
          (this.Z = this.A = this.C = 0),
          (this.Xa = na('baseRetryDelayMs', 5e3, e)),
          (this.bb = na('retryDelaySeedMs', 1e4, e)),
          (this.$a = na('forwardChannelMaxRetries', 2, e)),
          (this.ta = na('forwardChannelRequestTimeoutMs', 2e4, e)),
          (this.ra = (e && e.xmlHttpFactory) || void 0),
          (this.Da = (e && e.Zb) || !1),
          (this.J = void 0),
          (this.H = (e && e.supportsCrossDomainXhr) || !1),
          (this.I = ''),
          (this.h = new tF(e && e.concurrentRequestLimit)),
          (this.Fa = new tG()),
          (this.O = (e && e.fastHandshake) || !1),
          (this.N = (e && e.encodeInitMessageHeaders) || !1),
          this.O && this.N && (this.N = !1),
          (this.Ya = (e && e.Xb) || !1),
          e && e.Aa && this.j.Aa(),
          e && e.forceLongPolling && (this.Y = !1),
          (this.$ = (!this.O && this.Y && e && e.detectBufferingProxy) || !1),
          (this.ja = void 0),
          (this.P = 0),
          (this.K = !1),
          (this.la = this.B = null);
      }
      function nl(e) {
        if ((nh(e), 3 == e.G)) {
          var t = e.U++,
            n = ty(e.F);
          tb(n, 'SID', e.I),
            tb(n, 'RID', t),
            tb(n, 'TYPE', 'terminate'),
            nf(e, n),
            ((t = new e8(e, e.j, t, void 0)).K = 2),
            (t.v = tT(ty(n))),
            (n = !1),
            w.navigator &&
              w.navigator.sendBeacon &&
              (n = w.navigator.sendBeacon(t.v.toString(), '')),
            !n && w.Image && ((new Image().src = t.v), (n = !0)),
            n || ((t.g = nk(t.l, null)), t.g.da(t.v)),
            (t.F = Date.now()),
            tl(t);
        }
        nI(e);
      }
      function nu(e) {
        e.g && (ny(e), e.g.cancel(), (e.g = null));
      }
      function nh(e) {
        nu(e),
          e.u && (w.clearTimeout(e.u), (e.u = null)),
          nw(e),
          e.h.cancel(),
          e.m && ('number' == typeof e.m && w.clearTimeout(e.m), (e.m = null));
      }
      function nc(e) {
        tB(e.h) || e.m || ((e.m = !0), eN(e.Ja, e), (e.C = 0));
      }
      function nd(e, t) {
        var n;
        n = t ? t.m : e.U++;
        let r = ty(e.F);
        tb(r, 'SID', e.I),
          tb(r, 'RID', n),
          tb(r, 'AID', e.T),
          nf(e, r),
          e.o && e.s && ns(r, e.o, e.s),
          (n = new e8(e, e.j, n, e.C + 1)),
          null === e.o && (n.H = e.s),
          t && (e.i = t.D.concat(e.i)),
          (t = np(e, n, 1e3)),
          n.setTimeout(
            Math.round(0.5 * e.ta) + Math.round(0.5 * e.ta * Math.random())
          ),
          t$(e.h, n),
          tr(n, r, t);
      }
      function nf(e, t) {
        e.ia &&
          es(e.ia, function (e, n) {
            tb(t, n, e);
          }),
          e.l &&
            tp({}, function (e, n) {
              tb(t, n, e);
            });
      }
      function np(e, t, n) {
        n = Math.min(e.i.length, n);
        var r = e.l ? k(e.l.Ra, e.l, e) : null;
        a: {
          var i = e.i;
          let s = -1;
          for (;;) {
            let a = ['count=' + n];
            -1 == s
              ? 0 < n
                ? ((s = i[0].h), a.push('ofs=' + s))
                : (s = 0)
              : a.push('ofs=' + s);
            let o = !0;
            for (let l = 0; l < n; l++) {
              let u = i[l].h,
                h = i[l].g;
              if (0 > (u -= s)) (s = Math.max(0, i[l].h - 100)), (o = !1);
              else
                try {
                  tW(h, a, 'req' + u + '_');
                } catch (c) {
                  r && r(h);
                }
            }
            if (o) {
              r = a.join('&');
              break a;
            }
          }
        }
        return (e = e.i.splice(0, n)), (t.D = e), r;
      }
      function nm(e) {
        e.g || e.u || ((e.Z = 1), eN(e.Ia, e), (e.A = 0));
      }
      function ng(e) {
        return (
          !e.g &&
          !e.u &&
          !(3 <= e.A) &&
          (e.Z++, (e.u = eY(k(e.Ia, e), nb(e, e.A))), e.A++, !0)
        );
      }
      function ny(e) {
        null != e.B && (w.clearTimeout(e.B), (e.B = null));
      }
      function nv(e) {
        (e.g = new e8(e, e.j, 'rpc', e.Z)),
          null === e.o && (e.g.H = e.s),
          (e.g.N = 0);
        var t = ty(e.sa);
        tb(t, 'RID', 'rpc'),
          tb(t, 'SID', e.I),
          tb(t, 'CI', e.L ? '0' : '1'),
          tb(t, 'AID', e.T),
          tb(t, 'TYPE', 'xmlhttp'),
          nf(e, t),
          e.o && e.s && ns(t, e.o, e.s),
          e.J && e.g.setTimeout(e.J);
        var n = e.g;
        (e = e.ka),
          (n.K = 1),
          (n.v = tT(ty(t))),
          (n.s = null),
          (n.P = !0),
          ti(n, e);
      }
      function nw(e) {
        null != e.v && (w.clearTimeout(e.v), (e.v = null));
      }
      function n_(e, t) {
        var n = null;
        if (e.g == t) {
          nw(e), ny(e), (e.g = null);
          var r = 2;
        } else {
          if (!tq(e.h, t)) return;
          (n = t.D), tz(e.h, t), (r = 1);
        }
        if (0 != e.G) {
          if (((e.pa = t.Y), t.i)) {
            if (1 == r) {
              (n = t.s ? t.s.length : 0), (t = Date.now() - t.F);
              var i,
                s,
                a = e.C;
              eI((r = eK()), new eJ(r, n)), nc(e);
            } else nm(e);
          } else if (
            3 == (a = t.o) ||
            (0 == a && 0 < e.pa) ||
            !(
              (1 == r &&
                ((i = e),
                (s = t),
                !(tj(i.h) >= i.h.j - (i.m ? 1 : 0)) &&
                  (i.m
                    ? ((i.i = s.D.concat(i.i)), !0)
                    : 1 != i.G &&
                      2 != i.G &&
                      !(i.C >= (i.Za ? 0 : i.$a)) &&
                      ((i.m = eY(k(i.Ja, i, s), nb(i, i.C))), i.C++, !0)))) ||
              (2 == r && ng(e))
            )
          )
            switch ((n && 0 < n.length && ((t = e.h).i = t.i.concat(n)), a)) {
              case 1:
                nT(e, 5);
                break;
              case 4:
                nT(e, 10);
                break;
              case 3:
                nT(e, 6);
                break;
              default:
                nT(e, 2);
            }
        }
      }
      function nb(e, t) {
        let n = e.Xa + Math.floor(Math.random() * e.bb);
        return e.l || (n *= 2), n * t;
      }
      function nT(e, t) {
        if ((e.j.info('Error code ' + t), 2 == t)) {
          var n = null;
          e.l && (n = null);
          var r = k(e.kb, e);
          n ||
            ((n = new tg('//www.google.com/images/cleardot.gif')),
            (w.location && 'http' == w.location.protocol) || tv(n, 'https'),
            tT(n)),
            (function (e, t) {
              let n = new eq();
              if (w.Image) {
                let r = new Image();
                (r.onload = S(tQ, n, r, 'TestLoadImage: loaded', !0, t)),
                  (r.onerror = S(tQ, n, r, 'TestLoadImage: error', !1, t)),
                  (r.onabort = S(tQ, n, r, 'TestLoadImage: abort', !1, t)),
                  (r.ontimeout = S(tQ, n, r, 'TestLoadImage: timeout', !1, t)),
                  w.setTimeout(function () {
                    r.ontimeout && r.ontimeout();
                  }, 1e4),
                  (r.src = e);
              } else t(!1);
            })(n.toString(), r);
        } else eX(2);
        (e.G = 0), e.l && e.l.va(t), nI(e), nh(e);
      }
      function nI(e) {
        if (((e.G = 0), (e.la = []), e.l)) {
          let t = tH(e.h);
          (0 != t.length || 0 != e.i.length) &&
            (D(e.la, t),
            D(e.la, e.i),
            (e.h.i.length = 0),
            N(e.i),
            (e.i.length = 0)),
            e.l.ua();
        }
      }
      function nE(e, t, n) {
        var r = n instanceof tg ? ty(n) : new tg(n, void 0);
        if ('' != r.g) t && (r.g = t + '.' + r.g), tw(r, r.m);
        else {
          var i = w.location;
          (r = i.protocol),
            (t = t ? t + '.' + i.hostname : i.hostname),
            (i = +i.port);
          var s = new tg(null, void 0);
          r && tv(s, r), t && (s.g = t), i && tw(s, i), n && (s.l = n), (r = s);
        }
        return (
          (n = e.D),
          (t = e.za),
          n && t && tb(r, n, t),
          tb(r, 'VER', e.ma),
          nf(e, r),
          r
        );
      }
      function nk(e, t, n) {
        if (t && !e.H)
          throw Error("Can't create secondary domain capable XhrIo object.");
        return (
          (t = new t4(n && e.Da && !e.ra ? new tX({ jb: !0 }) : e.ra)).Ka(e.H),
          t
        );
      }
      function nS() {}
      function nC() {
        if (j && !(10 <= Number(Y)))
          throw Error('Environmental error: no available transport.');
      }
      function nA(e, t) {
        eT.call(this),
          (this.g = new no(t)),
          (this.l = e),
          (this.h = (t && t.messageUrlParams) || null),
          (e = (t && t.messageHeaders) || null),
          t &&
            t.clientProtocolHeaderRequired &&
            (e
              ? (e['X-Client-Protocol'] = 'webchannel')
              : (e = { 'X-Client-Protocol': 'webchannel' })),
          (this.g.s = e),
          (e = (t && t.initMessageHeaders) || null),
          t &&
            t.messageContentType &&
            (e
              ? (e['X-WebChannel-Content-Type'] = t.messageContentType)
              : (e = { 'X-WebChannel-Content-Type': t.messageContentType })),
          t &&
            t.ya &&
            (e
              ? (e['X-WebChannel-Client-Profile'] = t.ya)
              : (e = { 'X-WebChannel-Client-Profile': t.ya })),
          (this.g.S = e),
          (e = t && t.Yb) && !P(e) && (this.g.o = e),
          (this.A = (t && t.supportsCrossDomainXhr) || !1),
          (this.v = (t && t.sendRawJson) || !1),
          (t = t && t.httpSessionIdParam) &&
            !P(t) &&
            ((this.g.D = t),
            null !== (e = this.h) &&
              t in e &&
              t in (e = this.h) &&
              delete e[t]),
          (this.j = new nD(this));
      }
      function nR(e) {
        e6.call(this);
        var t = e.__sm__;
        if (t) {
          a: {
            for (let n in t) {
              e = n;
              break a;
            }
            e = void 0;
          }
          (this.i = e) &&
            ((e = this.i), (t = null !== t && e in t ? t[e] : void 0)),
            (this.data = t);
        } else this.data = e;
      }
      function nN() {
        e9.call(this), (this.status = 1);
      }
      function nD(e) {
        this.g = e;
      }
      ((c = t4.prototype).Ka = function (e) {
        this.L = e;
      }),
        (c.da = function (e, t, n, r) {
          if (this.g)
            throw Error(
              '[goog.net.XhrIo] Object is active with another request=' +
                this.H +
                '; newUri=' +
                e
            );
          (t = t ? t.toUpperCase() : 'GET'),
            (this.H = e),
            (this.j = ''),
            (this.m = 0),
            (this.D = !1),
            (this.h = !0),
            (this.g = this.u ? this.u.g() : l.g()),
            (this.C = this.u ? e2(this.u) : e2(l)),
            (this.g.onreadystatechange = k(this.Ha, this));
          try {
            (this.F = !0), this.g.open(t, String(e), !0), (this.F = !1);
          } catch (i) {
            t5(this, i);
            return;
          }
          if (((e = n || ''), (n = new Map(this.headers)), r)) {
            if (Object.getPrototypeOf(r) === Object.prototype)
              for (var a in r) n.set(a, r[a]);
            else if ('function' == typeof r.keys && 'function' == typeof r.get)
              for (let o of r.keys()) n.set(o, r.get(o));
            else
              throw Error('Unknown input type for opt_headers: ' + String(r));
          }
          for (let [u, h] of ((r = Array.from(n.keys()).find(
            (e) => 'content-type' == e.toLowerCase()
          )),
          (a = w.FormData && e instanceof w.FormData),
          !(0 <= R(t9, t)) ||
            r ||
            a ||
            n.set(
              'Content-Type',
              'application/x-www-form-urlencoded;charset=utf-8'
            ),
          n))
            this.g.setRequestHeader(u, h);
          this.J && (this.g.responseType = this.J),
            'withCredentials' in this.g &&
              this.g.withCredentials !== this.L &&
              (this.g.withCredentials = this.L);
          try {
            var c, d, f;
            nt(this),
              0 < this.B &&
                ((this.K =
                  ((c = this.g),
                  j &&
                    ((d = function () {
                      let e = 0,
                        t = x(String(s)).split('.'),
                        n = x('9').split('.'),
                        r = Math.max(t.length, n.length);
                      for (let i = 0; 0 == e && i < r; i++) {
                        var a = t[i] || '',
                          o = n[i] || '';
                        do {
                          if (
                            ((a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                            (o = /(\d*)(\D*)(.*)/.exec(o) || ['', '', '', '']),
                            0 == a[0].length && 0 == o[0].length)
                          )
                            break;
                          (e =
                            M(
                              0 == a[1].length ? 0 : parseInt(a[1], 10),
                              0 == o[1].length ? 0 : parseInt(o[1], 10)
                            ) ||
                            M(0 == a[2].length, 0 == o[2].length) ||
                            M(a[2], o[2])),
                            (a = a[3]),
                            (o = o[3]);
                        } while (0 == e);
                      }
                      return 0 <= e;
                    }),
                    (f = J),
                    Object.prototype.hasOwnProperty.call(f, 9)
                      ? f[9]
                      : (f[9] = d(9))) &&
                    'number' == typeof c.timeout &&
                    void 0 !== c.ontimeout))
                  ? ((this.g.timeout = this.B),
                    (this.g.ontimeout = k(this.qa, this)))
                  : (this.A = eM(this.qa, this.B, this))),
              (this.v = !0),
              this.g.send(e),
              (this.v = !1);
          } catch (p) {
            t5(this, p);
          }
        }),
        (c.qa = function () {
          void 0 !== v &&
            this.g &&
            ((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
            (this.m = 8),
            eI(this, 'timeout'),
            this.abort(8));
        }),
        (c.abort = function (e) {
          this.g &&
            this.h &&
            ((this.h = !1),
            (this.l = !0),
            this.g.abort(),
            (this.l = !1),
            (this.m = e || 7),
            eI(this, 'complete'),
            eI(this, 'abort'),
            ne(this));
        }),
        (c.M = function () {
          this.g &&
            (this.h &&
              ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
            ne(this, !0)),
            t4.X.M.call(this);
        }),
        (c.Ha = function () {
          this.s || (this.F || this.v || this.l ? t7(this) : this.fb());
        }),
        (c.fb = function () {
          t7(this);
        }),
        (c.aa = function () {
          try {
            return 2 < nn(this) ? this.g.status : -1;
          } catch (e) {
            return -1;
          }
        }),
        (c.fa = function () {
          try {
            return this.g ? this.g.responseText : '';
          } catch (e) {
            return '';
          }
        }),
        (c.Sa = function (e) {
          if (this.g) {
            var t = this.g.responseText;
            return e && 0 == t.indexOf(e) && (t = t.substring(e.length)), t2(t);
          }
        }),
        (c.Ea = function () {
          return this.m;
        }),
        (c.Oa = function () {
          return 'string' == typeof this.j ? this.j : String(this.j);
        }),
        ((c = no.prototype).ma = 8),
        (c.G = 1),
        (c.Ja = function (e) {
          if (this.m) {
            if (((this.m = null), 1 == this.G)) {
              if (!e) {
                (this.U = Math.floor(1e5 * Math.random())), (e = this.U++);
                let t = new e8(this, this.j, e, void 0),
                  n = this.s;
                if (
                  (this.S && (n ? el((n = ea(n)), this.S) : (n = this.S)),
                  null !== this.o || this.N || ((t.H = n), (n = null)),
                  this.O)
                )
                  a: {
                    for (var r = 0, i = 0; i < this.i.length; i++) {
                      b: {
                        var s = this.i[i];
                        if (
                          '__data__' in s.g &&
                          'string' == typeof (s = s.g.__data__)
                        ) {
                          s = s.length;
                          break b;
                        }
                        s = void 0;
                      }
                      if (void 0 === s) break;
                      if (4096 < (r += s)) {
                        r = i;
                        break a;
                      }
                      if (4096 === r || i === this.i.length - 1) {
                        r = i + 1;
                        break a;
                      }
                    }
                    r = 1e3;
                  }
                else r = 1e3;
                (r = np(this, t, r)),
                  (i = ty(this.F)),
                  tb(i, 'RID', e),
                  tb(i, 'CVER', 22),
                  this.D && tb(i, 'X-HTTP-Session-Id', this.D),
                  nf(this, i),
                  n &&
                    (this.N
                      ? (r =
                          'headers=' +
                          encodeURIComponent(String(ni(n))) +
                          '&' +
                          r)
                      : this.o && ns(i, this.o, n)),
                  t$(this.h, t),
                  this.Ya && tb(i, 'TYPE', 'init'),
                  this.O
                    ? (tb(i, '$req', r),
                      tb(i, 'SID', 'null'),
                      (t.Z = !0),
                      tr(t, i, null))
                    : tr(t, i, r),
                  (this.G = 2);
              }
            } else
              3 == this.G &&
                (e
                  ? nd(this, e)
                  : 0 == this.i.length || tB(this.h) || nd(this));
          }
        }),
        (c.Ia = function () {
          if (
            ((this.u = null),
            nv(this),
            this.$ && !(this.K || null == this.g || 0 >= this.P))
          ) {
            var e = 2 * this.P;
            this.j.info('BP detection timer enabled: ' + e),
              (this.B = eY(k(this.eb, this), e));
          }
        }),
        (c.eb = function () {
          this.B &&
            ((this.B = null),
            this.j.info('BP detection timeout reached.'),
            this.j.info('Buffering proxy detected and switch to long-polling!'),
            (this.L = !1),
            (this.K = !0),
            eX(10),
            nu(this),
            nv(this));
        }),
        (c.cb = function () {
          null != this.v && ((this.v = null), nu(this), ng(this), eX(19));
        }),
        (c.kb = function (e) {
          e
            ? (this.j.info('Successfully pinged google.com'), eX(2))
            : (this.j.info('Failed to ping google.com'), eX(1));
        }),
        ((c = nS.prototype).xa = function () {}),
        (c.wa = function () {}),
        (c.va = function () {}),
        (c.ua = function () {}),
        (c.Ra = function () {}),
        (nC.prototype.g = function (e, t) {
          return new nA(e, t);
        }),
        C(nA, eT),
        (nA.prototype.m = function () {
          (this.g.l = this.j), this.A && (this.g.H = !0);
          var e = this.g,
            t = this.l,
            n = this.h || void 0;
          eX(0),
            (e.V = t),
            (e.ia = n || {}),
            (e.L = e.Y),
            (e.F = nE(e, null, e.V)),
            nc(e);
        }),
        (nA.prototype.close = function () {
          nl(this.g);
        }),
        (nA.prototype.u = function (e) {
          var t = this.g;
          if ('string' == typeof e) {
            var n = {};
            (n.__data__ = e), (e = n);
          } else this.v && (((n = {}).__data__ = ek(e)), (e = n));
          t.i.push(new tU(t.ab++, e)), 3 == t.G && nc(t);
        }),
        (nA.prototype.M = function () {
          (this.g.l = null),
            delete this.j,
            nl(this.g),
            delete this.g,
            nA.X.M.call(this);
        }),
        C(nR, e6),
        C(nN, e9),
        C(nD, nS),
        (nD.prototype.xa = function () {
          eI(this.g, 'a');
        }),
        (nD.prototype.wa = function (e) {
          eI(this.g, new nR(e));
        }),
        (nD.prototype.va = function (e) {
          eI(this.g, new nN());
        }),
        (nD.prototype.ua = function () {
          eI(this.g, 'b');
        }),
        (nC.prototype.createWebChannel = nC.prototype.g),
        (nA.prototype.send = nA.prototype.u),
        (nA.prototype.open = nA.prototype.m),
        (nA.prototype.close = nA.prototype.close),
        (eZ.NO_ERROR = 0),
        (eZ.TIMEOUT = 8),
        (eZ.HTTP_ERROR = 6),
        (e0.COMPLETE = 'complete'),
        (e4.EventType = e3),
        (e3.OPEN = 'a'),
        (e3.CLOSE = 'b'),
        (e3.ERROR = 'c'),
        (e3.MESSAGE = 'd'),
        (eT.prototype.listen = eT.prototype.N),
        (t4.prototype.listenOnce = t4.prototype.O),
        (t4.prototype.getLastError = t4.prototype.Oa),
        (t4.prototype.getLastErrorCode = t4.prototype.Ea),
        (t4.prototype.getStatus = t4.prototype.aa),
        (t4.prototype.getResponseJson = t4.prototype.Sa),
        (t4.prototype.getResponseText = t4.prototype.fa),
        (t4.prototype.send = t4.prototype.da),
        (t4.prototype.setWithCredentials = t4.prototype.Ka);
      var nO = (y.createWebChannelTransport = function () {
          return new nC();
        }),
        nL = (y.getStatEventTarget = function () {
          return eK();
        }),
        nP = (y.ErrorCode = eZ),
        nx = (y.EventType = e0),
        nM = (y.Event = ez),
        nU = (y.Stat = {
          sb: 0,
          vb: 1,
          wb: 2,
          Pb: 3,
          Ub: 4,
          Rb: 5,
          Sb: 6,
          Qb: 7,
          Ob: 8,
          Tb: 9,
          PROXY: 10,
          NOPROXY: 11,
          Mb: 12,
          Ib: 13,
          Jb: 14,
          Hb: 15,
          Kb: 16,
          Lb: 17,
          ob: 18,
          nb: 19,
          pb: 20
        }),
        nF = (y.FetchXmlHttpFactory = tX),
        nV = (y.WebChannel = e4),
        nB = (y.XhrIo = t4);
      n(3454);
      let nj = '@firebase/firestore';
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class nq {
        constructor(e) {
          this.uid = e;
        }
        isAuthenticated() {
          return null != this.uid;
        }
        toKey() {
          return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
        }
        isEqual(e) {
          return e.uid === this.uid;
        }
      }
      (nq.UNAUTHENTICATED = new nq(null)),
        (nq.GOOGLE_CREDENTIALS = new nq('google-credentials-uid')),
        (nq.FIRST_PARTY = new nq('first-party-uid')),
        (nq.MOCK_USER = new nq('mock-user'));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let n$ = '9.13.0',
        nz = new p.Yd('@firebase/firestore');
      function nH() {
        return nz.logLevel;
      }
      function nK(e, ...t) {
        if (nz.logLevel <= p.in.DEBUG) {
          let n = t.map(nQ);
          nz.debug(`Firestore (${n$}): ${e}`, ...n);
        }
      }
      function nG(e, ...t) {
        if (nz.logLevel <= p.in.ERROR) {
          let n = t.map(nQ);
          nz.error(`Firestore (${n$}): ${e}`, ...n);
        }
      }
      function nW(e, ...t) {
        if (nz.logLevel <= p.in.WARN) {
          let n = t.map(nQ);
          nz.warn(`Firestore (${n$}): ${e}`, ...n);
        }
      }
      function nQ(e) {
        var t;
        if ('string' == typeof e) return e;
        try {
          return (t = e), JSON.stringify(t);
        } catch (n) {
          return e;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function nX(e = 'Unexpected state') {
        let t = `FIRESTORE (${n$}) INTERNAL ASSERTION FAILED: ` + e;
        throw (nG(t), Error(t));
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let nJ = {
        OK: 'ok',
        CANCELLED: 'cancelled',
        UNKNOWN: 'unknown',
        INVALID_ARGUMENT: 'invalid-argument',
        DEADLINE_EXCEEDED: 'deadline-exceeded',
        NOT_FOUND: 'not-found',
        ALREADY_EXISTS: 'already-exists',
        PERMISSION_DENIED: 'permission-denied',
        UNAUTHENTICATED: 'unauthenticated',
        RESOURCE_EXHAUSTED: 'resource-exhausted',
        FAILED_PRECONDITION: 'failed-precondition',
        ABORTED: 'aborted',
        OUT_OF_RANGE: 'out-of-range',
        UNIMPLEMENTED: 'unimplemented',
        INTERNAL: 'internal',
        UNAVAILABLE: 'unavailable',
        DATA_LOSS: 'data-loss'
      };
      class nY extends m.ZR {
        constructor(e, t) {
          super(e, t),
            (this.code = e),
            (this.message = t),
            (this.toString = () =>
              `${this.name}: [code=${this.code}]: ${this.message}`);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class nZ {
        constructor() {
          this.promise = new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class n0 {
        constructor(e, t) {
          (this.user = t),
            (this.type = 'OAuth'),
            (this.headers = new Map()),
            this.headers.set('Authorization', `Bearer ${e}`);
        }
      }
      class n1 {
        getToken() {
          return Promise.resolve(null);
        }
        invalidateToken() {}
        start(e, t) {
          e.enqueueRetryable(() => t(nq.UNAUTHENTICATED));
        }
        shutdown() {}
      }
      class n2 {
        constructor(e) {
          (this.token = e), (this.changeListener = null);
        }
        getToken() {
          return Promise.resolve(this.token);
        }
        invalidateToken() {}
        start(e, t) {
          (this.changeListener = t),
            e.enqueueRetryable(() => t(this.token.user));
        }
        shutdown() {
          this.changeListener = null;
        }
      }
      class n4 {
        constructor(e) {
          (this.t = e),
            (this.currentUser = nq.UNAUTHENTICATED),
            (this.i = 0),
            (this.forceRefresh = !1),
            (this.auth = null);
        }
        start(e, t) {
          let n = this.i,
            r = (e) =>
              this.i !== n ? ((n = this.i), t(e)) : Promise.resolve(),
            i = new nZ();
          this.o = () => {
            this.i++,
              (this.currentUser = this.u()),
              i.resolve(),
              (i = new nZ()),
              e.enqueueRetryable(() => r(this.currentUser));
          };
          let s = () => {
              let t = i;
              e.enqueueRetryable(async () => {
                await t.promise, await r(this.currentUser);
              });
            },
            a = (e) => {
              nK('FirebaseAuthCredentialsProvider', 'Auth detected'),
                (this.auth = e),
                this.auth.addAuthTokenListener(this.o),
                s();
            };
          this.t.onInit((e) => a(e)),
            setTimeout(() => {
              if (!this.auth) {
                let e = this.t.getImmediate({ optional: !0 });
                e
                  ? a(e)
                  : (nK(
                      'FirebaseAuthCredentialsProvider',
                      'Auth not yet detected'
                    ),
                    i.resolve(),
                    (i = new nZ()));
              }
            }, 0),
            s();
        }
        getToken() {
          let e = this.i,
            t = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.auth
              ? this.auth.getToken(t).then((t) => {
                  var n;
                  return this.i !== e
                    ? (nK(
                        'FirebaseAuthCredentialsProvider',
                        'getToken aborted due to token change.'
                      ),
                      this.getToken())
                    : t
                    ? ('string' == typeof t.accessToken || nX(),
                      new n0(t.accessToken, this.currentUser))
                    : null;
                })
              : Promise.resolve(null)
          );
        }
        invalidateToken() {
          this.forceRefresh = !0;
        }
        shutdown() {
          this.auth && this.auth.removeAuthTokenListener(this.o);
        }
        u() {
          let e = this.auth && this.auth.getUid();
          return null === e || 'string' == typeof e || nX(), new nq(e);
        }
      }
      class n3 {
        constructor(e, t, n, r) {
          (this.h = e),
            (this.l = t),
            (this.m = n),
            (this.g = r),
            (this.type = 'FirstParty'),
            (this.user = nq.FIRST_PARTY),
            (this.p = new Map());
        }
        I() {
          var e;
          return this.g
            ? this.g()
            : (('object' != typeof this.h ||
                null === this.h ||
                !this.h.auth ||
                !this.h.auth.getAuthHeaderValueForFirstParty) &&
                nX(),
              this.h.auth.getAuthHeaderValueForFirstParty([]));
        }
        get headers() {
          this.p.set('X-Goog-AuthUser', this.l);
          let e = this.I();
          return (
            e && this.p.set('Authorization', e),
            this.m && this.p.set('X-Goog-Iam-Authorization-Token', this.m),
            this.p
          );
        }
      }
      class n6 {
        constructor(e, t, n, r) {
          (this.h = e), (this.l = t), (this.m = n), (this.g = r);
        }
        getToken() {
          return Promise.resolve(new n3(this.h, this.l, this.m, this.g));
        }
        start(e, t) {
          e.enqueueRetryable(() => t(nq.FIRST_PARTY));
        }
        shutdown() {}
        invalidateToken() {}
      }
      class n9 {
        constructor(e) {
          (this.value = e),
            (this.type = 'AppCheck'),
            (this.headers = new Map()),
            e &&
              e.length > 0 &&
              this.headers.set('x-firebase-appcheck', this.value);
        }
      }
      class n5 {
        constructor(e) {
          (this.T = e),
            (this.forceRefresh = !1),
            (this.appCheck = null),
            (this.A = null);
        }
        start(e, t) {
          let n = (e) => {
            null != e.error &&
              nK(
                'FirebaseAppCheckTokenProvider',
                `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`
              );
            let n = e.token !== this.A;
            return (
              (this.A = e.token),
              nK(
                'FirebaseAppCheckTokenProvider',
                `Received ${n ? 'new' : 'existing'} token.`
              ),
              n ? t(e.token) : Promise.resolve()
            );
          };
          this.o = (t) => {
            e.enqueueRetryable(() => n(t));
          };
          let r = (e) => {
            nK('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
              (this.appCheck = e),
              this.appCheck.addTokenListener(this.o);
          };
          this.T.onInit((e) => r(e)),
            setTimeout(() => {
              if (!this.appCheck) {
                let e = this.T.getImmediate({ optional: !0 });
                e
                  ? r(e)
                  : nK(
                      'FirebaseAppCheckTokenProvider',
                      'AppCheck not yet detected'
                    );
              }
            }, 0);
        }
        getToken() {
          let e = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.appCheck
              ? this.appCheck.getToken(e).then((e) => {
                  var t;
                  return e
                    ? ('string' == typeof e.token || nX(),
                      (this.A = e.token),
                      new n9(e.token))
                    : null;
                })
              : Promise.resolve(null)
          );
        }
        invalidateToken() {
          this.forceRefresh = !0;
        }
        shutdown() {
          this.appCheck && this.appCheck.removeTokenListener(this.o);
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function n8(e) {
        let t = 'undefined' != typeof self && (self.crypto || self.msCrypto),
          n = new Uint8Array(e);
        if (t && 'function' == typeof t.getRandomValues) t.getRandomValues(n);
        else for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
        return n;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class n7 {
        static R() {
          let e =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            t = Math.floor(256 / e.length) * e.length,
            n = '';
          for (; n.length < 20; ) {
            let r = n8(40);
            for (let i = 0; i < r.length; ++i)
              n.length < 20 && r[i] < t && (n += e.charAt(r[i] % e.length));
          }
          return n;
        }
      }
      function re(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function rt(e, t, n) {
        return e.length === t.length && e.every((e, r) => n(e, t[r]));
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rn {
        constructor(e, t) {
          if (((this.seconds = e), (this.nanoseconds = t), t < 0 || t >= 1e9))
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Timestamp nanoseconds out of range: ' + t
            );
          if (e < -62135596800 || e >= 253402300800)
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Timestamp seconds out of range: ' + e
            );
        }
        static now() {
          return rn.fromMillis(Date.now());
        }
        static fromDate(e) {
          return rn.fromMillis(e.getTime());
        }
        static fromMillis(e) {
          let t = Math.floor(e / 1e3);
          return new rn(t, Math.floor(1e6 * (e - 1e3 * t)));
        }
        toDate() {
          return new Date(this.toMillis());
        }
        toMillis() {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }
        _compareTo(e) {
          return this.seconds === e.seconds
            ? re(this.nanoseconds, e.nanoseconds)
            : re(this.seconds, e.seconds);
        }
        isEqual(e) {
          return (
            e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
          );
        }
        toString() {
          return (
            'Timestamp(seconds=' +
            this.seconds +
            ', nanoseconds=' +
            this.nanoseconds +
            ')'
          );
        }
        toJSON() {
          return { seconds: this.seconds, nanoseconds: this.nanoseconds };
        }
        valueOf() {
          let e = this.seconds - -62135596800;
          return (
            String(e).padStart(12, '0') +
            '.' +
            String(this.nanoseconds).padStart(9, '0')
          );
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rr {
        constructor(e) {
          this.timestamp = e;
        }
        static fromTimestamp(e) {
          return new rr(e);
        }
        static min() {
          return new rr(new rn(0, 0));
        }
        static max() {
          return new rr(new rn(253402300799, 999999999));
        }
        compareTo(e) {
          return this.timestamp._compareTo(e.timestamp);
        }
        isEqual(e) {
          return this.timestamp.isEqual(e.timestamp);
        }
        toMicroseconds() {
          return (
            1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
          );
        }
        toString() {
          return 'SnapshotVersion(' + this.timestamp.toString() + ')';
        }
        toTimestamp() {
          return this.timestamp;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ri {
        constructor(e, t, n) {
          void 0 === t ? (t = 0) : t > e.length && nX(),
            void 0 === n ? (n = e.length - t) : n > e.length - t && nX(),
            (this.segments = e),
            (this.offset = t),
            (this.len = n);
        }
        get length() {
          return this.len;
        }
        isEqual(e) {
          return 0 === ri.comparator(this, e);
        }
        child(e) {
          let t = this.segments.slice(this.offset, this.limit());
          return (
            e instanceof ri
              ? e.forEach((e) => {
                  t.push(e);
                })
              : t.push(e),
            this.construct(t)
          );
        }
        limit() {
          return this.offset + this.length;
        }
        popFirst(e) {
          return (
            (e = void 0 === e ? 1 : e),
            this.construct(this.segments, this.offset + e, this.length - e)
          );
        }
        popLast() {
          return this.construct(this.segments, this.offset, this.length - 1);
        }
        firstSegment() {
          return this.segments[this.offset];
        }
        lastSegment() {
          return this.get(this.length - 1);
        }
        get(e) {
          return this.segments[this.offset + e];
        }
        isEmpty() {
          return 0 === this.length;
        }
        isPrefixOf(e) {
          if (e.length < this.length) return !1;
          for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t)) return !1;
          return !0;
        }
        isImmediateParentOf(e) {
          if (this.length + 1 !== e.length) return !1;
          for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t)) return !1;
          return !0;
        }
        forEach(e) {
          for (let t = this.offset, n = this.limit(); t < n; t++)
            e(this.segments[t]);
        }
        toArray() {
          return this.segments.slice(this.offset, this.limit());
        }
        static comparator(e, t) {
          let n = Math.min(e.length, t.length);
          for (let r = 0; r < n; r++) {
            let i = e.get(r),
              s = t.get(r);
            if (i < s) return -1;
            if (i > s) return 1;
          }
          return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
        }
      }
      class rs extends ri {
        construct(e, t, n) {
          return new rs(e, t, n);
        }
        canonicalString() {
          return this.toArray().join('/');
        }
        toString() {
          return this.canonicalString();
        }
        static fromString(...e) {
          let t = [];
          for (let n of e) {
            if (n.indexOf('//') >= 0)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                `Invalid segment (${n}). Paths must not contain // in them.`
              );
            t.push(...n.split('/').filter((e) => e.length > 0));
          }
          return new rs(t);
        }
        static emptyPath() {
          return new rs([]);
        }
      }
      let ra = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
      class ro extends ri {
        construct(e, t, n) {
          return new ro(e, t, n);
        }
        static isValidIdentifier(e) {
          return ra.test(e);
        }
        canonicalString() {
          return this.toArray()
            .map(
              (e) => (
                (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
                ro.isValidIdentifier(e) || (e = '`' + e + '`'),
                e
              )
            )
            .join('.');
        }
        toString() {
          return this.canonicalString();
        }
        isKeyField() {
          return 1 === this.length && '__name__' === this.get(0);
        }
        static keyField() {
          return new ro(['__name__']);
        }
        static fromServerFormat(e) {
          let t = [],
            n = '',
            r = 0,
            i = () => {
              if (0 === n.length)
                throw new nY(
                  nJ.INVALID_ARGUMENT,
                  `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
                );
              t.push(n), (n = '');
            },
            s = !1;
          for (; r < e.length; ) {
            let a = e[r];
            if ('\\' === a) {
              if (r + 1 === e.length)
                throw new nY(
                  nJ.INVALID_ARGUMENT,
                  'Path has trailing escape character: ' + e
                );
              let o = e[r + 1];
              if ('\\' !== o && '.' !== o && '`' !== o)
                throw new nY(
                  nJ.INVALID_ARGUMENT,
                  'Path has invalid escape sequence: ' + e
                );
              (n += o), (r += 2);
            } else
              '`' === a
                ? ((s = !s), r++)
                : '.' !== a || s
                ? ((n += a), r++)
                : (i(), r++);
          }
          if ((i(), s))
            throw new nY(nJ.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
          return new ro(t);
        }
        static emptyPath() {
          return new ro([]);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rl {
        constructor(e) {
          this.path = e;
        }
        static fromPath(e) {
          return new rl(rs.fromString(e));
        }
        static fromName(e) {
          return new rl(rs.fromString(e).popFirst(5));
        }
        static empty() {
          return new rl(rs.emptyPath());
        }
        get collectionGroup() {
          return this.path.popLast().lastSegment();
        }
        hasCollectionId(e) {
          return (
            this.path.length >= 2 && this.path.get(this.path.length - 2) === e
          );
        }
        getCollectionGroup() {
          return this.path.get(this.path.length - 2);
        }
        getCollectionPath() {
          return this.path.popLast();
        }
        isEqual(e) {
          return null !== e && 0 === rs.comparator(this.path, e.path);
        }
        toString() {
          return this.path.toString();
        }
        static comparator(e, t) {
          return rs.comparator(e.path, t.path);
        }
        static isDocumentKey(e) {
          return e.length % 2 == 0;
        }
        static fromSegments(e) {
          return new rl(new rs(e.slice()));
        }
      }
      function ru(e) {
        return new rh(e.readTime, e.key, -1);
      }
      class rh {
        constructor(e, t, n) {
          (this.readTime = e),
            (this.documentKey = t),
            (this.largestBatchId = n);
        }
        static min() {
          return new rh(rr.min(), rl.empty(), -1);
        }
        static max() {
          return new rh(rr.max(), rl.empty(), -1);
        }
      }
      function rc(e, t) {
        let n = e.readTime.compareTo(t.readTime);
        return 0 !== n
          ? n
          : 0 !== (n = rl.comparator(e.documentKey, t.documentKey))
          ? n
          : re(e.largestBatchId, t.largestBatchId);
      }
      class rd {
        constructor() {
          this.onCommittedListeners = [];
        }
        addOnCommittedListener(e) {
          this.onCommittedListeners.push(e);
        }
        raiseOnCommittedEvent() {
          this.onCommittedListeners.forEach((e) => e());
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function rf(e) {
        if (
          e.code !== nJ.FAILED_PRECONDITION ||
          'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.' !==
            e.message
        )
          throw e;
        nK('LocalStore', 'Unexpectedly lost primary lease');
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rp {
        constructor(e) {
          (this.nextCallback = null),
            (this.catchCallback = null),
            (this.result = void 0),
            (this.error = void 0),
            (this.isDone = !1),
            (this.callbackAttached = !1),
            e(
              (e) => {
                (this.isDone = !0),
                  (this.result = e),
                  this.nextCallback && this.nextCallback(e);
              },
              (e) => {
                (this.isDone = !0),
                  (this.error = e),
                  this.catchCallback && this.catchCallback(e);
              }
            );
        }
        catch(e) {
          return this.next(void 0, e);
        }
        next(e, t) {
          return (
            this.callbackAttached && nX(),
            (this.callbackAttached = !0),
            this.isDone
              ? this.error
                ? this.wrapFailure(t, this.error)
                : this.wrapSuccess(e, this.result)
              : new rp((n, r) => {
                  (this.nextCallback = (t) => {
                    this.wrapSuccess(e, t).next(n, r);
                  }),
                    (this.catchCallback = (e) => {
                      this.wrapFailure(t, e).next(n, r);
                    });
                })
          );
        }
        toPromise() {
          return new Promise((e, t) => {
            this.next(e, t);
          });
        }
        wrapUserFunction(e) {
          try {
            let t = e();
            return t instanceof rp ? t : rp.resolve(t);
          } catch (n) {
            return rp.reject(n);
          }
        }
        wrapSuccess(e, t) {
          return e ? this.wrapUserFunction(() => e(t)) : rp.resolve(t);
        }
        wrapFailure(e, t) {
          return e ? this.wrapUserFunction(() => e(t)) : rp.reject(t);
        }
        static resolve(e) {
          return new rp((t, n) => {
            t(e);
          });
        }
        static reject(e) {
          return new rp((t, n) => {
            n(e);
          });
        }
        static waitFor(e) {
          return new rp((t, n) => {
            let r = 0,
              i = 0,
              s = !1;
            e.forEach((e) => {
              ++r,
                e.next(
                  () => {
                    ++i, s && i === r && t();
                  },
                  (e) => n(e)
                );
            }),
              (s = !0),
              i === r && t();
          });
        }
        static or(e) {
          let t = rp.resolve(!1);
          for (let n of e) t = t.next((e) => (e ? rp.resolve(e) : n()));
          return t;
        }
        static forEach(e, t) {
          let n = [];
          return (
            e.forEach((e, r) => {
              n.push(t.call(this, e, r));
            }),
            this.waitFor(n)
          );
        }
        static mapArray(e, t) {
          return new rp((n, r) => {
            let i = e.length,
              s = Array(i),
              a = 0;
            for (let o = 0; o < i; o++) {
              let l = o;
              t(e[l]).next(
                (e) => {
                  (s[l] = e), ++a === i && n(s);
                },
                (e) => r(e)
              );
            }
          });
        }
        static doWhile(e, t) {
          return new rp((n, r) => {
            let i = () => {
              !0 === e()
                ? t().next(() => {
                    i();
                  }, r)
                : n();
            };
            i();
          });
        }
      }
      function rm(e) {
        return 'IndexedDbTransactionError' === e.name;
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rg {
        constructor(e, t) {
          (this.previousValue = e),
            t &&
              ((t.sequenceNumberHandler = (e) => this.ut(e)),
              (this.ct = (e) => t.writeSequenceNumber(e)));
        }
        ut(e) {
          return (
            (this.previousValue = Math.max(e, this.previousValue)),
            this.previousValue
          );
        }
        next() {
          let e = ++this.previousValue;
          return this.ct && this.ct(e), e;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function ry(e) {
        let t = 0;
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
        return t;
      }
      function rv(e, t) {
        for (let n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
      }
      function rw(e) {
        for (let t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ rg.at = -1;
      class r_ {
        constructor(e, t) {
          (this.comparator = e), (this.root = t || rT.EMPTY);
        }
        insert(e, t) {
          return new r_(
            this.comparator,
            this.root
              .insert(e, t, this.comparator)
              .copy(null, null, rT.BLACK, null, null)
          );
        }
        remove(e) {
          return new r_(
            this.comparator,
            this.root
              .remove(e, this.comparator)
              .copy(null, null, rT.BLACK, null, null)
          );
        }
        get(e) {
          let t = this.root;
          for (; !t.isEmpty(); ) {
            let n = this.comparator(e, t.key);
            if (0 === n) return t.value;
            n < 0 ? (t = t.left) : n > 0 && (t = t.right);
          }
          return null;
        }
        indexOf(e) {
          let t = 0,
            n = this.root;
          for (; !n.isEmpty(); ) {
            let r = this.comparator(e, n.key);
            if (0 === r) return t + n.left.size;
            r < 0 ? (n = n.left) : ((t += n.left.size + 1), (n = n.right));
          }
          return -1;
        }
        isEmpty() {
          return this.root.isEmpty();
        }
        get size() {
          return this.root.size;
        }
        minKey() {
          return this.root.minKey();
        }
        maxKey() {
          return this.root.maxKey();
        }
        inorderTraversal(e) {
          return this.root.inorderTraversal(e);
        }
        forEach(e) {
          this.inorderTraversal((t, n) => (e(t, n), !1));
        }
        toString() {
          let e = [];
          return (
            this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), !1)),
            `{${e.join(', ')}}`
          );
        }
        reverseTraversal(e) {
          return this.root.reverseTraversal(e);
        }
        getIterator() {
          return new rb(this.root, null, this.comparator, !1);
        }
        getIteratorFrom(e) {
          return new rb(this.root, e, this.comparator, !1);
        }
        getReverseIterator() {
          return new rb(this.root, null, this.comparator, !0);
        }
        getReverseIteratorFrom(e) {
          return new rb(this.root, e, this.comparator, !0);
        }
      }
      class rb {
        constructor(e, t, n, r) {
          (this.isReverse = r), (this.nodeStack = []);
          let i = 1;
          for (; !e.isEmpty(); )
            if (((i = t ? n(e.key, t) : 1), t && r && (i *= -1), i < 0))
              e = this.isReverse ? e.left : e.right;
            else {
              if (0 === i) {
                this.nodeStack.push(e);
                break;
              }
              this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
            }
        }
        getNext() {
          let e = this.nodeStack.pop(),
            t = { key: e.key, value: e.value };
          if (this.isReverse)
            for (e = e.left; !e.isEmpty(); )
              this.nodeStack.push(e), (e = e.right);
          else
            for (e = e.right; !e.isEmpty(); )
              this.nodeStack.push(e), (e = e.left);
          return t;
        }
        hasNext() {
          return this.nodeStack.length > 0;
        }
        peek() {
          if (0 === this.nodeStack.length) return null;
          let e = this.nodeStack[this.nodeStack.length - 1];
          return { key: e.key, value: e.value };
        }
      }
      class rT {
        constructor(e, t, n, r, i) {
          (this.key = e),
            (this.value = t),
            (this.color = null != n ? n : rT.RED),
            (this.left = null != r ? r : rT.EMPTY),
            (this.right = null != i ? i : rT.EMPTY),
            (this.size = this.left.size + 1 + this.right.size);
        }
        copy(e, t, n, r, i) {
          return new rT(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != n ? n : this.color,
            null != r ? r : this.left,
            null != i ? i : this.right
          );
        }
        isEmpty() {
          return !1;
        }
        inorderTraversal(e) {
          return (
            this.left.inorderTraversal(e) ||
            e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }
        reverseTraversal(e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }
        min() {
          return this.left.isEmpty() ? this : this.left.min();
        }
        minKey() {
          return this.min().key;
        }
        maxKey() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        insert(e, t, n) {
          let r = this,
            i = n(e, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(e, t, n), null)
              : 0 === i
              ? r.copy(null, t, null, null, null)
              : r.copy(
                  null,
                  null,
                  null,
                  null,
                  r.right.insert(e, t, n)
                )).fixUp();
        }
        removeMin() {
          if (this.left.isEmpty()) return rT.EMPTY;
          let e = this;
          return (
            e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
            (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
          );
        }
        remove(e, t) {
          let n,
            r = this;
          if (0 > t(e, r.key))
            r.left.isEmpty() ||
              r.left.isRed() ||
              r.left.left.isRed() ||
              (r = r.moveRedLeft()),
              (r = r.copy(null, null, null, r.left.remove(e, t), null));
          else {
            if (
              (r.left.isRed() && (r = r.rotateRight()),
              r.right.isEmpty() ||
                r.right.isRed() ||
                r.right.left.isRed() ||
                (r = r.moveRedRight()),
              0 === t(e, r.key))
            ) {
              if (r.right.isEmpty()) return rT.EMPTY;
              (n = r.right.min()),
                (r = r.copy(n.key, n.value, null, null, r.right.removeMin()));
            }
            r = r.copy(null, null, null, null, r.right.remove(e, t));
          }
          return r.fixUp();
        }
        isRed() {
          return this.color;
        }
        fixUp() {
          let e = this;
          return (
            e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
            e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
            e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
            e
          );
        }
        moveRedLeft() {
          let e = this.colorFlip();
          return (
            e.right.left.isRed() &&
              (e = (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight()
              )).rotateLeft()).colorFlip()),
            e
          );
        }
        moveRedRight() {
          let e = this.colorFlip();
          return (
            e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()), e
          );
        }
        rotateLeft() {
          let e = this.copy(null, null, rT.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }
        rotateRight() {
          let e = this.copy(null, null, rT.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }
        colorFlip() {
          let e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }
        checkMaxDepth() {
          let e = this.check();
          return Math.pow(2, e) <= this.size + 1;
        }
        check() {
          if ((this.isRed() && this.left.isRed()) || this.right.isRed())
            throw nX();
          let e = this.left.check();
          if (e !== this.right.check()) throw nX();
          return e + (this.isRed() ? 0 : 1);
        }
      }
      (rT.EMPTY = null),
        (rT.RED = !0),
        (rT.BLACK = !1),
        (rT.EMPTY = new (class {
          constructor() {
            this.size = 0;
          }
          get key() {
            throw nX();
          }
          get value() {
            throw nX();
          }
          get color() {
            throw nX();
          }
          get left() {
            throw nX();
          }
          get right() {
            throw nX();
          }
          copy(e, t, n, r, i) {
            return this;
          }
          insert(e, t, n) {
            return new rT(e, t);
          }
          remove(e, t) {
            return this;
          }
          isEmpty() {
            return !0;
          }
          inorderTraversal(e) {
            return !1;
          }
          reverseTraversal(e) {
            return !1;
          }
          minKey() {
            return null;
          }
          maxKey() {
            return null;
          }
          isRed() {
            return !1;
          }
          checkMaxDepth() {
            return !0;
          }
          check() {
            return 0;
          }
        })());
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rI {
        constructor(e) {
          (this.comparator = e), (this.data = new r_(this.comparator));
        }
        has(e) {
          return null !== this.data.get(e);
        }
        first() {
          return this.data.minKey();
        }
        last() {
          return this.data.maxKey();
        }
        get size() {
          return this.data.size;
        }
        indexOf(e) {
          return this.data.indexOf(e);
        }
        forEach(e) {
          this.data.inorderTraversal((t, n) => (e(t), !1));
        }
        forEachInRange(e, t) {
          let n = this.data.getIteratorFrom(e[0]);
          for (; n.hasNext(); ) {
            let r = n.getNext();
            if (this.comparator(r.key, e[1]) >= 0) return;
            t(r.key);
          }
        }
        forEachWhile(e, t) {
          let n;
          for (
            n =
              void 0 !== t
                ? this.data.getIteratorFrom(t)
                : this.data.getIterator();
            n.hasNext();

          )
            if (!e(n.getNext().key)) return;
        }
        firstAfterOrEqual(e) {
          let t = this.data.getIteratorFrom(e);
          return t.hasNext() ? t.getNext().key : null;
        }
        getIterator() {
          return new rE(this.data.getIterator());
        }
        getIteratorFrom(e) {
          return new rE(this.data.getIteratorFrom(e));
        }
        add(e) {
          return this.copy(this.data.remove(e).insert(e, !0));
        }
        delete(e) {
          return this.has(e) ? this.copy(this.data.remove(e)) : this;
        }
        isEmpty() {
          return this.data.isEmpty();
        }
        unionWith(e) {
          let t = this;
          return (
            t.size < e.size && ((t = e), (e = this)),
            e.forEach((e) => {
              t = t.add(e);
            }),
            t
          );
        }
        isEqual(e) {
          if (!(e instanceof rI) || this.size !== e.size) return !1;
          let t = this.data.getIterator(),
            n = e.data.getIterator();
          for (; t.hasNext(); ) {
            let r = t.getNext().key,
              i = n.getNext().key;
            if (0 !== this.comparator(r, i)) return !1;
          }
          return !0;
        }
        toArray() {
          let e = [];
          return (
            this.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        toString() {
          let e = [];
          return (
            this.forEach((t) => e.push(t)), 'SortedSet(' + e.toString() + ')'
          );
        }
        copy(e) {
          let t = new rI(this.comparator);
          return (t.data = e), t;
        }
      }
      class rE {
        constructor(e) {
          this.iter = e;
        }
        getNext() {
          return this.iter.getNext().key;
        }
        hasNext() {
          return this.iter.hasNext();
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rk {
        constructor(e) {
          (this.fields = e), e.sort(ro.comparator);
        }
        static empty() {
          return new rk([]);
        }
        unionWith(e) {
          let t = new rI(ro.comparator);
          for (let n of this.fields) t = t.add(n);
          for (let r of e) t = t.add(r);
          return new rk(t.toArray());
        }
        covers(e) {
          for (let t of this.fields) if (t.isPrefixOf(e)) return !0;
          return !1;
        }
        isEqual(e) {
          return rt(this.fields, e.fields, (e, t) => e.isEqual(t));
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rS {
        constructor(e) {
          this.binaryString = e;
        }
        static fromBase64String(e) {
          let t = atob(e);
          return new rS(t);
        }
        static fromUint8Array(e) {
          let t = (function (e) {
            let t = '';
            for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
            return t;
          })(e);
          return new rS(t);
        }
        [Symbol.iterator]() {
          let e = 0;
          return {
            next: () =>
              e < this.binaryString.length
                ? { value: this.binaryString.charCodeAt(e++), done: !1 }
                : { value: void 0, done: !0 }
          };
        }
        toBase64() {
          var e;
          return btoa(this.binaryString);
        }
        toUint8Array() {
          return (function (e) {
            let t = new Uint8Array(e.length);
            for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
            return t;
          })(this.binaryString);
        }
        approximateByteSize() {
          return 2 * this.binaryString.length;
        }
        compareTo(e) {
          return re(this.binaryString, e.binaryString);
        }
        isEqual(e) {
          return this.binaryString === e.binaryString;
        }
      }
      rS.EMPTY_BYTE_STRING = new rS('');
      let rC = RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function rA(e) {
        if ((!e && nX(), 'string' == typeof e)) {
          let t = 0,
            n = rC.exec(e);
          if ((!n && nX(), n[1])) {
            let r = n[1];
            t = Number((r = (r + '000000000').substr(0, 9)));
          }
          let i = new Date(e);
          return { seconds: Math.floor(i.getTime() / 1e3), nanos: t };
        }
        return { seconds: rR(e.seconds), nanos: rR(e.nanos) };
      }
      function rR(e) {
        return 'number' == typeof e ? e : 'string' == typeof e ? Number(e) : 0;
      }
      function rN(e) {
        return 'string' == typeof e
          ? rS.fromBase64String(e)
          : rS.fromUint8Array(e);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function rD(e) {
        var t, n;
        return (
          'server_timestamp' ===
          (null ===
            (n = (
              (null === (t = null == e ? void 0 : e.mapValue) || void 0 === t
                ? void 0
                : t.fields) || {}
            ).__type__) || void 0 === n
            ? void 0
            : n.stringValue)
        );
      }
      function rO(e) {
        let t = rA(e.mapValue.fields.__local_write_time__.timestampValue);
        return new rn(t.seconds, t.nanos);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rL {
        constructor(e, t, n, r, i, s, a, o) {
          (this.databaseId = e),
            (this.appId = t),
            (this.persistenceKey = n),
            (this.host = r),
            (this.ssl = i),
            (this.forceLongPolling = s),
            (this.autoDetectLongPolling = a),
            (this.useFetchStreams = o);
        }
      }
      class rP {
        constructor(e, t) {
          (this.projectId = e), (this.database = t || '(default)');
        }
        static empty() {
          return new rP('', '');
        }
        get isDefaultDatabase() {
          return '(default)' === this.database;
        }
        isEqual(e) {
          return (
            e instanceof rP &&
            e.projectId === this.projectId &&
            e.database === this.database
          );
        }
      }
      function rx(e) {
        return null == e;
      }
      function rM(e) {
        return 0 === e && 1 / e == -1 / 0;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let rU = {
        mapValue: { fields: { __type__: { stringValue: '__max__' } } }
      };
      function rF(e) {
        return 'nullValue' in e
          ? 0
          : 'booleanValue' in e
          ? 1
          : 'integerValue' in e || 'doubleValue' in e
          ? 2
          : 'timestampValue' in e
          ? 3
          : 'stringValue' in e
          ? 5
          : 'bytesValue' in e
          ? 6
          : 'referenceValue' in e
          ? 7
          : 'geoPointValue' in e
          ? 8
          : 'arrayValue' in e
          ? 9
          : 'mapValue' in e
          ? rD(e)
            ? 4
            : rJ(e)
            ? 9007199254740991
            : 10
          : nX();
      }
      function rV(e, t) {
        var n, r, i, s;
        if (e === t) return !0;
        let a = rF(e);
        if (a !== rF(t)) return !1;
        switch (a) {
          case 0:
          case 9007199254740991:
            return !0;
          case 1:
            return e.booleanValue === t.booleanValue;
          case 4:
            return rO(e).isEqual(rO(t));
          case 3:
            return (function (e, t) {
              if (
                'string' == typeof e.timestampValue &&
                'string' == typeof t.timestampValue &&
                e.timestampValue.length === t.timestampValue.length
              )
                return e.timestampValue === t.timestampValue;
              let n = rA(e.timestampValue),
                r = rA(t.timestampValue);
              return n.seconds === r.seconds && n.nanos === r.nanos;
            })(e, t);
          case 5:
            return e.stringValue === t.stringValue;
          case 6:
            return rN(e.bytesValue).isEqual(rN(t.bytesValue));
          case 7:
            return e.referenceValue === t.referenceValue;
          case 8:
            return (
              rR(e.geoPointValue.latitude) === rR(t.geoPointValue.latitude) &&
              rR(e.geoPointValue.longitude) === rR(t.geoPointValue.longitude)
            );
          case 2:
            return (function (e, t) {
              if ('integerValue' in e && 'integerValue' in t)
                return rR(e.integerValue) === rR(t.integerValue);
              if ('doubleValue' in e && 'doubleValue' in t) {
                let n = rR(e.doubleValue),
                  r = rR(t.doubleValue);
                return n === r ? rM(n) === rM(r) : isNaN(n) && isNaN(r);
              }
              return !1;
            })(e, t);
          case 9:
            return rt(e.arrayValue.values || [], t.arrayValue.values || [], rV);
          case 10:
            return (function (e, t) {
              let n = e.mapValue.fields || {},
                r = t.mapValue.fields || {};
              if (ry(n) !== ry(r)) return !1;
              for (let i in n)
                if (n.hasOwnProperty(i) && (void 0 === r[i] || !rV(n[i], r[i])))
                  return !1;
              return !0;
            })(e, t);
          default:
            return nX();
        }
      }
      function rB(e, t) {
        return void 0 !== (e.values || []).find((e) => rV(e, t));
      }
      function rj(e, t) {
        if (e === t) return 0;
        let n = rF(e),
          r = rF(t);
        if (n !== r) return re(n, r);
        switch (n) {
          case 0:
          case 9007199254740991:
            return 0;
          case 1:
            return re(e.booleanValue, t.booleanValue);
          case 2:
            return (function (e, t) {
              let n = rR(e.integerValue || e.doubleValue),
                r = rR(t.integerValue || t.doubleValue);
              return n < r
                ? -1
                : n > r
                ? 1
                : n === r
                ? 0
                : isNaN(n)
                ? isNaN(r)
                  ? 0
                  : -1
                : 1;
            })(e, t);
          case 3:
            return rq(e.timestampValue, t.timestampValue);
          case 4:
            return rq(rO(e), rO(t));
          case 5:
            return re(e.stringValue, t.stringValue);
          case 6:
            return (function (e, t) {
              let n = rN(e),
                r = rN(t);
              return n.compareTo(r);
            })(e.bytesValue, t.bytesValue);
          case 7:
            return (function (e, t) {
              let n = e.split('/'),
                r = t.split('/');
              for (let i = 0; i < n.length && i < r.length; i++) {
                let s = re(n[i], r[i]);
                if (0 !== s) return s;
              }
              return re(n.length, r.length);
            })(e.referenceValue, t.referenceValue);
          case 8:
            return (function (e, t) {
              let n = re(rR(e.latitude), rR(t.latitude));
              return 0 !== n ? n : re(rR(e.longitude), rR(t.longitude));
            })(e.geoPointValue, t.geoPointValue);
          case 9:
            return (function (e, t) {
              let n = e.values || [],
                r = t.values || [];
              for (let i = 0; i < n.length && i < r.length; ++i) {
                let s = rj(n[i], r[i]);
                if (s) return s;
              }
              return re(n.length, r.length);
            })(e.arrayValue, t.arrayValue);
          case 10:
            return (function (e, t) {
              if (e === rU.mapValue && t === rU.mapValue) return 0;
              if (e === rU.mapValue) return 1;
              if (t === rU.mapValue) return -1;
              let n = e.fields || {},
                r = Object.keys(n),
                i = t.fields || {},
                s = Object.keys(i);
              r.sort(), s.sort();
              for (let a = 0; a < r.length && a < s.length; ++a) {
                let o = re(r[a], s[a]);
                if (0 !== o) return o;
                let l = rj(n[r[a]], i[s[a]]);
                if (0 !== l) return l;
              }
              return re(r.length, s.length);
            })(e.mapValue, t.mapValue);
          default:
            throw nX();
        }
      }
      function rq(e, t) {
        if (
          'string' == typeof e &&
          'string' == typeof t &&
          e.length === t.length
        )
          return re(e, t);
        let n = rA(e),
          r = rA(t),
          i = re(n.seconds, r.seconds);
        return 0 !== i ? i : re(n.nanos, r.nanos);
      }
      function r$(e) {
        var t, n;
        return 'nullValue' in e
          ? 'null'
          : 'booleanValue' in e
          ? '' + e.booleanValue
          : 'integerValue' in e
          ? '' + e.integerValue
          : 'doubleValue' in e
          ? '' + e.doubleValue
          : 'timestampValue' in e
          ? (function (e) {
              let t = rA(e);
              return `time(${t.seconds},${t.nanos})`;
            })(e.timestampValue)
          : 'stringValue' in e
          ? e.stringValue
          : 'bytesValue' in e
          ? rN(e.bytesValue).toBase64()
          : 'referenceValue' in e
          ? ((n = e.referenceValue), rl.fromName(n).toString())
          : 'geoPointValue' in e
          ? `geo(${(t = e.geoPointValue).latitude},${t.longitude})`
          : 'arrayValue' in e
          ? (function (e) {
              let t = '[',
                n = !0;
              for (let r of e.values || [])
                n ? (n = !1) : (t += ','), (t += r$(r));
              return t + ']';
            })(e.arrayValue)
          : 'mapValue' in e
          ? (function (e) {
              let t = Object.keys(e.fields || {}).sort(),
                n = '{',
                r = !0;
              for (let i of t)
                r ? (r = !1) : (n += ','), (n += `${i}:${r$(e.fields[i])}`);
              return n + '}';
            })(e.mapValue)
          : nX();
      }
      function rz(e, t) {
        return {
          referenceValue: `projects/${e.projectId}/databases/${
            e.database
          }/documents/${t.path.canonicalString()}`
        };
      }
      function rH(e) {
        return !!e && 'integerValue' in e;
      }
      function rK(e) {
        return !!e && 'arrayValue' in e;
      }
      function rG(e) {
        return !!e && 'nullValue' in e;
      }
      function rW(e) {
        return !!e && 'doubleValue' in e && isNaN(Number(e.doubleValue));
      }
      function rQ(e) {
        return !!e && 'mapValue' in e;
      }
      function rX(e) {
        if (e.geoPointValue)
          return { geoPointValue: Object.assign({}, e.geoPointValue) };
        if (e.timestampValue && 'object' == typeof e.timestampValue)
          return { timestampValue: Object.assign({}, e.timestampValue) };
        if (e.mapValue) {
          let t = { mapValue: { fields: {} } };
          return (
            rv(e.mapValue.fields, (e, n) => (t.mapValue.fields[e] = rX(n))), t
          );
        }
        if (e.arrayValue) {
          let n = { arrayValue: { values: [] } };
          for (let r = 0; r < (e.arrayValue.values || []).length; ++r)
            n.arrayValue.values[r] = rX(e.arrayValue.values[r]);
          return n;
        }
        return Object.assign({}, e);
      }
      function rJ(e) {
        return (
          '__max__' ===
          (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
        );
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class rY {
        constructor(e) {
          this.value = e;
        }
        static empty() {
          return new rY({ mapValue: {} });
        }
        field(e) {
          if (e.isEmpty()) return this.value;
          {
            let t = this.value;
            for (let n = 0; n < e.length - 1; ++n)
              if (!rQ((t = (t.mapValue.fields || {})[e.get(n)]))) return null;
            return (t = (t.mapValue.fields || {})[e.lastSegment()]) || null;
          }
        }
        set(e, t) {
          this.getFieldsMap(e.popLast())[e.lastSegment()] = rX(t);
        }
        setAll(e) {
          let t = ro.emptyPath(),
            n = {},
            r = [];
          e.forEach((e, i) => {
            if (!t.isImmediateParentOf(i)) {
              let s = this.getFieldsMap(t);
              this.applyChanges(s, n, r), (n = {}), (r = []), (t = i.popLast());
            }
            e ? (n[i.lastSegment()] = rX(e)) : r.push(i.lastSegment());
          });
          let i = this.getFieldsMap(t);
          this.applyChanges(i, n, r);
        }
        delete(e) {
          let t = this.field(e.popLast());
          rQ(t) &&
            t.mapValue.fields &&
            delete t.mapValue.fields[e.lastSegment()];
        }
        isEqual(e) {
          return rV(this.value, e.value);
        }
        getFieldsMap(e) {
          let t = this.value;
          t.mapValue.fields || (t.mapValue = { fields: {} });
          for (let n = 0; n < e.length; ++n) {
            let r = t.mapValue.fields[e.get(n)];
            (rQ(r) && r.mapValue.fields) ||
              ((r = { mapValue: { fields: {} } }),
              (t.mapValue.fields[e.get(n)] = r)),
              (t = r);
          }
          return t.mapValue.fields;
        }
        applyChanges(e, t, n) {
          for (let r of (rv(t, (t, n) => (e[t] = n)), n)) delete e[r];
        }
        clone() {
          return new rY(rX(this.value));
        }
      }
      function rZ(e) {
        let t = [];
        return (
          rv(e.fields, (e, n) => {
            let r = new ro([e]);
            if (rQ(n)) {
              let i = rZ(n.mapValue).fields;
              if (0 === i.length) t.push(r);
              else for (let s of i) t.push(r.child(s));
            } else t.push(r);
          }),
          new rk(t)
        );
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class r0 {
        constructor(e, t, n, r, i, s) {
          (this.key = e),
            (this.documentType = t),
            (this.version = n),
            (this.readTime = r),
            (this.data = i),
            (this.documentState = s);
        }
        static newInvalidDocument(e) {
          return new r0(e, 0, rr.min(), rr.min(), rY.empty(), 0);
        }
        static newFoundDocument(e, t, n) {
          return new r0(e, 1, t, rr.min(), n, 0);
        }
        static newNoDocument(e, t) {
          return new r0(e, 2, t, rr.min(), rY.empty(), 0);
        }
        static newUnknownDocument(e, t) {
          return new r0(e, 3, t, rr.min(), rY.empty(), 2);
        }
        convertToFoundDocument(e, t) {
          return (
            (this.version = e),
            (this.documentType = 1),
            (this.data = t),
            (this.documentState = 0),
            this
          );
        }
        convertToNoDocument(e) {
          return (
            (this.version = e),
            (this.documentType = 2),
            (this.data = rY.empty()),
            (this.documentState = 0),
            this
          );
        }
        convertToUnknownDocument(e) {
          return (
            (this.version = e),
            (this.documentType = 3),
            (this.data = rY.empty()),
            (this.documentState = 2),
            this
          );
        }
        setHasCommittedMutations() {
          return (this.documentState = 2), this;
        }
        setHasLocalMutations() {
          return (this.documentState = 1), (this.version = rr.min()), this;
        }
        setReadTime(e) {
          return (this.readTime = e), this;
        }
        get hasLocalMutations() {
          return 1 === this.documentState;
        }
        get hasCommittedMutations() {
          return 2 === this.documentState;
        }
        get hasPendingWrites() {
          return this.hasLocalMutations || this.hasCommittedMutations;
        }
        isValidDocument() {
          return 0 !== this.documentType;
        }
        isFoundDocument() {
          return 1 === this.documentType;
        }
        isNoDocument() {
          return 2 === this.documentType;
        }
        isUnknownDocument() {
          return 3 === this.documentType;
        }
        isEqual(e) {
          return (
            e instanceof r0 &&
            this.key.isEqual(e.key) &&
            this.version.isEqual(e.version) &&
            this.documentType === e.documentType &&
            this.documentState === e.documentState &&
            this.data.isEqual(e.data)
          );
        }
        mutableCopy() {
          return new r0(
            this.key,
            this.documentType,
            this.version,
            this.readTime,
            this.data.clone(),
            this.documentState
          );
        }
        toString() {
          return `Document(${this.key}, ${this.version}, ${JSON.stringify(
            this.data.value
          )}, {documentType: ${this.documentType}}), {documentState: ${
            this.documentState
          }})`;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class r1 {
        constructor(e, t = null, n = [], r = [], i = null, s = null, a = null) {
          (this.path = e),
            (this.collectionGroup = t),
            (this.orderBy = n),
            (this.filters = r),
            (this.limit = i),
            (this.startAt = s),
            (this.endAt = a),
            (this.ht = null);
        }
      }
      function r2(e, t = null, n = [], r = [], i = null, s = null, a = null) {
        return new r1(e, t, n, r, i, s, a);
      }
      function r4(e) {
        var t;
        let n = e;
        if (null === n.ht) {
          let r = n.path.canonicalString();
          null !== n.collectionGroup && (r += '|cg:' + n.collectionGroup),
            (r += '|f:'),
            (r += n.filters
              .map((e) => {
                var t;
                return (
                  e.field.canonicalString() +
                  e.op.toString() +
                  r$((t = e.value))
                );
              })
              .join(',')),
            (r += '|ob:'),
            (r += n.orderBy
              .map((e) => {
                var t;
                return e.field.canonicalString() + e.dir;
              })
              .join(',')),
            rx(n.limit) || ((r += '|l:'), (r += n.limit)),
            n.startAt &&
              ((r += '|lb:'),
              (r += n.startAt.inclusive ? 'b:' : 'a:'),
              (r += n.startAt.position
                .map((e) => {
                  var t;
                  return r$(e);
                })
                .join(','))),
            n.endAt &&
              ((r += '|ub:'),
              (r += n.endAt.inclusive ? 'a:' : 'b:'),
              (r += n.endAt.position
                .map((e) => {
                  var t;
                  return r$(e);
                })
                .join(','))),
            (n.ht = r);
        }
        return n.ht;
      }
      function r3(e, t) {
        var n, r;
        if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length)
          return !1;
        for (let i = 0; i < e.orderBy.length; i++)
          if (!il(e.orderBy[i], t.orderBy[i])) return !1;
        if (e.filters.length !== t.filters.length) return !1;
        for (let s = 0; s < e.filters.length; s++)
          if (
            ((n = e.filters[s]),
            (r = t.filters[s]),
            n.op !== r.op || !n.field.isEqual(r.field) || !rV(n.value, r.value))
          )
            return !1;
        return (
          e.collectionGroup === t.collectionGroup &&
          !!e.path.isEqual(t.path) &&
          !!ih(e.startAt, t.startAt) &&
          ih(e.endAt, t.endAt)
        );
      }
      function r6(e) {
        return (
          rl.isDocumentKey(e.path) &&
          null === e.collectionGroup &&
          0 === e.filters.length
        );
      }
      class r9 extends class {} {
        constructor(e, t, n) {
          super(), (this.field = e), (this.op = t), (this.value = n);
        }
        static create(e, t, n) {
          return e.isKeyField()
            ? 'in' === t || 'not-in' === t
              ? this.lt(e, t, n)
              : new r5(e, t, n)
            : 'array-contains' === t
            ? new it(e, n)
            : 'in' === t
            ? new ir(e, n)
            : 'not-in' === t
            ? new ii(e, n)
            : 'array-contains-any' === t
            ? new is(e, n)
            : new r9(e, t, n);
        }
        static lt(e, t, n) {
          return 'in' === t ? new r8(e, n) : new r7(e, n);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return '!=' === this.op
            ? null !== t && this.ft(rj(t, this.value))
            : null !== t &&
                rF(this.value) === rF(t) &&
                this.ft(rj(t, this.value));
        }
        ft(e) {
          switch (this.op) {
            case '<':
              return e < 0;
            case '<=':
              return e <= 0;
            case '==':
              return 0 === e;
            case '!=':
              return 0 !== e;
            case '>':
              return e > 0;
            case '>=':
              return e >= 0;
            default:
              return nX();
          }
        }
        dt() {
          return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
        }
      }
      class r5 extends r9 {
        constructor(e, t, n) {
          super(e, t, n), (this.key = rl.fromName(n.referenceValue));
        }
        matches(e) {
          let t = rl.comparator(e.key, this.key);
          return this.ft(t);
        }
      }
      class r8 extends r9 {
        constructor(e, t) {
          super(e, 'in', t), (this.keys = ie('in', t));
        }
        matches(e) {
          return this.keys.some((t) => t.isEqual(e.key));
        }
      }
      class r7 extends r9 {
        constructor(e, t) {
          super(e, 'not-in', t), (this.keys = ie('not-in', t));
        }
        matches(e) {
          return !this.keys.some((t) => t.isEqual(e.key));
        }
      }
      function ie(e, t) {
        var n;
        return (
          (null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) ||
          []
        ).map((e) => rl.fromName(e.referenceValue));
      }
      class it extends r9 {
        constructor(e, t) {
          super(e, 'array-contains', t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return rK(t) && rB(t.arrayValue, this.value);
        }
      }
      class ir extends r9 {
        constructor(e, t) {
          super(e, 'in', t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return null !== t && rB(this.value.arrayValue, t);
        }
      }
      class ii extends r9 {
        constructor(e, t) {
          super(e, 'not-in', t);
        }
        matches(e) {
          if (rB(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
          let t = e.data.field(this.field);
          return null !== t && !rB(this.value.arrayValue, t);
        }
      }
      class is extends r9 {
        constructor(e, t) {
          super(e, 'array-contains-any', t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return (
            !(!rK(t) || !t.arrayValue.values) &&
            t.arrayValue.values.some((e) => rB(this.value.arrayValue, e))
          );
        }
      }
      class ia {
        constructor(e, t) {
          (this.position = e), (this.inclusive = t);
        }
      }
      class io {
        constructor(e, t = 'asc') {
          (this.field = e), (this.dir = t);
        }
      }
      function il(e, t) {
        return e.dir === t.dir && e.field.isEqual(t.field);
      }
      function iu(e, t, n) {
        let r = 0;
        for (let i = 0; i < e.position.length; i++) {
          let s = t[i],
            a = e.position[i];
          if (
            ((r = s.field.isKeyField()
              ? rl.comparator(rl.fromName(a.referenceValue), n.key)
              : rj(a, n.data.field(s.field))),
            'desc' === s.dir && (r *= -1),
            0 !== r)
          )
            break;
        }
        return r;
      }
      function ih(e, t) {
        if (null === e) return null === t;
        if (
          null === t ||
          e.inclusive !== t.inclusive ||
          e.position.length !== t.position.length
        )
          return !1;
        for (let n = 0; n < e.position.length; n++)
          if (!rV(e.position[n], t.position[n])) return !1;
        return !0;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ic {
        constructor(
          e,
          t = null,
          n = [],
          r = [],
          i = null,
          s = 'F',
          a = null,
          o = null
        ) {
          (this.path = e),
            (this.collectionGroup = t),
            (this.explicitOrderBy = n),
            (this.filters = r),
            (this.limit = i),
            (this.limitType = s),
            (this.startAt = a),
            (this.endAt = o),
            (this._t = null),
            (this.wt = null),
            this.startAt,
            this.endAt;
        }
      }
      function id(e) {
        return new ic(e);
      }
      function ip(e) {
        return (
          0 === e.filters.length &&
          null === e.limit &&
          null == e.startAt &&
          null == e.endAt &&
          (0 === e.explicitOrderBy.length ||
            (1 === e.explicitOrderBy.length &&
              e.explicitOrderBy[0].field.isKeyField()))
        );
      }
      function im(e) {
        return e.explicitOrderBy.length > 0 ? e.explicitOrderBy[0].field : null;
      }
      function ig(e) {
        for (let t of e.filters) if (t.dt()) return t.field;
        return null;
      }
      function iy(e) {
        return null !== e.collectionGroup;
      }
      function iv(e) {
        var t;
        let n = e;
        if (null === n._t) {
          n._t = [];
          let r = ig(n),
            i = im(n);
          if (null !== r && null === i)
            r.isKeyField() || n._t.push(new io(r)),
              n._t.push(new io(ro.keyField(), 'asc'));
          else {
            let s = !1;
            for (let a of n.explicitOrderBy)
              n._t.push(a), a.field.isKeyField() && (s = !0);
            if (!s) {
              let o =
                n.explicitOrderBy.length > 0
                  ? n.explicitOrderBy[n.explicitOrderBy.length - 1].dir
                  : 'asc';
              n._t.push(new io(ro.keyField(), o));
            }
          }
        }
        return n._t;
      }
      function iw(e) {
        var t;
        let n = e;
        if (!n.wt) {
          if ('F' === n.limitType)
            n.wt = r2(
              n.path,
              n.collectionGroup,
              iv(n),
              n.filters,
              n.limit,
              n.startAt,
              n.endAt
            );
          else {
            let r = [];
            for (let i of iv(n)) {
              let s = 'desc' === i.dir ? 'asc' : 'desc';
              r.push(new io(i.field, s));
            }
            let a = n.endAt
                ? new ia(n.endAt.position, n.endAt.inclusive)
                : null,
              o = n.startAt
                ? new ia(n.startAt.position, n.startAt.inclusive)
                : null;
            n.wt = r2(n.path, n.collectionGroup, r, n.filters, n.limit, a, o);
          }
        }
        return n.wt;
      }
      function i_(e, t, n) {
        return new ic(
          e.path,
          e.collectionGroup,
          e.explicitOrderBy.slice(),
          e.filters.slice(),
          t,
          n,
          e.startAt,
          e.endAt
        );
      }
      function ib(e, t) {
        return r3(iw(e), iw(t)) && e.limitType === t.limitType;
      }
      function iT(e) {
        return `${r4(iw(e))}|lt:${e.limitType}`;
      }
      function iI(e) {
        var t;
        let n;
        return `Query(target=${
          ((n = (t = iw(e)).path.canonicalString()),
          null !== t.collectionGroup &&
            (n += ' collectionGroup=' + t.collectionGroup),
          t.filters.length > 0 &&
            (n += `, filters: [${t.filters
              .map((e) => {
                var t;
                return `${e.field.canonicalString()} ${e.op} ${r$(
                  (t = e.value)
                )}`;
              })
              .join(', ')}]`),
          rx(t.limit) || (n += ', limit: ' + t.limit),
          t.orderBy.length > 0 &&
            (n += `, orderBy: [${t.orderBy
              .map((e) => {
                var t;
                return `${e.field.canonicalString()} (${e.dir})`;
              })
              .join(', ')}]`),
          t.startAt &&
            ((n += ', startAt: '),
            (n += t.startAt.inclusive ? 'b:' : 'a:'),
            (n += t.startAt.position
              .map((e) => {
                var t;
                return r$(e);
              })
              .join(','))),
          t.endAt &&
            ((n += ', endAt: '),
            (n += t.endAt.inclusive ? 'a:' : 'b:'),
            (n += t.endAt.position
              .map((e) => {
                var t;
                return r$(e);
              })
              .join(','))),
          `Target(${n})`)
        }; limitType=${e.limitType})`;
      }
      function iE(e, t) {
        var n, r;
        return (
          t.isFoundDocument() &&
          (function (e, t) {
            let n = t.key.path;
            return null !== e.collectionGroup
              ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n)
              : rl.isDocumentKey(e.path)
              ? e.path.isEqual(n)
              : e.path.isImmediateParentOf(n);
          })(e, t) &&
          (function (e, t) {
            for (let n of e.explicitOrderBy)
              if (!n.field.isKeyField() && null === t.data.field(n.field))
                return !1;
            return !0;
          })(e, t) &&
          (function (e, t) {
            for (let n of e.filters) if (!n.matches(t)) return !1;
            return !0;
          })(e, t) &&
          (!e.startAt ||
            !!(function (e, t, n) {
              let r = iu(e, t, n);
              return e.inclusive ? r <= 0 : r < 0;
            })(e.startAt, iv(e), t)) &&
          (!e.endAt ||
            !!(function (e, t, n) {
              let r = iu(e, t, n);
              return e.inclusive ? r >= 0 : r > 0;
            })(e.endAt, iv(e), t))
        );
      }
      function ik(e) {
        return (t, n) => {
          let r = !1;
          for (let i of iv(e)) {
            let s = iS(i, t, n);
            if (0 !== s) return s;
            r = r || i.field.isKeyField();
          }
          return 0;
        };
      }
      function iS(e, t, n) {
        let r = e.field.isKeyField()
          ? rl.comparator(t.key, n.key)
          : (function (e, t, n) {
              let r = t.data.field(e),
                i = n.data.field(e);
              return null !== r && null !== i ? rj(r, i) : nX();
            })(e.field, t, n);
        switch (e.dir) {
          case 'asc':
            return r;
          case 'desc':
            return -1 * r;
          default:
            return nX();
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function iC(e, t) {
        if (e.gt) {
          if (isNaN(t)) return { doubleValue: 'NaN' };
          if (t === 1 / 0) return { doubleValue: 'Infinity' };
          if (t === -1 / 0) return { doubleValue: '-Infinity' };
        }
        return { doubleValue: rM(t) ? '-0' : t };
      }
      function iA(e) {
        return { integerValue: '' + e };
      }
      function iR(e, t) {
        var n;
        return 'number' == typeof t &&
          Number.isInteger(t) &&
          !rM(t) &&
          t <= Number.MAX_SAFE_INTEGER &&
          t >= Number.MIN_SAFE_INTEGER
          ? iA(t)
          : iC(e, t);
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class iN {
        constructor() {
          this._ = void 0;
        }
      }
      function iD(e, t, n) {
        return e instanceof iP
          ? (function (e, t) {
              let n = {
                fields: {
                  __type__: { stringValue: 'server_timestamp' },
                  __local_write_time__: {
                    timestampValue: { seconds: e.seconds, nanos: e.nanoseconds }
                  }
                }
              };
              return t && (n.fields.__previous_value__ = t), { mapValue: n };
            })(n, t)
          : e instanceof ix
          ? iM(e, t)
          : e instanceof iU
          ? iF(e, t)
          : (function (e, t) {
              let n = iL(e, t),
                r = iB(n) + iB(e.yt);
              return rH(n) && rH(e.yt) ? iA(r) : iC(e.It, r);
            })(e, t);
      }
      function iO(e, t, n) {
        return e instanceof ix ? iM(e, t) : e instanceof iU ? iF(e, t) : n;
      }
      function iL(e, t) {
        var n;
        return e instanceof iV
          ? rH(t) || (t && 'doubleValue' in t)
            ? t
            : { integerValue: 0 }
          : null;
      }
      class iP extends iN {}
      class ix extends iN {
        constructor(e) {
          super(), (this.elements = e);
        }
      }
      function iM(e, t) {
        let n = ij(t);
        for (let r of e.elements) n.some((e) => rV(e, r)) || n.push(r);
        return { arrayValue: { values: n } };
      }
      class iU extends iN {
        constructor(e) {
          super(), (this.elements = e);
        }
      }
      function iF(e, t) {
        let n = ij(t);
        for (let r of e.elements) n = n.filter((e) => !rV(e, r));
        return { arrayValue: { values: n } };
      }
      class iV extends iN {
        constructor(e, t) {
          super(), (this.It = e), (this.yt = t);
        }
      }
      function iB(e) {
        return rR(e.integerValue || e.doubleValue);
      }
      function ij(e) {
        return rK(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class iq {
        constructor(e, t) {
          (this.field = e), (this.transform = t);
        }
      }
      class i$ {
        constructor(e, t) {
          (this.version = e), (this.transformResults = t);
        }
      }
      class iz {
        constructor(e, t) {
          (this.updateTime = e), (this.exists = t);
        }
        static none() {
          return new iz();
        }
        static exists(e) {
          return new iz(void 0, e);
        }
        static updateTime(e) {
          return new iz(e);
        }
        get isNone() {
          return void 0 === this.updateTime && void 0 === this.exists;
        }
        isEqual(e) {
          return (
            this.exists === e.exists &&
            (this.updateTime
              ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
              : !e.updateTime)
          );
        }
      }
      function iH(e, t) {
        return void 0 !== e.updateTime
          ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
          : void 0 === e.exists || e.exists === t.isFoundDocument();
      }
      class iK {}
      function iG(e, t) {
        if (!e.hasLocalMutations || (t && 0 === t.fields.length)) return null;
        if (null === t)
          return e.isNoDocument()
            ? new i4(e.key, iz.none())
            : new iY(e.key, e.data, iz.none());
        {
          let n = e.data,
            r = rY.empty(),
            i = new rI(ro.comparator);
          for (let s of t.fields)
            if (!i.has(s)) {
              let a = n.field(s);
              null === a &&
                s.length > 1 &&
                ((s = s.popLast()), (a = n.field(s))),
                null === a ? r.delete(s) : r.set(s, a),
                (i = i.add(s));
            }
          return new iZ(e.key, r, new rk(i.toArray()), iz.none());
        }
      }
      function iW(e, t, n) {
        e instanceof iY
          ? (function (e, t, n) {
              let r = e.value.clone(),
                i = i1(e.fieldTransforms, t, n.transformResults);
              r.setAll(i),
                t
                  .convertToFoundDocument(n.version, r)
                  .setHasCommittedMutations();
            })(e, t, n)
          : e instanceof iZ
          ? (function (e, t, n) {
              if (!iH(e.precondition, t))
                return void t.convertToUnknownDocument(n.version);
              let r = i1(e.fieldTransforms, t, n.transformResults),
                i = t.data;
              i.setAll(i0(e)),
                i.setAll(r),
                t
                  .convertToFoundDocument(n.version, i)
                  .setHasCommittedMutations();
            })(e, t, n)
          : (function (e, t, n) {
              t.convertToNoDocument(n.version).setHasCommittedMutations();
            })(0, t, n);
      }
      function iQ(e, t, n, r) {
        var i, s, a;
        return e instanceof iY
          ? (function (e, t, n, r) {
              if (!iH(e.precondition, t)) return n;
              let i = e.value.clone(),
                s = i2(e.fieldTransforms, r, t);
              return (
                i.setAll(s),
                t.convertToFoundDocument(t.version, i).setHasLocalMutations(),
                null
              );
            })(e, t, n, r)
          : e instanceof iZ
          ? (function (e, t, n, r) {
              if (!iH(e.precondition, t)) return n;
              let i = i2(e.fieldTransforms, r, t),
                s = t.data;
              return (s.setAll(i0(e)),
              s.setAll(i),
              t.convertToFoundDocument(t.version, s).setHasLocalMutations(),
              null === n)
                ? null
                : n
                    .unionWith(e.fieldMask.fields)
                    .unionWith(e.fieldTransforms.map((e) => e.field));
            })(e, t, n, r)
          : iH(e.precondition, t)
          ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null)
          : n;
      }
      function iX(e, t) {
        let n = null;
        for (let r of e.fieldTransforms) {
          let i = t.data.field(r.field),
            s = iL(r.transform, i || null);
          null != s && (null === n && (n = rY.empty()), n.set(r.field, s));
        }
        return n || null;
      }
      function iJ(e, t) {
        var n, r;
        return (
          e.type === t.type &&
          !!e.key.isEqual(t.key) &&
          !!e.precondition.isEqual(t.precondition) &&
          ((n = e.fieldTransforms),
          (r = t.fieldTransforms),
          !!(
            (void 0 === n && void 0 === r) ||
            (!(!n || !r) &&
              rt(n, r, (e, t) => {
                var n, r, i, s;
                return (
                  e.field.isEqual(t.field) &&
                  ((i = e.transform),
                  (s = t.transform),
                  (i instanceof ix && s instanceof ix) ||
                  (i instanceof iU && s instanceof iU)
                    ? rt(i.elements, s.elements, rV)
                    : i instanceof iV && s instanceof iV
                    ? rV(i.yt, s.yt)
                    : i instanceof iP && s instanceof iP)
                );
              }))
          )) &&
          (0 === e.type
            ? e.value.isEqual(t.value)
            : 1 !== e.type ||
              (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
        );
      }
      class iY extends iK {
        constructor(e, t, n, r = []) {
          super(),
            (this.key = e),
            (this.value = t),
            (this.precondition = n),
            (this.fieldTransforms = r),
            (this.type = 0);
        }
        getFieldMask() {
          return null;
        }
      }
      class iZ extends iK {
        constructor(e, t, n, r, i = []) {
          super(),
            (this.key = e),
            (this.data = t),
            (this.fieldMask = n),
            (this.precondition = r),
            (this.fieldTransforms = i),
            (this.type = 1);
        }
        getFieldMask() {
          return this.fieldMask;
        }
      }
      function i0(e) {
        let t = new Map();
        return (
          e.fieldMask.fields.forEach((n) => {
            if (!n.isEmpty()) {
              let r = e.data.field(n);
              t.set(n, r);
            }
          }),
          t
        );
      }
      function i1(e, t, n) {
        var r;
        let i = new Map();
        (r = e.length === n.length) || nX();
        for (let s = 0; s < n.length; s++) {
          let a = e[s],
            o = a.transform,
            l = t.data.field(a.field);
          i.set(a.field, iO(o, l, n[s]));
        }
        return i;
      }
      function i2(e, t, n) {
        let r = new Map();
        for (let i of e) {
          let s = i.transform,
            a = n.data.field(i.field);
          r.set(i.field, iD(s, a, t));
        }
        return r;
      }
      class i4 extends iK {
        constructor(e, t) {
          super(),
            (this.key = e),
            (this.precondition = t),
            (this.type = 2),
            (this.fieldTransforms = []);
        }
        getFieldMask() {
          return null;
        }
      }
      class i3 extends iK {
        constructor(e, t) {
          super(),
            (this.key = e),
            (this.precondition = t),
            (this.type = 3),
            (this.fieldTransforms = []);
        }
        getFieldMask() {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class i6 {
        constructor(e) {
          this.count = e;
        }
      }
      function i9(e) {
        if (void 0 === e) return nG('GRPC error has no .code'), nJ.UNKNOWN;
        switch (e) {
          case u.OK:
            return nJ.OK;
          case u.CANCELLED:
            return nJ.CANCELLED;
          case u.UNKNOWN:
            return nJ.UNKNOWN;
          case u.DEADLINE_EXCEEDED:
            return nJ.DEADLINE_EXCEEDED;
          case u.RESOURCE_EXHAUSTED:
            return nJ.RESOURCE_EXHAUSTED;
          case u.INTERNAL:
            return nJ.INTERNAL;
          case u.UNAVAILABLE:
            return nJ.UNAVAILABLE;
          case u.UNAUTHENTICATED:
            return nJ.UNAUTHENTICATED;
          case u.INVALID_ARGUMENT:
            return nJ.INVALID_ARGUMENT;
          case u.NOT_FOUND:
            return nJ.NOT_FOUND;
          case u.ALREADY_EXISTS:
            return nJ.ALREADY_EXISTS;
          case u.PERMISSION_DENIED:
            return nJ.PERMISSION_DENIED;
          case u.FAILED_PRECONDITION:
            return nJ.FAILED_PRECONDITION;
          case u.ABORTED:
            return nJ.ABORTED;
          case u.OUT_OF_RANGE:
            return nJ.OUT_OF_RANGE;
          case u.UNIMPLEMENTED:
            return nJ.UNIMPLEMENTED;
          case u.DATA_LOSS:
            return nJ.DATA_LOSS;
          default:
            return nX();
        }
      }
      ((h = u || (u = {}))[(h.OK = 0)] = 'OK'),
        (h[(h.CANCELLED = 1)] = 'CANCELLED'),
        (h[(h.UNKNOWN = 2)] = 'UNKNOWN'),
        (h[(h.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
        (h[(h.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
        (h[(h.NOT_FOUND = 5)] = 'NOT_FOUND'),
        (h[(h.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
        (h[(h.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
        (h[(h.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
        (h[(h.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
        (h[(h.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
        (h[(h.ABORTED = 10)] = 'ABORTED'),
        (h[(h.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
        (h[(h.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
        (h[(h.INTERNAL = 13)] = 'INTERNAL'),
        (h[(h.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
        (h[(h.DATA_LOSS = 15)] = 'DATA_LOSS');
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class i5 {
        constructor(e, t) {
          (this.mapKeyFn = e),
            (this.equalsFn = t),
            (this.inner = {}),
            (this.innerSize = 0);
        }
        get(e) {
          let t = this.mapKeyFn(e),
            n = this.inner[t];
          if (void 0 !== n) {
            for (let [r, i] of n) if (this.equalsFn(r, e)) return i;
          }
        }
        has(e) {
          return void 0 !== this.get(e);
        }
        set(e, t) {
          let n = this.mapKeyFn(e),
            r = this.inner[n];
          if (void 0 === r)
            return (this.inner[n] = [[e, t]]), void this.innerSize++;
          for (let i = 0; i < r.length; i++)
            if (this.equalsFn(r[i][0], e)) return void (r[i] = [e, t]);
          r.push([e, t]), this.innerSize++;
        }
        delete(e) {
          let t = this.mapKeyFn(e),
            n = this.inner[t];
          if (void 0 === n) return !1;
          for (let r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], e))
              return (
                1 === n.length ? delete this.inner[t] : n.splice(r, 1),
                this.innerSize--,
                !0
              );
          return !1;
        }
        forEach(e) {
          rv(this.inner, (t, n) => {
            for (let [r, i] of n) e(r, i);
          });
        }
        isEmpty() {
          return rw(this.inner);
        }
        size() {
          return this.innerSize;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let i8 = new r_(rl.comparator),
        i7 = new r_(rl.comparator);
      function se(...e) {
        let t = i7;
        for (let n of e) t = t.insert(n.key, n);
        return t;
      }
      function st(e) {
        let t = i7;
        return e.forEach((e, n) => (t = t.insert(e, n.overlayedDocument))), t;
      }
      function sn() {
        return si();
      }
      function sr() {
        return si();
      }
      function si() {
        return new i5(
          (e) => e.toString(),
          (e, t) => e.isEqual(t)
        );
      }
      let ss = new r_(rl.comparator),
        sa = new rI(rl.comparator);
      function so(...e) {
        let t = sa;
        for (let n of e) t = t.add(n);
        return t;
      }
      let sl = new rI(re);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class su {
        constructor(e, t, n, r, i) {
          (this.snapshotVersion = e),
            (this.targetChanges = t),
            (this.targetMismatches = n),
            (this.documentUpdates = r),
            (this.resolvedLimboDocuments = i);
        }
        static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
          let r = new Map();
          return (
            r.set(e, sh.createSynthesizedTargetChangeForCurrentChange(e, t, n)),
            new su(rr.min(), r, sl, i8, so())
          );
        }
      }
      class sh {
        constructor(e, t, n, r, i) {
          (this.resumeToken = e),
            (this.current = t),
            (this.addedDocuments = n),
            (this.modifiedDocuments = r),
            (this.removedDocuments = i);
        }
        static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
          return new sh(n, t, so(), so(), so());
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sc {
        constructor(e, t, n, r) {
          (this.Tt = e),
            (this.removedTargetIds = t),
            (this.key = n),
            (this.Et = r);
        }
      }
      class sd {
        constructor(e, t) {
          (this.targetId = e), (this.At = t);
        }
      }
      class sf {
        constructor(e, t, n = rS.EMPTY_BYTE_STRING, r = null) {
          (this.state = e),
            (this.targetIds = t),
            (this.resumeToken = n),
            (this.cause = r);
        }
      }
      class sp {
        constructor() {
          (this.Rt = 0),
            (this.bt = sy()),
            (this.Pt = rS.EMPTY_BYTE_STRING),
            (this.vt = !1),
            (this.Vt = !0);
        }
        get current() {
          return this.vt;
        }
        get resumeToken() {
          return this.Pt;
        }
        get St() {
          return 0 !== this.Rt;
        }
        get Dt() {
          return this.Vt;
        }
        Ct(e) {
          e.approximateByteSize() > 0 && ((this.Vt = !0), (this.Pt = e));
        }
        xt() {
          let e = so(),
            t = so(),
            n = so();
          return (
            this.bt.forEach((r, i) => {
              switch (i) {
                case 0:
                  e = e.add(r);
                  break;
                case 2:
                  t = t.add(r);
                  break;
                case 1:
                  n = n.add(r);
                  break;
                default:
                  nX();
              }
            }),
            new sh(this.Pt, this.vt, e, t, n)
          );
        }
        Nt() {
          (this.Vt = !1), (this.bt = sy());
        }
        kt(e, t) {
          (this.Vt = !0), (this.bt = this.bt.insert(e, t));
        }
        Ot(e) {
          (this.Vt = !0), (this.bt = this.bt.remove(e));
        }
        Mt() {
          this.Rt += 1;
        }
        Ft() {
          this.Rt -= 1;
        }
        $t() {
          (this.Vt = !0), (this.vt = !0);
        }
      }
      class sm {
        constructor(e) {
          (this.Bt = e),
            (this.Lt = new Map()),
            (this.Ut = i8),
            (this.qt = sg()),
            (this.Kt = new rI(re));
        }
        Gt(e) {
          for (let t of e.Tt)
            e.Et && e.Et.isFoundDocument()
              ? this.Qt(t, e.Et)
              : this.jt(t, e.key, e.Et);
          for (let n of e.removedTargetIds) this.jt(n, e.key, e.Et);
        }
        Wt(e) {
          this.forEachTarget(e, (t) => {
            let n = this.zt(t);
            switch (e.state) {
              case 0:
                this.Ht(t) && n.Ct(e.resumeToken);
                break;
              case 1:
                n.Ft(), n.St || n.Nt(), n.Ct(e.resumeToken);
                break;
              case 2:
                n.Ft(), n.St || this.removeTarget(t);
                break;
              case 3:
                this.Ht(t) && (n.$t(), n.Ct(e.resumeToken));
                break;
              case 4:
                this.Ht(t) && (this.Jt(t), n.Ct(e.resumeToken));
                break;
              default:
                nX();
            }
          });
        }
        forEachTarget(e, t) {
          e.targetIds.length > 0
            ? e.targetIds.forEach(t)
            : this.Lt.forEach((e, n) => {
                this.Ht(n) && t(n);
              });
        }
        Yt(e) {
          let t = e.targetId,
            n = e.At.count,
            r = this.Xt(t);
          if (r) {
            let i = r.target;
            if (r6(i)) {
              if (0 === n) {
                let s = new rl(i.path);
                this.jt(t, s, r0.newNoDocument(s, rr.min()));
              } else {
                var a;
                (a = 1 === n) || nX();
              }
            } else this.Zt(t) !== n && (this.Jt(t), (this.Kt = this.Kt.add(t)));
          }
        }
        te(e) {
          let t = new Map();
          this.Lt.forEach((n, r) => {
            let i = this.Xt(r);
            if (i) {
              if (n.current && r6(i.target)) {
                let s = new rl(i.target.path);
                null !== this.Ut.get(s) ||
                  this.ee(r, s) ||
                  this.jt(r, s, r0.newNoDocument(s, e));
              }
              n.Dt && (t.set(r, n.xt()), n.Nt());
            }
          });
          let n = so();
          this.qt.forEach((e, t) => {
            let r = !0;
            t.forEachWhile((e) => {
              let t = this.Xt(e);
              return !t || 2 === t.purpose || ((r = !1), !1);
            }),
              r && (n = n.add(e));
          }),
            this.Ut.forEach((t, n) => n.setReadTime(e));
          let r = new su(e, t, this.Kt, this.Ut, n);
          return (this.Ut = i8), (this.qt = sg()), (this.Kt = new rI(re)), r;
        }
        Qt(e, t) {
          if (!this.Ht(e)) return;
          let n = this.ee(e, t.key) ? 2 : 0;
          this.zt(e).kt(t.key, n),
            (this.Ut = this.Ut.insert(t.key, t)),
            (this.qt = this.qt.insert(t.key, this.ne(t.key).add(e)));
        }
        jt(e, t, n) {
          if (!this.Ht(e)) return;
          let r = this.zt(e);
          this.ee(e, t) ? r.kt(t, 1) : r.Ot(t),
            (this.qt = this.qt.insert(t, this.ne(t).delete(e))),
            n && (this.Ut = this.Ut.insert(t, n));
        }
        removeTarget(e) {
          this.Lt.delete(e);
        }
        Zt(e) {
          let t = this.zt(e).xt();
          return (
            this.Bt.getRemoteKeysForTarget(e).size +
            t.addedDocuments.size -
            t.removedDocuments.size
          );
        }
        Mt(e) {
          this.zt(e).Mt();
        }
        zt(e) {
          let t = this.Lt.get(e);
          return t || ((t = new sp()), this.Lt.set(e, t)), t;
        }
        ne(e) {
          let t = this.qt.get(e);
          return t || ((t = new rI(re)), (this.qt = this.qt.insert(e, t))), t;
        }
        Ht(e) {
          let t = null !== this.Xt(e);
          return (
            t || nK('WatchChangeAggregator', 'Detected inactive target', e), t
          );
        }
        Xt(e) {
          let t = this.Lt.get(e);
          return t && t.St ? null : this.Bt.se(e);
        }
        Jt(e) {
          this.Lt.set(e, new sp()),
            this.Bt.getRemoteKeysForTarget(e).forEach((t) => {
              this.jt(e, t, null);
            });
        }
        ee(e, t) {
          return this.Bt.getRemoteKeysForTarget(e).has(t);
        }
      }
      function sg() {
        return new r_(rl.comparator);
      }
      function sy() {
        return new r_(rl.comparator);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let sv = { asc: 'ASCENDING', desc: 'DESCENDING' },
        sw = {
          '<': 'LESS_THAN',
          '<=': 'LESS_THAN_OR_EQUAL',
          '>': 'GREATER_THAN',
          '>=': 'GREATER_THAN_OR_EQUAL',
          '==': 'EQUAL',
          '!=': 'NOT_EQUAL',
          'array-contains': 'ARRAY_CONTAINS',
          in: 'IN',
          'not-in': 'NOT_IN',
          'array-contains-any': 'ARRAY_CONTAINS_ANY'
        };
      class s_ {
        constructor(e, t) {
          (this.databaseId = e), (this.gt = t);
        }
      }
      function sb(e, t) {
        return e.gt
          ? `${new Date(1e3 * t.seconds)
              .toISOString()
              .replace(/\.\d*/, '')
              .replace('Z', '')}.${('000000000' + t.nanoseconds).slice(-9)}Z`
          : { seconds: '' + t.seconds, nanos: t.nanoseconds };
      }
      function sT(e, t) {
        return e.gt ? t.toBase64() : t.toUint8Array();
      }
      function sI(e) {
        return (
          !e && nX(),
          rr.fromTimestamp(
            (function (e) {
              let t = rA(e);
              return new rn(t.seconds, t.nanos);
            })(e)
          )
        );
      }
      function sE(e, t) {
        var n;
        return new rs(['projects', e.projectId, 'databases', e.database])
          .child('documents')
          .child(t)
          .canonicalString();
      }
      function sk(e) {
        var t;
        let n = rs.fromString(e);
        return sx(n) || nX(), n;
      }
      function sS(e, t) {
        return sE(e.databaseId, t.path);
      }
      function sC(e, t) {
        let n = sk(t);
        if (n.get(1) !== e.databaseId.projectId)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            'Tried to deserialize key from different project: ' +
              n.get(1) +
              ' vs ' +
              e.databaseId.projectId
          );
        if (n.get(3) !== e.databaseId.database)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            'Tried to deserialize key from different database: ' +
              n.get(3) +
              ' vs ' +
              e.databaseId.database
          );
        return new rl(sN(n));
      }
      function sA(e, t) {
        return sE(e.databaseId, t);
      }
      function sR(e) {
        return new rs([
          'projects',
          e.databaseId.projectId,
          'databases',
          e.databaseId.database
        ]).canonicalString();
      }
      function sN(e) {
        var t;
        return (
          (e.length > 4 && 'documents' === e.get(4)) || nX(), e.popFirst(5)
        );
      }
      function sD(e, t, n) {
        return { name: sS(e, t), fields: n.value.mapValue.fields };
      }
      function sO(e, t) {
        var n, r, i, s;
        let a = { structuredQuery: {} },
          o = t.path;
        null !== t.collectionGroup
          ? ((a.parent = sA(e, o)),
            (a.structuredQuery.from = [
              { collectionId: t.collectionGroup, allDescendants: !0 }
            ]))
          : ((a.parent = sA(e, o.popLast())),
            (a.structuredQuery.from = [{ collectionId: o.lastSegment() }]));
        let l = (function (e) {
          if (0 === e.length) return;
          let t = e.map((e) =>
            (function (e) {
              var t;
              if ('==' === e.op) {
                if (rW(e.value))
                  return { unaryFilter: { field: sL(e.field), op: 'IS_NAN' } };
                if (rG(e.value))
                  return { unaryFilter: { field: sL(e.field), op: 'IS_NULL' } };
              } else if ('!=' === e.op) {
                if (rW(e.value))
                  return {
                    unaryFilter: { field: sL(e.field), op: 'IS_NOT_NAN' }
                  };
                if (rG(e.value))
                  return {
                    unaryFilter: { field: sL(e.field), op: 'IS_NOT_NULL' }
                  };
              }
              return {
                fieldFilter: {
                  field: sL(e.field),
                  op: ((t = e.op), sw[t]),
                  value: e.value
                }
              };
            })(e)
          );
          return 1 === t.length
            ? t[0]
            : { compositeFilter: { op: 'AND', filters: t } };
        })(t.filters);
        l && (a.structuredQuery.where = l);
        let u = (function (e) {
          if (0 !== e.length)
            return e.map((e) => {
              var t, n;
              return { field: sL(e.field), direction: ((n = e.dir), sv[n]) };
            });
        })(t.orderBy);
        u && (a.structuredQuery.orderBy = u);
        let h = ((i = t.limit), e.gt || rx(i) ? i : { value: i });
        return (
          null !== h && (a.structuredQuery.limit = h),
          t.startAt &&
            (a.structuredQuery.startAt = {
              before: (n = t.startAt).inclusive,
              values: n.position
            }),
          t.endAt &&
            (a.structuredQuery.endAt = {
              before: !(s = t.endAt).inclusive,
              values: s.position
            }),
          a
        );
      }
      function sL(e) {
        return { fieldPath: e.canonicalString() };
      }
      function sP(e) {
        return ro.fromServerFormat(e.fieldPath);
      }
      function sx(e) {
        return (
          e.length >= 4 && 'projects' === e.get(0) && 'databases' === e.get(2)
        );
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sM {
        constructor(e, t, n, r) {
          (this.batchId = e),
            (this.localWriteTime = t),
            (this.baseMutations = n),
            (this.mutations = r);
        }
        applyToRemoteDocument(e, t) {
          let n = t.mutationResults;
          for (let r = 0; r < this.mutations.length; r++) {
            let i = this.mutations[r];
            i.key.isEqual(e.key) && iW(i, e, n[r]);
          }
        }
        applyToLocalView(e, t) {
          for (let n of this.baseMutations)
            n.key.isEqual(e.key) && (t = iQ(n, e, t, this.localWriteTime));
          for (let r of this.mutations)
            r.key.isEqual(e.key) && (t = iQ(r, e, t, this.localWriteTime));
          return t;
        }
        applyToLocalDocumentSet(e, t) {
          let n = sr();
          return (
            this.mutations.forEach((r) => {
              let i = e.get(r.key),
                s = i.overlayedDocument,
                a = this.applyToLocalView(s, i.mutatedFields);
              a = t.has(r.key) ? null : a;
              let o = iG(s, a);
              null !== o && n.set(r.key, o),
                s.isValidDocument() || s.convertToNoDocument(rr.min());
            }),
            n
          );
        }
        keys() {
          return this.mutations.reduce((e, t) => e.add(t.key), so());
        }
        isEqual(e) {
          return (
            this.batchId === e.batchId &&
            rt(this.mutations, e.mutations, (e, t) => iJ(e, t)) &&
            rt(this.baseMutations, e.baseMutations, (e, t) => iJ(e, t))
          );
        }
      }
      class sU {
        constructor(e, t, n, r) {
          (this.batch = e),
            (this.commitVersion = t),
            (this.mutationResults = n),
            (this.docVersions = r);
        }
        static from(e, t, n) {
          var r;
          (r = e.mutations.length === n.length) || nX();
          let i = ss,
            s = e.mutations;
          for (let a = 0; a < s.length; a++)
            i = i.insert(s[a].key, n[a].version);
          return new sU(e, t, n, i);
        }
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sF {
        constructor(e, t) {
          (this.largestBatchId = e), (this.mutation = t);
        }
        getKey() {
          return this.mutation.key;
        }
        isEqual(e) {
          return null !== e && this.mutation === e.mutation;
        }
        toString() {
          return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sV {
        constructor(
          e,
          t,
          n,
          r,
          i = rr.min(),
          s = rr.min(),
          a = rS.EMPTY_BYTE_STRING
        ) {
          (this.target = e),
            (this.targetId = t),
            (this.purpose = n),
            (this.sequenceNumber = r),
            (this.snapshotVersion = i),
            (this.lastLimboFreeSnapshotVersion = s),
            (this.resumeToken = a);
        }
        withSequenceNumber(e) {
          return new sV(
            this.target,
            this.targetId,
            this.purpose,
            e,
            this.snapshotVersion,
            this.lastLimboFreeSnapshotVersion,
            this.resumeToken
          );
        }
        withResumeToken(e, t) {
          return new sV(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            t,
            this.lastLimboFreeSnapshotVersion,
            e
          );
        }
        withLastLimboFreeSnapshotVersion(e) {
          return new sV(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            this.snapshotVersion,
            e,
            this.resumeToken
          );
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sB {
        constructor(e) {
          this.re = e;
        }
      }
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sj {
        constructor() {}
        ce(e, t) {
          this.ae(e, t), t.he();
        }
        ae(e, t) {
          if ('nullValue' in e) this.le(t, 5);
          else if ('booleanValue' in e)
            this.le(t, 10), t.fe(e.booleanValue ? 1 : 0);
          else if ('integerValue' in e)
            this.le(t, 15), t.fe(rR(e.integerValue));
          else if ('doubleValue' in e) {
            let n = rR(e.doubleValue);
            isNaN(n)
              ? this.le(t, 13)
              : (this.le(t, 15), rM(n) ? t.fe(0) : t.fe(n));
          } else if ('timestampValue' in e) {
            let r = e.timestampValue;
            this.le(t, 20),
              'string' == typeof r
                ? t.de(r)
                : (t.de(`${r.seconds || ''}`), t.fe(r.nanos || 0));
          } else if ('stringValue' in e) this._e(e.stringValue, t), this.we(t);
          else if ('bytesValue' in e)
            this.le(t, 30), t.me(rN(e.bytesValue)), this.we(t);
          else if ('referenceValue' in e) this.ge(e.referenceValue, t);
          else if ('geoPointValue' in e) {
            let i = e.geoPointValue;
            this.le(t, 45), t.fe(i.latitude || 0), t.fe(i.longitude || 0);
          } else
            'mapValue' in e
              ? rJ(e)
                ? this.le(t, Number.MAX_SAFE_INTEGER)
                : (this.ye(e.mapValue, t), this.we(t))
              : 'arrayValue' in e
              ? (this.pe(e.arrayValue, t), this.we(t))
              : nX();
        }
        _e(e, t) {
          this.le(t, 25), this.Ie(e, t);
        }
        Ie(e, t) {
          t.de(e);
        }
        ye(e, t) {
          let n = e.fields || {};
          for (let r of (this.le(t, 55), Object.keys(n)))
            this._e(r, t), this.ae(n[r], t);
        }
        pe(e, t) {
          let n = e.values || [];
          for (let r of (this.le(t, 50), n)) this.ae(r, t);
        }
        ge(e, t) {
          this.le(t, 37),
            rl.fromName(e).path.forEach((e) => {
              this.le(t, 60), this.Ie(e, t);
            });
        }
        le(e, t) {
          e.fe(t);
        }
        we(e) {
          e.fe(2);
        }
      }
      sj.Te = new sj();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sq {
        constructor() {
          this.Ye = new s$();
        }
        addToCollectionParentIndex(e, t) {
          return this.Ye.add(t), rp.resolve();
        }
        getCollectionParents(e, t) {
          return rp.resolve(this.Ye.getEntries(t));
        }
        addFieldIndex(e, t) {
          return rp.resolve();
        }
        deleteFieldIndex(e, t) {
          return rp.resolve();
        }
        getDocumentsMatchingTarget(e, t) {
          return rp.resolve(null);
        }
        getIndexType(e, t) {
          return rp.resolve(0);
        }
        getFieldIndexes(e, t) {
          return rp.resolve([]);
        }
        getNextCollectionGroupToUpdate(e) {
          return rp.resolve(null);
        }
        getMinOffset(e, t) {
          return rp.resolve(rh.min());
        }
        getMinOffsetFromCollectionGroup(e, t) {
          return rp.resolve(rh.min());
        }
        updateCollectionGroup(e, t, n) {
          return rp.resolve();
        }
        updateIndexEntries(e, t) {
          return rp.resolve();
        }
      }
      class s$ {
        constructor() {
          this.index = {};
        }
        add(e) {
          let t = e.lastSegment(),
            n = e.popLast(),
            r = this.index[t] || new rI(rs.comparator),
            i = !r.has(n);
          return (this.index[t] = r.add(n)), i;
        }
        has(e) {
          let t = e.lastSegment(),
            n = e.popLast(),
            r = this.index[t];
          return r && r.has(n);
        }
        getEntries(e) {
          return (this.index[e] || new rI(rs.comparator)).toArray();
        }
      }
      new Uint8Array(0);
      class sz {
        constructor(e, t, n) {
          (this.cacheSizeCollectionThreshold = e),
            (this.percentileToCollect = t),
            (this.maximumSequenceNumbersToCollect = n);
        }
        static withCacheSize(e) {
          return new sz(
            e,
            sz.DEFAULT_COLLECTION_PERCENTILE,
            sz.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
          );
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ (sz.DEFAULT_COLLECTION_PERCENTILE = 10),
        (sz.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
        (sz.DEFAULT = new sz(
          41943040,
          sz.DEFAULT_COLLECTION_PERCENTILE,
          sz.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
        )),
        (sz.DISABLED = new sz(-1, 0, 0));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sH {
        constructor(e) {
          this.bn = e;
        }
        next() {
          return (this.bn += 2), this.bn;
        }
        static Pn() {
          return new sH(0);
        }
        static vn() {
          return new sH(-1);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sK {
        constructor() {
          (this.changes = new i5(
            (e) => e.toString(),
            (e, t) => e.isEqual(t)
          )),
            (this.changesApplied = !1);
        }
        addEntry(e) {
          this.assertNotApplied(), this.changes.set(e.key, e);
        }
        removeEntry(e, t) {
          this.assertNotApplied(),
            this.changes.set(e, r0.newInvalidDocument(e).setReadTime(t));
        }
        getEntry(e, t) {
          this.assertNotApplied();
          let n = this.changes.get(t);
          return void 0 !== n ? rp.resolve(n) : this.getFromCache(e, t);
        }
        getEntries(e, t) {
          return this.getAllFromCache(e, t);
        }
        apply(e) {
          return (
            this.assertNotApplied(),
            (this.changesApplied = !0),
            this.applyChanges(e)
          );
        }
        assertNotApplied() {}
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sG {
        constructor(e, t) {
          (this.overlayedDocument = e), (this.mutatedFields = t);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sW {
        constructor(e, t, n, r) {
          (this.remoteDocumentCache = e),
            (this.mutationQueue = t),
            (this.documentOverlayCache = n),
            (this.indexManager = r);
        }
        getDocument(e, t) {
          let n = null;
          return this.documentOverlayCache
            .getOverlay(e, t)
            .next((r) => ((n = r), this.getBaseDocument(e, t, n)))
            .next(
              (e) => (null !== n && iQ(n.mutation, e, rk.empty(), rn.now()), e)
            );
        }
        getDocuments(e, t) {
          return this.remoteDocumentCache
            .getEntries(e, t)
            .next((t) =>
              this.getLocalViewOfDocuments(e, t, so()).next(() => t)
            );
        }
        getLocalViewOfDocuments(e, t, n = so()) {
          let r = sn();
          return this.populateOverlays(e, r, t).next(() =>
            this.computeViews(e, t, r, n).next((e) => {
              let t = se();
              return (
                e.forEach((e, n) => {
                  t = t.insert(e, n.overlayedDocument);
                }),
                t
              );
            })
          );
        }
        getOverlayedDocuments(e, t) {
          let n = sn();
          return this.populateOverlays(e, n, t).next(() =>
            this.computeViews(e, t, n, so())
          );
        }
        populateOverlays(e, t, n) {
          let r = [];
          return (
            n.forEach((e) => {
              t.has(e) || r.push(e);
            }),
            this.documentOverlayCache.getOverlays(e, r).next((e) => {
              e.forEach((e, n) => {
                t.set(e, n);
              });
            })
          );
        }
        computeViews(e, t, n, r) {
          let i = i8,
            s = si(),
            a = si();
          return (
            t.forEach((e, t) => {
              let a = n.get(t.key);
              r.has(t.key) && (void 0 === a || a.mutation instanceof iZ)
                ? (i = i.insert(t.key, t))
                : void 0 !== a &&
                  (s.set(t.key, a.mutation.getFieldMask()),
                  iQ(a.mutation, t, a.mutation.getFieldMask(), rn.now()));
            }),
            this.recalculateAndSaveOverlays(e, i).next(
              (e) => (
                e.forEach((e, t) => s.set(e, t)),
                t.forEach((e, t) => {
                  var n;
                  return a.set(
                    e,
                    new sG(
                      t,
                      null !== (n = s.get(e)) && void 0 !== n ? n : null
                    )
                  );
                }),
                a
              )
            )
          );
        }
        recalculateAndSaveOverlays(e, t) {
          let n = si(),
            r = new r_((e, t) => e - t),
            i = so();
          return this.mutationQueue
            .getAllMutationBatchesAffectingDocumentKeys(e, t)
            .next((e) => {
              for (let i of e)
                i.keys().forEach((e) => {
                  let s = t.get(e);
                  if (null === s) return;
                  let a = n.get(e) || rk.empty();
                  (a = i.applyToLocalView(s, a)), n.set(e, a);
                  let o = (r.get(i.batchId) || so()).add(e);
                  r = r.insert(i.batchId, o);
                });
            })
            .next(() => {
              let s = [],
                a = r.getReverseIterator();
              for (; a.hasNext(); ) {
                let o = a.getNext(),
                  l = o.key,
                  u = o.value,
                  h = sr();
                u.forEach((e) => {
                  if (!i.has(e)) {
                    let r = iG(t.get(e), n.get(e));
                    null !== r && h.set(e, r), (i = i.add(e));
                  }
                }),
                  s.push(this.documentOverlayCache.saveOverlays(e, l, h));
              }
              return rp.waitFor(s);
            })
            .next(() => n);
        }
        recalculateAndSaveOverlaysForDocumentKeys(e, t) {
          return this.remoteDocumentCache
            .getEntries(e, t)
            .next((t) => this.recalculateAndSaveOverlays(e, t));
        }
        getDocumentsMatchingQuery(e, t, n) {
          var r;
          return rl.isDocumentKey(t.path) &&
            null === t.collectionGroup &&
            0 === t.filters.length
            ? this.getDocumentsMatchingDocumentQuery(e, t.path)
            : iy(t)
            ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n)
            : this.getDocumentsMatchingCollectionQuery(e, t, n);
        }
        getNextDocuments(e, t, n, r) {
          return this.remoteDocumentCache
            .getAllFromCollectionGroup(e, t, n, r)
            .next((i) => {
              let s =
                  r - i.size > 0
                    ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                        e,
                        t,
                        n.largestBatchId,
                        r - i.size
                      )
                    : rp.resolve(sn()),
                a = -1,
                o = i;
              return s.next((t) =>
                rp
                  .forEach(
                    t,
                    (t, n) => (
                      a < n.largestBatchId && (a = n.largestBatchId),
                      i.get(t)
                        ? rp.resolve()
                        : this.getBaseDocument(e, t, n).next((e) => {
                            o = o.insert(t, e);
                          })
                    )
                  )
                  .next(() => this.populateOverlays(e, t, i))
                  .next(() => this.computeViews(e, o, t, so()))
                  .next((e) => ({ batchId: a, changes: st(e) }))
              );
            });
        }
        getDocumentsMatchingDocumentQuery(e, t) {
          return this.getDocument(e, new rl(t)).next((e) => {
            let t = se();
            return e.isFoundDocument() && (t = t.insert(e.key, e)), t;
          });
        }
        getDocumentsMatchingCollectionGroupQuery(e, t, n) {
          let r = t.collectionGroup,
            i = se();
          return this.indexManager.getCollectionParents(e, r).next((s) =>
            rp
              .forEach(s, (s) => {
                var a, o;
                let l =
                  ((o = s.child(r)),
                  new ic(
                    o,
                    null,
                    t.explicitOrderBy.slice(),
                    t.filters.slice(),
                    t.limit,
                    t.limitType,
                    t.startAt,
                    t.endAt
                  ));
                return this.getDocumentsMatchingCollectionQuery(e, l, n).next(
                  (e) => {
                    e.forEach((e, t) => {
                      i = i.insert(e, t);
                    });
                  }
                );
              })
              .next(() => i)
          );
        }
        getDocumentsMatchingCollectionQuery(e, t, n) {
          let r;
          return this.remoteDocumentCache
            .getAllFromCollection(e, t.path, n)
            .next(
              (i) => (
                (r = i),
                this.documentOverlayCache.getOverlaysForCollection(
                  e,
                  t.path,
                  n.largestBatchId
                )
              )
            )
            .next((e) => {
              e.forEach((e, t) => {
                let n = t.getKey();
                null === r.get(n) &&
                  (r = r.insert(n, r0.newInvalidDocument(n)));
              });
              let n = se();
              return (
                r.forEach((r, i) => {
                  let s = e.get(r);
                  void 0 !== s && iQ(s.mutation, i, rk.empty(), rn.now()),
                    iE(t, i) && (n = n.insert(r, i));
                }),
                n
              );
            });
        }
        getBaseDocument(e, t, n) {
          return null === n || 1 === n.mutation.type
            ? this.remoteDocumentCache.getEntry(e, t)
            : rp.resolve(r0.newInvalidDocument(t));
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sQ {
        constructor(e) {
          (this.It = e), (this.Zn = new Map()), (this.ts = new Map());
        }
        getBundleMetadata(e, t) {
          return rp.resolve(this.Zn.get(t));
        }
        saveBundleMetadata(e, t) {
          return (
            this.Zn.set(t.id, {
              id: t.id,
              version: t.version,
              createTime: sI(t.createTime)
            }),
            rp.resolve()
          );
        }
        getNamedQuery(e, t) {
          return rp.resolve(this.ts.get(t));
        }
        saveNamedQuery(e, t) {
          var n;
          return (
            this.ts.set(t.name, {
              name: t.name,
              query: (function (e) {
                let t = (function (e) {
                  var t, n, r, i, s, a, o, l, u;
                  let h = (function (e) {
                      let t = sk(e);
                      return 4 === t.length ? rs.emptyPath() : sN(t);
                    })(e.parent),
                    c = e.structuredQuery,
                    d = c.from ? c.from.length : 0,
                    f = null;
                  if (d > 0) {
                    (t = 1 === d) || nX();
                    let p = c.from[0];
                    p.allDescendants
                      ? (f = p.collectionId)
                      : (h = h.child(p.collectionId));
                  }
                  let m = [];
                  c.where &&
                    (m = (function e(t) {
                      var n;
                      return t
                        ? void 0 !== t.unaryFilter
                          ? [
                              (function (e) {
                                switch (e.unaryFilter.op) {
                                  case 'IS_NAN':
                                    let t = sP(e.unaryFilter.field);
                                    return r9.create(t, '==', {
                                      doubleValue: NaN
                                    });
                                  case 'IS_NULL':
                                    let n = sP(e.unaryFilter.field);
                                    return r9.create(n, '==', {
                                      nullValue: 'NULL_VALUE'
                                    });
                                  case 'IS_NOT_NAN':
                                    let r = sP(e.unaryFilter.field);
                                    return r9.create(r, '!=', {
                                      doubleValue: NaN
                                    });
                                  case 'IS_NOT_NULL':
                                    let i = sP(e.unaryFilter.field);
                                    return r9.create(i, '!=', {
                                      nullValue: 'NULL_VALUE'
                                    });
                                  default:
                                    return nX();
                                }
                              })(t)
                            ]
                          : void 0 !== t.fieldFilter
                          ? [
                              ((n = t),
                              r9.create(
                                sP(n.fieldFilter.field),
                                (function (e) {
                                  switch (e) {
                                    case 'EQUAL':
                                      return '==';
                                    case 'NOT_EQUAL':
                                      return '!=';
                                    case 'GREATER_THAN':
                                      return '>';
                                    case 'GREATER_THAN_OR_EQUAL':
                                      return '>=';
                                    case 'LESS_THAN':
                                      return '<';
                                    case 'LESS_THAN_OR_EQUAL':
                                      return '<=';
                                    case 'ARRAY_CONTAINS':
                                      return 'array-contains';
                                    case 'IN':
                                      return 'in';
                                    case 'NOT_IN':
                                      return 'not-in';
                                    case 'ARRAY_CONTAINS_ANY':
                                      return 'array-contains-any';
                                    default:
                                      return nX();
                                  }
                                })(n.fieldFilter.op),
                                n.fieldFilter.value
                              ))
                            ]
                          : void 0 !== t.compositeFilter
                          ? t.compositeFilter.filters
                              .map((t) => e(t))
                              .reduce((e, t) => e.concat(t))
                          : nX()
                        : [];
                    })(c.where));
                  let g = [];
                  c.orderBy &&
                    (g = c.orderBy.map((e) => {
                      var t;
                      return new io(
                        sP(e.field),
                        (function (e) {
                          switch (e) {
                            case 'ASCENDING':
                              return 'asc';
                            case 'DESCENDING':
                              return 'desc';
                            default:
                              return;
                          }
                        })(e.direction)
                      );
                    }));
                  let y = null,
                    v;
                  c.limit &&
                    (y = rx(
                      (v = 'object' == typeof (n = c.limit) ? n.value : n)
                    )
                      ? null
                      : v);
                  let w = null;
                  c.startAt &&
                    (w = (function (e) {
                      let t = !!e.before,
                        n = e.values || [];
                      return new ia(n, t);
                    })(c.startAt));
                  let _ = null;
                  return (
                    c.endAt &&
                      (_ = (function (e) {
                        let t = !e.before,
                          n = e.values || [];
                        return new ia(n, t);
                      })(c.endAt)),
                    (r = h),
                    (i = f),
                    (s = g),
                    (a = m),
                    (o = y),
                    (l = w),
                    (u = _),
                    new ic(r, i, s, a, o, 'F', l, u)
                  );
                })({ parent: e.parent, structuredQuery: e.structuredQuery });
                return 'LAST' === e.limitType ? i_(t, t.limit, 'L') : t;
              })(t.bundledQuery),
              readTime: sI(t.readTime)
            }),
            rp.resolve()
          );
        }
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sX {
        constructor() {
          (this.overlays = new r_(rl.comparator)), (this.es = new Map());
        }
        getOverlay(e, t) {
          return rp.resolve(this.overlays.get(t));
        }
        getOverlays(e, t) {
          let n = sn();
          return rp
            .forEach(t, (t) =>
              this.getOverlay(e, t).next((e) => {
                null !== e && n.set(t, e);
              })
            )
            .next(() => n);
        }
        saveOverlays(e, t, n) {
          return (
            n.forEach((n, r) => {
              this.ue(e, t, r);
            }),
            rp.resolve()
          );
        }
        removeOverlaysForBatchId(e, t, n) {
          let r = this.es.get(n);
          return (
            void 0 !== r &&
              (r.forEach((e) => (this.overlays = this.overlays.remove(e))),
              this.es.delete(n)),
            rp.resolve()
          );
        }
        getOverlaysForCollection(e, t, n) {
          let r = sn(),
            i = t.length + 1,
            s = new rl(t.child('')),
            a = this.overlays.getIteratorFrom(s);
          for (; a.hasNext(); ) {
            let o = a.getNext().value,
              l = o.getKey();
            if (!t.isPrefixOf(l.path)) break;
            l.path.length === i && o.largestBatchId > n && r.set(o.getKey(), o);
          }
          return rp.resolve(r);
        }
        getOverlaysForCollectionGroup(e, t, n, r) {
          let i = new r_((e, t) => e - t),
            s = this.overlays.getIterator();
          for (; s.hasNext(); ) {
            let a = s.getNext().value;
            if (a.getKey().getCollectionGroup() === t && a.largestBatchId > n) {
              let o = i.get(a.largestBatchId);
              null === o && ((o = sn()), (i = i.insert(a.largestBatchId, o))),
                o.set(a.getKey(), a);
            }
          }
          let l = sn(),
            u = i.getIterator();
          for (
            ;
            u.hasNext() &&
            (u.getNext().value.forEach((e, t) => l.set(e, t)),
            !(l.size() >= r));

          );
          return rp.resolve(l);
        }
        ue(e, t, n) {
          let r = this.overlays.get(n.key);
          if (null !== r) {
            let i = this.es.get(r.largestBatchId).delete(n.key);
            this.es.set(r.largestBatchId, i);
          }
          this.overlays = this.overlays.insert(n.key, new sF(t, n));
          let s = this.es.get(t);
          void 0 === s && ((s = so()), this.es.set(t, s)),
            this.es.set(t, s.add(n.key));
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sJ {
        constructor() {
          (this.ns = new rI(sY.ss)), (this.rs = new rI(sY.os));
        }
        isEmpty() {
          return this.ns.isEmpty();
        }
        addReference(e, t) {
          let n = new sY(e, t);
          (this.ns = this.ns.add(n)), (this.rs = this.rs.add(n));
        }
        us(e, t) {
          e.forEach((e) => this.addReference(e, t));
        }
        removeReference(e, t) {
          this.cs(new sY(e, t));
        }
        hs(e, t) {
          e.forEach((e) => this.removeReference(e, t));
        }
        ls(e) {
          let t = new rl(new rs([])),
            n = new sY(t, e),
            r = new sY(t, e + 1),
            i = [];
          return (
            this.rs.forEachInRange([n, r], (e) => {
              this.cs(e), i.push(e.key);
            }),
            i
          );
        }
        fs() {
          this.ns.forEach((e) => this.cs(e));
        }
        cs(e) {
          (this.ns = this.ns.delete(e)), (this.rs = this.rs.delete(e));
        }
        ds(e) {
          let t = new rl(new rs([])),
            n = new sY(t, e),
            r = new sY(t, e + 1),
            i = so();
          return (
            this.rs.forEachInRange([n, r], (e) => {
              i = i.add(e.key);
            }),
            i
          );
        }
        containsKey(e) {
          let t = new sY(e, 0),
            n = this.ns.firstAfterOrEqual(t);
          return null !== n && e.isEqual(n.key);
        }
      }
      class sY {
        constructor(e, t) {
          (this.key = e), (this._s = t);
        }
        static ss(e, t) {
          return rl.comparator(e.key, t.key) || re(e._s, t._s);
        }
        static os(e, t) {
          return re(e._s, t._s) || rl.comparator(e.key, t.key);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class sZ {
        constructor(e, t) {
          (this.indexManager = e),
            (this.referenceDelegate = t),
            (this.mutationQueue = []),
            (this.ws = 1),
            (this.gs = new rI(sY.ss));
        }
        checkEmpty(e) {
          return rp.resolve(0 === this.mutationQueue.length);
        }
        addMutationBatch(e, t, n, r) {
          let i = this.ws;
          this.ws++,
            this.mutationQueue.length > 0 &&
              this.mutationQueue[this.mutationQueue.length - 1];
          let s = new sM(i, t, n, r);
          for (let a of (this.mutationQueue.push(s), r))
            (this.gs = this.gs.add(new sY(a.key, i))),
              this.indexManager.addToCollectionParentIndex(
                e,
                a.key.path.popLast()
              );
          return rp.resolve(s);
        }
        lookupMutationBatch(e, t) {
          return rp.resolve(this.ys(t));
        }
        getNextMutationBatchAfterBatchId(e, t) {
          let n = this.ps(t + 1),
            r = n < 0 ? 0 : n;
          return rp.resolve(
            this.mutationQueue.length > r ? this.mutationQueue[r] : null
          );
        }
        getHighestUnacknowledgedBatchId() {
          return rp.resolve(0 === this.mutationQueue.length ? -1 : this.ws - 1);
        }
        getAllMutationBatches(e) {
          return rp.resolve(this.mutationQueue.slice());
        }
        getAllMutationBatchesAffectingDocumentKey(e, t) {
          let n = new sY(t, 0),
            r = new sY(t, Number.POSITIVE_INFINITY),
            i = [];
          return (
            this.gs.forEachInRange([n, r], (e) => {
              let t = this.ys(e._s);
              i.push(t);
            }),
            rp.resolve(i)
          );
        }
        getAllMutationBatchesAffectingDocumentKeys(e, t) {
          let n = new rI(re);
          return (
            t.forEach((e) => {
              let t = new sY(e, 0),
                r = new sY(e, Number.POSITIVE_INFINITY);
              this.gs.forEachInRange([t, r], (e) => {
                n = n.add(e._s);
              });
            }),
            rp.resolve(this.Is(n))
          );
        }
        getAllMutationBatchesAffectingQuery(e, t) {
          let n = t.path,
            r = n.length + 1,
            i = n;
          rl.isDocumentKey(i) || (i = i.child(''));
          let s = new sY(new rl(i), 0),
            a = new rI(re);
          return (
            this.gs.forEachWhile((e) => {
              let t = e.key.path;
              return (
                !!n.isPrefixOf(t) && (t.length === r && (a = a.add(e._s)), !0)
              );
            }, s),
            rp.resolve(this.Is(a))
          );
        }
        Is(e) {
          let t = [];
          return (
            e.forEach((e) => {
              let n = this.ys(e);
              null !== n && t.push(n);
            }),
            t
          );
        }
        removeMutationBatch(e, t) {
          var n;
          0 === this.Ts(t.batchId, 'removed') || nX(),
            this.mutationQueue.shift();
          let r = this.gs;
          return rp
            .forEach(t.mutations, (n) => {
              let i = new sY(n.key, t.batchId);
              return (
                (r = r.delete(i)),
                this.referenceDelegate.markPotentiallyOrphaned(e, n.key)
              );
            })
            .next(() => {
              this.gs = r;
            });
        }
        An(e) {}
        containsKey(e, t) {
          let n = new sY(t, 0),
            r = this.gs.firstAfterOrEqual(n);
          return rp.resolve(t.isEqual(r && r.key));
        }
        performConsistencyCheck(e) {
          return this.mutationQueue.length, rp.resolve();
        }
        Ts(e, t) {
          return this.ps(e);
        }
        ps(e) {
          return 0 === this.mutationQueue.length
            ? 0
            : e - this.mutationQueue[0].batchId;
        }
        ys(e) {
          let t = this.ps(e);
          return t < 0 || t >= this.mutationQueue.length
            ? null
            : this.mutationQueue[t];
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class s0 {
        constructor(e) {
          (this.Es = e), (this.docs = new r_(rl.comparator)), (this.size = 0);
        }
        setIndexManager(e) {
          this.indexManager = e;
        }
        addEntry(e, t) {
          let n = t.key,
            r = this.docs.get(n),
            i = r ? r.size : 0,
            s = this.Es(t);
          return (
            (this.docs = this.docs.insert(n, {
              document: t.mutableCopy(),
              size: s
            })),
            (this.size += s - i),
            this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
          );
        }
        removeEntry(e) {
          let t = this.docs.get(e);
          t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
        }
        getEntry(e, t) {
          let n = this.docs.get(t);
          return rp.resolve(
            n ? n.document.mutableCopy() : r0.newInvalidDocument(t)
          );
        }
        getEntries(e, t) {
          let n = i8;
          return (
            t.forEach((e) => {
              let t = this.docs.get(e);
              n = n.insert(
                e,
                t ? t.document.mutableCopy() : r0.newInvalidDocument(e)
              );
            }),
            rp.resolve(n)
          );
        }
        getAllFromCollection(e, t, n) {
          let r = i8,
            i = new rl(t.child('')),
            s = this.docs.getIteratorFrom(i);
          for (; s.hasNext(); ) {
            let {
              key: a,
              value: { document: o }
            } = s.getNext();
            if (!t.isPrefixOf(a.path)) break;
            a.path.length > t.length + 1 ||
              0 >= rc(ru(o), n) ||
              (r = r.insert(o.key, o.mutableCopy()));
          }
          return rp.resolve(r);
        }
        getAllFromCollectionGroup(e, t, n, r) {
          nX();
        }
        As(e, t) {
          return rp.forEach(this.docs, (e) => t(e));
        }
        newChangeBuffer(e) {
          return new s1(this);
        }
        getSize(e) {
          return rp.resolve(this.size);
        }
      }
      class s1 extends sK {
        constructor(e) {
          super(), (this.Yn = e);
        }
        applyChanges(e) {
          let t = [];
          return (
            this.changes.forEach((n, r) => {
              r.isValidDocument()
                ? t.push(this.Yn.addEntry(e, r))
                : this.Yn.removeEntry(n);
            }),
            rp.waitFor(t)
          );
        }
        getFromCache(e, t) {
          return this.Yn.getEntry(e, t);
        }
        getAllFromCache(e, t) {
          return this.Yn.getEntries(e, t);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class s2 {
        constructor(e) {
          (this.persistence = e),
            (this.Rs = new i5((e) => r4(e), r3)),
            (this.lastRemoteSnapshotVersion = rr.min()),
            (this.highestTargetId = 0),
            (this.bs = 0),
            (this.Ps = new sJ()),
            (this.targetCount = 0),
            (this.vs = sH.Pn());
        }
        forEachTarget(e, t) {
          return this.Rs.forEach((e, n) => t(n)), rp.resolve();
        }
        getLastRemoteSnapshotVersion(e) {
          return rp.resolve(this.lastRemoteSnapshotVersion);
        }
        getHighestSequenceNumber(e) {
          return rp.resolve(this.bs);
        }
        allocateTargetId(e) {
          return (
            (this.highestTargetId = this.vs.next()),
            rp.resolve(this.highestTargetId)
          );
        }
        setTargetsMetadata(e, t, n) {
          return (
            n && (this.lastRemoteSnapshotVersion = n),
            t > this.bs && (this.bs = t),
            rp.resolve()
          );
        }
        Dn(e) {
          this.Rs.set(e.target, e);
          let t = e.targetId;
          t > this.highestTargetId &&
            ((this.vs = new sH(t)), (this.highestTargetId = t)),
            e.sequenceNumber > this.bs && (this.bs = e.sequenceNumber);
        }
        addTargetData(e, t) {
          return this.Dn(t), (this.targetCount += 1), rp.resolve();
        }
        updateTargetData(e, t) {
          return this.Dn(t), rp.resolve();
        }
        removeTargetData(e, t) {
          return (
            this.Rs.delete(t.target),
            this.Ps.ls(t.targetId),
            (this.targetCount -= 1),
            rp.resolve()
          );
        }
        removeTargets(e, t, n) {
          let r = 0,
            i = [];
          return (
            this.Rs.forEach((s, a) => {
              a.sequenceNumber <= t &&
                null === n.get(a.targetId) &&
                (this.Rs.delete(s),
                i.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
                r++);
            }),
            rp.waitFor(i).next(() => r)
          );
        }
        getTargetCount(e) {
          return rp.resolve(this.targetCount);
        }
        getTargetData(e, t) {
          let n = this.Rs.get(t) || null;
          return rp.resolve(n);
        }
        addMatchingKeys(e, t, n) {
          return this.Ps.us(t, n), rp.resolve();
        }
        removeMatchingKeys(e, t, n) {
          this.Ps.hs(t, n);
          let r = this.persistence.referenceDelegate,
            i = [];
          return (
            r &&
              t.forEach((t) => {
                i.push(r.markPotentiallyOrphaned(e, t));
              }),
            rp.waitFor(i)
          );
        }
        removeMatchingKeysForTargetId(e, t) {
          return this.Ps.ls(t), rp.resolve();
        }
        getMatchingKeysForTargetId(e, t) {
          let n = this.Ps.ds(t);
          return rp.resolve(n);
        }
        containsKey(e, t) {
          return rp.resolve(this.Ps.containsKey(t));
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class s4 {
        constructor(e, t) {
          var n;
          (this.Vs = {}),
            (this.overlays = {}),
            (this.Ss = new rg(0)),
            (this.Ds = !1),
            (this.Ds = !0),
            (this.referenceDelegate = e(this)),
            (this.Cs = new s2(this)),
            (this.indexManager = new sq()),
            (this.remoteDocumentCache =
              ((n = (e) => this.referenceDelegate.xs(e)), new s0(n))),
            (this.It = new sB(t)),
            (this.Ns = new sQ(this.It));
        }
        start() {
          return Promise.resolve();
        }
        shutdown() {
          return (this.Ds = !1), Promise.resolve();
        }
        get started() {
          return this.Ds;
        }
        setDatabaseDeletedListener() {}
        setNetworkEnabled() {}
        getIndexManager(e) {
          return this.indexManager;
        }
        getDocumentOverlayCache(e) {
          let t = this.overlays[e.toKey()];
          return t || ((t = new sX()), (this.overlays[e.toKey()] = t)), t;
        }
        getMutationQueue(e, t) {
          let n = this.Vs[e.toKey()];
          return (
            n ||
              ((n = new sZ(t, this.referenceDelegate)),
              (this.Vs[e.toKey()] = n)),
            n
          );
        }
        getTargetCache() {
          return this.Cs;
        }
        getRemoteDocumentCache() {
          return this.remoteDocumentCache;
        }
        getBundleCache() {
          return this.Ns;
        }
        runTransaction(e, t, n) {
          nK('MemoryPersistence', 'Starting transaction:', e);
          let r = new s3(this.Ss.next());
          return (
            this.referenceDelegate.ks(),
            n(r)
              .next((e) => this.referenceDelegate.Os(r).next(() => e))
              .toPromise()
              .then((e) => (r.raiseOnCommittedEvent(), e))
          );
        }
        Ms(e, t) {
          return rp.or(
            Object.values(this.Vs).map((n) => () => n.containsKey(e, t))
          );
        }
      }
      class s3 extends rd {
        constructor(e) {
          super(), (this.currentSequenceNumber = e);
        }
      }
      class s6 {
        constructor(e) {
          (this.persistence = e), (this.Fs = new sJ()), (this.$s = null);
        }
        static Bs(e) {
          return new s6(e);
        }
        get Ls() {
          if (this.$s) return this.$s;
          throw nX();
        }
        addReference(e, t, n) {
          return (
            this.Fs.addReference(n, t),
            this.Ls.delete(n.toString()),
            rp.resolve()
          );
        }
        removeReference(e, t, n) {
          return (
            this.Fs.removeReference(n, t),
            this.Ls.add(n.toString()),
            rp.resolve()
          );
        }
        markPotentiallyOrphaned(e, t) {
          return this.Ls.add(t.toString()), rp.resolve();
        }
        removeTarget(e, t) {
          this.Fs.ls(t.targetId).forEach((e) => this.Ls.add(e.toString()));
          let n = this.persistence.getTargetCache();
          return n
            .getMatchingKeysForTargetId(e, t.targetId)
            .next((e) => {
              e.forEach((e) => this.Ls.add(e.toString()));
            })
            .next(() => n.removeTargetData(e, t));
        }
        ks() {
          this.$s = new Set();
        }
        Os(e) {
          let t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
          return rp
            .forEach(this.Ls, (n) => {
              let r = rl.fromPath(n);
              return this.Us(e, r).next((e) => {
                e || t.removeEntry(r, rr.min());
              });
            })
            .next(() => ((this.$s = null), t.apply(e)));
        }
        updateLimboDocument(e, t) {
          return this.Us(e, t).next((e) => {
            e ? this.Ls.delete(t.toString()) : this.Ls.add(t.toString());
          });
        }
        xs(e) {
          return 0;
        }
        Us(e, t) {
          return rp.or([
            () => rp.resolve(this.Fs.containsKey(t)),
            () => this.persistence.getTargetCache().containsKey(e, t),
            () => this.persistence.Ms(e, t)
          ]);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class s9 {
        constructor(e, t, n, r) {
          (this.targetId = e),
            (this.fromCache = t),
            (this.Si = n),
            (this.Di = r);
        }
        static Ci(e, t) {
          let n = so(),
            r = so();
          for (let i of t.docChanges)
            switch (i.type) {
              case 0:
                n = n.add(i.doc.key);
                break;
              case 1:
                r = r.add(i.doc.key);
            }
          return new s9(e, t.fromCache, n, r);
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class s5 {
        constructor() {
          this.xi = !1;
        }
        initialize(e, t) {
          (this.Ni = e), (this.indexManager = t), (this.xi = !0);
        }
        getDocumentsMatchingQuery(e, t, n, r) {
          return this.ki(e, t)
            .next((i) => i || this.Oi(e, t, r, n))
            .next((n) => n || this.Mi(e, t));
        }
        ki(e, t) {
          if (ip(t)) return rp.resolve(null);
          let n = iw(t);
          return this.indexManager.getIndexType(e, n).next((r) =>
            0 === r
              ? null
              : (null !== t.limit &&
                  1 === r &&
                  ((t = i_(t, null, 'F')), (n = iw(t))),
                this.indexManager.getDocumentsMatchingTarget(e, n).next((r) => {
                  let i = so(...r);
                  return this.Ni.getDocuments(e, i).next((r) =>
                    this.indexManager.getMinOffset(e, n).next((n) => {
                      let s = this.Fi(t, r);
                      return this.$i(t, s, i, n.readTime)
                        ? this.ki(e, i_(t, null, 'F'))
                        : this.Bi(e, s, t, n);
                    })
                  );
                }))
          );
        }
        Oi(e, t, n, r) {
          return ip(t) || r.isEqual(rr.min())
            ? this.Mi(e, t)
            : this.Ni.getDocuments(e, n).next((i) => {
                let s = this.Fi(t, i);
                return this.$i(t, s, n, r)
                  ? this.Mi(e, t)
                  : (nH() <= p.in.DEBUG &&
                      nK(
                        'QueryEngine',
                        'Re-using previous result from %s to execute query: %s',
                        r.toString(),
                        iI(t)
                      ),
                    this.Bi(
                      e,
                      s,
                      t,
                      (function (e, t) {
                        let n = e.toTimestamp().seconds,
                          r = e.toTimestamp().nanoseconds + 1,
                          i = rr.fromTimestamp(
                            1e9 === r ? new rn(n + 1, 0) : new rn(n, r)
                          );
                        return new rh(i, rl.empty(), -1);
                      })(r, -1)
                    ));
              });
        }
        Fi(e, t) {
          let n = new rI(ik(e));
          return (
            t.forEach((t, r) => {
              iE(e, r) && (n = n.add(r));
            }),
            n
          );
        }
        $i(e, t, n, r) {
          if (null === e.limit) return !1;
          if (n.size !== t.size) return !0;
          let i = 'F' === e.limitType ? t.last() : t.first();
          return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
        }
        Mi(e, t) {
          return (
            nH() <= p.in.DEBUG &&
              nK(
                'QueryEngine',
                'Using full collection scan to execute query:',
                iI(t)
              ),
            this.Ni.getDocumentsMatchingQuery(e, t, rh.min())
          );
        }
        Bi(e, t, n, r) {
          return this.Ni.getDocumentsMatchingQuery(e, n, r).next(
            (e) => (
              t.forEach((t) => {
                e = e.insert(t.key, t);
              }),
              e
            )
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class s8 {
        constructor(e, t, n, r) {
          (this.persistence = e),
            (this.Li = t),
            (this.It = r),
            (this.Ui = new r_(re)),
            (this.qi = new i5((e) => r4(e), r3)),
            (this.Ki = new Map()),
            (this.Gi = e.getRemoteDocumentCache()),
            (this.Cs = e.getTargetCache()),
            (this.Ns = e.getBundleCache()),
            this.Qi(n);
        }
        Qi(e) {
          (this.documentOverlayCache =
            this.persistence.getDocumentOverlayCache(e)),
            (this.indexManager = this.persistence.getIndexManager(e)),
            (this.mutationQueue = this.persistence.getMutationQueue(
              e,
              this.indexManager
            )),
            (this.localDocuments = new sW(
              this.Gi,
              this.mutationQueue,
              this.documentOverlayCache,
              this.indexManager
            )),
            this.Gi.setIndexManager(this.indexManager),
            this.Li.initialize(this.localDocuments, this.indexManager);
        }
        collectGarbage(e) {
          return this.persistence.runTransaction(
            'Collect garbage',
            'readwrite-primary',
            (t) => e.collect(t, this.Ui)
          );
        }
      }
      async function s7(e, t) {
        var n;
        return await e.persistence.runTransaction(
          'Handle user change',
          'readonly',
          (n) => {
            let r;
            return e.mutationQueue
              .getAllMutationBatches(n)
              .next(
                (i) => (
                  (r = i), e.Qi(t), e.mutationQueue.getAllMutationBatches(n)
                )
              )
              .next((t) => {
                let i = [],
                  s = [],
                  a = so();
                for (let o of r)
                  for (let l of (i.push(o.batchId), o.mutations))
                    a = a.add(l.key);
                for (let u of t)
                  for (let h of (s.push(u.batchId), u.mutations))
                    a = a.add(h.key);
                return e.localDocuments
                  .getDocuments(n, a)
                  .next((e) => ({
                    ji: e,
                    removedBatchIds: i,
                    addedBatchIds: s
                  }));
              });
          }
        );
      }
      function ae(e) {
        var t;
        return e.persistence.runTransaction(
          'Get last remote snapshot version',
          'readonly',
          (t) => e.Cs.getLastRemoteSnapshotVersion(t)
        );
      }
      function at(e, t) {
        var n;
        return e.persistence.runTransaction(
          'Get next mutation batch',
          'readonly',
          (n) => (
            void 0 === t && (t = -1),
            e.mutationQueue.getNextMutationBatchAfterBatchId(n, t)
          )
        );
      }
      async function an(e, t, n) {
        var r;
        let i = e,
          s = i.Ui.get(t);
        try {
          n ||
            (await i.persistence.runTransaction(
              'Release target',
              n ? 'readwrite' : 'readwrite-primary',
              (e) => i.persistence.referenceDelegate.removeTarget(e, s)
            ));
        } catch (a) {
          if (!rm(a)) throw a;
          nK(
            'LocalStore',
            `Failed to update sequence numbers for target ${t}: ${a}`
          );
        }
        (i.Ui = i.Ui.remove(t)), i.qi.delete(s.target);
      }
      function ar(e, t, n) {
        var r;
        let i = rr.min(),
          s = so();
        return e.persistence.runTransaction('Execute query', 'readonly', (r) =>
          (function (e, t, n) {
            var r;
            let i = e.qi.get(n);
            return void 0 !== i
              ? rp.resolve(e.Ui.get(i))
              : e.Cs.getTargetData(t, n);
          })(e, r, iw(t))
            .next((t) => {
              if (t)
                return (
                  (i = t.lastLimboFreeSnapshotVersion),
                  e.Cs.getMatchingKeysForTargetId(r, t.targetId).next((e) => {
                    s = e;
                  })
                );
            })
            .next(() =>
              e.Li.getDocumentsMatchingQuery(
                r,
                t,
                n ? i : rr.min(),
                n ? s : so()
              )
            )
            .next((n) => {
              var r, i, a, o;
              let l;
              return (
                (i = e),
                (a =
                  t.collectionGroup ||
                  (t.path.length % 2 == 1
                    ? t.path.lastSegment()
                    : t.path.get(t.path.length - 2))),
                (o = n),
                (l = i.Ki.get(a) || rr.min()),
                o.forEach((e, t) => {
                  t.readTime.compareTo(l) > 0 && (l = t.readTime);
                }),
                i.Ki.set(a, l),
                { documents: n, Hi: s }
              );
            })
        );
      }
      class ai {
        constructor() {
          this.activeTargetIds = sl;
        }
        er(e) {
          this.activeTargetIds = this.activeTargetIds.add(e);
        }
        nr(e) {
          this.activeTargetIds = this.activeTargetIds.delete(e);
        }
        tr() {
          let e = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
          };
          return JSON.stringify(e);
        }
      }
      class as {
        constructor() {
          (this.Lr = new ai()),
            (this.Ur = {}),
            (this.onlineStateHandler = null),
            (this.sequenceNumberHandler = null);
        }
        addPendingMutation(e) {}
        updateMutationState(e, t, n) {}
        addLocalQueryTarget(e) {
          return this.Lr.er(e), this.Ur[e] || 'not-current';
        }
        updateQueryState(e, t, n) {
          this.Ur[e] = t;
        }
        removeLocalQueryTarget(e) {
          this.Lr.nr(e);
        }
        isLocalQueryTarget(e) {
          return this.Lr.activeTargetIds.has(e);
        }
        clearQueryState(e) {
          delete this.Ur[e];
        }
        getAllActiveQueryTargets() {
          return this.Lr.activeTargetIds;
        }
        isActiveQueryTarget(e) {
          return this.Lr.activeTargetIds.has(e);
        }
        start() {
          return (this.Lr = new ai()), Promise.resolve();
        }
        handleUserChange(e, t, n) {}
        setOnlineState(e) {}
        shutdown() {}
        writeSequenceNumber(e) {}
        notifyBundleLoaded(e) {}
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class aa {
        qr(e) {}
        shutdown() {}
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ao {
        constructor() {
          (this.Kr = () => this.Gr()),
            (this.Qr = () => this.jr()),
            (this.Wr = []),
            this.zr();
        }
        qr(e) {
          this.Wr.push(e);
        }
        shutdown() {
          window.removeEventListener('online', this.Kr),
            window.removeEventListener('offline', this.Qr);
        }
        zr() {
          window.addEventListener('online', this.Kr),
            window.addEventListener('offline', this.Qr);
        }
        Gr() {
          for (let e of (nK(
            'ConnectivityMonitor',
            'Network connectivity changed: AVAILABLE'
          ),
          this.Wr))
            e(0);
        }
        jr() {
          for (let e of (nK(
            'ConnectivityMonitor',
            'Network connectivity changed: UNAVAILABLE'
          ),
          this.Wr))
            e(1);
        }
        static C() {
          return (
            'undefined' != typeof window &&
            void 0 !== window.addEventListener &&
            void 0 !== window.removeEventListener
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let al = {
        BatchGetDocuments: 'batchGet',
        Commit: 'commit',
        RunQuery: 'runQuery',
        RunAggregationQuery: 'runAggregationQuery'
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class au {
        constructor(e) {
          (this.Hr = e.Hr), (this.Jr = e.Jr);
        }
        Yr(e) {
          this.Xr = e;
        }
        Zr(e) {
          this.eo = e;
        }
        onMessage(e) {
          this.no = e;
        }
        close() {
          this.Jr();
        }
        send(e) {
          this.Hr(e);
        }
        so() {
          this.Xr();
        }
        io(e) {
          this.eo(e);
        }
        ro(e) {
          this.no(e);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ah extends class {
        constructor(e) {
          (this.databaseInfo = e), (this.databaseId = e.databaseId);
          let t = e.ssl ? 'https' : 'http';
          (this.oo = t + '://' + e.host),
            (this.uo =
              'projects/' +
              this.databaseId.projectId +
              '/databases/' +
              this.databaseId.database +
              '/documents');
        }
        get co() {
          return !1;
        }
        ao(e, t, n, r, i) {
          let s = this.ho(e, t);
          nK('RestConnection', 'Sending: ', s, n);
          let a = {};
          return (
            this.lo(a, r, i),
            this.fo(e, s, a, n).then(
              (e) => (nK('RestConnection', 'Received: ', e), e),
              (t) => {
                throw (
                  (nW(
                    'RestConnection',
                    `${e} failed with error: `,
                    t,
                    'url: ',
                    s,
                    'request:',
                    n
                  ),
                  t)
                );
              }
            )
          );
        }
        _o(e, t, n, r, i, s) {
          return this.ao(e, t, n, r, i);
        }
        lo(e, t, n) {
          (e['X-Goog-Api-Client'] = 'gl-js/ fire/' + n$),
            (e['Content-Type'] = 'text/plain'),
            this.databaseInfo.appId &&
              (e['X-Firebase-GMPID'] = this.databaseInfo.appId),
            t && t.headers.forEach((t, n) => (e[n] = t)),
            n && n.headers.forEach((t, n) => (e[n] = t));
        }
        ho(e, t) {
          let n = al[e];
          return `${this.oo}/v1/${t}:${n}`;
        }
      } {
        constructor(e) {
          super(e),
            (this.forceLongPolling = e.forceLongPolling),
            (this.autoDetectLongPolling = e.autoDetectLongPolling),
            (this.useFetchStreams = e.useFetchStreams);
        }
        fo(e, t, n, r) {
          return new Promise((i, s) => {
            let a = new nB();
            a.setWithCredentials(!0),
              a.listenOnce(nx.COMPLETE, () => {
                try {
                  switch (a.getLastErrorCode()) {
                    case nP.NO_ERROR:
                      let t = a.getResponseJson();
                      nK('Connection', 'XHR received:', JSON.stringify(t)),
                        i(t);
                      break;
                    case nP.TIMEOUT:
                      nK('Connection', 'RPC "' + e + '" timed out'),
                        s(new nY(nJ.DEADLINE_EXCEEDED, 'Request time out'));
                      break;
                    case nP.HTTP_ERROR:
                      let n = a.getStatus();
                      if (
                        (nK(
                          'Connection',
                          'RPC "' + e + '" failed with status:',
                          n,
                          'response text:',
                          a.getResponseText()
                        ),
                        n > 0)
                      ) {
                        let r = a.getResponseJson().error;
                        if (r && r.status && r.message) {
                          let o = (function (e) {
                            let t = e.toLowerCase().replace(/_/g, '-');
                            return Object.values(nJ).indexOf(t) >= 0
                              ? t
                              : nJ.UNKNOWN;
                          })(r.status);
                          s(new nY(o, r.message));
                        } else
                          s(
                            new nY(
                              nJ.UNKNOWN,
                              'Server responded with status ' + a.getStatus()
                            )
                          );
                      } else s(new nY(nJ.UNAVAILABLE, 'Connection failed.'));
                      break;
                    default:
                      nX();
                  }
                } finally {
                  nK('Connection', 'RPC "' + e + '" completed.');
                }
              });
            let o = JSON.stringify(r);
            a.send(t, 'POST', o, n, 15);
          });
        }
        wo(e, t, n) {
          let r = [
              this.oo,
              '/',
              'google.firestore.v1.Firestore',
              '/',
              e,
              '/channel'
            ],
            i = nO(),
            s = nL(),
            a = {
              httpSessionIdParam: 'gsessionid',
              initMessageHeaders: {},
              messageUrlParams: {
                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
              },
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.autoDetectLongPolling
            };
          this.useFetchStreams && (a.xmlHttpFactory = new nF({})),
            this.lo(a.initMessageHeaders, t, n),
            (a.encodeInitMessageHeaders = !0);
          let o = r.join('');
          nK('Connection', 'Creating WebChannel: ' + o, a);
          let l = i.createWebChannel(o, a),
            h = !1,
            c = !1,
            d = new au({
              Hr(e) {
                c
                  ? nK(
                      'Connection',
                      'Not sending because WebChannel is closed:',
                      e
                    )
                  : (h ||
                      (nK('Connection', 'Opening WebChannel transport.'),
                      l.open(),
                      (h = !0)),
                    nK('Connection', 'WebChannel sending:', e),
                    l.send(e));
              },
              Jr: () => l.close()
            }),
            f = (e, t, n) => {
              e.listen(t, (e) => {
                try {
                  n(e);
                } catch (t) {
                  setTimeout(() => {
                    throw t;
                  }, 0);
                }
              });
            };
          return (
            f(l, nV.EventType.OPEN, () => {
              c || nK('Connection', 'WebChannel transport opened.');
            }),
            f(l, nV.EventType.CLOSE, () => {
              c ||
                ((c = !0),
                nK('Connection', 'WebChannel transport closed'),
                d.io());
            }),
            f(l, nV.EventType.ERROR, (e) => {
              c ||
                ((c = !0),
                nW('Connection', 'WebChannel transport errored:', e),
                d.io(
                  new nY(nJ.UNAVAILABLE, 'The operation could not be completed')
                ));
            }),
            f(l, nV.EventType.MESSAGE, (e) => {
              var t, n;
              if (!c) {
                let r = e.data[0];
                (n = !!r) || nX();
                let i =
                  r.error ||
                  (null === (t = r[0]) || void 0 === t ? void 0 : t.error);
                if (i) {
                  nK('Connection', 'WebChannel received error:', i);
                  let s = i.status,
                    a = (function (e) {
                      let t = u[e];
                      if (void 0 !== t) return i9(t);
                    })(s),
                    o = i.message;
                  void 0 === a &&
                    ((a = nJ.INTERNAL),
                    (o =
                      'Unknown error status: ' +
                      s +
                      ' with message ' +
                      i.message)),
                    (c = !0),
                    d.io(new nY(a, o)),
                    l.close();
                } else nK('Connection', 'WebChannel received:', r), d.ro(r);
              }
            }),
            f(s, nM.STAT_EVENT, (e) => {
              e.stat === nU.PROXY
                ? nK('Connection', 'Detected buffering proxy')
                : e.stat === nU.NOPROXY &&
                  nK('Connection', 'Detected no buffering proxy');
            }),
            setTimeout(() => {
              d.so();
            }, 0),
            d
          );
        }
      }
      function ac() {
        return 'undefined' != typeof document ? document : null;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function ad(e) {
        return new s_(e, !0);
      }
      class af {
        constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
          (this.Hs = e),
            (this.timerId = t),
            (this.mo = n),
            (this.yo = r),
            (this.po = i),
            (this.Io = 0),
            (this.To = null),
            (this.Eo = Date.now()),
            this.reset();
        }
        reset() {
          this.Io = 0;
        }
        Ao() {
          this.Io = this.po;
        }
        Ro(e) {
          this.cancel();
          let t = Math.floor(this.Io + this.bo()),
            n = Math.max(0, Date.now() - this.Eo),
            r = Math.max(0, t - n);
          r > 0 &&
            nK(
              'ExponentialBackoff',
              `Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`
            ),
            (this.To = this.Hs.enqueueAfterDelay(
              this.timerId,
              r,
              () => ((this.Eo = Date.now()), e())
            )),
            (this.Io *= this.yo),
            this.Io < this.mo && (this.Io = this.mo),
            this.Io > this.po && (this.Io = this.po);
        }
        Po() {
          null !== this.To && (this.To.skipDelay(), (this.To = null));
        }
        cancel() {
          null !== this.To && (this.To.cancel(), (this.To = null));
        }
        bo() {
          return (Math.random() - 0.5) * this.Io;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ap {
        constructor(e, t, n, r, i, s, a, o) {
          (this.Hs = e),
            (this.vo = n),
            (this.Vo = r),
            (this.connection = i),
            (this.authCredentialsProvider = s),
            (this.appCheckCredentialsProvider = a),
            (this.listener = o),
            (this.state = 0),
            (this.So = 0),
            (this.Do = null),
            (this.Co = null),
            (this.stream = null),
            (this.xo = new af(e, t));
        }
        No() {
          return 1 === this.state || 5 === this.state || this.ko();
        }
        ko() {
          return 2 === this.state || 3 === this.state;
        }
        start() {
          4 !== this.state ? this.auth() : this.Oo();
        }
        async stop() {
          this.No() && (await this.close(0));
        }
        Mo() {
          (this.state = 0), this.xo.reset();
        }
        Fo() {
          this.ko() &&
            null === this.Do &&
            (this.Do = this.Hs.enqueueAfterDelay(this.vo, 6e4, () =>
              this.$o()
            ));
        }
        Bo(e) {
          this.Lo(), this.stream.send(e);
        }
        async $o() {
          if (this.ko()) return this.close(0);
        }
        Lo() {
          this.Do && (this.Do.cancel(), (this.Do = null));
        }
        Uo() {
          this.Co && (this.Co.cancel(), (this.Co = null));
        }
        async close(e, t) {
          this.Lo(),
            this.Uo(),
            this.xo.cancel(),
            this.So++,
            4 !== e
              ? this.xo.reset()
              : t && t.code === nJ.RESOURCE_EXHAUSTED
              ? (nG(t.toString()),
                nG(
                  'Using maximum backoff delay to prevent overloading the backend.'
                ),
                this.xo.Ao())
              : t &&
                t.code === nJ.UNAUTHENTICATED &&
                3 !== this.state &&
                (this.authCredentialsProvider.invalidateToken(),
                this.appCheckCredentialsProvider.invalidateToken()),
            null !== this.stream &&
              (this.qo(), this.stream.close(), (this.stream = null)),
            (this.state = e),
            await this.listener.Zr(t);
        }
        qo() {}
        auth() {
          this.state = 1;
          let e = this.Ko(this.So),
            t = this.So;
          Promise.all([
            this.authCredentialsProvider.getToken(),
            this.appCheckCredentialsProvider.getToken()
          ]).then(
            ([e, n]) => {
              this.So === t && this.Go(e, n);
            },
            (t) => {
              e(() => {
                let e = new nY(
                  nJ.UNKNOWN,
                  'Fetching auth token failed: ' + t.message
                );
                return this.Qo(e);
              });
            }
          );
        }
        Go(e, t) {
          let n = this.Ko(this.So);
          (this.stream = this.jo(e, t)),
            this.stream.Yr(() => {
              n(
                () => (
                  (this.state = 2),
                  (this.Co = this.Hs.enqueueAfterDelay(
                    this.Vo,
                    1e4,
                    () => (this.ko() && (this.state = 3), Promise.resolve())
                  )),
                  this.listener.Yr()
                )
              );
            }),
            this.stream.Zr((e) => {
              n(() => this.Qo(e));
            }),
            this.stream.onMessage((e) => {
              n(() => this.onMessage(e));
            });
        }
        Oo() {
          (this.state = 5),
            this.xo.Ro(async () => {
              (this.state = 0), this.start();
            });
        }
        Qo(e) {
          return (
            nK('PersistentStream', `close with error: ${e}`),
            (this.stream = null),
            this.close(4, e)
          );
        }
        Ko(e) {
          return (t) => {
            this.Hs.enqueueAndForget(() =>
              this.So === e
                ? t()
                : (nK(
                    'PersistentStream',
                    'stream callback skipped by getCloseGuardedDispatcher.'
                  ),
                  Promise.resolve())
            );
          };
        }
      }
      class am extends ap {
        constructor(e, t, n, r, i, s) {
          super(
            e,
            'listen_stream_connection_backoff',
            'listen_stream_idle',
            'health_check_timeout',
            t,
            n,
            r,
            s
          ),
            (this.It = i);
        }
        jo(e, t) {
          return this.connection.wo('Listen', e, t);
        }
        onMessage(e) {
          this.xo.reset();
          let t = (function (e, t) {
              let n;
              if ('targetChange' in t) {
                var r, i, s, a;
                t.targetChange;
                let o =
                    'NO_CHANGE' ===
                    (r = t.targetChange.targetChangeType || 'NO_CHANGE')
                      ? 0
                      : 'ADD' === r
                      ? 1
                      : 'REMOVE' === r
                      ? 2
                      : 'CURRENT' === r
                      ? 3
                      : 'RESET' === r
                      ? 4
                      : nX(),
                  l = t.targetChange.targetIds || [],
                  u =
                    ((s = t.targetChange.resumeToken),
                    e.gt
                      ? (void 0 === s || 'string' == typeof s || nX(),
                        rS.fromBase64String(s || ''))
                      : (void 0 === s || s instanceof Uint8Array || nX(),
                        rS.fromUint8Array(s || new Uint8Array()))),
                  h = t.targetChange.cause,
                  c =
                    h &&
                    (function (e) {
                      let t = void 0 === e.code ? nJ.UNKNOWN : i9(e.code);
                      return new nY(t, e.message || '');
                    })(h);
                n = new sf(o, l, u, c || null);
              } else if ('documentChange' in t) {
                t.documentChange;
                let d = t.documentChange;
                d.document, d.document.name, d.document.updateTime;
                let f = sC(e, d.document.name),
                  p = sI(d.document.updateTime),
                  m = new rY({ mapValue: { fields: d.document.fields } }),
                  g = r0.newFoundDocument(f, p, m),
                  y = d.targetIds || [],
                  v = d.removedTargetIds || [];
                n = new sc(y, v, g.key, g);
              } else if ('documentDelete' in t) {
                t.documentDelete;
                let w = t.documentDelete;
                w.document;
                let _ = sC(e, w.document),
                  b = w.readTime ? sI(w.readTime) : rr.min(),
                  T = r0.newNoDocument(_, b),
                  I = w.removedTargetIds || [];
                n = new sc([], I, T.key, T);
              } else if ('documentRemove' in t) {
                t.documentRemove;
                let E = t.documentRemove;
                E.document;
                let k = sC(e, E.document),
                  S = E.removedTargetIds || [];
                n = new sc([], S, k, null);
              } else {
                if (!('filter' in t)) return nX();
                {
                  t.filter;
                  let C = t.filter;
                  C.targetId;
                  let A = C.count || 0,
                    R = new i6(A),
                    N = C.targetId;
                  n = new sd(N, R);
                }
              }
              return n;
            })(this.It, e),
            n = (function (e) {
              if (!('targetChange' in e)) return rr.min();
              let t = e.targetChange;
              return t.targetIds && t.targetIds.length
                ? rr.min()
                : t.readTime
                ? sI(t.readTime)
                : rr.min();
            })(e);
          return this.listener.Wo(t, n);
        }
        zo(e) {
          let t = {};
          (t.database = sR(this.It)),
            (t.addTarget = (function (e, t) {
              var n, r;
              let i,
                s = t.target;
              return (
                ((i = r6(s)
                  ? { documents: { documents: [sA(e, s.path)] } }
                  : { query: sO(e, s) }).targetId = t.targetId),
                t.resumeToken.approximateByteSize() > 0
                  ? (i.resumeToken = sT(e, t.resumeToken))
                  : t.snapshotVersion.compareTo(rr.min()) > 0 &&
                    (i.readTime = sb(e, t.snapshotVersion.toTimestamp())),
                i
              );
            })(this.It, e));
          let n = (function (e, t) {
            let n = (function (e, t) {
              switch (t) {
                case 0:
                  return null;
                case 1:
                  return 'existence-filter-mismatch';
                case 2:
                  return 'limbo-document';
                default:
                  return nX();
              }
            })(0, t.purpose);
            return null == n ? null : { 'goog-listen-tags': n };
          })(this.It, e);
          n && (t.labels = n), this.Bo(t);
        }
        Ho(e) {
          let t = {};
          (t.database = sR(this.It)), (t.removeTarget = e), this.Bo(t);
        }
      }
      class ag extends ap {
        constructor(e, t, n, r, i, s) {
          super(
            e,
            'write_stream_connection_backoff',
            'write_stream_idle',
            'health_check_timeout',
            t,
            n,
            r,
            s
          ),
            (this.It = i),
            (this.Jo = !1);
        }
        get Yo() {
          return this.Jo;
        }
        start() {
          (this.Jo = !1), (this.lastStreamToken = void 0), super.start();
        }
        qo() {
          this.Jo && this.Xo([]);
        }
        jo(e, t) {
          return this.connection.wo('Write', e, t);
        }
        onMessage(e) {
          var t, n, r, i;
          if (
            (!e.streamToken && nX(),
            (this.lastStreamToken = e.streamToken),
            this.Jo)
          ) {
            this.xo.reset();
            let s =
                ((n = e.writeResults),
                (r = e.commitTime),
                n && n.length > 0
                  ? (void 0 !== r || nX(),
                    n.map((e) => {
                      var t, n;
                      let i;
                      return (
                        (n = r),
                        (i = e.updateTime ? sI(e.updateTime) : sI(n)).isEqual(
                          rr.min()
                        ) && (i = sI(n)),
                        new i$(i, e.transformResults || [])
                      );
                    }))
                  : []),
              a = sI(e.commitTime);
            return this.listener.Zo(a, s);
          }
          return (
            e.writeResults && 0 !== e.writeResults.length && nX(),
            (this.Jo = !0),
            this.listener.tu()
          );
        }
        eu() {
          let e = {};
          (e.database = sR(this.It)), this.Bo(e);
        }
        Xo(e) {
          let t = {
            streamToken: this.lastStreamToken,
            writes: e.map((e) =>
              (function (e, t) {
                var n, r, i, s;
                let a;
                if (t instanceof iY) a = { update: sD(e, t.key, t.value) };
                else if (t instanceof i4) a = { delete: sS(e, t.key) };
                else if (t instanceof iZ)
                  a = {
                    update: sD(e, t.key, t.data),
                    updateMask: (function (e) {
                      let t = [];
                      return (
                        e.fields.forEach((e) => t.push(e.canonicalString())),
                        { fieldPaths: t }
                      );
                    })(t.fieldMask)
                  };
                else {
                  if (!(t instanceof i3)) return nX();
                  a = { verify: sS(e, t.key) };
                }
                return (
                  t.fieldTransforms.length > 0 &&
                    (a.updateTransforms = t.fieldTransforms.map((e) =>
                      (function (e, t) {
                        let n = t.transform;
                        if (n instanceof iP)
                          return {
                            fieldPath: t.field.canonicalString(),
                            setToServerValue: 'REQUEST_TIME'
                          };
                        if (n instanceof ix)
                          return {
                            fieldPath: t.field.canonicalString(),
                            appendMissingElements: { values: n.elements }
                          };
                        if (n instanceof iU)
                          return {
                            fieldPath: t.field.canonicalString(),
                            removeAllFromArray: { values: n.elements }
                          };
                        if (n instanceof iV)
                          return {
                            fieldPath: t.field.canonicalString(),
                            increment: n.yt
                          };
                        throw nX();
                      })(0, e)
                    )),
                  t.precondition.isNone ||
                    (a.currentDocument =
                      void 0 !== (r = t.precondition).updateTime
                        ? {
                            updateTime: sb(e, (s = r.updateTime).toTimestamp())
                          }
                        : void 0 !== r.exists
                        ? { exists: r.exists }
                        : nX()),
                  a
                );
              })(this.It, e)
            )
          };
          this.Bo(t);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class ay extends class {} {
        constructor(e, t, n, r) {
          super(),
            (this.authCredentials = e),
            (this.appCheckCredentials = t),
            (this.connection = n),
            (this.It = r),
            (this.nu = !1);
        }
        su() {
          if (this.nu)
            throw new nY(
              nJ.FAILED_PRECONDITION,
              'The client has already been terminated.'
            );
        }
        ao(e, t, n) {
          return (
            this.su(),
            Promise.all([
              this.authCredentials.getToken(),
              this.appCheckCredentials.getToken()
            ])
              .then(([r, i]) => this.connection.ao(e, t, n, r, i))
              .catch((e) => {
                throw 'FirebaseError' === e.name
                  ? (e.code === nJ.UNAUTHENTICATED &&
                      (this.authCredentials.invalidateToken(),
                      this.appCheckCredentials.invalidateToken()),
                    e)
                  : new nY(nJ.UNKNOWN, e.toString());
              })
          );
        }
        _o(e, t, n, r) {
          return (
            this.su(),
            Promise.all([
              this.authCredentials.getToken(),
              this.appCheckCredentials.getToken()
            ])
              .then(([i, s]) => this.connection._o(e, t, n, i, s, r))
              .catch((e) => {
                throw 'FirebaseError' === e.name
                  ? (e.code === nJ.UNAUTHENTICATED &&
                      (this.authCredentials.invalidateToken(),
                      this.appCheckCredentials.invalidateToken()),
                    e)
                  : new nY(nJ.UNKNOWN, e.toString());
              })
          );
        }
        terminate() {
          this.nu = !0;
        }
      }
      async function av(e, t) {
        var n;
        let r = (function (e, t) {
            let n = sO(e, t);
            return {
              structuredAggregationQuery: {
                aggregations: [{ count: {}, alias: 'count_alias' }],
                structuredQuery: n.structuredQuery
              },
              parent: n.parent
            };
          })(e.It, iw(t)),
          i = r.parent;
        return (
          e.connection.co || delete r.parent,
          (await e._o('RunAggregationQuery', i, r, 1))
            .filter((e) => !!e.result)
            .map((e) => e.result.aggregateFields)
        );
      }
      class aw {
        constructor(e, t) {
          (this.asyncQueue = e),
            (this.onlineStateHandler = t),
            (this.state = 'Unknown'),
            (this.iu = 0),
            (this.ru = null),
            (this.ou = !0);
        }
        uu() {
          0 === this.iu &&
            (this.cu('Unknown'),
            (this.ru = this.asyncQueue.enqueueAfterDelay(
              'online_state_timeout',
              1e4,
              () => (
                (this.ru = null),
                this.au("Backend didn't respond within 10 seconds."),
                this.cu('Offline'),
                Promise.resolve()
              )
            )));
        }
        hu(e) {
          'Online' === this.state
            ? this.cu('Unknown')
            : (this.iu++,
              this.iu >= 1 &&
                (this.lu(),
                this.au(
                  `Connection failed 1 times. Most recent error: ${e.toString()}`
                ),
                this.cu('Offline')));
        }
        set(e) {
          this.lu(),
            (this.iu = 0),
            'Online' === e && (this.ou = !1),
            this.cu(e);
        }
        cu(e) {
          e !== this.state && ((this.state = e), this.onlineStateHandler(e));
        }
        au(e) {
          let t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
          this.ou ? (nG(t), (this.ou = !1)) : nK('OnlineStateTracker', t);
        }
        lu() {
          null !== this.ru && (this.ru.cancel(), (this.ru = null));
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class a_ {
        constructor(e, t, n, r, i) {
          (this.localStore = e),
            (this.datastore = t),
            (this.asyncQueue = n),
            (this.remoteSyncer = {}),
            (this.fu = []),
            (this.du = new Map()),
            (this._u = new Set()),
            (this.wu = []),
            (this.mu = i),
            this.mu.qr((e) => {
              n.enqueueAndForget(async () => {
                aR(this) &&
                  (nK(
                    'RemoteStore',
                    'Restarting streams for network reachability change.'
                  ),
                  await (async function (e) {
                    var t;
                    e._u.add(4),
                      await aT(e),
                      e.gu.set('Unknown'),
                      e._u.delete(4),
                      await ab(e);
                  })(this));
              });
            }),
            (this.gu = new aw(n, r));
        }
      }
      async function ab(e) {
        if (aR(e)) for (let t of e.wu) await t(!0);
      }
      async function aT(e) {
        for (let t of e.wu) await t(!1);
      }
      function aI(e, t) {
        var n;
        e.du.has(t.targetId) ||
          (e.du.set(t.targetId, t), aA(e) ? aC(e) : aG(e).ko() && ak(e, t));
      }
      function aE(e, t) {
        var n;
        let r = aG(e);
        e.du.delete(t),
          r.ko() && aS(e, t),
          0 === e.du.size && (r.ko() ? r.Fo() : aR(e) && e.gu.set('Unknown'));
      }
      function ak(e, t) {
        e.yu.Mt(t.targetId), aG(e).zo(t);
      }
      function aS(e, t) {
        e.yu.Mt(t), aG(e).Ho(t);
      }
      function aC(e) {
        (e.yu = new sm({
          getRemoteKeysForTarget: (t) =>
            e.remoteSyncer.getRemoteKeysForTarget(t),
          se: (t) => e.du.get(t) || null
        })),
          aG(e).start(),
          e.gu.uu();
      }
      function aA(e) {
        return aR(e) && !aG(e).No() && e.du.size > 0;
      }
      function aR(e) {
        var t;
        return 0 === e._u.size;
      }
      function aN(e) {
        e.yu = void 0;
      }
      async function aD(e) {
        e.du.forEach((t, n) => {
          ak(e, t);
        });
      }
      async function aO(e, t) {
        aN(e), aA(e) ? (e.gu.hu(t), aC(e)) : e.gu.set('Unknown');
      }
      async function aL(e, t, n) {
        if ((e.gu.set('Online'), t instanceof sf && 2 === t.state && t.cause))
          try {
            await (async function (e, t) {
              let n = t.cause;
              for (let r of t.targetIds)
                e.du.has(r) &&
                  (await e.remoteSyncer.rejectListen(r, n),
                  e.du.delete(r),
                  e.yu.removeTarget(r));
            })(e, t);
          } catch (r) {
            nK(
              'RemoteStore',
              'Failed to remove targets %s: %s ',
              t.targetIds.join(','),
              r
            ),
              await aP(e, r);
          }
        else if (
          (t instanceof sc
            ? e.yu.Gt(t)
            : t instanceof sd
            ? e.yu.Yt(t)
            : e.yu.Wt(t),
          !n.isEqual(rr.min()))
        )
          try {
            let i = await ae(e.localStore);
            n.compareTo(i) >= 0 &&
              (await (function (e, t) {
                let n = e.yu.te(t);
                return (
                  n.targetChanges.forEach((n, r) => {
                    if (n.resumeToken.approximateByteSize() > 0) {
                      let i = e.du.get(r);
                      i && e.du.set(r, i.withResumeToken(n.resumeToken, t));
                    }
                  }),
                  n.targetMismatches.forEach((t) => {
                    let n = e.du.get(t);
                    if (!n) return;
                    e.du.set(
                      t,
                      n.withResumeToken(rS.EMPTY_BYTE_STRING, n.snapshotVersion)
                    ),
                      aS(e, t);
                    let r = new sV(n.target, t, 1, n.sequenceNumber);
                    ak(e, r);
                  }),
                  e.remoteSyncer.applyRemoteEvent(n)
                );
              })(e, n));
          } catch (s) {
            nK('RemoteStore', 'Failed to raise snapshot:', s), await aP(e, s);
          }
      }
      async function aP(e, t, n) {
        if (!rm(t)) throw t;
        e._u.add(1),
          await aT(e),
          e.gu.set('Offline'),
          n || (n = () => ae(e.localStore)),
          e.asyncQueue.enqueueRetryable(async () => {
            nK('RemoteStore', 'Retrying IndexedDB access'),
              await n(),
              e._u.delete(1),
              await ab(e);
          });
      }
      function ax(e, t) {
        return t().catch((n) => aP(e, n, t));
      }
      async function aM(e) {
        var t;
        let n = aW(e),
          r = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
        for (; aU(e); )
          try {
            let i = await at(e.localStore, r);
            if (null === i) {
              0 === e.fu.length && n.Fo();
              break;
            }
            (r = i.batchId), aF(e, i);
          } catch (s) {
            await aP(e, s);
          }
        aV(e) && aB(e);
      }
      function aU(e) {
        return aR(e) && e.fu.length < 10;
      }
      function aF(e, t) {
        e.fu.push(t);
        let n = aW(e);
        n.ko() && n.Yo && n.Xo(t.mutations);
      }
      function aV(e) {
        return aR(e) && !aW(e).No() && e.fu.length > 0;
      }
      function aB(e) {
        aW(e).start();
      }
      async function aj(e) {
        aW(e).eu();
      }
      async function aq(e) {
        let t = aW(e);
        for (let n of e.fu) t.Xo(n.mutations);
      }
      async function a$(e, t, n) {
        let r = e.fu.shift(),
          i = sU.from(r, t, n);
        await ax(e, () => e.remoteSyncer.applySuccessfulWrite(i)), await aM(e);
      }
      async function az(e, t) {
        t &&
          aW(e).Yo &&
          (await (async function (e, t) {
            var n;
            if (
              (function (e) {
                switch (e) {
                  default:
                    return nX();
                  case nJ.CANCELLED:
                  case nJ.UNKNOWN:
                  case nJ.DEADLINE_EXCEEDED:
                  case nJ.RESOURCE_EXHAUSTED:
                  case nJ.INTERNAL:
                  case nJ.UNAVAILABLE:
                  case nJ.UNAUTHENTICATED:
                    return !1;
                  case nJ.INVALID_ARGUMENT:
                  case nJ.NOT_FOUND:
                  case nJ.ALREADY_EXISTS:
                  case nJ.PERMISSION_DENIED:
                  case nJ.FAILED_PRECONDITION:
                  case nJ.ABORTED:
                  case nJ.OUT_OF_RANGE:
                  case nJ.UNIMPLEMENTED:
                  case nJ.DATA_LOSS:
                    return !0;
                }
              })((n = t.code)) &&
              n !== nJ.ABORTED
            ) {
              let r = e.fu.shift();
              aW(e).Mo(),
                await ax(e, () =>
                  e.remoteSyncer.rejectFailedWrite(r.batchId, t)
                ),
                await aM(e);
            }
          })(e, t)),
          aV(e) && aB(e);
      }
      async function aH(e, t) {
        var n;
        e.asyncQueue.verifyOperationInProgress(),
          nK('RemoteStore', 'RemoteStore received new credentials');
        let r = aR(e);
        e._u.add(3),
          await aT(e),
          r && e.gu.set('Unknown'),
          await e.remoteSyncer.handleCredentialChange(t),
          e._u.delete(3),
          await ab(e);
      }
      async function aK(e, t) {
        var n;
        t
          ? (e._u.delete(2), await ab(e))
          : t || (e._u.add(2), await aT(e), e.gu.set('Unknown'));
      }
      function aG(e) {
        return (
          e.pu ||
            ((e.pu = (function (e, t, n) {
              var r;
              return (
                e.su(),
                new am(
                  t,
                  e.connection,
                  e.authCredentials,
                  e.appCheckCredentials,
                  e.It,
                  n
                )
              );
            })(e.datastore, e.asyncQueue, {
              Yr: aD.bind(null, e),
              Zr: aO.bind(null, e),
              Wo: aL.bind(null, e)
            })),
            e.wu.push(async (t) => {
              t
                ? (e.pu.Mo(), aA(e) ? aC(e) : e.gu.set('Unknown'))
                : (await e.pu.stop(), aN(e));
            })),
          e.pu
        );
      }
      function aW(e) {
        return (
          e.Iu ||
            ((e.Iu = (function (e, t, n) {
              var r;
              return (
                e.su(),
                new ag(
                  t,
                  e.connection,
                  e.authCredentials,
                  e.appCheckCredentials,
                  e.It,
                  n
                )
              );
            })(e.datastore, e.asyncQueue, {
              Yr: aj.bind(null, e),
              Zr: az.bind(null, e),
              tu: aq.bind(null, e),
              Zo: a$.bind(null, e)
            })),
            e.wu.push(async (t) => {
              t
                ? (e.Iu.Mo(), await aM(e))
                : (await e.Iu.stop(),
                  e.fu.length > 0 &&
                    (nK(
                      'RemoteStore',
                      `Stopping write stream with ${e.fu.length} pending writes`
                    ),
                    (e.fu = [])));
            })),
          e.Iu
        );
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class aQ {
        constructor(e, t, n, r, i) {
          (this.asyncQueue = e),
            (this.timerId = t),
            (this.targetTimeMs = n),
            (this.op = r),
            (this.removalCallback = i),
            (this.deferred = new nZ()),
            (this.then = this.deferred.promise.then.bind(
              this.deferred.promise
            )),
            this.deferred.promise.catch((e) => {});
        }
        static createAndSchedule(e, t, n, r, i) {
          let s = Date.now() + n,
            a = new aQ(e, t, s, r, i);
          return a.start(n), a;
        }
        start(e) {
          this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
        }
        skipDelay() {
          return this.handleDelayElapsed();
        }
        cancel(e) {
          null !== this.timerHandle &&
            (this.clearTimeout(),
            this.deferred.reject(
              new nY(nJ.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))
            ));
        }
        handleDelayElapsed() {
          this.asyncQueue.enqueueAndForget(() =>
            null !== this.timerHandle
              ? (this.clearTimeout(),
                this.op().then((e) => this.deferred.resolve(e)))
              : Promise.resolve()
          );
        }
        clearTimeout() {
          null !== this.timerHandle &&
            (this.removalCallback(this),
            clearTimeout(this.timerHandle),
            (this.timerHandle = null));
        }
      }
      function aX(e, t) {
        if ((nG('AsyncQueue', `${t}: ${e}`), rm(e)))
          return new nY(nJ.UNAVAILABLE, `${t}: ${e}`);
        throw e;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class aJ {
        constructor(e) {
          (this.comparator = e
            ? (t, n) => e(t, n) || rl.comparator(t.key, n.key)
            : (e, t) => rl.comparator(e.key, t.key)),
            (this.keyedMap = se()),
            (this.sortedSet = new r_(this.comparator));
        }
        static emptySet(e) {
          return new aJ(e.comparator);
        }
        has(e) {
          return null != this.keyedMap.get(e);
        }
        get(e) {
          return this.keyedMap.get(e);
        }
        first() {
          return this.sortedSet.minKey();
        }
        last() {
          return this.sortedSet.maxKey();
        }
        isEmpty() {
          return this.sortedSet.isEmpty();
        }
        indexOf(e) {
          let t = this.keyedMap.get(e);
          return t ? this.sortedSet.indexOf(t) : -1;
        }
        get size() {
          return this.sortedSet.size;
        }
        forEach(e) {
          this.sortedSet.inorderTraversal((t, n) => (e(t), !1));
        }
        add(e) {
          let t = this.delete(e.key);
          return t.copy(
            t.keyedMap.insert(e.key, e),
            t.sortedSet.insert(e, null)
          );
        }
        delete(e) {
          let t = this.get(e);
          return t
            ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
            : this;
        }
        isEqual(e) {
          if (!(e instanceof aJ) || this.size !== e.size) return !1;
          let t = this.sortedSet.getIterator(),
            n = e.sortedSet.getIterator();
          for (; t.hasNext(); ) {
            let r = t.getNext().key,
              i = n.getNext().key;
            if (!r.isEqual(i)) return !1;
          }
          return !0;
        }
        toString() {
          let e = [];
          return (
            this.forEach((t) => {
              e.push(t.toString());
            }),
            0 === e.length
              ? 'DocumentSet ()'
              : 'DocumentSet (\n  ' + e.join('  \n') + '\n)'
          );
        }
        copy(e, t) {
          let n = new aJ();
          return (
            (n.comparator = this.comparator),
            (n.keyedMap = e),
            (n.sortedSet = t),
            n
          );
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class aY {
        constructor() {
          this.Tu = new r_(rl.comparator);
        }
        track(e) {
          let t = e.doc.key,
            n = this.Tu.get(t);
          n
            ? 0 !== e.type && 3 === n.type
              ? (this.Tu = this.Tu.insert(t, e))
              : 3 === e.type && 1 !== n.type
              ? (this.Tu = this.Tu.insert(t, { type: n.type, doc: e.doc }))
              : 2 === e.type && 2 === n.type
              ? (this.Tu = this.Tu.insert(t, { type: 2, doc: e.doc }))
              : 2 === e.type && 0 === n.type
              ? (this.Tu = this.Tu.insert(t, { type: 0, doc: e.doc }))
              : 1 === e.type && 0 === n.type
              ? (this.Tu = this.Tu.remove(t))
              : 1 === e.type && 2 === n.type
              ? (this.Tu = this.Tu.insert(t, { type: 1, doc: n.doc }))
              : 0 === e.type && 1 === n.type
              ? (this.Tu = this.Tu.insert(t, { type: 2, doc: e.doc }))
              : nX()
            : (this.Tu = this.Tu.insert(t, e));
        }
        Eu() {
          let e = [];
          return (
            this.Tu.inorderTraversal((t, n) => {
              e.push(n);
            }),
            e
          );
        }
      }
      class aZ {
        constructor(e, t, n, r, i, s, a, o, l) {
          (this.query = e),
            (this.docs = t),
            (this.oldDocs = n),
            (this.docChanges = r),
            (this.mutatedKeys = i),
            (this.fromCache = s),
            (this.syncStateChanged = a),
            (this.excludesMetadataChanges = o),
            (this.hasCachedResults = l);
        }
        static fromInitialDocuments(e, t, n, r, i) {
          let s = [];
          return (
            t.forEach((e) => {
              s.push({ type: 0, doc: e });
            }),
            new aZ(e, t, aJ.emptySet(t), s, n, r, !0, !1, i)
          );
        }
        get hasPendingWrites() {
          return !this.mutatedKeys.isEmpty();
        }
        isEqual(e) {
          if (
            !(
              this.fromCache === e.fromCache &&
              this.hasCachedResults === e.hasCachedResults &&
              this.syncStateChanged === e.syncStateChanged &&
              this.mutatedKeys.isEqual(e.mutatedKeys) &&
              ib(this.query, e.query) &&
              this.docs.isEqual(e.docs) &&
              this.oldDocs.isEqual(e.oldDocs)
            )
          )
            return !1;
          let t = this.docChanges,
            n = e.docChanges;
          if (t.length !== n.length) return !1;
          for (let r = 0; r < t.length; r++)
            if (t[r].type !== n[r].type || !t[r].doc.isEqual(n[r].doc))
              return !1;
          return !0;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class a0 {
        constructor() {
          (this.Au = void 0), (this.listeners = []);
        }
      }
      class a1 {
        constructor() {
          (this.queries = new i5((e) => iT(e), ib)),
            (this.onlineState = 'Unknown'),
            (this.Ru = new Set());
        }
      }
      async function a2(e, t) {
        var n;
        let r = t.query,
          i = !1,
          s = e.queries.get(r);
        if ((s || ((i = !0), (s = new a0())), i))
          try {
            s.Au = await e.onListen(r);
          } catch (o) {
            let a = aX(o, `Initialization of query '${iI(t.query)}' failed`);
            return void t.onError(a);
          }
        e.queries.set(r, s),
          s.listeners.push(t),
          t.bu(e.onlineState),
          s.Au && t.Pu(s.Au) && a9(e);
      }
      async function a4(e, t) {
        var n;
        let r = t.query,
          i = !1,
          s = e.queries.get(r);
        if (s) {
          let a = s.listeners.indexOf(t);
          a >= 0 && (s.listeners.splice(a, 1), (i = 0 === s.listeners.length));
        }
        if (i) return e.queries.delete(r), e.onUnlisten(r);
      }
      function a3(e, t) {
        var n;
        let r = !1;
        for (let i of t) {
          let s = i.query,
            a = e.queries.get(s);
          if (a) {
            for (let o of a.listeners) o.Pu(i) && (r = !0);
            a.Au = i;
          }
        }
        r && a9(e);
      }
      function a6(e, t, n) {
        var r;
        let i = e.queries.get(t);
        if (i) for (let s of i.listeners) s.onError(n);
        e.queries.delete(t);
      }
      function a9(e) {
        e.Ru.forEach((e) => {
          e.next();
        });
      }
      class a5 {
        constructor(e, t, n) {
          (this.query = e),
            (this.vu = t),
            (this.Vu = !1),
            (this.Su = null),
            (this.onlineState = 'Unknown'),
            (this.options = n || {});
        }
        Pu(e) {
          if (!this.options.includeMetadataChanges) {
            let t = [];
            for (let n of e.docChanges) 3 !== n.type && t.push(n);
            e = new aZ(
              e.query,
              e.docs,
              e.oldDocs,
              t,
              e.mutatedKeys,
              e.fromCache,
              e.syncStateChanged,
              !0,
              e.hasCachedResults
            );
          }
          let r = !1;
          return (
            this.Vu
              ? this.Du(e) && (this.vu.next(e), (r = !0))
              : this.Cu(e, this.onlineState) && (this.xu(e), (r = !0)),
            (this.Su = e),
            r
          );
        }
        onError(e) {
          this.vu.error(e);
        }
        bu(e) {
          this.onlineState = e;
          let t = !1;
          return (
            this.Su &&
              !this.Vu &&
              this.Cu(this.Su, e) &&
              (this.xu(this.Su), (t = !0)),
            t
          );
        }
        Cu(e, t) {
          return (
            !e.fromCache ||
            ((!this.options.Nu || !('Offline' !== t)) &&
              (!e.docs.isEmpty() || e.hasCachedResults || 'Offline' === t))
          );
        }
        Du(e) {
          if (e.docChanges.length > 0) return !0;
          let t = this.Su && this.Su.hasPendingWrites !== e.hasPendingWrites;
          return (
            !(!e.syncStateChanged && !t) &&
            !0 === this.options.includeMetadataChanges
          );
        }
        xu(e) {
          (e = aZ.fromInitialDocuments(
            e.query,
            e.docs,
            e.mutatedKeys,
            e.fromCache,
            e.hasCachedResults
          )),
            (this.Vu = !0),
            this.vu.next(e);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class a8 {
        constructor(e) {
          this.key = e;
        }
      }
      class a7 {
        constructor(e) {
          this.key = e;
        }
      }
      class oe {
        constructor(e, t) {
          (this.query = e),
            (this.Uu = t),
            (this.qu = null),
            (this.hasCachedResults = !1),
            (this.current = !1),
            (this.Ku = so()),
            (this.mutatedKeys = so()),
            (this.Gu = ik(e)),
            (this.Qu = new aJ(this.Gu));
        }
        get ju() {
          return this.Uu;
        }
        Wu(e, t) {
          let n = t ? t.zu : new aY(),
            r = t ? t.Qu : this.Qu,
            i = t ? t.mutatedKeys : this.mutatedKeys,
            s = r,
            a = !1,
            o =
              'F' === this.query.limitType && r.size === this.query.limit
                ? r.last()
                : null,
            l =
              'L' === this.query.limitType && r.size === this.query.limit
                ? r.first()
                : null;
          if (
            (e.inorderTraversal((e, t) => {
              let u = r.get(e),
                h = iE(this.query, t) ? t : null,
                c = !!u && this.mutatedKeys.has(u.key),
                d =
                  !!h &&
                  (h.hasLocalMutations ||
                    (this.mutatedKeys.has(h.key) && h.hasCommittedMutations)),
                f = !1;
              u && h
                ? u.data.isEqual(h.data)
                  ? c !== d && (n.track({ type: 3, doc: h }), (f = !0))
                  : this.Hu(u, h) ||
                    (n.track({ type: 2, doc: h }),
                    (f = !0),
                    ((o && this.Gu(h, o) > 0) || (l && 0 > this.Gu(h, l))) &&
                      (a = !0))
                : !u && h
                ? (n.track({ type: 0, doc: h }), (f = !0))
                : u &&
                  !h &&
                  (n.track({ type: 1, doc: u }),
                  (f = !0),
                  (o || l) && (a = !0)),
                f &&
                  (h
                    ? ((s = s.add(h)), (i = d ? i.add(e) : i.delete(e)))
                    : ((s = s.delete(e)), (i = i.delete(e))));
            }),
            null !== this.query.limit)
          )
            for (; s.size > this.query.limit; ) {
              let u = 'F' === this.query.limitType ? s.last() : s.first();
              (s = s.delete(u.key)),
                (i = i.delete(u.key)),
                n.track({ type: 1, doc: u });
            }
          return { Qu: s, zu: n, $i: a, mutatedKeys: i };
        }
        Hu(e, t) {
          return (
            e.hasLocalMutations &&
            t.hasCommittedMutations &&
            !t.hasLocalMutations
          );
        }
        applyChanges(e, t, n) {
          let r = this.Qu;
          (this.Qu = e.Qu), (this.mutatedKeys = e.mutatedKeys);
          let i = e.zu.Eu();
          i.sort(
            (e, t) =>
              (function (e, t) {
                let n = (e) => {
                  switch (e) {
                    case 0:
                      return 1;
                    case 2:
                    case 3:
                      return 2;
                    case 1:
                      return 0;
                    default:
                      return nX();
                  }
                };
                return n(e) - n(t);
              })(e.type, t.type) || this.Gu(e.doc, t.doc)
          ),
            this.Ju(n);
          let s = t ? this.Yu() : [],
            a = 0 === this.Ku.size && this.current ? 1 : 0,
            o = a !== this.qu;
          return ((this.qu = a), 0 !== i.length || o)
            ? {
                snapshot: new aZ(
                  this.query,
                  e.Qu,
                  r,
                  i,
                  e.mutatedKeys,
                  0 === a,
                  o,
                  !1,
                  !!n && n.resumeToken.approximateByteSize() > 0
                ),
                Xu: s
              }
            : { Xu: s };
        }
        bu(e) {
          return this.current && 'Offline' === e
            ? ((this.current = !1),
              this.applyChanges(
                {
                  Qu: this.Qu,
                  zu: new aY(),
                  mutatedKeys: this.mutatedKeys,
                  $i: !1
                },
                !1
              ))
            : { Xu: [] };
        }
        Zu(e) {
          return (
            !this.Uu.has(e) &&
            !!this.Qu.has(e) &&
            !this.Qu.get(e).hasLocalMutations
          );
        }
        Ju(e) {
          e &&
            (e.addedDocuments.forEach((e) => (this.Uu = this.Uu.add(e))),
            e.modifiedDocuments.forEach((e) => {}),
            e.removedDocuments.forEach((e) => (this.Uu = this.Uu.delete(e))),
            (this.current = e.current));
        }
        Yu() {
          if (!this.current) return [];
          let e = this.Ku;
          (this.Ku = so()),
            this.Qu.forEach((e) => {
              this.Zu(e.key) && (this.Ku = this.Ku.add(e.key));
            });
          let t = [];
          return (
            e.forEach((e) => {
              this.Ku.has(e) || t.push(new a7(e));
            }),
            this.Ku.forEach((n) => {
              e.has(n) || t.push(new a8(n));
            }),
            t
          );
        }
        tc(e) {
          (this.Uu = e.Hi), (this.Ku = so());
          let t = this.Wu(e.documents);
          return this.applyChanges(t, !0);
        }
        ec() {
          return aZ.fromInitialDocuments(
            this.query,
            this.Qu,
            this.mutatedKeys,
            0 === this.qu,
            this.hasCachedResults
          );
        }
      }
      class ot {
        constructor(e, t, n) {
          (this.query = e), (this.targetId = t), (this.view = n);
        }
      }
      class on {
        constructor(e) {
          (this.key = e), (this.nc = !1);
        }
      }
      class or {
        constructor(e, t, n, r, i, s) {
          (this.localStore = e),
            (this.remoteStore = t),
            (this.eventManager = n),
            (this.sharedClientState = r),
            (this.currentUser = i),
            (this.maxConcurrentLimboResolutions = s),
            (this.sc = {}),
            (this.ic = new i5((e) => iT(e), ib)),
            (this.rc = new Map()),
            (this.oc = new Set()),
            (this.uc = new r_(rl.comparator)),
            (this.cc = new Map()),
            (this.ac = new sJ()),
            (this.hc = {}),
            (this.lc = new Map()),
            (this.fc = sH.vn()),
            (this.onlineState = 'Unknown'),
            (this.dc = void 0);
        }
        get isPrimaryClient() {
          return !0 === this.dc;
        }
      }
      async function oi(e, t) {
        let n = (function (e) {
            var t;
            let n = e;
            return (
              (n.remoteStore.remoteSyncer.applyRemoteEvent = ol.bind(null, n)),
              (n.remoteStore.remoteSyncer.getRemoteKeysForTarget = oT.bind(
                null,
                n
              )),
              (n.remoteStore.remoteSyncer.rejectListen = oh.bind(null, n)),
              (n.sc.Wo = a3.bind(null, n.eventManager)),
              (n.sc.wc = a6.bind(null, n.eventManager)),
              n
            );
          })(e),
          r,
          i,
          s = n.ic.get(t);
        if (s)
          (r = s.targetId),
            n.sharedClientState.addLocalQueryTarget(r),
            (i = s.view.ec());
        else {
          let a = await (function (e, t) {
            var n;
            let r = e;
            return r.persistence
              .runTransaction('Allocate target', 'readwrite', (e) => {
                let n;
                return r.Cs.getTargetData(e, t).next((i) =>
                  i
                    ? ((n = i), rp.resolve(n))
                    : r.Cs.allocateTargetId(e).next(
                        (i) => (
                          (n = new sV(t, i, 0, e.currentSequenceNumber)),
                          r.Cs.addTargetData(e, n).next(() => n)
                        )
                      )
                );
              })
              .then((e) => {
                let n = r.Ui.get(e.targetId);
                return (
                  (null === n ||
                    e.snapshotVersion.compareTo(n.snapshotVersion) > 0) &&
                    ((r.Ui = r.Ui.insert(e.targetId, e)),
                    r.qi.set(t, e.targetId)),
                  e
                );
              });
          })(n.localStore, iw(t));
          n.isPrimaryClient && aI(n.remoteStore, a);
          let o = n.sharedClientState.addLocalQueryTarget(a.targetId);
          i = await os(n, t, (r = a.targetId), 'current' === o, a.resumeToken);
        }
        return i;
      }
      async function os(e, t, n, r, i) {
        e._c = (t, n, r) =>
          (async function (e, t, n, r) {
            let i = t.view.Wu(n);
            i.$i &&
              (i = await ar(e.localStore, t.query, !1).then(
                ({ documents: e }) => t.view.Wu(e, i)
              ));
            let s = r && r.targetChanges.get(t.targetId),
              a = t.view.applyChanges(i, e.isPrimaryClient, s);
            return oy(e, t.targetId, a.Xu), a.snapshot;
          })(e, t, n, r);
        let s = await ar(e.localStore, t, !0),
          a = new oe(t, s.Hi),
          o = a.Wu(s.documents),
          l = sh.createSynthesizedTargetChangeForCurrentChange(
            n,
            r && 'Offline' !== e.onlineState,
            i
          ),
          u = a.applyChanges(o, e.isPrimaryClient, l);
        oy(e, n, u.Xu);
        let h = new ot(t, n, a);
        return (
          e.ic.set(t, h),
          e.rc.has(n) ? e.rc.get(n).push(t) : e.rc.set(n, [t]),
          u.snapshot
        );
      }
      async function oa(e, t) {
        var n;
        let r = e.ic.get(t),
          i = e.rc.get(r.targetId);
        if (i.length > 1)
          return (
            e.rc.set(
              r.targetId,
              i.filter((e) => !ib(e, t))
            ),
            void e.ic.delete(t)
          );
        e.isPrimaryClient
          ? (e.sharedClientState.removeLocalQueryTarget(r.targetId),
            e.sharedClientState.isActiveQueryTarget(r.targetId) ||
              (await an(e.localStore, r.targetId, !1)
                .then(() => {
                  e.sharedClientState.clearQueryState(r.targetId),
                    aE(e.remoteStore, r.targetId),
                    om(e, r.targetId);
                })
                .catch(rf)))
          : (om(e, r.targetId), await an(e.localStore, r.targetId, !0));
      }
      async function oo(e, t, n) {
        let r = (function (e) {
          var t;
          let n = e;
          return (
            (n.remoteStore.remoteSyncer.applySuccessfulWrite = oc.bind(
              null,
              n
            )),
            (n.remoteStore.remoteSyncer.rejectFailedWrite = od.bind(null, n)),
            n
          );
        })(e);
        try {
          var i, s, a;
          let o = await (function (e, t) {
              var n;
              let r = rn.now(),
                i = t.reduce((e, t) => e.add(t.key), so()),
                s,
                a;
              return e.persistence
                .runTransaction('Locally write mutations', 'readwrite', (n) => {
                  let o = i8,
                    l = so();
                  return e.Gi.getEntries(n, i)
                    .next((e) => {
                      (o = e).forEach((e, t) => {
                        t.isValidDocument() || (l = l.add(e));
                      });
                    })
                    .next(() => e.localDocuments.getOverlayedDocuments(n, o))
                    .next((i) => {
                      s = i;
                      let a = [];
                      for (let o of t) {
                        let l = iX(o, s.get(o.key).overlayedDocument);
                        null != l &&
                          a.push(
                            new iZ(
                              o.key,
                              l,
                              rZ(l.value.mapValue),
                              iz.exists(!0)
                            )
                          );
                      }
                      return e.mutationQueue.addMutationBatch(n, r, a, t);
                    })
                    .next((t) => {
                      a = t;
                      let r = t.applyToLocalDocumentSet(s, l);
                      return e.documentOverlayCache.saveOverlays(
                        n,
                        t.batchId,
                        r
                      );
                    });
                })
                .then(() => ({ batchId: a.batchId, changes: st(s) }));
            })(r.localStore, t),
            l;
          r.sharedClientState.addPendingMutation(o.batchId),
            (i = r),
            (s = o.batchId),
            (l = i.hc[i.currentUser.toKey()]) || (l = new r_(re)),
            (l = l.insert(s, n)),
            (i.hc[i.currentUser.toKey()] = l),
            await o_(r, o.changes),
            await aM(r.remoteStore);
        } catch (h) {
          let u = aX(h, 'Failed to persist write');
          n.reject(u);
        }
      }
      async function ol(e, t) {
        var n;
        try {
          let r = await (function (e, t) {
            var n;
            let r = e,
              i = t.snapshotVersion,
              s = r.Ui;
            return r.persistence
              .runTransaction(
                'Apply remote event',
                'readwrite-primary',
                (e) => {
                  var n, a, o;
                  let l = r.Gi.newChangeBuffer({ trackRemovals: !0 });
                  s = r.Ui;
                  let u = [];
                  t.targetChanges.forEach((n, a) => {
                    var o, l, h;
                    let c = s.get(a);
                    if (!c) return;
                    u.push(
                      r.Cs.removeMatchingKeys(e, n.removedDocuments, a).next(
                        () => r.Cs.addMatchingKeys(e, n.addedDocuments, a)
                      )
                    );
                    let d = c.withSequenceNumber(e.currentSequenceNumber);
                    t.targetMismatches.has(a)
                      ? (d = d
                          .withResumeToken(rS.EMPTY_BYTE_STRING, rr.min())
                          .withLastLimboFreeSnapshotVersion(rr.min()))
                      : n.resumeToken.approximateByteSize() > 0 &&
                        (d = d.withResumeToken(n.resumeToken, i)),
                      (s = s.insert(a, d)),
                      (l = d),
                      (0 === c.resumeToken.approximateByteSize() ||
                        l.snapshotVersion.toMicroseconds() -
                          c.snapshotVersion.toMicroseconds() >=
                          3e8 ||
                        n.addedDocuments.size +
                          n.modifiedDocuments.size +
                          n.removedDocuments.size >
                          0) &&
                        u.push(r.Cs.updateTargetData(e, d));
                  });
                  let h = i8,
                    c = so(),
                    d,
                    f;
                  if (
                    (t.documentUpdates.forEach((n) => {
                      t.resolvedLimboDocuments.has(n) &&
                        u.push(
                          r.persistence.referenceDelegate.updateLimboDocument(
                            e,
                            n
                          )
                        );
                    }),
                    u.push(
                      ((n = e),
                      (a = l),
                      (o = t.documentUpdates),
                      (d = so()),
                      (f = so()),
                      o.forEach((e) => (d = d.add(e))),
                      a.getEntries(n, d).next((e) => {
                        let t = i8;
                        return (
                          o.forEach((n, r) => {
                            let i = e.get(n);
                            r.isFoundDocument() !== i.isFoundDocument() &&
                              (f = f.add(n)),
                              r.isNoDocument() && r.version.isEqual(rr.min())
                                ? (a.removeEntry(n, r.readTime),
                                  (t = t.insert(n, r)))
                                : !i.isValidDocument() ||
                                  r.version.compareTo(i.version) > 0 ||
                                  (0 === r.version.compareTo(i.version) &&
                                    i.hasPendingWrites)
                                ? (a.addEntry(r), (t = t.insert(n, r)))
                                : nK(
                                    'LocalStore',
                                    'Ignoring outdated watch update for ',
                                    n,
                                    '. Current version:',
                                    i.version,
                                    ' Watch version:',
                                    r.version
                                  );
                          }),
                          { Wi: t, zi: f }
                        );
                      })).next((e) => {
                        (h = e.Wi), (c = e.zi);
                      })
                    ),
                    !i.isEqual(rr.min()))
                  ) {
                    let p = r.Cs.getLastRemoteSnapshotVersion(e).next((t) =>
                      r.Cs.setTargetsMetadata(e, e.currentSequenceNumber, i)
                    );
                    u.push(p);
                  }
                  return rp
                    .waitFor(u)
                    .next(() => l.apply(e))
                    .next(() =>
                      r.localDocuments.getLocalViewOfDocuments(e, h, c)
                    )
                    .next(() => h);
                }
              )
              .then((e) => ((r.Ui = s), e));
          })(e.localStore, t);
          t.targetChanges.forEach((t, n) => {
            var r, i, s;
            let a = e.cc.get(n);
            a &&
              (t.addedDocuments.size +
                t.modifiedDocuments.size +
                t.removedDocuments.size <=
                1 || nX(),
              t.addedDocuments.size > 0
                ? (a.nc = !0)
                : t.modifiedDocuments.size > 0
                ? (i = a.nc) || nX()
                : t.removedDocuments.size > 0 && (a.nc || nX(), (a.nc = !1)));
          }),
            await o_(e, r, t);
        } catch (i) {
          await rf(i);
        }
      }
      function ou(e, t, n) {
        var r;
        let i = e;
        if ((i.isPrimaryClient && 0 === n) || (!i.isPrimaryClient && 1 === n)) {
          let s = [];
          i.ic.forEach((e, n) => {
            let r = n.view.bu(t);
            r.snapshot && s.push(r.snapshot);
          }),
            (function (e, t) {
              var n;
              let r = e;
              r.onlineState = t;
              let i = !1;
              r.queries.forEach((e, n) => {
                for (let r of n.listeners) r.bu(t) && (i = !0);
              }),
                i && a9(r);
            })(i.eventManager, t),
            s.length && i.sc.Wo(s),
            (i.onlineState = t),
            i.isPrimaryClient && i.sharedClientState.setOnlineState(t);
        }
      }
      async function oh(e, t, n) {
        var r;
        let i = e;
        i.sharedClientState.updateQueryState(t, 'rejected', n);
        let s = i.cc.get(t),
          a = s && s.key;
        if (a) {
          let o = new r_(rl.comparator);
          o = o.insert(a, r0.newNoDocument(a, rr.min()));
          let l = so().add(a),
            u = new su(rr.min(), new Map(), new rI(re), o, l);
          await ol(i, u), (i.uc = i.uc.remove(a)), i.cc.delete(t), ow(i);
        } else
          await an(i.localStore, t, !1)
            .then(() => om(i, t, n))
            .catch(rf);
      }
      async function oc(e, t) {
        var n;
        let r = t.batch.batchId;
        try {
          let i = await (function (e, t) {
            var n;
            return e.persistence.runTransaction(
              'Acknowledge batch',
              'readwrite-primary',
              (n) => {
                let r = t.batch.keys(),
                  i = e.Gi.newChangeBuffer({ trackRemovals: !0 });
                return (function (e, t, n, r) {
                  let i = n.batch,
                    s = i.keys(),
                    a = rp.resolve();
                  return (
                    s.forEach((e) => {
                      a = a
                        .next(() => r.getEntry(t, e))
                        .next((t) => {
                          let s = n.docVersions.get(e);
                          null !== s || nX(),
                            0 > t.version.compareTo(s) &&
                              (i.applyToRemoteDocument(t, n),
                              t.isValidDocument() &&
                                (t.setReadTime(n.commitVersion),
                                r.addEntry(t)));
                        });
                    }),
                    a.next(() => e.mutationQueue.removeMutationBatch(t, i))
                  );
                })(e, n, t, i)
                  .next(() => i.apply(n))
                  .next(() => e.mutationQueue.performConsistencyCheck(n))
                  .next(() =>
                    e.documentOverlayCache.removeOverlaysForBatchId(
                      n,
                      r,
                      t.batch.batchId
                    )
                  )
                  .next(() =>
                    e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                      n,
                      (function (e) {
                        let t = so();
                        for (let n = 0; n < e.mutationResults.length; ++n)
                          e.mutationResults[n].transformResults.length > 0 &&
                            (t = t.add(e.batch.mutations[n].key));
                        return t;
                      })(t)
                    )
                  )
                  .next(() => e.localDocuments.getDocuments(n, r));
              }
            );
          })(e.localStore, t);
          op(e, r, null),
            of(e, r),
            e.sharedClientState.updateMutationState(r, 'acknowledged'),
            await o_(e, i);
        } catch (s) {
          await rf(s);
        }
      }
      async function od(e, t, n) {
        var r;
        try {
          let i = await (function (e, t) {
            var n;
            return e.persistence.runTransaction(
              'Reject batch',
              'readwrite-primary',
              (n) => {
                let r;
                return e.mutationQueue
                  .lookupMutationBatch(n, t)
                  .next(
                    (t) => (
                      null !== t || nX(),
                      (r = t.keys()),
                      e.mutationQueue.removeMutationBatch(n, t)
                    )
                  )
                  .next(() => e.mutationQueue.performConsistencyCheck(n))
                  .next(() =>
                    e.documentOverlayCache.removeOverlaysForBatchId(n, r, t)
                  )
                  .next(() =>
                    e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                      n,
                      r
                    )
                  )
                  .next(() => e.localDocuments.getDocuments(n, r));
              }
            );
          })(e.localStore, t);
          op(e, t, n),
            of(e, t),
            e.sharedClientState.updateMutationState(t, 'rejected', n),
            await o_(e, i);
        } catch (s) {
          await rf(s);
        }
      }
      function of(e, t) {
        (e.lc.get(t) || []).forEach((e) => {
          e.resolve();
        }),
          e.lc.delete(t);
      }
      function op(e, t, n) {
        var r;
        let i = e,
          s = i.hc[i.currentUser.toKey()];
        if (s) {
          let a = s.get(t);
          a && (n ? a.reject(n) : a.resolve(), (s = s.remove(t))),
            (i.hc[i.currentUser.toKey()] = s);
        }
      }
      function om(e, t, n = null) {
        for (let r of (e.sharedClientState.removeLocalQueryTarget(t),
        e.rc.get(t)))
          e.ic.delete(r), n && e.sc.wc(r, n);
        e.rc.delete(t),
          e.isPrimaryClient &&
            e.ac.ls(t).forEach((t) => {
              e.ac.containsKey(t) || og(e, t);
            });
      }
      function og(e, t) {
        e.oc.delete(t.path.canonicalString());
        let n = e.uc.get(t);
        null !== n &&
          (aE(e.remoteStore, n),
          (e.uc = e.uc.remove(t)),
          e.cc.delete(n),
          ow(e));
      }
      function oy(e, t, n) {
        for (let r of n)
          r instanceof a8
            ? (e.ac.addReference(r.key, t), ov(e, r))
            : r instanceof a7
            ? (nK('SyncEngine', 'Document no longer in limbo: ' + r.key),
              e.ac.removeReference(r.key, t),
              e.ac.containsKey(r.key) || og(e, r.key))
            : nX();
      }
      function ov(e, t) {
        let n = t.key,
          r = n.path.canonicalString();
        e.uc.get(n) ||
          e.oc.has(r) ||
          (nK('SyncEngine', 'New document in limbo: ' + n), e.oc.add(r), ow(e));
      }
      function ow(e) {
        for (; e.oc.size > 0 && e.uc.size < e.maxConcurrentLimboResolutions; ) {
          let t = e.oc.values().next().value;
          e.oc.delete(t);
          let n = new rl(rs.fromString(t)),
            r = e.fc.next();
          e.cc.set(r, new on(n)),
            (e.uc = e.uc.insert(n, r)),
            aI(e.remoteStore, new sV(iw(id(n.path)), r, 2, rg.at));
        }
      }
      async function o_(e, t, n) {
        var r;
        let i = [],
          s = [],
          a = [];
        e.ic.isEmpty() ||
          (e.ic.forEach((r, o) => {
            a.push(
              e._c(o, t, n).then((t) => {
                if (
                  ((t || n) &&
                    e.isPrimaryClient &&
                    e.sharedClientState.updateQueryState(
                      o.targetId,
                      (null == t ? void 0 : t.fromCache)
                        ? 'not-current'
                        : 'current'
                    ),
                  t)
                ) {
                  i.push(t);
                  let r = s9.Ci(o.targetId, t);
                  s.push(r);
                }
              })
            );
          }),
          await Promise.all(a),
          e.sc.Wo(i),
          await (async function (e, t) {
            var n;
            let r = e;
            try {
              await r.persistence.runTransaction(
                'notifyLocalViewChanges',
                'readwrite',
                (e) =>
                  rp.forEach(t, (t) =>
                    rp
                      .forEach(t.Si, (n) =>
                        r.persistence.referenceDelegate.addReference(
                          e,
                          t.targetId,
                          n
                        )
                      )
                      .next(() =>
                        rp.forEach(t.Di, (n) =>
                          r.persistence.referenceDelegate.removeReference(
                            e,
                            t.targetId,
                            n
                          )
                        )
                      )
                  )
              );
            } catch (i) {
              if (!rm(i)) throw i;
              nK('LocalStore', 'Failed to update sequence numbers: ' + i);
            }
            for (let s of t) {
              let a = s.targetId;
              if (!s.fromCache) {
                let o = r.Ui.get(a),
                  l = o.snapshotVersion,
                  u = o.withLastLimboFreeSnapshotVersion(l);
                r.Ui = r.Ui.insert(a, u);
              }
            }
          })(e.localStore, s));
      }
      async function ob(e, t) {
        var n, r, i;
        let s = e;
        if (!s.currentUser.isEqual(t)) {
          nK('SyncEngine', 'User change. New user:', t.toKey());
          let a = await s7(s.localStore, t);
          (s.currentUser = t),
            (i =
              "'waitForPendingWrites' promise is rejected due to a user change."),
            (r = s).lc.forEach((e) => {
              e.forEach((e) => {
                e.reject(new nY(nJ.CANCELLED, i));
              });
            }),
            r.lc.clear(),
            s.sharedClientState.handleUserChange(
              t,
              a.removedBatchIds,
              a.addedBatchIds
            ),
            await o_(s, a.ji);
        }
      }
      function oT(e, t) {
        var n;
        let r = e.cc.get(t);
        if (r && r.nc) return so().add(r.key);
        {
          let i = so(),
            s = e.rc.get(t);
          if (!s) return i;
          for (let a of s) {
            let o = e.ic.get(a);
            i = i.unionWith(o.view.ju);
          }
          return i;
        }
      }
      class oI {
        constructor() {
          this.synchronizeTabs = !1;
        }
        async initialize(e) {
          (this.It = ad(e.databaseInfo.databaseId)),
            (this.sharedClientState = this.gc(e)),
            (this.persistence = this.yc(e)),
            await this.persistence.start(),
            (this.localStore = this.Ic(e)),
            (this.gcScheduler = this.Tc(e, this.localStore)),
            (this.indexBackfillerScheduler = this.Ec(e, this.localStore));
        }
        Tc(e, t) {
          return null;
        }
        Ec(e, t) {
          return null;
        }
        Ic(e) {
          var t, n, r, i;
          return (
            (t = this.persistence),
            (n = new s5()),
            (r = e.initialUser),
            (i = this.It),
            new s8(t, n, r, i)
          );
        }
        yc(e) {
          return new s4(s6.Bs, this.It);
        }
        gc(e) {
          return new as();
        }
        async terminate() {
          this.gcScheduler && this.gcScheduler.stop(),
            await this.sharedClientState.shutdown(),
            await this.persistence.shutdown();
        }
      }
      class oE {
        async initialize(e, t) {
          this.localStore ||
            ((this.localStore = e.localStore),
            (this.sharedClientState = e.sharedClientState),
            (this.datastore = this.createDatastore(t)),
            (this.remoteStore = this.createRemoteStore(t)),
            (this.eventManager = this.createEventManager(t)),
            (this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
            (this.sharedClientState.onlineStateHandler = (e) =>
              ou(this.syncEngine, e, 1)),
            (this.remoteStore.remoteSyncer.handleCredentialChange = ob.bind(
              null,
              this.syncEngine
            )),
            await aK(this.remoteStore, this.syncEngine.isPrimaryClient));
        }
        createEventManager(e) {
          return new a1();
        }
        createDatastore(e) {
          var t, n, r, i, s;
          let a = ad(e.databaseInfo.databaseId),
            o = ((t = e.databaseInfo), new ah(t));
          return (
            (n = e.authCredentials),
            (r = e.appCheckCredentials),
            new ay(n, r, o, a)
          );
        }
        createRemoteStore(e) {
          var t, n, r, i, s;
          return (
            (t = this.localStore),
            (n = this.datastore),
            (r = e.asyncQueue),
            (i = (e) => ou(this.syncEngine, e, 0)),
            (s = ao.C() ? new ao() : new aa()),
            new a_(t, n, r, i, s)
          );
        }
        createSyncEngine(e, t) {
          return (function (e, t, n, r, i, s, a) {
            let o = new or(e, t, n, r, i, s);
            return a && (o.dc = !0), o;
          })(
            this.localStore,
            this.remoteStore,
            this.eventManager,
            this.sharedClientState,
            e.initialUser,
            e.maxConcurrentLimboResolutions,
            t
          );
        }
        terminate() {
          return (async function (e) {
            var t;
            nK('RemoteStore', 'RemoteStore shutting down.'),
              e._u.add(5),
              await aT(e),
              e.mu.shutdown(),
              e.gu.set('Unknown');
          })(this.remoteStore);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function ok(e, t, n) {
        if (!n)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Function ${e}() cannot be called with an empty ${t}.`
          );
      }
      function oS(e) {
        if (!rl.isDocumentKey(e))
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`
          );
      }
      function oC(e) {
        if (rl.isDocumentKey(e))
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`
          );
      }
      function oA(e) {
        if (void 0 === e) return 'undefined';
        if (null === e) return 'null';
        if ('string' == typeof e)
          return (
            e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e)
          );
        if ('number' == typeof e || 'boolean' == typeof e) return '' + e;
        if ('object' == typeof e) {
          if (e instanceof Array) return 'an array';
          {
            var t;
            let n = (t = e).constructor ? t.constructor.name : null;
            return n ? `a custom ${n} object` : 'an object';
          }
        }
        return 'function' == typeof e ? 'a function' : nX();
      }
      function oR(e, t) {
        if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
          if (t.name === e.constructor.name)
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
            );
          {
            let n = oA(e);
            throw new nY(
              nJ.INVALID_ARGUMENT,
              `Expected type '${t.name}', but it was: ${n}`
            );
          }
        }
        return e;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let oN = new Map();
      class oD {
        constructor(e) {
          var t;
          if (void 0 === e.host) {
            if (void 0 !== e.ssl)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                "Can't provide ssl option if host option is not set"
              );
            (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
          } else
            (this.host = e.host),
              (this.ssl = null === (t = e.ssl) || void 0 === t || t);
          if (
            ((this.credentials = e.credentials),
            (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
            void 0 === e.cacheSizeBytes)
          )
            this.cacheSizeBytes = 41943040;
          else {
            if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                'cacheSizeBytes must be at least 1048576'
              );
            this.cacheSizeBytes = e.cacheSizeBytes;
          }
          (this.experimentalForceLongPolling =
            !!e.experimentalForceLongPolling),
            (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
            (this.useFetchStreams = !!e.useFetchStreams),
            (function (e, t, n, r) {
              if (!0 === t && !0 === r)
                throw new nY(
                  nJ.INVALID_ARGUMENT,
                  `${e} and ${n} cannot be used together.`
                );
            })(
              'experimentalForceLongPolling',
              e.experimentalForceLongPolling,
              'experimentalAutoDetectLongPolling',
              e.experimentalAutoDetectLongPolling
            );
        }
        isEqual(e) {
          return (
            this.host === e.host &&
            this.ssl === e.ssl &&
            this.credentials === e.credentials &&
            this.cacheSizeBytes === e.cacheSizeBytes &&
            this.experimentalForceLongPolling ===
              e.experimentalForceLongPolling &&
            this.experimentalAutoDetectLongPolling ===
              e.experimentalAutoDetectLongPolling &&
            this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
            this.useFetchStreams === e.useFetchStreams
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class oO {
        constructor(e, t, n, r) {
          (this._authCredentials = e),
            (this._appCheckCredentials = t),
            (this._databaseId = n),
            (this._app = r),
            (this.type = 'firestore-lite'),
            (this._persistenceKey = '(lite)'),
            (this._settings = new oD({})),
            (this._settingsFrozen = !1);
        }
        get app() {
          if (!this._app)
            throw new nY(
              nJ.FAILED_PRECONDITION,
              "Firestore was not initialized using the Firebase SDK. 'app' is not available"
            );
          return this._app;
        }
        get _initialized() {
          return this._settingsFrozen;
        }
        get _terminated() {
          return void 0 !== this._terminateTask;
        }
        _setSettings(e) {
          if (this._settingsFrozen)
            throw new nY(
              nJ.FAILED_PRECONDITION,
              'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
            );
          (this._settings = new oD(e)),
            void 0 !== e.credentials &&
              (this._authCredentials = (function (e) {
                if (!e) return new n1();
                switch (e.type) {
                  case 'gapi':
                    let t = e.client;
                    return new n6(
                      t,
                      e.sessionIndex || '0',
                      e.iamToken || null,
                      e.authTokenFactory || null
                    );
                  case 'provider':
                    return e.client;
                  default:
                    throw new nY(
                      nJ.INVALID_ARGUMENT,
                      'makeAuthCredentialsProvider failed due to invalid credential type'
                    );
                }
              })(e.credentials));
        }
        _getSettings() {
          return this._settings;
        }
        _freezeSettings() {
          return (this._settingsFrozen = !0), this._settings;
        }
        _delete() {
          return (
            this._terminateTask || (this._terminateTask = this._terminate()),
            this._terminateTask
          );
        }
        toJSON() {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
          };
        }
        _terminate() {
          return (
            (function (e) {
              let t = oN.get(e);
              t &&
                (nK('ComponentProvider', 'Removing Datastore'),
                oN.delete(e),
                t.terminate());
            })(this),
            Promise.resolve()
          );
        }
      }
      function oL(e, t, n, r = {}) {
        var i;
        let s = (e = oR(e, oO))._getSettings();
        if (
          ('firestore.googleapis.com' !== s.host &&
            s.host !== t &&
            nW(
              'Host has been set in both settings() and useEmulator(), emulator host will be used'
            ),
          e._setSettings(
            Object.assign(Object.assign({}, s), { host: `${t}:${n}`, ssl: !1 })
          ),
          r.mockUserToken)
        ) {
          let a, o;
          if ('string' == typeof r.mockUserToken)
            (a = r.mockUserToken), (o = nq.MOCK_USER);
          else {
            a = (0, m.Sg)(
              r.mockUserToken,
              null === (i = e._app) || void 0 === i
                ? void 0
                : i.options.projectId
            );
            let l = r.mockUserToken.sub || r.mockUserToken.user_id;
            if (!l)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                "mockUserToken must contain 'sub' or 'user_id' field!"
              );
            o = new nq(l);
          }
          e._authCredentials = new n2(new n0(a, o));
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class oP {
        constructor(e, t, n) {
          (this.converter = t),
            (this._key = n),
            (this.type = 'document'),
            (this.firestore = e);
        }
        get _path() {
          return this._key.path;
        }
        get id() {
          return this._key.path.lastSegment();
        }
        get path() {
          return this._key.path.canonicalString();
        }
        get parent() {
          return new oM(
            this.firestore,
            this.converter,
            this._key.path.popLast()
          );
        }
        withConverter(e) {
          return new oP(this.firestore, e, this._key);
        }
      }
      class ox {
        constructor(e, t, n) {
          (this.converter = t),
            (this._query = n),
            (this.type = 'query'),
            (this.firestore = e);
        }
        withConverter(e) {
          return new ox(this.firestore, e, this._query);
        }
      }
      class oM extends ox {
        constructor(e, t, n) {
          super(e, t, id(n)), (this._path = n), (this.type = 'collection');
        }
        get id() {
          return this._query.path.lastSegment();
        }
        get path() {
          return this._query.path.canonicalString();
        }
        get parent() {
          let e = this._path.popLast();
          return e.isEmpty() ? null : new oP(this.firestore, null, new rl(e));
        }
        withConverter(e) {
          return new oM(this.firestore, e, this._path);
        }
      }
      function oU(e, t, ...n) {
        if (
          ((e = (0, m.m9)(e)), ok('collection', 'path', t), e instanceof oO)
        ) {
          let r = rs.fromString(t, ...n);
          return oC(r), new oM(e, null, r);
        }
        {
          if (!(e instanceof oP || e instanceof oM))
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
            );
          let i = e._path.child(rs.fromString(t, ...n));
          return oC(i), new oM(e.firestore, null, i);
        }
      }
      function oF(e, t, ...n) {
        if (
          ((e = (0, m.m9)(e)),
          1 === arguments.length && (t = n7.R()),
          ok('doc', 'path', t),
          e instanceof oO)
        ) {
          let r = rs.fromString(t, ...n);
          return oS(r), new oP(e, null, new rl(r));
        }
        {
          if (!(e instanceof oP || e instanceof oM))
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
            );
          let i = e._path.child(rs.fromString(t, ...n));
          return (
            oS(i),
            new oP(e.firestore, e instanceof oM ? e.converter : null, new rl(i))
          );
        }
      }
      function oV(e, t) {
        return (
          (e = (0, m.m9)(e)),
          (t = (0, m.m9)(t)),
          (e instanceof oP || e instanceof oM) &&
            (t instanceof oP || t instanceof oM) &&
            e.firestore === t.firestore &&
            e.path === t.path &&
            e.converter === t.converter
        );
      }
      function oB(e, t) {
        return (
          (e = (0, m.m9)(e)),
          (t = (0, m.m9)(t)),
          e instanceof ox &&
            t instanceof ox &&
            e.firestore === t.firestore &&
            ib(e._query, t._query) &&
            e.converter === t.converter
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class oj {
        constructor(e) {
          (this.observer = e), (this.muted = !1);
        }
        next(e) {
          this.observer.next && this.Rc(this.observer.next, e);
        }
        error(e) {
          this.observer.error
            ? this.Rc(this.observer.error, e)
            : nG('Uncaught Error in snapshot listener:', e);
        }
        bc() {
          this.muted = !0;
        }
        Rc(e, t) {
          this.muted ||
            setTimeout(() => {
              this.muted || e(t);
            }, 0);
        }
      }
      class oq {
        constructor(e, t) {
          (this._data = t),
            (this.type = 'AggregateQuerySnapshot'),
            (this.query = e);
        }
        data() {
          return this._data;
        }
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class o$ {
        constructor(e, t, n) {
          (this.query = e), (this.datastore = t), (this.userDataWriter = n);
        }
        run() {
          return av(this.datastore, this.query._query).then((e) => {
            var t;
            (t = void 0 !== e[0]) || nX();
            let n = Object.entries(e[0])
              .filter(([e, t]) => 'count_alias' === e)
              .map(([e, t]) => this.userDataWriter.convertValue(t))[0];
            return (
              'number' == typeof n || nX(),
              Promise.resolve(new oq(this.query, { count: n }))
            );
          });
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class oz {
        constructor(e, t, n, r) {
          (this.authCredentials = e),
            (this.appCheckCredentials = t),
            (this.asyncQueue = n),
            (this.databaseInfo = r),
            (this.user = nq.UNAUTHENTICATED),
            (this.clientId = n7.R()),
            (this.authCredentialListener = () => Promise.resolve()),
            (this.appCheckCredentialListener = () => Promise.resolve()),
            this.authCredentials.start(n, async (e) => {
              nK('FirestoreClient', 'Received user=', e.uid),
                await this.authCredentialListener(e),
                (this.user = e);
            }),
            this.appCheckCredentials.start(
              n,
              (e) => (
                nK('FirestoreClient', 'Received new app check token=', e),
                this.appCheckCredentialListener(e, this.user)
              )
            );
        }
        async getConfiguration() {
          return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
          };
        }
        setCredentialChangeListener(e) {
          this.authCredentialListener = e;
        }
        setAppCheckTokenChangeListener(e) {
          this.appCheckCredentialListener = e;
        }
        verifyNotTerminated() {
          if (this.asyncQueue.isShuttingDown)
            throw new nY(
              nJ.FAILED_PRECONDITION,
              'The client has already been terminated.'
            );
        }
        terminate() {
          this.asyncQueue.enterRestrictedMode();
          let e = new nZ();
          return (
            this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
              try {
                this.onlineComponents &&
                  (await this.onlineComponents.terminate()),
                  this.offlineComponents &&
                    (await this.offlineComponents.terminate()),
                  this.authCredentials.shutdown(),
                  this.appCheckCredentials.shutdown(),
                  e.resolve();
              } catch (n) {
                let t = aX(n, 'Failed to shutdown persistence');
                e.reject(t);
              }
            }),
            e.promise
          );
        }
      }
      async function oH(e, t) {
        e.asyncQueue.verifyOperationInProgress(),
          nK('FirestoreClient', 'Initializing OfflineComponentProvider');
        let n = await e.getConfiguration();
        await t.initialize(n);
        let r = n.initialUser;
        e.setCredentialChangeListener(async (e) => {
          r.isEqual(e) || (await s7(t.localStore, e), (r = e));
        }),
          t.persistence.setDatabaseDeletedListener(() => e.terminate()),
          (e.offlineComponents = t);
      }
      async function oK(e, t) {
        e.asyncQueue.verifyOperationInProgress();
        let n = await oG(e);
        nK('FirestoreClient', 'Initializing OnlineComponentProvider');
        let r = await e.getConfiguration();
        await t.initialize(n, r),
          e.setCredentialChangeListener((e) => aH(t.remoteStore, e)),
          e.setAppCheckTokenChangeListener((e, n) => aH(t.remoteStore, n)),
          (e.onlineComponents = t);
      }
      async function oG(e) {
        return (
          e.offlineComponents ||
            (nK('FirestoreClient', 'Using default OfflineComponentProvider'),
            await oH(e, new oI())),
          e.offlineComponents
        );
      }
      async function oW(e) {
        return (
          e.onlineComponents ||
            (nK('FirestoreClient', 'Using default OnlineComponentProvider'),
            await oK(e, new oE())),
          e.onlineComponents
        );
      }
      async function oQ(e) {
        let t = await oW(e),
          n = t.eventManager;
        return (
          (n.onListen = oi.bind(null, t.syncEngine)),
          (n.onUnlisten = oa.bind(null, t.syncEngine)),
          n
        );
      }
      class oX {
        constructor() {
          (this.Bc = Promise.resolve()),
            (this.Lc = []),
            (this.Uc = !1),
            (this.qc = []),
            (this.Kc = null),
            (this.Gc = !1),
            (this.Qc = !1),
            (this.jc = []),
            (this.xo = new af(this, 'async_queue_retry')),
            (this.Wc = () => {
              let e = ac();
              e &&
                nK(
                  'AsyncQueue',
                  'Visibility state changed to ' + e.visibilityState
                ),
                this.xo.Po();
            });
          let e = ac();
          e &&
            'function' == typeof e.addEventListener &&
            e.addEventListener('visibilitychange', this.Wc);
        }
        get isShuttingDown() {
          return this.Uc;
        }
        enqueueAndForget(e) {
          this.enqueue(e);
        }
        enqueueAndForgetEvenWhileRestricted(e) {
          this.zc(), this.Hc(e);
        }
        enterRestrictedMode(e) {
          if (!this.Uc) {
            (this.Uc = !0), (this.Qc = e || !1);
            let t = ac();
            t &&
              'function' == typeof t.removeEventListener &&
              t.removeEventListener('visibilitychange', this.Wc);
          }
        }
        enqueue(e) {
          if ((this.zc(), this.Uc)) return new Promise(() => {});
          let t = new nZ();
          return this.Hc(() =>
            this.Uc && this.Qc
              ? Promise.resolve()
              : (e().then(t.resolve, t.reject), t.promise)
          ).then(() => t.promise);
        }
        enqueueRetryable(e) {
          this.enqueueAndForget(() => (this.Lc.push(e), this.Jc()));
        }
        async Jc() {
          if (0 !== this.Lc.length) {
            try {
              await this.Lc[0](), this.Lc.shift(), this.xo.reset();
            } catch (e) {
              if (!rm(e)) throw e;
              nK('AsyncQueue', 'Operation failed with retryable error: ' + e);
            }
            this.Lc.length > 0 && this.xo.Ro(() => this.Jc());
          }
        }
        Hc(e) {
          let t = this.Bc.then(
            () => (
              (this.Gc = !0),
              e()
                .catch((e) => {
                  var t;
                  (this.Kc = e), (this.Gc = !1);
                  let n,
                    r =
                      ((n = e.message || ''),
                      e.stack &&
                        (n = e.stack.includes(e.message)
                          ? e.stack
                          : e.message + '\n' + e.stack),
                      n);
                  throw (nG('INTERNAL UNHANDLED ERROR: ', r), e);
                })
                .then((e) => ((this.Gc = !1), e))
            )
          );
          return (this.Bc = t), t;
        }
        enqueueAfterDelay(e, t, n) {
          this.zc(), this.jc.indexOf(e) > -1 && (t = 0);
          let r = aQ.createAndSchedule(this, e, t, n, (e) => this.Yc(e));
          return this.qc.push(r), r;
        }
        zc() {
          this.Kc && nX();
        }
        verifyOperationInProgress() {}
        async Xc() {
          let e;
          do await (e = this.Bc);
          while (e !== this.Bc);
        }
        Zc(e) {
          for (let t of this.qc) if (t.timerId === e) return !0;
          return !1;
        }
        ta(e) {
          return this.Xc().then(() => {
            for (let t of (this.qc.sort(
              (e, t) => e.targetTimeMs - t.targetTimeMs
            ),
            this.qc))
              if ((t.skipDelay(), 'all' !== e && t.timerId === e)) break;
            return this.Xc();
          });
        }
        ea(e) {
          this.jc.push(e);
        }
        Yc(e) {
          let t = this.qc.indexOf(e);
          this.qc.splice(t, 1);
        }
      }
      function oJ(e) {
        return (function (e, t) {
          if ('object' != typeof e || null === e) return !1;
          for (let n of t) if (n in e && 'function' == typeof e[n]) return !0;
          return !1;
        })(e, ['next', 'error', 'complete']);
      }
      class oY extends oO {
        constructor(e, t, n, r) {
          super(e, t, n, r),
            (this.type = 'firestore'),
            (this._queue = new oX()),
            (this._persistenceKey =
              (null == r ? void 0 : r.name) || '[DEFAULT]');
        }
        _terminate() {
          return (
            this._firestoreClient || o1(this), this._firestoreClient.terminate()
          );
        }
      }
      function oZ(e, t) {
        let n = 'object' == typeof e ? e : (0, d.Mq)(),
          r = (0, d.qX)(n, 'firestore').getImmediate({
            identifier: 'string' == typeof e ? e : t || '(default)'
          });
        if (!r._initialized) {
          let i = (0, m.P0)('firestore');
          i && oL(r, ...i);
        }
        return r;
      }
      function o0(e) {
        return (
          e._firestoreClient || o1(e),
          e._firestoreClient.verifyNotTerminated(),
          e._firestoreClient
        );
      }
      function o1(e) {
        var t, n, r, i, s;
        let a = e._freezeSettings(),
          o =
            ((n = e._databaseId),
            (r =
              (null === (t = e._app) || void 0 === t
                ? void 0
                : t.options.appId) || ''),
            (i = e._persistenceKey),
            new rL(
              n,
              r,
              i,
              a.host,
              a.ssl,
              a.experimentalForceLongPolling,
              a.experimentalAutoDetectLongPolling,
              a.useFetchStreams
            ));
        e._firestoreClient = new oz(
          e._authCredentials,
          e._appCheckCredentials,
          e._queue,
          o
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class o2 {
        constructor(e) {
          this._byteString = e;
        }
        static fromBase64String(e) {
          try {
            return new o2(rS.fromBase64String(e));
          } catch (t) {
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Failed to construct data from Base64 string: ' + t
            );
          }
        }
        static fromUint8Array(e) {
          return new o2(rS.fromUint8Array(e));
        }
        toBase64() {
          return this._byteString.toBase64();
        }
        toUint8Array() {
          return this._byteString.toUint8Array();
        }
        toString() {
          return 'Bytes(base64: ' + this.toBase64() + ')';
        }
        isEqual(e) {
          return this._byteString.isEqual(e._byteString);
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class o4 {
        constructor(...e) {
          for (let t = 0; t < e.length; ++t)
            if (0 === e[t].length)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                'Invalid field name at argument $(i + 1). Field names must not be empty.'
              );
          this._internalPath = new ro(e);
        }
        isEqual(e) {
          return this._internalPath.isEqual(e._internalPath);
        }
      }
      function o3() {
        return new o4('__name__');
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class o6 {
        constructor(e) {
          this._methodName = e;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class o9 {
        constructor(e, t) {
          if (!isFinite(e) || e < -90 || e > 90)
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Latitude must be a number between -90 and 90, but was: ' + e
            );
          if (!isFinite(t) || t < -180 || t > 180)
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Longitude must be a number between -180 and 180, but was: ' + t
            );
          (this._lat = e), (this._long = t);
        }
        get latitude() {
          return this._lat;
        }
        get longitude() {
          return this._long;
        }
        isEqual(e) {
          return this._lat === e._lat && this._long === e._long;
        }
        toJSON() {
          return { latitude: this._lat, longitude: this._long };
        }
        _compareTo(e) {
          return re(this._lat, e._lat) || re(this._long, e._long);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let o5 = /^__.*__$/;
      class o8 {
        constructor(e, t, n) {
          (this.data = e), (this.fieldMask = t), (this.fieldTransforms = n);
        }
        toMutation(e, t) {
          return null !== this.fieldMask
            ? new iZ(e, this.data, this.fieldMask, t, this.fieldTransforms)
            : new iY(e, this.data, t, this.fieldTransforms);
        }
      }
      class o7 {
        constructor(e, t, n) {
          (this.data = e), (this.fieldMask = t), (this.fieldTransforms = n);
        }
        toMutation(e, t) {
          return new iZ(e, this.data, this.fieldMask, t, this.fieldTransforms);
        }
      }
      function le(e) {
        switch (e) {
          case 0:
          case 2:
          case 1:
            return !0;
          case 3:
          case 4:
            return !1;
          default:
            throw nX();
        }
      }
      class lt {
        constructor(e, t, n, r, i, s) {
          (this.settings = e),
            (this.databaseId = t),
            (this.It = n),
            (this.ignoreUndefinedProperties = r),
            void 0 === i && this.na(),
            (this.fieldTransforms = i || []),
            (this.fieldMask = s || []);
        }
        get path() {
          return this.settings.path;
        }
        get sa() {
          return this.settings.sa;
        }
        ia(e) {
          return new lt(
            Object.assign(Object.assign({}, this.settings), e),
            this.databaseId,
            this.It,
            this.ignoreUndefinedProperties,
            this.fieldTransforms,
            this.fieldMask
          );
        }
        ra(e) {
          var t;
          let n =
              null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
            r = this.ia({ path: n, oa: !1 });
          return r.ua(e), r;
        }
        ca(e) {
          var t;
          let n =
              null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
            r = this.ia({ path: n, oa: !1 });
          return r.na(), r;
        }
        aa(e) {
          return this.ia({ path: void 0, oa: !0 });
        }
        ha(e) {
          return l_(
            e,
            this.settings.methodName,
            this.settings.la || !1,
            this.path,
            this.settings.fa
          );
        }
        contains(e) {
          return (
            void 0 !== this.fieldMask.find((t) => e.isPrefixOf(t)) ||
            void 0 !== this.fieldTransforms.find((t) => e.isPrefixOf(t.field))
          );
        }
        na() {
          if (this.path)
            for (let e = 0; e < this.path.length; e++)
              this.ua(this.path.get(e));
        }
        ua(e) {
          if (0 === e.length)
            throw this.ha('Document fields must not be empty');
          if (le(this.sa) && o5.test(e))
            throw this.ha('Document fields cannot begin and end with "__"');
        }
      }
      class ln {
        constructor(e, t, n) {
          (this.databaseId = e),
            (this.ignoreUndefinedProperties = t),
            (this.It = n || ad(e));
        }
        da(e, t, n, r = !1) {
          return new lt(
            {
              sa: e,
              methodName: t,
              fa: n,
              path: ro.emptyPath(),
              oa: !1,
              la: r
            },
            this.databaseId,
            this.It,
            this.ignoreUndefinedProperties
          );
        }
      }
      function lr(e) {
        let t = e._freezeSettings(),
          n = ad(e._databaseId);
        return new ln(e._databaseId, !!t.ignoreUndefinedProperties, n);
      }
      function li(e, t, n, r, i, s = {}) {
        let a = e.da(s.merge || s.mergeFields ? 2 : 0, t, n, i);
        lg('Data must be an object, but it was:', a, r);
        let o = lp(r, a),
          l,
          u;
        if (s.merge) (l = new rk(a.fieldMask)), (u = a.fieldTransforms);
        else if (s.mergeFields) {
          let h = [];
          for (let c of s.mergeFields) {
            let d = ly(t, c, n);
            if (!a.contains(d))
              throw new nY(
                nJ.INVALID_ARGUMENT,
                `Field '${d}' is specified in your field mask but missing from your input data.`
              );
            lb(h, d) || h.push(d);
          }
          (l = new rk(h)),
            (u = a.fieldTransforms.filter((e) => l.covers(e.field)));
        } else (l = null), (u = a.fieldTransforms);
        return new o8(new rY(o), l, u);
      }
      class ls extends o6 {
        _toFieldTransform(e) {
          if (2 !== e.sa)
            throw 1 === e.sa
              ? e.ha(
                  `${this._methodName}() can only appear at the top level of your update data`
                )
              : e.ha(
                  `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
                );
          return e.fieldMask.push(e.path), null;
        }
        isEqual(e) {
          return e instanceof ls;
        }
      }
      function la(e, t, n) {
        return new lt(
          { sa: 3, fa: t.settings.fa, methodName: e._methodName, oa: n },
          t.databaseId,
          t.It,
          t.ignoreUndefinedProperties
        );
      }
      class lo extends o6 {
        _toFieldTransform(e) {
          return new iq(e.path, new iP());
        }
        isEqual(e) {
          return e instanceof lo;
        }
      }
      class ll extends o6 {
        constructor(e, t) {
          super(e), (this._a = t);
        }
        _toFieldTransform(e) {
          let t = la(this, e, !0),
            n = this._a.map((e) => lf(e, t)),
            r = new ix(n);
          return new iq(e.path, r);
        }
        isEqual(e) {
          return this === e;
        }
      }
      class lu extends o6 {
        constructor(e, t) {
          super(e), (this._a = t);
        }
        _toFieldTransform(e) {
          let t = la(this, e, !0),
            n = this._a.map((e) => lf(e, t)),
            r = new iU(n);
          return new iq(e.path, r);
        }
        isEqual(e) {
          return this === e;
        }
      }
      class lh extends o6 {
        constructor(e, t) {
          super(e), (this.wa = t);
        }
        _toFieldTransform(e) {
          let t = new iV(e.It, iR(e.It, this.wa));
          return new iq(e.path, t);
        }
        isEqual(e) {
          return this === e;
        }
      }
      function lc(e, t, n, r) {
        let i = e.da(1, t, n);
        lg('Data must be an object, but it was:', i, r);
        let s = [],
          a = rY.empty();
        rv(r, (e, r) => {
          let o = lw(t, e, n);
          r = (0, m.m9)(r);
          let l = i.ca(o);
          if (r instanceof ls) s.push(o);
          else {
            let u = lf(r, l);
            null != u && (s.push(o), a.set(o, u));
          }
        });
        let o = new rk(s);
        return new o7(a, o, i.fieldTransforms);
      }
      function ld(e, t, n, r, i, s) {
        let a = e.da(1, t, n),
          o = [ly(t, r, n)],
          l = [i];
        if (s.length % 2 != 0)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`
          );
        for (let u = 0; u < s.length; u += 2)
          o.push(ly(t, s[u])), l.push(s[u + 1]);
        let h = [],
          c = rY.empty();
        for (let d = o.length - 1; d >= 0; --d)
          if (!lb(h, o[d])) {
            let f = o[d],
              p = l[d];
            p = (0, m.m9)(p);
            let g = a.ca(f);
            if (p instanceof ls) h.push(f);
            else {
              let y = lf(p, g);
              null != y && (h.push(f), c.set(f, y));
            }
          }
        let v = new rk(h);
        return new o7(c, v, a.fieldTransforms);
      }
      function lf(e, t) {
        if (lm((e = (0, m.m9)(e))))
          return lg('Unsupported field value:', t, e), lp(e, t);
        if (e instanceof o6)
          return (
            (function (e, t) {
              if (!le(t.sa))
                throw t.ha(
                  `${e._methodName}() can only be used with update() and set()`
                );
              if (!t.path)
                throw t.ha(
                  `${e._methodName}() is not currently supported inside arrays`
                );
              let n = e._toFieldTransform(t);
              n && t.fieldTransforms.push(n);
            })(e, t),
            null
          );
        if (void 0 === e && t.ignoreUndefinedProperties) return null;
        if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
          if (t.settings.oa && 4 !== t.sa)
            throw t.ha('Nested arrays are not supported');
          return (function (e, t) {
            let n = [],
              r = 0;
            for (let i of e) {
              let s = lf(i, t.aa(r));
              null == s && (s = { nullValue: 'NULL_VALUE' }), n.push(s), r++;
            }
            return { arrayValue: { values: n } };
          })(e, t);
        }
        return (function (e, t) {
          if (null === (e = (0, m.m9)(e))) return { nullValue: 'NULL_VALUE' };
          if ('number' == typeof e) return iR(t.It, e);
          if ('boolean' == typeof e) return { booleanValue: e };
          if ('string' == typeof e) return { stringValue: e };
          if (e instanceof Date) {
            let n = rn.fromDate(e);
            return { timestampValue: sb(t.It, n) };
          }
          if (e instanceof rn) {
            let r = new rn(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
            return { timestampValue: sb(t.It, r) };
          }
          if (e instanceof o9)
            return {
              geoPointValue: { latitude: e.latitude, longitude: e.longitude }
            };
          if (e instanceof o2) return { bytesValue: sT(t.It, e._byteString) };
          if (e instanceof oP) {
            let i = t.databaseId,
              s = e.firestore._databaseId;
            if (!s.isEqual(i))
              throw t.ha(
                `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
              );
            return {
              referenceValue: sE(
                e.firestore._databaseId || t.databaseId,
                e._key.path
              )
            };
          }
          throw t.ha(`Unsupported field value: ${oA(e)}`);
        })(e, t);
      }
      function lp(e, t) {
        let n = {};
        return (
          rw(e)
            ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
            : rv(e, (e, r) => {
                let i = lf(r, t.ra(e));
                null != i && (n[e] = i);
              }),
          { mapValue: { fields: n } }
        );
      }
      function lm(e) {
        return !(
          'object' != typeof e ||
          null === e ||
          e instanceof Array ||
          e instanceof Date ||
          e instanceof rn ||
          e instanceof o9 ||
          e instanceof o2 ||
          e instanceof oP ||
          e instanceof o6
        );
      }
      function lg(e, t, n) {
        var r;
        if (
          !lm(n) ||
          'object' != typeof n ||
          null === n ||
          (Object.getPrototypeOf(n) !== Object.prototype &&
            null !== Object.getPrototypeOf(n))
        ) {
          let i = oA(n);
          throw 'an object' === i
            ? t.ha(e + ' a custom object')
            : t.ha(e + ' ' + i);
        }
      }
      function ly(e, t, n) {
        if ((t = (0, m.m9)(t)) instanceof o4) return t._internalPath;
        if ('string' == typeof t) return lw(e, t);
        throw l_(
          'Field path arguments must be of type string or ',
          e,
          !1,
          void 0,
          n
        );
      }
      let lv = RegExp('[~\\*/\\[\\]]');
      function lw(e, t, n) {
        if (t.search(lv) >= 0)
          throw l_(
            `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
            e,
            !1,
            void 0,
            n
          );
        try {
          return new o4(...t.split('.'))._internalPath;
        } catch (r) {
          throw l_(
            `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
            e,
            !1,
            void 0,
            n
          );
        }
      }
      function l_(e, t, n, r, i) {
        let s = r && !r.isEmpty(),
          a = void 0 !== i,
          o = `Function ${t}() called with invalid data`;
        n && (o += ' (via `toFirestore()`)'), (o += '. ');
        let l = '';
        return (
          (s || a) &&
            ((l += ' (found'),
            s && (l += ` in field ${r}`),
            a && (l += ` in document ${i}`),
            (l += ')')),
          new nY(nJ.INVALID_ARGUMENT, o + e + l)
        );
      }
      function lb(e, t) {
        return e.some((e) => e.isEqual(t));
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class lT {
        constructor(e, t, n, r, i) {
          (this._firestore = e),
            (this._userDataWriter = t),
            (this._key = n),
            (this._document = r),
            (this._converter = i);
        }
        get id() {
          return this._key.path.lastSegment();
        }
        get ref() {
          return new oP(this._firestore, this._converter, this._key);
        }
        exists() {
          return null !== this._document;
        }
        data() {
          if (this._document) {
            if (this._converter) {
              let e = new lI(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                null
              );
              return this._converter.fromFirestore(e);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
          }
        }
        get(e) {
          if (this._document) {
            let t = this._document.data.field(lE('DocumentSnapshot.get', e));
            if (null !== t) return this._userDataWriter.convertValue(t);
          }
        }
      }
      class lI extends lT {
        data() {
          return super.data();
        }
      }
      function lE(e, t) {
        return 'string' == typeof t
          ? lw(e, t)
          : t instanceof o4
          ? t._internalPath
          : t._delegate._internalPath;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function lk(e) {
        if ('L' === e.limitType && 0 === e.explicitOrderBy.length)
          throw new nY(
            nJ.UNIMPLEMENTED,
            'limitToLast() queries require specifying at least one orderBy() clause'
          );
      }
      class lS {}
      function lC(e, ...t) {
        for (let n of t) e = n._apply(e);
        return e;
      }
      class lA extends lS {
        constructor(e, t, n) {
          super(),
            (this.ma = e),
            (this.ga = t),
            (this.ya = n),
            (this.type = 'where');
        }
        _apply(e) {
          let t = lr(e.firestore),
            n = (function (e, t, n, r, i, s, a) {
              let o;
              if (i.isKeyField()) {
                if ('array-contains' === s || 'array-contains-any' === s)
                  throw new nY(
                    nJ.INVALID_ARGUMENT,
                    `Invalid Query. You can't perform '${s}' queries on documentId().`
                  );
                if ('in' === s || 'not-in' === s) {
                  lx(a, s);
                  let l = [];
                  for (let u of a) l.push(lP(r, e, u));
                  o = { arrayValue: { values: l } };
                } else o = lP(r, e, a);
              } else
                ('in' !== s && 'not-in' !== s && 'array-contains-any' !== s) ||
                  lx(a, s),
                  (o = (function (e, t, n, r = !1) {
                    return lf(n, e.da(r ? 4 : 3, t));
                  })(n, t, a, 'in' === s || 'not-in' === s));
              let h = r9.create(i, s, o);
              return (
                (function (e, t) {
                  if (t.dt()) {
                    let n = ig(e);
                    if (null !== n && !n.isEqual(t.field))
                      throw new nY(
                        nJ.INVALID_ARGUMENT,
                        `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`
                      );
                    let r = im(e);
                    null !== r && lM(e, t.field, r);
                  }
                  let i = (function (e, t) {
                    for (let n of e.filters)
                      if (t.indexOf(n.op) >= 0) return n.op;
                    return null;
                  })(
                    e,
                    (function (e) {
                      switch (e) {
                        case '!=':
                          return ['!=', 'not-in'];
                        case 'array-contains':
                          return [
                            'array-contains',
                            'array-contains-any',
                            'not-in'
                          ];
                        case 'in':
                          return ['array-contains-any', 'in', 'not-in'];
                        case 'array-contains-any':
                          return [
                            'array-contains',
                            'array-contains-any',
                            'in',
                            'not-in'
                          ];
                        case 'not-in':
                          return [
                            'array-contains',
                            'array-contains-any',
                            'in',
                            'not-in',
                            '!='
                          ];
                        default:
                          return [];
                      }
                    })(t.op)
                  );
                  if (null !== i)
                    throw i === t.op
                      ? new nY(
                          nJ.INVALID_ARGUMENT,
                          `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`
                        )
                      : new nY(
                          nJ.INVALID_ARGUMENT,
                          `Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`
                        );
                })(e, h),
                h
              );
            })(
              e._query,
              'where',
              t,
              e.firestore._databaseId,
              this.ma,
              this.ga,
              this.ya
            );
          return new ox(
            e.firestore,
            e.converter,
            (function (e, t) {
              let n = e.filters.concat([t]);
              return new ic(
                e.path,
                e.collectionGroup,
                e.explicitOrderBy.slice(),
                n,
                e.limit,
                e.limitType,
                e.startAt,
                e.endAt
              );
            })(e._query, n)
          );
        }
      }
      function lR(e, t, n) {
        let r = lE('where', e);
        return new lA(r, t, n);
      }
      class lN extends lS {
        constructor(e, t) {
          super(), (this.ma = e), (this.pa = t), (this.type = 'orderBy');
        }
        _apply(e) {
          let t = (function (e, t, n) {
            if (null !== e.startAt)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                'Invalid query. You must not call startAt() or startAfter() before calling orderBy().'
              );
            if (null !== e.endAt)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                'Invalid query. You must not call endAt() or endBefore() before calling orderBy().'
              );
            let r = new io(t, n);
            return (
              (function (e, t) {
                if (null === im(e)) {
                  let n = ig(e);
                  null !== n && lM(e, n, t.field);
                }
              })(e, r),
              r
            );
          })(e._query, this.ma, this.pa);
          return new ox(
            e.firestore,
            e.converter,
            (function (e, t) {
              let n = e.explicitOrderBy.concat([t]);
              return new ic(
                e.path,
                e.collectionGroup,
                n,
                e.filters.slice(),
                e.limit,
                e.limitType,
                e.startAt,
                e.endAt
              );
            })(e._query, t)
          );
        }
      }
      function lD(e, t = 'asc') {
        let n = lE('orderBy', e);
        return new lN(n, t);
      }
      class lO extends lS {
        constructor(e, t, n) {
          super(), (this.type = e), (this.Ia = t), (this.Ta = n);
        }
        _apply(e) {
          return new ox(
            e.firestore,
            e.converter,
            i_(e._query, this.Ia, this.Ta)
          );
        }
      }
      function lL(e) {
        return (
          (function (e, t) {
            if (t <= 0)
              throw new nY(
                nJ.INVALID_ARGUMENT,
                `Function ${e}() requires a positive number, but it was: ${t}.`
              );
          })('limit', e),
          new lO('limit', e, 'F')
        );
      }
      function lP(e, t, n) {
        if ('string' == typeof (n = (0, m.m9)(n))) {
          if ('' === n)
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.'
            );
          if (!iy(t) && -1 !== n.indexOf('/'))
            throw new nY(
              nJ.INVALID_ARGUMENT,
              `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
            );
          let r = t.path.child(rs.fromString(n));
          if (!rl.isDocumentKey(r))
            throw new nY(
              nJ.INVALID_ARGUMENT,
              `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
            );
          return rz(e, new rl(r));
        }
        if (n instanceof oP) return rz(e, n._key);
        throw new nY(
          nJ.INVALID_ARGUMENT,
          `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oA(
            n
          )}.`
        );
      }
      function lx(e, t) {
        if (!Array.isArray(e) || 0 === e.length)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`
          );
        if (e.length > 10)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`
          );
      }
      function lM(e, t, n) {
        if (!n.isEqual(t))
          throw new nY(
            nJ.INVALID_ARGUMENT,
            `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
          );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class lU {
        convertValue(e, t = 'none') {
          switch (rF(e)) {
            case 0:
              return null;
            case 1:
              return e.booleanValue;
            case 2:
              return rR(e.integerValue || e.doubleValue);
            case 3:
              return this.convertTimestamp(e.timestampValue);
            case 4:
              return this.convertServerTimestamp(e, t);
            case 5:
              return e.stringValue;
            case 6:
              return this.convertBytes(rN(e.bytesValue));
            case 7:
              return this.convertReference(e.referenceValue);
            case 8:
              return this.convertGeoPoint(e.geoPointValue);
            case 9:
              return this.convertArray(e.arrayValue, t);
            case 10:
              return this.convertObject(e.mapValue, t);
            default:
              throw nX();
          }
        }
        convertObject(e, t) {
          let n = {};
          return (
            rv(e.fields, (e, r) => {
              n[e] = this.convertValue(r, t);
            }),
            n
          );
        }
        convertGeoPoint(e) {
          return new o9(rR(e.latitude), rR(e.longitude));
        }
        convertArray(e, t) {
          return (e.values || []).map((e) => this.convertValue(e, t));
        }
        convertServerTimestamp(e, t) {
          switch (t) {
            case 'previous':
              let n = (function e(t) {
                let n = t.mapValue.fields.__previous_value__;
                return rD(n) ? e(n) : n;
              })(e);
              return null == n ? null : this.convertValue(n, t);
            case 'estimate':
              return this.convertTimestamp(rO(e));
            default:
              return null;
          }
        }
        convertTimestamp(e) {
          let t = rA(e);
          return new rn(t.seconds, t.nanos);
        }
        convertDocumentKey(e, t) {
          var n;
          let r = rs.fromString(e);
          (n = sx(r)) || nX();
          let i = new rP(r.get(1), r.get(3)),
            s = new rl(r.popFirst(5));
          return (
            i.isEqual(t) ||
              nG(
                `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`
              ),
            s
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function lF(e, t, n) {
        return e
          ? n && (n.merge || n.mergeFields)
            ? e.toFirestore(t, n)
            : e.toFirestore(t)
          : t;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class lV {
        constructor(e, t) {
          (this.hasPendingWrites = e), (this.fromCache = t);
        }
        isEqual(e) {
          return (
            this.hasPendingWrites === e.hasPendingWrites &&
            this.fromCache === e.fromCache
          );
        }
      }
      class lB extends lT {
        constructor(e, t, n, r, i, s) {
          super(e, t, n, r, s),
            (this._firestore = e),
            (this._firestoreImpl = e),
            (this.metadata = i);
        }
        exists() {
          return super.exists();
        }
        data(e = {}) {
          if (this._document) {
            if (this._converter) {
              let t = new lj(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                this.metadata,
                null
              );
              return this._converter.fromFirestore(t, e);
            }
            return this._userDataWriter.convertValue(
              this._document.data.value,
              e.serverTimestamps
            );
          }
        }
        get(e, t = {}) {
          if (this._document) {
            let n = this._document.data.field(lE('DocumentSnapshot.get', e));
            if (null !== n)
              return this._userDataWriter.convertValue(n, t.serverTimestamps);
          }
        }
      }
      class lj extends lB {
        data(e = {}) {
          return super.data(e);
        }
      }
      class lq {
        constructor(e, t, n, r) {
          (this._firestore = e),
            (this._userDataWriter = t),
            (this._snapshot = r),
            (this.metadata = new lV(r.hasPendingWrites, r.fromCache)),
            (this.query = n);
        }
        get docs() {
          let e = [];
          return this.forEach((t) => e.push(t)), e;
        }
        get size() {
          return this._snapshot.docs.size;
        }
        get empty() {
          return 0 === this.size;
        }
        forEach(e, t) {
          this._snapshot.docs.forEach((n) => {
            e.call(
              t,
              new lj(
                this._firestore,
                this._userDataWriter,
                n.key,
                n,
                new lV(
                  this._snapshot.mutatedKeys.has(n.key),
                  this._snapshot.fromCache
                ),
                this.query.converter
              )
            );
          });
        }
        docChanges(e = {}) {
          let t = !!e.includeMetadataChanges;
          if (t && this._snapshot.excludesMetadataChanges)
            throw new nY(
              nJ.INVALID_ARGUMENT,
              'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
            );
          return (
            (this._cachedChanges &&
              this._cachedChangesIncludeMetadataChanges === t) ||
              ((this._cachedChanges = (function (e, t) {
                if (e._snapshot.oldDocs.isEmpty()) {
                  let n = 0;
                  return e._snapshot.docChanges.map((t) => {
                    let r = new lj(
                      e._firestore,
                      e._userDataWriter,
                      t.doc.key,
                      t.doc,
                      new lV(
                        e._snapshot.mutatedKeys.has(t.doc.key),
                        e._snapshot.fromCache
                      ),
                      e.query.converter
                    );
                    return (
                      t.doc,
                      { type: 'added', doc: r, oldIndex: -1, newIndex: n++ }
                    );
                  });
                }
                {
                  let r = e._snapshot.oldDocs;
                  return e._snapshot.docChanges
                    .filter((e) => t || 3 !== e.type)
                    .map((t) => {
                      let n = new lj(
                          e._firestore,
                          e._userDataWriter,
                          t.doc.key,
                          t.doc,
                          new lV(
                            e._snapshot.mutatedKeys.has(t.doc.key),
                            e._snapshot.fromCache
                          ),
                          e.query.converter
                        ),
                        i = -1,
                        s = -1;
                      return (
                        0 !== t.type &&
                          ((i = r.indexOf(t.doc.key)),
                          (r = r.delete(t.doc.key))),
                        1 !== t.type &&
                          (s = (r = r.add(t.doc)).indexOf(t.doc.key)),
                        {
                          type: (function (e) {
                            switch (e) {
                              case 0:
                                return 'added';
                              case 2:
                              case 3:
                                return 'modified';
                              case 1:
                                return 'removed';
                              default:
                                return nX();
                            }
                          })(t.type),
                          doc: n,
                          oldIndex: i,
                          newIndex: s
                        }
                      );
                    });
                }
              })(this, t)),
              (this._cachedChangesIncludeMetadataChanges = t)),
            this._cachedChanges
          );
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function l$(e) {
        e = oR(e, oP);
        let t = oR(e.firestore, oY);
        return (function (e, t, n = {}) {
          let r = new nZ();
          return (
            e.asyncQueue.enqueueAndForget(async () =>
              (function (e, t, n, r, i) {
                let s = new oj({
                    next(s) {
                      t.enqueueAndForget(() => a4(e, a));
                      let o = s.docs.has(n);
                      !o && s.fromCache
                        ? i.reject(
                            new nY(
                              nJ.UNAVAILABLE,
                              'Failed to get document because the client is offline.'
                            )
                          )
                        : o && s.fromCache && r && 'server' === r.source
                        ? i.reject(
                            new nY(
                              nJ.UNAVAILABLE,
                              'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                            )
                          )
                        : i.resolve(s);
                    },
                    error: (e) => i.reject(e)
                  }),
                  a = new a5(id(n.path), s, {
                    includeMetadataChanges: !0,
                    Nu: !0
                  });
                return a2(e, a);
              })(await oQ(e), e.asyncQueue, t, n, r)
            ),
            r.promise
          );
        })(o0(t), e._key).then((n) => lY(t, e, n));
      }
      class lz extends lU {
        constructor(e) {
          super(), (this.firestore = e);
        }
        convertBytes(e) {
          return new o2(e);
        }
        convertReference(e) {
          let t = this.convertDocumentKey(e, this.firestore._databaseId);
          return new oP(this.firestore, null, t);
        }
      }
      function lH(e) {
        e = oR(e, ox);
        let t = oR(e.firestore, oY),
          n = o0(t),
          r = new lz(t);
        return (
          lk(e._query),
          (function (e, t, n = {}) {
            let r = new nZ();
            return (
              e.asyncQueue.enqueueAndForget(async () =>
                (function (e, t, n, r, i) {
                  let s = new oj({
                      next(n) {
                        t.enqueueAndForget(() => a4(e, a)),
                          n.fromCache && 'server' === r.source
                            ? i.reject(
                                new nY(
                                  nJ.UNAVAILABLE,
                                  'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                )
                              )
                            : i.resolve(n);
                      },
                      error: (e) => i.reject(e)
                    }),
                    a = new a5(n, s, { includeMetadataChanges: !0, Nu: !0 });
                  return a2(e, a);
                })(await oQ(e), e.asyncQueue, t, n, r)
              ),
              r.promise
            );
          })(n, e._query).then((n) => new lq(t, r, e, n))
        );
      }
      function lK(e, t, n) {
        e = oR(e, oP);
        let r = oR(e.firestore, oY),
          i = lF(e.converter, t, n);
        return lJ(r, [
          li(lr(r), 'setDoc', e._key, i, null !== e.converter, n).toMutation(
            e._key,
            iz.none()
          )
        ]);
      }
      function lG(e, t, n, ...r) {
        e = oR(e, oP);
        let i = oR(e.firestore, oY),
          s = lr(i),
          a;
        return (
          (a =
            'string' == typeof (t = (0, m.m9)(t)) || t instanceof o4
              ? ld(s, 'updateDoc', e._key, t, n, r)
              : lc(s, 'updateDoc', e._key, t)),
          lJ(i, [a.toMutation(e._key, iz.exists(!0))])
        );
      }
      function lW(e) {
        return lJ(oR(e.firestore, oY), [new i4(e._key, iz.none())]);
      }
      function lQ(e, t) {
        let n = oR(e.firestore, oY),
          r = oF(e),
          i = lF(e.converter, t);
        return lJ(n, [
          li(
            lr(e.firestore),
            'addDoc',
            r._key,
            i,
            null !== e.converter,
            {}
          ).toMutation(r._key, iz.exists(!1))
        ]).then(() => r);
      }
      function lX(e, ...t) {
        var n, r, i;
        e = (0, m.m9)(e);
        let s = { includeMetadataChanges: !1 },
          a = 0;
        'object' != typeof t[a] || oJ(t[a]) || ((s = t[a]), a++);
        let o = { includeMetadataChanges: s.includeMetadataChanges };
        if (oJ(t[a])) {
          let l = t[a];
          (t[a] = null === (n = l.next) || void 0 === n ? void 0 : n.bind(l)),
            (t[a + 1] =
              null === (r = l.error) || void 0 === r ? void 0 : r.bind(l)),
            (t[a + 2] =
              null === (i = l.complete) || void 0 === i ? void 0 : i.bind(l));
        }
        let u, h, c;
        if (e instanceof oP)
          (h = oR(e.firestore, oY)),
            (c = id(e._key.path)),
            (u = {
              next(n) {
                t[a] && t[a](lY(h, e, n));
              },
              error: t[a + 1],
              complete: t[a + 2]
            });
        else {
          let d = oR(e, ox);
          (h = oR(d.firestore, oY)), (c = d._query);
          let f = new lz(h);
          (u = {
            next(e) {
              t[a] && t[a](new lq(h, f, d, e));
            },
            error: t[a + 1],
            complete: t[a + 2]
          }),
            lk(e._query);
        }
        return (function (e, t, n, r) {
          let i = new oj(r),
            s = new a5(t, i, n);
          return (
            e.asyncQueue.enqueueAndForget(async () => a2(await oQ(e), s)),
            () => {
              i.bc(),
                e.asyncQueue.enqueueAndForget(async () => a4(await oQ(e), s));
            }
          );
        })(o0(h), c, o, u);
      }
      function lJ(e, t) {
        return (function (e, t) {
          let n = new nZ();
          return (
            e.asyncQueue.enqueueAndForget(async () => {
              var r;
              return oo(await oW(e).then((e) => e.syncEngine), t, n);
            }),
            n.promise
          );
        })(o0(e), t);
      }
      function lY(e, t, n) {
        let r = n.docs.get(t._key),
          i = new lz(e);
        return new lB(
          e,
          i,
          t._key,
          r,
          new lV(n.hasPendingWrites, n.fromCache),
          t.converter
        );
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function lZ(e) {
        let t = oR(e.firestore, oY);
        return (function (e, t, n) {
          let r = new nZ();
          return (
            e.asyncQueue.enqueueAndForget(async () => {
              try {
                var i, s;
                if (aR(await oW(e).then((e) => e.remoteStore))) {
                  let a = await ((s = e), oW(s).then((e) => e.datastore)),
                    o = new o$(t, a, n).run();
                  r.resolve(o);
                } else
                  r.reject(
                    new nY(
                      nJ.UNAVAILABLE,
                      'Failed to get count result because the client is offline.'
                    )
                  );
              } catch (l) {
                r.reject(l);
              }
            }),
            r.promise
          );
        })(o0(t), e, new lz(t));
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class l0 {
        constructor(e, t) {
          (this._firestore = e),
            (this._commitHandler = t),
            (this._mutations = []),
            (this._committed = !1),
            (this._dataReader = lr(e));
        }
        set(e, t, n) {
          this._verifyNotCommitted();
          let r = l1(e, this._firestore),
            i = lF(r.converter, t, n),
            s = li(
              this._dataReader,
              'WriteBatch.set',
              r._key,
              i,
              null !== r.converter,
              n
            );
          return this._mutations.push(s.toMutation(r._key, iz.none())), this;
        }
        update(e, t, n, ...r) {
          this._verifyNotCommitted();
          let i = l1(e, this._firestore),
            s;
          return (
            (s =
              'string' == typeof (t = (0, m.m9)(t)) || t instanceof o4
                ? ld(this._dataReader, 'WriteBatch.update', i._key, t, n, r)
                : lc(this._dataReader, 'WriteBatch.update', i._key, t)),
            this._mutations.push(s.toMutation(i._key, iz.exists(!0))),
            this
          );
        }
        delete(e) {
          this._verifyNotCommitted();
          let t = l1(e, this._firestore);
          return (
            (this._mutations = this._mutations.concat(
              new i4(t._key, iz.none())
            )),
            this
          );
        }
        commit() {
          return (
            this._verifyNotCommitted(),
            (this._committed = !0),
            this._mutations.length > 0
              ? this._commitHandler(this._mutations)
              : Promise.resolve()
          );
        }
        _verifyNotCommitted() {
          if (this._committed)
            throw new nY(
              nJ.FAILED_PRECONDITION,
              'A write batch can no longer be used after commit() has been called.'
            );
        }
      }
      function l1(e, t) {
        if ((e = (0, m.m9)(e)).firestore !== t)
          throw new nY(
            nJ.INVALID_ARGUMENT,
            'Provided document reference is from a different Firestore instance.'
          );
        return e;
      }
      function l2() {
        return new lo('serverTimestamp');
      }
      function l4(...e) {
        return new ll('arrayUnion', e);
      }
      function l3(...e) {
        return new lu('arrayRemove', e);
      }
      function l6(e) {
        return new lh('increment', e);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function l9(e) {
        return o0((e = oR(e, oY))), new l0(e, (t) => lJ(e, t));
      }
      !(function (e, t = !0) {
        var n;
        (n$ = d.Jn),
          (0, d.Xd)(
            new f.wA(
              'firestore',
              (e, { instanceIdentifier: n, options: r }) => {
                let i = e.getProvider('app').getImmediate(),
                  s = new oY(
                    new n4(e.getProvider('auth-internal')),
                    new n5(e.getProvider('app-check-internal')),
                    (function (e, t) {
                      if (
                        !Object.prototype.hasOwnProperty.apply(e.options, [
                          'projectId'
                        ])
                      )
                        throw new nY(
                          nJ.INVALID_ARGUMENT,
                          '"projectId" not provided in firebase.initializeApp.'
                        );
                      return new rP(e.options.projectId, t);
                    })(i, n),
                    i
                  );
                return (
                  (r = Object.assign({ useFetchStreams: t }, r)),
                  s._setSettings(r),
                  s
                );
              },
              'PUBLIC'
            ).setMultipleInstances(!0)
          ),
          (0, d.KN)(nj, '3.7.2', void 0),
          (0, d.KN)(nj, '3.7.2', 'esm2017');
      })();
    },
    1153: function (e, t, n) {
      'use strict';
      n.d(t, {
        a1: function () {
          return ev;
        },
        Jt: function () {
          return em;
        },
        cF: function () {
          return ey;
        },
        iH: function () {
          return eg;
        },
        B0: function () {
          return ep;
        }
      });
      var r,
        i,
        s = n(5816),
        a = n(4444),
        o = n(8463);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let l = 'firebasestorage.googleapis.com',
        u = 'storageBucket';
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class h extends a.ZR {
        constructor(e, t, n = 0) {
          super(c(e), `Firebase Storage: ${t} (${c(e)})`),
            (this.status_ = n),
            (this.customData = { serverResponse: null }),
            (this._baseMessage = this.message),
            Object.setPrototypeOf(this, h.prototype);
        }
        get status() {
          return this.status_;
        }
        set status(e) {
          this.status_ = e;
        }
        _codeEquals(e) {
          return c(e) === this.code;
        }
        get serverResponse() {
          return this.customData.serverResponse;
        }
        set serverResponse(e) {
          (this.customData.serverResponse = e),
            this.customData.serverResponse
              ? (this.message = `${this._baseMessage}
${this.customData.serverResponse}`)
              : (this.message = this._baseMessage);
        }
      }
      function c(e) {
        return 'storage/' + e;
      }
      function d() {
        return new h(
          'unknown',
          'An unknown error occurred, please check the error payload for server response.'
        );
      }
      function f() {
        return new h(
          'retry-limit-exceeded',
          'Max retry time for operation exceeded, please try again.'
        );
      }
      function p() {
        return new h('canceled', 'User canceled the upload/download.');
      }
      function m() {
        return new h(
          'cannot-slice-blob',
          'Cannot slice blob for upload. Please retry the upload.'
        );
      }
      function g(e) {
        return new h('invalid-argument', e);
      }
      function y() {
        return new h('app-deleted', 'The Firebase app was deleted.');
      }
      function v(e, t) {
        return new h(
          'invalid-format',
          "String does not match format '" + e + "': " + t
        );
      }
      function w(e) {
        throw new h('internal-error', 'Internal error: ' + e);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class _ {
        constructor(e, t) {
          (this.bucket = e), (this.path_ = t);
        }
        get path() {
          return this.path_;
        }
        get isRoot() {
          return 0 === this.path.length;
        }
        fullServerUrl() {
          let e = encodeURIComponent;
          return '/b/' + e(this.bucket) + '/o/' + e(this.path);
        }
        bucketOnlyServerUrl() {
          let e = encodeURIComponent;
          return '/b/' + e(this.bucket) + '/o';
        }
        static makeFromBucketSpec(e, t) {
          var n;
          let r;
          try {
            r = _.makeFromUrl(e, t);
          } catch (i) {
            return new _(e, '');
          }
          if ('' === r.path) return r;
          throw new h(
            'invalid-default-bucket',
            "Invalid default bucket '" + e + "'."
          );
        }
        static makeFromUrl(e, t) {
          let n = null,
            r = '([A-Za-z0-9.\\-_]+)',
            i = RegExp('^gs://' + r + '(/(.*))?$', 'i');
          function s(e) {
            e.path_ = decodeURIComponent(e.path);
          }
          let a = t.replace(/[.]/g, '\\.'),
            o = RegExp(
              `^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,
              'i'
            ),
            u = RegExp(
              `^https?://${
                t === l
                  ? '(?:storage.googleapis.com|storage.cloud.google.com)'
                  : t
              }/${r}/([^?#]*)`,
              'i'
            ),
            c = [
              {
                regex: i,
                indices: { bucket: 1, path: 3 },
                postModify: function (e) {
                  '/' === e.path.charAt(e.path.length - 1) &&
                    (e.path_ = e.path_.slice(0, -1));
                }
              },
              { regex: o, indices: { bucket: 1, path: 3 }, postModify: s },
              { regex: u, indices: { bucket: 1, path: 2 }, postModify: s }
            ];
          for (let d = 0; d < c.length; d++) {
            let f = c[d],
              p = f.regex.exec(e);
            if (p) {
              let m = p[f.indices.bucket],
                g = p[f.indices.path];
              g || (g = ''), (n = new _(m, g)), f.postModify(n);
              break;
            }
          }
          if (null == n) {
            var y;
            throw new h('invalid-url', "Invalid URL '" + e + "'.");
          }
          return n;
        }
      }
      class b {
        constructor(e) {
          this.promise_ = Promise.reject(e);
        }
        getPromise() {
          return this.promise_;
        }
        cancel(e = !1) {}
      }
      function T(e) {
        return 'string' == typeof e || e instanceof String;
      }
      function I(e) {
        return E() && e instanceof Blob;
      }
      function E() {
        return 'undefined' != typeof Blob && !(0, a.UG)();
      }
      function k(e, t, n, r) {
        if (r < t)
          throw g(`Invalid value for '${e}'. Expected ${t} or greater.`);
        if (r > n) throw g(`Invalid value for '${e}'. Expected ${n} or less.`);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function S(e, t, n) {
        let r = t;
        return null == n && (r = `https://${t}`), `${n}://${r}/v0${e}`;
      }
      function C(e) {
        let t = encodeURIComponent,
          n = '?';
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            let i = t(r) + '=' + t(e[r]);
            n = n + i + '&';
          }
        return n.slice(0, -1);
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function A(e, t) {
        let n = -1 !== [408, 429].indexOf(e),
          r = -1 !== t.indexOf(e);
        return (e >= 500 && e < 600) || n || r;
      }
      ((r = i || (i = {}))[(r.NO_ERROR = 0)] = 'NO_ERROR'),
        (r[(r.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
        (r[(r.ABORT = 2)] = 'ABORT');
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class R {
        constructor(e, t, n, r, i, s, a, o, l, u, h, c = !0) {
          (this.url_ = e),
            (this.method_ = t),
            (this.headers_ = n),
            (this.body_ = r),
            (this.successCodes_ = i),
            (this.additionalRetryCodes_ = s),
            (this.callback_ = a),
            (this.errorCallback_ = o),
            (this.timeout_ = l),
            (this.progressCallback_ = u),
            (this.connectionFactory_ = h),
            (this.retry = c),
            (this.pendingConnection_ = null),
            (this.backoffId_ = null),
            (this.canceled_ = !1),
            (this.appDelete_ = !1),
            (this.promise_ = new Promise((e, t) => {
              (this.resolve_ = e), (this.reject_ = t), this.start_();
            }));
        }
        start_() {
          let e = (e, t) => {
              if (t) {
                e(!1, new N(!1, null, !0));
                return;
              }
              let n = this.connectionFactory_();
              this.pendingConnection_ = n;
              let r = (e) => {
                let t = e.loaded,
                  n = e.lengthComputable ? e.total : -1;
                null !== this.progressCallback_ && this.progressCallback_(t, n);
              };
              null !== this.progressCallback_ && n.addUploadProgressListener(r),
                n
                  .send(this.url_, this.method_, this.body_, this.headers_)
                  .then(() => {
                    null !== this.progressCallback_ &&
                      n.removeUploadProgressListener(r),
                      (this.pendingConnection_ = null);
                    let t = n.getErrorCode() === i.NO_ERROR,
                      s = n.getStatus();
                    if (
                      (!t || A(s, this.additionalRetryCodes_)) &&
                      this.retry
                    ) {
                      let a = n.getErrorCode() === i.ABORT;
                      e(!1, new N(!1, null, a));
                      return;
                    }
                    let o = -1 !== this.successCodes_.indexOf(s);
                    e(!0, new N(o, n));
                  });
            },
            t = (e, t) => {
              let n = this.resolve_,
                r = this.reject_,
                i = t.connection;
              if (t.wasSuccessCode)
                try {
                  var s;
                  let a = this.callback_(i, i.getResponse());
                  void 0 !== a ? n(a) : n();
                } catch (o) {
                  r(o);
                }
              else if (null !== i) {
                let l = d();
                (l.serverResponse = i.getErrorText()),
                  r(this.errorCallback_ ? this.errorCallback_(i, l) : l);
              } else if (t.canceled) {
                let u = this.appDelete_ ? y() : p();
                r(u);
              } else {
                let h = f();
                r(h);
              }
            };
          this.canceled_
            ? t(!1, new N(!1, null, !0))
            : (this.backoffId_ = /**
               * @license
               * Copyright 2017 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ (function (e, t, n) {
                let r = 1,
                  i = null,
                  s = null,
                  a = !1,
                  o = 0;
                function l() {
                  return 2 === o;
                }
                let u = !1;
                function h(...e) {
                  u || ((u = !0), t.apply(null, e));
                }
                function c(t) {
                  i = setTimeout(() => {
                    (i = null), e(f, l());
                  }, t);
                }
                function d() {
                  s && clearTimeout(s);
                }
                function f(e, ...t) {
                  if (u) {
                    d();
                    return;
                  }
                  if (e) {
                    d(), h.call(null, e, ...t);
                    return;
                  }
                  let n = l() || a;
                  if (n) {
                    d(), h.call(null, e, ...t);
                    return;
                  }
                  r < 64 && (r *= 2);
                  let i;
                  1 === o
                    ? ((o = 2), (i = 0))
                    : (i = (r + Math.random()) * 1e3),
                    c(i);
                }
                let p = !1;
                function m(e) {
                  if (!p)
                    (p = !0),
                      d(),
                      !u &&
                        (null !== i
                          ? (e || (o = 2), clearTimeout(i), c(0))
                          : e || (o = 1));
                }
                return (
                  c(0),
                  (s = setTimeout(() => {
                    (a = !0), m(!0);
                  }, n)),
                  m
                );
              })(e, t, this.timeout_));
        }
        getPromise() {
          return this.promise_;
        }
        cancel(e) {
          if (
            ((this.canceled_ = !0),
            (this.appDelete_ = e || !1),
            null !== this.backoffId_)
          ) {
            var t;
            (t = this.backoffId_)(!1);
          }
          null !== this.pendingConnection_ && this.pendingConnection_.abort();
        }
      }
      class N {
        constructor(e, t, n) {
          (this.wasSuccessCode = e),
            (this.connection = t),
            (this.canceled = !!n);
        }
      }
      function D(...e) {
        let t =
          'undefined' != typeof BlobBuilder
            ? BlobBuilder
            : 'undefined' != typeof WebKitBlobBuilder
            ? WebKitBlobBuilder
            : void 0;
        if (void 0 !== t) {
          let n = new t();
          for (let r = 0; r < e.length; r++) n.append(e[r]);
          return n.getBlob();
        }
        if (E()) return new Blob(e);
        throw new h(
          'unsupported-environment',
          "This browser doesn't seem to support creating Blobs"
        );
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let O = {
        RAW: 'raw',
        BASE64: 'base64',
        BASE64URL: 'base64url',
        DATA_URL: 'data_url'
      };
      class L {
        constructor(e, t) {
          (this.data = e), (this.contentType = t || null);
        }
      }
      function P(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let r = e.charCodeAt(n);
          if (r <= 127) t.push(r);
          else if (r <= 2047) t.push(192 | (r >> 6), 128 | (63 & r));
          else if ((64512 & r) == 55296) {
            let i = n < e.length - 1 && (64512 & e.charCodeAt(n + 1)) == 56320;
            if (i) {
              let s = r,
                a = e.charCodeAt(++n);
              (r = 65536 | ((1023 & s) << 10) | (1023 & a)),
                t.push(
                  240 | (r >> 18),
                  128 | ((r >> 12) & 63),
                  128 | ((r >> 6) & 63),
                  128 | (63 & r)
                );
            } else t.push(239, 191, 189);
          } else
            (64512 & r) == 56320
              ? t.push(239, 191, 189)
              : t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r));
        }
        return new Uint8Array(t);
      }
      function x(e, t) {
        switch (e) {
          case O.BASE64: {
            let n = -1 !== t.indexOf('-'),
              r = -1 !== t.indexOf('_');
            if (n || r)
              throw v(
                e,
                "Invalid character '" +
                  (n ? '-' : '_') +
                  "' found: is it base64url encoded?"
              );
            break;
          }
          case O.BASE64URL: {
            let i = -1 !== t.indexOf('+'),
              s = -1 !== t.indexOf('/');
            if (i || s)
              throw v(
                e,
                "Invalid character '" +
                  (i ? '+' : '/') +
                  "' found: is it base64 encoded?"
              );
            t = t.replace(/-/g, '+').replace(/_/g, '/');
          }
        }
        let a;
        try {
          var o;
          (o = t), (a = atob(o));
        } catch (l) {
          throw v(e, 'Invalid character found');
        }
        let u = new Uint8Array(a.length);
        for (let h = 0; h < a.length; h++) u[h] = a.charCodeAt(h);
        return u;
      }
      class M {
        constructor(e) {
          (this.base64 = !1), (this.contentType = null);
          let t = e.match(/^data:([^,]+)?,/);
          if (null === t)
            throw v(
              O.DATA_URL,
              "Must be formatted 'data:[<mediatype>][;base64],<data>"
            );
          let n = t[1] || null;
          null != n &&
            ((this.base64 = (function (e, t) {
              let n = e.length >= t.length;
              return !!n && e.substring(e.length - t.length) === t;
            })(n, ';base64')),
            (this.contentType = this.base64
              ? n.substring(0, n.length - 7)
              : n)),
            (this.rest = e.substring(e.indexOf(',') + 1));
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class U {
        constructor(e, t) {
          let n = 0,
            r = '';
          I(e)
            ? ((this.data_ = e), (n = e.size), (r = e.type))
            : e instanceof ArrayBuffer
            ? (t
                ? (this.data_ = new Uint8Array(e))
                : ((this.data_ = new Uint8Array(e.byteLength)),
                  this.data_.set(new Uint8Array(e))),
              (n = this.data_.length))
            : e instanceof Uint8Array &&
              (t
                ? (this.data_ = e)
                : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
              (n = e.length)),
            (this.size_ = n),
            (this.type_ = r);
        }
        size() {
          return this.size_;
        }
        type() {
          return this.type_;
        }
        slice(e, t) {
          if (I(this.data_)) {
            var n, r, i;
            let s = this.data_,
              a =
                ((n = s),
                (r = e),
                (i = t),
                n.webkitSlice
                  ? n.webkitSlice(r, i)
                  : n.mozSlice
                  ? n.mozSlice(r, i)
                  : n.slice
                  ? n.slice(r, i)
                  : null);
            return null === a ? null : new U(a);
          }
          {
            let o = new Uint8Array(this.data_.buffer, e, t - e);
            return new U(o, !0);
          }
        }
        static getBlob(...e) {
          if (E()) {
            let t = e.map((e) => (e instanceof U ? e.data_ : e));
            return new U(D.apply(null, t));
          }
          {
            let n = e.map((e) =>
                T(e)
                  ? (function (e, t) {
                      switch (e) {
                        case O.RAW:
                          return new L(P(t));
                        case O.BASE64:
                        case O.BASE64URL:
                          return new L(x(e, t));
                        case O.DATA_URL:
                          return new L(
                            (function (e) {
                              let t = new M(e);
                              return t.base64
                                ? x(O.BASE64, t.rest)
                                : (function (e) {
                                    let t;
                                    try {
                                      t = decodeURIComponent(e);
                                    } catch (n) {
                                      throw v(
                                        O.DATA_URL,
                                        'Malformed data URL.'
                                      );
                                    }
                                    return P(t);
                                  })(t.rest);
                            })(t),
                            (function (e) {
                              let t = new M(e);
                              return t.contentType;
                            })(t)
                          );
                      }
                      throw d();
                    })(O.RAW, e).data
                  : e.data_
              ),
              r = 0;
            n.forEach((e) => {
              r += e.byteLength;
            });
            let i = new Uint8Array(r),
              s = 0;
            return (
              n.forEach((e) => {
                for (let t = 0; t < e.length; t++) i[s++] = e[t];
              }),
              new U(i, !0)
            );
          }
        }
        uploadData() {
          return this.data_;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function F(e) {
        var t;
        let n;
        try {
          n = JSON.parse(e);
        } catch (r) {
          return null;
        }
        return 'object' != typeof (t = n) || Array.isArray(t) ? null : n;
      }
      function V(e) {
        let t = e.lastIndexOf('/', e.length - 2);
        return -1 === t ? e : e.slice(t + 1);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function B(e, t) {
        return t;
      }
      class j {
        constructor(e, t, n, r) {
          (this.server = e),
            (this.local = t || e),
            (this.writable = !!n),
            (this.xform = r || B);
        }
      }
      let q = null;
      function $() {
        if (q) return q;
        let e = [];
        e.push(new j('bucket')),
          e.push(new j('generation')),
          e.push(new j('metageneration')),
          e.push(new j('name', 'fullPath', !0));
        let t = new j('name');
        (t.xform = function (e, t) {
          var n;
          return !T(t) || t.length < 2 ? t : V(t);
        }),
          e.push(t);
        let n = new j('size');
        return (
          (n.xform = function (e, t) {
            return void 0 !== t ? Number(t) : t;
          }),
          e.push(n),
          e.push(new j('timeCreated')),
          e.push(new j('updated')),
          e.push(new j('md5Hash', null, !0)),
          e.push(new j('cacheControl', null, !0)),
          e.push(new j('contentDisposition', null, !0)),
          e.push(new j('contentEncoding', null, !0)),
          e.push(new j('contentLanguage', null, !0)),
          e.push(new j('contentType', null, !0)),
          e.push(new j('metadata', 'customMetadata', !0)),
          (q = e)
        );
      }
      function z(e, t, n) {
        let r = F(t);
        return null === r
          ? null
          : (function (e, t, n) {
              var r, i;
              let s = {};
              s.type = 'file';
              let a = n.length;
              for (let o = 0; o < a; o++) {
                let l = n[o];
                s[l.local] = l.xform(s, t[l.server]);
              }
              return (
                Object.defineProperty(s, 'ref', {
                  get: function () {
                    let t = s.bucket,
                      n = s.fullPath,
                      r = new _(t, n);
                    return e._makeStorageReference(r);
                  }
                }),
                s
              );
            })(e, r, n);
      }
      function H(e, t) {
        let n = {},
          r = t.length;
        for (let i = 0; i < r; i++) {
          let s = t[i];
          s.writable && (n[s.server] = e[s.local]);
        }
        return JSON.stringify(n);
      }
      class K {
        constructor(e, t, n, r) {
          (this.url = e),
            (this.method = t),
            (this.handler = n),
            (this.timeout = r),
            (this.urlParams = {}),
            (this.headers = {}),
            (this.body = null),
            (this.errorHandler = null),
            (this.progressCallback = null),
            (this.successCodes = [200]),
            (this.additionalRetryCodes = []);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function G(e) {
        if (!e) throw d();
      }
      function W(e, t) {
        return function (n, r) {
          let i = z(e, r, t);
          return G(null !== i), i;
        };
      }
      function Q(e) {
        return function (t, n) {
          var r, i;
          let s;
          return (
            401 === t.getStatus()
              ? (s = t
                  .getErrorText()
                  .includes('Firebase App Check token is invalid')
                  ? new h(
                      'unauthorized-app',
                      'This app does not have permission to access Firebase Storage on this project.'
                    )
                  : new h(
                      'unauthenticated',
                      'User is not authenticated, please authenticate using Firebase Authentication and try again.'
                    ))
              : 402 === t.getStatus()
              ? ((r = e.bucket),
                (s = new h(
                  'quota-exceeded',
                  "Quota for bucket '" +
                    r +
                    "' exceeded, please view quota on https://firebase.google.com/pricing/."
                )))
              : 403 === t.getStatus()
              ? ((i = e.path),
                (s = new h(
                  'unauthorized',
                  "User does not have permission to access '" + i + "'."
                )))
              : (s = n),
            (s.status = t.getStatus()),
            (s.serverResponse = n.serverResponse),
            s
          );
        };
      }
      function X(e) {
        let t = Q(e);
        return function (n, r) {
          let i = t(n, r);
          if (404 === n.getStatus()) {
            var s;
            (s = e.path),
              (i = new h(
                'object-not-found',
                "Object '" + s + "' does not exist."
              ));
          }
          return (i.serverResponse = r.serverResponse), i;
        };
      }
      function J(e, t, n) {
        let r = Object.assign({}, n);
        if (((r.fullPath = e.path), (r.size = t.size()), !r.contentType)) {
          var i, s;
          r.contentType = (t && t.type()) || 'application/octet-stream';
        }
        return r;
      }
      class Y {
        constructor(e, t, n, r) {
          (this.current = e),
            (this.total = t),
            (this.finalized = !!n),
            (this.metadata = r || null);
        }
      }
      function Z(e, t) {
        let n = null;
        try {
          n = e.getResponseHeader('X-Goog-Upload-Status');
        } catch (r) {
          G(!1);
        }
        return G(!!n && -1 !== (t || ['active']).indexOf(n)), n;
      }
      let ee = {
        RUNNING: 'running',
        PAUSED: 'paused',
        SUCCESS: 'success',
        CANCELED: 'canceled',
        ERROR: 'error'
      };
      function et(e) {
        switch (e) {
          case 'running':
          case 'pausing':
          case 'canceling':
            return ee.RUNNING;
          case 'paused':
            return ee.PAUSED;
          case 'success':
            return ee.SUCCESS;
          case 'canceled':
            return ee.CANCELED;
          default:
            return ee.ERROR;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class en {
        constructor(e, t, n) {
          var r;
          'function' == typeof e || null != t || null != n
            ? ((this.next = e),
              (this.error = null != t ? t : void 0),
              (this.complete = null != n ? n : void 0))
            : ((this.next = e.next),
              (this.error = e.error),
              (this.complete = e.complete));
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function er(e) {
        return (...t) => {
          Promise.resolve().then(() => e(...t));
        };
      }
      class ei {
        constructor() {
          (this.sent_ = !1),
            (this.xhr_ = new XMLHttpRequest()),
            this.initXhr(),
            (this.errorCode_ = i.NO_ERROR),
            (this.sendPromise_ = new Promise((e) => {
              this.xhr_.addEventListener('abort', () => {
                (this.errorCode_ = i.ABORT), e();
              }),
                this.xhr_.addEventListener('error', () => {
                  (this.errorCode_ = i.NETWORK_ERROR), e();
                }),
                this.xhr_.addEventListener('load', () => {
                  e();
                });
            }));
        }
        send(e, t, n, r) {
          if (this.sent_) throw w('cannot .send() more than once');
          if (((this.sent_ = !0), this.xhr_.open(t, e, !0), void 0 !== r))
            for (let i in r)
              r.hasOwnProperty(i) &&
                this.xhr_.setRequestHeader(i, r[i].toString());
          return (
            void 0 !== n ? this.xhr_.send(n) : this.xhr_.send(),
            this.sendPromise_
          );
        }
        getErrorCode() {
          if (!this.sent_) throw w('cannot .getErrorCode() before sending');
          return this.errorCode_;
        }
        getStatus() {
          if (!this.sent_) throw w('cannot .getStatus() before sending');
          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        }
        getResponse() {
          if (!this.sent_) throw w('cannot .getResponse() before sending');
          return this.xhr_.response;
        }
        getErrorText() {
          if (!this.sent_) throw w('cannot .getErrorText() before sending');
          return this.xhr_.statusText;
        }
        abort() {
          this.xhr_.abort();
        }
        getResponseHeader(e) {
          return this.xhr_.getResponseHeader(e);
        }
        addUploadProgressListener(e) {
          null != this.xhr_.upload &&
            this.xhr_.upload.addEventListener('progress', e);
        }
        removeUploadProgressListener(e) {
          null != this.xhr_.upload &&
            this.xhr_.upload.removeEventListener('progress', e);
        }
      }
      class es extends ei {
        initXhr() {
          this.xhr_.responseType = 'text';
        }
      }
      function ea() {
        return new es();
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class eo {
        constructor(e, t, n = null) {
          (this._transferred = 0),
            (this._needToFetchStatus = !1),
            (this._needToFetchMetadata = !1),
            (this._observers = []),
            (this._error = void 0),
            (this._uploadUrl = void 0),
            (this._request = void 0),
            (this._chunkMultiplier = 1),
            (this._resolve = void 0),
            (this._reject = void 0),
            (this._ref = e),
            (this._blob = t),
            (this._metadata = n),
            (this._mappings = $()),
            (this._resumable = this._shouldDoResumable(this._blob)),
            (this._state = 'running'),
            (this._errorHandler = (e) => {
              if (
                ((this._request = void 0),
                (this._chunkMultiplier = 1),
                e._codeEquals('canceled'))
              )
                (this._needToFetchStatus = !0), this.completeTransitions_();
              else {
                let t = this.isExponentialBackoffExpired();
                if (A(e.status, [])) {
                  if (t) e = f();
                  else {
                    (this.sleepTime = Math.max(2 * this.sleepTime, 1e3)),
                      (this._needToFetchStatus = !0),
                      this.completeTransitions_();
                    return;
                  }
                }
                (this._error = e), this._transition('error');
              }
            }),
            (this._metadataErrorHandler = (e) => {
              (this._request = void 0),
                e._codeEquals('canceled')
                  ? this.completeTransitions_()
                  : ((this._error = e), this._transition('error'));
            }),
            (this.sleepTime = 0),
            (this.maxSleepTime = this._ref.storage.maxUploadRetryTime),
            (this._promise = new Promise((e, t) => {
              (this._resolve = e), (this._reject = t), this._start();
            })),
            this._promise.then(null, () => {});
        }
        isExponentialBackoffExpired() {
          return this.sleepTime > this.maxSleepTime;
        }
        _makeProgressCallback() {
          let e = this._transferred;
          return (t) => this._updateProgress(e + t);
        }
        _shouldDoResumable(e) {
          return e.size() > 262144;
        }
        _start() {
          'running' === this._state &&
            void 0 === this._request &&
            (this._resumable
              ? void 0 === this._uploadUrl
                ? this._createResumable()
                : this._needToFetchStatus
                ? this._fetchStatus()
                : this._needToFetchMetadata
                ? this._fetchMetadata()
                : (this.pendingTimeout = setTimeout(() => {
                    (this.pendingTimeout = void 0), this._continueUpload();
                  }, this.sleepTime))
              : this._oneShotUpload());
        }
        _resolveToken(e) {
          Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken()
          ]).then(([t, n]) => {
            switch (this._state) {
              case 'running':
                e(t, n);
                break;
              case 'canceling':
                this._transition('canceled');
                break;
              case 'pausing':
                this._transition('paused');
            }
          });
        }
        _createResumable() {
          this._resolveToken((e, t) => {
            let n = (function (e, t, n, r, i) {
                let s = t.bucketOnlyServerUrl(),
                  a = J(t, r, i),
                  o = { name: a.fullPath },
                  l = S(s, e.host, e._protocol),
                  u = {
                    'X-Goog-Upload-Protocol': 'resumable',
                    'X-Goog-Upload-Command': 'start',
                    'X-Goog-Upload-Header-Content-Length': `${r.size()}`,
                    'X-Goog-Upload-Header-Content-Type': a.contentType,
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  h = H(a, n),
                  c = e.maxUploadRetryTime,
                  d = new K(
                    l,
                    'POST',
                    function (e) {
                      Z(e);
                      let t;
                      try {
                        t = e.getResponseHeader('X-Goog-Upload-URL');
                      } catch (n) {
                        G(!1);
                      }
                      return G(T(t)), t;
                    },
                    c
                  );
                return (
                  (d.urlParams = o),
                  (d.headers = u),
                  (d.body = h),
                  (d.errorHandler = Q(t)),
                  d
                );
              })(
                this._ref.storage,
                this._ref._location,
                this._mappings,
                this._blob,
                this._metadata
              ),
              r = this._ref.storage._makeRequest(n, ea, e, t);
            (this._request = r),
              r.getPromise().then((e) => {
                (this._request = void 0),
                  (this._uploadUrl = e),
                  (this._needToFetchStatus = !1),
                  this.completeTransitions_();
              }, this._errorHandler);
          });
        }
        _fetchStatus() {
          let e = this._uploadUrl;
          this._resolveToken((t, n) => {
            let r = (function (e, t, n, r) {
                let i = e.maxUploadRetryTime,
                  s = new K(
                    n,
                    'POST',
                    function (e) {
                      let t = Z(e, ['active', 'final']),
                        n = null;
                      try {
                        n = e.getResponseHeader('X-Goog-Upload-Size-Received');
                      } catch (i) {
                        G(!1);
                      }
                      n || G(!1);
                      let s = Number(n);
                      return G(!isNaN(s)), new Y(s, r.size(), 'final' === t);
                    },
                    i
                  );
                return (
                  (s.headers = { 'X-Goog-Upload-Command': 'query' }),
                  (s.errorHandler = Q(t)),
                  s
                );
              })(this._ref.storage, this._ref._location, e, this._blob),
              i = this._ref.storage._makeRequest(r, ea, t, n);
            (this._request = i),
              i.getPromise().then((e) => {
                (this._request = void 0),
                  this._updateProgress(e.current),
                  (this._needToFetchStatus = !1),
                  e.finalized && (this._needToFetchMetadata = !0),
                  this.completeTransitions_();
              }, this._errorHandler);
          });
        }
        _continueUpload() {
          let e = 262144 * this._chunkMultiplier,
            t = new Y(this._transferred, this._blob.size()),
            n = this._uploadUrl;
          this._resolveToken((r, i) => {
            let s;
            try {
              s = (function (e, t, n, r, i, s, a, o) {
                let l = new Y(0, 0);
                if (
                  (a
                    ? ((l.current = a.current), (l.total = a.total))
                    : ((l.current = 0), (l.total = r.size())),
                  r.size() !== l.total)
                )
                  throw new h(
                    'server-file-wrong-size',
                    'Server recorded incorrect upload file size, please retry the upload.'
                  );
                let u = l.total - l.current,
                  c = u;
                i > 0 && (c = Math.min(c, i));
                let d = l.current,
                  f = d + c,
                  p = '';
                p =
                  0 === c
                    ? 'finalize'
                    : u === c
                    ? 'upload, finalize'
                    : 'upload';
                let g = {
                    'X-Goog-Upload-Command': p,
                    'X-Goog-Upload-Offset': `${l.current}`
                  },
                  y = r.slice(d, f);
                if (null === y) throw m();
                let v = t.maxUploadRetryTime,
                  w = new K(
                    n,
                    'POST',
                    function (e, n) {
                      let i = Z(e, ['active', 'final']),
                        a = l.current + c,
                        o = r.size(),
                        u;
                      return (
                        (u = 'final' === i ? W(t, s)(e, n) : null),
                        new Y(a, o, 'final' === i, u)
                      );
                    },
                    v
                  );
                return (
                  (w.headers = g),
                  (w.body = y.uploadData()),
                  (w.progressCallback = o || null),
                  (w.errorHandler = Q(e)),
                  w
                );
              })(
                this._ref._location,
                this._ref.storage,
                n,
                this._blob,
                e,
                this._mappings,
                t,
                this._makeProgressCallback()
              );
            } catch (a) {
              (this._error = a), this._transition('error');
              return;
            }
            let o = this._ref.storage._makeRequest(s, ea, r, i, !1);
            (this._request = o),
              o.getPromise().then((e) => {
                this._increaseMultiplier(),
                  (this._request = void 0),
                  this._updateProgress(e.current),
                  e.finalized
                    ? ((this._metadata = e.metadata),
                      this._transition('success'))
                    : this.completeTransitions_();
              }, this._errorHandler);
          });
        }
        _increaseMultiplier() {
          let e = 262144 * this._chunkMultiplier;
          2 * e < 33554432 && (this._chunkMultiplier *= 2);
        }
        _fetchMetadata() {
          this._resolveToken((e, t) => {
            let n = (function (e, t, n) {
                let r = t.fullServerUrl(),
                  i = S(r, e.host, e._protocol),
                  s = e.maxOperationRetryTime,
                  a = new K(i, 'GET', W(e, n), s);
                return (a.errorHandler = X(t)), a;
              })(this._ref.storage, this._ref._location, this._mappings),
              r = this._ref.storage._makeRequest(n, ea, e, t);
            (this._request = r),
              r.getPromise().then((e) => {
                (this._request = void 0),
                  (this._metadata = e),
                  this._transition('success');
              }, this._metadataErrorHandler);
          });
        }
        _oneShotUpload() {
          this._resolveToken((e, t) => {
            let n = (function (e, t, n, r, i) {
                let s = t.bucketOnlyServerUrl(),
                  a = { 'X-Goog-Upload-Protocol': 'multipart' },
                  o = (function () {
                    let e = '';
                    for (let t = 0; t < 2; t++)
                      e += Math.random().toString().slice(2);
                    return e;
                  })();
                a['Content-Type'] = 'multipart/related; boundary=' + o;
                let l = J(t, r, i),
                  u = H(l, n),
                  h =
                    '--' +
                    o +
                    '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
                    u +
                    '\r\n--' +
                    o +
                    '\r\nContent-Type: ' +
                    l.contentType +
                    '\r\n\r\n',
                  c = U.getBlob(h, r, '\r\n--' + o + '--');
                if (null === c) throw m();
                let d = { name: l.fullPath },
                  f = S(s, e.host, e._protocol),
                  p = e.maxUploadRetryTime,
                  g = new K(f, 'POST', W(e, n), p);
                return (
                  (g.urlParams = d),
                  (g.headers = a),
                  (g.body = c.uploadData()),
                  (g.errorHandler = Q(t)),
                  g
                );
              })(
                this._ref.storage,
                this._ref._location,
                this._mappings,
                this._blob,
                this._metadata
              ),
              r = this._ref.storage._makeRequest(n, ea, e, t);
            (this._request = r),
              r.getPromise().then((e) => {
                (this._request = void 0),
                  (this._metadata = e),
                  this._updateProgress(this._blob.size()),
                  this._transition('success');
              }, this._errorHandler);
          });
        }
        _updateProgress(e) {
          let t = this._transferred;
          (this._transferred = e),
            this._transferred !== t && this._notifyObservers();
        }
        _transition(e) {
          if (this._state !== e)
            switch (e) {
              case 'canceling':
              case 'pausing':
                (this._state = e),
                  void 0 !== this._request
                    ? this._request.cancel()
                    : this.pendingTimeout &&
                      (clearTimeout(this.pendingTimeout),
                      (this.pendingTimeout = void 0),
                      this.completeTransitions_());
                break;
              case 'running':
                let t = 'paused' === this._state;
                (this._state = e),
                  t && (this._notifyObservers(), this._start());
                break;
              case 'paused':
              case 'error':
              case 'success':
                (this._state = e), this._notifyObservers();
                break;
              case 'canceled':
                (this._error = p()), (this._state = e), this._notifyObservers();
            }
        }
        completeTransitions_() {
          switch (this._state) {
            case 'pausing':
              this._transition('paused');
              break;
            case 'canceling':
              this._transition('canceled');
              break;
            case 'running':
              this._start();
          }
        }
        get snapshot() {
          let e = et(this._state);
          return {
            bytesTransferred: this._transferred,
            totalBytes: this._blob.size(),
            state: e,
            metadata: this._metadata,
            task: this,
            ref: this._ref
          };
        }
        on(e, t, n, r) {
          let i = new en(t || void 0, n || void 0, r || void 0);
          return (
            this._addObserver(i),
            () => {
              this._removeObserver(i);
            }
          );
        }
        then(e, t) {
          return this._promise.then(e, t);
        }
        catch(e) {
          return this.then(null, e);
        }
        _addObserver(e) {
          this._observers.push(e), this._notifyObserver(e);
        }
        _removeObserver(e) {
          let t = this._observers.indexOf(e);
          -1 !== t && this._observers.splice(t, 1);
        }
        _notifyObservers() {
          this._finishPromise();
          let e = this._observers.slice();
          e.forEach((e) => {
            this._notifyObserver(e);
          });
        }
        _finishPromise() {
          if (void 0 !== this._resolve) {
            let e = !0;
            switch (et(this._state)) {
              case ee.SUCCESS:
                er(this._resolve.bind(null, this.snapshot))();
                break;
              case ee.CANCELED:
              case ee.ERROR:
                let t = this._reject;
                er(t.bind(null, this._error))();
                break;
              default:
                e = !1;
            }
            e && ((this._resolve = void 0), (this._reject = void 0));
          }
        }
        _notifyObserver(e) {
          let t = et(this._state);
          switch (t) {
            case ee.RUNNING:
            case ee.PAUSED:
              e.next && er(e.next.bind(e, this.snapshot))();
              break;
            case ee.SUCCESS:
              e.complete && er(e.complete.bind(e))();
              break;
            case ee.CANCELED:
            case ee.ERROR:
            default:
              e.error && er(e.error.bind(e, this._error))();
          }
        }
        resume() {
          let e = 'paused' === this._state || 'pausing' === this._state;
          return e && this._transition('running'), e;
        }
        pause() {
          let e = 'running' === this._state;
          return e && this._transition('pausing'), e;
        }
        cancel() {
          let e = 'running' === this._state || 'pausing' === this._state;
          return e && this._transition('canceling'), e;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class el {
        constructor(e, t) {
          (this._service = e),
            t instanceof _
              ? (this._location = t)
              : (this._location = _.makeFromUrl(t, e.host));
        }
        toString() {
          return 'gs://' + this._location.bucket + '/' + this._location.path;
        }
        _newRef(e, t) {
          return new el(e, t);
        }
        get root() {
          let e = new _(this._location.bucket, '');
          return this._newRef(this._service, e);
        }
        get bucket() {
          return this._location.bucket;
        }
        get fullPath() {
          return this._location.path;
        }
        get name() {
          return V(this._location.path);
        }
        get storage() {
          return this._service;
        }
        get parent() {
          let e = /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */ (function (e) {
            if (0 === e.length) return null;
            let t = e.lastIndexOf('/');
            if (-1 === t) return '';
            let n = e.slice(0, t);
            return n;
          })(this._location.path);
          if (null === e) return null;
          let t = new _(this._location.bucket, e);
          return new el(this._service, t);
        }
        _throwIfRoot(e) {
          if ('' === this._location.path) {
            var t;
            throw new h(
              'invalid-root-operation',
              "The operation '" +
                e +
                "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
            );
          }
        }
      }
      function eu(e, t) {
        let n = null == t ? void 0 : t[u];
        return null == n ? null : _.makeFromBucketSpec(n, e);
      }
      class eh {
        constructor(e, t, n, r, i) {
          (this.app = e),
            (this._authProvider = t),
            (this._appCheckProvider = n),
            (this._url = r),
            (this._firebaseVersion = i),
            (this._bucket = null),
            (this._host = l),
            (this._protocol = 'https'),
            (this._appId = null),
            (this._deleted = !1),
            (this._maxOperationRetryTime = 12e4),
            (this._maxUploadRetryTime = 6e5),
            (this._requests = new Set()),
            null != r
              ? (this._bucket = _.makeFromBucketSpec(r, this._host))
              : (this._bucket = eu(this._host, this.app.options));
        }
        get host() {
          return this._host;
        }
        set host(e) {
          (this._host = e),
            null != this._url
              ? (this._bucket = _.makeFromBucketSpec(this._url, e))
              : (this._bucket = eu(e, this.app.options));
        }
        get maxUploadRetryTime() {
          return this._maxUploadRetryTime;
        }
        set maxUploadRetryTime(e) {
          k('time', 0, Number.POSITIVE_INFINITY, e),
            (this._maxUploadRetryTime = e);
        }
        get maxOperationRetryTime() {
          return this._maxOperationRetryTime;
        }
        set maxOperationRetryTime(e) {
          k('time', 0, Number.POSITIVE_INFINITY, e),
            (this._maxOperationRetryTime = e);
        }
        async _getAuthToken() {
          if (this._overrideAuthToken) return this._overrideAuthToken;
          let e = this._authProvider.getImmediate({ optional: !0 });
          if (e) {
            let t = await e.getToken();
            if (null !== t) return t.accessToken;
          }
          return null;
        }
        async _getAppCheckToken() {
          let e = this._appCheckProvider.getImmediate({ optional: !0 });
          if (e) {
            let t = await e.getToken();
            return t.token;
          }
          return null;
        }
        _delete() {
          return (
            this._deleted ||
              ((this._deleted = !0),
              this._requests.forEach((e) => e.cancel()),
              this._requests.clear()),
            Promise.resolve()
          );
        }
        _makeStorageReference(e) {
          return new el(this, e);
        }
        _makeRequest(e, t, n, r, i = !0) {
          if (this._deleted) return new b(y());
          {
            let s = (function (e, t, n, r, i, s, a = !0) {
              var o, l, u, h, c, d, f, p;
              let m = C(e.urlParams),
                g = e.url + m,
                y = Object.assign({}, e.headers);
              return (
                (o = y),
                t && (o['X-Firebase-GMPID'] = t),
                (u = y),
                null !== n &&
                  n.length > 0 &&
                  (u.Authorization = 'Firebase ' + n),
                ((c = y)['X-Firebase-Storage-Version'] =
                  'webjs/' + (null != s ? s : 'AppManager')),
                (f = y),
                null !== r && (f['X-Firebase-AppCheck'] = r),
                new R(
                  g,
                  e.method,
                  y,
                  e.body,
                  e.successCodes,
                  e.additionalRetryCodes,
                  e.handler,
                  e.errorHandler,
                  e.timeout,
                  e.progressCallback,
                  i,
                  a
                )
              );
            })(e, this._appId, n, r, t, this._firebaseVersion, i);
            return (
              this._requests.add(s),
              s.getPromise().then(
                () => this._requests.delete(s),
                () => this._requests.delete(s)
              ),
              s
            );
          }
        }
        async makeRequestWithTokens(e, t) {
          let [n, r] = await Promise.all([
            this._getAuthToken(),
            this._getAppCheckToken()
          ]);
          return this._makeRequest(e, t, n, r).getPromise();
        }
      }
      let ec = '@firebase/storage',
        ed = '0.9.13',
        ef = 'storage';
      function ep(e, t, n) {
        var r, i, s;
        return (
          (r = e = (0, a.m9)(e))._throwIfRoot('uploadBytesResumable'),
          new eo(r, new U(t), n)
        );
      }
      function em(e) {
        return (function (e) {
          e._throwIfRoot('getDownloadURL');
          let t = (function (e, t, n) {
            var r, i;
            let s = t.fullServerUrl(),
              a = S(s, e.host, e._protocol),
              o = e.maxOperationRetryTime,
              l = new K(
                a,
                'GET',
                function (t, r) {
                  let i = z(e, r, n);
                  return (
                    G(null !== i),
                    (function (e, t, n, r) {
                      let i = F(t);
                      if (null === i || !T(i.downloadTokens)) return null;
                      let s = i.downloadTokens;
                      if (0 === s.length) return null;
                      let a = encodeURIComponent,
                        o = s.split(','),
                        l = o.map((t) => {
                          let i = e.bucket,
                            s = e.fullPath,
                            o = '/b/' + a(i) + '/o/' + a(s),
                            l = S(o, n, r),
                            u = C({ alt: 'media', token: t });
                          return l + u;
                        });
                      return l[0];
                    })(i, r, e.host, e._protocol)
                  );
                },
                o
              );
            return (l.errorHandler = X(t)), l;
          })(e.storage, e._location, $());
          return e.storage.makeRequestWithTokens(t, ea).then((e) => {
            if (null === e)
              throw new h(
                'no-download-url',
                'The given file does not have any download URLs.'
              );
            return e;
          });
        })((e = (0, a.m9)(e)));
      }
      function eg(e, t) {
        return (function (e, t) {
          var n, r, i;
          if (!(t && /^[A-Za-z]+:\/\//.test(t)))
            return (function e(t, n) {
              if (t instanceof eh) {
                if (null == t._bucket)
                  throw new h(
                    'no-default-bucket',
                    "No default bucket found. Did you set the '" +
                      u +
                      "' property when initializing the app?"
                  );
                let r = new el(t, t._bucket);
                return null != n ? e(r, n) : r;
              }
              return void 0 !== n
                ? (function (e, t) {
                    let n = (function (e, t) {
                        let n = t
                          .split('/')
                          .filter((e) => e.length > 0)
                          .join('/');
                        return 0 === e.length ? n : e + '/' + n;
                      })(e._location.path, t),
                      r = new _(e._location.bucket, n);
                    return new el(e.storage, r);
                  })(t, n)
                : t;
            })(e, t);
          if (e instanceof eh) return (r = e), (i = t), new el(r, i);
          throw g(
            'To use ref(service, url), the first argument must be a Storage instance.'
          );
        })((e = (0, a.m9)(e)), t);
      }
      function ey(e = (0, s.Mq)(), t) {
        e = (0, a.m9)(e);
        let n = (0, s.qX)(e, ef),
          r = n.getImmediate({ identifier: t }),
          i = (0, a.P0)('storage');
        return i && ev(r, ...i), r;
      }
      function ev(e, t, n, r = {}) {
        !(function (e, t, n, r = {}) {
          (e.host = `${t}:${n}`), (e._protocol = 'http');
          let { mockUserToken: i } = r;
          i &&
            (e._overrideAuthToken =
              'string' == typeof i ? i : (0, a.Sg)(i, e.app.options.projectId));
        })(e, t, n, r);
      }
      (0, s.Xd)(
        new o.wA(
          ef,
          function e(t, { instanceIdentifier: n }) {
            let r = t.getProvider('app').getImmediate(),
              i = t.getProvider('auth-internal'),
              a = t.getProvider('app-check-internal');
            return new eh(r, i, a, n, s.Jn);
          },
          'PUBLIC'
        ).setMultipleInstances(!0)
      ),
        (0, s.KN)(ec, ed, ''),
        (0, s.KN)(ec, ed, 'esm2017');
    },
    3454: function (e, t, n) {
      'use strict';
      var r, i;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        'object' == typeof (null == (i = n.g.process) ? void 0 : i.env)
          ? n.g.process
          : n(7663);
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(4036);
        }
      ]);
    },
    2108: function (e, t, n) {
      'use strict';
      n.d(t, {
        HD: function () {
          return p;
        },
        aC: function () {
          return m;
        }
      });
      var r = n(7568),
        i = n(655),
        s = n(5893),
        a = n(7294),
        o = n(8006),
        l = n(5321),
        u = n(9774),
        h = n(1940),
        c = n(5195),
        d = n(7359),
        f = (0, a.createContext)(null);
      function p(e) {
        var t,
          n = e.children,
          p = (0, a.useState)(null),
          m = p[0],
          g = p[1],
          y = (0, a.useState)(null),
          v = y[0],
          w = y[1],
          _ = (0, a.useState)(null),
          b = _[0],
          T = _[1],
          I = (0, a.useState)(!0),
          E = I[0],
          k = I[1];
        (0, a.useEffect)(function () {
          var e,
            t =
              ((e = (0, r.Z)(function (e) {
                var t, n, r, s, a, o, u, f, p, m, y, v, w, _;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = e.uid),
                        (n = e.displayName),
                        (r = e.photoURL),
                        [4, (0, l.QT)((0, l.JU)(h.W$, t))]
                      );
                    case 1:
                      if ((s = i.sent()).exists()) return [3, 10];
                      (a = !1), (o = ''), (i.label = 2);
                    case 2:
                      if (a) return [3, 4];
                      return (
                        (u =
                          null == n
                            ? void 0
                            : n.replace(/\s/g, '').toLowerCase()),
                        (f = (0, c.X)(1, 1e4)),
                        (o = ''.concat(u).concat(f)),
                        [4, (0, d.EJ)(o)]
                      );
                    case 3:
                      return i.sent() && (a = !0), [3, 2];
                    case 4:
                      (m = {
                        id: t,
                        bio: null,
                        name: n,
                        theme: null,
                        accent: null,
                        website: null,
                        location: null,
                        photoURL: null != r ? r : '/assets/twitter-avatar.jpg',
                        username: o,
                        verified: !1,
                        following: [],
                        followers: [],
                        createdAt: (0, l.Bt)(),
                        updatedAt: null,
                        totalTweets: 0,
                        totalPhotos: 0,
                        pinnedTweet: null,
                        coverPhotoURL: null
                      }),
                        (y = { likes: [], tweets: [], updatedAt: null }),
                        (i.label = 5);
                    case 5:
                      return (
                        i.trys.push([5, 8, , 9]),
                        [
                          4,
                          Promise.all([
                            (0, l.pl)((0, l.JU)(h.W$, t), m),
                            (0, l.pl)((0, l.JU)((0, h.bR)(t), 'stats'), y)
                          ])
                        ]
                      );
                    case 6:
                      return i.sent(), [4, (0, l.QT)((0, l.JU)(h.W$, t))];
                    case 7:
                      return g(i.sent().data()), [3, 9];
                    case 8:
                      return T(i.sent()), [3, 9];
                    case 9:
                      return [3, 11];
                    case 10:
                      g(s.data()), (i.label = 11);
                    case 11:
                      return k(!1), [2];
                  }
                });
              })),
              function (t) {
                return e.apply(this, arguments);
              }),
            n = function (e) {
              k(!0), e ? t(e) : (g(null), k(!1));
            };
          (0, o.Aj)(u.I8, n);
        }, []),
          (0, a.useEffect)(
            function () {
              if (m) {
                var e = m.id,
                  t = (0, l.cf)((0, l.JU)(h.W$, e), function (e) {
                    g(e.data());
                  }),
                  n = (0, l.cf)((0, h.we)(e), function (e) {
                    w(
                      e.docs.map(function (e) {
                        return e.data();
                      })
                    );
                  });
                return function () {
                  t(), n();
                };
              }
            },
            [null == m ? void 0 : m.id]
          );
        var S,
          C =
            ((t = (0, r.Z)(function () {
              var e, t;
              return (0, i.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      t.trys.push([0, 2, , 3]),
                      (e = new o.hJ()),
                      [4, (0, o.rh)(u.I8, e)]
                    );
                  case 1:
                    return t.sent(), [3, 3];
                  case 2:
                    return T(t.sent()), [3, 3];
                  case 3:
                    return [2];
                }
              });
            })),
            function () {
              return t.apply(this, arguments);
            }),
          A =
            ((S = (0, r.Z)(function () {
              var e;
              return (0, i.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 2, , 3]), [4, (0, o.w7)(u.I8)];
                  case 1:
                    return e.sent(), [3, 3];
                  case 2:
                    return T(e.sent()), [3, 3];
                  case 3:
                    return [2];
                }
              });
            })),
            function () {
              return S.apply(this, arguments);
            }),
          R = !!m && 'ccrsxx' === m.username,
          N = (0, a.useMemo)(c.w, [null == m ? void 0 : m.id]);
        return (0, s.jsx)(f.Provider, {
          value: {
            user: m,
            error: b,
            loading: E,
            isAdmin: R,
            randomSeed: N,
            userBookmarks: v,
            signOut: A,
            signInWithGoogle: C
          },
          children: n
        });
      }
      function m() {
        var e = (0, a.useContext)(f);
        if (!e)
          throw Error('useAuth must be used within an AuthContextProvider');
        return e;
      }
    },
    5655: function (e, t, n) {
      'use strict';
      n.d(t, {
        Fg: function () {
          return c;
        },
        ze: function () {
          return h;
        }
      });
      var r = n(5893),
        i = n(7294),
        s = n(7359),
        a = n(2108),
        o = (0, i.createContext)(null);
      function l() {
        var e = localStorage.getItem('theme'),
          t = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return null != e ? e : t ? 'dark' : 'light';
      }
      function u() {
        var e = localStorage.getItem('accent');
        return null != e ? e : 'blue';
      }
      function h(e) {
        var t = e.children,
          n = (0, i.useState)(l),
          h = n[0],
          c = n[1],
          d = (0, i.useState)(u),
          f = d[0],
          p = d[1],
          m = (0, a.aC)().user,
          g = null != m ? m : {},
          y = g.id,
          v = g.theme,
          w = g.accent;
        (0, i.useEffect)(
          function () {
            m && v && c(v);
          },
          [y, v]
        ),
          (0, i.useEffect)(
            function () {
              m && w && p(w);
            },
            [y, w]
          ),
          (0, i.useEffect)(
            function () {
              var e = (function (e) {
                var t = document.documentElement;
                if (
                  ('dark' === ('dim' === e ? 'dark' : e)
                    ? t.classList.add('dark')
                    : t.classList.remove('dark'),
                  t.style.setProperty(
                    '--main-background',
                    'var(--'.concat(e, '-background)')
                  ),
                  t.style.setProperty(
                    '--main-search-background',
                    'var(--'.concat(e, '-search-background)')
                  ),
                  t.style.setProperty(
                    '--main-sidebar-background',
                    'var(--'.concat(e, '-sidebar-background)')
                  ),
                  m)
                )
                  return (
                    localStorage.setItem('theme', e),
                    setTimeout(function () {
                      (0, s.Zs)(m.id, { theme: e });
                    }, 500)
                  );
              })(h);
              return function () {
                return clearTimeout(e);
              };
            },
            [y, h]
          ),
          (0, i.useEffect)(
            function () {
              var e = (function (e) {
                if (
                  (document.documentElement.style.setProperty(
                    '--main-accent',
                    'var(--accent-'.concat(e, ')')
                  ),
                  m)
                )
                  return (
                    localStorage.setItem('accent', e),
                    setTimeout(function () {
                      (0, s.Zs)(m.id, { accent: e });
                    }, 500)
                  );
              })(f);
              return function () {
                return clearTimeout(e);
              };
            },
            [y, f]
          );
        var _ = function (e) {
            return c(e.target.value);
          },
          b = function (e) {
            return p(e.target.value);
          };
        return (0, r.jsx)(o.Provider, {
          value: { theme: h, accent: f, changeTheme: _, changeAccent: b },
          children: t
        });
      }
      function c() {
        var e = (0, i.useContext)(o);
        if (!e)
          throw Error('useTheme must be used within an ThemeContextProvider');
        return e;
      }
    },
    1923: function (e, t, n) {
      'use strict';
      n.d(t, {
        f7: function () {
          return s;
        },
        nc: function () {
          return i;
        }
      });
      var r = n(3454),
        i = !1,
        s = r.env.NEXT_PUBLIC_URL;
    },
    9774: function (e, t, n) {
      'use strict';
      n.d(t, {
        I8: function () {
          return L;
        },
        db: function () {
          return O;
        },
        tO: function () {
          return P;
        }
      });
      var r,
        i,
        s,
        a,
        o,
        l,
        u,
        h,
        c,
        d,
        f,
        p,
        m = n(5816);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ (0, m.KN)('firebase', '9.13.0', 'app');
      var g = n(8006),
        y = n(5321),
        v = n(1153),
        w = n(4444),
        _ = n(8463);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let b = 'functions';
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class T {
        constructor(e, t, n) {
          (this.auth = null),
            (this.messaging = null),
            (this.appCheck = null),
            (this.auth = e.getImmediate({ optional: !0 })),
            (this.messaging = t.getImmediate({ optional: !0 })),
            this.auth ||
              e.get().then(
                (e) => (this.auth = e),
                () => {}
              ),
            this.messaging ||
              t.get().then(
                (e) => (this.messaging = e),
                () => {}
              ),
            this.appCheck ||
              n.get().then(
                (e) => (this.appCheck = e),
                () => {}
              );
        }
        async getAuthToken() {
          if (this.auth)
            try {
              let e = await this.auth.getToken();
              return null == e ? void 0 : e.accessToken;
            } catch (t) {
              return;
            }
        }
        async getMessagingToken() {
          if (
            this.messaging &&
            'Notification' in self &&
            'granted' === Notification.permission
          )
            try {
              return await this.messaging.getToken();
            } catch (e) {
              return;
            }
        }
        async getAppCheckToken() {
          if (this.appCheck) {
            let e = await this.appCheck.getToken();
            return e.error ? null : e.token;
          }
          return null;
        }
        async getContext() {
          let e = await this.getAuthToken(),
            t = await this.getMessagingToken(),
            n = await this.getAppCheckToken();
          return { authToken: e, messagingToken: t, appCheckToken: n };
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let I = 'us-central1';
      class E {
        constructor(e, t, n, r, i = I, s) {
          (this.app = e),
            (this.fetchImpl = s),
            (this.emulatorOrigin = null),
            (this.contextProvider = new T(t, n, r)),
            (this.cancelAllRequests = new Promise((e) => {
              this.deleteService = () => Promise.resolve(e());
            }));
          try {
            let a = new URL(i);
            (this.customDomain = a.origin), (this.region = I);
          } catch (o) {
            (this.customDomain = null), (this.region = i);
          }
        }
        _delete() {
          return this.deleteService();
        }
        _url(e) {
          let t = this.app.options.projectId;
          if (null !== this.emulatorOrigin) {
            let n = this.emulatorOrigin;
            return `${n}/${t}/${this.region}/${e}`;
          }
          return null !== this.customDomain
            ? `${this.customDomain}/${e}`
            : `https://${this.region}-${t}.cloudfunctions.net/${e}`;
        }
      }
      let k = '@firebase/functions',
        S = '0.8.8';
      function C(e, t, n) {
        var r, i, s;
        (r = (0, w.m9)(e)).emulatorOrigin = `http://${t}:${n}`;
      }
      !(function (e, t) {
        let n = (t, { instanceIdentifier: n }) => {
          let r = t.getProvider('app').getImmediate(),
            i = t.getProvider('auth-internal'),
            s = t.getProvider('messaging-internal'),
            a = t.getProvider('app-check-internal');
          return new E(r, i, s, a, n, e);
        };
        (0, m.Xd)(new _.wA(b, n, 'PUBLIC').setMultipleInstances(!0)),
          (0, m.KN)(k, S, void 0),
          (0, m.KN)(k, S, 'esm2017');
      })(fetch.bind(self));
      var A = n(1923),
        R = n(3454),
        N = {
          apiKey: R.env.NEXT_PUBLIC_API_KEY,
          authDomain: R.env.NEXT_PUBLIC_AUTH_DOMAIN,
          projectId: R.env.NEXT_PUBLIC_PROJECT_ID,
          storageBucket: R.env.NEXT_PUBLIC_STORAGE_BUCKET,
          messagingSenderId: R.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
          appId: R.env.NEXT_PUBLIC_APP_ID,
          measurementId: 'G-LL4RERTMBB'
        },
        D =
          ((p =
            ((u = (0, m.ZF)(
              (function () {
                if (
                  Object.values(N).some(function (e) {
                    return !e;
                  })
                )
                  throw Error('Firebase config is not set or incomplete');
                return N;
              })()
            )),
            (h = (0, g.v0)(u)),
            (c = (0, v.cF)(u)),
            (d = (0, y.ad)(u)),
            (f = /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */ (function (e = (0, m.Mq)(), t = I) {
              let n = (0, m.qX)((0, w.m9)(e), b),
                r = n.getImmediate({ identifier: t }),
                i = (0, w.P0)('functions');
              return i && C(r, ...i), r;
            })(u)),
            {
              firebaseApp: u,
              auth: h,
              firestore: d,
              storage: c,
              functions: f
            })),
          A.nc
            ? ((i = (r = p).auth),
              (s = r.storage),
              (a = r.firestore),
              (o = r.functions),
              (l = r.firebaseApp),
              (0, g.S$)(i, 'http://localhost:9099', { disableWarnings: !0 }),
              (0, v.a1)(s, 'localhost', 9199),
              (0, y.at)(a, 'localhost', 8080),
              C(o, 'localhost', 5001),
              {
                firebaseApp: l,
                auth: i,
                firestore: a,
                storage: s,
                functions: o
              })
            : p),
        O = D.firestore,
        L = D.auth,
        P = D.storage;
    },
    1940: function (e, t, n) {
      'use strict';
      n.d(t, {
        VV: function () {
          return u;
        },
        we: function () {
          return h;
        },
        bR: function () {
          return c;
        },
        W$: function () {
          return l;
        }
      });
      var r = n(5321),
        i = n(6042),
        s = {
          toFirestore: function (e) {
            return (0, i.Z)({}, e);
          },
          fromFirestore: function (e, t) {
            var n = e.data(t);
            return (0, i.Z)({}, n);
          }
        },
        a = {
          toFirestore: function (e) {
            return (0, i.Z)({}, e);
          },
          fromFirestore: function (e, t) {
            var n = e.data(t);
            return (0, i.Z)({}, n);
          }
        },
        o = n(9774),
        l = (0, r.hJ)(o.db, 'users').withConverter({
          toFirestore: function (e) {
            return (0, i.Z)({}, e);
          },
          fromFirestore: function (e, t) {
            var n = e.data(t);
            return (0, i.Z)({}, n);
          }
        }),
        u = (0, r.hJ)(o.db, 'tweets').withConverter({
          toFirestore: function (e) {
            return (0, i.Z)({}, e);
          },
          fromFirestore: function (e, t) {
            var n = e.id,
              r = e.data(t);
            return (0, i.Z)({ id: n }, r);
          }
        });
      function h(e) {
        return (0, r.hJ)(o.db, 'users/'.concat(e, '/bookmarks')).withConverter(
          s
        );
      }
      function c(e) {
        return (0, r.hJ)(o.db, 'users/'.concat(e, '/stats')).withConverter(a);
      }
    },
    7359: function (e, t, n) {
      'use strict';
      n.d(t, {
        $1: function () {
          return D;
        },
        Al: function () {
          return m;
        },
        BB: function () {
          return f;
        },
        EJ: function () {
          return c;
        },
        Mq: function () {
          return R;
        },
        R1: function () {
          return M;
        },
        X_: function () {
          return b;
        },
        Zs: function () {
          return y;
        },
        _A: function () {
          return k;
        },
        _S: function () {
          return w;
        },
        aE: function () {
          return x;
        },
        as: function () {
          return V;
        },
        eg: function () {
          return C;
        },
        gL: function () {
          return I;
        },
        iq: function () {
          return L;
        },
        mN: function () {
          return U;
        }
      });
      var r = n(7568),
        i = n(6042),
        s = n(9396),
        a = n(655),
        o = n(5321),
        l = n(1153),
        u = n(9774),
        h = n(1940);
      function c(e) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = (0, r.Z)(function (e) {
          var t;
          return (0, a.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  (0, o.PL)(
                    (0, o.IO)(
                      h.W$,
                      (0, o.ar)('username', '==', e),
                      (0, o.b9)(1)
                    )
                  )
                ];
              case 1:
                return [2, t.sent().empty];
            }
          });
        })).apply(this, arguments);
      }
      function f(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = (0, r.Z)(function (e) {
          var t;
          return (0, a.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, (0, o.Yp)(e)];
              case 1:
                return [2, t.sent().data().count];
            }
          });
        })).apply(this, arguments);
      }
      function m(e, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, o.JU)(h.W$, e)),
                  [
                    4,
                    (0, o.r7)(
                      n,
                      (0, s.Z)((0, i.Z)({}, t), { updatedAt: (0, o.Bt)() })
                    )
                  ]
                );
              case 1:
                return r.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function y(e, t) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, o.JU)(h.W$, e)), [4, (0, o.r7)(n, (0, i.Z)({}, t))]
                );
              case 1:
                return r.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function w(e, t) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, o.JU)(h.W$, e)),
                  [
                    4,
                    (0, o.r7)(
                      n,
                      (0, s.Z)((0, i.Z)({}, t && { username: t }), {
                        updatedAt: (0, o.Bt)()
                      })
                    )
                  ]
                );
              case 1:
                return r.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function b(e, t, n) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = (0, r.Z)(function (e, t, n) {
          var r;
          return (0, a.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (r = (0, o.JU)(h.W$, t)),
                  [
                    4,
                    (0, o.r7)(r, {
                      updatedAt: (0, o.Bt)(),
                      pinnedTweet: 'pin' === e ? n : null
                    })
                  ]
                );
              case 1:
                return i.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function I(e, t, n) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = (0, r.Z)(function (e, t, n) {
          var r, i, s;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (r = (0, o.qs)(u.db)),
                  (i = (0, o.JU)(h.W$, t)),
                  (s = (0, o.JU)(h.W$, n)),
                  'follow' === e
                    ? (r.update(i, {
                        following: (0, o.vr)(n),
                        updatedAt: (0, o.Bt)()
                      }),
                      r.update(s, {
                        followers: (0, o.vr)(t),
                        updatedAt: (0, o.Bt)()
                      }))
                    : (r.update(i, {
                        following: (0, o.Ab)(n),
                        updatedAt: (0, o.Bt)()
                      }),
                      r.update(s, {
                        followers: (0, o.Ab)(t),
                        updatedAt: (0, o.Bt)()
                      })),
                  [4, r.commit()]
                );
              case 1:
                return a.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function k(e) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = (0, r.Z)(function (e) {
          var t;
          return (0, a.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return (t = (0, o.JU)(h.VV, e)), [4, (0, o.oe)(t)];
              case 1:
                return n.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function C(e, t) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                var i;
                if (!t.length) return [2, null];
                return [
                  4,
                  Promise.all(
                    t.map(
                      ((i = (0, r.Z)(function (t) {
                        var n, r, i, s, o;
                        return (0, a.__generator)(this, function (a) {
                          switch (a.label) {
                            case 0:
                              return (
                                (n = t.id),
                                (r = t.name),
                                (i = t.type),
                                (s = (0, l.iH)(
                                  u.tO,
                                  'images/'.concat(e, '/').concat(n)
                                )),
                                [4, (0, l.B0)(s, t)]
                              );
                            case 1:
                              return a.sent(), [4, (0, l.Jt)(s)];
                            case 2:
                              return [
                                2,
                                { id: n, src: a.sent(), alt: r, type: i }
                              ];
                          }
                        });
                      })),
                      function (e) {
                        return i.apply(this, arguments);
                      })
                    )
                  )
                ];
              case 1:
                return [2, n.sent()];
            }
          });
        })).apply(this, arguments);
      }
      function R(e, t) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                (n = (0, o.JU)(h.VV, t)), (r.label = 1);
              case 1:
                return (
                  r.trys.push([1, 3, , 4]),
                  [
                    4,
                    (0, o.r7)(n, {
                      userReplies: (0, o.nP)('increment' === e ? 1 : -1),
                      updatedAt: (0, o.Bt)()
                    })
                  ]
                );
              case 2:
              case 3:
                return r.sent(), [3, 4];
              case 4:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function D(e, t) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, o.JU)(h.W$, t)),
                  [
                    4,
                    (0, o.r7)(n, {
                      totalTweets: (0, o.nP)('increment' === e ? 1 : -1),
                      updatedAt: (0, o.Bt)()
                    })
                  ]
                );
              case 1:
                return r.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function L(e, t) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = (0, r.Z)(function (e, t) {
          var n;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, o.JU)(h.W$, t)),
                  [
                    4,
                    (0, o.r7)(n, {
                      totalPhotos: (0, o.nP)('increment' === e ? 1 : -1),
                      updatedAt: (0, o.Bt)()
                    })
                  ]
                );
              case 1:
                return r.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function x(e, t, n) {
        return (0, r.Z)(function () {
          var r, i, s;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (r = (0, o.qs)(u.db)),
                  (i = (0, o.JU)(h.VV, n)),
                  (s = (0, o.JU)((0, h.bR)(t), 'stats')),
                  'retweet' === e
                    ? (r.update(i, {
                        userRetweets: (0, o.vr)(t),
                        updatedAt: (0, o.Bt)()
                      }),
                      r.update(s, {
                        tweets: (0, o.vr)(n),
                        updatedAt: (0, o.Bt)()
                      }))
                    : (r.update(i, {
                        userRetweets: (0, o.Ab)(t),
                        updatedAt: (0, o.Bt)()
                      }),
                      r.update(s, {
                        tweets: (0, o.Ab)(n),
                        updatedAt: (0, o.Bt)()
                      })),
                  [4, r.commit()]
                );
              case 1:
                return a.sent(), [2];
            }
          });
        });
      }
      function M(e, t, n) {
        return (0, r.Z)(function () {
          var r, i, s;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (r = (0, o.qs)(u.db)),
                  (i = (0, o.JU)((0, h.bR)(t), 'stats')),
                  (s = (0, o.JU)(h.VV, n)),
                  'like' === e
                    ? (r.update(s, {
                        userLikes: (0, o.vr)(t),
                        updatedAt: (0, o.Bt)()
                      }),
                      r.update(i, {
                        likes: (0, o.vr)(n),
                        updatedAt: (0, o.Bt)()
                      }))
                    : (r.update(s, {
                        userLikes: (0, o.Ab)(t),
                        updatedAt: (0, o.Bt)()
                      }),
                      r.update(i, {
                        likes: (0, o.Ab)(n),
                        updatedAt: (0, o.Bt)()
                      })),
                  [4, r.commit()]
                );
              case 1:
                return a.sent(), [2];
            }
          });
        });
      }
      function U(e, t, n) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = (0, r.Z)(function (e, t, n) {
          var r, i;
          return (0, a.__generator)(this, function (s) {
            switch (s.label) {
              case 0:
                if (((r = (0, o.JU)((0, h.we)(t), n)), 'bookmark' !== e))
                  return [3, 2];
                return (
                  (i = { id: n, createdAt: (0, o.Bt)() }), [4, (0, o.pl)(r, i)]
                );
              case 1:
                return s.sent(), [3, 4];
              case 2:
                return [4, (0, o.oe)(r)];
              case 3:
                s.sent(), (s.label = 4);
              case 4:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function V(e) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = (0, r.Z)(function (e) {
          var t, n, r;
          return (0, a.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (t = (0, h.we)(e)), [4, (0, o.PL)(t)];
              case 1:
                return (
                  (n = i.sent()),
                  (r = (0, o.qs)(u.db)),
                  n.forEach(function (e) {
                    var t = e.ref;
                    return r.delete(t);
                  }),
                  [4, r.commit()]
                );
              case 2:
                return i.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
    },
    5195: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return s;
        },
        w: function () {
          return i;
        }
      });
      var r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      function i() {
        return Array.from({ length: 20 }).reduce(function (e) {
          return e + r[~~(Math.random() * r.length)];
        }, '');
      }
      function s(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }
    },
    4036: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          }
        });
      var r = n(6042),
        i = n(5893);
      n(1720);
      var s = n(2108),
        a = n(5655),
        o = n(9008),
        l = n.n(o);
      function u() {
        return (0, i.jsxs)(l(), {
          children: [
            (0, i.jsx)('title', { children: 'Twitter' }),
            (0, i.jsx)('meta', { name: 'og:title', content: 'Twitter' }),
            (0, i.jsx)('link', { rel: 'icon', href: '/favicon.ico' }),
            (0, i.jsx)(
              'link',
              { rel: 'manifest', href: '/site.webmanifest' },
              'site-manifest'
            ),
            (0, i.jsx)('meta', { name: 'twitter:site', content: '@ccrsxx' }),
            (0, i.jsx)('meta', {
              name: 'twitter:card',
              content: 'summary_large_image'
            })
          ]
        });
      }
      function h(e) {
        var t,
          n = e.Component,
          o = e.pageProps,
          l =
            null !== (t = n.getLayout) && void 0 !== t
              ? t
              : function (e) {
                  return e;
                };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u, {}),
            (0, i.jsx)(s.HD, {
              children: (0, i.jsx)(a.ze, {
                children: l((0, i.jsx)(n, (0, r.Z)({}, o)))
              })
            })
          ]
        });
      }
    },
    1720: function () {},
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                i = (e.exports = {});
              function s() {
                throw Error('setTimeout has not been defined');
              }
              function a() {
                throw Error('clearTimeout has not been defined');
              }
              function o(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' == typeof setTimeout ? setTimeout : s;
                } catch (e) {
                  t = s;
                }
                try {
                  n = 'function' == typeof clearTimeout ? clearTimeout : a;
                } catch (r) {
                  n = a;
                }
              })();
              var l = [],
                u = !1,
                h = -1;
              function c() {
                u &&
                  r &&
                  ((u = !1),
                  r.length ? (l = r.concat(l)) : (h = -1),
                  l.length && d());
              }
              function d() {
                if (!u) {
                  var e = o(c);
                  u = !0;
                  for (var t = l.length; t; ) {
                    for (r = l, l = []; ++h < t; ) r && r[h].run();
                    (h = -1), (t = l.length);
                  }
                  (r = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (r) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                l.push(new f(e, t)), 1 !== l.length || u || o(d);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = 'browser'),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ''),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error('process.binding is not supported');
                }),
                (i.cwd = function () {
                  return '/';
                }),
                (i.chdir = function (e) {
                  throw Error('process.chdir is not supported');
                }),
                (i.umask = function () {
                  return 0;
                });
            }
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var s = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](s, s.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return s.exports;
        }
        r.ab = '//';
        var i = r(229);
        e.exports = i;
      })();
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    5816: function (e, t, n) {
      'use strict';
      n.d(t, {
        Jn: function () {
          return x;
        },
        qX: function () {
          return O;
        },
        Xd: function () {
          return D;
        },
        Mq: function () {
          return U;
        },
        ZF: function () {
          return M;
        },
        KN: function () {
          return F;
        }
      });
      var r,
        i = n(8463),
        s = n(3333),
        a = n(4444);
      let o = (e, t) => t.some((t) => e instanceof t),
        l,
        u,
        h = new WeakMap(),
        c = new WeakMap(),
        d = new WeakMap(),
        f = new WeakMap(),
        p = new WeakMap(),
        m = {
          get(e, t, n) {
            if (e instanceof IDBTransaction) {
              if ('done' === t) return c.get(e);
              if ('objectStoreNames' === t)
                return e.objectStoreNames || d.get(e);
              if ('store' === t)
                return n.objectStoreNames[1]
                  ? void 0
                  : n.objectStore(n.objectStoreNames[0]);
            }
            return g(e[t]);
          },
          set: (e, t, n) => ((e[t] = n), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ('done' === t || 'store' === t)) ||
            t in e
        };
      function g(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            let t = new Promise((t, n) => {
              let r = () => {
                  e.removeEventListener('success', i),
                    e.removeEventListener('error', s);
                },
                i = () => {
                  t(g(e.result)), r();
                },
                s = () => {
                  n(e.error), r();
                };
              e.addEventListener('success', i), e.addEventListener('error', s);
            });
            return (
              t
                .then((t) => {
                  t instanceof IDBCursor && h.set(t, e);
                })
                .catch(() => {}),
              p.set(t, e),
              t
            );
          })(e);
        if (f.has(e)) return f.get(e);
        let t = (function (e) {
          if ('function' == typeof e) {
            var t;
            return e !== IDBDatabase.prototype.transaction ||
              'objectStoreNames' in IDBTransaction.prototype
              ? (
                  u ||
                  (u = [
                    IDBCursor.prototype.advance,
                    IDBCursor.prototype.continue,
                    IDBCursor.prototype.continuePrimaryKey
                  ])
                ).includes(e)
                ? function (...t) {
                    return e.apply(y(this), t), g(h.get(this));
                  }
                : function (...t) {
                    return g(e.apply(y(this), t));
                  }
              : function (t, ...n) {
                  let r = e.call(y(this), t, ...n);
                  return d.set(r, t.sort ? t.sort() : [t]), g(r);
                };
          }
          return (e instanceof IDBTransaction &&
            (function (e) {
              if (c.has(e)) return;
              let t = new Promise((t, n) => {
                let r = () => {
                    e.removeEventListener('complete', i),
                      e.removeEventListener('error', s),
                      e.removeEventListener('abort', s);
                  },
                  i = () => {
                    t(), r();
                  },
                  s = () => {
                    n(e.error || new DOMException('AbortError', 'AbortError')),
                      r();
                  };
                e.addEventListener('complete', i),
                  e.addEventListener('error', s),
                  e.addEventListener('abort', s);
              });
              c.set(e, t);
            })(e),
          o(
            e,
            l ||
              (l = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction
              ])
          ))
            ? new Proxy(e, m)
            : e;
        })(e);
        return t !== e && (f.set(e, t), p.set(t, e)), t;
      }
      let y = (e) => p.get(e),
        v = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
        w = ['put', 'add', 'delete', 'clear'],
        _ = new Map();
      function b(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && 'string' == typeof t))
          return;
        if (_.get(t)) return _.get(t);
        let n = t.replace(/FromIndex$/, ''),
          r = t !== n,
          i = w.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          !(i || v.includes(n))
        )
          return;
        let s = async function (e, ...t) {
          let s = this.transaction(e, i ? 'readwrite' : 'readonly'),
            a = s.store;
          return (
            r && (a = a.index(t.shift())),
            (await Promise.all([a[n](...t), i && s.done]))[0]
          );
        };
        return _.set(t, s), s;
      }
      m = (r = (e) => ({
        ...e,
        get: (t, n, r) => b(t, n) || e.get(t, n, r),
        has: (t, n) => !!b(t, n) || e.has(t, n)
      }))(m);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class T {
        constructor(e) {
          this.container = e;
        }
        getPlatformInfoString() {
          let e = this.container.getProviders();
          return e
            .map((e) => {
              if (
                !(function (e) {
                  let t = e.getComponent();
                  return (null == t ? void 0 : t.type) === 'VERSION';
                })(e)
              )
                return null;
              {
                let t = e.getImmediate();
                return `${t.library}/${t.version}`;
              }
            })
            .filter((e) => e)
            .join(' ');
        }
      }
      let I = '@firebase/app',
        E = '0.8.3',
        k = new s.Yd('@firebase/app'),
        S = '[DEFAULT]',
        C = {
          [I]: 'fire-core',
          '@firebase/app-compat': 'fire-core-compat',
          '@firebase/analytics': 'fire-analytics',
          '@firebase/analytics-compat': 'fire-analytics-compat',
          '@firebase/app-check': 'fire-app-check',
          '@firebase/app-check-compat': 'fire-app-check-compat',
          '@firebase/auth': 'fire-auth',
          '@firebase/auth-compat': 'fire-auth-compat',
          '@firebase/database': 'fire-rtdb',
          '@firebase/database-compat': 'fire-rtdb-compat',
          '@firebase/functions': 'fire-fn',
          '@firebase/functions-compat': 'fire-fn-compat',
          '@firebase/installations': 'fire-iid',
          '@firebase/installations-compat': 'fire-iid-compat',
          '@firebase/messaging': 'fire-fcm',
          '@firebase/messaging-compat': 'fire-fcm-compat',
          '@firebase/performance': 'fire-perf',
          '@firebase/performance-compat': 'fire-perf-compat',
          '@firebase/remote-config': 'fire-rc',
          '@firebase/remote-config-compat': 'fire-rc-compat',
          '@firebase/storage': 'fire-gcs',
          '@firebase/storage-compat': 'fire-gcs-compat',
          '@firebase/firestore': 'fire-fst',
          '@firebase/firestore-compat': 'fire-fst-compat',
          'fire-js': 'fire-js',
          firebase: 'fire-js-all'
        },
        A = new Map(),
        R = new Map();
      function N(e, t) {
        try {
          e.container.addComponent(t);
        } catch (n) {
          k.debug(
            `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
            n
          );
        }
      }
      function D(e) {
        let t = e.name;
        if (R.has(t))
          return (
            k.debug(`There were multiple attempts to register component ${t}.`),
            !1
          );
        for (let n of (R.set(t, e), A.values())) N(n, e);
        return !0;
      }
      function O(e, t) {
        let n = e.container
          .getProvider('heartbeat')
          .getImmediate({ optional: !0 });
        return n && n.triggerHeartbeat(), e.container.getProvider(t);
      }
      let L = new a.LL('app', 'Firebase', {
        'no-app':
          "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        'bad-app-name': "Illegal App name: '{$appName}",
        'duplicate-app':
          "Firebase App named '{$appName}' already exists with different options or config",
        'app-deleted': "Firebase App named '{$appName}' already deleted",
        'no-options':
          'Need to provide options, when not being deployed to hosting via source.',
        'invalid-app-argument':
          'firebase.{$appName}() takes either no argument or a Firebase App instance.',
        'invalid-log-argument':
          'First argument to `onLog` must be null or a function.',
        'idb-open':
          'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
        'idb-get':
          'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
        'idb-set':
          'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
        'idb-delete':
          'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'
      });
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class P {
        constructor(e, t, n) {
          (this._isDeleted = !1),
            (this._options = Object.assign({}, e)),
            (this._config = Object.assign({}, t)),
            (this._name = t.name),
            (this._automaticDataCollectionEnabled =
              t.automaticDataCollectionEnabled),
            (this._container = n),
            this.container.addComponent(new i.wA('app', () => this, 'PUBLIC'));
        }
        get automaticDataCollectionEnabled() {
          return this.checkDestroyed(), this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(e) {
          this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
        }
        get name() {
          return this.checkDestroyed(), this._name;
        }
        get options() {
          return this.checkDestroyed(), this._options;
        }
        get config() {
          return this.checkDestroyed(), this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(e) {
          this._isDeleted = e;
        }
        checkDestroyed() {
          if (this.isDeleted)
            throw L.create('app-deleted', { appName: this._name });
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let x = '9.13.0';
      function M(e, t = {}) {
        let n = e;
        if ('object' != typeof t) {
          let r = t;
          t = { name: r };
        }
        let s = Object.assign(
            { name: S, automaticDataCollectionEnabled: !1 },
            t
          ),
          o = s.name;
        if ('string' != typeof o || !o)
          throw L.create('bad-app-name', { appName: String(o) });
        if ((n || (n = (0, a.aH)()), !n)) throw L.create('no-options');
        let l = A.get(o);
        if (l) {
          if ((0, a.vZ)(n, l.options) && (0, a.vZ)(s, l.config)) return l;
          throw L.create('duplicate-app', { appName: o });
        }
        let u = new i.H0(o);
        for (let h of R.values()) u.addComponent(h);
        let c = new P(n, s, u);
        return A.set(o, c), c;
      }
      function U(e = S) {
        let t = A.get(e);
        if (!t && e === S) return M();
        if (!t) throw L.create('no-app', { appName: e });
        return t;
      }
      function F(e, t, n) {
        var r;
        let s = null !== (r = C[e]) && void 0 !== r ? r : e;
        n && (s += `-${n}`);
        let a = s.match(/\s|\//),
          o = t.match(/\s|\//);
        if (a || o) {
          let l = [`Unable to register library "${s}" with version "${t}":`];
          a &&
            l.push(
              `library name "${s}" contains illegal characters (whitespace or "/")`
            ),
            a && o && l.push('and'),
            o &&
              l.push(
                `version name "${t}" contains illegal characters (whitespace or "/")`
              ),
            k.warn(l.join(' '));
          return;
        }
        D(
          new i.wA(
            `${s}-version`,
            () => ({ library: s, version: t }),
            'VERSION'
          )
        );
      }
      let V = 'firebase-heartbeat-store',
        B = null;
      function j() {
        return (
          B ||
            (B = (function (
              e,
              t,
              { blocked: n, upgrade: r, blocking: i, terminated: s } = {}
            ) {
              let a = indexedDB.open(e, 1),
                o = g(a);
              return (
                r &&
                  a.addEventListener('upgradeneeded', (e) => {
                    r(
                      g(a.result),
                      e.oldVersion,
                      e.newVersion,
                      g(a.transaction)
                    );
                  }),
                n && a.addEventListener('blocked', () => n()),
                o
                  .then((e) => {
                    s && e.addEventListener('close', () => s()),
                      i && e.addEventListener('versionchange', () => i());
                  })
                  .catch(() => {}),
                o
              );
            })('firebase-heartbeat-database', 1, {
              upgrade(e, t) {
                0 === t && e.createObjectStore(V);
              }
            }).catch((e) => {
              throw L.create('idb-open', { originalErrorMessage: e.message });
            })),
          B
        );
      }
      async function q(e) {
        var t;
        try {
          let n = await j();
          return n.transaction(V).objectStore(V).get(z(e));
        } catch (i) {
          if (i instanceof a.ZR) k.warn(i.message);
          else {
            let r = L.create('idb-get', {
              originalErrorMessage:
                null === (t = i) || void 0 === t ? void 0 : t.message
            });
            k.warn(r.message);
          }
        }
      }
      async function $(e, t) {
        var n;
        try {
          let r = await j(),
            i = r.transaction(V, 'readwrite'),
            s = i.objectStore(V);
          return await s.put(t, z(e)), i.done;
        } catch (l) {
          if (l instanceof a.ZR) k.warn(l.message);
          else {
            let o = L.create('idb-set', {
              originalErrorMessage:
                null === (n = l) || void 0 === n ? void 0 : n.message
            });
            k.warn(o.message);
          }
        }
      }
      function z(e) {
        return `${e.name}!${e.options.appId}`;
      }
      class H {
        constructor(e) {
          (this.container = e), (this._heartbeatsCache = null);
          let t = this.container.getProvider('app').getImmediate();
          (this._storage = new G(t)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then((e) => ((this._heartbeatsCache = e), e)));
        }
        async triggerHeartbeat() {
          let e = this.container.getProvider('platform-logger').getImmediate(),
            t = e.getPlatformInfoString(),
            n = K();
          return (null === this._heartbeatsCache &&
            (this._heartbeatsCache = await this._heartbeatsCachePromise),
          this._heartbeatsCache.lastSentHeartbeatDate === n ||
            this._heartbeatsCache.heartbeats.some((e) => e.date === n))
            ? void 0
            : (this._heartbeatsCache.heartbeats.push({ date: n, agent: t }),
              (this._heartbeatsCache.heartbeats =
                this._heartbeatsCache.heartbeats.filter((e) => {
                  let t = new Date(e.date).valueOf(),
                    n = Date.now();
                  return n - t <= 2592e6;
                })),
              this._storage.overwrite(this._heartbeatsCache));
        }
        async getHeartbeatsHeader() {
          if (
            (null === this._heartbeatsCache &&
              (await this._heartbeatsCachePromise),
            null === this._heartbeatsCache ||
              0 === this._heartbeatsCache.heartbeats.length)
          )
            return '';
          let e = K(),
            { heartbeatsToSend: t, unsentEntries: n } = (function (
              e,
              t = 1024
            ) {
              let n = [],
                r = e.slice();
              for (let i of e) {
                let s = n.find((e) => e.agent === i.agent);
                if (s) {
                  if ((s.dates.push(i.date), W(n) > t)) {
                    s.dates.pop();
                    break;
                  }
                } else if (
                  (n.push({ agent: i.agent, dates: [i.date] }), W(n) > t)
                ) {
                  n.pop();
                  break;
                }
                r = r.slice(1);
              }
              return { heartbeatsToSend: n, unsentEntries: r };
            })(this._heartbeatsCache.heartbeats),
            r = (0, a.L)(JSON.stringify({ version: 2, heartbeats: t }));
          return (
            (this._heartbeatsCache.lastSentHeartbeatDate = e),
            n.length > 0
              ? ((this._heartbeatsCache.heartbeats = n),
                await this._storage.overwrite(this._heartbeatsCache))
              : ((this._heartbeatsCache.heartbeats = []),
                this._storage.overwrite(this._heartbeatsCache)),
            r
          );
        }
      }
      function K() {
        let e = new Date();
        return e.toISOString().substring(0, 10);
      }
      class G {
        constructor(e) {
          (this.app = e),
            (this._canUseIndexedDBPromise =
              this.runIndexedDBEnvironmentCheck());
        }
        async runIndexedDBEnvironmentCheck() {
          return (
            !!(0, a.hl)() &&
            (0, a.eu)()
              .then(() => !0)
              .catch(() => !1)
          );
        }
        async read() {
          let e = await this._canUseIndexedDBPromise;
          if (!e) return { heartbeats: [] };
          {
            let t = await q(this.app);
            return t || { heartbeats: [] };
          }
        }
        async overwrite(e) {
          var t;
          let n = await this._canUseIndexedDBPromise;
          if (n) {
            let r = await this.read();
            return $(this.app, {
              lastSentHeartbeatDate:
                null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                  ? t
                  : r.lastSentHeartbeatDate,
              heartbeats: e.heartbeats
            });
          }
        }
        async add(e) {
          var t;
          let n = await this._canUseIndexedDBPromise;
          if (n) {
            let r = await this.read();
            return $(this.app, {
              lastSentHeartbeatDate:
                null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                  ? t
                  : r.lastSentHeartbeatDate,
              heartbeats: [...r.heartbeats, ...e.heartbeats]
            });
          }
        }
      }
      function W(e) {
        return (0, a.L)(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      D(new i.wA('platform-logger', (e) => new T(e), 'PRIVATE')),
        D(new i.wA('heartbeat', (e) => new H(e), 'PRIVATE')),
        F(I, E, ''),
        F(I, E, 'esm2017'),
        F('fire-js', '');
    },
    8463: function (e, t, n) {
      'use strict';
      n.d(t, {
        H0: function () {
          return o;
        },
        wA: function () {
          return i;
        }
      });
      var r = n(4444);
      class i {
        constructor(e, t, n) {
          (this.name = e),
            (this.instanceFactory = t),
            (this.type = n),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = 'LAZY'),
            (this.onInstanceCreated = null);
        }
        setInstantiationMode(e) {
          return (this.instantiationMode = e), this;
        }
        setMultipleInstances(e) {
          return (this.multipleInstances = e), this;
        }
        setServiceProps(e) {
          return (this.serviceProps = e), this;
        }
        setInstanceCreatedCallback(e) {
          return (this.onInstanceCreated = e), this;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let s = '[DEFAULT]';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class a {
        constructor(e, t) {
          (this.name = e),
            (this.container = t),
            (this.component = null),
            (this.instances = new Map()),
            (this.instancesDeferred = new Map()),
            (this.instancesOptions = new Map()),
            (this.onInitCallbacks = new Map());
        }
        get(e) {
          let t = this.normalizeInstanceIdentifier(e);
          if (!this.instancesDeferred.has(t)) {
            let n = new r.BH();
            if (
              (this.instancesDeferred.set(t, n),
              this.isInitialized(t) || this.shouldAutoInitialize())
            )
              try {
                let i = this.getOrInitializeService({ instanceIdentifier: t });
                i && n.resolve(i);
              } catch (s) {}
          }
          return this.instancesDeferred.get(t).promise;
        }
        getImmediate(e) {
          var t;
          let n = this.normalizeInstanceIdentifier(
              null == e ? void 0 : e.identifier
            ),
            r =
              null !== (t = null == e ? void 0 : e.optional) &&
              void 0 !== t &&
              t;
          if (this.isInitialized(n) || this.shouldAutoInitialize())
            try {
              return this.getOrInitializeService({ instanceIdentifier: n });
            } catch (i) {
              if (r) return null;
              throw i;
            }
          else {
            if (r) return null;
            throw Error(`Service ${this.name} is not available`);
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(e) {
          if (e.name !== this.name)
            throw Error(
              `Mismatching Component ${e.name} for Provider ${this.name}.`
            );
          if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
          if (((this.component = e), this.shouldAutoInitialize())) {
            var t;
            if (((t = e), 'EAGER' === t.instantiationMode))
              try {
                this.getOrInitializeService({ instanceIdentifier: s });
              } catch (n) {}
            for (let [r, i] of this.instancesDeferred.entries()) {
              let a = this.normalizeInstanceIdentifier(r);
              try {
                let o = this.getOrInitializeService({ instanceIdentifier: a });
                i.resolve(o);
              } catch (l) {}
            }
          }
        }
        clearInstance(e = s) {
          this.instancesDeferred.delete(e),
            this.instancesOptions.delete(e),
            this.instances.delete(e);
        }
        async delete() {
          let e = Array.from(this.instances.values());
          await Promise.all([
            ...e.filter((e) => 'INTERNAL' in e).map((e) => e.INTERNAL.delete()),
            ...e.filter((e) => '_delete' in e).map((e) => e._delete())
          ]);
        }
        isComponentSet() {
          return null != this.component;
        }
        isInitialized(e = s) {
          return this.instances.has(e);
        }
        getOptions(e = s) {
          return this.instancesOptions.get(e) || {};
        }
        initialize(e = {}) {
          let { options: t = {} } = e,
            n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
          if (this.isInitialized(n))
            throw Error(`${this.name}(${n}) has already been initialized`);
          if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
          let r = this.getOrInitializeService({
            instanceIdentifier: n,
            options: t
          });
          for (let [i, s] of this.instancesDeferred.entries()) {
            let a = this.normalizeInstanceIdentifier(i);
            n === a && s.resolve(r);
          }
          return r;
        }
        onInit(e, t) {
          var n;
          let r = this.normalizeInstanceIdentifier(t),
            i =
              null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
                ? n
                : new Set();
          i.add(e), this.onInitCallbacks.set(r, i);
          let s = this.instances.get(r);
          return (
            s && e(s, r),
            () => {
              i.delete(e);
            }
          );
        }
        invokeOnInitCallbacks(e, t) {
          let n = this.onInitCallbacks.get(t);
          if (n)
            for (let r of n)
              try {
                r(e, t);
              } catch (i) {}
        }
        getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
          var n;
          let r = this.instances.get(e);
          if (
            !r &&
            this.component &&
            ((r = this.component.instanceFactory(this.container, {
              instanceIdentifier: ((n = e), n === s ? void 0 : n),
              options: t
            })),
            this.instances.set(e, r),
            this.instancesOptions.set(e, t),
            this.invokeOnInitCallbacks(r, e),
            this.component.onInstanceCreated)
          )
            try {
              this.component.onInstanceCreated(this.container, e, r);
            } catch (i) {}
          return r || null;
        }
        normalizeInstanceIdentifier(e = s) {
          return this.component
            ? this.component.multipleInstances
              ? e
              : s
            : e;
        }
        shouldAutoInitialize() {
          return (
            !!this.component && 'EXPLICIT' !== this.component.instantiationMode
          );
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ class o {
        constructor(e) {
          (this.name = e), (this.providers = new Map());
        }
        addComponent(e) {
          let t = this.getProvider(e.name);
          if (t.isComponentSet())
            throw Error(
              `Component ${e.name} has already been registered with ${this.name}`
            );
          t.setComponent(e);
        }
        addOrOverwriteComponent(e) {
          let t = this.getProvider(e.name);
          t.isComponentSet() && this.providers.delete(e.name),
            this.addComponent(e);
        }
        getProvider(e) {
          if (this.providers.has(e)) return this.providers.get(e);
          let t = new a(e, this);
          return this.providers.set(e, t), t;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      }
    },
    3333: function (e, t, n) {
      'use strict';
      var r, i;
      n.d(t, {
        Yd: function () {
          return h;
        },
        in: function () {
          return r;
        }
      });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let s = [];
      ((i = r || (r = {}))[(i.DEBUG = 0)] = 'DEBUG'),
        (i[(i.VERBOSE = 1)] = 'VERBOSE'),
        (i[(i.INFO = 2)] = 'INFO'),
        (i[(i.WARN = 3)] = 'WARN'),
        (i[(i.ERROR = 4)] = 'ERROR'),
        (i[(i.SILENT = 5)] = 'SILENT');
      let a = {
          debug: r.DEBUG,
          verbose: r.VERBOSE,
          info: r.INFO,
          warn: r.WARN,
          error: r.ERROR,
          silent: r.SILENT
        },
        o = r.INFO,
        l = {
          [r.DEBUG]: 'log',
          [r.VERBOSE]: 'log',
          [r.INFO]: 'info',
          [r.WARN]: 'warn',
          [r.ERROR]: 'error'
        },
        u = (e, t, ...n) => {
          if (t < e.logLevel) return;
          let r = new Date().toISOString(),
            i = l[t];
          if (i) console[i](`[${r}]  ${e.name}:`, ...n);
          else
            throw Error(
              `Attempted to log a message with an invalid logType (value: ${t})`
            );
        };
      class h {
        constructor(e) {
          (this.name = e),
            (this._logLevel = o),
            (this._logHandler = u),
            (this._userLogHandler = null),
            s.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(e) {
          if (!(e in r))
            throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
          this._logLevel = e;
        }
        setLogLevel(e) {
          this._logLevel = 'string' == typeof e ? a[e] : e;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(e) {
          if ('function' != typeof e)
            throw TypeError(
              'Value assigned to `logHandler` must be a function'
            );
          this._logHandler = e;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(e) {
          this._userLogHandler = e;
        }
        debug(...e) {
          this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...e),
            this._logHandler(this, r.DEBUG, ...e);
        }
        log(...e) {
          this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...e),
            this._logHandler(this, r.VERBOSE, ...e);
        }
        info(...e) {
          this._userLogHandler && this._userLogHandler(this, r.INFO, ...e),
            this._logHandler(this, r.INFO, ...e);
        }
        warn(...e) {
          this._userLogHandler && this._userLogHandler(this, r.WARN, ...e),
            this._logHandler(this, r.WARN, ...e);
        }
        error(...e) {
          this._userLogHandler && this._userLogHandler(this, r.ERROR, ...e),
            this._logHandler(this, r.ERROR, ...e);
        }
      }
    },
    7568: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, i, s, a) {
        try {
          var o = e[s](a),
            l = o.value;
        } catch (u) {
          n(u);
          return;
        }
        o.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function i(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, s) {
            var a = e.apply(t, n);
            function o(e) {
              r(a, i, s, o, l, 'next', e);
            }
            function l(e) {
              r(a, i, s, o, l, 'throw', e);
            }
            o(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return i;
        }
      });
    },
    4924: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        }
      });
    },
    6042: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return i;
        }
      });
      var r = n(4924);
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              (0, r.Z)(e, t, n[t]);
            });
        }
        return e;
      }
    },
    9396: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        }
      });
    }
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(387);
    }),
      (_N_E = e.O());
  }
]);
