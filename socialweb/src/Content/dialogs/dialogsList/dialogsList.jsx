import React from "react";
import c from "./dialogsList.module.css";
import { NavLink } from "react-router-dom";

function DialogsList(props) {
  let dialogsListItemsArray = props.dialogsListItems.map(el => {
    return (
      <NavLink to={`/dialogs/${el.id}`}>
        <div className={c.item}>{el.name}</div>
      </NavLink>
    );
  });

  return <div className={c.dialogsList}>{dialogsListItemsArray}</div>;
}

export default DialogsList;
