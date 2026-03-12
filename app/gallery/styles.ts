import { StyleSheet } from "react-native";

export const createGalleryStyles = (theme: any) =>
  StyleSheet.create({
    scrollContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    container: {
      padding: theme.spacing.lg,
      alignItems: "center",
      gap: theme.spacing.lg,
    },

    cardContainer: {
      width: "70%",
      height: theme.layout.componentHeight * 3,

      justifyContent: "center",
      alignItems: "center",

      padding: theme.spacing.lg,
      marginBottom: theme.spacing.lg,

      borderWidth: 1,
      borderColor: theme.colors.border,

      borderRadius: theme.radius.md,

      backgroundColor: theme.colors.surface,

      ...theme.shadows.md,

      overflow: "hidden",
    },

    cardTitle: {
      fontWeight: theme.typography.fontWeight.bold,

      marginBottom: theme.spacing.sm,

      color: theme.colors.text,

      fontFamily: theme.typography.fontFamily.heading,

      fontSize: theme.typography.fontSize.lg,
    },

    componentsContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },

    horizontalScroll: {
      flex: 1,
      width: "100%",
    },

    horizontalContent: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });