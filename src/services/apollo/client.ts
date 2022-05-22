import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const uri =
  (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/graphql";

const httpLink = new HttpLink({
  uri,
  credentials: "same-origin",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Mskn ${token}` : "",
    },
  };
});

export const client: any = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
