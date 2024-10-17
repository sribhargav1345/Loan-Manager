import React from 'react';
import './Header.css';

import Bell from '../../Assets/Bell.svg';
import Dropdown from '../../Assets/Dropdown.svg';
import Messenger from '../../Assets/Messenger.svg';
import Profile from '../../Assets/Profile.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-title'>CREDIT APP</div>
      <div className='header-icons'>
        <img src={Bell} alt='Notifications' className='header-icon' />
        <img src={Messenger} alt='Messages' className='header-icon' />
        <div className='header-profile'>
          <img src={Profile} alt='Profile' className='header-icon' />
          <p className='profile-text'>Admin</p>
        </div>
        <img src={Dropdown} alt='Dropdown' className='header-icon' />
      </div>
    </div>
  );
}
