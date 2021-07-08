import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/GOVTFiles/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <PrivateRoute exact path="/" component={Profile}>
            <Profile />
          </PrivateRoute>

          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
