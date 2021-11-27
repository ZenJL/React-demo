import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
    const {todos, handleDelete} = props;

    return (
        <div>
            {todos.map((element) => (
                <TodoItem key={element.id} title={element.title} id={element.id} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default TodoList
