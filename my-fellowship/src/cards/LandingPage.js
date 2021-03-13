import Rreact, { Component } from "react";
import "./styles/landingPage.css";
import Navbar from "../components/navbar";
import globe from "./images/globe.png";
import Conclusion from "./images/last-section.gif";
import MovingCircles from "./images/moving-circles2.gif";
import sun from "./images/sun.png";
class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <body>
          <Navbar />
          <h1> asdfasd</h1>
          <section className="two-columns">
            <div className="header-section">
              <h1 id="header-title">
                Welcome to <br /> Your MLH Journey
              </h1>
              <button>TRACK MY PROJECT</button>
            </div>
            <div>
              <img id="globe" src={globe} />
            </div>
          </section>

          {/* <section className="center-text">
            <h1 id="header-title">
              Get a Glimpse of <br /> Your Progress
            </h1>
          </section>

          <div className="sun-cont container">
            <div className="sun-offset sun"></div>

          </div>
          <img src={sun} /> */}
          <section>
            <img src={MovingCircles} />
          </section>

          <section>
            <button>Start My Journey</button>
            <img src={Conclusion} />
          </section>
        </body>
      </div>
    );
  }
}

export default LandingPage;
