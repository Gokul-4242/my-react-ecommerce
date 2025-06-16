import React from 'react';
import './Cart.css';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container my-5 cart-container">
      <h2 className="mb-4 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty 🛒</div>
      ) : (
        <>
          <div className="row g-4">
            {cart.map(item => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div className="card cart-card animate-fade-in h-100">
                  <img
                    src={item.image}
                    className="card-img-top p-4"
                    alt={item.title}
                    style={{ height: '220px', objectFit: 'contain' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <div className="d-flex align-items-center justify-content-between mb-3 quantity-wrapper">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash className="me-2" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total Section */}
          <div className="cart-total-box mt-5 text-end">
            <h4 className="fw-bold">Total: ${getTotal()}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
