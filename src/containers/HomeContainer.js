import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NumberField from 'components/NumberField';
import Typography from 'components/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bridgeActions from 'redux/modules/bridge';

const Panel = styled.div`
  display: grid;
  grid-template-columns: 10rem 26rem;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  flex: 0.1;
  font-size: 2rem;
`;

const Button = styled.button`
  width: 16rem;
  height: 3rem;
  font-size: 1.5rem;
  margin-top: 4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class HomeContainer extends Component {
  /**
   * @function handleChangeInputValue
   * NumberField 컴포넌트의 @param name 과 입력한 @param value 을 액션에게 전달합니다.
   */
  handleChangeInputValue = name => e => {
    const { BridgeActions } = this.props;
    const { value } = e.target;

    BridgeActions.changeInputToState({ name, value });
  };

  /**
   * @function handleSubmit
   * Start! 버튼을 클릭하면 NumberField 컴포넌트의 상태 값을 초기화합니다.
   */
  handleSubmit = () => {
    const { BridgeActions } = this.props;
    BridgeActions.run();
  };

  render() {
    return (
      <>
        <Panel>
          <Typography align="right">Length</Typography>
          <NumberField
            type="number"
            placeholder="다리 수를 입력하세요(최대 10개)"
            onChange={this.handleChangeInputValue('lengths')}
          />
        </Panel>
        <Panel>
          <Typography align="right">Weight</Typography>
          <NumberField
            type="number"
            name="weight"
            placeholder="최대 무게를 입력하세요"
            onChange={this.handleChangeInputValue('weight')}
          />
        </Panel>
        <Panel>
          <Typography align="right">Weights</Typography>
          <NumberField
            type="text"
            name="weights"
            placeholder="망령자들의 무게를 입력하세요(공백으로 구분, 최대 16마리)"
            size="large"
            onChange={this.handleChangeInputValue('weights')}
          />
        </Panel>
        <ButtonWrapper>
          <Link to="/run">
            <Button onClick={this.handleSubmit}>Start!</Button>
          </Link>
        </ButtonWrapper>
      </>
    );
  }
}

export default connect(
  state => ({
    lengths: state.lengths,
    weight: state.weight,
    weights: state.weights
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(bridgeActions, dispatch)
  })
)(HomeContainer);
