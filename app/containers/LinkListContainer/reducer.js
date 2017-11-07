/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as actions from './constants';

const initialState = fromJS({
  links: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links);
    default:
      return state;
  }
}

export default linkListContainerReducer;
