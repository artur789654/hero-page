import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logologo.png"
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-wrap flex">
        <div className="logo-wrap">
          <img src={logo} alt="logo Productly" />
        </div>
        <nav className="nav-wrap">
          <ul className="menu flex ">
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Customers</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
        </nav>
        <div className="buttons flex">
          <a href="/" className="flex btn btn-primary">
            Sign In
          </a>
          <a href="/" className="flex btn btn-default">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
