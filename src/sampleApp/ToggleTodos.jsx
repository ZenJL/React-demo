import React from 'react'
import Button from '../components/Button'

function ToggleTodos({id, handleDelete}) {

    return (
        <Button text={'delete'} onClick={() => handleDelete(id)} />
    )
}

export default ToggleTodos
