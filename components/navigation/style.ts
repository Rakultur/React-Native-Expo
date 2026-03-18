import { StyleSheet } from "react-native";
import { Theme } from "../../themes/types";

export const createStyles = (theme: Theme, isMobile: boolean) =>
  StyleSheet.create({
    sidebar: {
      position: isMobile ? "absolute" : "relative",

      bottom: isMobile ? 0 : undefined,
      left: 0,

      width: isMobile ? "100%" : 150,
      height: isMobile ? 70 : "100%",

      flexDirection: isMobile ? "row" : "column",

      justifyContent: "space-around",
      alignItems: "center",

      backgroundColor: theme.colors.secondary,
      borderTopWidth: isMobile ? 1 : 0,
      borderColor: "#ccc",
    },

    itemsContainer: {
      flexDirection: isMobile ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
    },

    link: {
      padding: 10,
      borderRadius: 10,
    },

    activeItem: {
      backgroundColor: theme.colors.secondaryForeground,
      borderRadius: 12,
      padding: 10,
    },

    title: {
      display: isMobile ? "none" : "flex",
      color: theme.colors.secondaryForeground,
      fontSize: 22,
      marginBottom: 20,
    },
  });