import React from 'react';
import { connect } from 'react-redux';
import GroceryList from '../containers/GroceryList.jsx'
import RecipeContainer from './RecipeContainer.jsx';
import Navbar from '../components/Navbar.jsx';
import * as groceryActions from '../actions/groceryActions'
import * as recipeActions from '../actions/recipeActions'

const mapStateToProps = state => ({
  groceryList: state.grocery.list,
  recipeList: state.recipe.list,
  name: state.grocery.title,
  loading: state.recipe.loading,
  error: state.recipe.error
})

const mapDispatchToProps = dispatch => ({
  listAdd: (ingredient) => dispatch(groceryActions.listAdd(ingredient)),
  listRemove: (ID) => dispatch(groceryActions.listRemove(ID)),
  toggleDone: (ID) => dispatch(groceryActions.toggleDone(ID)),
  addMissing: (ingredients) => dispatch(groceryActions.addMissing(ingredients)),
  fetchRecipes: (ingredients) => dispatch(recipeActions.fetchRecipes(ingredients)),
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
        groceryList={props.groceryList}
        fetchRecipes={props.fetchRecipes}
        loading={props.loading}
        error={props.error}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);