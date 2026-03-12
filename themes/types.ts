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
            xs: number
            sm: number
            md: number
            lg: number
            xl: number
            xxl: number
        }

        fontWeight: {
            light: string
            normal: string
            medium: string
            bold: string
        }
    }

    spacing: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
    }

    radius: {
        sm: number
        md: number
        lg: number
        xl: number
    }

    shadows: {
        sm: any
        md: any
        lg: any
    }

    layout: {
        containerWidth: number
        componentHeight: number
    }

}