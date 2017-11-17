/*
 *
 * LinkFormContainer actions
 *
 */

import * as actions from './constants';

export function addLink(link) {
  return {
    type: actions.ADD_LINK,
    link,
  };
}

export function addLinkSuccess(link) {
  return {
    type: actions.ADD_LINK_SUCCESS,
    link,
  };
}

export function addLinkFailed(link, message) {
  return {
    type: actions.ADD_LINK_FAILED,
    link,
    message,
  };
}
