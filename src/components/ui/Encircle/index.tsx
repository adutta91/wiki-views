import { PropsWithChildren } from 'react'
import { Box, BoxTypes } from '../Box'
import theme, { ColorOptions } from 'constants/theme'

type EncircleProps = {
  background: ColorOptions
  onClick?: () => void
} & BoxTypes & PropsWithChildren

export const Encircle = ({ children, background, ...props }: EncircleProps): React.ReactElement => (
  <Box
    bgcolor={theme.colors[background]}
    borderRadius="50%"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    {children}
  </Box>
)