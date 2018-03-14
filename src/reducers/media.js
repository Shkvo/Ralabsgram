import {
  GET_MEDIA_DETAILS_SUCCESS,
  GET_MEDIA_COMMENTS_SUCCESS,
  POST_MEDIA_COMMENT,
  DELETE_MEDIA_COMMENT
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

    case POST_MEDIA_COMMENT:
      return {
        ...state,
        comments: [...state.comments].concat(action.payload)
      };

    case DELETE_MEDIA_COMMENT:
      const comments = [...state.comments];
      comments.splice(action.payload, 1);
      
      return {
        ...state,
        comments
      };

    default:
      return state;
  }
};
