import Page from "../../components/Page";
import styled from "styled-components";
import Field from "../../components/Form/Field";
import Button from "../../components/Layout/Button";
import React from "react";
import { useForm } from "../../hooks/useForm";
import { UPDATE_USER_GOALS } from "../../queries/users";
import { useMutation } from "@apollo/react-hooks";

const Goal: React.FC = () => {
  const updateUserCallback = () => {
    updateUserGoals();
  };

  const { values, onChange, onSubmit, errors, setErrors } = useForm(
    updateUserCallback,
    {
      goals: "",
    }
  );

  const [updateUserGoals] = useMutation(UPDATE_USER_GOALS, {
    variables: values,
    update(_, { data: { updateUserGoals: _userData } }) {
      //   login(_userData);
    },
  });

  return (
    <Page toolbar>
      <Content>
        <Header>
          <Title>Mes Objectifs</Title>
          <Subtitle>Choisir mes objectifs</Subtitle>
        </Header>
        <Goals>
          <GoalContainer onSubmit={() => console.log("gooooooaaal")}>
            <GoalName>Nombre de pas par jour</GoalName>
            <GoalField
              type="number"
              id={"steps"}
              name={"steps"}
              min={0}
              onChange={onChange}
              errors={errors}
              setErrors={setErrors}
              error={errors?.steps}
              placeholder=""
              autoFocus
              required
            />
          </GoalContainer>
          <GoalContainer>
            <GoalName>Nombre de cigarettes par jour</GoalName>
            <GoalField
              type="number"
              id={"smoke"}
              name={"smoke"}
              min={0}
              onChange={onChange}
              errors={errors}
              setErrors={setErrors}
              error={errors?.smoke}
              placeholder=""
              autoFocus
              required
            />
          </GoalContainer>
        </Goals>
        <GoalButton
          onClick={(event) => {
            onSubmit(event);
          }}
        >
          Démarrer l’expérience !
        </GoalButton>
      </Content>
    </Page>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.darker};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const GoalName = styled.h3`
  width: 120px;
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  text-align: center;
`;

const Goals = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const GoalContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const GoalField = styled(Field)`
  margin-top: 10px;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: ${({ theme }) => theme.size.title};
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const GoalButton = styled(Button)`
  font-size: ${({ theme }) => theme.size.small};
  margin-top: 20px;
`;

export default Goal;
