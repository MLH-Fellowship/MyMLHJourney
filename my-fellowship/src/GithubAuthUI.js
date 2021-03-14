import React from "react";
import socialMediaAuth from "./service/auth";
import UserInfo from "./data/GraphQL";
import { setContext } from "@apollo/client/link/context";
import { useSetUser, useUser } from "./context/userContext";
import {
  ApolloProvider,
  ApolloClient,
  gql,
  InMemoryCache,
  useQuery,
  createHttpLink,
} from "@apollo/client";
import firebase from "./configs/firebase-config";
import FirstCard from "./cards/card1";
import CodeCard from "./cards/codePrIssuesCard/codePrIssues";
import SecondCard from "./cards/card2";
import ThirdCard from "./cards/card3";
import FourthCard from "./cards/card4";
import FifthCard from "./cards/card5";
import SixthCard from "./cards/card6";

const githubProvider = new firebase.auth.GithubAuthProvider();

function GithubAuthUI() {
  const user = useUser();
  const setUser = useSetUser();

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    // react hooks plz learn this
    return {
      headers: {
        ...headers,
        authorization: user.userToken ? `Bearer ${user.userToken}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
    setUser(() => res);
  };
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Github Authentication</h1>
        <button onClick={() => handleOnClick(githubProvider)}>
          {" "}
          Sign in with Github
        </button>
        {user.userToken ? <CodeCard/> : null}
      </div>
    </ApolloProvider>
  );
}

export default GithubAuthUI;
