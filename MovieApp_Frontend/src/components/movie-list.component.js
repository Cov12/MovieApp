import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MovieTableRow from './MovieTableRow';


export default class MovieList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9000/MovieApp/movies')
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.movies.map((res, i) => {
      return <MovieTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Cast</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}