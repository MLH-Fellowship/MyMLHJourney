import React from "react";
import ReactDOM from "react-dom";
import GithubAuth from "./GithubAuthUI";
import UserContextProvider from "./context/userContext";
import LandingPage from "./cards/LandingPage";

ReactDOM.render(
  <React.StrictMode>
    {/* <UserContextProvider>
      <GithubAuth />
    </UserContextProvider> */}
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);
