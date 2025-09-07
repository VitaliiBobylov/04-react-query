import axios from "axios";
import type { Movie } from "../types/movie";

interface tmdbRespons {
  results: Movie[];

  page: number;
  total_results: number;
  total_pages: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export async function fetchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await axiosInstance.get<tmdbRespons>(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query,
        },
      }
    );

    return response.data.results as Movie[];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw new Error("Failed to fetch movies");
  }
}
