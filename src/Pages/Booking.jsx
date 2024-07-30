import React, { useState } from "react";
import '../Styles/Booking.css';
import { server } from "../config";
import { toast } from 'react-hot-toast';

const isAuthenticated = localStorage.getItem("travel-token");

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dateOfTravel: "",
    duration: "",
    holidayType: "",
    budget: "",
    travelers: ""
  });
  const [loading, setLoading] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Adjust the regex as needed for your phone format
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Please login to send a message.");
      return;
    }

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every(field => field !== "");
    if (!allFieldsFilled) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(formData.phone)) {
      toast.error("Please enter a valid phone number (10 digits).");
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch(`${server}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Booking successful!', { id: toastId });
        setFormData({
          name: "",
          phone: "",
          email: "",
          dateOfTravel: "",
          duration: "",
          holidayType: "",
          budget: "",
          travelers: ""
        });
      } else {
        const errorData = await response.json();
        toast.error(`Booking failed: ${errorData.message || 'Please try again.'}`, { id: toastId });
      }
    } catch (error) {
      toast.error('Booking failed. Please try again.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-container">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="formbold-form-input"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="phone" className="formbold-form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="formbold-form-input"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="formbold-form-input"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="dateOfTravel" className="formbold-form-label">Date of Travel</label>
              <input
                type="date"
                name="dateOfTravel"
                id="dateOfTravel"
                className="formbold-form-input"
                value={formData.dateOfTravel}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label className="formbold-form-label">Duration of Your Holiday</label>
              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="duration"
                    value="1-3 days"
                    checked={formData.duration === "1-3 days"}
                    onChange={handleInputChange}
                  />
                  1-3 days
                </label>
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="duration"
                    value="4-7 days"
                    checked={formData.duration === "4-7 days"}
                    onChange={handleInputChange}
                  />
                  4-7 days
                </label>
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="duration"
                    value="8-14 days"
                    checked={formData.duration === "8-14 days"}
                    onChange={handleInputChange}
                  />
                  8-14 days
                </label>
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="duration"
                    value="15+ days"
                    checked={formData.duration === "15+ days"}
                    onChange={handleInputChange}
                  />
                  15+ days
                </label>
              </div>
            </div>
            <div className="formbold-mb-5">
              <label className="formbold-form-label">Holiday Type</label>
              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="holidayType"
                    value="Honeymoon"
                    checked={formData.holidayType === "Honeymoon"}
                    onChange={handleInputChange}
                  />
                  Honeymoon
                </label>
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="holidayType"
                    value="Group tours"
                    checked={formData.holidayType === "Group tours"}
                    onChange={handleInputChange}
                  />
                  Group tours
                </label>
                <label className="formbold-radio-label">
                  <input
                    type="radio"
                    name="holidayType"
                    value="Solo Trip"
                    checked={formData.holidayType === "Solo Trip"}
                    onChange={handleInputChange}
                  />
                  Solo Trip
                </label>
              </div>
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="budget" className="formbold-form-label">Budget</label>
              <input
                type="text"
                name="budget"
                id="budget"
                placeholder="Enter your budget"
                className="formbold-form-input"
                value={formData.budget}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="travelers" className="formbold-form-label">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                id="travelers"
                placeholder="Enter number of travelers"
                className="formbold-form-input"
                value={formData.travelers}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="formbold-btn" type="submit" disabled={loading}>
                {loading ? "Booking..." : "Book tour"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
