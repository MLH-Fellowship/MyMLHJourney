import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";

const SecondCard = (props) => {
  let obj = props.contributionData;

  console.log(obj)

  return (
    <div>
      <h1>This is 2nd card</h1>
      <p>
        {/* {obj.name} by {obj.location} */}
      </p>
    </div>
  );
}

export default SecondCard;
