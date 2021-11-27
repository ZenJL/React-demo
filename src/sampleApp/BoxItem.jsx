import React from 'react'
import boxItem from './boxItem.module.css'

function BoxItem({id, text, handleClickBox}) {
    return (
        <li className={boxItem} onClick={() => handleClickBox(id)}>
            {text}<br/>
            
        </li>
    )
}

export default BoxItem
