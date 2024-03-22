import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_SEARCH_RESULTS } from "../graphql/queries";

import type { Movie } from "@/types";

export const useSearchFetch = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const { loading, error, data, refetch } = useQuery(GET_SEARCH_RESULTS, {
    variables: {
      page,
      searchTerm,
    },
  });

  useEffect(() => {
    if (!loading && data && data.searchMovies) {
      if (searchTerm === prevSearchTerm) {
        setSearchResults((prev) => [...prev, ...data.searchMovies.results]);
        setTotalPages(data.searchMovies.total_pages);
      } else {
        setSearchResults(data.searchMovies.results);
        setTotalPages(data.searchMovies.total_pages);
      }
    }
  }, [data, searchTerm, prevSearchTerm, loading]);

  useEffect(() => {
    if (searchTerm !== prevSearchTerm) {
      setPrevSearchTerm(searchTerm);
      setSearchResults([]);
      setPage(1);
      setTotalPages(0);
    }
  }, [searchTerm, prevSearchTerm]);

  useEffect(() => {
    refetch({ page });
  }, [page, refetch]);

  return { loading, error, searchResults, page, setPage, totalPages, searchTerm, setSearchTerm, data };
};
