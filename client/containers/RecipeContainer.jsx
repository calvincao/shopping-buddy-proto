import React from "react";
import RecipeCard from '../components/RecipeCard.jsx';

const Recipe = (props) => {
  function getRecipes(){
    const ingredients = props.groceryList.map(element => element.name);
    props.fetchRecipes(ingredients);
  }
  const list = [];
  let i = 0;
  for (const recipe of props.recipeList) {
    const missingIngredients = recipe.missedIngredients.map(ingredient => ingredient.name);
    const usedIngredients = recipe.usedIngredients.map(ingredient => ingredient.name);
    list.push(
      <RecipeCard
        title={recipe.title}
        src={recipe.image}
        usedIngredients={usedIngredients}
        missingIngredients={missingIngredients}
        addMissing={props.addMissing}
        key={i++}
      />
    )
  }
  return (
    <div className="recipe-container">
      <button className="btn-recipe" type="button" onClick={getRecipes}>Get Recipes!</button>
      {props.loading ? <h1>fetching recipes...</h1> : props.error ? <h1>Error occured! - {props.error}</h1> : (
        <div className="card-container">
          {list}
        </div>
      )}
    </div>
  )
}


export default Recipe;