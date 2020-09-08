package com.sellozo.movie.beans;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.sellozo.movie.beans.Actor;

@Entity
@Table(name="movies")
public class Movie {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="movies")
	@SequenceGenerator(name="movies", sequenceName="movies_seq", allocationSize=1)
	private int id;
	@Column(name="title")
	private String title;
	@Column(name="rating")
	private int rating;
	@Column(name="genre")
	private String genre;
	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL,orphanRemoval=true)
	@JoinTable(name="movie_actor",
			joinColumns=@JoinColumn(name="movie_id"),
			inverseJoinColumns=@JoinColumn(name="actor_id"))	
	private Set<Actor> actor;
	public Movie() {
		super();
	}
	public Movie(int id, String title, int rating, String genre, Set<Actor> actor) {
		super();
		this.id = id;
		this.title = title;
		this.rating = rating;
		this.genre = genre;
		this.actor = actor;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public Set<Actor> getActor() {
		return actor;
	}
	public void setActor(Set<Actor> actor) {
		this.actor = actor;
	}
	@Override
	public String toString() {
		return "Movie [id=" + id + ", title=" + title + ", rating=" + rating + ", genre=" + genre + ", actor=" + actor
				+ "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((actor == null) ? 0 : actor.hashCode());
		result = prime * result + ((genre == null) ? 0 : genre.hashCode());
		result = prime * result + id;
		result = prime * result + rating;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Movie other = (Movie) obj;
		if (actor == null) {
			if (other.actor != null)
				return false;
		} else if (!actor.equals(other.actor))
			return false;
		if (genre == null) {
			if (other.genre != null)
				return false;
		} else if (!genre.equals(other.genre))
			return false;
		if (id != other.id)
			return false;
		if (rating != other.rating)
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	
}
