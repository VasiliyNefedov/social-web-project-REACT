import React from "react";
import {
  SetDialogsChatMessagesAC,
  UpdateCurrentMessageTextAC
} from "../../../redux/dialogsReducer";
import DialogsChat from "./dialogsChat";
import StoreContext from "../../../StoreContext";

const DialogsChatContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let addNewMessage = () => {
          store.dispatch(SetDialogsChatMessagesAC());
        };

        let onMessageChange = text => {
          store.dispatch(UpdateCurrentMessageTextAC(text));
        };
        return (
          <DialogsChat
            UpdateCurrentMessageTextAC={onMessageChange}
            SetDialogsChatMessagesAC={addNewMessage}
            dialogsChatMessages={store.getState().dialogs.dialogsChatMessages}
            currentMessageText={store.getState().dialogs.currentMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsChatContainer;
