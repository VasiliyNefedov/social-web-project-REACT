import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlog from "./profileBlog/profileBlog";

function Profile() {
  return <div className="profile">
      <ProfileInfo />
      <ProfileBlog />
  
  </div>;
}

export default Profile;
