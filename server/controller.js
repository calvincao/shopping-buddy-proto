const controller = {};
const fetch = require('node-fetch');
require('dotenv').config();

const API_KEY = process.env.SPOONACULAR_API_KEY;
const NUM_RECIPES = 10;

controller.getRecipes = async (req, res, next) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1500);
  const ingredients = req.body.ingredients.join(',');
  let queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&number=${NUM_RECIPES}&ingredients=${ingredients}`;
  console.log('fetching recipes from Spoonacular using request:\n', queryURL);
  try {
    fetch(queryURL)
      .then((res) => res.json())
      .then((data) => {
        res.locals.recipes = data;
        next();
      });
  } catch (err) {
    console.log(err);
    return next({
      log: 'Express error handler caught in controller.getRecipes middleware',
      status: 500,
      message: { err: 'Express error handler caught in controller.getRecipes middleware' },
    });
  }
};

module.exports = controller;
