import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "500px",
    md: "780px",
    lg: "1280px",
    xl: "1920px",
  },

  fonts: {
    main: "Quicksand, sans-serif",
  },

  fontSizes: {
    "2xs": "0.5rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  colors: {
    blueGradient: {
      500: "linear-gradient(122deg, rgba(10,0,176,1) 0%, rgba(88,47,242,1) 43%, rgba(0,255,241,1) 100%)",
    },
  },
});
