import Page from "../../components/Page";
import styled from "styled-components";

const Welcome: React.FC = () => {
  return (
    <Page>
      <Container>
        <Parametre>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Parametre>
        <Suiview>
          <SuiviTitle>Conso de cigarette aujourd’hui</SuiviTitle>
          <SuiviNbr>
            <SuiviChiffre>3</SuiviChiffre>
            <SuiviAjout>
              image
              <SuiviTitle>Ajouter</SuiviTitle>
            </SuiviAjout>
            <SuiviPlus>
              image
              <SuiviTitle>Voir plus</SuiviTitle>
            </SuiviPlus>
          </SuiviNbr>
        </Suiview>
        <Suivieworange>
          <SuiviTitle>Nombre de pas</SuiviTitle>
          <SuiviNbr>
            <SuiviChiffre>1934</SuiviChiffre>
            <SuiviPlus>
              image
              <SuiviTitle>Voir plus</SuiviTitle>
            </SuiviPlus>
          </SuiviNbr>
        </Suivieworange>
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

const Parametre = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: center;
  color: ${({ theme }) => theme.colors.layout.darker};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 40px auto 20px;
  height: 20px;
  border-radius: 5px;
  width: 90%;
`;

const Suiview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 5px auto;
  height: 120px;
  border-radius: 5px;
  width: 90%;
  background-color: #2ed573;
`;

const Suivieworange = styled(Suiview)`
  background-color: #ffa502;
`;

const SuiviTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.lightest};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 10px;
`;

const SuiviNbr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: auto;
  width: 90%;
  height: 70px;
`;

const SuiviChiffre = styled.h1`
  color: ${({ theme }) => theme.colors.text.darkest};
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-left: 10px;
`;

const SuiviAjout = styled.a``;

const SuiviPlus = styled.a``;

export default Welcome;
