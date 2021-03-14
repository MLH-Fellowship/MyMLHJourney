import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import "./styles/card1.css";

const FirstCard = (props) => {
  // let obj = props.contributionData;
  let obj = props.userData;
  // let obj = props.mlhData;

  console.log(obj)

  return (
    <div>
      <p>
        This is working!
        {/* {obj.name} by {obj.location} */}
      </p>
    </div>
  );
}

export default FirstCard;
