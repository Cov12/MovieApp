import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateMovie extends Component {
  constructor(props) {
    super(props)
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieGenre = this.onChangeMovieGenre.bind(this);
    this.onChangeMovieRating = this.onChangeMovieRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: '',
      genre: '',
      rating: ''
    }
  }
  onChangeMovieTitle(e) {
    this.setState({ title: e.target.value })
  }
  onChangeMovieGenre(e) {
    this.setState({ genre: e.target.value })
  }
  onChangeMovieRating(e) {
    this.setState({ rating: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const movieObject = {
      id: 0,
      title: this.state.title,
      genre: this.state.genre,
      rating: this.state.rating
    };
    axios.post('http://localhost:9000/MovieApp/movies/', movieObject)
      .then(res => console.log(res.data));
    
    this.props.history.push('/movie-list')
  }
  render() {
    return (
      <div className="form-wrapper">
        <Form>
          <Form.Group controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.onChangeMovieTitle} />
          </Form.Group>
          <Form.Group controlId="Genre">
            <Form.Label>Genre</Form.Label>
            <Form.Control type="text" value={this.state.genre} onChange={this.onChangeMovieGenre} />
          </Form.Group>
          <Form.Group controlId="Rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select" type="number" value={this.state.rating} onChange={this.onChangeMovieRating}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button onClick={this.onSubmit} variant="danger" size="lg" block="block" type="submit">
            Add Movie
        </Button>
        </Form>
      </div>);
  }
}