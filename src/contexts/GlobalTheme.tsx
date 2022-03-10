import React from "react";
import { ThemeProvider } from "styled-components";
import useThemeDetector from "../hooks/useThemeDetector";
import themes from "../services/themes";
import { Theme } from "../types/themes";

const GlobalThemeContext = React.createContext({
  globalTheme: themes.light,
  setGlobalTheme: (theme: Theme) => undefined,
});

const GlobalThemeProvider = (props: any) => {
  const isDarkTheme = useThemeDetector();
  const [globalTheme, setGlobalTheme] = React.useState(
    isDarkTheme ? themes.dark : themes.light
  );

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log("theme:", theme);

    switch (theme) {
      case "1":
        setGlobalTheme(themes.light);
        localStorage.setItem("theme", themes.light.id.toString());
        break;
      case "0":
        setGlobalTheme(themes.dark);
        localStorage.setItem("theme", themes.dark.id.toString());
        break;
      default:
        setGlobalTheme(isDarkTheme ? themes.dark : themes.light);
        localStorage.setItem(
          "theme",
          isDarkTheme ? themes.dark.id.toString() : themes.light.id.toString()
        );
        break;
    }
  }, []);

  return (
    <GlobalThemeContext.Provider
      value={{ globalTheme, setGlobalTheme }}
      {...props}
    >
      <ThemeProvider theme={globalTheme}>{props.children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  );
};

export { GlobalThemeContext, GlobalThemeProvider };
