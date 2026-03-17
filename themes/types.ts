export type Theme = {
    // =========================
    // COLORS
    // =========================
    colors: {
        background: string;
        foreground: string;

        primary: string;
        primaryForeground: string;

        secondary: string;
        secondaryForeground: string;

        card: string;
        cardForeground: string;

        border: string;
        divider: string;

        success: string;
        warning: string;
        error: string;
        info: string;

        text: string;
        textSecondary: string;
        textMuted: string;
        textDisabled: string;

        inputBackground: string;
        inputBorder: string;
        inputPlaceholder: string;

        interaction: {
            hover: string;
            focus: string;
            pressed: string;
        };

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