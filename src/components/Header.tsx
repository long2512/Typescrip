import React from 'react'
import {Routes,Route,NavLink,Navigate} from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <ul>
         <li>
           <NavLink to="/">HomePage</NavLink>
         </li>
         <li>
           <NavLink to="/products">Products Page</NavLink>
         </li>
         <li>
           <NavLink to="/about">About</NavLink>
         </li>
       </ul>
    </div>
  )
}

export default Header