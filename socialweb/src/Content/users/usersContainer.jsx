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
// import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import {
  getUserList,
  getPageSize,
  getTotalCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "./../../redux/usersSelectors";
import Paginator from "../../common/paginator/paginator";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = page => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <>
            <Paginator
              onPageChanged={this.onPageChanged}
              currentPage={this.props.currentPage}
              totalCount={this.props.totalCount}
              pageSize={this.props.pageSize}
            />
            <Users
              userList={this.props.userList}
              unfollow={this.props.unfollow}
              follow={this.props.follow}
              isFetching={this.props.isFetching}
              followingInProgress={this.props.followingInProgress}
              setToogleFollowingInProgress={
                this.props.setToogleFollowingInProgress
              }
            />
            <Paginator
              onPageChanged={this.onPageChanged}
              currentPage={this.props.currentPage}
              totalCount={this.props.totalCount}
              pageSize={this.props.pageSize}
            />
          </>
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    userList: getUserList(state),
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
