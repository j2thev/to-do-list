import React, { Component } from 'react';
import './App.css';
import TodoList from './ToDoList';
import TodoItems from './ToDoItems';
import CompletedItems from './CompletedItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      completedItems: [],
      currentItem: { 
        text: '',
        key: ''
      },
    };
  }

  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {
          text: '', 
          key: '' 
        },
      });
    }
  }

  completeItem = (key) => {
    const completeItems = this.state.items.filter(item => {
      return item.key === key
    });
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    });
    this.setState({
      items: filteredItems,
      completedItems: [...this.state.completedItems, ...completeItems]
    });
  }
  
  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <br/>
        <TodoItems 
          entries={this.state.items}
          completeItem={this.completeItem}
        />
        <br/>
        <CompletedItems
          entries={this.state.completedItems}
        />
      </div>
    );
  }  
}

export default App;
