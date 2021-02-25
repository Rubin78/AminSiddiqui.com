import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from './components/First/First';
function App() {
  return (
    <Router>
        <div className="App">
          
          <Switch>
            <Route exact path="/" component={First} />
       
            
          
            
            <Route render={() => <h2 >404 Page Not Found</h2>} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
