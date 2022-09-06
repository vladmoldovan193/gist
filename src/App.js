import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GistsView from "./views/GistsView";
import DetailedGistView from "./views/DetailedGistView";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#268991',
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path = "/">
              <GistsView/>
          </Route>
          <Route exact path = "/detailed">
            <DetailedGistView/>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
