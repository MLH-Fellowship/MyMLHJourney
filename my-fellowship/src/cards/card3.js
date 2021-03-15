import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import ThirdCardBackground from "./images/third-card-background2.gif";
import CountUp from "react-countup";
import "./styles/card3.css";

const ThirdCard = (props) => {
  let obj = props.mlhData;

  console.log(obj);

  return (
    <div>
      <body className="ThirdCard">
        <section className="third-card-data">
          <div id="flexbox">
            <div>
              <h1 className="counter-numbers">
                <CountUp end={50} />
              </h1>
              <p className="title">Standups</p>
            </div>
            <div>
              <h1 className="counter-numbers">
                <CountUp end={62} />
              </h1>
              <p className="title">Meeting Hours</p>
            </div>
            <div>
              <h1 className="counter-numbers">
                <CountUp end={12} />
              </h1>
              <p className="title">Show and Tells</p>
            </div>
          </div>
        </section>
        <img clasName="third-card-background" src={ThirdCardBackground} />
      </body>
    </div>
  );
};

export default ThirdCard;
