/*
 *
 * LinkListContainer actions
 *
 */

import * as actions from './constants';

export function requestLinkSucceeded(links) {
  return {
    type: actions.REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinkFailed(message) {
  return {
    type: actions.REQUEST_LINKS_FAILED,
    message,
  };
}
