const initialState = {
username: '',
id: 0,
avatar:'',
company:'',
office:''
}

export default userReducer = (state = initialState, action) => {
  let username;
  let id;
  let company;
  let office;
  switch(action.type) {
    case actionTypes.ADD_USERINFO:
      username = action.payload.username;
      id = action.payload.id;
      company = action.payload.company;
      office = ation.payload.office;
      return {
        ...state,
        username, // this is the same as username: username,
        id,
        company,
        office
      };
    default:
      return initialState;
  }
};
