package com.sellozo.movie.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sellozo.movie.beans.Movie;
import com.sellozo.movie.services.MovieService;

@RestController
@RequestMapping(value="/movies")
public class MovieController {
	@Autowired
	private MovieService ms;
	
	@GetMapping()
	public ResponseEntity<Set<Movie>> getMovies(){
		return ResponseEntity.ok(ms.getMovies());
	}
	
	@PostMapping
	public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
		return ResponseEntity.status(201).body(ms.addMovie(movie));
	}
	
	@GetMapping(value="/{movieId}")
	public ResponseEntity<Movie>  getMovie(@PathVariable("movieId") int id) {
		Movie movie = ms.getMovieById(id);
		if(movie != null) {
			return ResponseEntity.ok(movie);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping(value="/{movieId}")
	public ResponseEntity<Movie> updateMovie(@PathVariable("movieId") int id, @RequestBody Movie movie) {
		ms.updateMovie(movie);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping(value="/{movieId}")
	public ResponseEntity<Void> deleteMovie(@PathVariable("movieId") int id) {
		ms.deleteMovie(ms.getMovieById(id));
		return ResponseEntity.noContent().build();	
		}
}
