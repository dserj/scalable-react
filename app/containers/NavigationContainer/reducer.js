/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as actions from './constants';

const initialState = fromJS({
  topics: [],
  isDrawerOpen: false,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case actions.SELECT_TOPIC:
      return state.set('selectedTopic', action.topic).set('isDrawerOpen', false);
    case actions.TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
