import { StyleSheet } from "react-native";
import { Theme } from "../../themes/types";

export const createStyles = (theme: Theme, isMobile: boolean) =>
  StyleSheet.create({
    Container: {
      backgroundColor: theme.colors.background,
      width: isMobile ? "100%" : 220,
      alignItems: "center",
      paddingVertical: theme.spacingValues.md,
      borderRightWidth: isMobile ? 0 : 1,
      borderBottomWidth: isMobile ? 1 : 0,
      borderColor: theme.colors.border,
    },

    title: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.xl,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: theme.spacingValues.lg,
      marginTop: theme.spacingValues.xl,
    },

    ContainerMenu: {
      flex: 1,
      flexDirection: "column",
      width: "100%",
      paddingHorizontal: theme.spacingValues.sm,
    },

    item: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: theme.spacingValues.sm,
      paddingHorizontal: theme.spacingValues.md,
      borderRadius: theme.borderRadius.md,
      marginVertical: theme.spacingValues.xs,
      width: "100%",
    },

    itemText: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.fontSize.md,
      marginLeft: theme.spacingValues.md,
    },

    activeItem: {
      backgroundColor: theme.colors.interaction.focus,
      paddingVertical: theme.spacingValues.sm,
      paddingHorizontal: theme.spacingValues.md,
      borderRadius: theme.borderRadius.md,
      marginVertical: theme.spacingValues.xs,
      width: "100%",
    },

    activeItemText: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.md,
      fontWeight: "600",
      marginLeft: theme.spacingValues.md,
    },
  });
