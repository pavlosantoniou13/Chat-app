import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import porsche from '../img/porsche-logo.jpg'

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Blingo</span>
      <div className="user">
        <img src={porsche} alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth) } >Logout</button>
      </div>
    </div>
  )
}
