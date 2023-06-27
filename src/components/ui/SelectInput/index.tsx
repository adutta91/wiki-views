import React from "react"
import { Box, BoxTypes } from "../Box"
import theme from "constants/theme"
import { styled } from "styled-components"
import { Icon } from "../Icon"
import InputGroup from "../InputGroup"

import Dropdown, { DropdownRenderProps } from "../Dropdown"

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
  return (
    <Dropdown
      dropdownContent={({ setOpen }) => (
        <>
          {options.map(option => (
            <Option key={option.value} onClick={() => {
              setOpen(false)
              onSelect(option.value)
            }}>
              {option.label}
            </Option>
          ))}
        </>
      )}
      render={({ open, setOpen }): React.ReactElement<DropdownRenderProps> => (
        <InputGroup
          onClick={() => setOpen(!open)}
          cursor="pointer"
          icon={icon}
          label={(
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
          )}
          flex="1"
        >
          {value}
        </InputGroup>
      )}
      {...props}
    />
  )
}

export default SelectInput;