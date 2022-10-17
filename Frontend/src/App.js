import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Users></Users>
        </Route>

        <Route path="/places/new" exact={true}>
          <NewPlace></NewPlace>
        </Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
