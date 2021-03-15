import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import ThirdCardBackground from "./images/fellowship.png";

import "./styles/card3.css";

const FourthCard = (props) => {
  let obj = props.mlhData;

  console.log(obj);

  return (
    <div>
      <body className="fourthCard">
        <section className="fourth-card-data">
          <img clasName="fourth-card-background" src={ThirdCardBackground} />
        </section>
      </body>
    </div>
  );
};

export default FourthCard;
