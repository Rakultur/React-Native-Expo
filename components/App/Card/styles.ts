import { StyleSheet } from "react-native";

export const createCardStyles = (theme: any) =>
    StyleSheet.create({
        container: {
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

        outline: {
            borderWidth: 1,
            borderColor: theme.colors.border,
        },

        flat: {
            borderWidth: 0,
            backgroundColor: theme.colors.surface,
        },

        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: theme.spacing.sm,
        },

        title: {
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.text,
            fontFamily: theme.typography.fontFamily.heading,
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