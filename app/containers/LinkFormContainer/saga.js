// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import * as actions from './constants';
import { createLink } from '../../api';
import { addLinkFailed, addLinkSuccess } from './actions';

export function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkFailed(action.link, e.message));
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
