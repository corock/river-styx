import React, { Component } from 'react';
import styled from 'styled-components';

import Bridge from 'components/Bridge';

const Root = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 1rem;
`;

class BridgeContainer extends Component {
  render() {
    return (
      <Root>
        <Bridge />
        <Bridge />
        <Bridge />
        <Bridge />
        <Bridge />
      </Root>
    );
  }
}

export default BridgeContainer;