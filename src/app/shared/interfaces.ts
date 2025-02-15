interface SuccessResponse<T> {
  success: true;
  data: T;
}

interface ErrorResponse {
  success: false;
  message: string;
}

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: string;
  adult: boolean;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}
