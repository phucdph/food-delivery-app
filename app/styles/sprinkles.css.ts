import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
import { vars } from "./vars.css";

const positiveSpace = {
  xs: vars.space["xs"],
  sm: vars.space["sm"],
  md: vars.space["md"],
  lg: vars.space["lg"],
  xl: vars.space["xl"],
  xxl: vars.space["xxl"],
  xxxl: vars.space["xxxl"],
} as const;

const breakpoints = {
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xl: "1280px",
  xs: "480px",
};
const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    xs: { "@media": `(min-width: ${breakpoints["xs"]})` },
    sm: { "@media": `(min-width: ${breakpoints["sm"]})` },
    md: { "@media": `(min-width: ${breakpoints["md"]})` },
    lg: { "@media": `(min-width: ${breakpoints["lg"]})` },
    xl: { "@media": `(min-width: ${breakpoints["xl"]})` },
  },
  defaultCondition: "base",
  dynamicProperties: {
    userSelect: true,
    flexWrap: true,
    display: true,
    cursor: true,
    flexDirection: true,
    alignItems: true,
    justifyContent: true,
    minHeight: true,
    gap: positiveSpace,
    padding: positiveSpace,
    paddingLeft: positiveSpace,
    paddingRight: positiveSpace,
    paddingTop: positiveSpace,
    paddingBottom: positiveSpace,
    width: true,
    height: true,
    fontWeight: vars.fontWeight,
    borderRadius: vars.borderRadius,
    borderTopLeftRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    borderTopRadius: vars.borderRadius,
    borderBottomRadius: vars.borderRadius,
    borderStyle: true,
    borderWidth: vars.space,
    borderLeftWidth: vars.space,
    borderRightWidth: vars.space,
    borderTopWidth: vars.space,
    rowGap: vars.space,
    borderBottomWidth: vars.space,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: true,
    zIndex: true,
    position: true,
    top: vars.space,
    left: vars.space,
    right: vars.space,
    bottom: vars.space,
    verticalAlign: true,
    margin: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
    },
    gridGap: vars.space,
  },
  staticProperties: {
    display: ["block", "flex", "inline-block", "inline-flex"],
    border: {
      "1x": "1px",
      "2x": "2px",
      "3x": "3px",
    },
  },
  shorthands: {
    p: ["padding"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight"],
    m: ["margin"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    size: ["height", "width"],
    mh: ["minHeight"],
    w: ["width"]
  },
});

const interactiveProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    active: { selector: "&:active" },
  },
  defaultCondition: "base",
  dynamicProperties: {
    boxShadow: true,
    color: vars.color,
    backgroundColor: vars.color,
    transform: true,
    transition: true,
    animation: true,
    outline: true,
    borderColor: vars.color,
  },
  shorthands: {
    bg: ["backgroundColor"],
    c: ["color"],
  },
});

export const rainbowSprinkles = createRainbowSprinkles(
  responsiveProperties,
  interactiveProperties
);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
