import React from "react";
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import { Route } from "react-router-dom";

function Content(props) {
  return (
    <div className="content">
      <Route
        path="/profile"
        render={() => (
          <Profile
            profile={props.profile}
            SetProfileBlogItems={props.SetProfileBlogItems}
            UpdateCurrentPostText={props.UpdateCurrentPostText}
          />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
          dialogs={props.dialogs}
            // dialogsListItems={props.dialogs.dialogsListItems}
            // dialogsChatMessages={props.dialogs.dialogsChatMessages}
            SetDialogsChatMessages={props.SetDialogsChatMessages}
            UpdateCurrentMessageText={props.UpdateCurrentMessageText}
          />
        )}
      />
    </div>
  );
}

export default Content;
