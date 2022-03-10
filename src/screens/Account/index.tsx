import { useHistory } from "react-router";
import styled from "styled-components";
import Theme from "../../components/Account/Theme";
import Field from "../../components/Form/Field";
import {
  AuthButton,
  AuthForm,
  AuthStepDescription,
  AuthStepHeader,
  AuthStepTitle,
  FieldContainer,
  FieldGroup,
} from "../../components/Layout/Auth";
import Page from "../../components/Page";
import ROUTES from "../../constants/routes";
import themes from "../../services/themes";

const Account: React.FC = () => {
  const router = useHistory();

  return (
    <Page toolbar>
      <AuthStepHeader>
        <AuthStepTitle>Compte</AuthStepTitle>
        <AuthStepDescription>
          Gérez votre compte et vos objectifs
        </AuthStepDescription>
      </AuthStepHeader>
      <AuthForm onSubmit={() => console.log("hello world")}>
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
              placeholder="Password"
              required
            />
          </FieldContainer>
        </FieldGroup>
        <FieldGroup>
          <AuthButton
            valid
            outline
            onClick={() => router.push(ROUTES.RECOVERY)}
          >
            {"Changer de mot de passe"}
          </AuthButton>
        </FieldGroup>
      </AuthForm>

      <Content>
        <Section>
          <SubTitle>Objectifs</SubTitle>
          <Row></Row>
        </Section>
        <Section>
          <SubTitle>Thème</SubTitle>
          <Row>
            <Theme
              name={"Clair"}
              color={"rgb(225, 224, 223)"}
              theme={themes.light}
            />
            <Theme
              name={"Sombre"}
              color={"rgb(30, 31, 32)"}
              theme={themes.dark}
            />
          </Row>
        </Section>
        <AuthButton valid onClick={() => console.log("save")}>
          {"Sauvegarder"}
        </AuthButton>
      </Content>
    </Page>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const Row = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export default Account;
