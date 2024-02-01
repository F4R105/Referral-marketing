import React from 'react'

import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main id="top">
        <div>hello</div>
        <Outlet />
    </main>
  )
}

export default AuthLayout