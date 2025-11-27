import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import{ Link, NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div >
        <ul id='navbar'>
            <li>
                <NavLink to="/" className={( {isActive})=> isActive? "active-link": ""}>
                 Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                 <NavLink to ="/dashboard">Dashboard</NavLink>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
