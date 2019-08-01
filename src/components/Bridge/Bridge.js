import React from 'react';
import styled from 'styled-components';
import ghost from 'images/ic-ghost.png';

const Div = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(45deg, gray, white);
  background-image: url(${ghost}), linear-gradient(45deg, gray, white);
  background-size: cover;
  opacity: 0.7;
  border-radius: 10px;
  margin: 0.5rem;
`;

const Bridge = () => {
  return <Div />;
};

export default Bridge;
