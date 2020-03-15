// import { authAPI } from "../API/API";
// import { stopSubmit } from "redux-form";
import { getAuth } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false
};

const appReducer = (stateReducer = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...stateReducer,
        initialized: true
      };
    default:
      return stateReducer;
  }
};

//ACTION CREATORs:

export const SetInitialized = () => ({
  type: SET_INITIALIZED
});

// THUNK CREATORs:

export const initializeApp = () => {
  return dispatch => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => dispatch(SetInitialized()));
  };
};

export default appReducer;
