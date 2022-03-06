import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

// action
import { addTodo } from '../../reducers/todoReducer';

const mapDispatchToProps = {
  addTodo
}

function TodoForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  function handleAddTodo() {
    const payload = {
      id: Date.now(),
      title: name,
      status: 'new'
    }
    console.log('handleAddTodo: ', payload)
    // addTodo(payload)
    dispatch(addTodo(payload))
  }

  return (
    <div>
      Add todo: 
      <input type="text" value={name} onChange={e => setName(e.target.value)} /> 
      <button type="button" onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default TodoForm;

// export default connect(null, null)(TodoForm)