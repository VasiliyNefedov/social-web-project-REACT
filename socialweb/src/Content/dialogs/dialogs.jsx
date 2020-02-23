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
        <DialogsChat
          dialogsChatMessages={props.dialogs.dialogsChatMessages}
          currentMessageText={props.dialogs.currentMessageText}
          SetDialogsChatMessages={props.SetDialogsChatMessages}
          UpdateCurrentMessageText={props.UpdateCurrentMessageText}
        />
      </div>
    </div>
  );
}

export default Dialogs;
