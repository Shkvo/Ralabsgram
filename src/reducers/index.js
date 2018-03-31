import { combineReducers } from 'redux';
import user from './user';
import media from './media';

/**
 * @function combineReducers
 * @param {object} reducer Object with reducers
 * @description Combines provided in object reducers
 * @returns Proper object with passed peaces of state to reducers
 */

export default combineReducers({
	user,
	media
});
