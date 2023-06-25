type ButtonProps = {} & React.ComponentPropsWithRef<"button">



const Button = ({ ...props }: ButtonProps): React.ReactElement => (
  <button {...props} />
)

export default Button;