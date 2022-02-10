import Field from "../../../components/Form/Field";
import {
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthHeader,
  AuthStepDescription,
  AuthStepHeader,
  AuthStepTitle,
  AuthTitle,
  FieldContainer,
  FieldGroup,
} from "../../../components/Layout/Auth";
import Page from "../../../components/Page";

const SignUp: React.FC = () => {
  return (
    <Page>
      <AuthContainer>
        <AuthHeader>
          <AuthTitle>Nyumi</AuthTitle>
        </AuthHeader>
        <AuthStepHeader>
          <AuthStepTitle>Commençons</AuthStepTitle>
          <AuthStepDescription>
            Nous avons besoin de mieux vous connaître
          </AuthStepDescription>
        </AuthStepHeader>
        <AuthForm>
          <FieldGroup>
            <FieldContainer>
              <Field
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Prénom"
                autoFocus
                required
              />
            </FieldContainer>
          </FieldGroup>
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
                id="password"
                name="password"
                placeholder="Mot de passe"
                autoFocus
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <AuthButton type={"submit"}>{"S'enregistrer"}</AuthButton>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

export default SignUp;
