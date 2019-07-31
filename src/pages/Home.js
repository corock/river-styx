import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from 'images/river-styx.jpg';

import Typography from 'components/Typography/Typography';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: black;
  background-image: url(${img});
  opacity: 0.8;
`;

const Panel = styled.div`
  display: grid;
  grid-template-columns: 10rem 26rem;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  flex: 0.1;
  font-size: 2rem;
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

const Input = styled.input`
  width: ${props => (props.weights ? '24rem' : '16rem')};
  height: 2.5rem;
  font-size: 1.3rem;
  padding-left: 1rem;
`;

const Button = styled.button`
  width: 16rem;
  height: 3rem;
  font-size: 1.5rem;
  margin-top: 4rem;
`;

const WrappedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Root>
      <Title>River Styx</Title>
      <Panel>
        <Typography align="right">Length</Typography>
        <Input />
      </Panel>
      <Panel>
        <Typography align="right">Weight</Typography>
        <Input />
      </Panel>
      <Panel>
        <Typography align="right">Weights</Typography>
        <Input weights />
      </Panel>
      <WrappedButton>
        <Link to="/run">
          <Button>Start!</Button>
        </Link>
      </WrappedButton>
    </Root>
  );
};

export default Home;
