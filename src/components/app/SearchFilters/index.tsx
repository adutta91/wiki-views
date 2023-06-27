import { Box } from "components/ui/Box"
import theme from "constants/theme"
import Button from "components/ui/Button/Button"
import SelectInput from "components/ui/SelectInput"
import { CircledIcon } from "components/ui/Icon"
import { styled } from "styled-components"
import countries, { COUNTRY_OPTIONS } from "constants/countries"
import { useArticlesContext } from "contexts/ArticlesContext"
import DatePicker from "components/ui/DatePicker"
import dayjs from "dayjs"

const Divider = styled(Box)`
  ${({ theme }) => `
    height: 100%;
    background-color: #E7EAEB;
    margin: 0 20px;
    width: 1px;

    @media(max-width: ${theme.breakpointsValue.md}px) {
      display: none;
    }
  `}
`

const countryOptions = Object.keys(countries).map(code => ({
  value: code,
  label: countries[code as COUNTRY_OPTIONS]
}))

const numPerPageOptions = [25, 50, 75, 100, 200].map(num => ({
  value: `${num}`,
  label: `${num}`
}))

const SearchFilters = () => {
  const {
    date,
    setDate,
    country,
    numPerPage,
    setCountry,
    setNumPerPage,
    search
  } = useArticlesContext()

  return (
    <Box
      bgcolor={theme.colors.white}
      borderRadius={{ xs: '0', md: "100px" }}
      boxShadow="0px 2px 0px 1px rgba(5, 9, 13, 0.06)"
      mb="24px"
      p="16px"
      justifyContent="space-between"
      flexDirection={{ xs: 'column', md: 'row' }}
      gap="16px"
      height="96px"
      width="100%"
    >
      <DatePicker
        label={"Date"}
        value={dayjs(date).format('MMMM D, YYYY')}
        onSelect={setDate}
        zIndex="3"
        data-testid="date-picker"
      />
      <Divider />
      <SelectInput
        icon={<CircledIcon type="list" fill="brandMarigold" background="marigold200" />}
        label={"Num Results"}
        options={numPerPageOptions}
        value={numPerPage}
        onSelect={(val) => setNumPerPage(parseInt(val))}
        zIndex="2"
        data-testid="num-per-page-picker"
      />
      <Divider />
      <SelectInput
        icon={<CircledIcon type="globe" fill="brandOcean" background="ocean200" />}
        label={"Country"}
        options={countryOptions}
        value={country}
        onSelect={val => setCountry(val as COUNTRY_OPTIONS)}
        data-testid="country-picker"
        zIndex="1"
      />
      <Box flex="1">
        <Button onClick={search}>Search</Button>
      </Box>
    </Box>
  )
}

export default SearchFilters