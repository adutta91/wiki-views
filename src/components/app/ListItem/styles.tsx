import { Box } from "components/ui/Box"
import { Icon } from "components/ui/Icon"
import styled from "styled-components"

export const Wrapper = styled(Box)<{ open: boolean }>`
  ${({ open }) => `
    transition: all .2s ease-out;

    &:hover {
      box-shadow: 0px 2px 0px 1px rgba(5, 9, 13, 0.06);
    }

    ${open && `
      max-height: 400px;
      overflow: scroll;
    `}
  `}
`

export const Preview = styled.p`
  ${({ theme }) => `
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    color: ${theme.colors.neutralGray600};
    display: -webkit-box;
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 1.65;
    line-height: 180%;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const ActiveIcon = styled(Icon)<{ pinned: boolean }>`
  ${({ pinned }) => `
    @keyframes pop-in {
      0% {
        transform: scale(.8);
      }
      60% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    ${pinned && `animation: pop-in .25s ease-out forwards;`}
  `}
`
