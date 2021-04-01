import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Carlist from './Components/CarList.js';
import About from './Components/About.js';
import Home from './Components/Home.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// I want to create a 3 page application using
// the react router app and also including the 
// CRUD app into it.
// This is the first steps to link all the pages 
// together.


export default function App () {
  return (
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Link to="/">
              <Button variant="outline-primary">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline-primary">
                About
              </Button>
            </Link>
            <Link to="/carlist">
              <Button variant="outline-primary">
                Car Application Form
              </Button>
            </Link>
          </ButtonGroup>
          <Switch>
            <Route path='/about'><About/>
            </Route>
            <Route path='/carlist'><Carlist/>
            </Route>
            <Route path='/'><Home/></Route>
          </Switch>
        </div>
      </Router>
    </Container>
  )
}
