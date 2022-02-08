import React from "react";
import { DefaultTheme } from "styled-components";
import themes from "../services/themes";

const ThemeContext = React.createContext<{
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}>({
  theme: themes.light,
  setTheme: () => undefined,
});

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState<DefaultTheme>(themes.light);

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme(themes.dark);
  }

  return <ThemeContext.Provider value={{ theme, setTheme }} {...props} />;
};

export { ThemeContext, ThemeProvider };
