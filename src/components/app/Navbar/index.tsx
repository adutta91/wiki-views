import { Box } from 'components/ui/Box'
import { styled } from 'styled-components';

const StyledBox = styled(Box)`
  ${({ theme }) => `
    box-shadow: 0px 2px 0px 0px ${theme.colors.brandGreen}1A;
    background-color: ${theme.colors.white};
  `}
`

const Navbar = () => (
  <StyledBox
    data-testid="navbar"
    width="100%"
    height={{xs: "72px", md: "80px"}}
  />
);

export default Navbar;