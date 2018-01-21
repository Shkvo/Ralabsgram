const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGING':
      console.log("User is logging...");
      return state;
    case 'LOGGED':
      console.log('User is logged!');
      return state;
      
    default:
      return state;
  }
};

export default reducer;
