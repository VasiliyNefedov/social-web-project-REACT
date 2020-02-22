import React from "react";
import DialogsList from "./dialogsList/dialogsList";
import DialogsChat from "./dialogsChat/dialogsChat";
import c from "./dialogs.module.css";

function Dialogs() {
  return <div className={c.dialogs}>

    <div className={c.dialogsList}><DialogsList /></div>
    <div className={c.dialogsChat}><DialogsChat /></div>
  </div>;
}

export default Dialogs;
