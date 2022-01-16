import React from 'react'
import { Redirect } from 'react-router-dom'

function AuthGuard({ children }) {
  const isAuth = true; // get from localstorage

  if(!isAuth) return <Redirect to="/login" />

  return <>{children}</>
}

export default AuthGuard
