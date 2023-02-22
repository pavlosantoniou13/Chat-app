import React from 'react'
import porsche from '../img/porsche-logo.jpg'

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Blingo</span>
      <div className="user">
        <img src={porsche} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
