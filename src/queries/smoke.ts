import gql from "graphql-tag";

export const GET_SMOKES = gql`
  {
    getAllSmoke {
      createdAt
    }
  }
`;

export const ADD_SMOKE = gql`
  mutation addSmoke {
    addSmoke
  }
`;
