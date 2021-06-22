import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';

import CardItem from '../../components/CardItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import mockData from '../../mock/youtube-mock-data-2.json';
import { SearchContext } from '../../contexts/SearchContextProvider';

const HomePageWrapper = styled.section`
  text-align: center;
  overflow: auto;

  & > h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin: 3px;
  padding: 20px;
  overflow: auto;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  overflow: auto;
`;

function HomePage() {
  const [errors, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [results, setResults] = useState(mockData);
  const [data, setData] = useState('');

  const searchContext = useContext(SearchContext);
  const searchTerm = encodeURI(searchContext.query);

  useEffect(() => {
    if (searchTerm !== '') {
      setData(encodeURI(searchContext.query));
    }
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&videoType=any&key=AIzaSyDCv2nlGl7NnX3F-ZHbq6u8WK6mazlsxPY`
    // )
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setResults(result);
    //     setIsLoading(false);
    //   });
  }, [searchTerm]);
  const sectionRef = useRef(null);
  const i = results.items;

  if (errors) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <HomePageWrapper>
      <p>You Entered {data}</p>
      {/* <Container>
        <Cards>{i.map((d) => CardItem(d))}</Cards>
      </Container> */}
    </HomePageWrapper>
  );
}

export default HomePage;
