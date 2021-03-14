import { gql } from "apollo-boost";

//here we are doing apollo boost - this query will have these params 
// if we have more params, we put them in query , and use it in where ever u need it 
export const GET_ALL_USER_INFO = gql`
  query($username: String!) {
    user(login: $username) {
      name
      login
      avatarUrl
      id
      email
      location
      url
      websiteUrl
      company
      issues {
        totalCount
      }
      pullRequests {
        totalCount
      }
      issueComments {
        totalCount
      }
      commitComments {
        totalCount
      }
    }
  }
`;

export const GET_CONTRIBUTION_INFO = gql`
  query ($username: String!) {
  search (query: "org:MLH-Fellowship is:pr author:$username", type:ISSUE, last: 100) {
    edges {
      node {
        ... on PullRequest {
          url
          createdAt
          additions
          deletions
          headRepository {
            name
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
}
`;

export const GET_MLH_INFO = gql`
  query ($username: String!) {
  organization(login: "MLH-Fellowship") {
    teams(first: 100, userLogins: ["$username"]) {
      edges {
        node {
          name
          members {
            totalCount
            nodes {
              name
              login
              avatarUrl
              email
              location
              url
            }
          }
          repositories {
            totalCount
          }
        }
      }
    }
  }
}
`;
