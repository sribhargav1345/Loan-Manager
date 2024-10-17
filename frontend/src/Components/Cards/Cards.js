import React from 'react';
import './Cards.css';

export default function Dashboard() {
  const cards = [
    { id: 1, title: 'Active Users', value: '200' },
    { id: 2, title: 'Borrowers', value: '100' },
    { id: 3, title: 'Cash Disbursed', value: '550,000' },
    { id: 4, title: 'Cash Received', value: '1,000,000' },
    { id: 5, title: 'Savings', value: '450,000' },
    { id: 6, title: 'Repaid Loans', value: '30' },
    { id: 7, title: 'Other Accounts', value: '10' },
    { id: 8, title: 'Loans', value: '50' },
  ];

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <div className='card-container'>
        {cards.map(card => (
          <div key={card.id} className='dashboard-card'>
            <h3>{card.value}</h3>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
