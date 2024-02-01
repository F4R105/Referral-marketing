import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      Login
      <Link to="/auth/register">register</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Login