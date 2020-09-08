package com.sellozo.movie.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sellozo.movie.beans.Actor;

@Repository
public interface ActorDAO extends JpaRepository<Actor, Integer>{

}
