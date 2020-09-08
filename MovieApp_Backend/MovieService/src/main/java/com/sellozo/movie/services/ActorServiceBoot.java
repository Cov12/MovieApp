package com.sellozo.movie.services;

import java.util.HashSet;
import java.util.Set;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sellozo.movie.beans.Actor;
import com.sellozo.movie.repos.ActorDAO;

@Service
public class ActorServiceBoot implements ActorService{
	private Logger log = Logger.getLogger(ActorServiceBoot.class);
	
	@Autowired
	private ActorDAO ad;

	@Override
	public Set<Actor> getActors() {
		log.trace("retrieving all actors from the database: ");
		return new HashSet<>(ad.findAll());
	}

	@Override
	public Actor addActor(Actor a) {
		log.trace("adding actor to the database: " + a);
		Actor actor = ad.save(a);
		return actor;
	}

	@Override
	public Actor getActorById(int id) {
		log.trace("retrieving actor with id: ");
		return ad.findOne(id);
	}

	@Override
	public void updateActor(Actor actor) {
		log.trace("updating the following actor in the database: " + actor);
		ad.save(actor);
	}

	@Override
	public void deleteActor(Actor actor) {
		log.trace("deleting the following actor from the database: " + actor);
		ad.delete(actor);
	}

}
