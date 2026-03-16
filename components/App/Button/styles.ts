import { StyleSheet } from "react-native";

export const createButtonStyles = (theme: any) =>
  StyleSheet.create({

    base: {
      borderRadius: theme.radius.md,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: theme.spacing.lg,
    },

    content: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },

    text: {
      fontSize: theme.typography.fontSize.md,
      fontWeight: theme.typography.fontWeight.medium,
      fontFamily: theme.typography.fontFamily.body,
    },

    primary: {
      backgroundColor: theme.colors.primary,
    },

    secondary: {
      backgroundColor: theme.colors.secondary,
    },

    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },

    ghost: {
      backgroundColor: "transparent",
    },

    text_primary: {
      color: theme.colors.text,
    },

    text_secondary: {
      color: theme.colors.text,
    },

    text_outline: {
      color: theme.colors.primary,
    },

    text_ghost: {
      color: theme.colors.textMuted,
    },

    sm: {
      height: 36,
      paddingHorizontal: theme.spacing.md,
    },

    md: {
      height: 44,
      paddingHorizontal: theme.spacing.lg,
    },

    lg: {
      height: 52,
      paddingHorizontal: theme.spacing.xl,
    },

    fullWidth: {
      width: "100%",
    },

  });
