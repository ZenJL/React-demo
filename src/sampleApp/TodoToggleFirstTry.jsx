import React from 'react'
import Button from '../components/Button'

function TodoToggleFirstTry({id, handleGetIdFromItem}) {
    return (
        <div>
            <Button text="click me to get id from each item" onClick={() => handleGetIdFromItem(id)} />
        </div>
    )
}

export default TodoToggleFirstTry
