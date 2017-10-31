/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: 'links to useful open source libs',
    },
    {
      name: 'apps',
      description: 'links to useful apps',
    },
    {
      name: 'news',
      description: 'links to useful news',
    },
    {
      name: 'hot news',
      description: 'links to useful hot news',
    },
  ],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
