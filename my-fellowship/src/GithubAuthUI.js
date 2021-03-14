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
import { useHistory } from 'react-router-dom';
import { ParentCard } from "./cards/parentCard";

const githubProvider = new firebase.auth.GithubAuthProvider();

function GithubAuthUI() {
  const history = useHistory();
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
      {user.userToken ?
        <ParentCard /> :
        <div>
          <h1>Github Authentication</h1>
          <button onClick={() => handleOnClick(githubProvider)}>
            {" "}
          Sign in with Github
        </button>
        </div>}
    </ApolloProvider>
  );
}

export default GithubAuthUI;
