import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import { Spinner } from "@components/Spinner";

import { GET_STREAMING_INFO } from "../../graphql";

import type { MovieInfoProps, StreamingServices } from ".";

export const Wrapper = styled.div`
  max-width: 300px;
  text-align: left;

  p {
    line-height: 1.5;
  }

  h2,
  h3 {
    text-decoration: underline;
  }

  li {
    color: var(--font-color-bright);
  }
`;

function MovieInfo({ synopsis, movie }: MovieInfoProps) {
  const [streamingResults, setStreamingResults] = useState<StreamingServices>();

  const { loading, data, error } = useQuery(GET_STREAMING_INFO, {
    variables: {
      id: movie.id,
      media_type: movie.media_type,
    },
  });

  useEffect(() => {
    if (data) {
      setStreamingResults(data.streamingInfo);
    }
  }, [data]);

  if (error) {
    return <h2>There has been an error.</h2>;
  }

  return (
    <Wrapper>
      <h2>Synopsis</h2>
      <p>{synopsis}</p>
      <h2>Where To Watch</h2>
      {!loading && (
        <>
          {streamingResults?.flatrate && (
            <>
              <h3>Stream</h3>
              <ul>
                {streamingResults.flatrate.map((prov) => (
                  <li key={prov}>{prov}</li>
                ))}
              </ul>
            </>
          )}
          {streamingResults?.ads && (
            <>
              <h3>Stream With Ads</h3>
              <ul>
                {streamingResults.ads.map((prov) => (
                  <li key={prov}>{prov}</li>
                ))}
              </ul>
            </>
          )}
          {streamingResults?.rent && (
            <>
              <h3>Rent</h3>
              <ul>
                {streamingResults.rent.map((prov) => (
                  <li key={prov}>{prov}</li>
                ))}
              </ul>
            </>
          )}
          {streamingResults?.buy && (
            <>
              <h3>Buy</h3>
              <ul>
                {streamingResults.buy.map((prov) => (
                  <li key={prov}>{prov}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
      {loading && <Spinner />}
    </Wrapper>
  );
}
export default MovieInfo;
