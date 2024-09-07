import React from "react";
import "./Checkout.css";
import Frame77 from "../../Assets/Frame77.png";
const AddToCard = () => {
  return (
    <div className="container">
      <div className="all-card-items">
        <div className="cart-item">
          <div className="product-align">
            <div className="product">
              <div className="item-quantity">
                <span className="quantity">-</span>
                <span className="quantity">1</span>
                <span className="quantity">+</span>
              </div>
              <div className="item-details">
                <img src={Frame77} className="item-image" alt="" />
                <span className="item-name">Recliner Chair Steel</span>
              </div>
            </div>
            <button className="remove-btn">&times;</button>
          </div>
          <span className="item-price">€299.00</span>
        </div>

        <div className="cart-item">
          <div className="product-align">
            <div className="product">
              <div className="item-quantity">
                <span className="quantity">-</span>
                <span className="quantity">1</span>
                <span className="quantity">+</span>
              </div>
              <div className="item-details">
                <img src={Frame77} class="item-image" alt="" />
                <span className="item-name">Recliner Chair Steel</span>
              </div>
            </div>
            <button className="remove-btn">&times;</button>
          </div>
          <span className="item-price">€299.00</span>
        </div>

        <div className="cart-item">
          <div className="product-align">
            <div className="product">
              <div className="item-quantity">
                <span className="quantity">-</span>
                <span className="quantity">1</span>
                <span className="quantity">+</span>
              </div>
              <div className="item-details">
                <img src={Frame77} className="item-image" alt="" />
                <span className="item-name">Recliner Chair Steel</span>
              </div>
            </div>
            <button className="remove-btn">&times;</button>
          </div>
          <span className="item-price">€299.00</span>
        </div>
      </div>

   
      <div className="summary-full-box">
        <div className="summary-box">
          <div className="summary-item">
            <span className="label">Subtotal</span>
            <span className="value">€ 1071.00</span>
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
            <span className="value">€ 1071.00</span>
          </div>
        </div>
        <div>
          <button className="checkout-btn">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
