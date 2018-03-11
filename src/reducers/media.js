import {
  GET_MEDIA_DETAILS_SUCCESS,
  GET_MEDIA_COMMENTS_SUCCESS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_MEDIA_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload
      };

    case GET_MEDIA_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload
      };

    default:
      return state;
  }
};
