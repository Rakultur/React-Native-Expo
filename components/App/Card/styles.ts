import { StyleSheet } from "react-native";

export const createCardStyles = (theme: any) =>
  StyleSheet.create({

    container: {
      width: "100%",
      borderRadius: theme.radius.lg,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      gap: theme.spacing.md,
    },

    elevated: {
      ...theme.shadows.md,
    },

    outline: {},

    flat: {
      borderWidth: 0,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    title: {
      fontSize: theme.typography.fontSize.lg,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
    },

    content: {
      width: "100%",
    },

    footer: {
      marginTop: theme.spacing.md,
      borderTopWidth: 1,
      borderColor: theme.colors.border,
      paddingTop: theme.spacing.sm,
    },

  });
