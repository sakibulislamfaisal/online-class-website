import React from "react";
import "./Header.css";
import logo from "../../image/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-nav">
        <nav>
          <a href="/class">Class</a>
          <a href="/subject">Subject</a>
          <a href="/order">Order</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
