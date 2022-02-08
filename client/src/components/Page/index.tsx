import { IonHeader, IonPage, IonToolbar } from "@ionic/react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Page: React.FC<Props> = ({ children, title }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled(IonPage)`
  background-color: ${({ theme }) => theme.colors.layout.darker};
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Header = styled(IonHeader)`
  padding: 15px;
`;

const Toolbar = styled(IonToolbar)`
  --background: ${({ theme }) => theme.colors.layout.darker};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.normal};
`;

export default Page;
