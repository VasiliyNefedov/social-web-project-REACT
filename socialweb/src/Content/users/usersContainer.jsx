import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setToogleIsFetching
} from "../../redux/usersReducer";
import Users from "./users";
import Axios from "axios";
import Preloader from "../../common/preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToogleIsFetching(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      {
        withCredentials: true
      }
    ).then(response => {
      this.props.setToogleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
    });
  }

  onPageChanged = page => {
    this.props.setToogleIsFetching(true);
    this.props.setCurrentPage(page);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      {
        withCredentials: true
      }
    ).then(response => {
      this.props.setToogleIsFetching(false);
      this.props.setUsers(response.data.items);
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
    isFetching: state.users.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setToogleIsFetching
})(UsersContainer);
