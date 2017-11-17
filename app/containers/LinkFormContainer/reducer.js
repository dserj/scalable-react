/*
 *
 * LinkFormContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as actions from './constants';

const initialState = fromJS({});

function linkFormContainerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_LINK:
      return state;
    default:
      return state;
  }
}

export default linkFormContainerReducer;
