import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          {/* <Route exact path="/dashboard">
          <Dashboard />
        </Route> */}
          <Route exact path="/">
            <Profile />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
