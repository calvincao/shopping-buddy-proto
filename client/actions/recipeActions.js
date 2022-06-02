import * as types from './constants.js';
import axios from 'axios';

export const fetchRecipesRequest = () => ({
  type: types.FETCH_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = (users) => ({
  type: types.FETCH_RECIPES_SUCCESS,
  payload: users,
});

export const fetchRecipesFailure = (error) => ({
  type: types.FETCH_RECIPES_FAILURE,
  payload: error,
});

export const fetchRecipes = (ingredients) => {
  return (dispatch) => {
    dispatch(fetchRecipesRequest());
    axios
      .post('http://localhost:3000/recipes', {
        ingredients: ingredients,
      })
      .then((res) => {
        console.log('inside success');
        console.log(res.data.recipes);
        const recipes = res.data.recipes;
        dispatch(fetchRecipesSuccess(recipes));
      })
      .catch((err) => {
        console.log('inside error');
        console.log(err);
        const errMsg = err.message;
        dispatch(fetchRecipesFailure(errMsg));
      });
  };
};
