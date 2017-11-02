// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then((response) => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

export default function* rootSaga() {
  yield [
    yield takeLatest(actions.SELECT_TOPIC, pushTopic),
    yield takeLatest(actions.REQUEST_TOPICS, fetchTopics),
  ];
}
