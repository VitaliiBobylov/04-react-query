import type { Movie } from "./movie";

export interface TmdbResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}
