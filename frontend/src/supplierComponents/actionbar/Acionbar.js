import React from 'react';
import './actionbar.scss';

const Actionbar = () => {
  return (
    <div className="main-ribbon">
        {/* Welcome text */}
        <div className="inventory-management-text">
            WELCOME, SUPPLIER MANAGER
        </div>

        {/* User details */}
        <div className="user-details">
          <img className='user-image' src='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg' alt="profile" /> {/* User image */}
          <div className="profile-details">
              <span className='username'>A.R.S.A.Rathnakumara</span> {/* Username */}
              <span className='designation'>Supplier Manager</span> {/* Designation */}
          </div>
          <button className='logout'>Logout</button> {/* Logout button */}
        </div>
    </div>
  );
}

export default Actionbar;
