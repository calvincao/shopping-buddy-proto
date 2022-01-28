import React, { Component } from 'react';
import Title from './title.jsx';
import Input from './input.jsx';
import List from './list.jsx';
import Recipe from './recipe.jsx';
import Navbar from './navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Shopping Buddy',
      groceryList: [
        { name: 'ground beef', finish: false },
        { name: 'cabbage', finish: false },
        { name: 'flour', finish: false }
      ],
      recipeList: [
        {
          "id": 73420,
          "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
          "imageType": "jpg",
          "likes": 0,
          "missedIngredientCount": 3,
          "missedIngredients": [
            {
              "aisle": "Baking",
              "amount": 1.0,
              "id": 18371,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
              "meta": [],
              "name": "baking powder",
              "original": "1 tsp baking powder",
              "originalName": "baking powder",
              "unit": "tsp",
              "unitLong": "teaspoon",
              "unitShort": "tsp"
            },
            {
              "aisle": "Spices and Seasonings",
              "amount": 1.0,
              "id": 2010,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
              "meta": [],
              "name": "cinnamon",
              "original": "1 tsp cinnamon",
              "originalName": "cinnamon",
              "unit": "tsp",
              "unitLong": "teaspoon",
              "unitShort": "tsp"
            },
            {
              "aisle": "Milk, Eggs, Other Dairy",
              "amount": 1.0,
              "id": 1123,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
              "meta": [],
              "name": "egg",
              "original": "1 egg",
              "originalName": "egg",
              "unit": "",
              "unitLong": "",
              "unitShort": ""
            }
          ],
          "title": "Apple Or Peach Strudel",
          "unusedIngredients": [],
          "usedIngredientCount": 1,
          "usedIngredients": [
            {
              "aisle": "Produce",
              "amount": 6.0,
              "id": 9003,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
              "meta": [],
              "name": "apples",
              "original": "6 large baking apples",
              "originalName": "baking apples",
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large"
            }
          ]
        },
        {
          "id": 632660,
          "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
          "imageType": "jpg",
          "likes": 3,
          "missedIngredientCount": 4,
          "missedIngredients": [
            {
              "aisle": "Milk, Eggs, Other Dairy",
              "amount": 1.5,
              "extendedName": "unsalted butter",
              "id": 1001,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
              "meta": [
                "unsalted",
                "cold"
              ],
              "name": "butter",
              "original": "1 1/2 sticks cold unsalted butter cold unsalted butter<",
              "originalName": "cold unsalted butter cold unsalted butter<",
              "unit": "sticks",
              "unitLong": "sticks",
              "unitShort": "sticks"
            },
            {
              "aisle": "Produce",
              "amount": 4.0,
              "id": 1079003,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png",
              "meta": [
                "red",
                " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices "
              ],
              "name": "red apples",
              "original": "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
              "originalName": "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
              "unit": "large",
              "unitLong": "larges",
              "unitShort": "large"
            },
            {
              "aisle": "Spices and Seasonings",
              "amount": 2.0,
              "id": 2010,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
              "meta": [],
              "name": "cinnamon",
              "original": "2 teaspoons cinnamon",
              "originalName": "cinnamon",
              "unit": "teaspoons",
              "unitLong": "teaspoons",
              "unitShort": "tsp"
            },
            {
              "aisle": "Nut butters, Jams, and Honey",
              "amount": 2.0,
              "id": 19719,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
              "meta": [
                "melted"
              ],
              "name": "apricot preserves",
              "original": "2 tablespoons apricot preserves, melted and strained",
              "originalName": "apricot preserves, melted and strained",
              "unit": "tablespoons",
              "unitLong": "tablespoons",
              "unitShort": "Tbsp"
            }
          ],
          "title": "Apricot Glazed Apple Tart",
          "unusedIngredients": [
            {
              "aisle": "Produce",
              "amount": 1.0,
              "id": 9003,
              "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
              "meta": [],
              "name": "apples",
              "original": "apples",
              "originalName": "apples",
              "unit": "serving",
              "unitLong": "serving",
              "unitShort": "serving"
            }
          ],
          "usedIngredientCount": 0,
          "usedIngredients": []
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleFinish = this.toggleFinish.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.addMissing = this.addMissing.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(e) {
    const target = e.target.parentElement.children[1].innerText;
    const updatedGroceryList = [];
    for (const ingredient of this.state.groceryList) {
      if (ingredient.name !== target) updatedGroceryList.push(ingredient)
    };
    console.log(updatedGroceryList)
    this.setState({
      ...this.state,
      groceryList: updatedGroceryList
    })
  }

  addMissing(e) {
    e.preventDefault();
    const ingredients = e.target.parentElement.children[3].children[1].innerText.split(', ');
    const updatedGroceryList = ingredients.map(ingredient => {
      return {
        name: ingredient,
        finish: false
      }
    });
    this.setState({
      ...this.state,
      groceryList: this.state.groceryList.concat(updatedGroceryList)
    })
  }

  fetchRecipes(e) {
    e.preventDefault();
    const ingredients = this.state.groceryList.map(element => element.name)
    fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ingredients)
    }).then(res => {
      return res.json()
    }).then(data => {
      const newRecipeList = [...data.recipes];
      this.setState({
        ...this.state,
        recipeList: newRecipeList
      })
      console.log(this.state);
    })
      .catch(e => {
        console.log('error fetching recipes')
      })
  }

  toggleFinish(e) {
    const food = e.target.innerText;
    const updatedGroceryList = [];
    for (const item of this.state.groceryList) {
      if (item.name === food) {
        updatedGroceryList.push({ name: item.name, finish: !item.finish });
      }
      else {
        updatedGroceryList.push(item)
      }
    }
    this.setState({
      ...this.state,
      groceryList: updatedGroceryList
    })
  }

  handleAdd(e) {
    e.preventDefault();
    const userInput = e.target.form[0].value;
    if (userInput) {
      const updatedGroceryList = [...this.state.groceryList, { name: userInput, finish: false }];
      this.setState({
        ...this.state,
        groceryList: updatedGroceryList
      })
    }
    e.target.form[0].value = '';
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="groceryList">
          <Title title={this.state.title}></Title>
          <Input handleAdd={this.handleAdd}></Input>
          <List
            groceryList={this.state.groceryList}
            toggleFinish={this.toggleFinish}
            handleRemove={this.handleRemove}>
          </List>
        </div>
        <Recipe
          recipeList={this.state.recipeList}
          fetchRecipes={this.fetchRecipes}
          addMissing={this.addMissing}>
        </Recipe>
      </div>
    );
  }
}

export default App;