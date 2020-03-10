import React from "react";
import style from "./profileStatus.module.css";
import { Field, reduxForm } from "redux-form";

const StatusForm = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className={style.profileStatusContainer}
      onBlur={props.onBlur}
    >
      <Field
        autoFocus={true}
        component={'input'}
        type="text"
        name="statusText"
        className={style.textarea}
        placeholder="Write your status here..."
      />
      <button className={style.button}>Send</button>
    </form>
  );
};

export const StatusReduxForm = reduxForm({ form: "status" })(StatusForm);
