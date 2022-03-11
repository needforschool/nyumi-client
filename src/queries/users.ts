import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      email
      firstname
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstname: String!) {
    updateUser(firstname: $firstname) {
      id
      email
      firstname
    }
  }
`;
