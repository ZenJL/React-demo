import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap'

function SelectField({ label, value, options, renderOptions, onChange }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select
        value={value}
        onChange={onChange}
      >
        {options.map((item, idx) => (
          <Fragment key={idx}>
            {renderOptions(item)}
          </Fragment>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default SelectField
