import { Theme } from "./types";

export const customTheme: Theme = {
  // =========================
  // COLORS
  // =========================
  colors: {
    // Base
    background: "#ffffff",
    foreground: "#000000",

    // Essential
    white: "#FFFFFF",
    black: "#000000",

    // Brand
    primary: "#3498db",
    primaryForeground: "#ffffff",

    secondary: "#2ecc71",
    secondaryForeground: "#ffffff",

    // Primary system colors (alineados a estilo limpio)
    blue: "#3498db",
    blueForeground: "#ffffff",

    green: "#2ecc71",
    greenForeground: "#ffffff",

    red: "#e74c3c",
    redForeground: "#ffffff",

    yellow: "#f1c40f",
    yellowForeground: "#000000",

    // Extra complementario útil (para UI más rica)
    purple: "#9b59b6",
    purpleForeground: "#ffffff",

    cyan: "#1abc9c",
    cyanForeground: "#ffffff",

    // UI surfaces
    card: "#f5f5f5",
    cardForeground: "#000000",

    // Borders
    border: "#e0e0e0",
    divider: "#eeeeee",

    // States
    success: "#2ecc71",
    warning: "#f1c40f",
    error: "#e74c3c",
    info: "#3498db",

    // Extended neutrals (clave para escalabilidad)
    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#eeeeee",
    gray300: "#e0e0e0",
    gray400: "#bdbdbd",
    gray500: "#9e9e9e",
    gray600: "#757575",
    gray700: "#616161",
    gray800: "#424242",
    gray900: "#212121",

    // Text
    text: "#000000",
    textSecondary: "#666666",
    textMuted: "#999999",
    textDisabled: "#cccccc",

    // Inputs
    inputBackground: "#ffffff",
    inputBorder: "#cccccc",
    inputPlaceholder: "#999999",

    // Interaction (ligeramente refinado para consistencia moderna)
    interaction: {
      hover: "rgba(52, 152, 219, 0.08)", // usa primary en vez de negro
      focus: "rgba(52, 152, 219, 0.16)",
      pressed: "rgba(52, 152, 219, 0.24)",
    },

    // Disabled
    backgroundDisabled: "#f0f0f0",
    foregroundDisabled: "#a0a0a0",
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
      flexDirection: "column",
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
