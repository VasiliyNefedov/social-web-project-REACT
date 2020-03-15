import React from "react";
import style from "./users.module.css";
import defaultPic from "./../../assets/img/defaultPic.png";
import { NavLink } from "react-router-dom";

const UserItem = props => {
  return (
    <div className={style.userItem}>
      <div>
        <div>
          <NavLink to={"/profile/" + props.user.id}>
            <img
              src={props.user.photos.small != null ? props.user.photos.small : defaultPic}
              alt=" :^( "
              className={style.pic}
            />
          </NavLink>
        </div>
        <div>
          {props.user.followed ? (
            <button
              disabled={props.followingInProgress.some(id => id === props.user.id)}
              onClick={() => {
                props.unfollow(props.user.id);
              }}
              className={`${style.button} ${style.button_unfollow}`}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some(id => id === props.user.id)}
              onClick={() => {
                props.follow(props.user.id);
              }}
              className={`${style.button} ${style.button_follow}`}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.userName}>{props.user.name}</div>
        <div className={style.userStatus}>{props.user.status}</div>
        <div className={style.userLocation}>
          <div>{"el.location.country"}</div>
          <div>{"el.location.city"}</div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
