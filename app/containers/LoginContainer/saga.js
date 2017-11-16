// import { take, call, put, select } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import * as actions from './constants';

// Individual exports for testing

export function* handleLogin() {
  yield put(goBack());
}

export default function* rootSaga() {
  yield [
    yield takeLatest(actions.LOGIN, handleLogin),
  ];
}
