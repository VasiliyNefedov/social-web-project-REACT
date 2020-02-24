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
          <Profile profile={props.state.profile} dispatch={props.dispatch} />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs dialogs={props.state.dialogs} dispatch={props.dispatch} />
        )}
      />
    </div>
  );
}

export default Content;
