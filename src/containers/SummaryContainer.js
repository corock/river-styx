import React, { Component } from 'react';
import Typography from 'components/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BridgeActions from 'redux/modules/bridge';

class SummaryConatiner extends Component {
  render() {
    const { lengths, weight, weights } = this.props;

    return (
      <>
        <Typography>Length: {lengths.length}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography>Weights: {weights + ' '}</Typography>
      </>
    );
  }
}

export default connect(
  state => ({
    lengths: state.bridge.lengths,
    weight: state.bridge.weight,
    weights: state.bridge.weights
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(BridgeActions, dispatch)
  })
)(SummaryConatiner);
