import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_USER_INFO } from "../data/GraphQL";
import { useUser } from "../context/userContext";

const ThirdCard = (props) => {
  let obj = props.mlhData;

  console.log(obj)

  return (
    <div>
      <h1>This is 3rd card</h1>

      <p>
        {/* {obj.name} by {obj.location} */}
      </p>
    </div>
  );
}

export default ThirdCard;
