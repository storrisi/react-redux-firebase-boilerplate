import * as firebase from 'firebase';
import config from '../utils/config';

const firebaseConfig =
  process.env.NODE_ENV === 'production'
    ? config.firebaseProdConfig
    : config.firebaseDevConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const authObj = firebase.auth;

export {auth, authObj};
