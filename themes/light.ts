import { ThemeType } from "./types"

export const lightTheme: ThemeType = {

    colors: {
        background: "#ffffff",
        surface: "#f8fafc",
        primary: "#6366f1",
        secondary: "#06b6d4",
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        text: "#0f172a",
        textMuted: "#64748b",
        border: "#e2e8f0"
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
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 20px rgba(0,0,0,0.15)"
    }

}