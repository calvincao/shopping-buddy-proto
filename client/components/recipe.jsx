import React, { Component } from "react";

const Recipe = props => {
  const list = [];
  return (
    <div>
      <button type="button" onClick={props.fetchRecipes}>Get Recipes!</button>
    </div>
  )
}


export default Recipe;