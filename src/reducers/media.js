import {
  GET_MEDIA_DETAILS_SUCCESS,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_MEDIA_DETAILS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
