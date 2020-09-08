package com.sellozo.movie.services;

import java.util.HashSet;
import java.util.Set;

import com.sellozo.movie.beans.Movie;
import com.sellozo.movie.repos.MovieDAO;
import org.apache.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceBoot implements MovieService {
	private Logger log = Logger.getLogger(MovieServiceBoot.class);
	
	@Autowired
	private MovieDAO md;
	
	@Override
	public Movie getMovieById(int id) {
		log.trace("retrieving movie with id: ");
		return  md.findOne(id);
	}

	@Override
	public void updateMovie(Movie movie) {
		log.trace("updating the following movie in the database: " + movie);
		md.save(movie);
	}

	@Override
	public void deleteMovie(Movie movie) {
		log.trace("deleting the following movie from the database: " + movie);
		md.delete(movie);
	}

	@Override
	public Movie addMovie(Movie m) {
		Movie movie = md.save(m);
		log.trace("movie added: " +  movie);
		return movie;
	}

	@Override
	public Set<Movie> getMovies() {
		log.trace("retrieving all movies from the database: ");
		return new HashSet<>(md.findAll());
	}
	
	
}
