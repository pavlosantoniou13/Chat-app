import React from 'react'
import porsche from '../img/porsche-logo.jpg'

export const Message = () => {
  return (
    <div className='message owner '>
        <div className="messageInfo">
            <img src={porsche} alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src={porsche} alt="" />
        </div>
    </div>
  )
}
