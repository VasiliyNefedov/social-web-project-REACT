import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlogContainer from "./profileBlog/profileBlogContainer";
import ProfileStatus from "./profileStatus/profileStatus";

const Profile = props => {
  return (
    <div>
      <ProfileStatus
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        isFetching={props.isFetching}
      />
      <ProfileInfo displayProfile={props.displayProfile} />
      <ProfileBlogContainer store={props.store} />
    </div>
  );
};

export default Profile;
