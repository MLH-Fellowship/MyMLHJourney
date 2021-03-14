import React from "react";
import ReactDOM from "react-dom";
import GithubAuth from "./GithubAuthUI";
import UserContextProvider from "./context/userContext";
import LandingPage from "./cards/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ParentCard } from "./cards/parentCard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/cards">
          <UserContextProvider>
            <GithubAuth />
          </UserContextProvider>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
