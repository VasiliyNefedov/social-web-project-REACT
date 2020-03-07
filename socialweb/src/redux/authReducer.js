import { authAPI } from "./../API/API";

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

//ACTION CREATORs:

export const SetAuthUserData = data => ({
  type: SET_USER_DATA,
  data: data
});

// THUNK CREATORs:

export const getAuth = () => {
  return dispatch => {
    authAPI.getAuth().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(response.data.data));
      }
    });
  };
};

export default authReducer;
