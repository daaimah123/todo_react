import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  state = {
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
  render(){
    return (
      <div className="App">
        <Todos 
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
