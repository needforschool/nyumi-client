import { IonPage } from "@ionic/react";
import { BackSquare } from "iconsax-react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ROUTES from "../../constants/routes";

interface Props {
  toolbar?: boolean;
  header?: React.ReactNode;
  disableBack?: boolean;
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({
  children,
  toolbar = false,
  disableBack,
  header,
}: Props) => {
  const router = useHistory();
  return (
    <Container>
      {toolbar && (
        <Toolbar>
          {!disableBack && (
            <BackSquare onClick={() => router.push(ROUTES.MAIN)} />
          )}
          {header && header}
        </Toolbar>
      )}
      {children}
    </Container>
  );
};

const Container = styled(IonPage)`
  background-color: ${({ theme }) => theme.colors.layout.darker};
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const Toolbar = styled.header`
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export default Page;
