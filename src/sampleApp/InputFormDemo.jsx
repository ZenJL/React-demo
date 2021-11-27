import React from 'react'
import inputStyle from './inputFormDemo.module.css'

function InputFormDemo({id, type='text', min, max, name, value, onChange, placeholder}) {

    return (
        <>
            <input className={inputStyle.inputForm}
                id={id}
                type={type}  
                min={min}
                max={max}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default InputFormDemo