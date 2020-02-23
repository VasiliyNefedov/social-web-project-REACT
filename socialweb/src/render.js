import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  SetProfileBlogItems,
  UpdateCurrentPostText,
  SetDialogsChatMessages,
  UpdateCurrentMessageText
} from "./redux/state";

// import store from './redux/redux-store';

// SetProfileBlogItems('test post');

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      SetProfileBlogItems={SetProfileBlogItems}
      UpdateCurrentPostText={UpdateCurrentPostText}
      SetDialogsChatMessages={SetDialogsChatMessages}
      UpdateCurrentMessageText={UpdateCurrentMessageText}
    />,
    document.getElementById("root")
  );
};
