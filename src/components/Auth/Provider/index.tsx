import React from "react";
import { useHistory } from "react-router";
import ROUTES from "../../../constants/routes";
import { AuthContext } from "../../../contexts/Auth";
import Loading from "../../Loading";

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const { user } = React.useContext(AuthContext);
  const router = useHistory();

  console.log(user);

  React.useEffect(() => {
    if (!user) router.push(ROUTES.SIGN_IN);
  }, [user, router]);

  return user ? <>{children}</> : <Loading />;
};

export default AuthProvider;
