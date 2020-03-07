import React from "react";
import Dialogs from "./dialogs/dialogs";
import { Route } from "react-router-dom";
import UsersContainer from "./users/usersContainer";
import ProfileContainer from "./profile/profileContainer";
import Login from "./login/login";

function Content(props) {
  return (
    <div className="content">
      <Route
        path="/profile/:userId?"
        render={() => (
          <ProfileContainer />
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
      <Route
        path="/login"
        render={() => (
          <Login />
        )}
      />
    </div>
  );
}

export default Content;
