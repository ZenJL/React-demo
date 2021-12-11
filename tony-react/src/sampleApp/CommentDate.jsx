import React from 'react';

import { useAppContext } from '../context/appContext';

function CommentDate({ date }) {
  const { todos, getTodoItem } = useAppContext();
  return (
    <div>
      {date}
      {todos.map(todo => (
        <div>
          {todo.title} <button type="button" onClick={() => getTodoItem(todo)}>view detail</button>
        </div>
      ))}
    </div>
  )
}

export default CommentDate
