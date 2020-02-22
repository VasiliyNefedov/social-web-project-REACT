import React from "react";
import c from "./dialogsChat.module.css";

let dialogsChatMessages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Did you learn react.JS?" }
];

let dialogsChatMessagesArray = dialogsChatMessages.map(el => {
  return <div className={c.message}>{el.message}</div>;
});

function DialogsChat() {
  return <div className={c.dialogsChat}>{dialogsChatMessagesArray}</div>;
}

export default DialogsChat;
