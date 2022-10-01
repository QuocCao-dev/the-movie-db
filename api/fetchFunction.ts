import { Movies } from "./types";

export const basicFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Error fetching data");
  const data = await response.json();

  return data;
};

export const fetchMovies = async (
  search: string = "",
  page: number = 1
): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
