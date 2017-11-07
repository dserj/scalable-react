import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './constants';
import { requestLinkSucceeded, requestLinkFailed } from './actions';

function fetchFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then((r) => r.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchFromServer, action.topicName);
    yield put(requestLinkSucceeded(links));
  } catch (e) {
    yield put(requestLinkFailed(e.message));
  }
}

export default function* fetchLinksSaga() {
  yield takeLatest(actions.REQUEST_LINKS, fetchLinks);
}
