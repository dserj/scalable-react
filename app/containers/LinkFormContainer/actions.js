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
