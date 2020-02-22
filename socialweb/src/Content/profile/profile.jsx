import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlog from "./profileBlog/profileBlog";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <ProfileBlog profileBlogItems={props.profileBlogItems} />
    </div>
  );
}

export default Profile;
