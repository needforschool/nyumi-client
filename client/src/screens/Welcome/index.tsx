import Page from "../../components/Page";
import {
  WelContainer,
  WelHeader,
  WelTitle,
  WelSubtitle,
  WelObjectifs,
  WelObjectif,
  Welname,
  Welcube,
  WelBtn,
} from "../../components/Layout/Welcome";

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

export default Welcome;
