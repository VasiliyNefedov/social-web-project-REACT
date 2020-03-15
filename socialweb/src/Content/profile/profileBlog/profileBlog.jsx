import React from "react";
import pic from "./../../../assets/img/avatar.jpg";
import style from "./profileBlog.module.css";
import { Field, reduxForm } from "redux-form";

class ProfileBlog extends React.Component {
  onSubmit = formData => {
    return this.props.SetProfileBlogItemsAC(formData.postText);
  };
  render() {
    console.log('render profileBlog')
    let profileBlogItemsArray = [...this.props.profileBlogItems]
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
    return (
      <div className="profileBlog">
        <BlogMessageReduxForm onSubmit={this.onSubmit} />
        {profileBlogItemsArray}
      </div>
    );
  }
}

const BlogMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"postText"}
        component={"textarea"}
        className={style.textarea}
        placeholder={"Write your post here..."}
      />
      <button className={style.button}>Send post</button>
    </form>
  );
};

const BlogMessageReduxForm = reduxForm({
  form: "blogPostText"
})(BlogMessageForm);

export default ProfileBlog;
