import React, { useEffect, useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx'; 

import Button from './Button';

const defaultTodo = [
  {
    title: 'cars'
  },
  {
    title: 'human'
  }
]

function ConditionalRendering() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);
  const [isAuth, setIsAuth] = useState(false);
  let button = null;

  useEffect(() => {
    const newTodos = defaultTodo.map(item => {
      return {
        title: item.title,
        id: uuidv4()
      }
    })
    setTodos(newTodos)
  }, []) // only run when first render

  function handleLogical() {
    setCount(null)
  }

  if (isAuth) {
    button = <Button text="user logined" />
  } else {
    button = <Button text="user must login" />
  }

  function renderItems() {
    const items = [1,2,3];
    return (
      <div>
        {items.map(ele => (
          <Fragment key={ele}>this is item: {ele}</Fragment>
        ))}
      </div>
    )
  }
  
  return (
    <div>

      <h5 className="textColor01">Inline If with Logical && Operator</h5>
      {todos.length > 0 && todos.map((todo) => {
        return (
          <div key={todo.id}>
            this is: {todo.title}
          </div>
        )
      })} 
      <br />

      <h5>Inline If with Logical || Operator</h5>
      {count || <div>this is logical || operator</div>}
      <Button text="click me" onClick={handleLogical}/>

      <br /><br />
      <h5 
        className={clsx(
          'defaultComon',
          isAuth ? 'auth' : 'notAuth',
          isAuth && 'welcomeTo'
        )}
      >
        Inline If-else ? :
      </h5>
      {isAuth ? 'logined' : 'not login'}
      <Button text={isAuth ? 'Logined' : 'Please login'} onClick={() => setIsAuth(prevState => !prevState)} />

      <br /><br />
      <h5>Element Variable</h5>
      {button}

      <br /><br />
      <h5>Render with function</h5>
      {renderItems()}
    </div>
  )
}

export default ConditionalRendering
