import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from '../NavigationContainer/constants';
import { requestLinkSucceeded, requestLinkFailed } from './actions';

function fetchFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then((r) => r.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchFromServer, action.topic);
    yield put(requestLinkSucceeded(links));
  } catch (e) {
    yield put(requestLinkFailed(e.message));
  }
}

export default function* fetchLinksSaga() {
  yield takeLatest(actions.SELECT_TOPIC, fetchLinks);
}
