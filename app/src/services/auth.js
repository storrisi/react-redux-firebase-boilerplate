import {auth} from '../firebase';
import {SIGN_UP_API, USER_DATA_API} from './api';
import {fetch, tokenizedFetch} from './fetch';

/**
 * Function to Login into the application
 * This is function is connected to the current layer of auth method
 * Currently, auth method is Firebase
 *
 * @param {*} email
 * @param {*} password
 */
export const doSignIn = (email, password, dispatch) => {
  return new Promise((resolve, reject) =>
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(response => {
        const fetch = tokenizedFetch(dispatch);
        fetch(`${USER_DATA_API}/${response.uid}`, {
          method: 'GET'
        })
          .then(res =>
            resolve(Object.assign({}, response.providerData[0], res.data))
          )
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      })
  );
};

/**
 * Function to Logout the application
 * This is function is connected to the current layer of auth method
 * Currently, auth method is Firebase
 *
 */
export const doSignOut = () => {
  return new Promise((resolve, reject) =>
    auth
      .doSignOut()
      .then(() => {
        resolve(true);
      })
      .catch(error => {
        reject(error);
      })
  );
};

/**
 * Function to Reset the User Password
 * This is function is connected to the current layer of auth method
 * Currently, auth method is Firebase
 *
 * @param {*} email
 */
export const doPasswordReset = email => {
  return new Promise((resolve, reject) =>
    auth
      .doPasswordReset(email)
      .then(() => {
        resolve(true);
      })
      .catch(error => {
        reject(error);
      })
  );
};

/**
 * Function to Update the User Password
 * This is function is connected to the current layer of auth method
 * Currently, auth method is Firebase
 *
 * @param  {} email
 * @param  {} currentPassword
 * @param  {} newPassword
 */
export const doPasswordUpdate = (email, currentPassword, newPassword) => {
  return new Promise((resolve, reject) => {
    const credential = auth.emailAuthCredential(email, currentPassword);

    auth
      .reauthenticateWithCredential(credential)
      .then(() => {
        auth
          .doPasswordUpdate(newPassword)
          .then(() => {
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => reject(error));
  });
};

/**
 * Function to Signup into the application
 * This is function is connected to the current layer of auth method
 * Currently, auth method is Firebase
 *
 * @param {*} email
 * @param {*} password
 */
export const doSignup = data => {
  return new Promise((resolve, reject) =>
    fetch(`${SIGN_UP_API}`, {
      method: 'POST',
      data: {
        email: data.email,
        password: data.password,
        companyName: data.companyName,
        name: data.name,
        surname: data.surname,
        obligedSubjects: data.obligedSubjects,
        expiryDate: data.expiryDate,
        userType: 1,
        isNewUser: true
      }
    })
      .then(res => resolve(res))
      .catch(error => {
        reject(error);
      })
  );
};

/**
 * Function that returns the current logged user and all of its data
 *
 */
export const currentUser = dispatch => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        const fetch = tokenizedFetch(dispatch);
        fetch(`${USER_DATA_API}/${user.uid}`, {
          method: 'GET'
        })
          .then(res => {
            resolve(
              Object.assign({}, user.providerData[0], res.data, {uid: user.uid})
            );
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject('not logged');
      }
    });
  });
};

/**
 * Function that updateds the data of the current logged user
 *
 * @param {*} data
 */
export const doCurrentUserUpdate = data => {
  return new Promise((resolve, reject) => resolve(true));
};

/**
 * Function that updateds the data of the current logged user
 *
 * @param {*} data
 */
export const doUserUpdate = data => {
  return new Promise((resolve, reject) => resolve(true));
};

/**
 * Function that updates the data of the current logged user
 *
 * @param {*} data
 */
export const doDelete = uid => {
  return new Promise((resolve, reject) => {
    fetch(`${USER_DATA_API}/${uid}`, {
      method: 'DELETE'
    })
      .then(res => {
        resolve(true);
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * Function that returns the currentUser token
 *
 */
export const getToken = () => auth.getToken();
