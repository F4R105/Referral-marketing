import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      Register
      <Link to="/auth/login">Login</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Register