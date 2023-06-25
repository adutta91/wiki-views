const breakpointsValue = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

type Breakpoint = keyof typeof breakpointsValue;

const theme = {
  breakpointsValue,
  breakpoints: {
    keys: Object.keys(breakpointsValue),
    up: (key: string): string =>
      `@media (min-width:${breakpointsValue[key as Breakpoint]}px)`,
  },
  colors: {
    avocadoGreen: "#ECF1E0",
    black: "#000000",
    brandGreen: "#025B4B",
    brandMarigold: "#E68A00",
    ivy300: "#B3CEC9",
    marigold200: "#FAE7CC",
    marigold600: "#BB9A6A",
    neutralGray100: "#F5F7F7",
    neutralGray400: "#D4D8D9",
    neutralGray500: "#A7AAAB",
    neutralGray600: "#737680",
    neutralGray900: "#05090D",
    white: "#FFF",
  }
}

export default theme