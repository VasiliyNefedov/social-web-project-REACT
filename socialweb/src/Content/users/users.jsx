import React from "react";
import style from "./users.module.css";
import defaultPic from "./../../assets/img/defaultPic.png";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const Users = props => {
  return (
    <div className="users">
      <div className={style.pages}>
        {props.pages.map(el => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(el);
              }}
              className={
                props.currentPage === el ? `${style.selectedPage}` : ""
              }
            >
              {`  ${el}  `}
            </span>
          );
        })}
      </div>
      {props.userList.map(el => (
        <div key={el.id} className={style.userItem}>
          <div>
            <div>
              <NavLink to={"/profile/" + el.id}>
                <img
                  src={el.photos.small != null ? el.photos.small : defaultPic}
                  alt=" :^( "
                  className={style.pic}
                />
              </NavLink>
            </div>
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    Axios.delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "8db38b56-3a25-4b9f-9cb9-37de5d004d04"
                        }
                      }
                    ).then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(el.id);
                      }
                    });
                  }}
                  className={`${style.button} ${style.button_unfollow}`}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    Axios.post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                      null,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "8db38b56-3a25-4b9f-9cb9-37de5d004d04"
                        }
                      }
                    ).then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(el.id);
                      }
                    });
                  }}
                  className={`${style.button} ${style.button_follow}`}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={style.userInfo}>
            <div className={style.userName}>{el.name}</div>
            <div className={style.userStatus}>{el.status}</div>
            <div className={style.userLocation}>
              <div>{"el.location.country"}</div>
              <div>{"el.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
