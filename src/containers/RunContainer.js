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
    const { time, weightEntries, totalWeight, passingWeights } = this.state;
    const { maxWeight, weights } = this.props;

    // 현재 다리의 총 무게가 최대 무게량보다 클 경우 시간만 계산
    if (totalWeight > maxWeight) {
      this.setState({
        time: time + 1
      });
      return;
    }

    if (entry !== 0) {
      const { weightEntries, passingWeights } = this.state;
      const { weights } = this.props;

      this.setState({
        totalWeight: totalWeight + parseInt(entry),
        weightEntries: weightEntries.slice(1, weightEntries.length),
        passingWeights: weightEntries.splice(0, 1, weightEntries[0])
      });
    }

    // 마지막 다리인 지 체크
    if (passingWeights[weights.length] !== 0) {
      this.setState({
        totalWeight: totalWeight - passingWeights[weights.length],
        passingWeights: passingWeights.slice(1, passingWeights.length),
        passedWeights: passingWeights.splice(0, 1, passingWeights[0])
      });
    }
  };

  toss = (entry, action) => {
    if (entry !== 0) {
      this.crossing(entry);
    } else {
      this.crossing(0);
    }
  };

  isNotExceeded = () => {
    const { maxWeight } = this.props;
    const { totalWeight } = this.state;

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
    this.isNotExceeded();
  };

  componentDidMount = () => {
    const { weightEntries, totalWeight } = this.state;
    console.log('[componentDidMount]', weightEntries);
    if (weightEntries.length === 0 && totalWeight === 0) {
      console.log('Done!');
      clearInterval(this);
    }
    setInterval(this.handleTimer, 1000);
  };

  render() {
    const {
      time,
      totalWeight,
      weightEntries,
      passingWeights,
      passedWeights
    } = this.state;

    return (
      <GridContainer>
        <SidePanel left>
          {weightEntries.map((v, i) => {
            return <Ghost key={v + i} />;
          })}
        </SidePanel>
        <ContentPanel>
          <Typography size="large">Time: {time}</Typography>
          <BridgeWrapper>
            {passingWeights.map((v, i) => {
              return <Bridge key={v + i} />;
            })}
          </BridgeWrapper>
          <Typography size="large">Weight: {totalWeight}</Typography>
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
