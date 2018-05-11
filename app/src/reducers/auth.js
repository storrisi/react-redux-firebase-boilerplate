import Immutable from 'immutable';

import {
  START_LOGIN,
  SUCCESS_LOGIN,
  START_GET_CURRENT_USER,
  SUCCESS_GET_CURRENT_USER,
  SUCCESS_LOGOUT
} from '../actions/auth';

const initialState = Immutable.fromJS({
  data: {},
  status: null
});

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOGIN:
    case START_GET_CURRENT_USER:
      console.log(action);
      return state.set('status', action.type);
    case SUCCESS_LOGIN:
    case SUCCESS_GET_CURRENT_USER:
      return state.set('data', action.data).set('status', action.type);
    case SUCCESS_LOGOUT:
      return state.set('data', {}).set('status', action.type);
    default:
      return state;
  }
}

/* Selectors */

/**
 * User Selector
 * Returns the current user logged into the application
 * @param {*} state
 */
export function getCurrentUser(state) {
  return state.getIn(['auth', 'data']) || {};
}

/**
 * Status Selector
 * Returns information about the status of Auth Store
 *
 * @param  {} state
 */
export function getStatus(state) {
  return state.getIn(['auth', 'status']);
}
