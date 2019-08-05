import React, { PureComponent } from 'react';
import Typography from 'components/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BridgeActions from 'redux/modules/bridge';

class SummaryConatiner extends PureComponent {
  render() {
    const { lengths, maxWeight, weights } = this.props;

    return (
      <>
        <Typography>Length: {lengths.length}</Typography>
        <Typography>Weight: {maxWeight}</Typography>
        <Typography>Weights: {weights + ' '}</Typography>
      </>
    );
  }
}

export default connect(
  state => ({
    lengths: state.bridge.lengths,
    maxWeight: state.bridge.maxWeight,
    weights: state.bridge.weights
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(BridgeActions, dispatch)
  })
)(SummaryConatiner);
