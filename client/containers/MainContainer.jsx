import React from 'react';
import { connect } from 'react-redux';
import GroceryList from '../containers/GroceryList.jsx'
import RecipeContainer from './RecipeContainer.jsx';
import Navbar from '../components/Navbar.jsx';
import * as actions from '../actions/actions'

const mapStateToProps = state => ({
  groceryList: state.list.grocery,
  recipeList: state.list.recipe,
  name: state.list.title
})

const mapDispatchToProps = dispatch => ({
  listAdd: (ingredient) => dispatch(actions.listAdd(ingredient)),
  listRemove: (ID) => dispatch(actions.listRemove(ID)),
  toggleDone: (ID) => dispatch(actions.toggleDone(ID)),
  addMissing: (ingredients) => dispatch(actions.addMissing(ingredients))
})

function MainContainer(props) {
  return (
    <div>
      <Navbar/>
      <GroceryList
        groceryList={props.groceryList}
        name={props.name}
        listAdd={props.listAdd}
        listRemove={props.listRemove}
        toggleDone={props.toggleDone}
      />
      <RecipeContainer
        recipeList={props.recipeList}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);