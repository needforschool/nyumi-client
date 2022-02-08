import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Page: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <Container>
      {title && (
        <Header>
          {" "}
          <Title>{title}</Title>
        </Header>
      )}
      {children}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  padding: 15px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.normal};
`;

export default Page;
