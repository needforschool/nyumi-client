import { useMutation } from "@apollo/react-hooks";
import React from "react";
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
import { StatusBar } from "@awesome-cordova-plugins/status-bar";
import { AuthContext } from "../../contexts/Auth";
import { useForm } from "../../hooks/useForm";
import { DELETE_USER, UPDATE_USER } from "../../queries/users";
import themes from "../../services/themes";
import capitalize from "../../utils/captitalize";
import { clearStorage } from "../../services/storage";

const Account: React.FC = () => {
  const router = useHistory();

  const { user, login, logout } = React.useContext(AuthContext);

  const updateUserCallback = () => {
    updateUser();
  };

  const { values, onChange, onSubmit, errors, setErrors } = useForm(
    updateUserCallback,
    {
      email: user?.email || "",
      firstname: user?.firstname || "",
    }
  );

  const [updateUser] = useMutation(UPDATE_USER, {
    variables: values,
    update(_, { data: { updateUser: _userData } }) {
      login(_userData);
    },
  });

  const [deleteUser] = useMutation(DELETE_USER, {
    update() {
      clearStorage();
      logout();
      router.push(ROUTES.SIGN_IN);
    },
  });

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
              type={"text"}
              id={"firstname"}
              name={"firstname"}
              placeholder={"First Name"}
              errors={errors}
              setErrors={setErrors}
              error={errors?.firstname}
              onChange={onChange}
              value={capitalize(values.firstname)}
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
              onChange={onChange}
              value={values.email.toLowerCase()}
              error={errors.email}
              setErrors={setErrors}
              errors={errors}
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
            <Theme
              name={"Rouge"}
              color={"rgb(214, 48, 49)"}
              theme={themes.red}
            />
          </Row>
        </Section>
        <AuthButton
          valid
          onClick={(event) => {
            onSubmit(event);
          }}
        >
          {"Sauvegarder"}
        </AuthButton>
        <DeleteAccountButton outline onClick={() => deleteUser()}>
          {"Supprimer mon compte"}
        </DeleteAccountButton>
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

const DeleteAccountButton = styled(AuthButton)`
  color: ${({ theme }) => theme.colors.accent.red};
  border-color: ${({ theme }) => theme.colors.accent.red};
`;

export default Account;
