import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
