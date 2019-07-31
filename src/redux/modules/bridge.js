import { handleActions, createAction } from 'redux-actions';
import { Map, List } from 'immutable';

/**
 * Action types
 * @CHANGE_INPUT    input 값 변경
 * @INITIALZE_FORM  form 값 초기화
 */
const CHANGE_INPUT = 'bridge/CHANGE_INPUT';
const INITIALZE_FORM = 'bridge/INITIALZE_FORM';

/**
 * Action creators
 * @function changeInput      length, weight, weights 값이 바뀔 때 호출되는 액션 함수
 * @function initializeForm   form 초기화
 */
export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALZE_FORM);

const initialState = Map({
  form: Map({
    length: '',
    weight: '',
    weights: List([])
  })
});

// Reducers
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      console.log('[action.payload]', action.payload);

      if (action.payload.name === 'length') {
        console.log('if => length');
        return {
          ...state,
          length: action.payload.value,
        };
      }
      if (action.payload.name === 'weight') {
        console.log('if => weight');
        return {
          ...state,
          weight: action.payload.value,
        };
      }
      if (action.payload.name === 'weights') {
        console.log('if => weights');
        return {
          ...state,
          weights: action.payload.value,
        };
      }
      return console.error();
    },
    [INITIALZE_FORM]: (state, action) => {
    }
  },
  initialState
);
