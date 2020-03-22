import { authAPI, securityAPI } from "./../API/API";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGOUT = "SET_LOGOUT";
const TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaURL: null  // if null then captcha not needed
};

const authReducer = (stateReducer = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...stateReducer,
        ...action.data,
        isAuth: true
      };
    case SET_LOGOUT:
      return {
        ...stateReducer,
        isAuth: false
      };
    case TOGGLE_ISFETCHING:
      return {
        ...stateReducer,
        isFetching: action.toggle
      };
    case SET_CAPTCHA_URL:
      return {
        ...stateReducer,
        captchaURL: action.url
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
const setLogoutAC = () => ({
  type: SET_LOGOUT
});
const setToggleIsfetcing = toggle => ({
  type: TOGGLE_ISFETCHING,
  toggle: toggle
});
const setCaptchaURL = url => ({
  type: SET_CAPTCHA_URL,
  url: url
});

// THUNK CREATORs:

export const getAuth = () => async dispatch => {
  let response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    dispatch(SetAuthUserData(response.data.data));
  }
};

export const setLogin = (email, password, rememberMe, captcha) => async dispatch => {
  dispatch(setToggleIsfetcing(true));
  let response = await authAPI.setLogin({
    email: email,
    password: password,
    rememberMe: rememberMe,
    captcha: captcha
  });
  if (response.data.resultCode === 0) {
    authAPI.getAuth().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(response.data.data));
      }
    });
  } else  {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaURL())
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    let action = stopSubmit("login", { _error: message });
    dispatch(action);
  } 
  dispatch(setToggleIsfetcing(false));
};

export const setLogout = () => async dispatch => {
  dispatch(setToggleIsfetcing(true));
  let response = await authAPI.setLogout();
  if (response.data.resultCode === 0) {
    dispatch(setLogoutAC());
    dispatch(setToggleIsfetcing(false));
  }
};

export const getCaptchaURL = () => async dispatch => {
  const response = await securityAPI.getCaptchaURL();
  if (response.data.url.length !== 0) {
    const captchaURL = response.data.url;
    dispatch(setCaptchaURL(captchaURL));
  }
};

export default authReducer;
