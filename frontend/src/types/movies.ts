export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  title?: string | undefined;
  media_type: string;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  name?: string | undefined;
  streamingServices: string[];
};

export type MediaType = "tv" | "movie";
