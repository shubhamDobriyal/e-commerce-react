import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetail = ({ cartItems, addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    if (!isInCart) {
      navigate('/cart');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={product.image} alt={product.title} className="img-fluid w-50" />
        </div>
        <div className="col-md-6 bg-body-tertiary rounded border border-1">
        <h1>{product.title}</h1>

          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <button
            className={`btn ${isInCart ? 'btn-success' : 'btn-primary'}`}
            onClick={handleAddToCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <Link
            to={{
              pathname: '/checkout',
              state: { product, quantity: 1 }
            }}
            className="btn btn-warning ms-2"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
