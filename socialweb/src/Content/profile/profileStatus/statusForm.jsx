import React from "react";
import style from "./profileStatus.module.css";
import { Field, reduxForm } from "redux-form";

// const renderField = ({
//   input,
//   placeholder,
//   type,
//   meta: { touched, error, warning }
// }) => (
//   <div className={style.TextStatusContainer}>
//     {touched && error && <span>{error}</span>}
//     <input type={type} {...input} placeholder={placeholder} className={style.textarea} />
//   </div>
// );

const StatusForm = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className={style.profileStatusContainer}
      onBlur={props.onBlur}
    >
      <Field
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
