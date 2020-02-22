import React from "react";
import c from "./profileBlog.module.css";
import pic from "../../../img/avatar.jpg";

let profileBlogItem = [
  { id: 1, message: "Hi all!", likesCount: 8 },
  { id: 2, message: "Glad to see you!", likesCount: 4 }
];

let profileBlogItemArray = profileBlogItem
  .map(el => {
    return (
      <div className={c.profileBlogPost}>
        <img src={pic} alt="avatar" className={c.pic}></img>
        {el.message}
        <div>
          <span>like: {el.likesCount}</span>
        </div>
      </div>
    );
  })
  .reverse();

function ProfileBlog() {
  return (
    <div className="profileBlog">
      <div>
        <textarea
          className={c.textarea}
          placeholder="Write your post here..."
        ></textarea>
        <button>Send post</button>
      </div>
      {profileBlogItemArray}
    </div>
  );
}

export default ProfileBlog;
