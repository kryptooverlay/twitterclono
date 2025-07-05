'use strict';
exports.id = 655;
exports.ids = [655];
exports.modules = {
  /***/ 5655: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ Fg: () => /* binding */ useTheme,
            /* harmony export */ ze: () => /* binding */ ThemeContextProvider
            /* harmony export */
          });
          /* unused harmony export ThemeContext */
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7359);
          /* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(2108);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__,
              _auth_context__WEBPACK_IMPORTED_MODULE_3__
            ]);
          [
            _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__,
            _auth_context__WEBPACK_IMPORTED_MODULE_3__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          /* eslint-disable react-hooks/exhaustive-deps */

          const ThemeContext = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
          function setInitialTheme() {
            if (true) return 'dark';
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia(
              '(prefers-color-scheme: dark)'
            ).matches;
            return savedTheme ?? (prefersDark ? 'dark' : 'light');
          }
          function setInitialAccent() {
            if (true) return 'blue';
            const savedAccent = localStorage.getItem('accent');
            return savedAccent ?? 'blue';
          }
          function ThemeContextProvider({ children }) {
            const { 0: theme, 1: setTheme } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(setInitialTheme);
            const { 0: accent, 1: setAccent } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(setInitialAccent);
            const { user } = (0,
            _auth_context__WEBPACK_IMPORTED_MODULE_3__ /* .useAuth */.aC)();
            const {
              id: userId,
              theme: userTheme,
              accent: userAccent
            } = user ?? {};
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              if (user && userTheme) setTheme(userTheme);
            }, [userId, userTheme]);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              if (user && userAccent) setAccent(userAccent);
            }, [userId, userAccent]);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const flipTheme = (theme) => {
                const root = document.documentElement;
                const targetTheme = theme === 'dim' ? 'dark' : theme;
                if (targetTheme === 'dark') root.classList.add('dark');
                else root.classList.remove('dark');
                root.style.setProperty(
                  '--main-background',
                  `var(--${theme}-background)`
                );
                root.style.setProperty(
                  '--main-search-background',
                  `var(--${theme}-search-background)`
                );
                root.style.setProperty(
                  '--main-sidebar-background',
                  `var(--${theme}-sidebar-background)`
                );
                if (user) {
                  localStorage.setItem('theme', theme);
                  return setTimeout(
                    () =>
                      void (0,
                      _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__ /* .updateUserTheme */.Zs)(
                        user.id,
                        {
                          theme
                        }
                      ),
                    500
                  );
                }
                return undefined;
              };
              const timeoutId = flipTheme(theme);
              return () => clearTimeout(timeoutId);
            }, [userId, theme]);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const flipAccent = (accent) => {
                const root = document.documentElement;
                root.style.setProperty(
                  '--main-accent',
                  `var(--accent-${accent})`
                );
                if (user) {
                  localStorage.setItem('accent', accent);
                  return setTimeout(
                    () =>
                      void (0,
                      _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__ /* .updateUserTheme */.Zs)(
                        user.id,
                        {
                          accent
                        }
                      ),
                    500
                  );
                }
                return undefined;
              };
              const timeoutId = flipAccent(accent);
              return () => clearTimeout(timeoutId);
            }, [userId, accent]);
            const changeTheme = ({ target: { value } }) => setTheme(value);
            const changeAccent = ({ target: { value } }) => setAccent(value);
            const value = {
              theme,
              accent,
              changeTheme,
              changeAccent
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              ThemeContext.Provider,
              {
                value: value,
                children: children
              }
            );
          }
          function useTheme() {
            const context = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(
              ThemeContext
            );
            if (!context)
              throw new Error(
                'useTheme must be used within an ThemeContextProvider'
              );
            return context;
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  }
};
