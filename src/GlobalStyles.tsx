import { createGlobalStyle } from 'styled-components';
import "./index.module.scss";

const GlobalStyles = createGlobalStyle<{ theme?: any }>`
  ${({ theme }) => `
    body {
      font-family: Poppins, sans-serif;
      margin: 0;
      background: ${theme.colors.neutralGray100};
    }
  `}
`;

export default GlobalStyles;