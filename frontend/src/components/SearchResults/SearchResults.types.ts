import type { Movie } from "@/types";

export type SearchResultsProps = {
  loading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  results: Movie[];
  page: number;
  totalPages: number;
  setMovieSelection: React.Dispatch<React.SetStateAction<Movie | null>>;
};
