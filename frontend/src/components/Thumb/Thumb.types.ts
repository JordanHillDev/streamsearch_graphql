import type { Movie } from "@/types";

export type ThumbProps = {
  image: string | null;
  setMovieSelection: React.Dispatch<React.SetStateAction<Movie | null>>;
  movie: Movie;
  setPagePosition: React.Dispatch<React.SetStateAction<number>>;
};
