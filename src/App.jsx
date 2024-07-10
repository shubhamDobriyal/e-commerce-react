import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderCompleted from './components/OrderCompleted';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [step, setStep] = useState(1);  // Track the current step
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    navigate('/cart');  // Navigate to the Cart page
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleProceedToCheckout = () => {
    setStep(2);  // Set step to checkout
    navigate('/checkout');
  };

  const handleOrderCompletion = () => {
    setCartItems([]);
    setStep(3);  // Set step to order completed
    navigate('/order-completed');
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
              handleProceedToCheckout={handleProceedToCheckout}
            />} 
        />
        <Route 
          path="/checkout" 
          element={
            <Checkout
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
              handleOrderCompletion={handleOrderCompletion}
              step={step}
            />} 
        />
        <Route path="/order-completed" element={<OrderCompleted step={step} />} />
      </Routes>
    </>
  );
};

export default App;