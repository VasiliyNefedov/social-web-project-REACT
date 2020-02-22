import React from "react";
import style from "./dialogsChat.module.css";

function DialogsChat(props) {
  let dialogsChatMessagesArray = props.dialogsChatMessages.map(el => {
    return <div className={style.message}>{el.message}</div>;
  });

  return (
    <div>
      <div className={style.dialogsChat}>{dialogsChatMessagesArray}</div>
      <textarea
        placeholder="Write your message..."
        className={style.textarea}
      ></textarea>
      <button className={style.button}>Send message</button>
    </div>
  );
}

export default DialogsChat;
