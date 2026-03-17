import { Theme } from "./types";

export const customTheme: Theme = {

    // =========================
    // COLORS
    // =========================
    colors: {
        // Base
        background: "#F1F6F9", // El blanco pálido/azul hielo como fondo principal, da una sensación de amplitud y calma.
        foreground: "#2D3748", // El azul marino oscuro como texto principal, para un alto contraste sobre el fondo claro.

        // Brand / Primary (Usaremos el azul grisáceo medio como color principal)
        primary: "#4A5568", // El azul grisáceo medio como color primario.
        primaryForeground: "#FFFFFF", // Texto blanco sobre el color primario.

        // Secondary (Usaremos el gris azulado claro)
        secondary: "#A0AEC0", // El gris azulado claro como color secundario.
        secondaryForeground: "#2D3748", // Texto oscuro sobre el color secundario.

        // UI surfaces
        card: "#FFFFFF", // Tarjetas blancas para mantener la limpieza.
        cardForeground: "#2D3748", // Texto oscuro en las tarjetas.

        // Borders & Dividers
        border: "#A0AEC0", // El color secundario (gris azulado claro) para bordes, para una integración suave.
        divider: "#E2E8F0", // Un gris muy pálido para divisores. (Interpolado).

        // States
        success: "#38A169", // Un verde limpio y brillante.
        warning: "#D69E2E", // Un amarillo/naranja cálido para advertencias.
        error: "#E53E3E",   // Un rojo directo y claro.
        info: "#4299E1",    // Un azul más vibrante para información.

        // Text hierarchy
        text: "#2D3748", // El azul marino oscuro principal.
        textSecondary: "#4A5568", // Usamos el color primario (azul grisáceo medio) para texto secundario.
        textMuted: "#718096", // Un gris azulado apagado para texto atenuado. (Interpolado).
        textDisabled: "#A0AEC0", // El color secundario (gris azulado claro) para texto deshabilitado.

        // Inputs
        inputBackground: "#FFFFFF", // Fondo blanco para inputs.
        inputBorder: "#4A5568", // Borde con el color primario (azul grisáceo medio) para destacar.
        inputPlaceholder: "#718096", // Color de placeholder en un gris azulado apagado.

        // Interaction layers (REEMPLAZA overlays sueltos)
        interaction: {
            hover: "rgba(74, 85, 104, 0.08)", // Hover con el color primario y baja opacidad.
            focus: "rgba(74, 85, 104, 0.16)", // Focus con más opacidad del color primario.
            pressed: "rgba(74, 85, 104, 0.24)", // Pressed con aún más opacidad del color primario.
        },

        // Disabled
        backgroundDisabled: "#E2E8F0", // Fondo gris muy pálido para elementos deshabilitados. (Interpolado).
        foregroundDisabled: "#A0AEC0", // Texto gris azulado claro para elementos deshabilitados.
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