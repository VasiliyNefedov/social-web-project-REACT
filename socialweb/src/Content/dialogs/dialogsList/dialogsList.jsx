import React from "react";
import c from "./dialogList.module.css";
import { NavLink } from "react-router-dom";

let dialogsListItems = [
  { name: "Chandler", id: 1 },
  { name: "Ross", id: 2 },
  { name: "Joe", id: 3 },
  { name: "Monica", id: 4 },
  { name: "Raychel", id: 5 },
  { name: "Phoebe", id: 6 }
];

let dialogsListItemsArray = dialogsListItems.map(el => {
  return (
    <NavLink to={`/dialogs/${el.id}`}>
      <div className={c.item}>{el.name}</div>
    </NavLink>
  );
});

function DialogsList() {
  return <div className={c.dialogsList}>{dialogsListItemsArray}</div>;
}

export default DialogsList;
