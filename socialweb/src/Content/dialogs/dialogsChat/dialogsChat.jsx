import React from "react";
import style from "./dialogsChat.module.css";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

class DialogsChat extends React.Component {
  onSubmit = formData => {
    return this.props.SetDialogsChatMessagesAC(formData.messageText);
  };
  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;

    let dialogsChatMessagesArray = this.props.dialogsChatMessages.map(el => {
      return <div className={style.message}>{el.message}</div>;
    });

    return (
      <div>
        <div className={style.dialogsChat} >{dialogsChatMessagesArray}</div>
        <DialogsChatReduxForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const DialogsChatForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"messageText"}
        component={"textarea"}
        placeholder="Write your message..."
        className={style.textarea}
      />
      <button className={style.button}>Send message</button>
    </form>
  );
};

const DialogsChatReduxForm = reduxForm({
  form: "dialogsMessage"
})(DialogsChatForm);

export default DialogsChat;
