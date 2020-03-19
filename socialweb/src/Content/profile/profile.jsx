import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlogContainer from "./profileBlog/profileBlogContainer";
// import ProfileStatus from "./profileStatus/profileStatus";
import ProfileStatusWithHooks from "./profileStatus/profileStatusWithHooks";

const Profile = props => {
  return (
    <div>
      <ProfileStatusWithHooks
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        isFetching={props.isFetching}
      />
      <ProfileInfo
        isProfileEdit={props.isProfileEdit}
        setProfileEditMode={props.setProfileEditMode}
        saveProfileInfo={props.saveProfileInfo}
        isOwner={props.isOwner}
        displayProfile={props.displayProfile}
        savePhoto={props.savePhoto}
      />
      <ProfileBlogContainer store={props.store} />
    </div>
  );
};

export default Profile;
