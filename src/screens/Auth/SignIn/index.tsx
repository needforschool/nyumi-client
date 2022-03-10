import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Field from "../../../components/Form/Field";
import {
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthHeader,
  AuthLink,
  AuthStepDescription,
  AuthStepHeader,
  AuthStepTitle,
  AuthTitle,
  FieldContainer,
  FieldGroup,
} from "../../../components/Layout/Auth";
import Link from "../../../components/Link";
import Page from "../../../components/Page";
import ROUTES from "../../../constants/routes";
import { AuthContext } from "../../../contexts/Auth";
import { useForm } from "../../../hooks/useForm";
import { LOGIN_USER } from "../../../queries/auth";

const SignIn: React.FC = () => {
  const router = useHistory();
  const context = React.useContext(AuthContext);

  const loginUserCallback = () => {
    loginUser();
  };

  const { onChange, onSubmit, values, setErrors, valid } = useForm(
    loginUserCallback,
    {
      email: "",
      password: "",
    }
  );

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: _userData } }) {
      context.login(_userData);
      router.push(ROUTES.MAIN);
    },
    onError(err: any) {
      setErrors(err.graphQLErrors[0].extensions?.exception.errors);
    },
    variables: values,
  });

  return (
    <Page>
      <AuthContainer>
        <AuthHeader>
          <AuthTitle>Nyumi</AuthTitle>
        </AuthHeader>
        <AuthStepHeader>
          <AuthStepTitle>Bienvenue,</AuthStepTitle>
          <AuthStepDescription>
            Connecte toi pour accéder à l’application
          </AuthStepDescription>
        </AuthStepHeader>
        <AuthForm onSubmit={onSubmit}>
          <FieldGroup>
            <FieldContainer>
              <Field
                onChange={onChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoFocus
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <FieldContainer>
              <Field
                onChange={onChange}
                type="password"
                id="empasswordail"
                name="password"
                placeholder="Password"
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <AuthButton type={"submit"} valid={valid}>
              {"Se connecter"}
            </AuthButton>
            <RegisterButton href={ROUTES.SIGN_UP} valid outline>
              {"S'enregistrer"}
            </RegisterButton>

            <AuthLink href={ROUTES.RECOVERY}>
              {"Mot de passe oublié ?"}
            </AuthLink>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

const RegisterButton = styled(({ children, ...props }) => (
  <AuthButton as={Link} {...props}>
    {children}
  </AuthButton>
))``;

export default SignIn;
