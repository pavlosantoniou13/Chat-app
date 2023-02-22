import React from 'react'
import porsche from '../img/porsche-logo.jpg'


export default function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search for a user...' />
      </div>
      <div className="userChat">
        <img src={porsche} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
