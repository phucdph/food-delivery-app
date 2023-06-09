import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    xxxl: "3rem",
    xxl: "2rem",
    lg: "1.25rem",
    md: "1rem",
    sm: "0.75rem",
    xl: "1.5rem",
    xs: "0.5rem",
  },
  color: {
    white: "#fff",
    black: "#0e0e10",
    inherit: "inherit",
    transparent: "transparent",
    slate50: "rgb(248 250 252)",
    slate100: "rgb(241 245 249)",
    slate200: "rgb(226 232 240)",
    slate300: "rgb(203 213 225)",
    slate400: "rgb(148 163 184)",
    slate500: "rgb(100 116 139)",
    slate600: "rgb(71 85 105)",
    slate700: "rgb(51 65 85)",
    slate800: "rgb(30 41 59)",
    slate900: "rgb(15 23 42)",
    gray50: "rgb(249 250 251)",
    gray100: "rgb(243 244 246)",
    gray200: "rgb(229 231 235)",
    gray300: "rgb(209 213 219)",
    gray400: "rgb(156 163 175)",
    gray500: "rgb(107 114 128)",
    gray600: "rgb(75 85 99)",
    gray700: "rgb(55 65 81)",
    gray800: "rgb(31 41 55)",
    gray900: "rgb(17 24 39)",
    yellow50: "#fff9db",
    yellow100: "#fff3bf",
    yellow200: "#ffec99",
    yellow300: "#ffe066",
    yellow400: "#ffd43b",
    yellow500: "#fcc419",
    yellow600: "#fab005",
    yellow700: "#f59f00",
    yellow800: "#f08c00",
    yellow900: "#e67700",
    blue50: "#e7f5ff",
    blue100: "#d0ebff",
    blue200: "#a5d8ff",
    blue300: "#74c0fc",
    blue400: "#4dabf7",
    blue500: "#339af0",
    blue600: "#228be6",
    blue700: "#1c7ed6",
    blue800: "#1971c2",
    blue900: "#1864ab",
    red50: "#fff5f5",
    red100: "#ffe3e3",
    red200: "#ffc9c9",
    red300: "#ffa8a8",
    red400: "#ff8787",
    red500: "#ff6b6b",
    red600: "#fa5252",
    red700: "#f03e3e",
    red800: "#e03131",
    red900: "#c92a2a",
    violet50: "#f3f0ff",
    violet100: "#e5dbff",
    violet200: "#d0bfff",
    violet300: "#b197fc",
    violet400: "#9775fa",
    violet500: "#845ef7",
    violet600: "#7950f2",
    violet700: "#7048e8",
    violet800: "#6741d9",
    violet900: "#5f3dc4",
  },
  borderRadius: {
    lg: "1rem",
    md: "0.5rem",
    sm: "0.25rem",
    xl: "2rem",
    xs: "0.125rem",
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: {
    lg: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xl: "1.25rem",
    xs: "0.75rem",
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "bold",
  }
});
