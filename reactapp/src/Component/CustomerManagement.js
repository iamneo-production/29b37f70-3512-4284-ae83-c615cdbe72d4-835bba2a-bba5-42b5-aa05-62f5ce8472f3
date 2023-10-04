import React, { useState } from 'react';
import '../Asset/CSS/CustomerManagement.css';

const CustomerManagementPage = () => {
  // Sample customer data (you would fetch this from a backend)
  const initialCustomers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      fragrancePreference: 'Lavender Bliss',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      fragrancePreference: 'Citrus Zest',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      fragrancePreference: 'Ocean Breeze',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      fragrancePreference: 'Vanilla Delight',
    },
    {
      id: 5,
      name: 'Eva Wilson',
      email: 'eva.wilson@example.com',
      fragrancePreference: 'Fresh Linen',
    },
    // Add more customers here...
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({
    id: 0,
    name: '',
    email: '',
    fragrancePreference: '',
  });

  const handleAddCustomerClick = () => {
    setIsAddCustomerOpen(true);
    // Reset the edited customer data
    setEditedCustomer({
      id: 0,
      name: '',
      email: '',
      fragrancePreference: '',
    });
  };

  const handleEditCustomer = (customer) => {
    setIsAddCustomerOpen(true);
    setEditedCustomer(customer);
  };

  const handleSaveCustomer = () => {
    // Logic to save or update the edited customer
    if (editedCustomer.id === 0) {
      // Add a new customer
      // Generate a new customer ID (you can replace this logic)
      const newCustomerId =
        Math.max(...customers.map((customer) => customer.id), 0) + 1;
      const newCustomer = { id: newCustomerId, ...editedCustomer };
      setCustomers([...customers, newCustomer]);
    } else {
      // Update an existing customer
      const updatedCustomers = customers.map((customer) =>
        customer.id === editedCustomer.id ? editedCustomer : customer
      );
      setCustomers(updatedCustomers);
    }

    setIsAddCustomerOpen(false);
  };

  const handleCancelEdit = () => {
    setIsAddCustomerOpen(false);
  };

  const handleDeleteCustomer = (customerId) => {
    // Filter out the customer with the given ID
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );
    setCustomers(updatedCustomers);
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <button onClick={handleAddCustomerClick}>Add Customer</button>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Fragrance Preference</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.fragrancePreference}</td>
              <td>
                <button onClick={() => handleEditCustomer(customer)}>Edit</button>
                <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pop-up form for adding/editing customers */}
      {isAddCustomerOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCancelEdit}>
              &times;
            </span>
            <h2>{editedCustomer.id === 0 ? 'Add Customer' : 'Edit Customer'}</h2>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  value={editedCustomer.name}
                  onChange={(e) =>
                    setEditedCustomer({ ...editedCustomer, name: e.target.value })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={editedCustomer.email}
                  onChange={(e) =>
                    setEditedCustomer({ ...editedCustomer, email: e.target.value })
                  }
                />
              </label>
              <label>
                Fragrance Preference:
                <input
                  type="text"
                  value={editedCustomer.fragrancePreference}
                  onChange={(e) =>
                    setEditedCustomer({ ...editedCustomer, fragrancePreference: e.target.value })
                  }
                />
              </label>
              <button type="button" onClick={handleSaveCustomer}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagementPage;