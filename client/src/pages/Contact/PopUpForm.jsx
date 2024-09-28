import React, { useState } from 'react';
import axios from 'axios';
import './Popup_form.css'

function PopUpForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData);
      const response = await axios.post("/contact", formData);
      console.log("Response:", response.data);
      onClose(); // Close the popup after form submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className= 'fixed inset-0 bg-[#000] bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg mx-4'>
        <button 
          className='absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-gray-900'
          onClick={onClose} // Use the onClose function passed as a prop
        >
          &times;
        </button>
        <h2 className="text-center text-xl font-semibold mb-4">Want To Connect With Us:</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Full Name"
              required
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email ID"
              required
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone No."
              required
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <button 
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUpForm;
