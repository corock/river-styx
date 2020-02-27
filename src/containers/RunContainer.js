import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bridgeActions from 'redux/modules/bridge';

import Ghost from 'components/Ghost';
import Bridge from 'components/Bridge';
import Typography from '../components/Typography/Typography';
import { push_uniq } from 'terser';

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
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      weightEntries: [],
      passingWeights: new Array(parseInt(props.lengths.length)).fill(false),
      passedWeights: [],
      totalWeight: 0,
  
      isPassed: false,
      isAllPassed: false
    };
  
  }

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

  handlePassing = () => {
    const { weights, BridgeActions } = this.props;
    const { weightEntries, passingWeights, passedWeights } = this.state;
    const element = weights.shift();

    console.log('[element]', element);
    console.log('[passingWeights]', typeof this.state.passingWeights);
    if (element === undefined) {
      this.setState({
        isAllPassed: true,
      });
    }
    this.setState({
      passingWeights: this.state.passingWeights.push(element)
    });
  };

  componentDidMount = isAllPassed => {
    if (isAllPassed) {
      return;
    }
      // setInterval(this.handlePassing, 1000);
      console.log('Done!');
      clearInterval(this);
  };

  render() {
    const { lengths, weights } = this.props;
    const { time, passingWeights, totalWeight, isPassed, isAllPassed } = this.state;
    console.log('[weights]', passingWeights);
    return (
      <GridContainer>
        <SidePanel left>
          {weights.map((v, i) => {
            return <Ghost isPassed={isPassed} key={i} />;
          })}
        </SidePanel>
        <ContentPanel>
          <Typography size="large">Time: {time}</Typography>
          <BridgeWrapper>
            {passingWeights.map((v, i) => {
              return <Bridge isPassing={true} key={v + i} />;
            })}
          </BridgeWrapper>
          <Typography size="large">Weight: {totalWeight}</Typography>
        </ContentPanel>
        <SidePanel right>
          {weights.map((v, i) => {
            return <Ghost key={i} />;
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
    weights: state.bridge.weights,
    passingWeights: state.bridge.passingWeights
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(bridgeActions, dispatch)
  })
)(React.memo(RunContainer));
