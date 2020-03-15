import React from "react";
import style from "./profileStatus.module.css";
import { Field, reduxForm } from "redux-form";
import PreloaderMini from "../../../common/preloader/preloaderMini";

const StatusForm = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className={style.profileStatusContainer}
      // onBlur={props.deactivateEditModeOnBlur}
    >
      <Field
        autoFocus={true}
        component={"textarea"}
        type="text"
        name="statusText"
        className={style.textarea}
        placeholder="Write your status here..."
        // defaultFormat={() => props.status}
        // onBlur={() => props.deactivateEditModeOnBlur()}
      />
      {props.isFetching ? (
        <PreloaderMini />
      ) : (
        <button className={style.button}>Send</button>
      )}
    </form>
  );
};

export const StatusReduxForm = reduxForm({ form: "status" })(StatusForm);
