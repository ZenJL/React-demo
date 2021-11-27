import React from "react";

// css
import tengicungdc from "./button.module.css"

const Button = (props) => {
    // console.log('u need here: ', props);    // properties 
    // destructuring object
    const {type = 'button', text, onClick, onSubmit} = props;    // name: camelCase
    return (
        <button className={tengicungdc.demoClass} type={type} onClick={onClick} onSubmit={onSubmit}>{text}</button>
        // about css module: objectName(tengicungdc).classname
    );
};

export default Button;

// css module
// cpnA ==> class="abc" => using css module A ==>> only apply css for cpnA
// cpnB ==> class="abc" => using css module B ==>> only apply css for cpnB, not using css by module A
// ===>>> import thang nao, thang do anh huong

// css module
// cpnA ==> class="abc" => using css global ==>> apply css for cpnA, also cpnB
// cpnB ==> class="abc" => using css global ==>> apply css for cpnB, and all other cpn have element with class name abc
// ===> all cpn A,B will be applied by Css global
