import { useState } from "react";

import { Button } from "@components/Button";
import { Grid } from "@components/Grid";
import { Spinner } from "@components/Spinner";
import { Thumb } from "@components/Thumb";

import { IMAGE_BASE_URL } from "../../config";

import type { PopularTitlesProps } from ".";

function PopularTitles({ setMovieSelection, loading, popularMovies, page, setPage, totalPages }: PopularTitlesProps) {
  const [pagePosition, setPagePosition] = useState(0);

  return (
    <>
      <Grid pagePosition={pagePosition} header="Popular Titles">
        {popularMovies.map((movie) => (
          <Thumb
            key={movie.id}
            setMovieSelection={setMovieSelection}
            image={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : null}
            movie={movie}
            setPagePosition={setPagePosition}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {page < totalPages && <Button text={"Load More"} callback={() => setPage((prev) => prev + 1)} />}
    </>
  );
}

export default PopularTitles;
