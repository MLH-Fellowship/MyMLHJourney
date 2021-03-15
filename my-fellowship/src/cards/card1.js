import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import "./styles/card1.css";
import FirstCardBackground from "./images/first-card-background.gif";
import githubIcon from "./images/github.png";
import webIcon from "./images/web.png";

const FirstCard = (props) => {
  // let obj = props.contributionData;
  let obj = props.userData.user;
  // let obj = props.mlhData;

  console.log(obj);

  return (
    <div className="FirstCard">
      <body>
        <section className="first-card-data">
          <img id="avatar" src={obj.avatarUrl} />
          <p id="name">{obj.name}</p>
          <p className="location">Based in {obj.location}</p>

          <ul className="social-media-list">
            <li>
              <a href={obj.url}>
                <img src={githubIcon} alt="GitHub" title="GitHub" />
              </a>
            </li>
            <li>
              <a href={obj.websiteUrl}>
                <img src={webIcon} alt="Portfolio Website" title="Website" />
              </a>
            </li>
          </ul>
        </section>
        <img className="first-card-background" src={FirstCardBackground} />
      </body>
    </div>
  );
};

export default FirstCard;
