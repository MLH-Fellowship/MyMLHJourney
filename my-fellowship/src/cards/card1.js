import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_USER_INFO } from "../data/GraphQL";
import { useUser } from "../context/userContext";
import "./styles/card1.css";

const FirstCard = (props) => {
  const user = useUser(); //gets!! the value of set user
  //think of hooks like a cloud , and when u useUser u get the info from the cloud
  console.log(props.contributionData);
  console.log(user);
  //put a new var for loading etc so that it dosent clash
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_ALL_USER_INFO, { variables: { username: user.userName } });

  if (userLoading) return "Loading...";
  if (userError) return `Error! ${userError.message}`;

  console.log(userData);

  let obj = userData.user;
  return (
    <div key={obj.id}>
      <p>
        {obj.name} by {obj.location}
      </p>
    </div>
  );
}

export default FirstCard;
