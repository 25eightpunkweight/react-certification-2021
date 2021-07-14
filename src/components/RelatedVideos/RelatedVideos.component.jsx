import React from 'react';
import Styled from './RelatedVideos.styled';

import RelatedVideoCard from '../RelatedVideoCard';
import { storage } from '../../utils/storage';
import fetchAPI from '../../utils/hooks/youtubeAPI';

function RelatedVideos(props) {
  const { videoId, favVids } = props;

  const favoriteVideos = () => {
    if (favVids && storage.get('favoriteVideos')) {
      return storage.get('favoriteVideos').items;
    }
    return null;
  };
  // using let here instead of const because I need to change results into something else in case it's empty
  // eslint-disable-next-line prefer-const
  let [errors, isLoaded, results, fav] = fetchAPI(videoId, false);

  if (fav) {
    results = favoriteVideos();
  }

  const elementTitle = favVids ? 'Other Favorite Videos' : 'Related Videos';

  if (errors) {
    return <h1>Error</h1>;
  }

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <Styled.RelatedVideosWrapper data-testid="related-videos">
      <h2>{elementTitle}</h2>
      {results &&
        results.items.map((d) => {
          if (d.snippet) {
            return <RelatedVideoCard key={d.etag} item={d} favVids={favVids} />;
          }
          return <h1>Error</h1>;
        })}
      <Styled.EmptyDiv />
    </Styled.RelatedVideosWrapper>
  );
}

export default RelatedVideos;
