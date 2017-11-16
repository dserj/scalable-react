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
