import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

class RunContainer extends PureComponent {
  state = {
    time: 0,
    weightEntries: this.props.weights,
    passingWeights: new Array(parseInt(this.props.lengths.length)).fill(0),
    passedWeights: [],
    totalWeight: 0
  };

  crossing = entry => {
    // debugger;
    const { totalWeight, passingWeights, weightEntries } = this.state;
    const { weights } = this.props;

    if (entry !== 0) {

      this.setState({
        totalWeight: totalWeight + parseInt(entry),
        weightEntries: weightEntries.slice(1, this.state.weightEntries.length),
        passingWeights: this.state.weightEntries.splice(0, 1, this.state.weightEntries[0]),
        time: this.state.time + 1,
      });
    }
    // if (this.state.passingWeights[weights.length] !== 0) {
    //   console.log('hi');
    // }
    // this.setState({
    //   passingWeights: this.state.passingWeights.slice(1, passingWeights.length),
    //   passedWeights: this.state.passedWeights.concat(this.state.passingWeights[weights.length]),
    // });
  };

  toss = (entry, action) => {
    console.log('[toss] entry ', entry, ':', action);
    if (entry !== 0) {
      this.crossing(entry);
    } else {
      this.crossing(0);
    }
  };

  isNotExceeded = () => {
    const { maxWeight } = this.props;
    const { totalWeight } = this.state;
    console.log(typeof this.state.weightEntries);
    if (totalWeight <= maxWeight) {
      this.toss(this.state.weightEntries[0], 'TO_BRIDGE');
    } else {
      this.toss(0, 'TO_BRIDGE');
    }
  };

  /**
   * 초과하면 자르고 아니면 그대로
   */
  handleTimer = () => {
    const { time, weightEntries } = this.state;

    console.log('[weightEntries]', weightEntries);
    this.isNotExceeded();
  };

  componentDidMount = isAllPassed => {
    setInterval(this.handleTimer, 1000);
    if (this.state.weightEntries.length === 0) {
      console.log('Done!');
      clearInterval(this);
    }
  };

  render() {
    const { lengths, weights } = this.props;
    const { weightEntries, passingWeights, passedWeights } = this.state;
    console.log('[render]', weightEntries);
    return (
      <GridContainer>
        <SidePanel left>
          {weightEntries.map((v, i) => {
            return <Ghost key={v + i} />;
          })}
        </SidePanel>
        <ContentPanel>
          <Typography size="large">Time: {this.state.time}</Typography>
          <BridgeWrapper>
            {passingWeights.map((v, i) => {
              return <Bridge key={v + i} />;
            })}
          </BridgeWrapper>
          <Typography size="large">Weight: 3</Typography>
        </ContentPanel>
        <SidePanel right>
          {passedWeights.map((v, i) => {
            return <Ghost key={v + i} />;
          })}
        </SidePanel>
      </GridContainer>
    );
  }
}

RunContainer.propTypes = {
  lengths: PropTypes.array,
  maxWeight: PropTypes.number,
  weights: PropTypes.array
};

export default connect(
  state => ({
    lengths: state.bridge.lengths,
    maxWeight: state.bridge.maxWeight,
    weights: state.bridge.weights
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(bridgeActions, dispatch)
  })
)(RunContainer);
