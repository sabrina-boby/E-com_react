import React, { useContext } from "react";
import "./Checkout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AppContext } from '../../context/AppContext';
const AddToCard = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(AppContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="title">
          <h2>An overview of your order</h2>
          {cart.length > 0 ? (
            <div className="all-cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="product-align">
                    <div className="product">
                      <div className="item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <div className="item-details">
                        <img src={item.image} className="item-image" alt={item.name} />
                        <span className="item-name">{item.name}</span>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>&times;</button>
                  </div>
                  <span className="item-price">€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        <div className="title">
          <h2>Order details</h2>
          <div className="summary-full-box">
            <div className="summary-box">
              <div className="summary-item">
                <span className="label">Subtotal</span>
                <span className="value">€ {calculateTotal()}</span>
              </div>
              <div className="summary-item">
                <span className="label">Shipping</span>
                <span className="value">Free</span>
              </div>
              <div className="summary-item">
                <span className="label">
                  Estimated Tax <span className="info-icon">ⓘ</span>
                </span>
                <span className="value">€ -</span>
              </div>
              <hr />
              <div className="summary-item total">
                <span className="label">Total</span>
                <span className="value">€ {calculateTotal()}</span>
              </div>
            </div>
            <div>
              <button className="checkout-btn">Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddToCard;
