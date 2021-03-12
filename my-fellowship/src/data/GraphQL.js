import { gql } from "apollo-boost";

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
