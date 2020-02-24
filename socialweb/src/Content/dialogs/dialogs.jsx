import React from "react";
import DialogsList from "./dialogsList/dialogsList";
import DialogsChat from "./dialogsChat/dialogsChat";
import c from "./dialogs.module.css";

function Dialogs(props) {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsList}>
        <DialogsList dialogsListItems={props.dialogs.dialogsListItems} />
      </div>
      <div className={c.dialogsChat}>
        <DialogsChat dispatch={props.dispatch} dialogs={props.dialogs} />
      </div>
    </div>
  );
}

export default Dialogs;
