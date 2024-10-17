import React, { useEffect, useState } from 'react';
import './Table.css';
import { MoreVert } from '@mui/icons-material';

export default function LoanTable() {
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const loadLoans = async () => {
        try {
            const data = await fetch("https://loan-manager-pilb.onrender.com/api/loans", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const response = await data.json();
            setLoanData(response);
            
        } catch (error) {
            console.log("Error fetching Data", error);
        }
    };
    
    loadLoans();
  }, []);

  return (
    <div className='loan-table'>
      <h3>Recent Loans</h3>
      <table>
        <thead>
          <tr>
            <th>User Image</th>
            <th>Customer Name</th>
            <th>Money Needed</th>
            <th>Loan Tenure</th>
            <th>Employment Status</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan) => (
            <tr key={loan._id}>
              <td className='user-details'>
                <img
                  src={loan.userImg || 'https://avatar.iran.liara.run/public'} // Placeholder if no image
                  alt='User'
                  className='user-img'
                />
              </td>
              <td>{loan.fullname}</td>
              <td>${loan.money_needed}</td>
              <td>{loan.loan_tenure}</td>
              <td>{loan.employment_status}</td>
              <td>
                <span className={`status ${loan.status.toLowerCase()}`}>
                  {loan.status.toUpperCase()}
                </span>
              </td>
              <td className='action'>
                <MoreVert className='more-icon' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};