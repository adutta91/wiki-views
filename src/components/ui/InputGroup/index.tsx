import React, { PropsWithChildren } from "react"
import { Box, BoxTypes } from "../Box"
import theme from "constants/theme"
import { styled } from "styled-components"

type InputGroupProps = {
  label: React.ReactNode
  icon: React.ReactNode
  onClick: () => void
} & BoxTypes & PropsWithChildren

const Wrapper = styled(Box)`
  ${({ theme }) => `
    transition: all .2s ease-out;

    @media(min-width: ${theme.breakpointsValue.md}px) {
      &:hover {
        background-color: ${theme.colors.neutralGray100};
      }
    }
  `}
`

const InputGroup = ({ label, icon, children, ...props }: InputGroupProps) => {
  return (
    <Wrapper
      borderRadius="100px"
      p="12px 18px 12px 12px"
      alignItems="center"
      height="72px"
      {...props}
    >
      <Box mr="24px">
        {icon}
      </Box>
      <Box flexDirection="column" flex="1">
        <Box
          color={theme.colors.neutralGray500}
          textTransform="uppercase"
          fontSize="12px"
          fontWeight="500"
          alignItems="center"
          mb="6px"
        >
          {label}
        </Box>
        {children}
      </Box>
    </Wrapper>
  )
}

export default InputGroup;