import React from "react";

const ListItem = (props) => {
  const finish = props.item.finish;
  return (
    <li
      className={finish ? "list-item finish" : "list-item"}
      onClick={props.toggleFinish}>{props.item.name}
    </li>
  )
}

export default ListItem;