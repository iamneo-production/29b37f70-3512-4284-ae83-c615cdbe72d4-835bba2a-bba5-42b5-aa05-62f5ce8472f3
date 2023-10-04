import React, { useState } from 'react';
import '../Asset/CSS/TransactionManagement.css';

const TransactionManagementPage = () => {
  // Sample transaction data (you would fetch this from a backend)
  const initialTransactions = [
    {
      id: 1,
      serialNumber: 'TRX12345',
      customerName: 'John Doe',
      perfume: 'Lavender Bliss',
      quantity: 2,
      status: 'Processing',
    },
    {
      id: 2,
      serialNumber: 'TRX23456',
      customerName: 'Jane Smith',
      perfume: 'Citrus Zest',
      quantity: 1,
      status: 'Completed',
    },
    {
      id: 3,
      serialNumber: 'TRX34567',
      customerName: 'Bob Johnson',
      perfume: 'Ocean Breeze',
      quantity: 3,
      status: 'Failed',
    },
    {
      id: 4,
      serialNumber: 'TRX45678',
      customerName: 'Alice Brown',
      perfume: 'Fresh Linen',
      quantity: 2,
      status: 'Processing',
    },
    {
      id: 5,
      serialNumber: 'TRX56789',
      customerName: 'Eve Adams',
      perfume: 'Summer Rain',
      quantity: 4,
      status: 'Completed',
    },
    // Add more transactions here...
  ];

  const [transactions, setTransactions] = useState(initialTransactions);

  return (
    <div>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Serial Number</th>
            <th>Customer Name</th>
            <th>Perfume</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.serialNumber}</td>
              <td>{transaction.customerName}</td>
              <td>{transaction.perfume}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionManagementPage;
