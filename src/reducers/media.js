import {
  POST_MEDIA_COMMENT,
  DELETE_MEDIA_COMMENT,
  POST_MEDIA_LIKE,
  DELETE_MEDIA_LIKE,
  GET_MEDIA_LIKES_SUCCESS,
  GET_MEDIA_DETAILS_SUCCESS,
  GET_MEDIA_COMMENTS_SUCCESS,
} from '../actions/types';

/**
 * @function mediaReducer
 * @param {object} state A peace of redux store to manipulate with it
 * @param {object} action Data object with type of action and in some cases with payload
 * @description Changes previous state depending on action type and provided data
 */

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MEDIA_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };

    case GET_MEDIA_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };

    case GET_MEDIA_LIKES_SUCCESS:
      return {
        ...state,
        likes: action.payload,
      };

    case POST_MEDIA_COMMENT:
      return {
        ...state,
        comments: [...state.comments].concat(action.payload),
      };

    case DELETE_MEDIA_COMMENT:
      const comments = [...state.comments];
      comments.splice(action.payload, 1);

      return {
        ...state,
        comments,
      };

    case POST_MEDIA_LIKE:
      const { id, username } = action.payload;

      return {
        ...state,
        likes: [...state.likes].concat({
          id,
          username,
        }),
      };

    case DELETE_MEDIA_LIKE:
      const likes = [...state.likes];
      const filteredLikes = likes.filter((like) => like.id !== action.payload);

      return {
        ...state,
        likes: filteredLikes,
      };

    default:
      return state;
  }
};
