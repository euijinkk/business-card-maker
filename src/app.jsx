import "./app.css";
import styled, { ThemeProvider } from "styled-components";
import Login from "./components/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker";

function App({ authService }) {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  background-color: gray;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
