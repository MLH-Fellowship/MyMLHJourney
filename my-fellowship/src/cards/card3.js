import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_USER_INFO } from "../data/GraphQL";
import { useUser } from "../context/userContext";
import ThirdCardBackground from "./images/third-card-background.gif";
import "./styles/card3.css";

const ThirdCard = (props) => {
  let obj = props.mlhData;

  console.log(obj);

  return (
    <div>
      <body className="ThirdCard">
        <section className="third-card-data"></section>
        <img clasName="third-card-background" src={ThirdCardBackground} />
      </body>
    </div>
  );
};

export default ThirdCard;
