import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ products, addToCart, cart }) => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductItem product={product} addToCart={addToCart} cart={cart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
