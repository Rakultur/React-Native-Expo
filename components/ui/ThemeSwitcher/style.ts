import { StyleSheet } from "react-native";
import { Theme } from "../../../themes/types";

export const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: 8,
            backgroundColor: theme.colors.secondaryForeground,
            padding: 10,
            borderRadius: 10,
        },

        button: {
            backgroundColor: theme.colors.secondary,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 6,
        },

        buttonActive: {
            backgroundColor: theme.colors.secondary,
        },

        buttonInactive: {
            backgroundColor: theme.colors.primary,
        },

        text: {
            color: theme.colors.secondaryForeground,
        },
    });