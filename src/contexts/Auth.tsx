import React from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { User } from "../types/auth";
import ROUTES from "../constants/routes";

const initialState = {
  user: null,
};
if (Cookies.get("jwtToken")) {
  const decodedToken: any = jwtDecode(Cookies.get("jwtToken") || "");

  if (decodedToken.exp * 1000 < Date.now()) {
    Cookies.remove("jwtToken");
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext: React.Context<{
  user?: User | undefined;
  login: (_userData: any) => undefined;
  logout: () => undefined;
}> = React.createContext({
  login: (_userData: any) => undefined,
  logout: () => undefined,
});

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

const AuthProvider = (props: any) => {
  const router = useHistory();
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const login = (userData: any) => {
    Cookies.set("jwtToken", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = async () => {
    await router.push(ROUTES.SIGN_IN);
    Cookies.remove("jwtToken");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
