import { BoxTypes } from '../Box'
import { Icon, IconProps } from './index'
import theme, { ColorOptions } from 'constants/theme'
import { Encircle } from '../Encircle'

type CircledIconProps = {
  background: ColorOptions
  iconProps?: BoxTypes
  onClick?: () => void
} & IconProps & BoxTypes

export const CircledIcon = ({ background, fill, type, iconProps = {}, ...props }: CircledIconProps): React.ReactElement => (
  <Encircle
    width="48px"
    height="48px"
    background={background}
    {...props}
  >
    <Icon type={type} fill={fill} {...iconProps} />
  </Encircle>
)