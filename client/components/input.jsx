import React from "react";

const Input = (props) => {
  return (
    <form>
      <input type="text" name="newItem" placeholder="Grocery Item" className="text" />
      <button onClick={props.handleAdd}>Add</button>
    </form>

  )
}

export default Input;