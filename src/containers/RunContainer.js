import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bridgeActions from 'redux/modules/bridge';

import Ghost from 'components/Ghost';
import Bridge from 'components/Bridge';
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
  height: 50vh;
  flex-wrap: wrap;
  align-content: ${props => (props.left ? 'flex-end' : 'flex-start')};
  justify-content: center;
  // border: 1px solid blue;
`;

const ContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BridgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class RunContainer extends Component {
  state = {
    time: 0
  };

  handleTimer = () => {
    this.setState({
      time: this.state.time + 1
    });
  };

  componentDidMount = (isAllPassed) => {
    setInterval(this.handleTimer, 1000);
    if (isAllPassed) {
      console.log('Done!');
      clearInterval(this);
    }
  };

  render() {
    const { lengths, weights } = this.props;
    console.log('[render] RunContainer');
    return (
      <GridContainer>
        <SidePanel left>
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          {/* {weights.map((v, i) => {
            return <Ghost key={i} />;
          })} */}
        </SidePanel>
        <ContentPanel>
          <Typography size="large">Time: {this.state.time}</Typography>
          <BridgeWrapper>
            {lengths.map((v, i) => {
              return <Bridge key={v + i} />;
            })}
          </BridgeWrapper>
          <Typography size="large">Weight: 3</Typography>
        </ContentPanel>
        <SidePanel right>
          {/* {weights.map((v, i) => {
            return <Ghost key={i} />;
          })} */}
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
        </SidePanel>
      </GridContainer>
    );
  }
}

export default connect(
  state => ({
    lengths: state.bridge.lengths,
    weights: state.bridge.weights
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(bridgeActions, dispatch)
  })
)(RunContainer);
