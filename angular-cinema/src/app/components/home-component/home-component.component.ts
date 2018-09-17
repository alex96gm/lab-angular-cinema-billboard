import { Component, } from '@angular/core';
import { MovieService } from './../../shared/services/movie-service.service';
import { Movie } from './../../shared/models/movie-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  movies: Array<Movie> = this.movieService.getMovies();

  goMovie(movie: Movie): void {
    this.router.navigate([`/movie/${ movie.id }`]);
  }
}
