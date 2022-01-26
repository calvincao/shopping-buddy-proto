import React, { Component } from 'react';
import Title from './title.jsx';
import Input from './input.jsx';
import List from './list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `Shopping List (${new Date().toLocaleDateString('en-US')})`,
      groceryList: ['tomatos', 'zuchini', 'cabbage', 'bread']
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleFinish = this.toggleFinish.bind(this);
  }
  toggleFinish(e) {
    console.log('hi')
  }
  handleAdd(e) {
    const userInput = e.target.form[0].value;
    const updatedGroceryList = [...this.state.groceryList, userInput];
    e.preventDefault();
    this.setState({
      ...this.state,
      groceryList: updatedGroceryList
    })
  }

  render() {
    return (
      <div>
        <Title title={this.state.title}></Title>
        <Input handleAdd={this.handleAdd}></Input>
        <List groceryList={this.state.groceryList} toggleFinish={this.state.toggleFinish}></List>
      </div>
    );
  }
}

export default App;