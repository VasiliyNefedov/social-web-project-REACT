import React from "react";
import style from "./profileStatus.module.css";
import PreloaderMini from "../../../common/preloader/preloaderMini";
import { StatusReduxForm } from "./statusForm";
import { useState } from "react";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  return (
    <div className="profileStatus">
      {editMode ? (
        <StatusReduxForm
          onSubmit={formData => props.updateUserStatus(formData.statusText)}
          // onBlur={deactivateEditMode}
          status={props.status}
        />
      ) : (
        <div className={style.profileStatusContainer}>
          <textarea
            onClick={activateEditMode}
            value={status}
            className={style.textarea}
            placeholder="Write your status here..."
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
