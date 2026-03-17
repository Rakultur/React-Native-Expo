import { Theme } from "./types";

export const lightTheme: Theme = {
    // =========================
    // COLORS
    // =========================
    colors: {
        // Base
        background: "#F3F4F4", // El blanco muy pálido como fondo principal, da amplitud y limpieza.
        foreground: "#1F2937", // El gris muy oscuro como texto principal, para un alto contraste sobre el fondo claro.

        // Brand / Primary (Usaremos el frambuesa/magenta como color principal)
        primary: "#A8557A", // El tono frambuesa/magenta profundo como color primario.
        primaryForeground: "#FFFFFF", // Texto blanco sobre el color primario.

        // Secondary (Usaremos el borgoña/púrpura oscuro)
        secondary: "#6B2136", // El borgoña/púrpura oscuro como color secundario.
        secondaryForeground: "#FFFFFF", // Texto blanco sobre el color secundario.

        // UI surfaces
        card: "#FFFFFF", // Tarjetas blancas para mantener la limpieza y el contraste.
        cardForeground: "#1F2937", // Texto oscuro en las tarjetas.

        // Borders & Dividers
        border: "#E5E7EB", // Un gris muy pálido para bordes, para que sean sutiles. (Interpolado).
        divider: "#D1D5DB", // Un gris un poco más oscuro para divisores. (Interpolado).

        // States
        success: "#10B981", // Un verde limpio y brillante.
        warning: "#F59E0B", // Un naranja/ámbar cálido para advertencias.
        error: "#EF4444",   // Un rojo directo y claro.
        info: "#007AFF",    // Un azul clásico y limpio para información. (Podríamos considerar usar primary si queremos más calidez).

        // Text hierarchy
        text: "#1F2937", // El gris muy oscuro principal.
        textSecondary: "#6B2136", // Usamos el color secundario (borgoña) para texto secundario, dándole carácter.
        textMuted: "#9CA3AF", // Un gris neutro para texto atenuado. (Interpolado).
        textDisabled: "#A0A0A0", // Un gris más claro para texto deshabilitado. (Interpolado).

        // Inputs
        inputBackground: "#FFFFFF", // Fondo blanco para inputs.
        inputBorder: "#A8557A", // Borde con el color primario (frambuesa) para destacar.
        inputPlaceholder: "#9CA3AF", // Color de placeholder en un gris neutro.

        // Interaction layers (REEMPLAZA overlays sueltos)
        interaction: {
            hover: "rgba(168, 85, 122, 0.08)", // Hover con el color primario y baja opacidad.
            focus: "rgba(168, 85, 122, 0.16)", // Focus con más opacidad del color primario.
            pressed: "rgba(168, 85, 122, 0.24)", // Pressed con aún más opacidad del color primario.
        },

        // Disabled
        backgroundDisabled: "#F3F4F4", // Fondo claro para elementos deshabilitados, pero con texto atenuado.
        foregroundDisabled: "#9CA3AF", // Texto en gris neutro para elementos deshabilitados.
    },

    // =========================
    // OPACITY SYSTEM
    // =========================
    opacity: {
        disabled: 0.5,
        hover: 0.8,
        pressed: 0.6,
        focus: 0.7,
    },

    // =========================
    // SPACING
    // =========================
    spacing: (v: number) => v * 8,

    spacingValues: {
        xxs: 4,
        xs: 8,
        sm: 12,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
    },

    // =========================
    // BORDER RADIUS
    // =========================
    borderRadius: {
        none: 0,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 24,
        full: 999,
    },

    // =========================
    // BORDERS
    // =========================
    borders: {
        width: {
            thin: 1,
            thick: 2,
        },
    },

    // =========================
    // TYPOGRAPHY
    // =========================
    typography: {
        fontFamily: {
            regular: "System",
            medium: "System",
            bold: "System",
        },

        fontSize: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 22,
            "2xl": 26,
            "3xl": 32,
        },

        lineHeight: {
            xs: 16,
            sm: 20,
            md: 24,
            lg: 28,
            xl: 34,
        },

        fontWeight: {
            regular: "400",
            medium: "500",
            bold: "700",
        },

        letterSpacing: {
            tight: -0.5,
            normal: 0,
            wide: 0.5,
        },
    },

    // =========================
    // SHADOWS
    // =========================
    shadows: {
        sm: {
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
        },
        md: {
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 4,
        },
        lg: {
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 16,
            elevation: 8,
        },
    },

    // =========================
    // Z-INDEX
    // =========================
    zIndex: {
        base: 0,
        dropdown: 10,
        modal: 100,
        toast: 1000,
    },

    // =========================
    // MOTION (mejor que transitions)
    // =========================
    motion: {
        duration: {
            fast: 100,
            normal: 200,
            slow: 400,
        },
    },

    // =========================
    // LAYOUT
    // =========================
    layout: {
        container: {
            padding: 16,
            maxWidth: 1200,
        },
    },

    // =========================
    // COMPONENT TOKENS
    // =========================
    components: {
        button: {
            height: 48,
            borderRadius: 8,
            paddingHorizontal: 16,
            fontSize: 16,
            fontWeight: "500",
        },

        input: {
            height: 48,
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 12,
            fontSize: 16,
        },

        card: {
            padding: 16,
            borderRadius: 12,
        },

        modal: {
            borderRadius: 16,
            padding: 20,
            maxWidth: 500,
        },
    },

    // =========================
    // VARIANTS (CLAVE PARA FRAMEWORK)
    // =========================
    variants: {
        button: {
            primary: {
                backgroundColor: "primary",
                textColor: "primaryForeground",
            },
            secondary: {
                backgroundColor: "secondary",
                textColor: "secondaryForeground",
            },
            ghost: {
                backgroundColor: "transparent",
                textColor: "primary",
            },
        },
    },

    // =========================
    // SIZES
    // =========================
    sizes: {
        icon: {
            sm: 16,
            md: 24,
            lg: 32,
        },
    },

    // =========================
    // ACCESSIBILITY
    // =========================
    accessibility: {
        focusRing: {
            width: 2,
            color: "#3498db",
        },
    },
};