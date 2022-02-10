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
import Page from "../../../components/Page";
import ROUTES from "../../../constants/routes";

const Home: React.FC = () => {
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
        <AuthForm>
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
                autoFocus
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <AuthButton type={"submit"}>{"Se connecter"}</AuthButton>
            <AuthButton type={"submit"} outline>
              {"S'enregistrer"}
            </AuthButton>

            <AuthLink href={ROUTES.RECOVERY}>
              {"Mot de passe oublié ?"}
            </AuthLink>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

export default Home;
