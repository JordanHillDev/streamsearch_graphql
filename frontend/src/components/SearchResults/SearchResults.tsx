import { Grid } from "@components/Grid";
import { Thumb } from "@components/Thumb";
import { Spinner } from "@components/Spinner";
import { Button } from "@components/Button";

import { IMAGE_BASE_URL } from "../../config";

import type { SearchResultsProps } from ".";

function SearchResults({ loading, setPage, results, page, totalPages, setMovieSelection }: SearchResultsProps) {
  return (
    <>
      <Grid pagePosition={0} header="Search Results">
        {results.map((movie) => {
          return (
            <Thumb
              key={`${movie.id}-${movie.title}`}
              setMovieSelection={setMovieSelection}
              image={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : null}
              movie={movie}
              setPagePosition={() => 0}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {page < totalPages && <Button text={"Load More"} callback={() => setPage((prev) => prev + 1)} />}
    </>
  );
}

export default SearchResults;
