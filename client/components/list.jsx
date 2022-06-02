import React from "react";
import ListItem from './List-Item.jsx'

const List = ({groceryList, toggleDone, listRemove}) => {
  const ingredientsList = [];
  for (let i = 0; i < groceryList.length; i++){
    ingredientsList.push(
      <ListItem
        name={groceryList[i]?.name}
        done={groceryList[i]?.done}
        toggleDone={toggleDone}
        listRemove={listRemove}
        key={i}
        ID={groceryList[i]?.ID}
      />
    )
  }
  return (
    <ul>
      {ingredientsList}
    </ul>
  )
}

export default List;