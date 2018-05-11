import {push} from 'connected-react-router';
import {
  doSignIn,
  doPasswordReset,
  doSignup,
  currentUser,
  doPasswordUpdate,
  doUserUpdate,
  doSignOut,
  doDelete
} from '../services/auth';
import {createError} from '../services/errors';
import {MAIN_ROUTE} from '../utils/routes';

/** LOGIN Action Types */
export const START_LOGIN = 'auth/login/START';
export const SUCCESS_LOGIN = 'auth/login/SUCCESS';
export const ERROR_LOGIN = 'auth/login/ERROR';
export const ERROR_INVALID_CREDENTIALS = 'auth/login/ERROR_INVALID_CREDENTIALS';
/** PWD_RESET Action Types */
export const START_PWD_RESET = 'auth/pwdReset/START';
export const SUCCESS_PWD_RESET = 'auth/pwdReset/SUCCESS';
export const ERROR_PWD_RESET = 'auth/pwdReset/ERROR';
/** SIGNUP Action Types */
export const START_SIGNUP = 'auth/signUp/START';
export const SUCCESS_SIGNUP = 'auth/signUp/SUCCESS';
export const ERROR_SIGNUP = 'auth/signUp/ERROR';
/** GET_CURRENT_USER Action Types */
export const START_GET_CURRENT_USER = 'auth/getCurrentUser/START';
export const SUCCESS_GET_CURRENT_USER = 'auth/getCurrentUser/SUCCESS';
export const ERROR_GET_CURRENT_USER = 'auth/getCurrentUser/ERROR';
/** UPDATE_CURRENT_USER Action Types */
export const START_UPDATE_CURRENT_USER = 'auth/updateCurrentUser/START';
export const SUCCESS_UPDATE_CURRENT_USER = 'auth/updateCurrentUser/SUCCESS';
export const ERROR_UPDATE_CURRENT_USER = 'auth/updateCurrentUser/ERROR';
/** UPDATE_USER Action Types */
export const START_UPDATE_USER = 'auth/updateUser/START';
export const SUCCESS_UPDATE_USER = 'auth/updateUser/SUCCESS';
export const ERROR_UPDATE_USER = 'auth/updateUser/ERROR';
/** LOGOUT Action Types */
export const START_LOGOUT = 'auth/logout/START';
export const SUCCESS_LOGOUT = 'auth/logout/SUCCESS';
export const ERROR_LOGOUT = 'auth/logout/ERROR';
/** DELETE Action Types */
export const START_DELETE = 'auth/delete/START';
export const SUCCESS_DELETE = 'auth/delete/SUCCESS';
export const ERROR_DELETE = 'auth/delete/ERROR';

export function startLogin(username) {
  return {
    type: START_LOGIN,
    username
  };
}

export function successfulLogin(data) {
  return {
    type: SUCCESS_LOGIN,
    data
  };
}

export const failedLogin = createError(ERROR_LOGIN);

export const invalidCredentialsError = createError(ERROR_INVALID_CREDENTIALS);

export function loginAction(u, p) {
  return function(dispatch, getState) {
    dispatch(startLogin(u));

    doSignIn(u, p, dispatch)
      .then(response => {
        dispatch(successfulLogin(response));
      })
      .catch(error => {
        // TODO: manually handle offline and timeout errors
        if (error) {
          const {response, message} = error;
          if (response && response.status === 422) {
            dispatch(invalidCredentialsError());
          } else {
            dispatch(failedLogin(message));
          }
        }
      });
  };
}

/**
 * RESET PASSWORD FUNCTIONS
 */

export function startPwdReset(data) {
  return {
    type: START_PWD_RESET,
    data
  };
}

export function successfullPwdReset(data) {
  return {
    type: SUCCESS_PWD_RESET,
    data
  };
}

export const failedPwdReset = createError(ERROR_PWD_RESET);

/**
 * Dispatch Reset Password function
 *
 * @param  {} email
 */
export function pwdResetAction(email) {
  return function(dispatch, getState) {
    dispatch(startPwdReset(email));
    doPasswordReset(email)
      .then(response => {
        dispatch(successfullPwdReset(response));
      })
      .catch(error => {
        dispatch(failedPwdReset(error));
      });
  };
}

/**
 * SIGNUP FUNCTIONS
 */

