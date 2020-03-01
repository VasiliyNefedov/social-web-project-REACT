const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (stateReducer = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...stateReducer,
        ...action.data,
        isAuth: true
      };

    default:
      return stateReducer;
  }
};
export const SetAuthUserData = data => ({
  type: SET_USER_DATA,
  data: data
});

export default authReducer;
