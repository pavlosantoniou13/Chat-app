import React from 'react'
import porsche from '../img/porsche-logo.jpg'


export   const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={porsche} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={porsche} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={porsche} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={porsche} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}
