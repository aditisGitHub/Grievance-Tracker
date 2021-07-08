import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
