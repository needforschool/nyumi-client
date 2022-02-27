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

const SignIn: React.FC = () => {
  const router = useHistory();

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
        <AuthForm
          onSubmit={(event) => {
            event.preventDefault();
            router.push(ROUTES.MAIN);
          }}
        >
          <FieldGroup>
            <FieldContainer>
              <Field
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
                type="password"
                id="empasswordail"
                name="password"
                placeholder="Password"
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <AuthButton type={"submit"}>{"Se connecter"}</AuthButton>
            <RegisterButton href={ROUTES.SIGN_UP} outline>
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
