import { Component, OnInit  } from '@angular/core';
import { MovieService } from './../../shared/services/movie-service.service';
import { Movie } from './../../shared/models/movie-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie(Number(this.route.snapshot.paramMap.get('themovie')));
  }
  goBack() {
    this.router.navigate([`/home`]);
  }
}
