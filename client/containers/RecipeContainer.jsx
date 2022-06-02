import React from "react";
import RecipeCard from '../components/RecipeCard.jsx';

const Recipe = (props) => {
  const list = [];
  for (const recipe of props.recipeList) {
    const missingIngredients = recipe.missedIngredients.map(ingredient => ingredient.name);
    const usedIngredients = recipe.usedIngredients.map(ingredient => ingredient.name);
    list.push(
      <RecipeCard
        title={recipe.title}
        src={recipe.image}
        usedIngredients={usedIngredients}
        missingIngredients={missingIngredients}
        addMissing={addMissing}
      />
    )
  }
  return (
    <div className="recipe-container">
      <button className="btn-recipe" type="button" onClick={props.fetchRecipes}>Get Recipes!</button>
      <div className="card-container">
        {list}
      </div>
    </div>
  )
}


export default Recipe;