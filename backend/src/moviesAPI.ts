import { RESTDataSource } from "@apollo/datasource-rest";
import * as dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.TMDB_KEY;

export default class MoviesAPI extends RESTDataSource {
  override baseURL = "https://api.themoviedb.org/3/";

  async getMostViewedMovies(page: number = 1) {
    const data = await this.get("trending/all/day?language=en-US", {
      params: {
        page: page.toString(),
        api_key: API_KEY,
      },
    });
    const { results, total_pages } = data;
    return {
      results,
      total_pages,
    };
  }

  async searchMovies(searchTerm: string, page: number = 1) {
    const data = await this.get("search/multi", {
      params: {
        api_key: API_KEY,
        page: page.toString(),
        query: searchTerm,
      },
    });
    const { results, total_pages } = data;
    return {
      results,
      total_pages,
    };
  }

  async getStreamingInfo(id: number, media_type: string) {
    const data = await this.get(
      `${media_type}/${id.toString()}/watch/providers`,
      {
        params: {
          api_key: API_KEY,
          id: id.toString(),
          media_type,
        },
      }
    );

    return data.results;
  }
}
