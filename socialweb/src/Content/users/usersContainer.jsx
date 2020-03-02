import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setToogleIsFetching,
  setToogleFollowingInProgress
} from "../../redux/usersReducer";
import Users from "./users";
import Preloader from "../../common/preloader/preloader";
import { getUsers } from "../../API/API";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToogleIsFetching(true);

    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setToogleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  }

  onPageChanged = page => {
    this.props.setToogleIsFetching(true);
    this.props.setCurrentPage(page);

    getUsers(page, this.props.pageSize).then(data => {
      this.props.setToogleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
            setToogleFollowingInProgress={this.props.setToogleFollowingInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    userList: state.users.userList,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setToogleIsFetching,
  setToogleFollowingInProgress
})(UsersContainer);
