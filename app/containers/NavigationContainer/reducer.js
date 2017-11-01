/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as actions from './constants';

const initialState = fromJS({
  topics: [],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    default:
      return state;
  }
}

export default navigationContainerReducer;
