import React from 'react';
import { connect } from 'react-redux';

// components
import TodoForm from './TodoForm';

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    theme: state.app.theme
  }
}

function Todo({ todos }) {
  return (
    <div>
      <TodoForm /> 
      <br />
      List todos
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            Id: {todo.id} <br />
            Title: {todo.title} <br />
            Status: {todo.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Todo);