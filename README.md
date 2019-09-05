This project was began with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

- In App.js create state with todo list
```
todos: [
      {
        id: 1,
        title: 'Do Some Coding!',
        completed: false
      }, ... ... ...
```
- Nest Todos component in the App component, pass the Todos the state to have access as a prop on the Todos component 
```
todos={this.state.todos}
```
- Return a mapped over todos prop list within Todos and return each item as a prop to a TodoItem component as well as a unique key
``` 
return this.props.todos.map( todo => (
        <TodoItem key={todo.id} todo={todo}/>
    )) 
```
- Render each todo item by returning the props with an appended attribute 
```
this.props.todo.title
```
