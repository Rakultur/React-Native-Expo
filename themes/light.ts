import { breakpoints } from "./tokens/breakpoints"
import { colors } from "./tokens/colors"
import { layout } from "./tokens/layout"
import { radius } from "./tokens/radius"
import { shadows } from "./tokens/shadows"
import { spacing } from "./tokens/spacing"
import { typography } from "./tokens/typography"
import { zIndex } from "./tokens/zIndex"

export const lightTheme = {

    mode: "light",

    colors: {
        background: "#ffffff",
        surface: "#f8fafc",
        border: "#e2e8f0",
        text: "#0f172a",
        textMuted: "#64748b",

        primary: colors.primary,
        secondary: colors.secondary,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger
    },

    spacing,
    radius,
    shadows,
    typography,
    breakpoints,
    zIndex,
    layout

}