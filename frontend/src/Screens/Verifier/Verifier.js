import React from 'react';
import './Verifier.css';

import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboard from '../../Components/Cards/Cards';
import Table from '../../Components/Table/Table';

export default function Verifier() {
  return (
    <div className='verifier'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        <Dashboard />
        <Table />
      </div>
    </div>
  );
}
