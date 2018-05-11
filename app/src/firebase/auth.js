import {auth, authObj} from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Re-auth
export const reauthenticateWithCredential = credential =>
  auth.currentUser.reauthenticateWithCredential(credential);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export const onAuthStateChanged = func => auth.onAuthStateChanged(func);
export const emailAuthCredential = (email, password) =>
  authObj.EmailAuthProvider.credential(email, password);
export const getToken = () => auth.currentUser.getIdToken();
