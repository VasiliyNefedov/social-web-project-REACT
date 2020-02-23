import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlog from "./profileBlog/profileBlog";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <ProfileBlog
        profile={props.profile}
        SetProfileBlogItems={props.SetProfileBlogItems}
        UpdateCurrentPostText={props.UpdateCurrentPostText}
      />
    </div>
  );
}

export default Profile;
