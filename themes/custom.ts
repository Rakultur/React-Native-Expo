import { Theme } from "./types";

export const customTheme: Theme = {
  // COLORS
  colors: {
    background: "#f9f9fb",
    foreground: "#2e3035",

    white: "#FFFFFF",
    black: "#000000",

    primary: "#6366f1",
    primaryForeground: "#ffffff",

    secondary: "#10b981",
    secondaryForeground: "#ffffff",

    blue: "#38bdf8",
    blueForeground: "#ffffff",

    green: "#84cc16",
    greenForeground: "#000000",

    red: "#f43f5e",
    redForeground: "#ffffff",

    yellow: "#facc15",
    yellowForeground: "#000000",

    purple: "#a855f7",
    purpleForeground: "#ffffff",

    cyan: "#2dd4bf",
    cyanForeground: "#000000",

    // Card
    card: "#ffffff",
    cardForeground: "#2e3035",

    // Borders
    border: "#e5e7eb",
    divider: "#f3f4f6",

    // States
    success: "#10b981",
    warning: "#facc15",
    error: "#f43f5e",
    info: "#38bdf8",

    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",

    // Text
    text: "#2e3035",
    textSecondary: "#6b7280",
    textMuted: "#9ca3af",
    textDisabled: "#d1d5db",

    // Inputs
    inputBackground: "#f9f9fb",
    inputBorder: "#d1d5db",
    inputPlaceholder: "#9ca3af",

    // Interaction
    interaction: {
      hover: "rgba(100, 102, 241, 0.08)",
      focus: "rgba(100, 102, 241, 0.16)",
      pressed: "rgba(100, 102, 241, 0.24)",
    },

    // Disabled
    backgroundDisabled: "#f3f4f6",
    foregroundDisabled: "#9ca3af",
  },

  // OPACITY SYSTEM
  opacity: {
    disabled: 0.5,
    hover: 0.8,
    pressed: 0.6,
    focus: 0.7,
  },

  // SPACING
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

  // BORDER RADIUS
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    full: 999,
  },

  // BORDERS
  borders: {
    width: {
      thin: 1,
      thick: 2,
    },
  },

  // TYPOGRAPHY
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

  // SHADOWS
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

  // Z-INDEX
  zIndex: {
    base: 0,
    dropdown: 10,
    modal: 100,
    toast: 1000,
  },

  // MOTION (mejor que transitions)
  motion: {
    duration: {
      fast: 100,
      normal: 200,
      slow: 400,
    },
  },

  // LAYOUT
  layout: {
    container: {
      flexDirection: "column",
      padding: 16,
      maxWidth: 1200,
    },
  },

  // COMPONENT TOKENS
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

  // VARIANTS
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

  // SIZES
  sizes: {
    icon: {
      sm: 16,
      md: 24,
      lg: 32,
    },
  },

  // ACCESSIBILITY
  accessibility: {
    focusRing: {
      width: 2,
      color: "#3498db",
    },
  },
};
