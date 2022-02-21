import Page from "../../components/Page";
import styled from "styled-components";

const Welcome: React.FC = () => {
  return (
    <Page>
      <WelContainer>
        <WelHeader>
          <WelTitle>Mes Objectif</WelTitle>
          <WelSubtitle>Choisir mes objectifs</WelSubtitle>
        </WelHeader>
        <WelObjectifs>
          <WelObjectif>
            <Welname>Nombre de pas par jour</Welname>
            <Welcube>2500</Welcube>
          </WelObjectif>
          <WelObjectif>
            <Welname>Nombre de cigarettes par jour</Welname>
            <Welcube>5</Welcube>
          </WelObjectif>
          <WelObjectif>
            <Welname>Nombre de pas par jour</Welname>
            <Welcube>2500</Welcube>
          </WelObjectif>
          <WelObjectif>
            <Welname>Nombre de cigarettes par jour</Welname>
            <Welcube>5</Welcube>
          </WelObjectif>
        </WelObjectifs>
        <WelBtn>Démarrer l’expérience !</WelBtn>
      </WelContainer>
    </Page>
  );
};

export const WelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  height: 100%;
`;

export const WelHeader = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WelTitle = styled.h1`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const WelSubtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.darker};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const Welname = styled.h3`
  width: 120px;
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.size.tiny};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const WelObjectifs = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const WelObjectif = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Welcube = styled.div`
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

export const WelBtn = styled.button`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 80px auto;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  text-align: center;
`;

export default Welcome;
