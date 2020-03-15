import React from "react";
import UserItem from "./userItem";

const Users = props => {
  return (
    <div className="users">
      {props.userList.map(el => (
        <UserItem
          key={el.id}
          user={el}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
