import { useEffect } from "react";
import styled from "styled-components";

import { Button } from "@components/Button";
import { MovieInfo } from "@components/MovieInfo";

import { IMAGE_BASE_URL } from "../../config";

import type { MovieProps } from ".";

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h3 {
    color: var(--font-color-bright);
  }

  h1,
  h3 {
    margin: 5px 10px;
  }

  footer {
    background-color: var(--background--color-transparent);
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  gap: 80px;

  img {
    width: clamp(300px, 30vw, 600px);
    height: auto;
    object-fit: cover;
    border-radius: 20px;
  }

  h2,
  h3 {
    color: white;
  }
`;

function Movie({ movie, setMovieSelection }: MovieProps) {
  const title = movie.name || movie.title || null;
  const releaseDate = movie.first_air_date || movie.release_date || null;
  const imagePath = IMAGE_BASE_URL + movie.poster_path;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <h3>{`(${releaseDate?.split("-")[0]})`}</h3>
      <Content>
        <img src={imagePath} alt="movie poster" />
        <MovieInfo synopsis={movie.overview} movie={movie} />
      </Content>
      <footer>
        <Button text={"Back"} callback={() => setMovieSelection(null)} />
      </footer>
    </Wrapper>
  );
}

export default Movie;
