import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/**
 * @param reset CSS를 초기화하기 위함
 * @property margin과 padding을 box 크기에 포함
 */
const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
