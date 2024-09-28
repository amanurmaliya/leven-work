import React, { useState } from 'react';
import axios from 'axios';

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint to save the data to the database
      await axios.post('http://localhost:5000/api/saveUser', formData);
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="popup-container fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
        <button onClick={onClose} className="absolute top-2 right-2 text-lg">&times;</button>
      </div>
    </div>
  );
};

export default PopupForm;
