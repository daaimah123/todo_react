import React, { Component } from 'react';
import 'node-fetch'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import About from './components/pages/About';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        // {
        //   id: uuid.v4(),
        //   title: 'Do Some Coding!',
        //   completed: false
        // },
        // {
        //   id: uuid.v4(),
        //   title: 'Sleep!',
        //   completed: false
        // },
        // {
        //   id: uuid.v4(),
        //   title: 'Clean!',
        //   completed: false
        // },
        // {
        //   id: uuid.v4(),
        //   title: 'Do this tutorial!',
        //   completed: false
        // },
      ]
    }
  }

  markComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    })
  }

  deleteTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => 
      todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(), 
      title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }


  render(){
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                  />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
