import { initializeApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isUsingEmulator } from '@lib/env';
import { getFirebaseConfig } from './config';
import type { Auth } from 'firebase/auth';
import type { Functions } from 'firebase/functions';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseApp } from 'firebase/app';
import type { FirebaseStorage } from 'firebase/storage';

type Firebase = {
  auth: Auth;
  storage: FirebaseStorage;
  firestore: Firestore;
  functions: Functions;
  firebaseApp: FirebaseApp;
};

function initialize(): Firebase {
  if (typeof window === 'undefined') {
    throw new Error('Firebase cannot be initialized on the server');
  }

  const firebaseApp = getApps().length
    ? getApps()[0]
    : initializeApp(getFirebaseConfig());

  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const functions = getFunctions(firebaseApp);

  return { firebaseApp, auth, firestore, storage, functions };
}

function connectToEmulator(firebase: Firebase): Firebase {
  connectAuthEmulator(firebase.auth, 'http://localhost:9099', {
    disableWarnings: true
  });
  connectStorageEmulator(firebase.storage, 'localhost', 9199);
  connectFirestoreEmulator(firebase.firestore, 'localhost', 8080);
  connectFunctionsEmulator(firebase.functions, 'localhost', 5001);

  return firebase;
}

export function getFirebaseClient(): Firebase {
  const firebase = initialize();
  return isUsingEmulator ? connectToEmulator(firebase) : firebase;
}
