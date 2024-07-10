import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateCartQuantity, handleProceedToCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

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
            className="progress-bar bg-secondary"
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
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center bg-body-tertiary">
                <div className="cart-item d-flex align-items-center">
                  <img src={item.image} alt={item.title} className="img-thumbnail" />
                  <div className="ms-4">
                    <h5>{item.title}</h5>
                    <p>${item.price}</p>
                    <div className="quantity-selector">
                      <button className="btn btn-secondary btn-sm" onClick={() => updateCartQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="btn btn-secondary btn-sm" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className="mt-2">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="btn btn-danger btn-sm mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary d-flex justify-content-between align-items-center">
            <h4>Total: ${calculateTotal()}</h4>
            <div className='d-flex gap-2'>
              <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
              <button className="btn btn-primary" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;