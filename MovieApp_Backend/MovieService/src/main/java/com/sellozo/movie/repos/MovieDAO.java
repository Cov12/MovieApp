package com.sellozo.movie.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sellozo.movie.beans.Movie;

@Repository
public interface MovieDAO extends JpaRepository<Movie, Integer>{

}
