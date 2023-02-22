import React from 'react'
import Add from "../img/addAvatar.png"

export default function Login() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>

            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>sing in</button>
            </form>
            <p> you don't have an account? Register</p>
        </div>
    </div>
  )
}
