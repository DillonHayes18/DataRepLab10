import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Display } from './components/display';
import { Update } from './components/updateShoe';
import { Home } from './components/home';
import { AddShoe } from './components/addShoe';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        {/* NavBar Setup */}
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav.Link href="/display">Display Shoes</Nav.Link>
              <Nav.Link href="/addShoe">Add Shoes</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          {/* Routing to pages */}
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/addShoe' component={AddShoe} />
            <Route path='/display' component={Display} />
            <Route path='/updateShoe/:id' component={Update}></Route> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
