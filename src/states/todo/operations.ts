import { call, put, takeEvery } from 'redux-saga/effects';
import * as todoActions from './actions';

const fetch = (ms: number = 1000) => {
  return new Promise(resolve => setTimeout(() => resolve(['aaa', 'bbb']), ms));
};

function* loadTodoList() {
  try {
    const todoList = yield call(fetch, 1000);
    yield put(todoActions.doneLoadingTodoList({ result: todoList }))
  } catch(err) {
    yield put(todoActions.failedLoadingTodoList({ error: err.message }));
  }
}

export function* todoSagas() {
  yield takeEvery(todoActions.startLoadingTodoList, loadTodoList);
}