import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// @ts-ignore
const next = require('next');

admin.initializeApp();

export * from './normalize-stats';
export * from './notify-email';

const isDev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev: isDev,
  conf: {
    distDir: '.next'
  }
});
const handle = nextApp.getRequestHandler();

export const nextSSR = functions
  .region('us-central1')
  .https.onRequest((req, res) => {
    return nextApp.prepare().then(() => handle(req, res));
  });
