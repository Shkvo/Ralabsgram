import axios from 'axios';
import {
  userRecentMediaURL,
  userInfoURL,
  getMediaDetailsURL,
  getMediaCommentsURL,
  getMediaLikesURL  
} from './endpoints';

/**
 * @namespace API
 * @property {function} getUserMedia
 * @property {function} getUserInfo
 * @property {function} getMediaDetails
 * @property {function} getMediaComments
 * @property {function} getMediaLikes
 * @description API object with methods, which sends requests to Instagram API
 */

export default {

  async getUserMedia(accessToken) {
    const userMedia = await axios.get(`${userRecentMediaURL}?access_token=${accessToken}`);

    return userMedia.data.data;
  },

  async getUserInfo(accessToken) {
    const userInfo = await axios.get(`${userInfoURL}?access_token=${accessToken}`);

    return userInfo.data.data;
  },

  async getMediaDetails(data) {
    const mediaDetailsURL = getMediaDetailsURL(data.id);
    const mediaDetails = await axios.get(`${mediaDetailsURL}?access_token=${data.accessToken}`);

    return mediaDetails.data.data;
  },

  async getMediaComments(data) {
    const mediaCommentsURL = getMediaCommentsURL(data.id);
    const mediaComments = await axios.get(`${mediaCommentsURL}?access_token=${data.accessToken}`);

    return mediaComments.data.data;
  },

  async getMediaLikes(data) {
    const mediaLikesURL = getMediaLikesURL(data.id);
    const mediaLikes = await axios.get(`${mediaLikesURL}?access_token=${data.accessToken}`);
    
    return mediaLikes.data.data;
  },

};
