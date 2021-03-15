import react from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useUser } from "../context/userContext";

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
      <h1>This is 2nd card</h1>
      <p>
        {/* {obj.name} by {obj.location} */}
      </p>
    </div>
  );
}

export default SecondCard;
