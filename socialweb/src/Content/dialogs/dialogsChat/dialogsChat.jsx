import React from "react";
import style from "./dialogsChat.module.css";
import { Redirect } from "react-router-dom";

const DialogsChat = props => {
  let dialogsChatMessagesArray = props.dialogsChatMessages.map(el => {
    return <div className={style.message}>{el.message}</div>;
  });

  let newMessageText = React.createRef();

  let addNewMessage = () => {
    props.SetDialogsChatMessagesAC();
  };

  let onMessageChange = () => {
    props.UpdateCurrentMessageTextAC(newMessageText.current.value);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div>
      <div className={style.dialogsChat}>{dialogsChatMessagesArray}</div>
      <textarea
        value={props.currentMessageText}
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
};

export default DialogsChat;
