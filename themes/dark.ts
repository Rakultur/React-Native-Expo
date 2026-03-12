import { breakpoints } from "./tokens/breakpoints"
import { colors } from "./tokens/colors"
import { layout } from "./tokens/layout"
import { radius } from "./tokens/radius"
import { shadows } from "./tokens/shadows"
import { spacing } from "./tokens/spacing"
import { typography } from "./tokens/typography"
import { zIndex } from "./tokens/zIndex"

export const darkTheme = {

    mode: "dark",

    colors: {
        background: "#0f172a",
        surface: "#1e293b",
        border: "#334155",
        text: "#f1f5f9",
        textMuted: "#94a3b8",

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