import styled from "styled-components";
import Page from "../../components/Page";
import { AddSquare, Kanban, Setting2 } from "iconsax-react";
import { useHistory } from "react-router";
import ROUTES from "../../constants/routes";

const Home: React.FC = () => {
  const router = useHistory();

  return (
    <Page toolbar>
      <Header>
        <Setting2
          onClick={() => {
            router.push(ROUTES.ACCOUNT);
          }}
        />
      </Header>
      <Content>
        <Card color={"rgb(46, 213, 115)"}>
          <CardHeader>
            <CardTitle>{"Conso de cigarette aujourd’hui"}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardSection>
              <CardCounter>{3}</CardCounter>
            </CardSection>
            <CardSection>
              <AddSquare size={40} />
              <CardSectionText>{"Ajouter"}</CardSectionText>
            </CardSection>
            <CardSection
              onClick={() => {
                router.push(ROUTES.STATISTICS_SMOKE);
              }}
            >
              <Kanban size={30} />
              <CardSectionText>{"Voir plus"}</CardSectionText>
            </CardSection>
          </CardContent>
        </Card>
        <Card color={"rgb(255, 165, 2)"}>
          <CardHeader>
            <CardTitle>{"Nombre de pas"}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardSection>
              <CardCounter>{1934}</CardCounter>
            </CardSection>
            <CardSection
              onClick={() => {
                router.push(ROUTES.STATISTICS_WALK);
              }}
            >
              <Kanban size={30} />
              <CardSectionText>{"Voir plus"}</CardSectionText>
            </CardSection>
          </CardContent>
        </Card>
      </Content>
    </Page>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Card = styled.section<{ color?: string }>`
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.layout.darkest};
  border-radius: 6px;
  padding: 10px;
  margin-top: 15px;

  :first-child {
    margin-top: 0;
  }
`;

const CardHeader = styled.header``;

const CardTitle = styled.h1`
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const CardContent = styled.h1`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const CardCounter = styled.span`
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.size.title};
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CardSectionText = styled.h2`
  font-size: ${({ theme }) => theme.size.small};
`;

export default Home;
