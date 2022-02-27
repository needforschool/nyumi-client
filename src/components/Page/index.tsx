import { IonPage, IonToolbar } from "@ionic/react";
import styled from "styled-components";

interface Props {
  toolbar?: boolean;
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({ children, toolbar = false }: Props) => {
  return (
    <Container>
      {toolbar && <Toolbar />}
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
`;

export default Page;
