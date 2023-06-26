import theme, { ColorOptions } from 'constants/theme';
import { Box, BoxTypes } from '../Box'
import {
  CalendarIcon,
  ListIcon,
  PinSolid,
  PinOutline,
  ChevronLeft,
  ChevronRight,
} from './icons'

const ICON_TYPES = {
  calendar: CalendarIcon,
  list: ListIcon,
  pinSolid: PinSolid,
  pinOutline: PinOutline,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
}

export * from './CircledIcon'

export type IconProps = {
  type: keyof typeof ICON_TYPES,
  fill?: ColorOptions
} & BoxTypes;

export const Icon = ({ type, fill, ...props }: IconProps): React.ReactElement => {
  const IconComponent = ICON_TYPES[type]

  return (
    <Box color={fill && theme.colors[fill]} {...props}>
      <IconComponent />
    </Box>
  )
}