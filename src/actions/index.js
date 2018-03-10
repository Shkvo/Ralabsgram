import { all } from 'redux-saga/effects';
import userSaga from './user';
import mediaSaga from './media';

/**
 *  @function rootSaga
 *  @description root function that handles all sagas
 */

export default function* rootSaga() {
  yield all([
    userSaga(),
    mediaSaga()
  ]);
}
