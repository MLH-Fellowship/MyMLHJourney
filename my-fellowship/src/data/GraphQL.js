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
