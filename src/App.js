import React, { useState } from "react";
import { GlobalStyle, Container, AppFrame, AppHeader, Body } from "./style";
import ReactLogo from "./assets/logo.svg";
import TodoForm from "./components/TodoForm";
import { DarkTheme } from "./muiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [spinspeed, setSpinSpeed] = useState(20);
  

  


  const handleClickEasterEgg = () => {
    if (spinspeed > 1) {
      setSpinSpeed(spinspeed - 1);
    }
    if (spinspeed <= 5) {
      setSpinSpeed(0.5);
    }
  };
  return (
    <React.Fragment>
      <GlobalStyle />
      <MuiThemeProvider theme={DarkTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Container>
              <AppFrame>
                <AppHeader spinspeed={spinspeed}>
                  <img
                    src={ReactLogo}
                    onClick={handleClickEasterEgg}
                    alt="react-logo"
                  />
                  <h1>React Todo</h1>
                </AppHeader>
                <Body>
                  <TodoForm />
                  <TodoList />
                </Body>
              </AppFrame>
            </Container>
          </PersistGate>
        </Provider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
