package com.sellozo.movie.services;

import java.util.Set;

import com.sellozo.movie.beans.Movie;

public interface MovieService {
	public Movie getMovieById(int i);
	public void updateMovie(Movie b);
	public void deleteMovie(Movie b);
	public Movie addMovie(Movie movie);
	public Set<Movie> getMovies();
}
