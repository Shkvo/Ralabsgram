import axios from 'axios';
import {
  userRecentMediaURL,
  userInfoURL,
  getMediaDetailsURL,
  getMediaCommentsURL,
  getMediaLikesURL,
} from './endpoints';

/**
 * @namespace API
 * @property {function} getUserMedia Gets user media from Instagram API
 * @property {function} getUserInfo Gets user info from Instagram API
 * @property {function} getMediaDetails Gets media details from Instagram API
 * @property {function} getMediaComments Gets media comments from Instagram API
 * @property {function} getMediaLikes Gets media likes from Instagram API
 * @description API object with methods, which sends requests to Instagram API
 */

export default {
  /**
   * @function getUserMedia
   * @param {string} accessToken String to make authorized requests to Instagram API
   * @description Makes request for user media to Instagram API
   * @returns Array with user media
   */

  async getUserMedia(accessToken) {
    const userMedia = await axios.get(
      `${userRecentMediaURL}?access_token=${accessToken}`,
    );

    return userMedia.data.data;
  },

  /**
   * @function getUserInfo
   * @param {string} accessToken String to make authorized requests to Instagram API
   * @description Makes request for user info to Instagram API
   * @returns Object with user info
   */

  async getUserInfo(accessToken) {
    const userInfo = await axios.get(
      `${userInfoURL}?access_token=${accessToken}`,
    );

    return userInfo.data.data;
  },

  /**
   * @function getMediaDetails
   * @param {object} data Object with data to make requests to Instagram API
   * @description Makes request for media details to Instagram API
   * @returns Object with media details
   */

  async getMediaDetails(data) {
    const mediaDetailsURL = getMediaDetailsURL(data.id);
    const mediaDetails = await axios.get(
      `${mediaDetailsURL}?access_token=${data.accessToken}`,
    );

    return mediaDetails.data.data;
  },

  /**
   * @function getMediaComments
   * @param {object} data Object with data to make requests to Instagram API
   * @description Makes request for media comments to Instagram API
   * @returns Array with media comments
   */

  async getMediaComments(data) {
    const mediaCommentsURL = getMediaCommentsURL(data.id);
    const mediaComments = await axios.get(
      `${mediaCommentsURL}?access_token=${data.accessToken}`,
    );

    return mediaComments.data.data;
  },

  /**
   * @function getMediaLikes
   * @param {object} data Object with data to make requests to Instagram API
   * @description Makes request for media likes to Instagram API
   * @returns Array with media likes
   */

  async getMediaLikes(data) {
    const mediaLikesURL = getMediaLikesURL(data.id);
    const mediaLikes = await axios.get(
      `${mediaLikesURL}?access_token=${data.accessToken}`,
    );

    return mediaLikes.data.data;
  },
};
