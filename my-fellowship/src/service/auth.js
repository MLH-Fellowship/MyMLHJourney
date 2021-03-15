import firebase from "../configs/firebase-config.js";

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      let userName = res.additionalUserInfo.username;
      let userToken = res.credential.accessToken;
      return { userToken, userName };
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
