import { StyleSheet } from "react-native";
import { Theme } from "../../themes/types";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacingValues.md,
    },
    title: {
      fontSize: theme.typography.fontSize.xl,
      color: theme.colors.white,
      marginBottom: theme.spacingValues.sm,
    },
    card: {
      backgroundColor: theme.colors.card,
      padding: theme.spacingValues.sm,
      borderRadius: theme.borderRadius.md,
      marginBottom: theme.spacingValues.sm,
    },
    match: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.md,
    },
    league: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.fontSize.sm,
    },
  });
