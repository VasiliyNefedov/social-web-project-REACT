import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"login"}>Login</NavLink>}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
