import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfileBlogContainer from "./profileBlog/profileBlogContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo displayProfile={props.displayProfile} />
      <ProfileBlogContainer store={props.store} />
    </div>
  );
}

export default Profile;
