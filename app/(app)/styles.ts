import { StyleSheet } from "react-native";
import { Theme } from "../../themes/types";

export const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },

        content: {
            padding: 20,
        },

        title: {
            fontSize: 28,
            fontWeight: "bold",
            color: theme.colors.text,
            marginBottom: 10,
        },

        subtitle: {
            fontSize: 16,
            color: theme.colors.text,
            opacity: 0.7,
        },

        card: {
            marginTop: 20,
            padding: 16,
            borderRadius: 12,
            backgroundColor: theme.colors.primary,
        },

        cardText: {
            color: theme.colors.background,
            fontWeight: "600",
        },
    });