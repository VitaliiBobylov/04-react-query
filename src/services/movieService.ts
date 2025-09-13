import axios from "axios";
import type { TmdbResponse } from "../types/tmdb";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export async function fetchMovies(
  query: string,
  page: number = 1
): Promise<TmdbResponse> {
  try {
    const response = await axiosInstance.get<TmdbResponse>("/search/movie", {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw new Error("Failed to fetch movies");
  }
}
