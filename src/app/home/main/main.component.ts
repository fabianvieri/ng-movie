import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MovieService } from '../movie.service';
import { Movie } from '../../shared/interfaces';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';

@Component({
  standalone: true,
  imports: [MovieCarouselComponent, SearchMovieComponent],
  providers: [],
  selector: 'app-main',
  templateUrl: 'main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private movie = inject(MovieService);

  topRatedMovies = signal<Movie[]>([]);
  trendingMovies = signal<Movie[]>([]);
  nowPlayingMovies = signal<Movie[]>([]);

  ngOnInit() {
    // get now playing movies
    this.movie.getNowPlayingMovies().subscribe({
      next: (data) => {
        this.nowPlayingMovies.set(data.slice(0, 5));
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      },
    });

    // get trending movies
    this.movie.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies.set(data.slice(0, 5));
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      },
    });

    // get top rated movies
    this.movie.getTopRatedMovies().subscribe({
      next: (data) => {
        this.topRatedMovies.set(data.slice(0, 5));
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      },
    });
  }
}
