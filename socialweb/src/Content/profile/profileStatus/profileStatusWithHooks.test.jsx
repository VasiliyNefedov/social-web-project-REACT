import React, { useEffect } from "react";
import style from "./profileStatus.module.css";
import { StatusReduxForm } from "./statusForm";
import { useState } from "react";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  const deactivateEditModeOnBlur = () => {
    !isFetching && setEditMode(false);
  };
  return (
    <div className="profileStatus">
      {editMode ? (
        <StatusReduxForm
          onSubmit={formData => {
            setIsFetching(true);
            return props.updateUserStatus(formData.statusText).then(() => {
              setIsFetching(false);
              deactivateEditMode();
            });
          }}
          // onBlur={(deactivateEditMode) => void 0}
          status={props.status}
          isFetching={isFetching}
          // format={null}
          deactivateEditModeOnBlur={deactivateEditModeOnBlur}
        />
      ) : (
        <div className={style.profileStatusContainer}>
          <div
            onClick={activateEditMode}
            className={style.textarea}
            // placeholder="Write your status here..."
          >
            {props.status}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
