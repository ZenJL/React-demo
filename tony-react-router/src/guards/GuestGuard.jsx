import React from 'react'
import { Redirect } from 'react-router-dom'

function GuestGuard({ children }) {
  const isAuth = true; // get from localstorage

  if(isAuth) return <Redirect to="/" />

  return <>{children}</>
}

export default GuestGuard
