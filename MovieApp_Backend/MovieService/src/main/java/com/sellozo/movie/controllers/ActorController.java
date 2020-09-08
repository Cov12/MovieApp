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

import com.sellozo.movie.beans.Actor;
import com.sellozo.movie.services.ActorService;

@RestController
@RequestMapping(value="/actors")
public class ActorController {
	@Autowired
	private ActorService as;
	
	@GetMapping()
	public ResponseEntity<Set<Actor>> getActors() {
		return ResponseEntity.ok(as.getActors());
	}
	
	@PostMapping
	public ResponseEntity<Actor> addActor(@RequestBody Actor actor) {
		return ResponseEntity.status(201).body(as.addActor(actor));
	}
	
	@GetMapping(value="/{actorId}")
	public ResponseEntity<Actor> getActor(@PathVariable("actorId") int id) {
		Actor actor = as.getActorById(id);
		if(actor != null) {
			return ResponseEntity.ok(actor); 
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping(value="/{actorId}")
	public ResponseEntity<Actor> updateActor(@PathVariable("actorId") int id, @RequestBody Actor actor) {
		as.updateActor(actor);
		return ResponseEntity.ok(as.getActorById(id));
	}
	
	@DeleteMapping(value="/{actorId}")
	public ResponseEntity<Void> deleteActor(@PathVariable("actorId") int id) {
		as.deleteActor(as.getActorById(id));
		return ResponseEntity.noContent().build();	
	}
}
