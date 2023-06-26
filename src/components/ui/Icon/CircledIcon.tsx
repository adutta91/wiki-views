import { styled } from 'styled-components'
import { Box, BoxTypes } from '../Box'
import { Icon, IconProps } from './index'
import theme, { ColorOptions } from 'constants/theme'

type CircledIconProps = {
  background: ColorOptions
  iconProps?: BoxTypes
} & IconProps

const CircledIconWrapper = styled(Box)`

`

export const CircledIcon = ({ background, fill, type, iconProps = {}, ...props }: CircledIconProps): React.ReactElement => (
  <CircledIconWrapper
    bgcolor={theme.colors[background]}
    borderRadius="50%"
    alignItems="center"
    justifyContent="center"
    width="48px"
    height="48px"
    {...props}
  >
    <Icon type={type} fill={fill} {...iconProps} />
  </CircledIconWrapper>
)