import React, { Component } from 'react';
import Title from './title.jsx';
import Input from './input.jsx';
import List from './list.jsx';
import Recipe from './recipe.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Shopping List',
      groceryList: [
        { name: 'ground beef', finish: false },
        { name: 'cabbage', finish: false },
        { name: 'flour', finish: false }
      ],
      recipeList: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleFinish = this.toggleFinish.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
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
        <div className="groceryList">
          <Title title={this.state.title}></Title>
          <Input handleAdd={this.handleAdd}></Input>
          <List groceryList={this.state.groceryList} toggleFinish={this.toggleFinish}></List>
        </div>
        <Recipe recipeList={this.state.recipeList} fetchRecipes={this.fetchRecipes}></Recipe>
      </div>
    );
  }
}

export default App;