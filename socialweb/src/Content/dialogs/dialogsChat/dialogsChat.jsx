import React from "react";
import style from "./dialogsChat.module.css";
import {
  SetDialogsChatMessagesAC,
  UpdateCurrentMessageTextAC
} from "../../../redux/dialogsReducer";

function DialogsChat(props) {
  let dialogsChatMessagesArray = props.dialogs.dialogsChatMessages.map(el => {
    return <div className={style.message}>{el.message}</div>;
  });

  let newMessageText = React.createRef();

  let addNewMessage = () => {
    props.dispatch(SetDialogsChatMessagesAC());
  };

  let onMessageChange = () => {
    props.dispatch(UpdateCurrentMessageTextAC(newMessageText.current.value));
  };

  return (
    <div>
      <div className={style.dialogsChat}>{dialogsChatMessagesArray}</div>
      <textarea
        value={props.dialogs.currentMessageText}
        onChange={onMessageChange}
        ref={newMessageText}
        placeholder="Write your message..."
        className={style.textarea}
      ></textarea>
      <button onClick={addNewMessage} className={style.button}>
        Send message
      </button>
    </div>
  );
}

export default DialogsChat;


