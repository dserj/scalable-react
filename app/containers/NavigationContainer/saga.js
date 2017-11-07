// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import selectNavigationContainer from './selectors';

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

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopic) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

export default function* rootSaga() {
  yield [
    yield takeLatest(actions.SELECT_TOPIC, pushTopic),
    yield takeLatest(actions.REQUEST_TOPICS, fetchTopics),
    yield takeLatest(actions.REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic),
  ];
}
