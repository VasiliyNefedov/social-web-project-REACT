import { createSelector } from "reselect";

const getUserList = state => {
  return state.users.userList;
};

export const getUserListSelector = createSelector(getUserList,(users) => {
  return users.filter(u => true);
});

export const getPageSize = state => {
  return state.users.pageSize;
};

export const getTotalCount = state => {
  return state.users.totalCount;
};

export const getCurrentPage = state => {
  return state.users.currentPage;
};

export const getIsFetching = state => {
  return state.users.isFetching;
};

export const getFollowingInProgress = state => {
  return state.users.followingInProgress;
};
