import styled from "styled-components";
import Page from "../../components/Page";
import { AddSquare, Kanban, Setting2 } from "iconsax-react";
import { useHistory } from "react-router";
import ROUTES from "../../constants/routes";
import { useCallback, useEffect, useState } from "react";
import { insertCigarette, retrieveCigarettes } from "../../services/storage";
import { Cigarette } from "../../types/cigarette";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SMOKE } from "../../queries/smoke";

import { Health } from "@awesome-cordova-plugins/health";

const Home: React.FC = () => {
  const router = useHistory();

  const [todayCigarettes, setTodayCigarettes] = useState<number>(
    retrieveCigarettes("today").length
  );

  const [addSmoke] = useMutation(ADD_SMOKE);

  const handleCigaretteAdd = useCallback(() => {
    const cigarettes: Cigarette[] = insertCigarette();
    setTodayCigarettes(cigarettes.length);

    addSmoke();
  }, []);

  useEffect(() => {
    Health.isAvailable().then((isAvailable) => {
      console.log("health available", isAvailable);
      if (isAvailable) {
        Health.requestAuthorization([
          {
            read: ["steps"],
          },
        ]).then((value: any) => {
          console.log("health request", value);
        });
      }
    });
  }, []);

  return (
    <Page
      toolbar
      disableBack
      header={
        <Setting2
          onClick={() => {
            router.push(ROUTES.ACCOUNT);
          }}
        />
      }
    >
      <Content>
        <Card color={"rgb(46, 213, 115)"}>
          <CardHeader>
            <CardTitle>{"Conso de cigarette aujourd’hui"}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardSection>
              <CardCounter>{todayCigarettes}</CardCounter>
            </CardSection>
            <CardSection onClick={() => handleCigaretteAdd()}>
              <AddSquare size={60} />
              <CardSectionText>{"Ajouter"}</CardSectionText>
            </CardSection>
            <CardSection
              onClick={() => {
                router.push(ROUTES.STATISTICS_SMOKE);
              }}
            >
              <Kanban size={50} />
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
              <Kanban size={50} />
              <CardSectionText>{"Voir plus"}</CardSectionText>
            </CardSection>
          </CardContent>
        </Card>
      </Content>
    </Page>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Card = styled.section<{ color?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.layout.darkest};
  border-radius: 6px;
  height: 150px;
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
  height: 100%;
  justify-content: space-between;
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
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.small};
`;

export default Home;
