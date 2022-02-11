import Field from "../../../../components/Form/Field";
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
} from "../../../../components/Layout/Auth";
import Page from "../../../../components/Page";

const RecoveryChange: React.FC = () => {
  return (
    <Page>
      <AuthContainer>
        <AuthHeader>
          <AuthTitle>Nyumi</AuthTitle>
        </AuthHeader>
        <AuthStepHeader>
          <AuthStepTitle>Réinitialisez votre mot de passe</AuthStepTitle>
          <AuthStepDescription>
            Ne l&apos;oubliez pas la prochaine fois !
          </AuthStepDescription>
        </AuthStepHeader>
        <AuthForm>
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
            <AuthButton type={"submit"}>{"Enregistrer"}</AuthButton>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

export default RecoveryChange;
