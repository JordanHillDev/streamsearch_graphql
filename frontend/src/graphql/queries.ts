import { gql } from "@apollo/client";

export const GET_MOST_VIEWED_MOVIES = gql`
  query ($page: Int!) {
    mostViewedMovies(page: $page) {
      results {
        title
        name
        first_air_date
        release_date
        id
        poster_path
        overview
        media_type
      }
      total_pages
    }
  }
`;

export const GET_SEARCH_RESULTS = gql`
  query ($searchTerm: String!, $page: Int!) {
    searchMovies(searchTerm: $searchTerm, page: $page) {
      results {
        title
        name
        first_air_date
        release_date
        id
        poster_path
        overview
        media_type
      }
      total_pages
    }
  }
`;

export const GET_STREAMING_INFO = gql`
  query ($id: ID!, $media_type: String!) {
    streamingInfo(id: $id, media_type: $media_type) {
      flatrate
      ads
      buy
      rent
    }
  }
`;
