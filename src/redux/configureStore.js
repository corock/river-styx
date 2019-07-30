import { createStore } from 'redux';
import modules from './modules';

/**
 * @var isDev 'development' 모드일 때만 Redux Devtools를 적용
 */
const configureStore = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const store = createStore(
    modules,
    isDev && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
