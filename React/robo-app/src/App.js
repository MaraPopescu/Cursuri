import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import RobotsView from "./views/RobotsView";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/robot-list'>
          <RobotsView />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
