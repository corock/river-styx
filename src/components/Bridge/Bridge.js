import React from 'react';
import styled from 'styled-components';
import ghost from 'images/ic-ghost.png';

const Div = styled.div`
  // border: 1px solid red;
  width: 64px;
  height: 64px;
  background: linear-gradient(45deg, gray, white);
  background-image: url(${ghost}), linear-gradient(45deg, gray, white);
  background-size: cover;
  opacity: 0.7;
  border-radius: 10px;
`;

const Bridge = () => {
  return <Div />;
};

export default Bridge;
