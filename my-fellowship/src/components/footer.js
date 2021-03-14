import React from "react";
import "./styles/footer.css";
import logo from "./images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div>
          <div className="hero3">
            <article>
              <img className="logo" src={logo}></img>
            </article>
            <article>
              <p id="contact" class="header-text text pointer">
                {" "}
                Contact Us
              </p>
              <p class="p-text text pointer">legadoteam@gmail.com</p>
            </article>
            <article>
              {/* <p class="header-text text pointer"> Join Discord</p> */}
              <p class="text p-text">© 2021 My MLH Journey</p>
            </article>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
