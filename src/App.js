import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { IndexPage, LoginPage, MovieInfoPage } from "./pages";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/movie-info/:imdbID" component={MovieInfoPage} />
        <PrivateRoute exact path="/" component={IndexPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}
