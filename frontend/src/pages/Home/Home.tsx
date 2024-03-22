import { useState } from "react";

import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { PopularTitles } from "@/components/PopularTitles";
import { SearchResults } from "@/components/SearchResults";
import { Movie } from "@components/Movie";

import { useSearchFetch, usePopularMoviesFetch } from "@/hooks/";

import type { Movie as MovieType } from "@/types";

function Home() {
  const { searchTerm, setSearchTerm, searchResults, loading, page, setPage, totalPages } = useSearchFetch();
  const {
    loading: popularLoading,
    popularMovies,
    page: popularPage,
    setPage: setPopularPage,
    totalPages: popularTotalPages,
  } = usePopularMoviesFetch();

  const [movieSelection, setMovieSelection] = useState<MovieType | null>(null);

  return (
    <>
      <Header>
        <SearchBar onChange={setSearchTerm} />
      </Header>
      {movieSelection ? (
        <Movie movie={movieSelection} setMovieSelection={setMovieSelection} />
      ) : (
        <>
          {searchTerm ? (
            <SearchResults
              results={searchResults}
              loading={loading}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              setMovieSelection={setMovieSelection}
            />
          ) : (
            <PopularTitles
              setMovieSelection={setMovieSelection}
              loading={popularLoading}
              popularMovies={popularMovies}
              page={popularPage}
              setPage={setPopularPage}
              totalPages={popularTotalPages}
            />
          )}
        </>
      )}
    </>
  );
}

export default Home;
