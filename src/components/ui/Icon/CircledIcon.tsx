import { styled } from 'styled-components'
import { Box, BoxTypes } from '../Box'
import { Icon, IconProps } from './index'
import theme, { ColorOptions } from 'constants/theme'

type CircledIconProps = {
  background: ColorOptions
  iconProps?: BoxTypes
} & IconProps

const CircledIconWrapper = styled(Box)`
  transition: all .2s ease-out;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 4px 15px 0 rgba(0,0,0, 0.25)
  }
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