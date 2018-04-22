import { call, put, takeEvery, all } from 'redux-saga/effects';
import API from '../API';
import {
  GET_MEDIA_DETAILS,
  GET_MEDIA_DETAILS_SUCCESS,
  GET_MEDIA_DETAILS_FAILED,
  GET_MEDIA_COMMENTS,
  GET_MEDIA_COMMENTS_SUCCESS,
  GET_MEDIA_COMMENTS_FAILED,
  GET_MEDIA_LIKES,
  GET_MEDIA_LIKES_SUCCESS,
  GET_MEDIA_LIKES_FAILED,
} from './types';

/**
 * @function getMediaDetails
 * @generator
 * @param {object} action Data object needed to make requests for media details
 * @yields Function
 * @description Gets the user media from Instagram API
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
 * @generator
 * @param {object} action Data object needed to make requests for media comments
 * @yields Function
 * @description Gets the media comments from Instagram API
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
 * @function getMediaLikes
 * @generator
 * @param {object} action Data object needed to make requests for media comments
 * @yield Function
 * @description Gets the media comments from Instagram API
 */

export function* getMediaLikes(action) {
  try {
    const mediaLikes = yield call(API.getMediaLikes, action.payload);
    yield put({ type: GET_MEDIA_LIKES_SUCCESS, payload: mediaLikes });
  } catch (e) {
    yield put({ type: GET_MEDIA_LIKES_FAILED });
    throw e;
  }
}

/**
 * @function mediaSaga
 * @generator
 * @description Main function, that watches for defined bellow action types
 * @yields Function
 */

export default function* userSaga() {
  yield all([
    takeEvery(GET_MEDIA_DETAILS, getMediaDetails),
    takeEvery(GET_MEDIA_COMMENTS, getMediaComments),
    takeEvery(GET_MEDIA_LIKES, getMediaLikes),
  ]);
}
