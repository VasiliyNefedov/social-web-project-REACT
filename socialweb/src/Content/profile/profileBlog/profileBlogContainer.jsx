import React from "react";
import {
  SetProfileBlogItemsAC,
  UpdateCurrentPostTextAC
} from "../../../redux/profileReducer";
import ProfileBlog from "./profileBlog";
import StoreContext from "../../../StoreContext";

const ProfileBlogContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let AddProfileBlogPost = () => {
          store.dispatch(SetProfileBlogItemsAC());
        };

        let onPostChange = text => {
          store.dispatch(UpdateCurrentPostTextAC(text));
        };
        return (
          <ProfileBlog
            UpdateCurrentPostTextAC={onPostChange}
            SetProfileBlogItemsAC={AddProfileBlogPost}
            profileBlogItems={store.getState().profile.profileBlogItems}
            currentPostText={store.getState().profile.currentPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ProfileBlogContainer;
