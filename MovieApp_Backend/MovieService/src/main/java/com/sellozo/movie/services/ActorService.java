package com.sellozo.movie.services;

import java.util.Set;

import com.sellozo.movie.beans.Actor;

public interface ActorService {
	Set<Actor> getActors();
	Actor addActor(Actor actor); 
	Actor getActorById(int id);
	void updateActor(Actor actor);
	void deleteActor(Actor actor);
}
