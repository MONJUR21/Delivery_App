import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin,calculateTotalCartItems }) => {
  const [menu, setMenu] = useState("home");
  const handleMenuClick = (e, menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={(e) => handleMenuClick(e, "home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <li>
          <a
            href="#explore-menu"
            onClick={(e) => handleMenuClick(e, "menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={(e) => handleMenuClick(e, "mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={(e) => handleMenuClick(e, "contact us")}
            className={menu === "contact us" ? "active" : ""}
          >
            contact us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {calculateTotalCartItems()>0?<div className="dot">{calculateTotalCartItems()}</div>:""}
          
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
