import React from 'react';
import styled from 'styled-components';
import ghost from 'images/ic-ghost.png';

const Div = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(45deg, gray, white);
  background-image: ${props => (props.isPassing ? `url(${ghost}), linear-gradient(45deg, gray, white)` : 'null')};
  background-size: cover;
  opacity: 0.7;
  border-radius: 10px;
  margin: 0.5rem;
`;

const Bridge = ({ isPassing }) => {
  return <Div isPassing={isPassing} />;
};

export default Bridge;
