import type { Movie } from "@/types";

export type MovieProps = {
  movie: Movie;
  setMovieSelection: React.Dispatch<React.SetStateAction<Movie | null>>;
};
