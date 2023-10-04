import React, { useState } from 'react';
import '../Asset/CSS/Order.css';

const OrderManagementPage = () => {
  // Sample order data (you would fetch this from a backend)
  const initialOrders = [
    {
      id: 1,
      customerName: 'John Doe',
      fragrance: 'Lavender Bliss',
      quantity: 2,
      status: 'Processing',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      fragrance: 'Citrus Zest',
      quantity: 1,
      status: 'Shipped',
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      fragrance: 'Ocean Breeze',
      quantity: 3,
      status: 'Delivered',
    },
    {
      id: 4,
      customerName: 'Alice Brown',
      fragrance: 'Fresh Linen',
      quantity: 2,
      status: 'Processing',
    },
    {
      id: 5,
      customerName: 'Eve Adams',
      fragrance: 'Summer Rain',
      quantity: 4,
      status: 'Shipped',
    },
    // Add more orders here...
  ];

  const [orders, setOrders] = useState(initialOrders);

  return (
    <div>
      <h1>Order Management</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Fragrance</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.fragrance}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagementPage;
