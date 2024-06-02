// src/components/sidebar/InventoryManagement.jsx
import React, { useState, useEffect } from 'react';
import '../../css/InventoryManagement.css';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [newDrug, setNewDrug] = useState({
    name: '',
    batchNumber: '',
    expirationDate: '',
    quantity: '',
    supplier: ''
  });

  useEffect(() => {
    // Fetch inventory data from an API or use static data for now
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Drug A', batchNumber: '12345', expirationDate: '2024-12-31', quantity: 100, supplier: 'Supplier X' },
        { id: 2, name: 'Drug B', batchNumber: '67890', expirationDate: '2023-11-30', quantity: 50, supplier: 'Supplier Y' },
        // Add more drugs as needed
      ];
      setInventory(data);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDrug({ ...newDrug, [name]: value });
  };

  const handleAddDrug = () => {
    setInventory([...inventory, { ...newDrug, id: inventory.length + 1 }]);
    setNewDrug({ name: '', batchNumber: '', expirationDate: '', quantity: '', supplier: '' });
  };

  const handleDeleteDrug = (id) => {
    setInventory(inventory.filter(drug => drug.id !== id));
  };

  return (
    <div className="inventory-management">
      <h2>Inventory Management</h2>
      
      <div className="add-drug-form">
        <h3>Add New Drug</h3>
        <input
          type="text"
          name="name"
          placeholder="Drug Name"
          value={newDrug.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="batchNumber"
          placeholder="Batch Number"
          value={newDrug.batchNumber}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="expirationDate"
          placeholder="Expiration Date"
          value={newDrug.expirationDate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newDrug.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={newDrug.supplier}
          onChange={handleInputChange}
        />
        <button onClick={handleAddDrug}>Add Drug</button>
      </div>

      <div className="inventory-list">
        <h3>Drug Inventory</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Batch Number</th>
              <th>Expiration Date</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(drug => (
              <tr key={drug.id}>
                <td>{drug.name}</td>
                <td>{drug.batchNumber}</td>
                <td>{drug.expirationDate}</td>
                <td>{drug.quantity}</td>
                <td>{drug.supplier}</td>
                <td>
                  <button onClick={() => handleDeleteDrug(drug.id)}>Delete</button>
                  {/* Add Edit functionality as needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="alerts">
        <h3>Alerts</h3>
        <ul>
          {inventory.filter(drug => new Date(drug.expirationDate) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)).map(drug => (
            <li key={drug.id}>{drug.name} is expiring soon.</li>
          ))}
          {inventory.filter(drug => drug.quantity < 10).map(drug => (
            <li key={drug.id}>{drug.name} is running low on stock.</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryManagement;
