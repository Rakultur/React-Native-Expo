import { breakpoints } from "./tokens/breakpoints"
import { layout } from "./tokens/layout"
import { radius } from "./tokens/radius"
import { shadows } from "./tokens/shadows"
import { spacing } from "./tokens/spacing"
import { typography } from "./tokens/typography"
import { zIndex } from "./tokens/zIndex"

export const customTheme = {

  mode: "customTheme",

  colors: {
    background: "#222222",
    surface: "#1f2937",

    border: "#334155",

    text: "#f8fafc",
    textMuted: "#94a3b8",

    primary: "#2563eb",
    secondary: "#38bdf8",

    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#ef4444"
  },

  spacing,
  radius,
  shadows,
  typography,
  breakpoints,
  zIndex,
  layout

}