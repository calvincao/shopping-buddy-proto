import React from "react";

const ListItem = (props) => {
  function removeItem(e){
    const targetID = e.target.parentElement.id;
    props.listRemove(targetID);
  }
  function toggleItem(e){
    const targetID = e.target.parentElement.id;
    props.toggleDone(targetID);
  }
  return (
    <li className={props.done ? "list-item finish" : "list-item"} id={props.ID}>
      <button className="remove" onClick={removeItem}>X</button>
      <span onClick={toggleItem}>{props.name}</span>
    </li>
  )
}

export default ListItem;