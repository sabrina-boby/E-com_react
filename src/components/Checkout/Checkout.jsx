import React from "react";
import "./Checkout.css";
import chr1 from "../../Assets/chr1.png";
import chr2 from "../../Assets/chr2.png";
import chr3 from "../../Assets/chr3.png";
import chr4 from "../../Assets/chr4.png";
import chr5 from "../../Assets/chr5.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const AddToCard = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="title">
          <h2>An overview of your order</h2>
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
                    <img src={chr1} className="item-image" alt="" />
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
                    <img src={chr2} class="item-image" alt="" />
                    <span className="item-name">Gaming Chair</span>
                  </div>
                </div>
                <button className="remove-btn">&times;</button>
              </div>
              <span className="item-price">€ 249.00</span>
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
                    <img src={chr3} class="item-image" alt="" />
                    <span className="item-name">Timber Ride Padded</span>
                  </div>
                </div>
                <button className="remove-btn">&times;</button>
              </div>
              <span className="item-price">€59.00</span>
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
                    <img src={chr4} class="item-image" alt="" />
                    <span className="item-name">Isolated Wooden Rock</span>
                  </div>
                </div>
                <button className="remove-btn">&times;</button>
              </div>
              <span className="item-price">€165.00</span>
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
                    <img src={chr5} className="item-image" alt="" />
                    <span className="item-name">Colored Wooden Chair</span>
                  </div>
                </div>
                <button className="remove-btn">&times;</button>
              </div>
              <span className="item-price">€299.00</span>
            </div>
          </div>
        </div>

        <div className="title">
          <h2>Oder details</h2>
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddToCard;
