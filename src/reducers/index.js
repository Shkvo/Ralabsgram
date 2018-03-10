import { combineReducers } from 'redux';
import user from './user';
import mediaDetails from './media';

export default combineReducers({
	user,
	mediaDetails
});
