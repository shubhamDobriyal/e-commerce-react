import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, removeFromCart, updateCartQuantity, handleOrderCompletion, step }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrderCompletion();
  };

  return (
    <div className="container mt-5 mb-3 bg-body-tertiary p-3 border border-1">
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '33%' }} // Cart step width
            aria-valuenow={33}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Cart
          </div>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '33%' }} // Checkout step width
            aria-valuenow={66}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Checkout
          </div>
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{ width: '34%' }} // Order Completed step width
            aria-valuenow={100}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Order Completed
          </div>
        </div>
      </div>
      <h1>Checkout</h1>
      <div>
        <h4>Total: ${calculateTotal()}</h4>
        <p className="mt-2">Please provide your details to complete the purchase.</p>
        <form onSubmit={handleSubmit} className=''>
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="zip" className="form-label">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              value={paymentMethod}
              onChange={handlePaymentChange}
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <div className='mb-3 d-flex justify-content-center align-items-center'>
          <button type="submit" className="btn btn-primary">Complete Order</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;