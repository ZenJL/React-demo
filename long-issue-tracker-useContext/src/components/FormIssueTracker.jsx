import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// libs
import { v4 as uuidv4 } from 'uuid'

// context
import { useIssueTrackerContext } from '../store/context/issueTrackerContext'

// components
import IssueTrackerToast from './IssueTrackerToast';
import TextField from './TextField';
import SelectField from './SelectField';

// store
import {
  addUser,
  isShowLoadingUser,
  isHideLoadingUser,
} from '../store/reducer/issueTrackerReducer';

const severityOptions = [
  {
    id: 1,
    label: 'Low',
    value: 'low'
  },
  {
    id: 2,
    label: 'Medium',
    value: 'medium'
  },
  {
    id: 3,
    label: 'High',
    value: 'high'
  },
  {
    id: 4,
    label: 'High 2',
    value: 'high 2'
  }
]

const FormIssueTracker = () => {
  const [{ isAddSuccess }, dispatch] = useIssueTrackerContext()
  const [isError, setIsError] = useState(false)
  const [form, setForm] = useState({
    id: uuidv4(),
    description: '',
    severity: 'low',
    status: 'new',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    form.description === '' ? setIsError(true) : setIsError(false)
    if (form.description === '') return
    dispatch(isShowLoadingUser())
    setForm({ id: uuidv4(), description: '', severity: 'low', status: 'new' })

    setTimeout(() => {
      dispatch(isHideLoadingUser())
    }, 1500)

    dispatch(addUser(form))
  }

  return (
    <>
      {isAddSuccess && (
        <IssueTrackerToast title="Add Successfully" color="text-success" />
      )}

      <Form onSubmit={handleSubmit} className=" border-bottom pb-4">
        <h1 className="text-center py-5 mb-0 fs-1 fw-light">Issue Tracker</h1>

        <TextField 
          isError={form.description === '' && isError}
          errrorMessage="Please Enter Input"
          label="Description"
          value={form.description}
          placeholder="Describe the issue..."
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                description: e.target.value,
              }
            })
          }
        />

        <SelectField 
          label="Severity"
          value={form.severity}
          options={severityOptions}
          renderOptions={(item) => (
            <option value={item.value}>{item.label}</option>
          )}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                severity: e.target.value,
              }
            })
          }
        />

        <div className="d-flex justify-content-end align-items-center ">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </div>
      </Form>
    </>
  )
}

export default FormIssueTracker
