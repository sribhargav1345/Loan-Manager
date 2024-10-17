import React from 'react';
import './Sidebar.css';

import { FaUsers, FaMoneyBill, FaChartPie, FaCog } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='profile'>
        <div className='profile-icon'>JD</div>
        <div className='profile-name'>John Doe</div>
      </div>
      <ul className='menu'>
        <li className='menu-item'><HiHome /> Dashboard</li>
        <li className='menu-item'><FaUsers /> Borrowers</li>
        <li className='menu-item'><FaMoneyBill /> Loans</li>
        <li className='menu-item'><FaChartPie /> Reports</li>
        <li className='menu-item'><FaCog /> Settings</li>
      </ul>
    </div>
  );
}
