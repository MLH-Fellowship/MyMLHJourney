import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_USER_INFO } from "../data/GraphQL";
import { useUser } from "../context/userContext";

function ThirdCard() {
  const user = useUser(); //gets!! the value of set user
  //think of hooks like a cloud , and when u useUser u get the info from the cloud
  console.log(user);
  //put a new var for loading etc so that it dosent clash
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_ALL_USER_INFO, { variables: { username: user.userName } }); //this is where you can specify which eact query u want

  if (userLoading) return "Loading...";
  if (userError) return `Error! ${userError.message}`;

  console.log(userData);

  let obj = userData.user;

  return (
    <div key={obj.id}>
      <h1>This is 3th card</h1>

      <p>
        {obj.name} by {obj.location}
      </p>
    </div>
  );
}

export default ThirdCard;
