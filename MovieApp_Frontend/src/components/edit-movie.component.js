import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import CastTableRow from './CastTableRow';
import axios from 'axios';
export default class EditMovie extends Component {
  constructor(props) {
    super(props)
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieGenre = this.onChangeMovieGenre.bind(this);
    this.onChangeMovieRating = this.onChangeMovieRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeMovieActor = this.onChangeMovieActor.bind(this);
    this.onChangeMovieActorFirstName = this.onChangeMovieActorFirstName.bind(this);
    this.onChangeMovieActorLastName = this.onChangeMovieActorLastName.bind(this);
    this.onChangeMovieActorGender = this.onChangeMovieActorGender.bind(this);
    this.onChangeMovieActorCharacterName = this.onChangeMovieActorCharacterName.bind(this);
    this.addActor = this.addActor.bind(this);
    this.state = {
      title: '',
      genre: '',
      rating: '',
      actor: [],
      movieActor: {},
      firstName: '',
      lastName: '',
      gender: '',
      characterName: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:9000/MovieApp/movies/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          genre: res.data.genre,
          rating: res.data.rating,
          actor: res.data.actor
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeMovieTitle(e) {
    this.setState({ title: e.target.value })
  }
  onChangeMovieGenre(e) {
    this.setState({ rating: e.target.value })
  }
  onChangeMovieRating(e) {
    this.setState({ genre: e.target.value })
  }
  onChangeMovieActor(e) {
    this.setState({ actor: e.target.value })
  }
  onChangeMovieActorFirstName(e) {
    this.setState({ firstName: e.target.value })
  }
  onChangeMovieActorLastName(e) {
    this.setState({ lastName: e.target.value })
  }
  onChangeMovieActorGender(e) {
    this.setState({ gender: e.target.value })
  }
  onChangeMovieActorCharacterName(e) {
    this.setState({ characterName: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const movieObject = {
      id: this.props.match.params.id,
      title: this.state.title,
      genre: this.state.genre,
      rating: this.state.rating,
      actor: this.state.actor
    };
    axios.put('http://localhost:9000/MovieApp/movies/' + this.props.match.params.id, movieObject)
      .then((res) => {
        console.log('Movie successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    window.location.reload(false);
  }
  addActor(e) {
    e.preventDefault();
    const addedMovieActor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      characterName: this.state.characterName
    };
    axios.post('http://localhost:9000/MovieApp/actors/', addedMovieActor)
      .then((res) => {
        this.state.actor.push(res.data)
        console.log('Actor successfully added')
      }).catch((error) => {
        console.log(error)
      })
    this.setState({ firstName: '', lastName: '', gender: '', characterName: '' })
  }
  DataTable() {
    return this.state.actor.map((res, i) => {
      return <CastTableRow obj={res} key={i} />;
    });
  }
  render() {
    const mystyle = {
      marginTop: "30px",
      width: "100%"
    };
    return (
      <Container>
        <Row>
          <Col>
            <div className="form-wrapper">
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Title">
                  <Form.Label><h2>Title</h2></Form.Label>
                  <Form.Control type="text" value={this.state.title} onChange={this.onChangeMovieTitle} />
                </Form.Group>
                <Form.Group controlId="Genre">
                  <Form.Label><h2>Genre</h2></Form.Label>
                  <Form.Control type="text" value={this.state.genre} onChange={this.onChangeMovieGenre} />
                </Form.Group>
                <Form.Group controlId="Rating">
                  <Form.Label><h2>Rating</h2></Form.Label>
                  <Form.Control as="select" type="number" value={this.state.rating} onChange={this.onChangeMovieRating}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Button onClick={this.onSubmit} variant="outline-info" size="lg" block="block" >Update Movie</Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row style={mystyle}>
          <Col>
            <div className="table-wrapper">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Character Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.DataTable()}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="First-Name">
                <Form.Label><h4>First Name</h4></Form.Label>
                <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeMovieActorFirstName} />
              </Form.Group>
              <Form.Group controlId="Last-Name">
                <Form.Label><h4>Last Name</h4></Form.Label>
                <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeMovieActorLastName} />
              </Form.Group>
              <Form.Group controlId="Gender">
                <Form.Label><h4>Gender</h4></Form.Label>
                <Form.Control type="text" value={this.state.gender} onChange={this.onChangeMovieActorGender} />
              </Form.Group>
              <Form.Group controlId="Character">
                <Form.Label><h4>Character</h4></Form.Label>
                <Form.Control type="text" value={this.state.characterName} onChange={this.onChangeMovieActorCharacterName} />
              </Form.Group>
              <Button onClick={this.addActor} size="lg" variant="outline-info" block="block" type="submit">Add Actor/Actress</Button>
            </Form>
          </Col>
        </Row>
      </Container>);
  }
}