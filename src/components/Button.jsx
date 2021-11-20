import React from "react";

const Button = (props) => {
    // console.log('u need here: ', props);    // properties 
    // destructuring object
    const {type, text, onClick} = props;    // name: camelCase
    return (
        <button type={type} onClick={onClick}>{text}</button>
    );
};

export default Button;