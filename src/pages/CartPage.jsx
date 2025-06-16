import React from 'react';
import Cart from '../components/Cart';
import '../components/Cart.css';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-page">
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default CartPage;
