import { useQuery } from "@apollo/client";
import { GET_STREAMING_INFO } from "../graphql";

import type { MediaType } from "@/types";

export const useStreamingInfoFetch = (id: number, media_type: MediaType) => {
  const { loading, data, error } = useQuery(GET_STREAMING_INFO, {
    variables: {
      id,
      media_type,
    },
  });

  return { loading, data, error };
};
