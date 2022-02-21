import Page from "../../components/Page";
import styled from "styled-components";

const Goal: React.FC = () => {
  return (
    <Page>
      <Container>
        <Header>
          <Title>Mes Objectif</Title>
          <Subtitle>Choisir mes objectifs</Subtitle>
        </Header>
        <Objectifs>
          <Objectif>
            <Name>Nombre de pas par jour</Name>
            <Cube>2500</Cube>
          </Objectif>
          <Objectif>
            <Name>Nombre de cigarettes par jour</Name>
            <Cube>5</Cube>
          </Objectif>
          <Objectif>
            <Name>Nombre de pas par jour</Name>
            <Cube>2500</Cube>
          </Objectif>
          <Objectif>
            <Name>Nombre de cigarettes par jour</Name>
            <Cube>5</Cube>
          </Objectif>
        </Objectifs>
        <Btn>Démarrer l’expérience !</Btn>
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

const Name = styled.h3`
  width: 120px;
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.size.tiny};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const Objectifs = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Objectif = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Cube = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.layout.light};
  color: #fff;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 80px auto;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  text-align: center;
`;

export default Goal;
