import React from "react";
import c from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return <div className="sidebar">
    <NavLink to='/profile' className={c.link}><div className={c.sidebar_item}><div>Profile</div></div></NavLink>
    <NavLink to='/dialogs' className={c.link}><div className={c.sidebar_item}><div>Dialogs</div></div></NavLink>
    <NavLink to='/music' className={c.link}><div className={c.sidebar_item}><div>Music</div></div></NavLink>
    <NavLink to='/feed' className={c.link}><div className={c.sidebar_item}><div>Feed</div></div></NavLink>
  </div>;
}

export default Sidebar;
