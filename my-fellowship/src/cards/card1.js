import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import "./styles/card1.css";
import FirstCardBackground from "./images/first-card-background.gif";

const FirstCard = (props) => {
  // let obj = props.contributionData;
  let obj = props.userData.user;
  // let obj = props.mlhData;

  console.log(obj);

  return (
    <div className="FirstCard">
      <body>
        <section className="first-card-data">
          <img id="avatar" src={obj.avatarUrl} />
          <p id="name">{obj.name}</p>
          <p id="location">Based in {obj.location}</p>
          <p id="location"></p>
        </section>
        <img className="first-card-background" src={FirstCardBackground} />
      </body>
    </div>
  );
};

export default FirstCard;
