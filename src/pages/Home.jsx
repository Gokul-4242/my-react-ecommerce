import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import './Home.css';

const Home = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home">
      <h1 className="text-center my-4">Welcome to Our Store</h1>
      <ProductList products={products} addToCart={addToCart} cart={cart} />
    </div>
  );
};

export default Home;
