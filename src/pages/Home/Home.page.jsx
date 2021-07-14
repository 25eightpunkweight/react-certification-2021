import React, { useContext } from 'react';

import CardItem from '../../components/CardItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import mockData from '../../mock/youtube-videos-mock.json';
import { SearchContext } from '../../contexts/SearchContextProvider';
import Styled from './Home.styled';
import fetchAPI from '../../utils/hooks/youtubeAPI';

function HomePage() {
  const searchContext = useContext(SearchContext);
  // using let here instead of const because I need to change results into something else in case it's empty
  // eslint-disable-next-line prefer-const
  let [errors, isLoaded, results, fav] = fetchAPI(searchContext.query, true);
  if (!results) {
    results = mockData;
  }
  // debugger;

  if (errors) {
    return <div>Error</div>;
  }

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <Styled.HomePageWrapper>
      <Styled.Container>
        <Styled.Cards data-testid="cards">
          {results &&
            results.items.map((d) => {
              return <CardItem key={d.etag} item={d} />;
            })}
        </Styled.Cards>
      </Styled.Container>
    </Styled.HomePageWrapper>
  );
}

export default HomePage;
