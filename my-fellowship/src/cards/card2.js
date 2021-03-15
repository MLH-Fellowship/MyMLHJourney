import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import SecondCardBackground from "./images/second-card-background.gif";
import "./styles/card2.css";

const SecondCard = (props) => {
  let obj = props.contributionData;
  // Number of PRs the user has in the MLH-Organization repos
  let numOfPRs = obj.search.edges.length;
  // Total lines added
  let linesAdded = 0;
  // Total lines deleted
  let linesDeleted = 0;
  // Approx amount of coffee cups ~ number of PRs
  let coffeeCups = numOfPRs;
  // Links to all the PRs
  let prLinks = [];
  // Dates of creation of PRs
  let prDates = [];
  // Repositories contributed to
  let repoList = [];

  for (var i = 0; i < obj.search.edges.length; i++) {
    let prObj = obj.search.edges[i].node;

    prLinks.push(prObj.url);
    prDates.push(prObj.createdAt);

    if (!repoList.includes(prObj.headRepository.name)) {
      repoList.push(prObj.headRepository.name);
    };

    linesAdded += prObj.additions;
    linesDeleted += prObj.deletions;
  }

  return (
    <div>
      <body className="ThirdCard">
        <section className="third-card-data">
          <div id="flexbox">
            <div>
              <h1 className="counter-numbers">dfsd</h1>
              <p className="title">Standups</p>
            </div>
            <div>
              <h1 className="counter-numbers">fdsdf</h1>
              <p className="title">Meeting Hours</p>
            </div>
          </div>
          <div id="flexbox" className="flexbox-gap">
            <div>
              <h1 className="counter-numbers">dfsd</h1>
              <p className="title">Standups</p>
            </div>
            <div>
              <h1 className="counter-numbers">fdsdf</h1>
              <p className="title">Meeting Hours</p>
            </div>
          </div>
        </section>
        <img clasName="third-card-background" src={SecondCardBackground} />
      </body>
    </div>
  );
};

export default SecondCard;
