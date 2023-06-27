
import { styled } from "styled-components"

const Heading = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.neutralGray900};
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.8px;
    line-height: 150%;
    text-align: center;
    width: 100%;
    margin: 0 0 40px;
    font-family: Lora;

    @media(max-width: ${theme.breakpointsValue.sm}px) {
      font-size: 28px;
    }
  `}
`

export default Heading