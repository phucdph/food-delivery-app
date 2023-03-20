import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./styles/vars.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontSize: 14,
  fontFamily: vars.fontFamily.body,
  background: vars.color.gray100
});

globalStyle("input", {
  border: '1px solid rgb(203 213 225)',
  display: 'block',
  paddingTop: "8px", 
  paddingBottom: "8px", 
  borderRadius: vars.borderRadius.xl
});
