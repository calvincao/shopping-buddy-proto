const controller = {};
const fetch = require('node-fetch');

const API_KEY = 'af34b8f8493345699182ed7326d6d242';
const NUM_RECIPES = 10;

controller.getRecipes = async (req, res, next) => {
  let queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&number=${NUM_RECIPES}&ingredients=${req.body.join(',')}`;
  console.log('fetching recipes from Spoonacular using request:\n', queryURL)
  try {
    fetch(queryURL)
      .then(res => res.json())
      .then(data => {
        res.locals.recipes = data;
        next();
      })
  }
  catch (err) {
    console.log(err)
    return next({
      log: 'Express error handler caught in controller.getRecipes middleware',
      status: 500,
      message: { err: 'Express error handler caught in controller.getRecipes middleware' },
    })
  }

}

module.exports = controller;