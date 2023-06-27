import theme, { ColorOptions } from 'constants/theme';
import { Box, BoxTypes } from '../Box'
import {
  CalendarIcon,
  ListIcon,
  PinSolid,
  PinOutline,
  ChevronLeft,
  ChevronRight,
  Globe,
  ChevronDown,
} from './icons'

const ICON_TYPES = {
  calendar: CalendarIcon,
  list: ListIcon,
  pinSolid: PinSolid,
  pinOutline: PinOutline,
  globe: Globe,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
}

export * from './CircledIcon'

export type IconProps = {
  type: keyof typeof ICON_TYPES,
  fill?: ColorOptions
  onClick?: (e: React.MouseEvent) => void
} & BoxTypes;

export const Icon = ({ type, fill, ...props }: IconProps): React.ReactElement => {
  const IconComponent = ICON_TYPES[type]

  return (
    <Box color={fill && theme.colors[fill]} {...props}>
      <IconComponent />
    </Box>
  )
}