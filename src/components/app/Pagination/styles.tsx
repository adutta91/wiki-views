
import { styled } from "styled-components"
import { CircledIcon } from "components/ui/Icon"
import { Encircle } from "components/ui/Encircle"

export const StyledIconButton = styled(CircledIcon)<{ disabled: boolean }>`
  ${({ theme, disabled }) => `
    border: 1px solid ${theme.colors.neutralGray400};
    cursor: pointer;
    transition: all .2s ease-out;
    background: ${theme.colors.white};

    &:hover {
      box-shadow: 0 2px 10px -2px ${theme.colors.brandGreen};
    }

    ${disabled && `
      cursor: not-allowed;
      background: ${theme.colors.neutralGray400};

      svg {
        fill: ${theme.colors.neutralGray600};
      }

      &:hover {
        box-shadow: none;
      }
    `}
  `}
`

export const PageButton = styled(Encircle)<{ active: boolean }>`
  ${({ theme, active }) => `
    1px solid ${theme.colors.neutralGray400};
    cursor: pointer;
    transition: all .2s ease-out;

    background: ${active ? theme.colors.avocadoGreen : theme.colors.white};
    color: ${active ? theme.colors.brandGreen : theme.colors.neutralGray900};
    border: 1px solid ${theme.colors.neutralGray400};
    
    &:hover {
      box-shadow: 0 2px 10px -2px ${theme.colors.brandGreen};
    }
  `}
`