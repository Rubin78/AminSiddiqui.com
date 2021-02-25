import React from 'react';

import '../App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Second from './components/Second';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            render={() => <Route exact path="/second" component={Second} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
