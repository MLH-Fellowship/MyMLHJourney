import React from "react";
import ReactDOM from "react-dom";
import GithubAuth from "./GithubAuthUI";
import UserContextProvider from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <GithubAuth />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
