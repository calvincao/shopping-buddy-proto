import React, { Component } from 'react';
import Title from './title.jsx';
import Input from './input.jsx';
import List from './list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `Shopping List (${new Date().toLocaleDateString('en-US')})`,
      groceryList: [
        { name: 'tomatos', finish: true },
        { name: 'zuchini', finish: false },
        { name: 'cabbage', finish: false }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleFinish = this.toggleFinish.bind(this);
  }
  toggleFinish(e) {
    const food = e.target.innerText;
    const updatedGroceryList = [];
    for (const item of this.state.groceryList) {
      if (item.name == food) {
        updatedGroceryList.push({ name: item.name, finish: !item.finish })
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
    const userInput = e.target.form[0].value;
    e.preventDefault();
    if (userInput) {
      const updatedGroceryList = [...this.state.groceryList, { name: userInput, finish: false }];
      this.setState({
        ...this.state,
        groceryList: updatedGroceryList
      })
    }
  }

  render() {
    return (
      <div>
        <Title title={this.state.title}></Title>
        <Input handleAdd={this.handleAdd}></Input>
        <List groceryList={this.state.groceryList} toggleFinish={this.toggleFinish}></List>
      </div>
    );
  }
}

export default App;