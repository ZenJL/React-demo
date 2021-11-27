import React from 'react'

function LabelInputDemo({text, htmlFor}) {
    return (
        <label htmlFor={htmlFor}>{text}</label>
    )
}

export default LabelInputDemo
