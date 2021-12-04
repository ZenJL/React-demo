import React, { useState } from 'react'
import FormInput from './FormInput'
import { v4 as uuidv4 } from 'uuid'
import FormButton from './FormButton'
import FormGender from './FormGender'
import FormStatus from './FormStatus'
import FormBio from './FormBio'
import FormPolicy from './FormPolicy'
import FormModal from './FormModal'
import './formRegister.css'
const FormRegister = () => {
  const [forms, setForms] = useState({
    id: '',
    firstName: '',
    lastName: '',
  })
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault();
    const errors = Object.keys(forms).filter(element => !forms[element]);
    if(errors.length > 0) return;
    console.log('handleSubmit: ', forms)
  }

  const onChange = (event) => {
    const { name, value } = event.target

    if(value !== '') {
      const newErrr = {...errors};
      delete newErrr[name];
      setErrors(newErrr);
    }

    setForms((prev) => {
      return {
        ...prev,
        [name]: value,
        id: uuidv4(),
      }
    })
  }

  function onBlur(event) {
    const { name, value } = event.target;
    if(value !== '') return;

    setErrors(prevState => {
      return {
        ...prevState,
        [name]: true
      }
    })
  }

  console.log('errors: ', errors)

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="heading">Register</h1>
      FirstName: <input type="text" name="firstName" onBlur={onBlur} onChange={onChange} />
      <br/>
      {errors['firstName'] && <div>please input first name</div>}
      <br />
      LastName: <input type="text" name="lastName" onBlur={onBlur} onChange={onChange} />
      <br />
      {errors['lastName'] && <div>please input last name</div>}
      <br />
      <FormButton type="submit" name="Register" />
    </form>
  )
}

export default FormRegister
