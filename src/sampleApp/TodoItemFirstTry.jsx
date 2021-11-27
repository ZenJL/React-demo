import React from 'react'
import TodoToggleFirstTry from './TodoToggleFirstTry'

function TodoItemFirstTry({id, title, handleGetIdFromItem}) {
    return (
        <div>
            {title}
            <br/>
            <TodoToggleFirstTry id={id} handleGetIdFromItem={handleGetIdFromItem} />
        </div>
    )
}

export default TodoItemFirstTry
