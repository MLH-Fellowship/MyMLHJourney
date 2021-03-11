import firebase from "../configs/firebase-config.js";

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
