import { userAPI } from "./../API/API";

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
        userList: stateReducer.userList.map(el => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        })
      };

    case UNFOLLOW:
      return {
        ...stateReducer,
        userList: stateReducer.userList.map(el => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        })
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

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setToogleIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setToogleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

export const unfollow = userId => {
  return dispatch => {
    dispatch(setToogleFollowingInProgress(true, userId));
    userAPI.setUnfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setToogleFollowingInProgress(false, userId));
    });
  };
};

export const follow = userId => {
  return dispatch => {
    dispatch(setToogleFollowingInProgress(true, userId));
    userAPI.setFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setToogleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
