import React from "react";
import DialogsList from "./dialogsList";
import StoreContext from "../../../StoreContext";

const DialogsListContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        return (
          <DialogsList
            dialogsListItems={store.getState().dialogs.dialogsListItems}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsListContainer;
