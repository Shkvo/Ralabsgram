import { call, put, takeEvery, all } from 'redux-saga/effects';
import API from '../API';
import {
  GET_MEDIA_DETAILS,
  GET_MEDIA_DETAILS_SUCCESS,
  GET_MEDIA_DETAILS_FAILED,
  GET_MEDIA_COMMENTS,
  GET_MEDIA_COMMENTS_SUCCESS,
  GET_MEDIA_COMMENTS_FAILED
} from './types';

/**
 * @function getMediaDetails
 * @param {object} action
 * @description gets the user media from Instagram
 */

export function* getMediaDetails(action) {
  try {
    const mediaDetails = yield call(API.getMediaDetails, action.payload);
    yield put({ type: GET_MEDIA_DETAILS_SUCCESS, payload: mediaDetails });
  } catch (e) {
    yield put({ type: GET_MEDIA_DETAILS_FAILED });
    throw e;
  }
}

/**
 * @function getMediaComments
 * @param {object} action
 * @description gets the media comments from Instagram
 */

export function* getMediaComments(action) {
  try {
    const mediaComments = yield call(API.getMediaComments, action.payload);
    yield put({ type: GET_MEDIA_COMMENTS_SUCCESS, payload: mediaComments });
  } catch (e) {
    yield put({ type: GET_MEDIA_COMMENTS_FAILED });
    throw e;
  }
}

/**
 * @function mediaSaga
 * @description main function, that watches for some action types
 */

export default function* userSaga() {
  yield all([
    takeEvery(GET_MEDIA_DETAILS, getMediaDetails),
    takeEvery(GET_MEDIA_COMMENTS, getMediaComments) 
  ]);
}
