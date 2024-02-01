import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
        <div className="container">
            <Link to='/' id="logo">Referral</Link>
            <nav>
                <ul>
                    <li><Link to="/auth/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar