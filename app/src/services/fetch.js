import axios from 'axios';
import config from '../utils/config';
import {getToken} from '../services/auth';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain'
  },
  timeout: config.requestTimeout
};

// A simple fetch without default error interceptions
export function fetch(url, options = {}) {
  return axios(Object.assign({url}, defaultOptions, options));
}

/**
 * Use this function if you need to attach token to the header of the call to the server
 */
export function tokenizedFetch(dispatch) {
  return function(url, options = {}) {
    return getToken()
      .then(token => {
        return axios(
          Object.assign({url}, defaultOptions, options, {
            headers: {...defaultOptions.headers, token}
          })
        ).catch(error => {
          return Promise.reject(error);
        });
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
}

// Use this when you need automatic network failures handling
export function buildFetch(dispatch) {
  return function fetch(url, options = {}) {
    return axios(Object.assign({url}, defaultOptions, options)).catch(error => {
      console.log(error);
      return Promise.reject(error);
    });
  };
}
