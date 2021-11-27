import React from 'react'
import ToggleTodos from './ToggleTodos';


function TodoItem(props) {
    const {title, id, handleDelete} = props;
    return (
        <div>
            this is item: {title}<br/>
            <ToggleTodos id={id} handleDelete={handleDelete} />
        </div>
    )
}

export default TodoItem
