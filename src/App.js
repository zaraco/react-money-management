import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Add from "./Component/Add";
import Show from "./Component/Show";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

class App extends Component{
  constructor() {
    super();

  }
  render() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>

                <Router>
                  <Switch>
                    <Route exact path="/" component={Add}/>
                    <Route path="/show" component={Show}/>
                  </Switch>
                </Router>
                    </Col>
                </Row>
            </Container>

        </div>

    );
  }
}

export default App;
