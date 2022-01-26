import React from "react";

const ListItem = (props) => {
  return (
    <li className="list-item" onClick={props.toggleFinish}>{props.item}</li>
  )
}

export default ListItem;