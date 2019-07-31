import React, { Component } from 'react';
import styled from 'styled-components';

import Ghost from 'components/Ghost';
import BridgeContainer from 'containers/BridgeContainer';
import Typography from '../components/Typography/Typography';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% auto 25%;
  grid-gap: 1rem;
  width: 100vw;
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.left ? 'flex-end' : 'flex-start')};
  // border: 1px solid blue;
`;

const ContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class MainContainer extends Component {
  render() {
    return (
      <GridContainer>
        <SidePanel left>
          <Ghost />
        </SidePanel>
        <ContentPanel>
          <Typography size="large">Time: 1S</Typography>
          <BridgeContainer />
          <Typography size="large">Weight: 3</Typography>
        </ContentPanel>
        <SidePanel right>
          <Ghost />
        </SidePanel>
      </GridContainer>
    );
  }
}

export default MainContainer;
