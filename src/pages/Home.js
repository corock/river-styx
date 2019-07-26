import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-dirction: column;
  border: 1px solid red;
  height: 100vh;
`;

const Panel = styled.div`
  flex: 1;
`;

const Home = () => {
  return (
    <Root>
      <Panel>label</Panel>
      <Panel>NumberField</Panel>
    </Root>
  );
};

export default Home;
