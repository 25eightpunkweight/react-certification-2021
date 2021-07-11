import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import RelatedVideoCard from '../RelatedVideoCard';
import { API_KEY } from '../../utils/constants';
import { AccountContext } from '../../contexts/AccountContextProvider';
import { storage } from '../../utils/storage';

const RelatedVideosWrapper = styled.div`
  height: fit-content;
  text-align: center;
  width: 100%;
  float: right;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  float: left;
  display: flex;
  flex-direction: column;
`;

const EmptyDiv = styled.div`
  width: 360px;
  height: 112px;
`;

function RelatedVideos(props) {
  const APIKey = API_KEY;

  const loggedInContext = useContext(AccountContext);

  const { videoId, favVids } = props;
  const [errors, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState(null);

  const favoriteVideos = () => {
    if (favVids) {
      return storage.get('favoriteVideos').items;
    }
    return null;
  };

  const elementTitle = favVids ? 'Other Favorite Videos' : 'Related Videos';

  useEffect(() => {
    if (videoId) {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video&key=${APIKey}`;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            setError(true);
            setIsLoaded(true);
          } else {
            setResults(result.items);
            setIsLoaded(true);
          }
        });
    } else {
      setResults(favoriteVideos);
      setIsLoaded(true);
    }
  }, [videoId]);

  if (errors) {
    return <h1>Error</h1>;
  }

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <RelatedVideosWrapper data-testid="related-videos">
      <h2>{elementTitle}</h2>
      {results &&
        results.map((d) => {
          if (d.snippet) {
            return <RelatedVideoCard key={d.etag} item={d} favVids={favVids} />;
          }
          return <h1>Error</h1>;
        })}
      <EmptyDiv />
    </RelatedVideosWrapper>
  );
}

export default RelatedVideos;
