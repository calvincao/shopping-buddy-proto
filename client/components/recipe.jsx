import React, { Component } from "react";

const Recipe = props => {
  const list = [];
  for (const recipe of props.recipeList) {
    const missingIngredients = recipe.missedIngredients.map(ingredient => ingredient.name);
    const usedIngredients = recipe.usedIngredients.map(ingredient => ingredient.name);
    list.push(
      <div className="card">
        <div className="recipe-title">{recipe.title}</div>
        <img src={recipe.image} />
        <div className="missing-ingredients"><b>Missing Ingredients: </b>{missingIngredients.join(', ')}</div>
        <div className="used-ingredients"><b>Used Ingredients: </b>{usedIngredients.join(', ')}</div>
      </div>
    )
  }
  return (
    <div>
      <button type="button" onClick={props.fetchRecipes}>Get Recipes!</button>
      <div className="card-container">
        {list}
      </div>
    </div>
  )
}


export default Recipe;