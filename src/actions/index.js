import { all } from 'redux-saga/effects';
import userSaga from './user';

/**
 *  @function rootSaga
 *  @description root function that handles all sagas
 */

export default function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}
