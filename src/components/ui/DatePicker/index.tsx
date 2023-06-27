import React from "react"
import { Box, BoxTypes } from "../Box"
import theme from "constants/theme"
import { styled } from "styled-components"
import { Icon } from "../Icon"
import InputGroup from "../InputGroup"
import { CircledIcon } from "../Icon"
import Dropdown from "../Dropdown"
import { DateCalendar } from "@mui/x-date-pickers"
import dayjs from "dayjs"

type DatePickerProps = {
  label: React.ReactNode
  value?: string | number
  onSelect: (value: string) => void
} & BoxTypes

const ChevronIcon = styled(Icon)<{ open: boolean }>`
  ${({ open }) => `
    margin-left: 6px;
    transition: all .2s ease-out;

    ${open && `transform: rotate(180deg);`}
  `}
`

const DatePicker = ({ label, value, onSelect, ...props }: DatePickerProps) => {
  return (
    <Dropdown
      dropdownContent={({ setOpen }) => (
        <>
          <DateCalendar
            defaultValue={dayjs(value)}
            onChange={val => {
              setOpen(false)
              onSelect(val?.format('YYYY/MM/DD') || '')
            }}
          />
        </>
      )}
      render={({ open, setOpen }) => (
        <InputGroup
          onClick={() => setOpen(!open)}
          cursor="pointer"
          icon={<CircledIcon type="calendar" fill="brandGreen" background="avocadoGreen" />}
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
          <Box flex="1">{value}</Box>
        </InputGroup>
      )}
      {...props}
    />
  )
}

export default DatePicker;