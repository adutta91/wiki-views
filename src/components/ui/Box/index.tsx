import {
  BordersProps,
  DisplayProps,
  FlexboxProps,
  GridProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
  borders,
  display,
  flexbox,
  grid,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
} from '@mui/system';
import styled from 'styled-components';

interface Props {
  as?: React.ElementType;
}

export type BoxTypes = Props &
  DisplayProps &
  SpacingProps &
  FlexboxProps &
  GridProps &
  PositionsProps &
  PaletteProps &
  BordersProps &
  ShadowsProps &
  SizingProps &
  TypographyProps & {
    cursor?: 'pointer' | 'auto' | 'default' | 'no-drop' | 'not-allowed';
    pointerEvents?: 'auto' | 'none';
    opacity?: string;
    children?: React.ReactNode;
  };

export const Box = styled.div<BoxTypes>`
  display: flex;
  box-sizing: border-box;
  ${({ as }) => as === 'a' && `cursor: pointer;`}
  ${display}
  ${flexbox}
  ${grid}
  ${sizing}
  ${spacing}
  ${positions}
  ${typography}
  ${palette}
  ${borders}
  ${shadows}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ pointerEvents }) => pointerEvents && `pointer-events: ${pointerEvents};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
`;
