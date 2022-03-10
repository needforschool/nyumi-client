import React from "react";
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
import { AuthContext } from "../../../contexts/Auth";
import { useForm } from "../../../hooks/useForm";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../../../queries/auth";
import APP from "../../../constants/app";

const SignUp: React.FC = () => {
  const router = useHistory();
  const context = React.useContext(AuthContext);

  const registerUserCallback = () => {
    addUser();
  };

  const { onChange, onSubmit, values, valid, setErrors } = useForm(
    registerUserCallback,
    {
      email: "",
      password: "",
      firstname: "",
    }
  );

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
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
          <AuthTitle>{APP.NAME}</AuthTitle>
        </AuthHeader>
        <AuthStepHeader>
          <AuthStepTitle>Commençons</AuthStepTitle>
          <AuthStepDescription>
            Nous avons besoin de mieux vous connaître
          </AuthStepDescription>
        </AuthStepHeader>
        <AuthForm onSubmit={onSubmit}>
          <FieldGroup>
            <FieldContainer>
              <Field
                onChange={onChange}
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
                onChange={onChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <FieldContainer>
              <Field
                onChange={onChange}
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                required
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <AuthButton type={"submit"} valid={valid}>
              {"S'enregistrer"}
            </AuthButton>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

export default SignUp;
