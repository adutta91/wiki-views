
import { Box } from "./index";
import styled from 'styled-components'

export const FadeIn = styled(Box)<{ animationDelay?: string }>`
  ${({ animationDelay }) => `
    @keyframes fade-in {
      0% {
        transform: translateY(-5px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    opacity: 0;
    animation: fade-in .5s ease-out forwards;
    animation-delay: ${animationDelay || '.5s'}
  `}
`;
