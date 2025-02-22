import { catchError, map, throwError } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { API_IMAGE_BASE_URL } from '../shared/constants';
import { environment } from '../../environments/environment';
import { APIResponse, MovieResponse } from '../shared/interfaces';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private http = inject(HttpClient);

  private url = environment.APIBaseURL;

  getNowPlayingMovies(page = 1) {
    return this.http
      .get<
        APIResponse<MovieResponse>
      >(`${this.url}/movie/now_playing?language=en-US&page=${page}`)
      .pipe(
        map((response) => {
          if (!response.success) throw new Error(response.message);
          return response.data.results.map((movie) => ({
            ...movie,
            poster_path: `${API_IMAGE_BASE_URL}${movie.poster_path}`,
          }));
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error.message);
          return throwError(
            () => new Error('Failed to fetch now playing movies'),
          );
        }),
      );
  }
}
