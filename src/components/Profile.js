import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../config'

import "../style/profile_style.css"


export default function Profile() {
  
  let name = localStorage.getItem("name")
  let authenticated = localStorage.getItem("Authenticated")
 
  
  const signUserOut = () =>{
    signOut(auth).then(()=>{
    localStorage.clear()
    authenticated = false
    window.location.pathname = "./login"
})} 

  return (
    <div>
      <div className="left">
        <h1>HI {name}</h1>
      </div>
      
      <div className="buttons">
        <a href="./rides-offered"><button className='offered' >Rides You Offered</button></a>
        <a href="./seats-requested"><button className='requests' >Seat Requests</button></a>

      </div>



      <div className="danger">
        <button className='danger_btn' onClick={signUserOut}>Log Out</button>
      </div>
    </div>
  )
}
