import React, { useState } from 'react'
import BoxColorItem from './BoxColorItem'

function BoxesColorMain() {
    const [box,] = useState([
        {
            id: 1,
            color: '#f00',
            text: 'red',
        },
        {
            id: 2,
            color: 'gold',
            text: 'gold',
        },
        {
            id: 3,
            color: 'aqua',
            text: 'qua',
        },
        {
            id: 4,
            color: '#9b59b6',
            text: 'purple',
        },
    ])

    // const [bgColor, setBgColor] = useState('');


    // (backgroundColor)
    function handleChange(e, backgroundColor) {
        // console.log('type gi do: ', e.target.checked, id)
        // console.log('cu hanh: ', id);
        return function() {
            console.log('type gi do1: ', e.target)
            console.log('cu chuoi: ', backgroundColor);
        }
    }


    return (
        <div style={{width: 300, height: 300, display: 'flex', flexWrap: 'wrap'}}>
            {/* <div style={{backgroundColor: '#f00', width: 150, height: 150}}>Red</div>
            <div style={{backgroundColor: 'gold', width: 150, height: 150}}>Gold</div>
            <div style={{backgroundColor: 'aqua', width: 150, height: 150}}>Aqua</div>
            <div style={{backgroundColor: '#9b59b6', width: 150, height: 150}}>Purple</div> */}
            {/* <BoxColorItem text="Red" backgroundColor="#f00" handleChange={handleChange} />
            <BoxColorItem text="Gold" backgroundColor="gold" handleChange={handleChange} />
            <BoxColorItem text="Aqua" backgroundColor="aqua" handleChange={handleChange} />
            <BoxColorItem text="Purple" backgroundColor="#9b59b6" handleChange={handleChange} /> */}

            {box.map((ele) => (
                <BoxColorItem key={ele.id} id={ele.id} text={ele.text} backgroundColor={ele.color} handleChange={handleChange} />
            ))}
        </div>
    )
}

export default BoxesColorMain
