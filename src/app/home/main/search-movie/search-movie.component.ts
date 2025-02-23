import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  providers: [],
  selector: 'app-search-movie',
  templateUrl: 'search-movie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMovieComponent {}
