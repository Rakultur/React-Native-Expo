import { StyleSheet } from "react-native";
import { Theme } from "../../../themes/types";

export const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: 8,
            backgroundColor: theme.colors.background,
            padding: 10,
        },

        button: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 6,
        },

        buttonActive: {
            backgroundColor: theme.colors.primary,
        },

        buttonInactive: {
            backgroundColor: "#ccc",
        },

        text: {
            color: theme.colors.text,
        },
    });