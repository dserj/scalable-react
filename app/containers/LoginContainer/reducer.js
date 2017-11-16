/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as actions from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default loginContainerReducer;
