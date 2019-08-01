import React from 'react';
import styled from 'styled-components';
import ghost from 'images/ic-ghost.png';

const Img = styled.img`
  width: 64px;
  height: 64px;
  margin: 8px;
`;

const Ghost = isCrossed => {
  return <Img src={ghost} alt="" />;
};

export default Ghost;
