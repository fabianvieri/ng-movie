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
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [],
  selector: 'app-main',
  templateUrl: 'main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private movie = inject(MovieService);
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
  }
}
