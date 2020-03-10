import React from "react";
import style from "./profileStatus.module.css";
import PreloaderMini from "../../../common/preloader/preloaderMini";
import { StatusReduxForm } from "./statusForm";
import { useState } from "react";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let [isFetching, setIsFetching] = useState(false);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  const deactivateEditModeOnBlur = () => {
    !isFetching && setEditMode(false)
  }
  return (
    <div className="profileStatus">
      {editMode ? (
        <StatusReduxForm
          onSubmit={formData => {
            setIsFetching(true);
            return props
              .updateUserStatus(formData.statusText)
              .then(() => {setIsFetching(false); deactivateEditMode()});
          }}
          // onBlur={(deactivateEditMode) => void 0}
          status={props.status}
          isFetching={isFetching}
          // format={null}
          deactivateEditMode={deactivateEditMode}
        />
      ) : (
        <div className={style.profileStatusContainer}>
          <div
            onClick={activateEditMode}
            className={style.textarea}
            // placeholder="Write your status here..."
          >
            {props.status ? props.status : "Write your status here..."}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
