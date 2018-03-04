export default (state = {}, action) => {
  switch (action.type) {
  	
    case 'LOGIN':
      return {
      	...state,
      	isLogged: !state.isLogged,
        access_token: action.payload,
      };

    default:
      return state;
  }
};
