import React from 'react';
// import './ProductItem.css';

const ProductItem = ({ product, addToCart, cart }) => {
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="card product-card animate-fade-in">
      <img src={product.image} className="card-img-top p-4" alt={product.title} style={{ height: '250px', objectFit: 'contain' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        
        <button
          className={`btn mt-auto ${isInCart ? 'btn-success' : 'btn-primary'}`}
          onClick={() => !isInCart && addToCart(product)}
          disabled={isInCart}
        >
          {isInCart ? 'In Cart ✅' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
