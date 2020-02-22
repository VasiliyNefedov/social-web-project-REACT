import React from "react";
import style from "./profileBlog.module.css";
import pic from "./../../../img/avatar.jpg";

function ProfileBlog(props) {
  let profileBlogItemsArray = props.profileBlogItems
    .map(el => {
      return (
        <div className={style.profileBlogPost}>
          <img src={pic} alt="avatar" className={style.pic}></img>
          {el.message}
          <div>
            <span>like: {el.likesCount}</span>
          </div>
        </div>
      );
    })
    .reverse();

  let newPostText = React.createRef();

  let AddProfileBlogPost = () => {
    alert(newPostText.current.value);
    newPostText.current.value = "";
  };

  return (
    <div className="profileBlog">
      <div>
        <textarea
          ref={newPostText}
          className={style.textarea}
          placeholder="Write your post here..."
        ></textarea>
        <button onClick={AddProfileBlogPost} className={style.button}>
          Send post
        </button>
      </div>
      {profileBlogItemsArray}
    </div>
  );
}

export default ProfileBlog;
