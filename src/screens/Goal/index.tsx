import Page from "../../components/Page";
import styled from "styled-components";
import Field from "../../components/Form/Field";
import Button from "../../components/Layout/Button";

const Goal: React.FC = () => {
  return (
    <Page>
      <Container>
        <Header>
          <Title>Mes Objectifs</Title>
          <Subtitle>Choisir mes objectifs</Subtitle>
        </Header>
        <Goals>
          <GoalContainer>
            <GoalName>Nombre de pas par jour</GoalName>
            <GoalField
              type="number"
              id={"steps"}
              name={"steps"}
              min={0}
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
              placeholder=""
              autoFocus
              required
            />
          </GoalContainer>
        </Goals>
        <GoalButton>Démarrer l’expérience !</GoalButton>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  height: 100%;
`;

const Header = styled.div`
  margin-top: 50px;
  margin-left: 20px;
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
  font-size: ${({ theme }) => theme.size.tiny};
  font-weight: ${({ theme }) => theme.weight.bold};
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
  width: 50%;
  height: 120px;
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
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 80px auto;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  text-align: center;
`;

export default Goal;
