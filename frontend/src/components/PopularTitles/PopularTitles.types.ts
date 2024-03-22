import type { Movie } from "@/types";

export type PopularTitlesProps = {
  loading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  popularMovies: Movie[];
  page: number;
  totalPages: number;
  setMovieSelection: React.Dispatch<React.SetStateAction<Movie | null>>;
};
