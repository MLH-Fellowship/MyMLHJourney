import Rreact, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/landingPage.css";
import Navbar from "../components/navbar";
import globe from "./images/globe.png";
import Conclusion from "./images/last-section.gif";
import MovingCircles from "./images/moving-circles2.gif";
import Footer from "../components/footer.js";
import sun from "./images/sun.png";
import hills from "./images/hills.png";
import card from "./images/card.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <body>
          <Navbar />
          <section className="two-columns">
            <div className="header-section">
              <h1 id="header-title" className="mlh-journey">
                Welcome to Your MLH Journey
              </h1>
              <button>TRACK MY JOURNEY</button>
            </div>
            <div>
              <img id="globe" src={globe} />
            </div>
          </section>
          <img className="hills" src={hills} />

          <br />
          <div id="wrapper" className="sun-section">
            <div id="sticky" className="sun-section">
              <img className="sticky" src={sun} />
            </div>
            <section className="center-text top-overlay">
              <h1 id="main-title">
                Get a Glimpse of <br /> Your Progress
              </h1>
              <p>
                View your achievemements and insights <br /> through handmade
                cards
              </p>
            </section>

            <section className="two-columns ">
              <div className="center-image">
                <img className="data" src={card} />
              </div>
              <div className="center-image">
                <img className="data" src={card} />
              </div>
            </section>

            <section className="two-columns">
              <div className="center-image">
                <img className="data" src={card} />
              </div>
              <div className="center-image">
                <img className="data" src={card} />
              </div>
            </section>
          </div>
          <br />

          <section className="center-text">
            <img id="moving-circles" src={MovingCircles} />
            <p>It is time to discover your journey</p>
          </section>
          <section className="last-section">
            <img src={Conclusion} />

            <div className="center-button">
              <Link to="/cards">
                <button className="start-my-journey">Start My Journey</button>
              </Link>
            </div>
          </section>

          <Footer />
        </body>
      </div>
    );
  }
}

export default LandingPage;
