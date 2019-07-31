import React from 'react';
import styled from 'styled-components';
import img from 'images/river-styx.jpg';

import HomeContainer from 'containers/HomeContainer';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: black;
  background-image: url(${img});
  opacity: 0.8;
`;

const Title = styled.div`
  display: flex;
  flex: 0.4;
  justify-content: center;
  align-items: flex-end;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const Home = () => {
  return (
    <Root>
      <Title>River Styx</Title>
      <HomeContainer />
    </Root>
  );
};

export default Home;
