import React from "react";
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import { Route } from "react-router-dom";
import UsersContainer from "./users/usersContainer";

function Content(props) {
  return (
    <div className="content">
      <Route
        path="/profile"
        render={() => (
          <Profile />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs />
        )}
      />
       <Route
        path="/users"
        render={() => (
          <UsersContainer />
        )}
      />
    </div>
  );
}

export default Content;
