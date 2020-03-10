import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalCount,
  getUsers
} from "../../redux/usersReducer";
import Users from "./users";
import Preloader from "../../common/preloader/preloader";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import {
  getUserListSelector,
  getPageSize,
  getTotalCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "./../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = page => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    if (
      this.props.currentPage < 4 ||
      this.props.currentPage > pages.length - 4
    ) {
      pages.splice(3, pages.length - 6, "...");
    }

    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            pages={pages}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            userList={this.props.userList}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            setToogleFollowingInProgress={
              this.props.setToogleFollowingInProgress
            }
          />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    userList: getUserListSelector(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalCount,
    getUsers
  })
  // withAuthRedirect
)(UsersContainer);
