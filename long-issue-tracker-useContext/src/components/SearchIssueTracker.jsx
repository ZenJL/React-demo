import React, { useRef, useState } from 'react'
import { searchUser } from '../store/reducer/issueTrackerReducer'
import { useIssueTrackerContext } from '../store/context/issueTrackerContext'
import { Form } from 'react-bootstrap'
import { useEffect } from 'react/cjs/react.development'


const SearchIssueTracker = () => {
  const [, dispatch] = useIssueTrackerContext()
  const typingTimeoutRef = useRef(null)
  const [searchValue, setSearchValue] = useState('')
  const handleSearchValue = (e) => {
    const value = e.target.value

    setSearchValue(value)
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      dispatch(searchUser(value))
    }, 300)
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="w-100">List Todo</h3>
      <Form.Control
        className="w-25"
        type="text"
        placeholder="Search by description..."
        value={searchValue}
        onChange={handleSearchValue}
      />
    </div>
  )
}

export default SearchIssueTracker
