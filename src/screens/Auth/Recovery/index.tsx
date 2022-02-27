import { useHistory } from "react-router";
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
import ROUTES from "../../../constants/routes";

const Recovery: React.FC = () => {
  const router = useHistory();

  return (
    <Page>
      <AuthContainer>
        <AuthHeader>
          <AuthTitle>Nyumi</AuthTitle>
        </AuthHeader>
        <AuthStepHeader>
          <AuthStepTitle>Mot de passe oublié ?</AuthStepTitle>
          <AuthStepDescription>
            Nous allons t’aider à le récupérer !
          </AuthStepDescription>
        </AuthStepHeader>
        <AuthForm
          onSubmit={(event) => {
            event.preventDefault();
            router.push(ROUTES.RECOVERY_CODE);
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
            <AuthButton type={"submit"}>
              {"Réinitialiser le mot de passe"}
            </AuthButton>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

export default Recovery;
