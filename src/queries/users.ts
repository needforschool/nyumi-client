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

export const UPDATE_USER_GOALS = gql`
  mutation register($step: String!, $smoke: String!) {
    updateUserGoals(goals: { step: $step, smoke: $smoke }) {
      id
      email
      token
      firstname
      goals {
        step
        smoke
      }
    }
  }
`;
