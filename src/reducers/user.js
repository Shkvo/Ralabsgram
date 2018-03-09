import {
  LOGIN,
  GET_USER_INFO_SUCCESS,
  GET_USER_MEDIA_SUCCESS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    case LOGIN:
      return {
      	...state,
      	isLogged: !state.isLogged,
        access_token: action.payload,
      };

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload,
      };

    case GET_USER_MEDIA_SUCCESS:
      return {
        ...state,
        media: action.payload,
      };

    default:
      return state;
  }
};
