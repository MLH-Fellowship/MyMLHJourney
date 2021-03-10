import React from "react";
import { githubProvider } from "./configs/authMethod";
import socialMediaAuth from "./service/auth";

function GithubAuthUI() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div>
      <h1>Github Authentication</h1>
      <button onClick={() => handleOnClick(githubProvider)}>
        {" "}
        Sign in with Github
      </button>
    </div>
  );
}

export default GithubAuthUI;
