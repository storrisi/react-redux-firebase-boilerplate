import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: process.ENV.REACT_APP_API_KEY,
  authDomain: process.ENV.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.ENV.REACT_APP_DATABASE_URL,
  projectId: process.ENV.REACT_APP_PROJECT_ID,
  storageBucket: process.ENV.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.ENV.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.ENV.REACT_APP_APP_ID
})

const db = firebaseApp.firestore()

export { db }
