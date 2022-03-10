import React from "react";
import styled from "styled-components";
import { GlobalThemeContext } from "../../contexts/GlobalTheme";
import { Theme as TTheme } from "../../types/themes";

interface Props {
  name: string;
  color: string;
  theme: TTheme;
}

const Theme = ({ name, color, theme }: Props) => {
  const { setGlobalTheme } = React.useContext(GlobalThemeContext);
  const handleClick = () => {
    localStorage.setItem("theme", theme.id.toString());
    setGlobalTheme(theme);
  };

  return (
    <Container onClick={handleClick}>
      <Palette color={color} />
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;

  :first-child {
    margin-left: 0;
  }
`;

const Palette = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 80px;
  width: 80px;
  border-radius: 6px;
  border: 1px solid rgb(255, 255, 255);
`;

const Name = styled.span`
  margin-top: 10px;
`;

export default Theme;
