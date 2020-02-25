import React from "react";
import c from "./dialogs.module.css";
import DialogsChatContainer from "./dialogsChat/dialogsChatContainer";
import DialogsListContainer from "./dialogsList/dialogsListContainer";

function Dialogs(props) {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsList}>
        <DialogsListContainer />
      </div>
      <div className={c.dialogsChat}>
        <DialogsChatContainer />
      </div>
    </div>
  );
}

export default Dialogs;
