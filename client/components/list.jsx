import React from "react";
import ListItem from './list-item.jsx'

const List = (props) => {
  const list = [];
  for (const item of props.groceryList) {
    list.push(<ListItem
      item={item}
      toggleFinish={props.toggleFinish}
      handleRemove={props.handleRemove}>
    </ListItem>)
  }
  return (
    <ul>
      {list}
    </ul>
  )
}

export default List;