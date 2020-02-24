const SET_PROFILE_BLOG_ITEMS = "SET-PROFILE-BLOG-ITEMS";
const UPDATE_CURRENT_POST_TEXT = "UPDATE-CURRENT-POST-TEXT";

const profileReducer = (stateReducer, action) => {
  switch (action.type) {
    case SET_PROFILE_BLOG_ITEMS:
      let newPost = {
        id: 5,
        message: stateReducer.currentPostText,
        likesCount: 0
      };
      stateReducer.profileBlogItems.push(newPost);
      stateReducer.currentPostText = "";
      return stateReducer;
    case UPDATE_CURRENT_POST_TEXT:
      stateReducer.currentPostText = action.currentText;
      return stateReducer;
    default:
      return stateReducer;
  }
};

export const SetProfileBlogItemsAC = () => ({
  type: SET_PROFILE_BLOG_ITEMS
});

export const UpdateCurrentPostTextAC = text => ({
  type: UPDATE_CURRENT_POST_TEXT,
  currentText: text
});

export default profileReducer;
