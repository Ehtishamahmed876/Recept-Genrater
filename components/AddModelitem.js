"use client"
// components/AddItemModal.js
import React, { useState } from 'react';

const AddItemModal = ({ onClose, onSave }) => {
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSave = () => {
    // Validate the input fields before saving
    if (!itemName || !itemQty || !itemPrice) {
      alert('Please fill in all fields');
      return;
    }

    // Save the new item and close the modal
    onSave({ name: itemName, qty: parseInt(itemQty), price: parseFloat(itemPrice) });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 w-96">
        <h2 className="text-xl font-semibold mb-4">Add Line Item</h2>
        <label className="block mb-2">
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="border p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Quantity:
          <input
            type="number"
            value={itemQty}
            onChange={(e) => setItemQty(e.target.value)}
            className="border p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="border p-1 w-full"
          />
        </label>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSave}>
            Save
          </button>
          <button className="ml-2 bg-gray-300 px-4 py-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
