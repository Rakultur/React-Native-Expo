import { StyleSheet } from "react-native";
import { Theme } from "../../themes/types";

export const createStyles = (theme: Theme, isMobile: boolean) =>
  StyleSheet.create({
    // Container principal de la barra de navegación
    /*container: {
      backgroundColor: theme.colors.primary,

      flexDirection: isMobile ? "row" : "column",

      width: isMobile ? "100%" : 80,
      height: isMobile ? 70 : "100%",

      position: isMobile ? "absolute" : "relative",
      bottom: isMobile ? 0 : undefined,
      left: 0,

      borderTopWidth: isMobile ? 1 : 0,
      borderRightWidth: isMobile ? 0 : 1,

      borderColor: theme.colors.border,
      zIndex: theme.zIndex.base,
    }, */

    Container: {
      width: 150,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primary,
    },

    title: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.lg,
      textAlign: "center",
      marginVertical: theme.spacingValues.md,
    },

    ContainerMenu: {
      flex: 1,
    },

    item: {
      padding: theme.spacingValues.sm,
      borderRadius: theme.borderRadius.md,
    },

    activeItem: {
      padding: theme.spacingValues.sm,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.primary,
    },
  });
