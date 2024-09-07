import React from "react";
import "./ProductList.css";
import chair1 from "../../Assets/chair1.png";
import chair2 from "../../Assets/chair2.png";
import chair3 from "../../Assets/chair3.png";
import chair4 from "../../Assets/chair4.png";
import chair5 from "../../Assets/chair5.png";
import chair6 from "../../Assets/chair6.png";
import Added from "../../Assets/Added.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
const Products = () => {
  return (
    <>
    <Header></Header>
    <div className="container">
      <div className="menu">
        <button className="menu-item active">Rocking chair</button>
        <button className="menu-item">Side chair</button>
        <button className="menu-item">Lounge chair</button>
      </div>

      <div className="right-site">
        <div className="cards-section">
          <div className="card">
            <img src={chair1} alt="Recliner Chair" className="product-image" />
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
            <img src={chair2} alt="Recliner Chair" className="product-image" />
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
            <img src={chair3} alt="Recliner Chair" className="product-image" />
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
            <img src={chair4} alt="Recliner Chair" className="product-image" />
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
            <img src={chair5} alt="Recliner Chair" className="product-image" />
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
            <img src={chair6} alt="Recliner Chair" className="product-image" />
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
        </div>
        {/* pagination */}
        <div className="pagination-parent">
          <div class="pagination">
            <button class="pagination-arrow" disabled>
              &lt;
            </button>
            <button class="pagination-button active">1</button>
            <button class="pagination-button">2</button>
            <span class="pagination-ellipsis">...</span>
            <button class="pagination-button">9</button>
            <button class="pagination-button">10</button>
            <button class="pagination-arrow">&gt;</button>
          </div>
        </div>
        {/* pagination */}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Products;
