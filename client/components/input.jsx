import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Input = (props) => {
  return (
    <form>
      <input type="text" name="newItem" placeholder="Grocery item" className="text-input" />
      <button type="button" className="btn-add" onClick={props.handleAdd}>+</button>
    </form>

  )
}

export default Input;