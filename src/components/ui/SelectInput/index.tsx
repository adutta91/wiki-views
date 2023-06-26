import React, { useState } from "react"
import { Box, BoxTypes } from "../Box"
import theme from "constants/theme"
import { styled } from "styled-components"
import { Icon } from "../Icon"
import useHandleClickOutside from 'hooks/useHandleClickOutside'

type SelectInputProps = {
  label: React.ReactNode
  icon: React.ReactNode
  options: {
    value: string
    label: string
  }[]
  value?: string | number
  onSelect: (value: string) => void
} & BoxTypes

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

const DropdownWrapper = styled(Box)<{ open: boolean }>`
  ${({ open }) => `
    transition: all .2s ease-out;
    transform: translateY(-20px);
    opacity: 0;
    max-height: 300px;
    overflow-x: scroll;

    ${open && `
      opacity: 1;
      transform: translateY(0);
    `}
  `}
`

const Option = styled(Box)`
  ${({ theme }) => `
    cursor: pointer;
    justify-content: center;
    text-align: center;
    transition: all .2s ease-out;
    padding: 12px 0;

    &:hover {
      background-color: ${theme.colors.neutralGray100};
    }
  `}
`

const ChevronIcon = styled(Icon)<{ open: boolean }>`
  ${({ open }) => `
    margin-left: 6px;
    transition: all .2s ease-out;

    ${open && `transform: rotate(180deg);`}
  `}
`

const SelectInput = ({ label, icon, value, options, onSelect, ...props }: SelectInputProps) => {
  const [open, setOpen] = useState(false)

  const ref = useHandleClickOutside({
    onClickOutside: () => {
      setOpen(false);
    },
  });

  return (
    <Wrapper
      borderRadius="100px"
      p="12px"
      onClick={() => setOpen(!open)}
      alignItems="center"
      height="72px"
      cursor="pointer"
      position="relative"
      fontFamily="Poppins, sans-serif"
      ref={ref}
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
          <ChevronIcon type="chevronDown" open={open} />
        </Box>
        {value}
      </Box>
      {options.length && open ? (
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
        >
          {options.map(option => (
            <Option key={option.value} onClick={() => onSelect(option.value)}>
              {option.label}
            </Option>
          ))}
        </DropdownWrapper>
      ) : null}
    </Wrapper>
  )
}

export default SelectInput;