'use strict';
exports.id = 108;
exports.ids = [108];
exports.modules = {
  /***/ 2108: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ HD: () => /* binding */ AuthContextProvider,
            /* harmony export */ aC: () => /* binding */ useAuth
            /* harmony export */
          });
          /* unused harmony export AuthContext */
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
          /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(401);
          /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1492);
          /* harmony import */ var _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(1636);
          /* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(5342);
          /* harmony import */ var _lib_random__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(5195);
          /* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(7359);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_3__,
              _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__,
              _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__,
              _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__
            ]);
          [
            firebase_auth__WEBPACK_IMPORTED_MODULE_2__,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_3__,
            _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__,
            _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__,
            _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          const AuthContext = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
          function AuthContextProvider({ children }) {
            const { 0: user, 1: setUser } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
            const { 0: userBookmarks, 1: setUserBookmarks } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
            const { 0: error, 1: setError } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
            const { 0: loading, 1: setLoading } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const manageUser = async (authUser) => {
                const { uid, displayName, photoURL } = authUser;
                const userSnapshot = await (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(
                  (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(
                    _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .usersCollection */.W$,
                    uid
                  )
                );
                if (!userSnapshot.exists()) {
                  let available = false;
                  let randomUsername = '';
                  while (!available) {
                    const normalizeName = displayName
                      ?.replace(/\s/g, '')
                      .toLowerCase();
                    const randomInt = (0,
                    _lib_random__WEBPACK_IMPORTED_MODULE_7__ /* .getRandomInt */.X)(
                      1,
                      10000
                    );
                    randomUsername = `${normalizeName}${randomInt}`;
                    const isUsernameAvailable = await (0,
                    _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__ /* .checkUsernameAvailability */.EJ)(
                      randomUsername
                    );
                    if (isUsernameAvailable) available = true;
                  }
                  const userData = {
                    id: uid,
                    bio: null,
                    name: displayName,
                    theme: null,
                    accent: null,
                    website: null,
                    location: null,
                    photoURL: photoURL ?? '/assets/twitter-avatar.jpg',
                    username: randomUsername,
                    verified: false,
                    following: [],
                    followers: [],
                    createdAt: (0,
                    firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)(),
                    updatedAt: null,
                    totalTweets: 0,
                    totalPhotos: 0,
                    pinnedTweet: null,
                    coverPhotoURL: null
                  };
                  const userStatsData = {
                    likes: [],
                    tweets: [],
                    updatedAt: null
                  };
                  try {
                    await Promise.all([
                      (0,
                      firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(
                        (0,
                        firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(
                          _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .usersCollection */.W$,
                          uid
                        ),
                        userData
                      ),
                      (0,
                      firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(
                        (0,
                        firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(
                          (0,
                          _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .userStatsCollection */.bR)(
                            uid
                          ),
                          'stats'
                        ),
                        userStatsData
                      )
                    ]);
                    const newUser = (
                      await (0,
                      firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(
                        (0,
                        firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(
                          _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .usersCollection */.W$,
                          uid
                        )
                      )
                    ).data();
                    setUser(newUser);
                  } catch (error) {
                    setError(error);
                  }
                } else {
                  const userData1 = userSnapshot.data();
                  setUser(userData1);
                }
                setLoading(false);
              };
              const handleUserAuth = (authUser) => {
                setLoading(true);
                if (authUser) void manageUser(authUser);
                else {
                  setUser(null);
                  setLoading(false);
                }
              };
              (0,
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(
                _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__ /* .auth */.I8,
                handleUserAuth
              );
            }, []);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              if (!user) return;
              const { id } = user;
              const unsubscribeUser = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(
                  _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .usersCollection */.W$,
                  id
                ),
                (doc) => {
                  setUser(doc.data());
                }
              );
              const unsubscribeBookmarks = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(
                (0,
                _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ /* .userBookmarksCollection */.we)(
                  id
                ),
                (snapshot) => {
                  const bookmarks = snapshot.docs.map((doc) => doc.data());
                  setUserBookmarks(bookmarks);
                }
              );
              return () => {
                unsubscribeUser();
                unsubscribeBookmarks();
              };
              // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [user?.id]);
            const signInWithGoogle = async () => {
              try {
                const provider =
                  new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();
                await (0,
                firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(
                  _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__ /* .auth */.I8,
                  provider
                );
              } catch (error) {
                setError(error);
              }
            };
            const signOut = async () => {
              try {
                await (0, firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(
                  _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__ /* .auth */.I8
                );
              } catch (error) {
                setError(error);
              }
            };
            const isAdmin = user ? user.username === 'ccrsxx' : false;
            const randomSeed = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
              _lib_random__WEBPACK_IMPORTED_MODULE_7__ /* .getRandomId */.w,
              [user?.id]
            );
            const value = {
              user,
              error,
              loading,
              isAdmin,
              randomSeed,
              userBookmarks,
              signOut,
              signInWithGoogle
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              AuthContext.Provider,
              {
                value: value,
                children: children
              }
            );
          }
          function useAuth() {
            const context = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(
              AuthContext
            );
            if (!context)
              throw new Error(
                'useAuth must be used within an AuthContextProvider'
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
  },

  /***/ 1923: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ f7: () => /* binding */ siteURL,
      /* harmony export */ nc: () => /* binding */ isUsingEmulator
      /* harmony export */
    });
    /* unused harmony exports isProduction, isDevelopment */
    const isProduction =
      /* unused pure expression or super */ null &&
      'production' === 'production';
    const isDevelopment = 'production' === 'development';
    const isUsingEmulator =
      isDevelopment && process.env.NEXT_PUBLIC_USE_EMULATOR === 'true';
    const siteURL = process.env.NEXT_PUBLIC_URL;

    /***/
  },

  /***/ 1636: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ I8: () => /* binding */ auth,
            /* harmony export */ db: () => /* binding */ db,
            /* harmony export */ tO: () => /* binding */ storage
            /* harmony export */
          });
          /* unused harmony export getFirebase */
          /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(3745);
          /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(401);
          /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(1492);
          /* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(3392);
          /* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(8937);
          /* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(1923);
          /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(630);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              firebase_app__WEBPACK_IMPORTED_MODULE_0__,
              firebase_auth__WEBPACK_IMPORTED_MODULE_1__,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_2__,
              firebase_storage__WEBPACK_IMPORTED_MODULE_3__,
              firebase_functions__WEBPACK_IMPORTED_MODULE_4__
            ]);
          [
            firebase_app__WEBPACK_IMPORTED_MODULE_0__,
            firebase_auth__WEBPACK_IMPORTED_MODULE_1__,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_2__,
            firebase_storage__WEBPACK_IMPORTED_MODULE_3__,
            firebase_functions__WEBPACK_IMPORTED_MODULE_4__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          function initialize() {
            const firebaseApp = (0,
            firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(
              (0,
              _config__WEBPACK_IMPORTED_MODULE_6__ /* .getFirebaseConfig */.d)()
            );
            const auth = (0,
            firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);
            const storage = (0,
            firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(
              firebaseApp
            );
            const firestore = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(
              firebaseApp
            );
            const functions = (0,
            firebase_functions__WEBPACK_IMPORTED_MODULE_4__.getFunctions)(
              firebaseApp
            );
            return {
              firebaseApp,
              auth,
              firestore,
              storage,
              functions
            };
          }
          function connectToEmulator({
            auth,
            storage,
            firestore,
            functions,
            firebaseApp
          }) {
            (0, firebase_auth__WEBPACK_IMPORTED_MODULE_1__.connectAuthEmulator)(
              auth,
              'http://localhost:9099',
              {
                disableWarnings: true
              }
            );
            (0,
            firebase_storage__WEBPACK_IMPORTED_MODULE_3__.connectStorageEmulator)(
              storage,
              'localhost',
              9199
            );
            (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.connectFirestoreEmulator)(
              firestore,
              'localhost',
              8080
            );
            (0,
            firebase_functions__WEBPACK_IMPORTED_MODULE_4__.connectFunctionsEmulator)(
              functions,
              'localhost',
              5001
            );
            return {
              firebaseApp,
              auth,
              firestore,
              storage,
              functions
            };
          }
          function getFirebase() {
            const firebase = initialize();
            if (_lib_env__WEBPACK_IMPORTED_MODULE_5__ /* .isUsingEmulator */.nc)
              return connectToEmulator(firebase);
            return firebase;
          }
          const { firestore: db, auth, storage } = getFirebase();

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 5342: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ VV: () => /* binding */ tweetsCollection,
            /* harmony export */ W$: () => /* binding */ usersCollection,
            /* harmony export */ bR: () => /* binding */ userStatsCollection,
            /* harmony export */ we: () => /* binding */ userBookmarksCollection
            /* harmony export */
          });
          /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(1492);
          /* harmony import */ var _lib_types_user__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(3771);
          /* harmony import */ var _lib_types_tweet__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(9144);
          /* harmony import */ var _lib_types_bookmark__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1524);
          /* harmony import */ var _lib_types_stats__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(7831);
          /* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(1636);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__,
              _app__WEBPACK_IMPORTED_MODULE_5__
            ]);
          [
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__,
            _app__WEBPACK_IMPORTED_MODULE_5__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          const usersCollection = (0,
          firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(
            _app__WEBPACK_IMPORTED_MODULE_5__.db,
            'users'
          ).withConverter(
            _lib_types_user__WEBPACK_IMPORTED_MODULE_1__ /* .userConverter */.x
          );
          const tweetsCollection = (0,
          firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(
            _app__WEBPACK_IMPORTED_MODULE_5__.db,
            'tweets'
          ).withConverter(
            _lib_types_tweet__WEBPACK_IMPORTED_MODULE_2__ /* .tweetConverter */.f
          );
          function userBookmarksCollection(id) {
            return (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(
              _app__WEBPACK_IMPORTED_MODULE_5__.db,
              `users/${id}/bookmarks`
            ).withConverter(
              _lib_types_bookmark__WEBPACK_IMPORTED_MODULE_3__ /* .bookmarkConverter */.N
            );
          }
          function userStatsCollection(id) {
            return (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(
              _app__WEBPACK_IMPORTED_MODULE_5__.db,
              `users/${id}/stats`
            ).withConverter(
              _lib_types_stats__WEBPACK_IMPORTED_MODULE_4__ /* .statsConverter */.Y
            );
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 630: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ d: () => /* binding */ getFirebaseConfig
      /* harmony export */
    });
    const config = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: 'G-LL4RERTMBB'
    };
    function getFirebaseConfig() {
      if (Object.values(config).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');
      return config;
    }

    /***/
  },

  /***/ 7359: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ $1: () => /* binding */ manageTotalTweets,
            /* harmony export */ Al: () => /* binding */ updateUserData,
            /* harmony export */ BB: () => /* binding */ getCollectionCount,
            /* harmony export */ EJ: () =>
              /* binding */ checkUsernameAvailability,
            /* harmony export */ Mq: () => /* binding */ manageReply,
            /* harmony export */ R1: () => /* binding */ manageLike,
            /* harmony export */ X_: () => /* binding */ managePinnedTweet,
            /* harmony export */ Zs: () => /* binding */ updateUserTheme,
            /* harmony export */ _A: () => /* binding */ removeTweet,
            /* harmony export */ _S: () => /* binding */ updateUsername,
            /* harmony export */ aE: () => /* binding */ manageRetweet,
            /* harmony export */ as: () => /* binding */ clearAllBookmarks,
            /* harmony export */ eg: () => /* binding */ uploadImages,
            /* harmony export */ gL: () => /* binding */ manageFollow,
            /* harmony export */ iq: () => /* binding */ manageTotalPhotos,
            /* harmony export */ mN: () => /* binding */ manageBookmark
            /* harmony export */
          });
          /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(1492);
          /* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(3392);
          /* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(1636);
          /* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(5342);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__,
              firebase_storage__WEBPACK_IMPORTED_MODULE_1__,
              _app__WEBPACK_IMPORTED_MODULE_2__,
              _collections__WEBPACK_IMPORTED_MODULE_3__
            ]);
          [
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__,
            firebase_storage__WEBPACK_IMPORTED_MODULE_1__,
            _app__WEBPACK_IMPORTED_MODULE_2__,
            _collections__WEBPACK_IMPORTED_MODULE_3__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          async function checkUsernameAvailability(username) {
            const { empty } = await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(
              (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(
                _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)(
                  'username',
                  '==',
                  username
                ),
                (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limit)(1)
              )
            );
            return empty;
          }
          async function getCollectionCount(collection) {
            const snapshot = await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getCountFromServer)(
              collection
            );
            return snapshot.data().count;
          }
          async function updateUserData(userId, userData) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
              userRef,
              {
                ...userData,
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              }
            );
          }
          async function updateUserTheme(userId, themeData) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
              userRef,
              {
                ...themeData
              }
            );
          }
          async function updateUsername(userId, username) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
              userRef,
              {
                ...(username && {
                  username
                }),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              }
            );
          }
          async function managePinnedTweet(type, userId, tweetId) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
              userRef,
              {
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
                pinnedTweet: type === 'pin' ? tweetId : null
              }
            );
          }
          async function manageFollow(type, userId, targetUserId) {
            const batch = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(
              _app__WEBPACK_IMPORTED_MODULE_2__.db
            );
            const userDocRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            const targetUserDocRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              targetUserId
            );
            if (type === 'follow') {
              batch.update(userDocRef, {
                following: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(
                  targetUserId
                ),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              });
              batch.update(targetUserDocRef, {
                followers: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(
                  userId
                ),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              });
            } else {
              batch.update(userDocRef, {
                following: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(
                  targetUserId
                ),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              });
              batch.update(targetUserDocRef, {
                followers: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(
                  userId
                ),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              });
            }
            await batch.commit();
          }
          async function removeTweet(tweetId) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .tweetsCollection */.VV,
              tweetId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(userRef);
          }
          async function uploadImages(userId, files) {
            if (!files.length) return null;
            const imagesPreview = await Promise.all(
              files.map(async (file) => {
                const { id, name: alt, type } = file;
                const storageRef = (0,
                firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(
                  _app__WEBPACK_IMPORTED_MODULE_2__ /* .storage */.tO,
                  `images/${userId}/${id}`
                );
                await (0,
                firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytesResumable)(
                  storageRef,
                  file
                );
                const src = await (0,
                firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(
                  storageRef
                );
                return {
                  id,
                  src,
                  alt,
                  type
                };
              })
            );
            return imagesPreview;
          }
          async function manageReply(type, tweetId) {
            const tweetRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .tweetsCollection */.VV,
              tweetId
            );
            try {
              await (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
                tweetRef,
                {
                  userReplies: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment)(
                    type === 'increment' ? 1 : -1
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                }
              );
            } catch {
              // do nothing, because parent tweet was already deleted
            }
          }
          async function manageTotalTweets(type, userId) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
              userRef,
              {
                totalTweets: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment)(
                  type === 'increment' ? 1 : -1
                ),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              }
            );
          }
          async function manageTotalPhotos(type, userId) {
            const userRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .usersCollection */.W$,
              userId
            );
            await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(
              userRef,
              {
                totalPhotos: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment)(
                  type === 'increment' ? 1 : -1
                ),
                updatedAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              }
            );
          }
          function manageRetweet(type, userId, tweetId) {
            return async () => {
              const batch = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(
                _app__WEBPACK_IMPORTED_MODULE_2__.db
              );
              const tweetRef = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
                _collections__WEBPACK_IMPORTED_MODULE_3__ /* .tweetsCollection */.VV,
                tweetId
              );
              const userStatsRef = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
                (0,
                _collections__WEBPACK_IMPORTED_MODULE_3__ /* .userStatsCollection */.bR)(
                  userId
                ),
                'stats'
              );
              if (type === 'retweet') {
                batch.update(tweetRef, {
                  userRetweets: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(
                    userId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
                batch.update(userStatsRef, {
                  tweets: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(
                    tweetId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
              } else {
                batch.update(tweetRef, {
                  userRetweets: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(
                    userId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
                batch.update(userStatsRef, {
                  tweets: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(
                    tweetId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
              }
              await batch.commit();
            };
          }
          function manageLike(type, userId, tweetId) {
            return async () => {
              const batch = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(
                _app__WEBPACK_IMPORTED_MODULE_2__.db
              );
              const userStatsRef = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
                (0,
                _collections__WEBPACK_IMPORTED_MODULE_3__ /* .userStatsCollection */.bR)(
                  userId
                ),
                'stats'
              );
              const tweetRef = (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
                _collections__WEBPACK_IMPORTED_MODULE_3__ /* .tweetsCollection */.VV,
                tweetId
              );
              if (type === 'like') {
                batch.update(tweetRef, {
                  userLikes: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(
                    userId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
                batch.update(userStatsRef, {
                  likes: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(
                    tweetId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
              } else {
                batch.update(tweetRef, {
                  userLikes: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(
                    userId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
                batch.update(userStatsRef, {
                  likes: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(
                    tweetId
                  ),
                  updatedAt: (0,
                  firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
                });
              }
              await batch.commit();
            };
          }
          async function manageBookmark(type, userId, tweetId) {
            const bookmarkRef = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(
              (0,
              _collections__WEBPACK_IMPORTED_MODULE_3__ /* .userBookmarksCollection */.we)(
                userId
              ),
              tweetId
            );
            if (type === 'bookmark') {
              const bookmarkData = {
                id: tweetId,
                createdAt: (0,
                firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
              };
              await (0, firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(
                bookmarkRef,
                bookmarkData
              );
            } else
              await (0,
              firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(
                bookmarkRef
              );
          }
          async function clearAllBookmarks(userId) {
            const bookmarksRef = (0,
            _collections__WEBPACK_IMPORTED_MODULE_3__ /* .userBookmarksCollection */.we)(
              userId
            );
            const bookmarksSnapshot = await (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(
              bookmarksRef
            );
            const batch = (0,
            firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(
              _app__WEBPACK_IMPORTED_MODULE_2__.db
            );
            bookmarksSnapshot.forEach(({ ref }) => batch.delete(ref));
            await batch.commit();
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 5195: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ X: () => /* binding */ getRandomInt,
      /* harmony export */ w: () => /* binding */ getRandomId
      /* harmony export */
    });
    const CHARS =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    function getRandomId() {
      return Array.from({
        length: 20
      }).reduce((acc) => acc + CHARS[~~(Math.random() * CHARS.length)], '');
    }
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /***/
  },

  /***/ 1524: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ N: () => /* binding */ bookmarkConverter
      /* harmony export */
    });
    const bookmarkConverter = {
      toFirestore(bookmark) {
        return {
          ...bookmark
        };
      },
      fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return {
          ...data
        };
      }
    };

    /***/
  },

  /***/ 7831: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Y: () => /* binding */ statsConverter
      /* harmony export */
    });
    const statsConverter = {
      toFirestore(bookmark) {
        return {
          ...bookmark
        };
      },
      fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return {
          ...data
        };
      }
    };

    /***/
  },

  /***/ 9144: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ f: () => /* binding */ tweetConverter
      /* harmony export */
    });
    const tweetConverter = {
      toFirestore(tweet) {
        return {
          ...tweet
        };
      },
      fromFirestore(snapshot, options) {
        const { id } = snapshot;
        const data = snapshot.data(options);
        return {
          id,
          ...data
        };
      }
    };

    /***/
  },

  /***/ 3771: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ x: () => /* binding */ userConverter
      /* harmony export */
    });
    const userConverter = {
      toFirestore(user) {
        return {
          ...user
        };
      },
      fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return {
          ...data
        };
      }
    };

    /***/
  }
};
