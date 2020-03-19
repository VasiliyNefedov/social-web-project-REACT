import { userAPI, profileAPI } from "./../API/API";
import { stopSubmit } from "redux-form";

const SET_PROFILE_BLOG_ITEMS = "SET-PROFILE-BLOG-ITEMS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const PROFILE_EDIT_TOGGLE = "PROFILE_EDIT_TOGGLE";

let initialState = {
  profileBlogItems: [
    { id: 1, message: "Hi all!", likesCount: 8 },
    { id: 2, message: "Glad to see you!", likesCount: 4 }
  ],
  currentPostText: "",
  displayProfile: null,
  status: "",
  isFetching: false,
  photos: { large: null, small: null },
  info: {
    aboutMe: null,
    contacts: {
      facebook: null,
      github: null,
      instagram: null,
      mainLink: null,
      twitter: null,
      vk: null,
      website: null,
      youtube: null
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null
  },
  isProfileEdit: false
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
    case SET_USER_PHOTO: {
      return {
        ...stateReducer,
        photos: action.photos
      };
    }
    case SET_PROFILE_INFO: {
      return {
        ...stateReducer,
        info: action.info
      };
    }
    case PROFILE_EDIT_TOGGLE: {
      return {
        ...stateReducer,
        isProfileEdit: action.isProfileEdit
      }
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
export const setUserPhoto = photos => ({
  type: SET_USER_PHOTO,
  photos: photos
});
export const setProfileInfo = info => ({
  type: SET_PROFILE_INFO,
  info: info
});
export const setProfileEditMode = isEdit => ({
  type: PROFILE_EDIT_TOGGLE,
  isProfileEdit: isEdit
})

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

export const savePhoto = file => async (dispatch, getState) => {
  const id = getState().auth.id;
  let response = await profileAPI.setUserPhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(setUserPhoto(response.data.photos));
    dispatch(getUserProfile(id));
  }
};

export const saveProfileInfo = info => async (dispatch, getState) => {
  const id = getState().auth.id;
  const response = await profileAPI.updateProfileInfo(info);
  if (response.data.resultCode === 0) {
    dispatch(setProfileInfo(response.data));
    dispatch(getUserProfile(id));
    dispatch(setProfileEditMode(false))
  } else if (response.data.resultCode === 1) {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    let action = stopSubmit("profileEdit", { _error: message });
    dispatch(action);
  }
};

export default profileReducer;
