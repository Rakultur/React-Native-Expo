export type Theme = {
    // =========================
    // COLORS
    // =========================
    colors: {
        // Base
        background: string;
        foreground: string;

        // Essentials
        white: string;
        black: string;

        // Brand
        primary: string;
        primaryForeground: string;

        secondary: string;
        secondaryForeground: string;

        // System colors
        blue: string;
        blueForeground: string;

        green: string;
        greenForeground: string;

        red: string;
        redForeground: string;

        yellow: string;
        yellowForeground: string;

        purple?: string;
        purpleForeground?: string;

        cyan?: string;
        cyanForeground?: string;

        // UI
        card: string;
        cardForeground: string;

        // Borders
        border: string;
        divider: string;

        // States
        success: string;
        warning: string;
        error: string;
        info: string;

        // Neutral scale
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;

        // Text
        text: string;
        textSecondary: string;
        textMuted: string;
        textDisabled: string;

        // Inputs
        inputBackground: string;
        inputBorder: string;
        inputPlaceholder: string;

        // Interaction
        interaction: {
            hover: string;
            focus: string;
            pressed: string;
        };

        // Disabled
        backgroundDisabled: string;
        foregroundDisabled: string;
    };

    // =========================
    // OPACITY
    // =========================
    opacity: {
        disabled: number;
        hover: number;
        pressed: number;
        focus: number;
    };

    // =========================
    // SPACING
    // =========================
    spacing: (value: number) => number;

    spacingValues: {
        xxs: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };

    // =========================
    // BORDER RADIUS
    // =========================
    borderRadius: {
        none: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        full: number;
    };

    // =========================
    // BORDERS
    // =========================
    borders: {
        width: {
            thin: number;
            thick: number;
        };
    };

    // =========================
    // TYPOGRAPHY
    // =========================
    typography: {
        fontFamily: {
            regular: string;
            medium: string;
            bold: string;
        };

        fontSize: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            "2xl": number;
            "3xl": number;
        };

        lineHeight: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };

        fontWeight: {
            regular: string;
            medium: string;
            bold: string;
        };

        letterSpacing: {
            tight: number;
            normal: number;
            wide: number;
        };
    };

    // =========================
    // SHADOWS
    // =========================
    shadows: {
        sm: object;
        md: object;
        lg: object;
    };

    // =========================
    // Z-INDEX
    // =========================
    zIndex: {
        base: number;
        dropdown: number;
        modal: number;
        toast: number;
    };

    // =========================
    // MOTION
    // =========================
    motion: {
        duration: {
            fast: number;
            normal: number;
            slow: number;
        };
    };

    // =========================
    // LAYOUT
    // =========================
    layout: {
        container: {
            flexDirection: string,
            padding: number;
            maxWidth: number;

        };
    };

    // =========================
    // COMPONENT TOKENS
    // =========================
    components: {
        button: {
            height: number;
            borderRadius: number;
            paddingHorizontal: number;
            fontSize: number;
            fontWeight: string;
        };

        input: {
            height: number;
            borderRadius: number;
            paddingVertical: number;
            paddingHorizontal: number;
            fontSize: number;
        };

        card: {
            padding: number;
            borderRadius: number;
        };

        modal: {
            borderRadius: number;
            padding: number;
            maxWidth: number;
        };
    };

    // =========================
    // VARIANTS
    // =========================
    variants: {
        button: {
            primary: {
                backgroundColor: string;
                textColor: string;
            };
            secondary: {
                backgroundColor: string;
                textColor: string;
            };
            ghost: {
                backgroundColor: string;
                textColor: string;
            };
        };
    };

    // =========================
    // SIZES
    // =========================
    sizes: {
        icon: {
            sm: number;
            md: number;
            lg: number;
        };
    };

    // =========================
    // ACCESSIBILITY
    // =========================
    accessibility: {
        focusRing: {
            width: number;
            color: string;
        };
    };
};