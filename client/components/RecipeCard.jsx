import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <h1 className="recipe-title">{props.title}</h1>
      <img src={props.src} />
      <div className="used-ingredients"><b>Used Ingredients: </b><span>{props.usedIngredients.join(', ')}</span></div>
      <div className="missing-ingredients"><b>Missing Ingredients: </b><span>{props.missingIngredients.join(', ')}</span></div>
      <button type="button" className="btn-ingredients" onClick={props.addMissing}>Add Missing Ingredients</button>
    </div>
  )
};

export default RecipeCard;