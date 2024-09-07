import React from "react";
import "./ProductList.css";
import Image from "../../Assets/Image.png";
import Added from "../../Assets/Added.png";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
const Products = () => {
  return (
    
    <div className="container">
      <div className="menu">
        <button className="menu-item active">Rocking chair</button>
        <button className="menu-item">Side chair</button>
        <button className="menu-item">Lounge chair</button>
      </div>
      {/* <hr/> */}
      <div className="cards-section">
        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">
            <img src={Added} alt="" />
            Add to cart
          </button>
        </div>

        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">
            <img src={Added} alt="" />
            Add to cart
          </button>
        </div>

        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          {/* <img src="recliner-chair.jpg" alt="Recliner Chair" class="product-image"> */}
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">Add to cart</button>
        </div>

        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          {/* <img src="recliner-chair.jpg" alt="Recliner Chair" class="product-image"> */}
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">Add to cart</button>
        </div>

        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          {/* <img src="recliner-chair.jpg" alt="Recliner Chair" class="product-image"> */}
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">Add to cart</button>
        </div>

        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          {/* <img src="recliner-chair.jpg" alt="Recliner Chair" class="product-image"> */}
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">Add to cart</button>
        </div>

        <div className="card">
          <img src={Image} alt="Recliner Chair" className="product-image" />
          <h2 className="product-name">Recliner Chair Wood</h2>
          <p className="price">
            <span className="current-price">€299.00</span>
            <span className="original-price">€350.00</span>
            <span className="discount">30% OFF</span>
          </p>
          <p className="description">
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </p>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div> 
   
  );
};

export default Products;
