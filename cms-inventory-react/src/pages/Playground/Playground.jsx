import React from 'react';


import { fetchTodo } from 'services/todoServices';

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
    </div>
  )
}

export default Playground