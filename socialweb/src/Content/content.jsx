import React from "react";
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import { Route } from "react-router-dom";

function Content() {
  return <div className="content">
    <Route path='/profile' component={Profile}/> 
    <Route path='/dialogs' component={Dialogs}/> 
  </div>;
}

export default Content;
