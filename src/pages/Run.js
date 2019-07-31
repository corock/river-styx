import React from 'react';
import styled from 'styled-components';
import img from 'images/fog.jpg';

import RunContainer from 'containers/RunContainer';
import Typography from '../components/Typography/Typography';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background: url(${img}) no-repeat center center;
  background-size: cover;
`;

const Header = styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const Content = styled.div`
  display: flex;
  flex: 0.6;
`;

const Footer = styled.div`
  display: flex;
  flex: 0.2;
`;

const Run = () => {
  return (
    <Root>
      <Header>
        <Typography>Length: 5</Typography>
        <Typography>Weight: 10</Typography>
        <Typography>Weights: 3, 7, 3, 2, 5, 8</Typography>
      </Header>
      <Content>
        <RunContainer />
      </Content>
      <Footer />
    </Root>
  );
};

export default Run;
