import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MOST_VIEWED_MOVIES } from "../graphql";

import type { Movie } from "@/types";

export const usePopularMoviesFetch = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const { loading, error, data, refetch } = useQuery(GET_MOST_VIEWED_MOVIES, {
    variables: { page },
  });

  useEffect(() => {
    if (data && data.mostViewedMovies) {
      setPopularMovies((prev) => [...prev, ...data.mostViewedMovies.results]);
      setTotalPages(data.mostViewedMovies.total_pages);
    }
  }, [data]);

  useEffect(() => {
    refetch({ page });
  }, [page, refetch]);

  return { loading, error, popularMovies, page, setPage, totalPages };
};
