const resolvers = {
  Query: {
    mostViewedMovies: async (_, { page }, { dataSources }) => {
      const { results, total_pages } =
        await dataSources.moviesAPI.getMostViewedMovies(page);
      return { results, total_pages };
    },
    searchMovies: async (_, { searchTerm, page }, { dataSources }) => {
      const { results, total_pages } = await dataSources.moviesAPI.searchMovies(
        searchTerm,
        page
      );
      return { results, total_pages };
    },
    streamingInfo: async (_, { id, media_type }, { dataSources }) => {
      const data = await dataSources.moviesAPI.getStreamingInfo(id, media_type);
      const { US: regionData } = data;

      return {
        flatrate: regionData.flatrate?.map((ea) => ea.provider_name),
        ads: regionData.ads?.map((ea) => ea.provider_name),
        buy: regionData.buy?.map((ea) => ea.provider_name),
        rent: regionData.rent?.map((ea) => ea.provider_name),
      };
    },
  },
};

export default resolvers;
