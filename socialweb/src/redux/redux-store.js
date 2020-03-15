import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducersPack = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersPack, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
  ));

// let store = createStore(reducersPack, applyMiddleware(thunkMiddleWare));

window.___store___ = store;

export default store;
