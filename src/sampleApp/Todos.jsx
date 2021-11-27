import React, { useState } from 'react'
import TodoList from './TodoList'

function Todos() {
    const [todos] = useState([
        {
            id: 1,
            title: 'hello react'
        },
        {
            id: 2,
            title: 'master me, react'
        },
        {
            id: 3,
            title: 'please'
        },
    ])

    function handleDelete(id) {
        console.log('id: ', id)
    }

    return (
        <div>
            <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
    )
}

export default Todos
