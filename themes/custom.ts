import { ThemeType } from "./types"

export const customTheme: ThemeType = {

    colors: {
        background: "#020617",
        surface: "#0f172a",
        primary: "#a855f7",
        secondary: "#14b8a6",
        success: "#22c55e",
        warning: "#eab308",
        danger: "#ef4444",
        text: "#e2e8f0",
        textMuted: "#94a3b8",
        border: "#1e293b"
    },

    typography: {
        fontFamily: "Poppins, sans-serif",
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
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px"
    },

    shadows: {
        sm: "0 0 6px rgba(168,85,247,0.3)",
        md: "0 0 12px rgba(168,85,247,0.4)",
        lg: "0 0 20px rgba(168,85,247,0.5)"
    }

}