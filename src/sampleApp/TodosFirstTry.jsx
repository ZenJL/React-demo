import React, { useState } from 'react'
import TodoListFirstTry from './TodoListFirstTry'

function TodosFirstTry() {
    const [todos] = useState([
        {
            id: 123,
            title: '1st trial'
        },
        {
            id: 224,
            title: '2nd trial'
        },
        {
            id: 357,
            title: '3rd trial'
        },
    ])

    function handleGetIdFromItem(id) {
        console.log('the id u neeeeed: ', id)
    };

    return (
        <div>
            <TodoListFirstTry todos={todos} handleGetIdFromItem={handleGetIdFromItem} />
        </div>
    )
}

export default TodosFirstTry
