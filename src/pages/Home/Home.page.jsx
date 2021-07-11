import React, { useEffect, useState, useContext } from 'react';

import CardItem from '../../components/CardItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import mockData from '../../mock/youtube-videos-mock.json';
import { SearchContext } from '../../contexts/SearchContextProvider';
import { API_KEY } from '../../utils/constants';
import Styled from './Home.styled';

function HomePage() {
  const [errors, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState(mockData);
  const searchContext = useContext(SearchContext);
  const APIKey = API_KEY;

  useEffect(() => {
    if (searchContext.query) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURI(
          searchContext.query
        )}&type=video&videoType=any&key=${APIKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            setError(true);
            setIsLoaded(true);
          } else {
            setResults(result);
            setIsLoaded(true);
          }
        });
    } else {
      setIsLoaded(true);
    }
  }, [searchContext.query]);

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
