import React from 'react'


import Button from './Button';

function HandleEvent() {
  const [id, setId] = React.useState(0);

  function changeId(idTodo) {
    setId(idTodo)
  }

  console.log(id);

  return (
    <div>
      this is handleEvent
      <ul>
        <li onClick={() => changeId(1)}>
           Learn react 
        </li>
        <li onClick={() => changeId(2)}>
           Learn angular
        </li>
      </ul>
    </div>
  )
}

export default HandleEvent
