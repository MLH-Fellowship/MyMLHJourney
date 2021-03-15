import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";
import SecondCardBackground from "./images/second-card-background.gif";
import CountUp from "react-countup";

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
  console.log(obj);
  console.log(numOfPRs);
  console.log(repoList);
  for (var i = 0; i < obj.search.edges.length; i++) {
    let prObj = obj.search.edges[i].node;

    prLinks.push(prObj.url);
    prDates.push(prObj.createdAt);

    if (!repoList.includes(prObj.headRepository.name)) {
      repoList.push(prObj.headRepository.name);
    }

    linesAdded += prObj.additions;
    linesDeleted += prObj.deletions;
  }

  return (
    <div>
      <body>
        <section className="second-card-data">
          <div id="flexbox">
            <div className="left-al">
              <h1 className="card2-nums">{linesAdded}</h1>
              <p>
                LINES OF CODE <br /> ADDED
              </p>
            </div>
            <div className="right-al">
              <h1 className="card2-nums">{linesDeleted}</h1>
              <p>
                LINES OF CODE <br /> DELETED
              </p>
            </div>
          </div>
          <div id="flexbox" className="flexbox-gap">
            <div className="left-al">
              <h1 className="card2-nums">{numOfPRs}</h1>
              <p>
                NUMBER OF PULL <br /> REQUESTS
              </p>
            </div>
            <div className="right-al">
              <h1 className="repos extra-right">{` ${repoList[0]} ${repoList[1]}  `}</h1>
              <p className="extra-right ">Repositories you committed to</p>
            </div>
          </div>
        </section>

        <img clasName="third-card-background" src={SecondCardBackground} />
      </body>
    </div>
  );
};

export default SecondCard;
