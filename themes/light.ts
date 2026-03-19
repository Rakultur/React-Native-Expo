import { Theme } from "./types";

export const lightTheme: Theme = {
  // COLORS
  colors: {
    background: "#F3F4F4",
    foreground: "#1F2937",

    white: "#FFFFFF",
    black: "#000000",

    primary: "#A8557A",
    primaryForeground: "#FFFFFF",

    secondary: "#6B2136",
    secondaryForeground: "#FFFFFF",

    blue: "#3B82F6",
    blueForeground: "#FFFFFF",

    red: "#DC2626",
    redForeground: "#FFFFFF",

    yellow: "#FBBF24",
    yellowForeground: "#1F2937",

    green: "#22C55E",
    greenForeground: "#FFFFFF",

    // Card
    card: "#FFFFFF",
    cardForeground: "#1F2937",

    // Borders
    border: "#E5E7EB",
    divider: "#D1D5DB",

    // States
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#007AFF",

    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray300: "#D1D5DB",
    gray400: "#9CA3AF",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
    gray900: "#111827",

    // Text
    text: "#1F2937",
    textSecondary: "#6B2136",
    textMuted: "#9CA3AF",
    textDisabled: "#A0A0A0",

    // Inputs
    inputBackground: "#FFFFFF",
    inputBorder: "#A8557A",
    inputPlaceholder: "#9CA3AF",

    // Interaction
    interaction: {
      hover: "rgba(168, 85, 122, 0.08)",
      focus: "rgba(168, 85, 122, 0.16)",
      pressed: "rgba(168, 85, 122, 0.24)",
    },

    // Disabled
    backgroundDisabled: "#F3F4F4",
    foregroundDisabled: "#9CA3AF",
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
