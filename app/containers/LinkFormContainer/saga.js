// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call } from 'redux-saga/effects';
import * as actions from './constants';
import { createLink } from '../../api';

export function* addLink(action) {
  try {
    yield call(createLink, action.link);
  } catch (e) {
    console.error(e);
  }
}

// Individual exports for testing
export function* addLinkSaga() {
  yield takeLatest(actions.ADD_LINK, addLink);
}

export default function* defaultSaga() {
  yield [
    addLinkSaga(),
  ];
}
