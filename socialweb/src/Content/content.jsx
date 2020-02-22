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
          <Profile profileBlogItems={props.profile.profileBlogItems} />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogsListItems={props.dialogs.dialogsListItems}
            dialogsChatMessages={props.dialogs.dialogsChatMessages}
          />
        )}
      />
    </div>
  );
}

export default Content;
