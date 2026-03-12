import { StyleSheet } from "react-native";

export const createHomeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.xl,
      gap: theme.spacing.xl,
      backgroundColor: theme.colors.background,
      alignItems: "center",
    },

    hero: {
      alignItems: "center",
      maxWidth: 600,
      gap: theme.spacing.md,
    },

    heroTitle: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      fontFamily: theme.typography.fontFamily.heading,
      textAlign: "center",
    },

    heroSubtitle: {
      fontSize: theme.typography.fontSize.md,
      color: theme.colors.textMuted,
      textAlign: "center",
      lineHeight: 24,
      maxWidth: 500,
    },

    themeSection: {
      alignItems: "center",
      gap: theme.spacing.md,

      padding: theme.spacing.lg,

      borderRadius: theme.radius.lg,

      borderWidth: 1,
      borderColor: theme.colors.border,

      backgroundColor: theme.colors.surface,

      ...theme.shadows.sm,
    },

    sectionTitle: {
      fontSize: theme.typography.fontSize.lg,
      fontWeight: theme.typography.fontWeight.medium,
      color: theme.colors.text,
    },

    navigation: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.spacing.md,
      justifyContent: "center",
    },
  });