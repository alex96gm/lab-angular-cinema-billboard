import { Injectable } from '@angular/core';
import { Movie } from './../models/movie-model';
import {MovieData} from '../../data/sample-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Array<Movie> = MovieData;

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getMovie(id): Movie {
    return this.movies.find(item => item.id === id);
  }
}
