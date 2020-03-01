const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

let initialState = {
  userList: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
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
    default:
      return stateReducer;
  }
};

export const follow = userId => ({
  type: FOLLOW,
  userId: userId
});
export const unfollow = userId => ({
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
export const setToogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching: isFetching
});

export default usersReducer;
