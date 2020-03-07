import { userAPI, profileAPI } from "./../API/API";

const SET_PROFILE_BLOG_ITEMS = "SET-PROFILE-BLOG-ITEMS";
const UPDATE_CURRENT_POST_TEXT = "UPDATE-CURRENT-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_STATUS_IS_FETCHING = "TOOGLE_STATUS_IS_FETCHING";

let initialState = {
  profileBlogItems: [
    { id: 1, message: "Hi all!", likesCount: 8 },
    { id: 2, message: "Glad to see you!", likesCount: 4 }
  ],
  currentPostText: "",
  displayProfile: null,
  status: "",
  isFetching: false
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
    case SET_USER_PROFILE: {
      return { ...stateReducer, displayProfile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...stateReducer, status: action.statusText };
    }
    case TOOGLE_IS_FETCHING: {
      return { ...stateReducer, isFetching: action.isFetching };
    }
    default:
      return stateReducer;
  }
};

//ACTION CREATORs:

export const SetProfileBlogItemsAC = () => ({
  type: SET_PROFILE_BLOG_ITEMS
});

export const UpdateCurrentPostTextAC = text => ({
  type: UPDATE_CURRENT_POST_TEXT,
  currentText: text
});
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile: profile
});
export const setUserStatus = statusText => ({
  type: SET_USER_STATUS,
  statusText: statusText
});
export const setToogleIsFetching = isFetching => ({
  type: TOOGLE_IS_FETCHING,
  isFetching: isFetching
});

// THUNK CREATORs:

export const getUserProfile = userId => {
  return dispatch => {
    userAPI.getUserProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = userId => {
  return dispatch => {
    profileAPI.getUserStatus(userId).then(response => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateUserStatus = statusText => {
  return dispatch => {
    dispatch(setToogleIsFetching(true));
    profileAPI.updatetUserStatus(statusText).then(response => {
      dispatch(setToogleIsFetching(false));
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(statusText));
      } else if (response.data.resultCode === 1) {
        dispatch(setUserStatus(""));
      }
    });
  };
};

export default profileReducer;
