import { useMutation } from "@apollo/react-hooks";
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
import { useForm } from "../../../hooks/useForm";
import { RECOVER_USER } from "../../../queries/auth";

const Recovery: React.FC = () => {
  const router = useHistory();

  const [success, setSuccess] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState({
    email: "",
  });

  const recoverCallback = () => {
    recover();
  };

  const { onChange, onSubmit, values, valid } = useForm(recoverCallback, {
    email: "",
  });

  const [recover, { loading }] = useMutation(RECOVER_USER, {
    update(_, { data }) {
      setSuccess(data?.recoverUser.success);
    },
    onError(err) {
      setErrors({
        email: err.graphQLErrors[0].message,
      });
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
          <AuthStepTitle>Mot de passe oublié ?</AuthStepTitle>
          <AuthStepDescription>
            Nous allons t’aider à le récupérer !
          </AuthStepDescription>
        </AuthStepHeader>
        <AuthForm onSubmit={onSubmit}>
          <FieldGroup>
            <FieldContainer>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoFocus
                required
                value={values.email.toLowerCase()}
                error={errors.email}
                setErrors={setErrors}
                errors={errors}
                onChange={onChange}
              />
            </FieldContainer>
          </FieldGroup>
          <FieldGroup>
            <AuthButton type={"submit"} loading={loading} valid={valid}>
              {"Réinitialiser le mot de passe"}
            </AuthButton>
            <AuthButton
              valid
              outline
              onClick={() => {
                router.push(ROUTES.SIGN_IN);
              }}
            >
              {"Retour"}
            </AuthButton>
          </FieldGroup>
        </AuthForm>
      </AuthContainer>
    </Page>
  );
};

export default Recovery;
