import React, { Component, useState } from "react";
import { ReactComponent as CloseMenu } from "./images/menu.svg";
import { ReactComponent as MenuIcon } from "./images/x.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/navbar.css";
import logo from "./images/logo.png";
import NavBk from "./images/navbar-bk.png";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container logo">
            <a className="option-color" href="#">
              <img href="#main" className="logo" src={logo}></img>
            </a>
          </div>
          <div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option link" onClick={closeMobileMenu}>
                <a href="#about">ABOUT</a>
              </li>
              <li className="option link" onClick={closeMobileMenu}>
                <a href="#fellowship">FELLOWSHIP</a>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link to="/cards">
                  <button id="start-button" href="#journey">
                    Start
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <MenuIcon className="menu-icon" />
          ) : (
            <CloseMenu className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