export function startSignup(data) {
  return {
    type: START_SIGNUP,
    data
  };
}

export function successSignup(data) {
  return {
    type: SUCCESS_SIGNUP,
    data
  };
}

export const failedSignup = createError(ERROR_SIGNUP);

/**
 * Dispatch a new User Signup Function
 *
 * @param  {} data
 */
export function signUpAction(data) {
  return function(dispatch, getState) {
    dispatch(startSignup(data));
    doSignup(data)
      .then(response => {
        dispatch(successSignup(response));
      })
      .catch(error => {
        dispatch(failedSignup(error));
      });
  };
}

export function startGetUser() {
  return {
    type: START_GET_CURRENT_USER
  };
}

export function successGetUser(data) {
  return {
    type: SUCCESS_GET_CURRENT_USER,
    data
  };
}

export const failedGetUser = createError(ERROR_GET_CURRENT_USER);

/**
 * Loads the current user logged into the application
 *
 */
export function loadCurrentUser() {
  return function(dispatch, getState) {
    dispatch(startGetUser());
    currentUser(dispatch)
      .then(response => {
        dispatch(successGetUser(response));
      })
      .catch(error => {
        dispatch(failedGetUser(error));
        dispatch(push(MAIN_ROUTE));
      });
  };
}

/**
 * UPDATE CURRENT USER FUNCTIONS
 */

export function startUpdateCurrentUser(data) {
  return {
    type: START_UPDATE_CURRENT_USER,
    data
  };
}

export function successUpdateCurrentUser(data) {
  return {
    type: SUCCESS_UPDATE_CURRENT_USER,
    data
  };
}

export const failedUpdateCurrentUser = createError(ERROR_UPDATE_CURRENT_USER);

/**
 * Dispatch a new User Signup Function
 *
 * @param  {} data
 */
export function updateCurrentUserAction(data) {
  return function(dispatch, getState) {
    dispatch(startUpdateCurrentUser(data));
    doPasswordUpdate(data.email, data.currentPassword, data.password)
      .then(response => {
        dispatch(successUpdateCurrentUser(response));
      })
      .catch(error => {
        console.log(error);
        dispatch(failedUpdateCurrentUser(error.message));
      });
  };
}

/**
 * UPDATE USER FUNCTIONS
 */

export function startUpdateUser(data) {
  return {
    type: START_UPDATE_USER,
    data
  };
}

export function successUpdateUser(data) {
  return {
    type: SUCCESS_UPDATE_USER,
    data
  };
}

export const failedUpdateUser = createError(ERROR_UPDATE_USER);

/**
 * Dispatch a new User Update Function
 *
 * @param  {} data
 */
export function updateUserAction(data) {
  return function(dispatch, getState) {
    dispatch(startUpdateUser(data));
    doUserUpdate(data)
      .then(response => {
        dispatch(successUpdateUser(response));
      })
      .catch(error => {
        dispatch(failedUpdateUser(error));
      });
  };
}

/**
 * LOGOUT FUNCTIONS
 */

export function startLogout(username) {
  return {
    type: START_LOGOUT,
    username
  };
}

export function successfulLogout(data) {
  return {
    type: SUCCESS_LOGOUT,
    data
  };
}

export const failedLogout = createError(ERROR_LOGOUT);

export function logoutAction(u, p) {
  return function(dispatch, getState) {
    dispatch(startLogout(u));

    doSignOut(u, p)
      .then(response => {
        dispatch(successfulLogout(response));
        dispatch(push(MAIN_ROUTE));
      })
      .catch(error => {
        // TODO: manually handle offline and timeout errors
        if (error) {
          const {message} = error;
          dispatch(failedLogout(message));
        }
      });
  };
}

/**
 * DELETE USER FUNCTIONS
 */

export function startDelete(username) {
  return {
    type: START_DELETE,
    username
  };
}

export function successfulDelete(data) {
  return {
    type: SUCCESS_DELETE,
    data
  };
}

export const failedDelete = createError(ERROR_DELETE);

export function deleteAction(u) {
  return function(dispatch, getState) {
    dispatch(startDelete(u));

    doDelete(u)
      .then(response => {
        dispatch(successfulDelete(response));
        dispatch(logoutAction());
      })
      .catch(error => {
        dispatch(failedDelete(error));
      });
  };
}
