import { IonPage } from "@ionic/react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({ children }: Props) => {
  console.log(children);
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

export default Page;
