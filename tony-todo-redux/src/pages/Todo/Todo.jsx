import React from 'react';
import { connect, useSelector } from 'react-redux';

// components
import TodoForm from './TodoForm';

// const mapStateToProps = (state, ownProps) => {
//   console.log('ownProps: ', ownProps);
//   const { id } = ownProps;
//   const todo = state.todos.todos.find(todo => todo.id === id);

//   return {
//     theme: state.app.theme,
//     todos: state.todos.todos,
//     todo
//   }
// }
// function Todo({ todos })

function Todo() {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div>
      <TodoForm /> 
      <br />
      List todos
      <ul>
        {todos?.map(todo => (
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

export default Todo;
// export default connect(mapStateToProps)(Todo);