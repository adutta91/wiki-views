import { styled } from "styled-components";

type ButtonProps = {
  type?: string;
} & React.ComponentPropsWithRef<"button">

const StyledButton = styled.button`
  ${({ theme }) => `
    background-color: ${theme.colors.brandGreen};
    border-radius: 100px;
    border: none;
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 16px;
    padding: 12px 24px;
    transition: all .2s ease-out;
    width: 100%;
    
    &:hover {
      box-shadow: 0 2px 10px -2px ${theme.colors.brandGreen};
    }
  `}
`

const Button = ({ ...props }: ButtonProps): React.ReactElement => (
  <StyledButton {...props} />
)

export default Button;