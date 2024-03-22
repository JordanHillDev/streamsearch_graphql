import { Movie } from "@/types";

export type StreamingServices = {
  flatrate: string[];
  ads: string[];
  buy: string[];
  rent: string[];
};

export type MovieInfoProps = {
  synopsis: string;
  movie: Movie;
};
