import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Second from "./components/Second";
import First from "./components/First/First";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route render={() => <Route exact path="/" component={Second} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
