import React from 'react'
import { Form } from 'react-bootstrap'

function TextField({ label, value, onChange, isError, errorMessage, placeholder }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isError && (
        <p className="text-center fs-5 text-danger">{errorMessage}</p>
      )}
    </Form.Group>
  )
}

export default TextField
