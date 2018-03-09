import { call, put, takeEvery, all } from 'redux-saga/effects';
import API from '../API';
import {
  GET_USER_MEDIA,
  GET_USER_MEDIA_SUCCESS,
  GET_USER_MEDIA_FAILED,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
} from './types';

/**
 * @function getUserMedia
 * @param {object} action
 * @description gets the user media from Instagram
 */

export function* getUserMedia(action) {
  try {
    const userMedia = yield call(API.getUserMedia, action.payload);
    yield put({ type: GET_USER_MEDIA_SUCCESS, payload: userMedia });
  } catch (e) {
    yield put({ type: GET_USER_MEDIA_FAILED });
    throw e;
  }
}

/**
 * @function getUserInfo
 * @param {object} action
 * @description gets the user info from Instagram
 */

export function* getUserInfo(action) {
  try {
    const userInfo = yield call(API.getUserInfo, action.payload);
    yield put({ type: GET_USER_INFO_SUCCESS, payload: userInfo });
  } catch (e) {
    yield put({ type: GET_USER_INFO_FAILED });
    throw e;
  }
}

/**
 * @function userSaga
 * @description main function, that watches for some action types
 */

export default function* userSaga() {
  yield all([
    takeEvery(GET_USER_MEDIA, getUserMedia),
    takeEvery(GET_USER_INFO, getUserInfo),
  ]);
}
