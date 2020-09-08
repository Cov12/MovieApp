import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';  


export default class MovieTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this);
    }
    deleteMovie() {
        axios.delete('http://localhost:9000/MovieApp/movies/' + this.props.obj.id)
            .then((res) => {
                console.log('Movie successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            window.location.reload(false);
    }
    render() {
        return (
            <React.Fragment>
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.genre}</td>
                <td>{this.props.obj.rating}</td>
                <td>
                {this.props.obj.actor.map(function(d, idx){
                    return (<li key={idx}>{d.firstName + ' ' + d.lastName}</li>)
                })}
                </td>

                <td>
                    
                    <Button size="sm" variant="outline-info">
                        <Link className="edit-link" to={"/edit-movie/" + this.props.obj.id}>
                        Edit
                        </Link>
                    </Button>
                    <Button onClick={this.deleteMovie} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
            </React.Fragment>
        );
    }
}