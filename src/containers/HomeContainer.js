import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NumberField from 'components/NumberField';
import Typography from 'components/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BridgeActions from 'redux/modules/bridge';

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

    BridgeActions.changeInput({ name, value });
  };

  render() {
    return (
      <>
        <Panel>
          <Typography align="right">Length</Typography>
          <NumberField
            type="number"
            placeholder="다리 수를 입력하세요(최대 10개)"
            onChange={this.handleChangeInputValue('length')}
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
            placeholder="망령자들의 무게를 입력하세요(공백으로 구분)"
            size="large"
            onChange={this.handleChangeInputValue('weights')}
          />
        </Panel>
        <ButtonWrapper>
          <Link to="/run">
            <Button>Start!</Button>
          </Link>
        </ButtonWrapper>
      </>
    );
  }
}

// export default HomeContainer;
export default connect(
  state => ({
    // form: state.auth.getIn([])
  }),
  dispatch => ({
    BridgeActions: bindActionCreators(BridgeActions, dispatch)
  })
)(HomeContainer);
