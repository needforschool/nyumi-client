import { useState } from "react";
import styled from "styled-components";
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
  const [validCode, setValidCode] = useState<boolean>(false);

  return (
    <Page>
      <AuthContainer>
        <AuthHeader>
          <AuthTitle>Nyumi</AuthTitle>
        </AuthHeader>
        {validCode ? (
          <>
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
          </>
        ) : (
          <>
            <AuthStepHeader>
              <AuthStepTitle>Entrez le code de confirmation</AuthStepTitle>
              <AuthStepDescription>
                Vous avez dû le recevoir par mail
              </AuthStepDescription>
            </AuthStepHeader>
            <CodeGroup>
              {[...Array(4)].map((i: number) => (
                <CodeContainer key={i}>
                  <CodeField
                    type="number"
                    id={`code-${i}`}
                    name={`code-${i}`}
                    min={0}
                    max={9}
                    placeholder=""
                    autoFocus
                    required
                  />
                </CodeContainer>
              ))}
            </CodeGroup>
            <ButtonGroup>
              <AuthButton
                type={"submit"}
                onClick={() => {
                  setValidCode(true);
                }}
              >
                {"Suivant"}
              </AuthButton>
            </ButtonGroup>
          </>
        )}
      </AuthContainer>
    </Page>
  );
};
const CodeGroup = styled(FieldGroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const CodeContainer = styled(FieldContainer)`
  margin-left: 8px;
`;
const CodeField = styled(Field)`
  width: 60px;
  height: 100px;
  text-align: center;
  font-size: ${({ theme }) => theme.size.title};
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ButtonGroup = styled(FieldGroup)`
  width: 93%;
`;

export default RecoveryChange;
