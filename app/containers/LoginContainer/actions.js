/*
 *
 * LoginContainer actions
 *
 */

import * as actions from './constants';

export function login(email) {
  return {
    type: actions.LOGIN,
    email,
  };
}

export function cancelLogin() {
  return {
    type: actions.LOGIN_CANCEL,
  };
}
