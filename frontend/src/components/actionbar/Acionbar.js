import React from 'react'

import './actionbar.scss'

const Actionbar = () => {
  return (
    <div className="main-ribbon">
        <div className="inventory-management-text">
            WELCOME, SUPPLIER MANAGER
        </div>

        <div className="user-details">
          <img className='user-image' src='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg' alt="profile" />
          <div className="profile-details">
              <span className='username'>A.R.S.A.Rathnakumara</span>
              <span className='designation'>Supplier Manager</span>
              
          </div>
          <button className='logout'>Logout</button>
        </div>
    </div>
  )
}

export default Actionbar