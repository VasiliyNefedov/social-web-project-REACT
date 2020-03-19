import React from "react";
import style from "./profileInfo.module.css";
import { Field, reduxForm } from "redux-form";
import PreloaderMini from "../../../common/preloader/preloaderMini";

const RenderField = props => {
  return (
    <div>
      <input
        name={props.name}
        {...props.input}
        component={props.component}
        type={props.type}
        placeholder={props.placeholder}
        className={style.InfoInput}
      />
    </div>
  );
};

const ProfileEditForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.editInfoContainer}>
      <Field
        component={RenderField}
        type="text"
        name="fullName"
        placeholder="Write your name here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="aboutMe"
        placeholder="Write something about you here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.facebook"
        placeholder="Write your facebook here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.github"
        placeholder="Write your Github here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.instagram"
        placeholder="Write your instagram here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.mainLink"
        placeholder="Write your mainLink here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.twitter"
        placeholder="Write your twitter here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.vk"
        placeholder="Write your vk here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.website"
        placeholder="Write your website here..."
      />
      <Field
        component={RenderField}
        type="text"
        name="contacts.youtube"
        placeholder="Write your youtube here..."
      />
      <Field component={RenderField} type="checkbox" name="lookingForAJob" />
      Are you looking for a job?
      <Field
        component={RenderField}
        type="text"
        name="lookingForAJobDescription"
        placeholder="Write your job description here..."
      />
      {props.isFetching ? (
        <PreloaderMini />
      ) : (
        <>
          {props.error && <div>{props.error}</div>}
          <button className={style.button}>Confirm</button>
        </>
      )}
    </form>
  );
};

export const ProfileEditReduxForm = reduxForm({ form: "profileEdit" })(
  ProfileEditForm
);
