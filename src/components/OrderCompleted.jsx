import React from 'react';
import { Link } from 'react-router-dom';

const OrderCompleted = ({ step }) => {
  return (
    <div className="container mt-5">
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
            className="progress-bar"
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
      <h1>Order Completed</h1>
      <p>Thank you for your purchase! Your order has been successfully placed.</p>
      <p>We will send a confirmation email to the provided address.</p>
      <div className="mt-4">
        <h4>Order Summary:</h4>
        <ul className="list-group">
          {/* Replace the example items with actual order details */}
          {/* This is just a placeholder */}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Order ID: 123456789</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Total Amount:</span>
            <strong>$99.99</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Payment Method:</span>
            <strong>Credit Card</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Shipping Address:</span>
            <div>
              <p>123 Main St</p>
              <p>Springfield</p>
              <p>IL, 62704</p>
              <p>USA</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <Link to="/" className="btn btn-primary">Return to Home</Link>
      </div>
    </div>
  );
};

export default OrderCompleted;