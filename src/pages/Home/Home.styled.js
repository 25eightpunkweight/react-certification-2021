import styled from 'styled-components';

const HomePageWrapper = styled.section`
  text-align: center;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

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
  align-items: center;
`;

const Styled = {
  HomePageWrapper,
  Container,
  Cards,
};

export default Styled;