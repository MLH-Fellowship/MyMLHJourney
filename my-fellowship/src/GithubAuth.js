// import { Component } from "react";
import "dotenv";

require("dotenv").config();
const axios = require("axios");
const express = require("express");
const path = require("path");




console.log("App listening on port 3000");
class GithubAuth extends Component {

const app = express();
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/public/githubPage.html"));
});

app.get("/auth", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/oauth-callback", ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
  const opts = { headers: { accept: "application/json" } };
  axios
    .post("https://github.com/login/oauth/access_token", body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      console.log("My token:", token);
      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

app.listen(3000);
  render() {
    return (
      <div>
        Oh la la
        <h1>Github Sign up</h1>
        <button href="/auth">Sign In</button>
      </div>
    );
  }
}
export default GithubAuth;

//http://localhost:3000/auth/github/callback
