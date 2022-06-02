import React from "react";

const Input = (props) => {
  function addItem(){
    let input = document.querySelector('.text-input').value;
    if (!input.length) return;
    props.listAdd(input);
    document.querySelector('.text-input').value = null;
  }
  return (
    <form>
      <input
        type="text"
        name="newItem"
        placeholder="Grocery item"
        className="text-input"
        onKeyDown={(e) => {
          if (e.key === 'Enter'){
            e.preventDefault();
            addItem();
          }
        }}
      />
      <button type="button" className="btn-add" onClick={addItem}>+</button>
    </form>
  )
}

export default Input;