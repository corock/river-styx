import { handleActions, createAction } from 'redux-actions';

/**
 * Action types
 * @CHANGE_INPUT      input 값 변경
 * @INITIALZE_FIELD   form 값 초기화
 * @RUN               Router 로 이동 시 값을 받아오기 위해 input 값을 셋팅
 */
const CHANGE_INPUT = 'bridge/CHANGE_INPUT';
const INITIALZE_FIELD = 'bridge/INITIALZE_FIELD';
const RUN = 'bridge/RUN';

/**
 * Action creators
 * @function changeInputToState   lengths, weight, weights 값이 바뀔 때 호출되는 액션 함수
 * @function initializeForm       form 초기화
 * @function run
 */
export const changeInputToState = createAction(CHANGE_INPUT);
export const initializeField = createAction(INITIALZE_FIELD);
export const run = createAction(RUN);

const initialState = {
  lengths: [],
  maxWeight: '',
  weights: [],
};

/**
 * Reducers
 *
 * @lengths Create new array, which can be iterated over
 * @returns new Array(parseInt(action.payload.value)).fill(0)
 */
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      if (action.payload.name === 'lengths') {
        console.log(action.payload.value);
        return {
          lengths: new Array(parseInt(action.payload.value)).fill(0)
        };
      }
      if (action.payload.name === 'maxWeight') {
        return {
          ...state,
          maxWeight: action.payload.value
        };
      }
      if (action.payload.name === 'weights') {
        const splitedWeights = action.payload.value.split(' ');
        return {
          ...state,
          weights: splitedWeights
        };
      }
      return console.error();
    },
    [INITIALZE_FIELD]: () => {
      return initialState;
    },
    [RUN]: state => {
      return {
        lengths: state.lengths,
        maxWeight: state.maxWeight,
        weights: state.weights
      };
    },
  },
  initialState
);
