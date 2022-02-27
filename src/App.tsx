import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
//import Home from "./screens/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import { ThemeProvider } from "styled-components";
import SignUp from "./screens/Auth/SignUp";
import ROUTES from "./constants/routes";
import SignIn from "./screens/Auth/SignIn";
import Recovery from "./screens/Auth/Recovery";
import RecoveryChange from "./screens/Auth/Recovery/Change";
import Account from "./screens/Account";
import Statistic from "./screens/Statistic";
import Welcome from "./screens/Welcome";
import Goal from "./screens/Goal";
import React from "react";
import useThemeDetector from "./hooks/useThemeDetector";
import GlobalStyle from "./components/Layout/GlobalStyle";
import themes from "./services/themes";
import RecoveryCode from "./screens/Auth/Recovery/Code";
import Home from "./screens/Home";

setupIonicReact();

const App: React.FC = () => {
  const isDarkTheme = useThemeDetector();

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <GlobalStyle />
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path={ROUTES.WELCOME}>
              <Welcome />
            </Route>
            <Route exact path={ROUTES.GOAL}>
              <Goal />
            </Route>
            <Route exact path={ROUTES.STATISTICS}>
              <Statistic />
            </Route>
            <Route exact path={ROUTES.ACCOUNT}>
              <Account />
            </Route>
            <Route exact path={ROUTES.RECOVERY_CHANGE}>
              <RecoveryChange />
            </Route>
            <Route exact path={ROUTES.RECOVERY_CODE}>
              <RecoveryCode />
            </Route>
            <Route exact path={ROUTES.RECOVERY}>
              <Recovery />
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
              <SignIn />
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
              <SignUp />
            </Route>
            <Route exact path={ROUTES.MAIN}>
              <Home />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
