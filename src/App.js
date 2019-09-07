import React, { Component } from 'react';
import 'node-fetch'
// import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Todos from './components/todo/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/todo/AddTodo'
import About from './components/pages/About';
import EnterShopForm from './components/pages/EnterShopForm';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => {
          this.setState({todos: data})
      })
      .catch(error => ({error: error.message}))
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
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
    .then(data => this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    .catch(error => ({error: error.message}))
  }

  addTodo = (title) => {
    fetch('https://jsonplaceholder.typicode.com/todos/', {
      title, 
      completed: false
    })
    .then(res => res.json())
    .then(data => this.setState({ todos: [...this.state.todos, data] }))
    .catch(error => ({error: error.message}))
  }


  render(){
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route path='/home' component={Home} />
            <Route path='/todo' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo} cv 
                  />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
            <Route path='/enterform' component={EnterShopForm}/>
          </div>
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   addtodo: PropTypes.func.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   deleteTodo: PropTypes.func.isRequired
// }

export default App;
