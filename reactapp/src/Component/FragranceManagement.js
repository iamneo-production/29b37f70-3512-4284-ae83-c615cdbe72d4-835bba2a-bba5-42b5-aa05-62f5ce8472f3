import React, { useState } from 'react';
import '../Asset/CSS/FragranceManagement.css';

const FragranceManagementPage = () => {
  // Sample fragrance data (you would fetch this from a backend)
  const initialFragrances = [
    {
      id: 1,
      name: 'Lavender Bliss',
      description: 'A soothing lavender fragrance.',
      price: 25.99,
      stockAvailability: 10,
    },
    {
      id: 2,
      name: 'Citrus Zest',
      description: 'A refreshing citrus fragrance.',
      price: 19.99,
      stockAvailability: 5,
    },
    {
      id: 3,
      name: 'Ocean Breeze',
      description: 'A clean and fresh ocean-inspired scent.',
      price: 29.99,
      stockAvailability: 15,
    },
    {
      id: 4,
      name: 'Vanilla Delight',
      description: 'A warm and sweet vanilla aroma.',
      price: 22.99,
      stockAvailability: 8,
    },
    {
      id: 5,
      name: 'Fresh Linen',
      description: 'A clean and crisp linen scent.',
      price: 24.99,
      stockAvailability: 12,
    },
    // Add more fragrances here...
  ];

  const [fragrances, setFragrances] = useState(initialFragrances);
  const [isAddFragranceOpen, setIsAddFragranceOpen] = useState(false);
  const [editedFragrance, setEditedFragrance] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0,
    stockAvailability: 0,
  });

  const handleAddFragranceClick = () => {
    setIsAddFragranceOpen(true);
    // Reset the edited fragrance data
    setEditedFragrance({
      id: 0,
      name: '',
      description: '',
      price: 0,
      stockAvailability: 0,
    });
  };

  const handleEditFragrance = (fragrance) => {
    setIsAddFragranceOpen(true);
    setEditedFragrance(fragrance);
  };

  const handleSaveFragrance = () => {
    // Logic to save or update the edited fragrance
    if (editedFragrance.id === 0) {
      // Add a new fragrance
      // Generate a new fragrance ID (you can replace this logic)
      const newFragranceId =
        Math.max(...fragrances.map((fragrance) => fragrance.id), 0) + 1;
      const newFragrance = { id: newFragranceId, ...editedFragrance };
      setFragrances([...fragrances, newFragrance]);
    } else {
      // Update an existing fragrance
      const updatedFragrances = fragrances.map((fragrance) =>
        fragrance.id === editedFragrance.id ? editedFragrance : fragrance
      );
      setFragrances(updatedFragrances);
    }

    setIsAddFragranceOpen(false);
  };

  const handleCancelEdit = () => {
    setIsAddFragranceOpen(false);
  };

  const handleDeleteFragrance = (fragranceId) => {
    // Filter out the fragrance with the given ID
    const updatedFragrances = fragrances.filter(
      (fragrance) => fragrance.id !== fragranceId
    );
    setFragrances(updatedFragrances);
  };

  return (
    <div>
      <h1>Fragrance Management</h1>
      <button onClick={handleAddFragranceClick}>Add Fragrance</button>
      <table>
        <thead>
          <tr>
            <th>Fragrance ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fragrances.map((fragrance) => (
            <tr key={fragrance.id}>
              <td>{fragrance.id}</td>
              <td>{fragrance.name}</td>
              <td>{fragrance.description}</td>
              <td>${fragrance.price.toFixed(2)}</td>
              <td>{fragrance.stockAvailability}</td>
              <td>
                <button onClick={() => handleEditFragrance(fragrance)}>Edit</button>
                <button onClick={() => handleDeleteFragrance(fragrance.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pop-up form for adding/editing fragrances */}
      {isAddFragranceOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCancelEdit}>
              &times;
            </span>
            <h2>{editedFragrance.id === 0 ? 'Add Fragrance' : 'Edit Fragrance'}</h2>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  value={editedFragrance.name}
                  onChange={(e) =>
                    setEditedFragrance({ ...editedFragrance, name: e.target.value })
                  }
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={editedFragrance.description}
                  onChange={(e) =>
                    setEditedFragrance({ ...editedFragrance, description: e.target.value })
                  }
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  step="0.01"
                  value={editedFragrance.price}
                  onChange={(e) =>
                    setEditedFragrance({ ...editedFragrance, price: parseFloat(e.target.value) })
                  }
                />
              </label>
              <label>
                Stock Availability:
                <input
                  type="number"
                  value={editedFragrance.stockAvailability}
                  onChange={(e) =>
                    setEditedFragrance({ ...editedFragrance, stockAvailability: parseInt(e.target.value) })
                  }
                />
              </label>
              <button type="button" onClick={handleSaveFragrance}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FragranceManagementPage;
