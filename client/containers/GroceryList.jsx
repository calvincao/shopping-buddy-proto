import React from 'react';
import Title from '../components/Title.jsx';
import Input from '../components/Input.jsx';
import List from '../components/List.jsx';
import { listAdd } from '../actions/actions.js';

function GroceryList(props){
  return(
    <div className="groceryList">
      <Title title={'hello'}/>
      <Input listAdd={props.listAdd}/>
      <List
        groceryList={props.groceryList}
        toggleDone={props.toggleDone}
        listRemove={props.listRemove}
      />
    </div>
  )
}

export default GroceryList;