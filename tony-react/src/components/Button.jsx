import React from 'react';

// css
import styles from './button.module.css';


const Button = (props) => {
  const { type = 'button', text , onClick } = props;


  return (
    <button className={styles.textColor01} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button;

// css global
// cpn A -> class="abc" -> using css global 
// cpn B -> class="abc" -> using css global 
// => ca 2 cpn A, B deu` bi apply css global


// css module
// cpn A -> class="abc" -> using css module A -> only apply css for cpn A 
// cpn B -> class="abc" -> using css module B -> only apply css for cpn B
