import React from 'react';
import styled from 'styled-components';
import img from 'images/fog.jpg';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${img}) no-repeat center center;
  background-size: cover;
`;

const Header = styled.div`
  display: flex;
  flex: 0.2;
`;

const Content = styled.div`
  display: flex;
  flex: 0.6;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% auto 25%;
  grid-gap: 1rem;
  width: 100vw;
`;

const Footer = styled.div`
  display: flex;
  flex: 0.2;
`;

const GridItem = styled.div`
`;

const Run = () => {
  return (
    <Root>
      <Header>Run</Header>
      <Content>
        <GridContainer>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </GridContainer>
      </Content>
      <Footer>실행 페이지입니다.</Footer>
    </Root>
  );
};

export default Run;
