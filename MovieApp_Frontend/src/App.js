
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateMovie from "./components/create-movie.component";
import EditMovie from "./components/edit-movie.component";
import MovieList from "./components/movie-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/movie-list"} className="nav-link">
                React Movie App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-movie"} className="nav-link">
                  Add Movie
                </Link>
              </Nav>

              <Nav>
                <Link to={"/movie-list"} className="nav-link">
                  Movie List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={MovieList} />
                <Route path="/create-movie" component={CreateMovie} />
                <Route path="/edit-movie/:id" component={EditMovie} />
                <Route path="/movie-list" component={MovieList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;