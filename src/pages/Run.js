import React from 'react';
import styled from 'styled-components';
import img from 'images/fog.jpg';

import SummaryConatiner from 'containers/SummaryContainer';
import RunContainer from 'containers/RunContainer';

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
  margin: 1rem;
  padding: 1rem;
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
        <SummaryConatiner />
      </Header>
      <Content>
        <RunContainer />
      </Content>
      <Footer />
    </Root>
  );
};

export default Run;
