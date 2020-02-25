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
          <Profile store={props.store} />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs store={props.store} />
        )}
      />
    </div>
  );
}

export default Content;
