import React, { Component } from "react";

const Recipe = props => {
  const list = [];
  for (const recipe of props.recipeList) {
    const missingIngredients = recipe.missedIngredients.map(ingredient => ingredient.name);
    const usedIngredients = recipe.usedIngredients.map(ingredient => ingredient.name);
    list.push(
      <div className="card">
        <h1 className="recipe-title">{recipe.title}</h1>
        <img src={recipe.image} />
        <div className="used-ingredients"><b>Used Ingredients: </b><span>{usedIngredients.join(', ')}</span></div>
        <div className="missing-ingredients"><b>Missing Ingredients: </b><span>{missingIngredients.join(', ')}</span></div>
        <button type="button" className="btn-ingredients" onClick={props.addMissing}>Add Missing Ingredients</button>
      </div>
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