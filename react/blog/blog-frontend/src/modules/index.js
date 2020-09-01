import auth, { authSaga } from './auth';
import loading from './loading';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ auth, loading });

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
