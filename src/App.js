import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/searchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
