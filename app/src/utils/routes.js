import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getStatus} from '../reducers/auth';

function checkAuthentication(store) {
  return isAuthenticated(store.getState());
}

function checkIsLoading(store) {
  return isLoading(store.getState());
}

export function isAuthenticated(state) {
  const status = getStatus(state);
  return (
    status === 'auth/login/SUCCESS' || status === 'auth/getCurrentUser/SUCCESS'
  );
}

export function isLoading(state) {
  const status = getStatus(state);
  return (
    status === 'auth/login/START' || status === 'auth/getCurrentUser/START'
  );
}

/**
 * @param  {Component} {component
 * @param  {} ...rest}
 */
export function buildPrivateRoute(store) {
  return ({component: Component, ...rest}) => {
    return (
      <Route
        {...rest}
        render={props =>
          checkAuthentication(store) ? (
            <Component {...props} {...rest} />
          ) : checkIsLoading(store) ? (
            <p>LOADING</p>
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: {from: props.location}
              }}
            />
          )
        }
      />
    );
  };
}

export const MAIN_ROUTE = '/';

export function getParametricRoute(route, params = {}) {
  if (!route || typeof route !== 'string') {
    return '';
  }

  let res = route;
  Object.keys(params).forEach(key => {
    const newVal = params[key];
    res = res.replace(
      `:${key}`,
      newVal !== null && newVal !== undefined ? newVal : ''
    );
  });

  return res;
}
