import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      token
      firstname
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register($email: String!, $password: String!, $firstname: String!) {
    register(
      registerInput: {
        email: $email
        password: $password
        firstname: $firstname
      }
    ) {
      id
      email
      token
      firstname
    }
  }
`;

export const RECOVER_USER = gql`
  mutation recoverUser($email: String!) {
    recoverUser(email: $email) {
      success
    }
  }
`;
