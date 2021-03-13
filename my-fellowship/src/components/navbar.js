import React, { Component, useState } from "react";
import { ReactComponent as CloseMenu } from "./images/menu.svg";
import { ReactComponent as MenuIcon } from "./images/x.svg";
import "./styles/navbar.css";
import logo from "./images/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container logo">
          <a href="#">
            <img href="#main" className="logo" src={logo}></img>
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#about">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#fellowship">FELLOWSHIP</a>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <button href="#journey">MY JOURNEY</button>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <MenuIcon className="menu-icon" />
        ) : (
          <CloseMenu className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
