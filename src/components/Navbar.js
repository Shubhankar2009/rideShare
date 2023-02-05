import React from 'react'
import "../style/navbar_style.css"

export default function Navbar() {
  
  let authenticated = localStorage.getItem("Authenticated")
  return (
    <div className='navbar'>
        <div className="title">
            <h1 className='title'>rideShare</h1>
        </div>
        <div className="nav_items">
            <a href='./' className='link'>Home</a>
            <a href='./find' className='link'>Find Ride</a>
            <a href='./add' className='link'>Add Ride</a>
            {authenticated ? <a href='./profile' className='link'>Profile</a> : <a href='./login' className='link'>Login</a>}
        </div>
    </div>
  )
}
