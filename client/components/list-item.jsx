import React from "react";

const ListItem = (props) => {
  const finish = props.item.finish;
  return (
    <li className={finish ? "list-item finish" : "list-item"} onClick={props.toggleFinish}>
      <span className="remove" onClick={props.handleRemove}>X </span><span>{props.item.name}</span>
    </li>
  )
}

export default ListItem;