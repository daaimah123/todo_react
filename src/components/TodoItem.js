import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'teal',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { title, id } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type='checkbox' 
                        onChange={this.props.markComplete.bind(this, id)}
                        /> {' '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000', 
    color: '#fff', 
    border: 'none', 
    padding: '5px 9px', 
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}


export default TodoItem
