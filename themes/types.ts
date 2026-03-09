export type ThemeType = {

    colors: {
        background: string
        surface: string
        primary: string
        secondary: string
        success: string
        warning: string
        danger: string
        text: string
        textMuted: string
        border: string
    }

    typography: {
        fontFamily: string
        fontSize: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
            xxl: string
        }
        fontWeight: {
            light: number
            normal: number
            medium: number
            bold: number
        }
    }

    spacing: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
    }

    radius: {
        sm: string
        md: string
        lg: string
        xl: string
    }

    shadows: {
        sm: string
        md: string
        lg: string
    }

}