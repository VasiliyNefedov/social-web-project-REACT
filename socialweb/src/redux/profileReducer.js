import { userAPI, profileAPI } from "./../API/API";

const SET_PROFILE_BLOG_ITEMS = "SET-PROFILE-BLOG-ITEMS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

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
      if (!action.text) return stateReducer;
      let newPost = {
        id: 5,
        message: action.text,
        likesCount: 0
      };
      let stateCopy = {
        ...stateReducer,
        profileBlogItems: [...stateReducer.profileBlogItems]
      };
      stateCopy.profileBlogItems.push(newPost);
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

export const SetProfileBlogItemsAC = text => ({
  type: SET_PROFILE_BLOG_ITEMS,
  text: text
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

export const getUserProfile = userId => async dispatch => {
  let response = await userAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = userId => async dispatch => {
  let response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = statusText => async dispatch => {
  dispatch(setToogleIsFetching(true));
  let response = await profileAPI.updatetUserStatus(statusText);
  dispatch(setToogleIsFetching(false));
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(statusText));
  } else if (response.data.resultCode === 1) {
    dispatch(setUserStatus(""));
  }
};

export default profileReducer;
