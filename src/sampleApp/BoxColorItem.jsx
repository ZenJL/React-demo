import React from 'react'

function BoxColorItem({id, backgroundColor, text, handleChange,}) {
    // function handleChange(backgroundColor) {
    //     console.log('type gi do: ', e.target)
    //     // return function() {
    //     //     // console.log('cu chuoi: ', backgroundColor);
    //     // }
    // }


    return (
        <div style={{
            backgroundColor: backgroundColor,
            width: 150,
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>
            
            <label 
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {text}

                <input
                    id={id}
                    style={{display: 'none'}}
                    type="checkbox"
                    name='box'
                    onChange={handleChange(backgroundColor)}
                />
            </label>
        </div>
    )
}

export default BoxColorItem
