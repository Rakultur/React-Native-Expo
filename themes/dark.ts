import { Theme } from "./types";

export const darkTheme: Theme = {
  // COLORS
  colors: {
    background: "#222222",
    foreground: "#2D3748",

    white: "#FFFFFF",
    black: "#000000",

    primary: "#1A1A1A",
    primaryForeground: "#FFFFFF",

    secondary: "#222222",
    secondaryForeground: "#2D3748",

    blue: "#4299E1",
    blueForeground: "#FFFFFF",

    green: "#38A169",
    greenForeground: "#FFFFFF",

    red: "#E53E3E",
    redForeground: "#FFFFFF",

    yellow: "#D69E2E",
    yellowForeground: "#2D3748",

    purple: "#805AD5",
    purpleForeground: "#FFFFFF",

    cyan: "#319795",
    cyanForeground: "#FFFFFF",

    // Card
    card: "#FFFFFF",
    cardForeground: "#2D3748",

    border: "#A0AEC0",
    divider: "#E2E8F0",

    // States
    success: "#38A169",
    warning: "#D69E2E",
    error: "#E53E3E",
    info: "#4299E1",

    gray50: "#F7FAFC",
    gray100: "#EDF2F7",
    gray200: "#E2E8F0",
    gray300: "#CBD5E0",
    gray400: "#A0AEC0",
    gray500: "#718096",
    gray600: "#4A5568",
    gray700: "#2D3748",
    gray800: "#1A202C",
    gray900: "#171923",

    // Text
    text: "#2D3748",
    textSecondary: "#4A5568",
    textMuted: "#718096",
    textDisabled: "#A0AEC0",

    // Inputs
    inputBackground: "#FFFFFF",
    inputBorder: "#4A5568",
    inputPlaceholder: "#718096",

    // Interaction
    interaction: {
      hover: "rgba(74, 85, 104, 0.08)",
      focus: "rgba(74, 85, 104, 0.16)",
      pressed: "rgba(74, 85, 104, 0.24)",
    },

    // Disabled
    backgroundDisabled: "#E2E8F0",
    foregroundDisabled: "#A0AEC0",
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

  // MOTION
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
