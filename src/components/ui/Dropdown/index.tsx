import React, { useState } from "react"
import { Box, BoxTypes } from "../Box"
import theme from "constants/theme"
import { styled } from "styled-components"
import useHandleClickOutside from 'hooks/useHandleClickOutside'
import { FadeIn } from "../Box/TransitionedBox"

export type DropdownRenderProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type DropdownProps = {
  dropdownContent: (props: DropdownRenderProps) => React.ReactElement
  render: (props: DropdownRenderProps) => React.ReactElement
} & BoxTypes


const DropdownWrapper = styled(FadeIn)<{ open: boolean }>`
  ${({ theme, open }) => `
    animation-delay: 0s;
    transition: all .2s ease-out;
    transform: translateY(-20px);
    opacity: 0;
    max-height: 350px;
    overflow-x: scroll;

    ${open && `
      opacity: 1;
      transform: translateY(0);
    `}

    .Mui-selected {
      background-color: ${theme.colors.ivy300} !important;
      color: ${theme.colors.brandGreen} !important;
      
      &:hover {
        background-color: ${theme.colors.ivy300} !important;
        opacity: .8;
      }
    }
  `}
`

const Dropdown = ({ dropdownContent, render, ...props }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const ref = useHandleClickOutside({
    onClickOutside: () => {
      setOpen(false);
    },
  });

  return (
    <Box ref={ref} onClick={() => setOpen(!open)} position="relative" {...props}>
      {render({ open, setOpen })}
      {open ? (
        <DropdownWrapper
          open={open}
          position="absolute"
          top="82px"
          bgcolor={theme.colors.white}
          borderRadius="24px"
          p="32px 16px"
          left="0"
          boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.12)"
          flexDirection="column"
          minWidth="200px"
          width={{ xs: '100%', md: 'auto' }}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {dropdownContent({ open, setOpen })}
        </DropdownWrapper>
        )
        : null
      }
    </Box>
  )
}

export default Dropdown;