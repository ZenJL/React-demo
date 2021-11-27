import React from 'react'
import BoxItem from './BoxItem'
import style from './boxListDemo.module.css'

function BoxListDemo({boxes, boxText, handleClickBox}) {
    return (
        <ul className={style.boxList}>
            {boxes.length > 0 ?
                boxes.map(element => (
                    <BoxItem key={element.id} text={element.text} id={element.id} handleClickBox={handleClickBox} />
                ))
            : boxText }

        </ul>
    )
}

export default BoxListDemo
