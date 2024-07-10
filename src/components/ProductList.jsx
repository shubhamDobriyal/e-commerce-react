import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Added import for useNavigate

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);  // Use navigate for redirection
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map(product => (
          <div
            className="col-6 col-md-4 col-lg-3 mb-4"
            key={product.id}
            onClick={() => handleCardClick(product.id)}
            style={{ cursor: 'pointer' }}  // Adding cursor pointer for better UX
          >
            <div className="card h-100 bg-body-tertiary">
              <img src={product.image} className="card-img-top small-img p-4" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <div className="mt-auto d-flex flex-column gap-2">
                  <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm w-100">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
