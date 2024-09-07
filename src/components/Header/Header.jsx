import React, { useState } from "react";
import "./Header.css";
import icon from "../../Assets/icon.png";
import Account from "../../Assets/Account.png";
import basket from "../../Assets/basket.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={icon} alt="Logo" />
          <a href="#">
            <h2>
              <span className="brand">
                Furni<span className="blue-text">Flex</span>
              </span>
            </h2>
          </a>
        </div>
        <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Custom</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="button">
          <img src={basket} alt="" />
          <img src={Account} alt="" />
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
