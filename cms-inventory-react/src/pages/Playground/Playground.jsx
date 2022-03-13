import React from 'react';

// services
import { fetchTodo } from 'services/todoServices';

// helpers
import { canAction } from 'helpers';

function Playground() {

  async function handleFetchTodo() {
    try {
      const res = await fetchTodo();
      
      console.log('res: ', res)
    } catch (err) {
      console.log('err: ', err)
    }
  }
  return (
    <div>
      
      <button type="button" onClick={handleFetchTodo}>fetch todo</button>
      
      {canAction('view', 'btnDelete') && (
        <button type="button" onClick={handleFetchTodo}>delete user</button>
      )}
      
    </div>
  )
}

export default Playground