const typeDefs = `#graphql
  type Movie {
    backdrop_path: String
    id: ID!
    original_title: String
    overview: String
    title: String
    media_type: String
    poster_path: String
    first_air_date: String
    release_date: String
    name: String
  }

  type MostViewedMovieResponse {
    results: [Movie]
    total_pages: Int
  }

  type SearchResponse {
    results: [Movie]
    total_pages: Int
  }

  type StreamingProvider {
    provider_name: String
  }

  type StreamingInfo {
    flatrate: [String]
    ads: [String]
    buy: [String]
    rent: [String]
  }

  type Query {
    mostViewedMovies(page: Int!): MostViewedMovieResponse
    searchMovies(searchTerm: String!, page: Int!): SearchResponse
    streamingInfo(id: ID!, media_type: String!): StreamingInfo
  }
`;

export default typeDefs;
