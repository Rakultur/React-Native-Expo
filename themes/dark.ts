import { ThemeType } from "./types"

export const darkTheme: ThemeType = {

    colors: {
        background: "#0f172a",
        surface: "#1e293b",
        primary: "#818cf8",
        secondary: "#22d3ee",
        success: "#4ade80",
        warning: "#fbbf24",
        danger: "#f87171",
        text: "#f1f5f9",
        textMuted: "#94a3b8",
        border: "#334155"
    },

    typography: {
        fontFamily: "Inter, sans-serif",
        fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "20px",
            xl: "24px",
            xxl: "32px"
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700
        }
    },

    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px"
    },

    radius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "20px"
    },

    shadows: {
        sm: "0 1px 2px rgba(0,0,0,0.3)",
        md: "0 4px 8px rgba(0,0,0,0.35)",
        lg: "0 12px 24px rgba(0,0,0,0.45)"
    }

}