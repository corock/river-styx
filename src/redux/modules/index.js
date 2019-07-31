/**
 * @file src/redux/modules/index.js
 * @function combineReducers 를 통해 모듈 안의 리듀서들을 하나로 합침
 */
import { combineReducers } from 'redux';
import bridge from './bridge';

export default combineReducers({
  bridge
});
