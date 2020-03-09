import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import PreloaderMini from "../common/preloader/preloaderMini";

const Header = props => {
  return (
    <div className="header">
      <div className={style.loginBlock}>
        {props.isAuth ? (
          !props.isFetching ? (
            <div>
              <div>{props.login}</div>
              <button onClick={props.logout}>Logout</button>
            </div>
          ) : (
            <PreloaderMini />
          )
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
