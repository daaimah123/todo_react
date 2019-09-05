import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Do Some Coding!',
          completed: false
        },
        {
          id: 2,
          title: 'Sleep!',
          completed: false
        },
        {
          id: 3,
          title: 'Clean!',
          completed: false
        },
        {
          id: 4,
          title: 'Do this tutorial!',
          completed: true
        },
      ]
    }
    this.markComplete = this.markComplete.bind(this);
  }

  // toggle complete
  markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        })
  }


  render(){
    return (
      <div className="App">
        <Todos 
          todos={this.state.todos}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
