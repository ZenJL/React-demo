import React from 'react'
import TodoItemFirstTry from './TodoItemFirstTry'

function TodoListFirstTry({todos, handleGetIdFromItem}) {
    return (
        <div>
            {todos.map(element => (
                <TodoItemFirstTry key={element.id} id={element.id} title={element.title} handleGetIdFromItem={handleGetIdFromItem} />
            ))}
        </div>
    )
}

export default TodoListFirstTry
