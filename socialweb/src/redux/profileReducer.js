const SET_PROFILE_BLOG_ITEMS = "SET-PROFILE-BLOG-ITEMS";
const UPDATE_CURRENT_POST_TEXT = "UPDATE-CURRENT-POST-TEXT";

let initialState = {
  profileBlogItems: [
    { id: 1, message: "Hi all!", likesCount: 8 },
    { id: 2, message: "Glad to see you!", likesCount: 4 }
  ],
  currentPostText: ""
};

const profileReducer = (stateReducer = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_BLOG_ITEMS: {
      let newPost = {
        id: 5,
        message: stateReducer.currentPostText,
        likesCount: 0
      };
      let stateCopy = {
        ...stateReducer,
        profileBlogItems: [...stateReducer.profileBlogItems]
      };
      if (stateReducer.currentPostText !== "") {
        stateCopy.profileBlogItems.push(newPost);
      } else {
        return stateReducer;
      }
      stateCopy.currentPostText = "";
      return stateCopy;
    }
    case UPDATE_CURRENT_POST_TEXT: {
      let stateCopy = { ...stateReducer };
      stateCopy.currentPostText = action.currentText;
      return stateCopy;
    }
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
