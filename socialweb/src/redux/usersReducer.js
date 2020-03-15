import { userAPI } from "./../API/API";
import { updateArray } from './../utils/validators/objectHelpers';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_FOLLOWING_IN_PROGRESS = "TOOGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  userList: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (stateReducer = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...stateReducer,
        userList: updateArray(stateReducer.userList, action.userId, 'id', {followed: true})
      };

    case UNFOLLOW:
      return {
        ...stateReducer,
        userList: updateArray(stateReducer.userList, action.userId, 'id', {followed: false})
      };
    case SET_USERS:
      return {
        ...stateReducer,
        userList: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...stateReducer,
        currentPage: action.page
      };
    case SET_TOTAL_COUNT:
      return {
        ...stateReducer,
        totalCount: action.count
      };
    case TOOGLE_IS_FETCHING:
      return {
        ...stateReducer,
        isFetching: action.isFetching
      };
    case TOOGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...stateReducer,
        followingInProgress: action.followingInProgress
          ? [...stateReducer.followingInProgress, action.userId]
          : stateReducer.followingInProgress.filter(id => id !== action.userId)
      };
    default:
      return stateReducer;
  }
};

//ACTION CREATORs:

export const followSuccess = userId => ({
  type: FOLLOW,
  userId: userId
});
export const unfollowSuccess = userId => ({
  type: UNFOLLOW,
  userId: userId
});
export const setUsers = users => ({
  type: SET_USERS,
  users: users
});
export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page: page
});
export const setTotalCount = count => ({
  type: SET_TOTAL_COUNT,
  count: count
});
export const setToogleIsFetching = isFetching => ({
  type: TOOGLE_IS_FETCHING,
  isFetching: isFetching
});
export const setToogleFollowingInProgress = (followingInProgress, userId) => ({
  type: TOOGLE_FOLLOWING_IN_PROGRESS,
  followingInProgress: followingInProgress,
  userId: userId
});

// THUNK CREATORs:

export const getUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(setToogleIsFetching(true));
  let response = await userAPI.getUsers(currentPage, pageSize);
  dispatch(setToogleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalCount(response.totalCount));
  dispatch(setCurrentPage(currentPage));
};

const followUnFollow = async (dispatch, userId, setFollowUnFollow, FollowUnFollowSuccess) => {
  dispatch(setToogleFollowingInProgress(true, userId));
  let response = await setFollowUnFollow(userId);
  if (response.resultCode === 0) {
    dispatch(FollowUnFollowSuccess(userId));
  }
  dispatch(setToogleFollowingInProgress(false, userId));
}

export const unfollow = userId => dispatch => {
  followUnFollow(dispatch, userId, userAPI.setUnfollow.bind(userAPI), unfollowSuccess)
};

export const follow = userId => dispatch => {
  followUnFollow(dispatch, userId, userAPI.setFollow.bind(userAPI), followSuccess)
};

export default usersReducer;
