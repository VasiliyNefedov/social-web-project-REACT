import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlogContainer from "./profileBlog/profileBlogContainer";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <ProfileBlogContainer store={props.store} />
    </div>
  );
}

export default Profile;
