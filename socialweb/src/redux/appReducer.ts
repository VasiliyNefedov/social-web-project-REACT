// import { authAPI } from "../API/API";
// import { stopSubmit } from "redux-form";
import { getAuth } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

export type InitialStateType = {
  initialized: boolean
}

let initialState:InitialStateType = {
  initialized: false
};

const appReducer = (stateReducer = initialState, action: any):InitialStateType => {
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

type SetInitializedActionType = {
  type: typeof SET_INITIALIZED
}

export const SetInitialized = ():SetInitializedActionType => ({
  type: SET_INITIALIZED
});

// THUNK CREATORs:

export const initializeApp = () => {
  return (dispatch: any) => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => dispatch(SetInitialized()));
  };
};

export default appReducer;
