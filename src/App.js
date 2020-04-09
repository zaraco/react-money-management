import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Add from "./Component/Add";
import Show from "./Component/Show";

class App extends Component{
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
        <div>

          <Router>
            <Switch>
              <Route exact path="/" component={Add}/>
              <Route path="/show" component={Show}/>
            </Switch>
          </Router>
        </div>

    );
  }
}

export default App;
