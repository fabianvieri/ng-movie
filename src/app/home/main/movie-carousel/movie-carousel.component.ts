import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Movie } from '../../../shared/interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [],
  selector: 'app-movie-carousel',
  templateUrl: 'movie-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCarouselComponent {
  title = input.required<string>();
  movies = input.required<Movie[]>();
}
